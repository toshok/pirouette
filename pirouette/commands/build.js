var util = require("./util"),
    fs = require("fs"),
    mktemp = require("mktemp"),
    path = require("path"),
    child_process = require("child_process"),
    spawn = child_process.spawn,
    project = require("./project");

function generateInfoPlist(proj, config, contents_path, output_binary, cb) {
    var info_plist_path = path.join(contents_path, "Info.plist");

    var bundleName = config.bundleName;
    if (!bundleName && config.bundleIdentifier) {
	var split_ident = config.bundleIdentifier.split('.');
	if (split_ident.length > 1)
	    bundleName = split_ident[split_ident.length - 1];
    }
    if (!bundleName)
	bundleName = config.projectName;

    var body = "";
    function addStringValue(key, value) {
	body += ('       <key>' + key + '</key>\n' +
		 '       <string>' + value + '</string>\n');
    }

    addStringValue('CFBundleIconFile', 'moonlight.icns');
    addStringValue('CFBundlePackageType', 'APPL');
    addStringValue('CFBundleGetInfoString', 'Created by Pirouette/EchoJS');
    addStringValue('CFBundleSignature', '????');
    addStringValue('CFBundleExecutable', config.projectName);
    addStringValue('CFBundleIdentifier', config.bundleIdentifier);
    addStringValue('CFBundleName', bundleName);

    var info_plist_contents = '' +
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<!DOCTYPE plist SYSTEM "file://localhost/System/Library/DTDs/PropertyList.dtd">\n' +
    '<plist version="0.9">\n' +
    '<dict>\n' +
	    body +
    '</dict>\n' +
    '</plist>';

    if (config.projectType === 'osx') {
	addStringValue('NSMainNibFile', path.basename(config.mainXib, ".xib"));
	addStringValue('NSPrincipalClass', 'NSApplication');
    }
    else if (config.projectType === 'ios') {
	addStringValue('DTPlatformName', 'iphonesimulator');
	addStringValue('DTPlatformVersion', '9.1');
    }

    if (output_binary) {
	var tmpdir = process.env["TMPDIR"];
	if (!tmpdir)
	    tmpdir = "/tmp";

	mktemp.createFile(path.join(tmpdir, 'XXX.tmp'),  function(err, path) {
	    fs.writeFile(path, info_plist_contents, function (err) {
		var plutil = spawn('plutil', ['-convert', 'binary1', '-o', info_plist_path, path],
				   { stdio: ['pipe', process.stdout, process.stderr] });
		plutil.on('exit', function (code, signal) {
		    if (code == null) {
			console.error ("error running plutil " + signal);
			process.exit(-1);
		    }

		    console.log("done converting plist file at " + info_plist_path);
		    cb();
		});
	    });
	});
    }
    else {
	fs.writeFile(info_plist_path, info_plist_contents, cb);
    }
}

function buildDestDir(proj, build_config) {
    function ensureDirectory(p) { try { fs.mkdirSync(p); } catch (e) { if (e.code != 'EEXIST') throw e; } return p; }

    var bundle_contents;

    var dir = ensureDirectory ("build");
    dir = ensureDirectory (proj.buildDir(build_config));
    dir = ensureDirectory (path.join (dir, proj.config.projectName + ".app"));

    if (proj.projectType === 'osx') {
	bundle_contents = dir = ensureDirectory (path.join (dir, "Contents"));

	ensureDirectory (path.join (bundle_contents, "Resources"));
	ensureDirectory (path.join (bundle_contents, "plugins"));
	ensureDirectory (path.join (bundle_contents, "MacOS"));
    }
    else {
	bundle_contents = dir;

	ensureDirectory (path.join (bundle_contents, "Base.lproj"));
    }

  return bundle_contents;
}

function compileScripts(proj, config, bundle_contents, binary_plist, cb) {
    generateInfoPlist(proj, config, bundle_contents, binary_plist, function (err) {
	var dest_exe;

	if (config.projectType === 'osx')
	    dest_exe = path.join(bundle_contents, "MacOS", config.projectName);
	else if (config.projectType === 'ios')
	    dest_exe = path.join(bundle_contents, config.projectName);
	else
	    throw new Error("unknown project type: "  + config.projectType);

	util.compileScripts(config.projectType,
			    config.files || [config.projectName + ".js"],
			    path.relative(proj.root, dest_exe),
			    cb);
    });
}

function buildOSX(proj, build_config, args, cb) {
    var bundle_contents = buildDestDir(proj, build_config);

    // we need to compile the nibs, then the .exe, then assemble the Info.plist and make the directory

    var xibs = util.collectXibs(build_config);
    if (xibs.length > 0) {
	if (xibs.length > 1) {
	    console.log("warning, pirouette only compiles the main xib file at the moment.");
	}

	util.compileXib (xibs[0], path.join(bundle_contents, path.dirname(xibs[0])),
			 function (code) {
			     compileScripts(proj, proj.config, bundle_contents, false, cb);
			 });
    }
    else {
	compileScripts(proj, proj.config, bundle_contents, false, cb);
    }

}

function buildIOS(proj, build_config, args, cb) {
    var bundle_contents = buildDestDir(proj, build_config);

    compileScripts(proj, proj.config, bundle_contents, true, cb);
}

function run(args, cb) {
    var build_config = project.Configuration.Debug;
    if (args.length > 0) {
	if (args[0] === "release") {
	    build_config = project.Configuration.Release;
	}
	else if (args[0] !== "debug") {
	    throw new Error("configuration must be 'release' or 'debug'");
	}
    }

    var proj = project.Project.findContaining ();
    if (!proj)
	throw new Error ("Couldn't find containing project.");

    var config = proj.config;
    if (config.projectType === 'ios')
	return buildIOS(proj, build_config, args, cb);
    else if (config.projectType === 'osx')
	return buildOSX(proj, build_config, args, cb);
    else
	throw new Error("unknown project type: "  + config.projectType);
}

exports.run = run;
