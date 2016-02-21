var global_commands = require('../global/commands').commands;

var build = require('./build'),
    clean = require('../clean');

exports.commands = Object.assign(global_commands, Object.create(null, {
    build: { enumerable: true, value: build.command },
    clean: { enumerable: true, value: clean.command }
}));
