var fs = require("fs"),
    path = require("path"),
    terminal = require("./terminal"),
    child_process = require("child_process"),
    mktemp = require("mktemp"),
    fse = require('fs-extra'),
    spawn = child_process.spawn;

function compileXibs(xibs, bundle_contents, cb) {
    var idx = 0;

    function compileXib(bundle_contents, bundleName, cb) {
	var xibPath = xibs[idx];
	var destDir = path.join(bundle_contents, path.dirname(xibPath));

	// make sure the destDir is there
	try { fs.mkdirSync(destDir); } catch (e) { }

	console.log ("COMPILE-XIB " + xibPath);

	var nibPath = path.join (destDir, path.basename(xibPath, ".xib") + ".nib");
	var nibCompile = spawn("ibtool",
			       ["--errors", "--warnings", "--notices", "--output-format", "human-readable-text", "--compile", nibPath, xibPath],
			       { stdio: 'inherit' });

	nibCompile.on('close', cb);
    }

    function nextXib(code) {
	// if there was an error bail out immediately
	if (code)
	    return cb(code);

	// otherwise move on to the next xib file
	idx ++;
	if (idx >= xibs.length) {
	    return cb(null);
	}

	return compileXib(bundle_contents, nextXib);
    }

    compileXib(bundle_contents, nextXib);
}

function compileStoryboards(boards, bundle_contents, bundleName, cb) {
    var idx = 0;

    function compileStoryboard(bundle_contents, bundleName, cb) {
	var boardPath = boards[idx];
	var destDir = path.join(bundle_contents, path.dirname(boardPath));

	// make sure the destDir is there
	try { fs.mkdirSync(destDir); } catch (e) { }

	console.log ("COMPILE-STORYBOARD " + boardPath);

	var boardCompile = spawn("ibtool",
				 ["--errors", "--warnings", "--notices",
				  "--module", bundleName,
				  "--auto-activate-custom-fonts",
				  "--target-device", "iphone", /* XXX */
				  "--target-device", "ipad", /* XXX */
				  "--minimum-deployment-target", "9.1", /* XXX */
				  "--output-format", "human-readable-text",
				  "--compilation-directory", destDir,
				  boardPath],
				 { stdio: 'inherit' });

	boardCompile.on('close', cb);
    };

    function nextStoryboard(code) {
	// if there was an error bail out immediately
	if (code)
	    return cb(code);

	// otherwise move on to the next storyboard file
	idx ++;
	if (idx >= boards.length) {
	    return cb(null);
	}

	return compileStoryboard(bundle_contents, bundleName, nextStoryboard);
    };

    compileStoryboard(bundle_contents, bundleName, nextStoryboard);
}

function getBundleName(proj_config) {
    var bundleName = proj_config.bundleName;
    if (!bundleName && proj_config.bundleIdentifier) {
	var split_ident = proj_config.bundleIdentifier.split('.');
	if (split_ident.length > 1)
	    bundleName = split_ident[split_ident.length - 1];
    }
    if (!bundleName)
	bundleName = proj_config.projectName;

    return bundleName;
}

function writePlist(plist_contents, plist_path, format, cb) {
    var tmpdir = process.env['TMPDIR'] || '/tmp';

    mktemp.createFile(path.join(tmpdir, 'XXX.tmp'),  function(err, path) {
	fs.writeFile(path, JSON.stringify(plist_contents), function (err) {
	    var plutil = spawn('plutil', ['-convert', format, '-o', plist_path, path],
			       { stdio: ['pipe', process.stdout, process.stderr] });
	    plutil.on('exit', cb);
	});
    });
}

function findEjsInPATH() {
  var paths = process.env['PATH'].split(':');

  for (var i = 0, e = paths.length; i < e; i ++) {
    var ejs_path = path.resolve(paths[i], "ejs");
    if (fs.existsSync(ejs_path)) {
	//console.log("found ejs at "+ ejs_path);
	return ejs_path;
    }
  }

  // fall back to the one we should included in ../node_modules
  var builtin_ejs_path = path.resolve(path.dirname (fs.realpathSync(process.argv[1])), "..", "node_modules", "pirouette-toolchain-darwin-x64", "bin", "ejs");
  if (fs.existsSync(builtin_ejs_path))
    return builtin_ejs_path;

  throw new Error("could not locate ejs in your PATH");
}

function compileScripts(projectType, scriptList, outFile, cb) {

  var ejs_path = findEjsInPATH();

  var binding_path = path.resolve(path.dirname (fs.realpathSync(process.argv[1])), "..", "node_modules", "pirouette-bindings-darwin", "bindings");

  var module_path = path.resolve(path.dirname (fs.realpathSync(process.argv[1])), "..", "node_modules", "pirouette-toolchain-darwin-x64", "lib");

  // XXX(toshok) we need a buildType, I think?
  if (projectType === 'ios')
    projectType = 'sim';

  var args = ["--target", projectType, "-o", outFile, "--moduledir", module_path, "-I", "pirouette=" + binding_path].concat(scriptList);

  var ejsCompile = spawn(ejs_path, args, { stdio: 'inherit' });

  ejsCompile.on('close', cb);
}

function collectXibs(config) {
  var xibs = [];
  if (config.mainXib)
    xibs.unshift (config.mainXib);

  if (config.additionalXibs)
    xibs = xibs.concat(config.additionalXibs);

  return xibs;
}

function collectStoryboards(config) {
  var boards = [];
  if (config.mainStoryboard)
    boards.unshift (config.mainStoryboard);

  if (config.launchStoryboard)
    boards.unshift (config.launchStoryboard);

  if (config.additionalStoryboards)
    boards = boards.concat(config.additionalStoryboards);

  return boards;
}

// pre = true if pre-order (dir_cb is invoked before children), false if post-order (dir_cb is invoked after children)
function traverseDir(p, pre, dir_cb, file_cb) {
  var stats = fs.statSync(p);
  if (stats.isDirectory()) {
    if (pre) dir_cb(p);

    var paths = fs.readdirSync(p);
    for (var i = 0, e = paths.length; i < e; i ++) {
	var subpath = path.join (p, paths[i]);
	traverseDir(subpath, pre, dir_cb, file_cb);
    }

    if (!pre) dir_cb(p);
  }
  else {
    file_cb(p);
  }
}

function ensureDir(p) {
    fse.ensureDirSync(p);
    return p;
}

function rmDir(dir) {
    fse.removeSync(dir);
}

function getUserHome() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}


exports.getBundleName = getBundleName;
exports.writePlist = writePlist;
exports.collectXibs = collectXibs;
exports.compileXibs = compileXibs;
exports.collectStoryboards = collectStoryboards;
exports.compileStoryboards = compileStoryboards;
exports.compileScripts = compileScripts;
exports.traverseDir = traverseDir;
exports.rmDir = rmDir;
exports.ensureDir = ensureDir;
exports.getUserHome = getUserHome;
