// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITableView");
exports.UITableView = UITableView = UIScrollView.extendClass ("UITableView", {

    // Initializing a UITableView Object
    initWithFrame: objc.instanceSelector("initWithFrame:style:"),

    // Configuring a Table View
    dequeueReusableCellWithIdentifier: objc.instanceSelector("dequeueReusableCellWithIdentifier:"),
    numberOfRowsInSection:             objc.instanceSelector("numberOfRowsInSection:"),
    numberOfSections:                  objc.instanceSelector("numberOfSections"),
    style: objc.instanceProperty(),
    rowHeight: objc.instanceProperty(),
    separatorStyle: objc.instanceProperty(),
    separatorColor: objc.instanceProperty(),
    backgroundView: objc.instanceProperty(),
    tableHeaderView: objc.instanceProperty(),
    tableFooterView: objc.instanceProperty(),
    sectionHeaderHeight: objc.instanceProperty(),
    sectionFooterHeight: objc.instanceProperty(),
    sectionIndexMinimumDisplayRowCount: objc.instanceProperty(),

    // Accessing Cells and Sections
    cellForRowAtIndexPath:    objc.instanceSelector("cellForRowAtIndexPath:"),
    indexPathForCell:         objc.instanceSelector("indexPathForCell:"),
    indexPathForRowAtPoint:   objc.instanceSelector("indexPathForRowAtPoint:"),
    indexPathsForRowsInRect:  objc.instanceSelector("indexPathsForRowsInRect:"),
    visibleCells:             objc.instanceSelector("visibleCells"),
    indexPathsForVisibleRows: objc.instanceSelector("indexPathsForVisibleRows"),

    // Scrolling the Table View
    scrollToRowAtIndexPath:                     objc.instanceSelector("scrollToRowAtIndexPath:atScrollPosition:animated:"),
    scrollToNearestSelectedRowAtScrollPosition: objc.instanceSelector("scrollToNearestSelectedRowAtScrollPosition:animated:"),

    // Managing Selections
    indexPathForSelectedRow:   objc.instanceSelector("indexPathForSelectedRow"),
    indexPathsForSelectedRows: objc.instanceSelector("indexPathsForSelectedRows"),
    selectRowAtIndexPath:      objc.instanceSelector("selectRowAtIndexPath:animated:scrollPosition:"),
    deselectRowAtIndexPath:    objc.instanceSelector("deselectRowAtIndexPath:animated:"),
    allowsSelection: objc.instanceProperty(),
    allowsMultipleSelection: objc.instanceProperty(),
    allowsSelectionDuringEditing: objc.instanceProperty(),
    allowsMultipleSelectionDuringEditing: objc.instanceProperty(),

    // Inserting, Deleting, and Moving Rows and Sections
    beginUpdates:           objc.instanceSelector("beginUpdates"),
    endUpdates:             objc.instanceSelector("endUpdates"),
    insertRowsAtIndexPaths: objc.instanceSelector("insertRowsAtIndexPaths:withRowAnimation:"),
    deleteRowsAtIndexPaths: objc.instanceSelector("deleteRowsAtIndexPaths:withRowAnimation:"),
    moveRowAtIndexPath:     objc.instanceSelector("moveRowAtIndexPath:toIndexPath:"),
    insertSections:         objc.instanceSelector("insertSections:withRowAnimation:"),
    deleteSections:         objc.instanceSelector("deleteSections:withRowAnimation:"),
    moveSection:            objc.instanceSelector("moveSection:toSection:"),

    // Managing the Editing of Table Cells
    editing: objc.instanceProperty({ set: function(v) { return this.setEditing(v, false); } }),
    setEditing: objc.instanceSelector("setEditing:animated:"),

    // Reloading the Table View
    reloadData:               objc.instanceSelector("reloadData"),
    reloadRowsAtIndexPaths:   objc.instanceSelector("reloadRowsAtIndexPaths:withRowAnimation:"),
    reloadSections:           objc.instanceSelector("reloadSections:withRowAnimation:"),
    reloadSectionIndexTitles: objc.instanceSelector("reloadSectionIndexTitles"),

    // Accessing Drawing Areas of the Table View
    rectForSection:         objc.instanceSelector("rectForSection:"),
    rectForRowAtIndexPath:  objc.instanceSelector("rectForRowAtIndexPath:"),
    rectForFooterInSection: objc.instanceSelector("rectForFooterInSection:"),
    rectForHeaderInSection: objc.instanceSelector("rectForHeaderInSection:"),

    // Registering Nib Objects for Cell Reuse
    registerNibForCellReuseIdentifier: objc.instanceSelector("registerNib:forCellReuseIdentifier:"),

    // Managing the Delegate and the Data Source
    dataSource: objc.autoboxProperty(UITableViewDataSource),
    delegate: objc.autoboxProperty(UITableViewDelegate)

});