/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */

var util = require("../../util/util"),
    usage = require("../global/usage"),
    path = require("path"),
    spawn = require('child_process').spawn,
    fs = require('fs');

function run(argv, cb) {
    if (argv.length === 0) {
	    throw new usage.UsageError();
    }

    // this should really call util.compileScripts.  there is significant overlap and c&p.
    var ejs_path = util.findEjsInPATH();

    var binding_path = path.resolve(path.dirname (fs.realpathSync(process.argv[1])), "..", "node_modules", "pirouette-bindings-darwin", "bindings");

    var module_path = path.resolve(path.dirname (fs.realpathSync(process.argv[1])), "..", "node_modules", "pirouette-toolchain-darwin-x64", "lib");

    var args = ["--moduledir", module_path, "-I", "pirouette=" + binding_path].concat(argv);

    var ejsCompile = spawn(ejs_path, args, { stdio: 'inherit' });

    ejsCompile.on('close', cb);
}


var command = {
    usage: function(s) { return s + " [args] <files..>"; },
    usageString: function(nl_and_indent) {
        return              ": compiles <files> into an executable." +
            nl_and_indent("    where [args] are anything that ejs accepts") +
            nl_and_indent("    e.g.:") +
            nl_and_indent("      -o <outFile>:  output to outFile instead of the first file.js.exe");
    },

    run: function(args, cb) {
        run(args, cb);
    }
};

exports.command = command;
