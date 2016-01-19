var util = require("./util"),
    path = require("path"),
    spawn = require('child_process').spawn;

function run(args) {
    spawn('ejs', args, {
	stdio: 'inherit'
    });
}


exports.run = run;
