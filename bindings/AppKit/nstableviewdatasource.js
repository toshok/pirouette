// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

export let NSTableViewDataSource = Protocol.extendClass("NSTableViewDataSource", () => ({

    // Getting Values
    numberOfRows: optionalMethod ("numberOfRowsInTableView:"),
    objectValueFor: optionalMethod ("tableView:objectValueForTableColumn:row:"),

    // Setting Values
    setObjectValue: optionalMethod ("tableView:setObjectValue:forTableColumn:row:"),

    // Implementing Pasteboard Support
    pasteboardWriterForRow: optionalMethod ("tableView:pasteboardWriterForRow:"),

    // Drag and Drop
    acceptDrop: optionalMethod ("tableView:acceptDrop:row:dropOperation:"),
    namesOfPromisedFilesDroppedAtDestination: optionalMethod ("tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:"),
    validateDrop: optionalMethod ("tableView:validateDrop:proposedRow:proposedDropOperation:"),
    writeRows: optionalMethod ("tableView:writeRowsWithIndexes:toPasteboard:"),
    draggingSessionWillBegin: optionalMethod ("tableView:draggingSession:willBeginAtPoint:forRowIndexes:"),
    updateDraggingItems: optionalMethod ("tableView:updateDraggingItemsForDrag:"),
    draggingSessionEnded: optionalMethod ("tableView:draggingSession:endedAtPoint:operation:"),

    // Sorting
    sortDescriptorsChanged: optionalMethod ("tableView:sortDescriptorsDidChange:")

}));
