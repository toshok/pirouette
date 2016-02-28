/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */

var util = require("./util"),
    path = require("path"),
    spawn = require('child_process').spawn;

function run(args) {
    spawn('ejs', args, {
        stdio: 'inherit'
    });
}


exports.run = run;
