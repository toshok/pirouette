// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIActivityIndicatorView");
exports.UIActivityIndicatorView = UIActivityIndicatorView = UIView.extendClass ("UIActivityIndicatorView", {

  // Initializing an Activity Indicator
  initWithActivityIndicatorStyle: objc.nativeSelector("initWithActivityIndicatorStyle:"),

  // Managing an Activity Indicator
  startAnimating:   objc.nativeSelector("startAnimating"),
  stopAnimating:    objc.nativeSelector("stopAnimating"),
  isAnimating:      objc.nativeSelector("isAnimating"),
  hidesWhenStopped: objc.instanceProperty("hidesWhenStopped"),

  // Configuring the Activity Indicator Appearance
  activityIndicatorViewStyle: objc.instanceProperty(),
  color: objc.instanceProperty()

});
