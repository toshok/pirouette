
var commands = Object.create(null);

function printUsage() {
    var justify_col = 40;

    function justify(str) {
	var justify_str = new Array(50).join(" ");
	return str + justify_str.substring(0, justify_col - str.length);
    }

    console.log (" $ pirouette [options] <command>");
    console.log ("where <command> is one of the following:");
    for (var cmdname in commands) {
	var cmd = commands[cmdname];
	console.log ("  " + justify(cmd.usage(cmdname)) + cmd.usageString(function(str) { return "\n" + justify("") + str; }));
    }
}

function installCommands(cmds) {
    commands = cmds;
}

exports.printUsage = printUsage;
exports.installCommands = installCommands;
