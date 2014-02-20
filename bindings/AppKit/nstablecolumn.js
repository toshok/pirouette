// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSTableColumn;
_exports.NSTableColumn = NSTableColumn = foundation.NSObject.extendClass("NSTableColumn", () => ({
    // Creating an NSTableColumn
    initWithIdentifier: objc.instanceSelector("initWithIdentifier:"),

    // Setting the NSTableView
    tableView: objc.instanceProperty(),

    // Controlling Size
    width: objc.instanceProperty(),
    minWidth: objc.instanceProperty(),
    maxWidth: objc.instanceProperty(),
    resizingMask: objc.instanceProperty(),
    sizeToFit: objc.instanceSelector("sizeToFit"),

    // Setting Component Cells
    headerCell: objc.instanceProperty(),
    dataCell: objc.instanceProperty(),
    dataCellForRow: objc.instanceSelector("dataCellForRow:"),

    // Setting the Identifier
    identifier: objc.instanceProperty(),

    // Controlling Editability
    editable: objc.instanceProperty({ get: "isEditable" }),

    // Sorting
    sortDescriptorPrototype: objc.instanceProperty(),

    // Setting Column Visibility
    hidden: objc.instanceProperty({ get: "isHidden" }),

    // Setting Tool Tips
    headerToolTip: objc.instanceProperty(),

    // Deprecated Methods
    resizable: objc.instanceProperty({ get: "isResizable" }) // Deprecated in OS X v10.4

}));

NSTableColumn.newWithIdentifier = function(identifier) {
  return NSTableColumn.newWith({ initWith: "Identifier", args: [identifier] });
};
