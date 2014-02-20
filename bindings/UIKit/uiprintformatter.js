// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIPrintFormatter");
var UIPrintFormatter;
_exports.UIPrintFormatter = UIPrintFormatter = foundation.NSObject.extendClass ("UIPrintFormatter", () => ({

    // Laying Out the Content
    contentInsets: objc.instanceProperty(),
    maximumContentHeight: objc.instanceProperty(),
    maximumContentWidth: objc.instanceProperty(),

    // Managing Pagination
    startPage: objc.instanceProperty(),
    pageCount: objc.instanceProperty(),

    // Drawing the Content
    drawInRectForPageAtIndex:    objc.instanceSelector("drawInRect:forPageAtIndex:"),
    rectForPageAtIndex:          objc.instanceSelector("rectForPageAtIndex:"),

    // Communicating with the Page Renderer
    removeFromPrintPageRenderer: objc.instanceSelector("removeFromPrintPageRenderer"),
    printPageRenderer: objc.instanceProperty()

}));
