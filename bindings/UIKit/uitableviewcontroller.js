// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITableViewController");
var UITableViewController;
_exports.UITableViewController = UITableViewController = UIViewController.extendClass ("UITableViewController", () => { return {

    // Initializing the UITableViewController Object
    initWithStyle: objc.instanceSelector("initWithStyle:").
				  returns( function () { return foundation.NSObject; /* should be UITableViewController */ }).
				  params( function () { return [ objc.sig.Int ]; }),

    // Getting the Table View
    tableView: objc.instanceProperty(),

    // Configuring the Table Behavior
    clearsSelectionOnViewWillAppear: objc.instanceProperty()

}; });
