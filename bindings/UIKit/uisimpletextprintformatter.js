// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISimpleTextPrintFormatter");
exports.UISimplePrintFormatter = UISimplePrintFormatter = UIPrintFormatter.extendClass ("UISimplePrintFormatter", {
    // Creating a Simple-Text Print Formatter
    initWithText:     objc.instanceSelector("initWithText:"),

    // Getting and Setting the Text
    text: objc.instanceProperty(),

    // Text Attributes for Printed Content
    font: objc.instanceProperty(),
    color: objc.instanceProperty(),
    lineBreakMode: objc.instanceProperty(),
    textAlignment: objc.instanceProperty()

});