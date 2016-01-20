#!/usr/bin/env node

var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs');

function installToolchain(version) {
  spawn('npm', ['install', '--save-exact', '--save-bundle', ["pirouette-toolchain", process.platform, process.arch].join('-') + '@' + version], {
    stdio: 'inherit'
  });
}

function installBindings(version) {
  spawn('npm', ['install', '--save-exact', '--save-bundle', ["pirouette-bindings", process.platform].join('-') + '@' + version], {
    stdio: 'inherit'
  });
}

installToolchain.apply(null, ["0.1.0-alpha.1"].concat(process.argv.slice(2)));
installBindings.apply(null, ["0.1.0-alpha.0"].concat(process.argv.slice(2)));
