/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */
var build = require('./build');

function run(args) {
    throw "dev command not implemented";
}

exports.command = {
    usage: function(s) { return s; },
    usageString: function(s) { return ": deploy the current project to the device (only available for ios projects)."; },
    run: function(args, cb) {
        // the default build behavior is to build if necessary
        build.command.run([], function() {
            run(args, cb);
        });
    }
};
