var util = require("./util"),
    fs = require("fs"),
    path = require("path");

var project_json = "project.json";

var Configuration = {
  Debug: "Debug",
  Release: "Release"
};
Object.freeze(Configuration);

var ProjectTypes = {
  ios: "ios",
  osx: "osx"
};
Object.freeze(ProjectTypes);

function Project(root) {
  this.root = root;
  this.config = JSON.parse (fs.readFileSync (path.join (root, project_json), "utf-8"));
}
Project.prototype = Object.create(null);

Project.prototype.configurationDir = function configurationDir(config) {
  return path.join (this.root, config);
};

function isRootProjectDirectory(dir) {
  return fs.existsSync(path.join (dir, project_json));
}

Project.findContaining = function findContaining(starting_cwd) {
  var cwd;
  var new_cwd = starting_cwd || process.cwd();
  do {
    cwd = new_cwd;
    if (isRootProjectDirectory(cwd)) {
      return new Project(cwd);
    }
    new_cwd = path.dirname(cwd);
  } while (cwd !== new_cwd); // is there a better way to tell if we're at the root of the filesystem?

  return null;
};

exports.Configuration = Configuration;
exports.ProjectTypes = ProjectTypes;
exports.Project = Project;
