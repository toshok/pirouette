// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIScreenMode");
var UIScreenMode;
_exports.UIScreenMode = UIScreenMode = foundation.NSObject.extendClass ("UIScreenMode", () => { return {

    // Accessing the Screen Mode Attributes
    size: objc.instanceProperty(),
    pixelAspectRatio: objc.instanceProperty()
}; });
