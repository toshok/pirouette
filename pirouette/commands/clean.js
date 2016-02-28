var util = require("../util/util"),
    proj = require("../util/project"),
    Project = proj.Project,
    Configuration = proj.Configuration;

function run(args) {
    var project = Project.findContaining ();
    if (!project)
	throw new Error ("Couldn't find containing project.");

    util.rmDir (project.buildDir(Configuration.Debug));
    util.rmDir (project.buildDir(Configuration.Release));
}

exports.command = {
    usage: function(s) { return s; },
    usageString: function(s) { return ": Cleans the current project."; },
    run: function(args) {
        run(args, function() {
        });
    }
};
