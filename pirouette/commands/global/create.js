var util = require("../../util/util"),
    fs = require("fs"),
    path = require("path"),
    project = require("../../util/project");

function run(args) {

    if (args.length != 2) {
	throw new Error("create command requires two arguments: <template_type> <project name>");
    }

    var template_type = args[0];
    var project_name = args[1];

    var template_dir = path.resolve (path.dirname(fs.realpathSync(process.argv[1])), "templates", template_type);
    if (!fs.existsSync(template_dir))
	throw new Error("unknown template type '" + template_type + "'");

    app_delegate_name = "AppDelegate"; // XXX eventually make this a parameter

    copyTemplateDir(template_dir, project_name);
}

function copyTemplateDir(templateDir, project_name) {
    function do_replace(str) {
	return str.replace(/@@PROJECT_NAME@@/g, project_name)
	          .replace(/@@APP_DELEGATE_NAME@@/g, app_delegate_name)
	          .replace(/@@PIROUETTE_VERSION@@/g, "0.01") /* XXX this particular one needs help */;
    }

    util.traverseDir (templateDir, true, /* preorder traversal, so we can create dirs before their contents */
	 	      function dir_cb (templatePath) {
			  var projectPath = path.join (project_name, do_replace(path.relative (templateDir, templatePath)));
			  fs.mkdirSync (projectPath);
		      },
		      function file_cb (templatePath) {
			  var projectPath = path.join (project_name, do_replace(path.relative (templateDir, templatePath)));
			  var contents = do_replace (fs.readFileSync(templatePath, "utf-8"));
			  fs.writeFileSync(projectPath, contents);
		      });
}

exports.command = {
    usage: function(s) { return s + " <ProjectType> <ProjectName>"; },
    usageString: function(nl_and_indent) {
	return              ": generates initial project template named <ProjectName> in current directory." +
	    nl_and_indent("    where <ProjectType> is <target_platform>/<template_name>") +
	    nl_and_indent("        currently only these are supported:") +
	    nl_and_indent("          osx/application") +
	    nl_and_indent("          ios/application");
	    nl_and_indent("          console/application");
    },

    run: function(args, cb) {
	run(args, cb);
    }
}

// Local Variables:
// mode: javascript
// End:
