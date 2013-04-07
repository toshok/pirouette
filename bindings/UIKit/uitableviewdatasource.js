// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITableViewDataSource");
exports.UITableViewDataSource = UITableViewDataSource = objc.bindProtocol(foundation.Protocol,
  function UITableViewDataSource () {
    return UITableViewDataSource.__super__.constructor.apply(this, arguments);
  }, {
    // Configuring a Table View
    cellForRow:                  objc.requiredMethod("tableView:cellForRowAtIndexPath:", { sig: "@@:@@" }),
    numberOfSections:            objc.optionalMethod("numberOfSectionsInTableView:", { sig: "i@:@" }),
    numberOfRowsInSection:       @requiredMethod("tableView:numberOfRowsInSection:", { sig: "i@:@i" }),
    sectionIndexTitles:          objc.optionalMethod("sectionIndexTitlesForTableView:"),
    sectionForSectionIndexTitle: objc.optionalMethod("tableView:sectionForSectionIndexTitle:atIndex:"),
    titleForHeaderInSection:     objc.optionalMethod("tableView:titleForHeaderInSection:", { sig: "@@:@i" }),
    titleForFooterInSection:     objc.optionalMethod("tableView:titleForFooterInSection:"),

    // Inserting or Deleting Table Rows
    commitEditingStyle:          objc.optionalMethod("tableView:commitEditingStyle:forRowAtIndexPath:"),
    canEditRow:                  objc.optionalMethod("tableView:canEditRowAtIndexPath:"),

    // Reordering Table Rows
    canMoveRow:                  objc.optionalMethod("tableView:canMoveRowAtIndexPath:"),
    moveRow:                     objc.optionalMethod("tableView:moveRowAtIndexPath:toIndexPath:")

});