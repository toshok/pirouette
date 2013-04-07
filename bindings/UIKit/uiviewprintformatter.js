// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIViewPrintFormatter");
exports.UIViewPrintFormatter = UIViewPrintFormatter = objc.bindClass(UIPrintFormatter,
  function UIViewPrintFormatter () {
    return UIViewPrintFormatter.__super__.constructor.apply(this, arguments);
  }, {

    // Accessing the View
    view: objc.instanceProperty()

});
