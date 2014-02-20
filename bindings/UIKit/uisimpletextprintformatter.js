// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UISimpleTextPrintFormatter");
var UISimplePrintFormatter;
_exports.UISimplePrintFormatter = UISimplePrintFormatter = UIPrintFormatter.extendClass ("UISimplePrintFormatter", () => ({
    // Creating a Simple-Text Print Formatter
    initWithText:     objc.instanceSelector("initWithText:"),

    // Getting and Setting the Text
    text: objc.instanceProperty(),

    // Text Attributes for Printed Content
    font: objc.instanceProperty(),
    color: objc.instanceProperty(),
    lineBreakMode: objc.instanceProperty(),
    textAlignment: objc.instanceProperty()

}));
