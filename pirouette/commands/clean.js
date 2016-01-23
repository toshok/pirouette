var util = require("./util"),
    path = require("path"),
    proj = require("./project"),
    Project = proj.Project,
    Configuration = proj.Configuration;

function run(args) {
  var project = Project.findContaining ();
  if (!project)
    throw new Error ("Couldn't find containing project.");

  util.rmDir (project.buildDir(Configuration.Debug));
  util.rmDir (project.buildDir(Configuration.Release));
}


exports.run = run;
