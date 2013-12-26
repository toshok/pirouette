// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPopoverBackgroundView");
var UIPopoverBackgroundView;
_exports.UIPopoverBackgroundView = UIPopoverBackgroundView = UIView.extendClass ("UIPopoverBackgroundView", () => { return {

    // Returning the Content View Insets
    contentViewInsets: objc.staticSelector("contentViewInsets"),

    // Accessing the Arrow Metrics
    arrowOffset: objc.instanceProperty(),
    arrowDirection: objc.instanceProperty(),

    arrowHeight: objc.staticSelector("arrowHeight"),
    arrowBase:   objc.staticSelector("arrowBase")

}; });
