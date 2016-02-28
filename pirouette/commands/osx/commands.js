/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */
var global_commands = require('../global/commands').commands;

var build = require('./build'),
    clean = require('../clean');

exports.commands = Object.assign(global_commands, Object.create(null, {
    build: { enumerable: true, value: build.command },
    clean: { enumerable: true, value: clean.command }
}));
