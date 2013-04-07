// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIMarkupTextPrintFormatter");
exports.UIMarkupTextPrintFormatter = UIMarkupTextPrintFormatter = objc.bindClass(UIPrintFormatter,
  function UIMarkupTextPrintFormatter () {
    return UIMarkupTextPrintFormatter.__super__.constructor.apply(this, arguments);
  }, {

    // Creating a Markup-Text Print Formatter
    initWithMarkupText: objc.instanceSelector("initWithMarkupText:"),

    // Getting and Setting the Markup Text
    markupText: objc.instanceProperty()

});