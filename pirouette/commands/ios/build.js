var util = require("../../util/util"),
    fs = require("fs"),
    fse = require("fs-extra"),
    path = require("path"),
    child_process = require("child_process"),
    spawn = child_process.spawn,
    usage = require("../global/usage"),
    project = require("../../util/project"),
    parseArgs = require("minimist");

function generateInfoPlist(proj, config, contents_path, cb) {
    var info_plist_path = path.join(contents_path, "Info.plist");

    var bundleName = util.getBundleName(config);

    var plist_json_contents = {
	CFBundleDevelopmentRegion: 'en',
	CFBundlePackageType: 'AAPL',
	CFBundleGetInfoString: 'Created by Pirouette/EchoJS',
	CFBundleSignature: '????',
	CFBundleExecutable: config.projectName,
	CFBundleIdentifier: config.bundleIdentifier,
	CFBundleInfoDictionaryVersion: '6.0',
	CFBundleShortVersionString: '0.1',
	CFBundleVersion: '1',
	CFBundleName: bundleName,
	CFBundleDisplayName: bundleName,
	DTPlatformName: 'iphonesimulator',
	DTPlatformVersion: '9.1',
	UIDeviceFamily : [1, 2],
	UISupportedInterfaceOrientations : [
	    "UIInterfaceOrientationPortrait",
	    "UIInterfaceOrientationLandscapeLeft",
	    "UIInterfaceOrientationLandscapeRight"
	],
	"UISupportedInterfaceOrientations~ipad" : [
	    "UIInterfaceOrientationPortrait",
	    "UIInterfaceOrientationPortraitUpsideDown",
	    "UIInterfaceOrientationLandscapeLeft",
	    "UIInterfaceOrientationLandscapeRight"
	]
    };

    if (config.launchStoryboard)
	plist_json_contents.UILaunchStoryboardName = path.basename(config.launchStoryboard, ".storyboard");

    if (config.mainStoryboard)
	plist_json_contents.UIMainStoryboardName = path.basename(config.mainStoryboard, ".storyboard");

    util.writePlist(plist_json_contents, info_plist_path, "binary1", 
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

    var dir = util.ensureDir ('build');
    dir = util.ensureDir (proj.buildDir(build_config));
    dir = util.ensureDir (path.join (dir, proj.config.projectName + '.app'));

    bundle_contents = dir;

    util.ensureDir (path.join (bundle_contents, 'Base.lproj'));

    return bundle_contents;
}

function copyResources(proj, bundle_contents, build_config, cb) {
    var resource_list = proj.config.resources;
    if (!resource_list) {
	// no resources, easy.
	return cb();
    }

    var resources_dir = bundle_contents;

    var resource_srcs = Object.getOwnPropertyNames(resource_list);

    for (var i = 0, e = resource_srcs.length; i < e; i ++) {
	var src = resource_srcs[i];
	var dest = resource_list[src];

	fse.copySync(src, path.join(resources_dir, dest), {});
    }

    return cb();
}

function compileScripts(proj, build_config, bundle_contents, cb) {

    generateInfoPlist(proj, proj.config, bundle_contents, function (err) {
	var dest_exe = path.join(bundle_contents, proj.config.projectName);

	util.compileScripts(proj.config.projectType,
			    proj.config.files || [proj.config.projectName + '.js'],
			    path.relative(proj.root, dest_exe),
			    function (err) {
				copyResources(proj, bundle_contents, build_config, cb);
			    });
    });
}

function buildIOS(proj, build_config, args, cb) {
    var bundle_contents = buildDestDir(proj, build_config);

    var boards = util.collectStoryboards(proj.config);
    if (boards.length > 0) {
	util.compileStoryboards(boards, bundle_contents,
				util.getBundleName(proj.config),
				function (code) {
				    compileScripts(proj, build_config, bundle_contents, cb);
				});
    }
    else {
	compileScripts(proj, build_config, bundle_contents, cb);
    }
}

function run(args, cb) {
    var build_config = project.Configuration.Debug;
    if (args.length > 0) {
	if (args[0] === 'release') {
	    build_config = project.Configuration.Release;
	}
	else if (args[0] !== 'debug') {
	    throw new Error("configuration must be 'release' or 'debug'");
	}
    }

    var proj = project.Project.findContaining ();
    if (!proj)
	throw new Error ("Couldn't find containing project.");

    var config = proj.config;
    return buildIOS(proj, build_config, args, cb);
}

var flags = {
    "--help": { usage: function(s) { return s; }, usageString: function(s) { return ": this output."; } }
};

function printUsage() {
    console.log (" $ pirouette build [options]");
    console.log ("where [options] can be:");
    for (var flag in flags) {
	    console.log(usage.formatCommand(flag, flags[flag]));
    }
}

exports.command = {
    usage: function(s) { return s; },
    usageString: function(s) { return ': Builds the current project.'; },
    run: function(argv, cb) {
        var args = parseArgs(argv);

        if (args.help) {
            printUsage();
            cb();
        }
	else {
            run(args, cb);
	}
    }
};
