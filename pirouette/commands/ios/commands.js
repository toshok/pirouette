var global_commands = require('../global/commands').commands;

var build = require('./build'),
    clean = require('../clean'),
    sim = require('./sim'),
    dev = require('./dev');

exports.commands = Object.assign(global_commands, Object.create(null, {
    build: { enumerable: true, value: build.command },
    clean: { enumerable: true, value: clean.command },
    sim: { enumerable: true, value: sim.command },
    dev: { enumerable: true, value: dev.command }
}));
