// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIMarkupTextPrintFormatter");
var UIMarkupTextPrintFormatter;
_exports.UIMarkupTextPrintFormatter = UIMarkupTextPrintFormatter = UIPrintFormatter.extendClass ("UIMarkupTextPrintFormatter", () => ({

    // Creating a Markup-Text Print Formatter
    initWithMarkupText: objc.instanceSelector("initWithMarkupText:"),

    // Getting and Setting the Markup Text
    markupText: objc.instanceProperty()

}));
