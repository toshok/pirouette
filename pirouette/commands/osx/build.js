/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */
var util = require("../../util/util"),
    fs = require("fs"),
    fse = require("fs-extra"),
    mktemp = require("mktemp"),
    path = require("path"),
    child_process = require("child_process"),
    spawn = child_process.spawn,
    project = require("../../util/project");

function generateInfoPlist(proj, config, contents_path, cb) {
    var info_plist_path = path.join(contents_path, "Info.plist");

    var bundleName = util.getBundleName(config);

    var plist_json_contents = {
        CFBundlePackageType: 'APPL',
        CFBundleGetInfoString: 'Created by Pirouette/EchoJS',
        CFBundleSignature: '????',
        CFBundleExecutable: config.projectName,
        CFBundleIdentifier: config.bundleIdentifier,
        CFBundleName: bundleName,
        NSMainNibFile: path.basename(config.mainXib, ".xib"),
        NSPrincipalClass: 'NSApplication'
    };

    util.writePlist(plist_json_contents, info_plist_path, "xml1", 
                    function (code, signal) {
                        if (code == null) {
                            console.error ('error running plutil ' + signal);
                            process.exit(-1);
                        }
                        
                        console.log('done converting plist file at ' + info_plist_path);
                        cb();
                    });
}

function buildDestDir(proj, build_config) {
    var bundle_contents;

    var dir = util.ensureDir ("build");
    dir = util.ensureDir (proj.buildDir(build_config));
    dir = util.ensureDir (path.join (dir, proj.config.projectName + ".app"));

    bundle_contents = dir = util.ensureDir (path.join (dir, "Contents"));
    util.ensureDir (path.join (bundle_contents, "plugins"));
    util.ensureDir (path.join (bundle_contents, "MacOS"));

    var resources = util.ensureDir (path.join (bundle_contents, "Resources"));
    util.ensureDir (path.join (resources, "en.lproj"));

    return bundle_contents;
}

function copyResources(proj, bundle_contents, cb) {
    var resource_list = proj.config.resources;
    if (!resource_list) {
        // no resources, easy.
        return cb();
    }

    var resources_dir = path.join (bundle_contents, "Resources");

    var resource_srcs = Object.getOwnPropertyNames(resource_list);

    for (var i = 0, e = resource_srcs.length; i < e; i ++) {
        var src = resource_srcs[i];
        var dest = resource_list[src];

        fse.copySync(src, path.join(resources_dir, dest), {});
    }

    return cb();
}

function compileScripts(proj, config, bundle_contents, cb) {
    generateInfoPlist(proj, config, bundle_contents, function (err) {
        var dest_exe = path.join(bundle_contents, "MacOS", config.projectName);

        util.compileScripts(config.projectType,
                            config.files || [config.projectName + ".js"],
                            path.relative(proj.root, dest_exe),
                            function (err) {
                                copyResources(proj, bundle_contents, cb);
                            });
    });
}

function buildOSX(proj, build_config, args, cb) {
    var bundle_contents = buildDestDir(proj, build_config);

    // we need to compile the nibs, then the .exe, then assemble the Info.plist and make the directory

    var xibs = util.collectXibs(proj.config);
    if (xibs.length > 0) {
        util.compileXibs (xibs, bundle_contents,
                          function (code) {
                              compileScripts(proj, proj.config, bundle_contents, cb);
                          });
    }
    else {
        compileScripts(proj, proj.config, bundle_contents, cb);
    }

}

function run(args, cb) {
    var build_config = project.Configuration.Debug;
    if (args.length > 0) {
        if (args[0] === "release") {
            build_config = project.Configuration.Release;
        }
        else if (args[0] !== "debug") {
            throw new Error("configuration must be 'release' or 'debug'");
        }
    }

    var proj = project.Project.findContaining ();
    if (!proj)
        throw new Error ("Couldn't find containing project.");

    var config = proj.config;
    return buildOSX(proj, build_config, args, cb);
}

exports.command = {
    usage: function(s) { return s; },
    usageString: function(s) { return ": Builds the current project."; },
    run: function(args, cb) {
        run(args, cb);
    }
};
