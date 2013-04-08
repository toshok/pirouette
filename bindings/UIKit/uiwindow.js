// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIWindow");
exports.UIWindow = UIWindow = objc.bindClass(UIView,
  function UIWindow () {
    return UIWindow.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring Windows
    windowLevel: objc.instanceProperty(),
    screen: objc.instanceProperty(),
    rootViewController: objc.instanceProperty(),

    // Making Windows Key
    keyWindow: objc.instanceProperty(),
    makeKeyAndVisible: objc.instanceSelector("makeKeyAndVisible"),
    becomeKeyWindow:   objc.instanceSelector("becomeKeyWindow"),
    makeKeyWindow:     objc.instanceSelector("makeKeyWindow"),
    resignKeyWindow:   objc.instanceSelector("resignKeyWindow"),

    // Converting Coordinates
    convertPointToWindow:   objc.instanceSelector("convertPoint:toWindow:"),
    convertPointFromWindow: objc.instanceSelector("convertPoint:fromWindow:"),
    convertRectToWindow:    objc.instanceSelector("convertRect:toWindow:"),
    convertRectFromWindow:  objc.instanceSelector("convertRect:fromWindow:"),

    // Sending Events
    sendEvent:              objc.instanceSelector("sendEvent:")

});