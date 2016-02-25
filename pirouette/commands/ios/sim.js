/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */

var uuid = require("../../util/uuid"),
    path = require("path"),
    fs = require("fs"),
    project = require("../../util/project"),
    util = require("../../util/util"),
    build = require('./build'),
    child_process = require("child_process"),
    ioslib = require("ioslib");

var spawn = child_process.spawn;


function run(args) {
    var build_config = project.Configuration.Debug; // eventually this will be a parameter
    var proj = project.Project.findContaining ();
    if (!proj)
	    throw new Error("Couldn't find containing project.");
    
    var config = proj.config;

    var simUDID = "D8AD0294-5589-48A4-A7F1-311B8A465E69";
    ioslib.simulator.launch(null /*simUDID*/, {
        appPath: path.join(proj.buildDir(build_config), config.projectName + ".app")
    }, function (err, simHandle) {
        console.error(err);
    }).on('appStarted', function (msg) {
        console.log('App has started');
        console.log(msg);
    }).on('log', function (msg) {
        console.log('[LOG] ' + msg);
    }).on('error', function (err) {
        console.error(err);
    });
};

exports.command = {
    usage: function(s) { return s; },
    usageString: function(s) { return ": deploy the current project to the simulator (only available for ios projects)."; },
    run: function(args, cb) {
        // the default build behavior is to build if necessary
        build.command.run([], function() {
            run(args, cb);
        });
    }
};
