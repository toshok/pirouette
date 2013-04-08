// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSTableViewDataSource = NSTableViewDataSource = foundation.Protocol.extendClass("NSTableViewDataSource", {

    // Getting Values
    numberOfRows: objc.optionalMethod ("numberOfRowsInTableView:"),
    objectValueFor: objc.optionalMethod ("tableView:objectValueForTableColumn:row:"),

    // Setting Values
    setObjectValue: objc.optionalMethod ("tableView:setObjectValue:forTableColumn:row:"),

    // Implementing Pasteboard Support
    pasteboardWriterForRow: objc.optionalMethod ("tableView:pasteboardWriterForRow:"),

    // Drag and Drop
    acceptDrop: objc.optionalMethod ("tableView:acceptDrop:row:dropOperation:"),
    namesOfPromisedFilesDroppedAtDestination: objc.optionalMethod ("tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:"),
    validateDrop: objc.optionalMethod ("tableView:validateDrop:proposedRow:proposedDropOperation:"),
    writeRows: objc.optionalMethod ("tableView:writeRowsWithIndexes:toPasteboard:"),
    draggingSessionWillBegin: objc.optionalMethod ("tableView:draggingSession:willBeginAtPoint:forRowIndexes:"),
    updateDraggingItems: objc.optionalMethod ("tableView:updateDraggingItemsForDrag:"),
    draggingSessionEnded: objc.optionalMethod ("tableView:draggingSession:endedAtPoint:operation:"),

    // Sorting
    sortDescriptorsChanged: objc.optionalMethod ("tableView:sortDescriptorsDidChange:")

});