// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITableViewDataSource");
var UITableViewDataSource;
_exports.UITableViewDataSource = UITableViewDataSource = foundation.Protocol.extendClass("UITableViewDataSource", () => { return {

    // Configuring a Table View
    cellForRow:                  objc.requiredMethod("tableView:cellForRowAtIndexPath:").
					returns (function() { return foundation.NSObject; }).
				        params (function() { return [ foundation.NSObject, foundation.NSObject ]; }),
    numberOfSections:            objc.optionalMethod("numberOfSectionsInTableView:", { sig: "i@:@" }).
					returns (function() { return objc.sig.Int; }).
					params (function() { return [ foundation.NSObject ]; }),
    numberOfRowsInSection:       objc.requiredMethod("tableView:numberOfRowsInSection:", { sig: "i@:@i" }).
					returns (function() { return objc.sig.Int; }).
					params (function() { return [ foundation.NSObject, objc.sig.Int ]; }),
    sectionIndexTitles:          objc.optionalMethod("sectionIndexTitlesForTableView:"),
    sectionForSectionIndexTitle: objc.optionalMethod("tableView:sectionForSectionIndexTitle:atIndex:"),
    titleForHeaderInSection:     objc.optionalMethod("tableView:titleForHeaderInSection:", { sig: "@@:@i" }).
					returns (function() { return objc.sig.NSString; }).
					params (function() { return [ foundation.NSObject, objc.sig.Int ]; }),
    titleForFooterInSection:     objc.optionalMethod("tableView:titleForFooterInSection:").
					returns (function() { return objc.sig.NSString; }).
					params (function() { return [ foundation.NSObject, objc.sig.Int ]; }),

    // Inserting or Deleting Table Rows
    commitEditingStyle:          objc.optionalMethod("tableView:commitEditingStyle:forRowAtIndexPath:"),
    canEditRow:                  objc.optionalMethod("tableView:canEditRowAtIndexPath:"),

    // Reordering Table Rows
    canMoveRow:                  objc.optionalMethod("tableView:canMoveRowAtIndexPath:"),
    moveRow:                     objc.optionalMethod("tableView:moveRowAtIndexPath:toIndexPath:")

}; });
