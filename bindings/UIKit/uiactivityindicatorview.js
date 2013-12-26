// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIActivityIndicatorView");
var UIActivityIndicatorView;
_exports.UIActivityIndicatorView = UIActivityIndicatorView = UIView.extendClass ("UIActivityIndicatorView", () => { return {

  // Initializing an Activity Indicator
  initWithActivityIndicatorStyle: objc.instanceSelector("initWithActivityIndicatorStyle:"),

  // Managing an Activity Indicator
  startAnimating:   objc.instanceSelector("startAnimating"),
  stopAnimating:    objc.instanceSelector("stopAnimating"),
  isAnimating:      objc.instanceSelector("isAnimating"),
  hidesWhenStopped: objc.instanceProperty(),

  // Configuring the Activity Indicator Appearance
  activityIndicatorViewStyle: objc.instanceProperty(),
  color: objc.instanceProperty()

}; });
