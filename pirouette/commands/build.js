var util = require("./util"),
    fs = require("fs"),
    path = require("path"),
    child_process = require("child_process"),
    spawn = child_process.spawn,
    project = require("./project");

function generateInfoPlist(contents_path, config) {
  var info_plist_path = path.join(contents_path, "Info.plist");

  var bundleName = config.bundleName;
  if (!bundleName && config.bundleIdentifier) {
      var split_ident = config.bundleIdentifier.split('.');
      if (split_ident.length > 1)
	  bundleName = split_ident[split_ident.length - 1];
  }
  if (!bundleName)
      bundleName = config.projectName;

  var info_plist_contents = '' +
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<!DOCTYPE plist SYSTEM "file://localhost/System/Library/DTDs/PropertyList.dtd">\n' +
    '<plist version="0.9">\n' +
    '<dict>\n' +
    '       <key>CFBundleIconFile</key>\n' +
    '       <string>moonlight.icns</string>\n' +
    '       <key>CFBundlePackageType</key>\n' +
    '       <string>APPL</string>\n' +
    '       <key>CFBundleGetInfoString</key>\n' +
    '       <string>Created by Pirouette/EchoJS</string>\n' +
    '       <key>CFBundleSignature</key>\n' +
    '       <string>????</string>\n' +
    '       <key>CFBundleExecutable</key>\n' +
    '       <string>' + config.projectName + '</string>\n' +
    '       <key>CFBundleIdentifier</key>\n' +
    '       <string>' + config.bundleIdentifier + '</string>\n' +
    '       <key>CFBundleName</key>\n' +
    '       <string>' + bundleName + '</string>\n' +
    '       <key>NSMainNibFile</key>\n' +
    '       <string>' + path.basename(config.mainXib, ".xib") + '</string>\n' +
    '       <key>NSPrincipalClass</key>\n' +
    '       <string>NSApplication</string>\n' +
    '</dict>\n' +
    '</plist>';

  fs.writeFileSync(info_plist_path, info_plist_contents);
}

function buildDestDir(proj, build_config) {
  function ensureDirectory(p) { try { fs.mkdirSync(p); } catch (e) { if (e.code != 'EEXIST') throw e; } return p; }

  var bundle_contents;

  var dir = ensureDirectory ("build");
  dir = ensureDirectory (proj.buildDir(build_config));
  dir = ensureDirectory (path.join (dir, proj.config.projectName + ".app"));
  bundle_contents = dir = ensureDirectory (path.join (dir, "Contents"));

  ensureDirectory (path.join (bundle_contents, "Resources"));
  ensureDirectory (path.join (bundle_contents, "plugins"));
  ensureDirectory (path.join (bundle_contents, "MacOS"));

  return bundle_contents;
}

function compileScripts(proj, config, bundle_contents) {
    generateInfoPlist(bundle_contents, config);
    var dest_exe = path.join(bundle_contents, "MacOS", config.projectName);
    util.compileScripts(config.projectType,
			config.files || [config.projectName + ".js"],
			path.relative(proj.root, dest_exe),
			function (code) {
			});
}

function run(args) {
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

    var bundle_contents = buildDestDir(proj, build_config);

    // we need to compile the nibs, then the .exe, then assemble the Info.plist and make the directory
    var config = proj.config;

    var xibs = util.collectXibs(config);
    if (xibs.length > 0) {
	if (xibs.length > 1) {
	    console.log("warning, pirouette only compiles the main xib file at the moment.");
	}

	util.compileXib (xibs[0], path.join(bundle_contents, path.dirname(xibs[0])),
			 function (code) {
			     compileScripts(proj, config, bundle_contents);
			 });
    }
    else {
	compileScripts(proj, config, bundle_contents);
    }

}

exports.run = run;
