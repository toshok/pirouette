// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITableViewDelegate");
exports.UITableViewDelegate = UITableViewDelegate = foundation.Protocol.extendClass("UITableViewDelegate", {

    // Configuring Rows for the Table View
    heightForRowAtIndexPath:  objc.optionalMethod("tableView:heightForRowAtIndexPath:"),
    indentationLevelForRow:   objc.optionalMethod("tableView:indentationLevelForRowAtIndexPath:"),
    willDisplayCellForRow:    objc.optionalMethod("tableView:willDisplayCell:forRowAtIndexPath:"),

    // Managing Accessory Views
    accessoryButtonTappedForRow:    objc.optionalMethod("tableView:accessoryButtonTappedForRowWithIndexPath:"),
    accessoryTypeForRow:            objc.optionalMethod("tableView:accessoryTypeForRowWithIndexPath:"), // Deprecated in iOS 3.0

    // Managing Selections
    willSelectRow:    objc.optionalMethod("tableView:willSelectRowAtIndexPath:", { sig: "@@:@@" }),
    didSelectRow:     objc.optionalMethod("tableView:didSelectRowAtIndexPath:"/*, { sig: "v@:@@" }*/).
					returns (function() { return objc.sig.Void; }).
					params (function() { return [ foundation.NSObject, foundation.NSObject ]; }),
    willDeselectRow:  objc.optionalMethod("tableView:willDeselectRowAtIndexPath:", { sig: "@@:@@" }),
    didDeselectRow:   objc.optionalMethod("tableView:didDeselectRowAtIndexPath:", { sig: "v@:@@" }),

    // Modifying the Header and Footer of Sections
    viewForHeader:    objc.optionalMethod("tableView:viewForHeaderInSection:"),
    viewForFooter:    objc.optionalMethod("tableView:viewForFooterInSection:"),
    heightForHeader:  objc.optionalMethod("tableView:heightForHeaderInSection:"),
    heightForFooter:  objc.optionalMethod("tableView:heightForFooterInSection:"),

    // Editing Table Rows
    willBeginEditingRow:                    objc.optionalMethod("tableView:willBeginEditingRowAtIndexPath:"),
    didEndEditingRow:                       objc.optionalMethod("tableView:didEndEditingRowAtIndexPath:"),
    editingStyleForRow:                     objc.optionalMethod("tableView:editingStyleForRowAtIndexPath:"),
    titleForDeleteConfirmationButtonForRow: objc.optionalMethod("tableView:titleForDeleteConfirmationButtonForRowAtIndexPath:"),
    shouldIndentWhileEditingRow:            objc.optionalMethod("tableView:shouldIndentWhileEditingRowAtIndexPath:"),

    // Reordering Table Rows
    targetIndexPathForMoveFromRow:     objc.optionalMethod("tableView:targetIndexPathForMoveFromRowAtIndexPath:toProposedIndexPath:"),

    // Copying and Pasting Row Content
    shouldShowMenuForRow:              objc.optionalMethod("tableView:shouldShowMenuForRowAtIndexPath:"),
    canPerformActionForRow:            objc.optionalMethod("tableView:canPerformAction:forRowAtIndexPath:withSender:"),
    performActionForRow:               objc.optionalMethod("tableView:performAction:forRowAtIndexPath:withSender:")

});