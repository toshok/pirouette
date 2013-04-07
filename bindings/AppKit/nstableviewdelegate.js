// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSTableViewDelegate = NSTableViewDelegate = objc.bindProtocol(foundation.Protocol,
  function NSTableViewDelegate () {
    NSTableViewDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Providing Views for Rows and Columns
    viewFor: objc.optionalMethod ("tableView:viewForTableColumn:row:"),
    viewForRow: objc.optionalMethod ("tableView:rowViewForRow:"),

    // Notification of Row Views Being Added or Removed.
    addedRowView: objc.optionalMethod ("tableView:didAddRowView:forRow:"),
    removedRowView: objc.optionalMethod ("tableView:didRemoveRowView:forRow:"),

    // Grouping Rows
    isGroupRow: objc.optionalMethod ("tableView:isGroupRow:"),

    // Providing Cells for Rows and Columns
    willDisplayCell: objc.optionalMethod ("tableView:willDisplayCell:forTableColumn:row:"),
    dataCellFor: objc.optionalMethod ("tableView:dataCellForTableColumn:row:"),
    shouldShowCellExpansionFor: objc.optionalMethod ("tableView:shouldShowCellExpansionForTableColumn:row:"),
    toolTipForCell: objc.optionalMethod ("tableView:toolTipForCell:rect:tableColumn:row:mouseLocation:"),

    // Editing Cells
    shouldEdit: objc.optionalMethod ("tableView:shouldEditTableColumn:row:"),

    // Setting Row and Column Size
    rowHeight: objc.optionalMethod ("tableView:heightOfRow:"),
    sizeToFitWidth: objc.optionalMethod ("tableView:sizeToFitWidthOfColumn:"),

    // Selecting Rows
    selectionShouldChange: objc.optionalMethod ("selectionShouldChangeInTableView:"),
    shouldSelectRow: objc.optionalMethod ("tableView:shouldSelectRow:"),
    selectionIndexesForProposedSelection: objc.optionalMethod ("tableView:selectionIndexesForProposedSelection:"),
    shouldSelectTableColumn: objc.optionalMethod ("tableView:shouldSelectTableColumn:"),
    selectionIsChanging: objc.optionalMethod ("tableViewSelectionIsChanging:"),
    selectionChanged: objc.optionalMethod ("tableViewSelectionDidChange:"),
    shouldTypeSelect: objc.optionalMethod ("tableView:shouldTypeSelectForEvent:withCurrentSearchString:"),
    typeSelectString: objc.optionalMethod ("tableView:typeSelectStringForTableColumn:row:"),
    nextTypeSelectMatch: objc.optionalMethod ("tableView:nextTypeSelectMatchFromRow:toRow:forString:"),

    // Moving and Resizing Columns
    shouldReorder: objc.optionalMethod ("tableView:shouldReorderColumn:toColumn:"),
    draggedTableColumn: objc.optionalMethod ("tableView:didDragTableColumn:"),
    columnMoved: objc.optionalMethod ("tableViewColumnDidMove:"),
    columnResized: objc.optionalMethod ("tableViewColumnDidResize:"),

    // Responding to Mouse Events
    clickedTableColumn: objc.optionalMethod ("tableView:didClickTableColumn:"),
    mouseDownInHeader: objc.optionalMethod ("tableView:mouseDownInHeaderOfTableColumn:"),
    shouldTrackCell: objc.optionalMethod ("tableView:shouldTrackCell:forTableColumn:row:")

});