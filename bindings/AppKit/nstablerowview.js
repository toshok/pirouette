// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSTableRowView = NSTableRowView = NSView.extendClass("NSTableRowView", {
    // Display Style
    emphasized: objc.instanceProperty({ get: "isEmphasized" }),
    interiorBackgroundStyle: objc.instanceProperty({ set: null }),
    floating: objc.instanceProperty({ get: "isFloating" }),

    // Row Selection
    selected: objc.instanceProperty({ get: "isSelected" }),
    selectionHighlightStyle: objc.instanceProperty(),

    // Drag and Drop
    draggingDestinationFeedbackStyle: objc.instanceProperty(),
    indentationForDropOperation: objc.instanceProperty(),
    targetForDropOperation: objc.instanceProperty({ get: "isTargetForDropOperation" }),

    // Row Grouping
    groupRowStyle: objc.instanceProperty({ get: "isGroupRowStyle" }),
    numberOfColumns: objc.instanceProperty({ set: null }),

    // Overriding Row View Display Characteristics
    backgroundColor: objc.instanceProperty(),
    drawBackground: objc.instanceSelector("drawBackgroundInRect:"),
    drawDraggingDestinationFeedback: objc.instanceSelector("drawDraggingDestinationFeedbackInRect:"),
    drawSelection: objc.instanceSelector("drawSelectionInRect:"),
    drawSeparator: objc.instanceSelector("drawSeparatorInRect:"),

    // Accessing A Row Column View
    viewAtColumn: objc.instanceSelector("viewAtColumn:")

});