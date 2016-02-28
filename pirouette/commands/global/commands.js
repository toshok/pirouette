/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */

var create = require("./create"),
    help = require("./help");

exports.commands = Object.create (null, {
    help: { enumerable: true, value: help.command },
    create: { enumerable: true, value: create.command }
});
