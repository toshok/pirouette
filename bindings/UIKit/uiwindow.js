// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIWindow");
var UIWindow;
_exports.UIWindow = UIWindow = UIView.extendClass ("UIWindow", () => ({

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

}));
