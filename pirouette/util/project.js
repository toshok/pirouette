/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */
var util = require("./util"),
    fs = require("fs"),
    path = require("path"),
    jsonlint = require("jsonlint");

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
    var project_json_path = path.join (root, project_json);
    var project_json_contents;

    try {
        project_json_contents = fs.readFileSync (project_json_path, "utf-8");
    }
    catch (e) {
        console.warn("Error loading '" + project_json_path + "': " + e);
        process.exit(-1);
    }

    try {
        this.config = JSON.parse (project_json_contents);
    }
    catch (e) {
        try {
            jsonlint.parse(project_json_contents);
            console.warn("shouldn't have gotten here..");
        }
        catch (linte) {
            console.log(linte);
        }
        process.exit(-1);
    }
}
Project.prototype = Object.create(null);

Project.prototype.buildDir = function buildDir(config) {
    return path.join (this.root, "build", config);
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
