var util = require("../../util/util"),
    fs = require("fs"),
    mktemp = require("mktemp"),
    path = require("path"),
    child_process = require("child_process"),
    spawn = child_process.spawn,
    project = require("../../util/project");

function generateInfoPlist(proj, config, contents_path, cb) {
    var info_plist_path = path.join(contents_path, "Info.plist");

    var bundleName = util.getBundleName(config);

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

    addStringValue('NSMainNibFile', path.basename(config.mainXib, ".xib"));
    addStringValue('NSPrincipalClass', 'NSApplication');

    var info_plist_contents = '' +
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<!DOCTYPE plist SYSTEM "file://localhost/System/Library/DTDs/PropertyList.dtd">\n' +
    '<plist version="0.9">\n' +
    '<dict>\n' +
	    body +
    '</dict>\n' +
    '</plist>';

    fs.writeFile(info_plist_path, info_plist_contents, cb);
}

function buildDestDir(proj, build_config) {
    var bundle_contents;

    var dir = util.ensureDir ("build");
    dir = util.ensureDir (proj.buildDir(build_config));
    dir = util.ensureDir (path.join (dir, proj.config.projectName + ".app"));

    bundle_contents = dir = util.ensureDir (path.join (dir, "Contents"));
    util.ensureDir (path.join (bundle_contents, "plugins"));
    util.ensureDir (path.join (bundle_contents, "MacOS"));

    var resources = util.ensureDir (path.join (bundle_contents, "Resources"));
    util.ensureDir (path.join (resources, "en.lproj"));

    return bundle_contents;
}

function compileScripts(proj, config, bundle_contents, cb) {
    generateInfoPlist(proj, config, bundle_contents, function (err) {
	var dest_exe = path.join(bundle_contents, "MacOS", config.projectName);

	util.compileScripts(config.projectType,
			    config.files || [config.projectName + ".js"],
			    path.relative(proj.root, dest_exe),
			    cb);
    });
}

function buildOSX(proj, build_config, args, cb) {
    var bundle_contents = buildDestDir(proj, build_config);

    // we need to compile the nibs, then the .exe, then assemble the Info.plist and make the directory

    var xibs = util.collectXibs(proj.config);
    if (xibs.length > 0) {
	util.compileXibs (xibs, bundle_contents,
			 function (code) {
			     compileScripts(proj, proj.config, bundle_contents, cb);
			 });
    }
    else {
	compileScripts(proj, proj.config, bundle_contents, cb);
    }

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
    return buildOSX(proj, build_config, args, cb);
}

exports.command = {
    usage: function(s) { return s; },
    usageString: function(s) { return ": Builds the current project."; },
    run: function(args, cb) {
        run(args, cb);
    }
};
