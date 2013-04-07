// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITableViewController");
exports.UITableViewController = UITableViewController = objc.bindClass(UIViewController,
  function UITableViewController () {
    return UITableViewController.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing the UITableViewController Object
    initWithStyle: objc.instanceSelector("initWithStyle:").
                         returns( () => UITableViewController).
			  params( () => [ ck.sig.Int ]),

    // Getting the Table View
    tableView: objc.instanceProperty(),

    // Configuring the Table Behavior
    clearsSelectionOnViewWillAppear: objc.instanceProperty()

});
