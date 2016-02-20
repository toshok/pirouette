/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */

var uuid = require("./uuid"),
    path = require("path"),
    fs = require("fs"),
    project = require("./project"),
    util = require("./util"),
    child_process = require("child_process"),
    ioslib = require("ioslib");

var spawn = child_process.spawn;


exports.run = function run(args) {
    var build_config = project.Configuration.Debug; // eventually this will be a parameter
    var proj = project.Project.findContaining ();
    if (!proj)
	    throw new Error("Couldn't find containing project.");
    
    var config = proj.config;

    if (config.projectType != project.ProjectTypes.ios)
	    throw new Error("Can't deploy non-ios projects to simulator.");

    var simUDID = "D8AD0294-5589-48A4-A7F1-311B8A465E69";
    ioslib.simulator.launch(simUDID, {
        appPath: path.join(proj.buildDir(build_config), config.projectName + ".app")
        //appPath: path.join(proj.buildDir(build_config), "test.app")
        //appPath: "/Users/toshok/src/pirouette/pirouette-test/test.app"
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
