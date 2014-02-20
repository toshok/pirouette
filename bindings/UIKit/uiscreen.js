// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIScreen");
var UIScreen;
_exports.UIScreen = UIScreen = foundation.NSObject.extendClass ("UIScreen", () => ({

    // Getting the Available Screens
    mainScreen:   objc.staticProperty({ set: null }), // readonly class property
    screens:   objc.staticProperty({ set: null }), // readonly class property
    mirroredScreen: objc.instanceProperty(),

    // Getting the Bounds Information
    bounds: objc.instanceProperty(),
    applicationFrame: objc.instanceProperty(),
    scale: objc.instanceProperty(),

    // Accessing the Screen Modes
    preferredMode: objc.instanceProperty(),
    availableModes: objc.instanceProperty(),
    currentMode: objc.instanceProperty(),

    // Getting a Display Link
    displayLink: objc.instanceSelector("displayLinkWithTarget:selector:"),

    // Setting a Display’s Brightness
    brightness: objc.instanceProperty(),
    wantsSoftwareDimming: objc.instanceProperty(),

    // Setting a Display’s Overscan Compensation.
    overscanCompensation: objc.instanceProperty()

}));
