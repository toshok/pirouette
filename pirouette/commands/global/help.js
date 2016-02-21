var usage = require('./usage');

exports.command = {
    usage: function(s) { return s + " <Command>"; },
    usageString: function(s) { return ": gives more detailed help for <Command>, or this output if no command is given."; },
    run: function(args) {
	if (args.length === 0) {
	    return usage.printUsage();
	}
	throw "command not implemented for arguments";
    }
};
