// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSTableView = NSTableView = objc.bindClass(NSControl,
  function NSTableView () {
    NSTableView.__super__.constructor.apply(this, arguments);
  }, {

    // Creating the Displayed Views
    makeViewWithIdentifier: objc.instanceSelector("makeViewWithIdentifier:owner:"),
    rowViewAtRow: objc.instanceSelector("rowViewAtRow:makeIfNecessary:"),
    viewAt: objc.instanceSelector("viewAtColumn:row:makeIfNecessary:"),

    // Setting the Data Source
    dataSource: objc.autoboxProperty(NSTableViewDataSource),

    // Loading Data
    reloadData: objc.instanceSelector("reloadData"),
    reloadDataFor: objc.instanceSelector("reloadDataForRowIndexes:columnIndexes:"),

    // Using Views for Row and Column Content
    beginUpdates: objc.instanceSelector("beginUpdates"),
    endUpdates: objc.instanceSelector("endUpdates"),
    columnForView: objc.instanceSelector("columnForView:"),
    moveRowAt: objc.instanceSelector("moveRowAtIndex:toIndex:"),
    insertRowsAt: objc.instanceSelector("insertRowsAtIndexes:withAnimation:"),
    removeRowsAt: objc.instanceSelector("removeRowsAtIndexes:withAnimation:"),
    rowForView: objc.instanceSelector("rowForView:"),

    // View-based Table Nib Registration
    registerNib: objc.instanceSelector("registerNib:forIdentifier:"),
    registeredNibsByIdentifier: objc.instanceSelector("registeredNibsByIdentifier"),

    // Target-action Behavior
    doubleAction: objc.instanceSelector(),
    clickedColumn: objc.instanceSelector({ set: null }),
    clickedRow: objc.instanceSelector({ set: null }),

    // Configuring Behavior
    allowsColumnReordering: objc.instanceSelector(),
    allowsColumnResizing: objc.instanceSelector(),
    allowsEmptySelection: objc.instanceSelector(),
    allowsColumnSelection: objc.instanceSelector(),

    // Setting Display Attributes
    intercellSpacing: objc.instanceSelector(),
    rowHeight: objc.instanceSelector(),
    backgroundColor: objc.instanceSelector(),
    usesAlternatingRowBackgroundColors: objc.instanceSelector(),
    selectionHighlightStyle: objc.instanceSelector(),
    gridColor: objc.instanceSelector(),
    gridStyleMask: objc.instanceSelector(),

    indicatorImage: objc.instanceSelector("indicatorImageInTableColumn:"),
    setIndicatorImage: objc.instanceSelector("setIndicatorImage:inTableColumn:"),

    // Getting and Setting Row Size Styles
    effectiveRowSizeStyle: objc.instanceSelector("effectiveRowSizeStyle"),
    rowSizeStyle: objc.instanceSelector(),

    // Column Management
    addTableColumn: objc.instanceSelector("addTableColumn:"),
    removeTableColumn: objc.instanceSelector("removeTableColumn:"),
    moveColumn: objc.instanceSelector("moveColumn:toColumn:"),
    tableColumns: objc.instanceSelector({ set: null }),
    columnWithIdentifier: objc.instanceSelector("columnWithIdentifier:"),
    tableColumnWithIdentifier: objc.instanceSelector("tableColumnWithIdentifier:"),

    // Selecting Columns and Rows
    selectedColumn: objc.instanceSelector({ set: null }),
    selectedColumnIndexes: objc.instanceSelector({ set: null }),
    numberOfSelectedColumns: objc.instanceSelector({ set: null }),
    selectedRow: objc.instanceSelector({ set: null }),
    selectedRowIndexes: objc.instanceSelector({ set: null }),
    numberOfSelectedRows: objc.instanceSelector({ set: null }),
    selectColumnIndexes: objc.instanceSelector("selectColumnIndexes:byExtendingSelection:"),
    deselectColumn: objc.instanceSelector("deselectColumn:"),
    isColumnSelected: objc.instanceSelector("isColumnSelected:"),
    selectRowIndexes: objc.instanceSelector("selectRowIndexes:byExtendingSelection:"),
    deselectRow: objc.instanceSelector("deselectRow:"),
    isRowSelected: objc.instanceSelector("isRowSelected:"),
    selectAll: objc.instanceSelector("selectAll:"),
    deselectAll: objc.instanceSelector("deselectAll:"),

    // Enumerating Table Rows
    enumerateAvailableRowViewsUsingBlock: objc.instanceSelector("enumerateAvailableRowViewsUsingBlock:"),

    // Managing Type Select
    allowsTypeSelect: objc.instanceSelector("allowsTypeSelect"),
    setAllowsTypeSelect: objc.instanceSelector("setAllowsTypeSelect:"),

    // Getting and Setting Column Focus
    focusedColumn: objc.instanceSelector("focusedColumn"),
    setFocusedColumn: objc.instanceSelector("setFocusedColumn:"),
    shouldFocusCell: objc.instanceSelector("shouldFocusCell:atColumn:row:"),

    // Table Dimensions
    numberOfColumns: objc.instanceSelector("numberOfColumns"),
    numberOfRows: objc.instanceSelector("numberOfRows"),

    // Displaying Cell
    preparedCell: objc.instanceSelector("preparedCellAtColumn:row:"),

    // Getting and Setting Floating Rows
    floatsGroupRows: objc.instanceSelector("floatsGroupRows"),
    setFloatsGroupRows: objc.instanceSelector("setFloatsGroupRows:"),

    // Editing Cells
    editColumn: objc.instanceSelector("editColumn:row:withEvent:select:"),
    editedColumn: objc.instanceSelector("editedColumn"),
    editedRow: objc.instanceSelector("editedRow"),
    performClickOnCell: objc.instanceSelector("performClickOnCellAtColumn:row:"),

    // Setting Auxiliary Views
    headerView: objc.instanceSelector(),
    cornerView: objc.instanceSelector(),

    // Layout Support
    rectOfColumn: objc.instanceSelector("rectOfColumn:"),
    rectOfRow: objc.instanceSelector("rectOfRow:"),
    rowsInRect: objc.instanceSelector("rowsInRect:"),
    columnIndexesInRect: objc.instanceSelector("columnIndexesInRect:"),
    columnAtPoint: objc.instanceSelector("columnAtPoint:"),
    rowAtPoint: objc.instanceSelector("rowAtPoint:"),
    frameOfCell: objc.instanceSelector("frameOfCellAtColumn:row:"),
    columnAutoresizingStyle: objc.instanceSelector(),
    sizeLastColumnToFit: objc.instanceSelector("sizeLastColumnToFit"),
    noteNumberOfRowsChanged: objc.instanceSelector("noteNumberOfRowsChanged"),
    tile: objc.instanceSelector("tile"),
    sizeToFit: objc.instanceSelector("sizeToFit"),
    noteHeightOfRowsWithIndexesChanged: objc.instanceSelector("noteHeightOfRowsWithIndexesChanged:"),
    columnsInRect: objc.instanceSelector("columnsInRect:"), // Deprecated in OS X v10.5

    // Drawing
    drawRow: objc.instanceSelector("drawRow:clipRect:"),
    drawGrid: objc.instanceSelector("drawGridInClipRect:"),
    highlightSelection: objc.instanceSelector("highlightSelectionInClipRect:"),
    drawBackground: objc.instanceSelector("drawBackgroundInClipRect:"),

    // Scrolling
    scrollRowToVisible: objc.instanceSelector("scrollRowToVisible:"),
    scrollColumnToVisible: objc.instanceSelector("scrollColumnToVisible:"),

    // Table Column State Persistence
    autosaveName: objc.instanceSelector(),
    autosaveTableColumns: objc.instanceSelector(),

    // Setting the Delegate
    delegate: objc.autoboxProperty(NSTableViewDelegate),

    // Highlightable Column Headers
    highlightedTableColumn: objc.instanceSelector(),

    // Dragging
    dragImageForRows: objc.instanceSelector("dragImageForRowsWithIndexes:tableColumns:event:offset:"),
    canDragRows: objc.instanceSelector("canDragRowsWithIndexes:atPoint:"),
    setDraggingSourceOperationMask: objc.instanceSelector("setDraggingSourceOperationMask:forLocal:"),
    verticalMotionCanBeginDrag: objc.instanceSelector(),
    draggingDestinationFeedbackStyle: objc.instanceSelector(),
    setDropRow: objc.instanceSelector("setDropRow:dropOperation:"),

    // Sorting
    sortDescriptors: objc.instanceSelector(),

    // Text Delegate Methods
    textShouldBeginEditing: objc.instanceSelector("textShouldBeginEditing:"),
    textDidBeginEditing: objc.instanceSelector("textDidBeginEditing:"),
    textDidChange: objc.instanceSelector("textDidChange:"),
    textShouldEndEditing: objc.instanceSelector("textShouldEndEditing:"),
    textDidEndEditing: objc.instanceSelector("textDidEndEditing:"),

    // Deprecated Methods
    drawsGrid: objc.instanceSelector("drawsGrid"), // Deprecated in OS X v10.3
    selectColumn: objc.instanceSelector("selectColumn:byExtendingSelection:"), // Deprecated in OS X v10.3
    selectedColumnEnumerator: objc.instanceSelector("selectedColumnEnumerator"), // Deprecated in OS X v10.3
    selectedRowEnumerator: objc.instanceSelector("selectedRowEnumerator"), // Deprecated in OS X v10.3
    selectRow: objc.instanceSelector("selectRow:byExtendingSelection:"), // Deprecated in OS X v10.3
    setDrawsGrid: objc.instanceSelector("setDrawsGrid:"), // Deprecated in OS X v10.3
    autoresizesAllColumnsToFit: objc.instanceSelector("autoresizesAllColumnsToFit"), // Deprecated in OS X v10.4
    dragImage: objc.instanceSelector("dragImageForRows:event:dragImageOffset:"), // Deprecated in OS X v10.4
    setAutoresizesAllColumnsToFit: objc.instanceSelector("setAutoresizesAllColumnsToFit:"), // Deprecated in OS X v10.4
    writeRows: objc.instanceSelector("tableView:writeRows:toPasteboard:")  // delegate method Deprecated in OS X v10.4
});

NSTableView.newWithFrame = function(frame) {
  return NSTableView.newWith({ initWith: "Frame", args: [frame] });
};
