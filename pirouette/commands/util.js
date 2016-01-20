var fs = require("fs"),
    path = require("path"),
    terminal = require("./terminal"),
    child_process = require("child_process"),
    spawn = child_process.spawn;

function terminalBold()
{
  if (process.stderr.isTTY)
    return terminal.ANSIStyle("bold");
  else
    return "";
}

function terminalReset()
{
  if (process.stderr.isTTY)
    return terminal.ANSIStyle("reset");
  else
    return "";
}

function findConfigJson(starting_cwd) {
  var cwd;
  var new_cwd = process.cwd();
  do {
    cwd = new_cwd;
    var candidate = path.join (cwd, "config.json");
    if (fs.existsSync(candidate)) {
      console.log ("found config.json!");
      return candidate;
    }
    new_cwd = path.dirname(cwd);
  } while (cwd !== new_cwd);

  return null;
}

function compileXib(xibPath, destDir, cb) {
  // make sure the destDir is there
  try { fs.mkdirSync(destDir); } catch (e) { }

  console.log (terminalBold() + "COMPILE" + terminalReset() + " " + xibPath);

  var nibPath = path.join (destDir, path.basename(xibPath, ".xib") + ".nib");
  var nibCompile = spawn("ibtool",
			 ["--errors", "--warnings", "--notices", "--output-format", "human-readable-text", "--compile", nibPath, xibPath],
			 { stdio: 'inherit' });

  nibCompile.on('close', cb);
}

function findEjsInPATH() {
  var ejs_full_path;
  var paths = process.env['PATH'].split(':');

  for (var i = 0, e = paths.length; i < e; i ++) {
    var ejs_path = path.resolve(paths[i], "ejs");
    if (fs.existsSync(ejs_path)) {
	return ejs_path;
    }
  }

  throw new Error("could not locate ejs.exe in your PATH");
}

function compileScripts(projectType, scriptList, outFile, cb) {

  var ejs_path = findEjsInPATH();

  var binding_path = path.resolve(path.dirname (fs.realpathSync(process.argv[1])), "..", "node_modules", "pirouette-bindings-darwin", "bindings");

  var module_path = path.resolve(path.dirname (fs.realpathSync(process.argv[1])), "..", "node_modules", "pirouette-toolchain-darwin-x64", "lib");

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

// pre = true if pre-order (dir_cb is invoked before children), false if post-order (dir_cb is invoked after children)
function traverseDir(p, pre, dir_cb, file_cb) {
  if (!fs.existsSync(p)) {
      console.warn("directory " + p + " does not exist");
    return;
  }
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

function rmDir(dir) {
  traverseDir (dir, false, /* post-order traversal, so we can remove contents before rmdir */
    function dir_cb (dirPath) {
      fs.rmdirSync(dirPath);
    },
    function file_cb (filePath) {
      fs.unlinkSync(filePath);
    });
}

exports.findConfigJson = findConfigJson;
exports.collectXibs = collectXibs;
exports.compileXib = compileXib;
exports.compileScripts = compileScripts;
exports.traverseDir = traverseDir;
exports.rmDir = rmDir;
