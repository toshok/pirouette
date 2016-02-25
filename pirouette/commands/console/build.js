var util = require("../../util/util"),
    project = require("../../util/project"),
    path = require("path"),
    spawn = require('child_process').spawn,
    fs = require('fs');

function buildDestDir(proj, build_config) {
    function ensureDirectory(p) { try { fs.mkdirSync(p); } catch (e) { if (e.code != 'EEXIST') throw e; } return p; }

    var dir = ensureDirectory ("build");
    dir = ensureDirectory (proj.buildDir(build_config));

    return dir;
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

    var dest_dir = buildDestDir(proj, build_config);

    var dest_exe = path.join(dest_dir, proj.config.projectName);

    util.compileScripts(proj.config.projectType,
			proj.config.files || [proj.config.projectName + ".js"],
			path.relative(proj.root, dest_exe),
			cb);
}

exports.command = {
    usage: function(s) { return s; },
    usageString: function(s) { return ": Builds the current project."; },
    run: function(args, cb) {
        run(args, cb);
    }
};
