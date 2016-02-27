/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */

var uuid = require("../../util/uuid"),
    path = require("path"),
    fs = require("fs"),
    project = require("../../util/project"),
    util = require("../../util/util"),
    usage = require("../global/usage"),
    build = require('./build'),
    child_process = require("child_process"),
    ioslib = require("ioslib"),
    parseArgs = require("minimist");

var spawn = child_process.spawn;


function run(args) {
    var build_config = project.Configuration.Debug; // eventually this will be a parameter
    var proj = project.Project.findContaining ();
    if (!proj)
	    throw new Error("Couldn't find containing project.");
    
    var config = proj.config;

    ioslib.simulator.launch(args.udid, {
        appPath: path.join(proj.buildDir(build_config), config.projectName + ".app")
    }, function (err, simHandle) {
        if (err)
            console.error('startup error ' + err);
    }).on('appStarted', function (msg) {
        console.log('App has started');
        console.log(msg);
    }).on('log', function (msg) {
        console.log('[LOG] ' + msg);
    }).on('log-debug', function (msg) {
        console.log('[DEBUG] ' + msg);
    }).on('error', function (err) {
        console.error('[ERR] ' + err);
    });
};

var flags = {
    "--help": { usage: function(s) { return s; }, usageString: function(s) { return ": this output."; } },
    "--nobuild": { usage: function(s) { return s; }, usageString: function(s) { return ": don't build - just re-deploy"; } },
    "--udid": { usage: function(s) { return "--udid <sim-udid>"; }, usageString: function(s) { return ": use the simulator matching <udid>"; } }
};

function printUsage() {
    console.log (" $ pirouette sim [options]");
    console.log ("where [options] can be:");
    for (var flag in flags) {
	    console.log(usage.formatCommand(flag, flags[flag]));
    }
}

exports.command = {
    usage: function(s) { return s; },
    usageString: function(s) { return ": deploy the current project to the simulator (only available for ios projects)."; },
    run: function(argv, cb) {

        var args = parseArgs(argv);

        if (args.help) {
            printUsage();
            cb();
        }
        else if (args.nobuild) {
            run(args, cb);
        }
        else {
            // the default build behavior is to build if necessary
            build.command.run([], function() {
                run(args, cb);
            });
        }
    }
};
