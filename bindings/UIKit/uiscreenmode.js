// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIScreenMode");
exports.UIScreenMode = UIScreenMode = foundation.NSObject.extendClass ("UIScreenMode", {

    // Accessing the Screen Mode Attributes
    size: objc.instanceProperty(),
    pixelAspectRatio: objc.instanceProperty()
});
