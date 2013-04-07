// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPopoverBackgroundView");
exports.UIPopoverBackgroundView = UIPopoverBackgroundView = objc.bindClass(UIView,
  function UIPopoverBackgroundView () {
    return UIPopoverBackgroundView.__super__.constructor.apply(this, arguments);
  }, {

    // Returning the Content View Insets
    contentViewInsets: objc.staticSelector("contentViewInsets"),

    // Accessing the Arrow Metrics
    arrowOffset: objc.instanceProperty(),
    arrowDirection: objc.instanceProperty(),

    arrowHeight: objc.staticSelector("arrowHeight"),
    arrowBase:   objc.staticSelector("arrowBase")

});
