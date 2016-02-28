/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */

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
