// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIScreenMode");
var UIScreenMode;
_exports.UIScreenMode = UIScreenMode = foundation.NSObject.extendClass ("UIScreenMode", () => ({

    // Accessing the Screen Mode Attributes
    size: objc.instanceProperty(),
    pixelAspectRatio: objc.instanceProperty()

}));
