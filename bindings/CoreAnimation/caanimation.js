// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CAAnimation;
exports.CAAnimation = CAAnimation = foundation.NSObject.extendClass("CAAnimation", () => ({

    // Archiving Properties
    shouldArchiveValueForKey: objc.instanceSelector("shouldArchiveValueForKey:"),

    // Providing Default Values for Properties
    defaultValueForKey: objc.staticSelector("defaultValueForKey:"),

    // Creating an Animation
    animation: objc.staticSelector("animation"),

    // Animation Attributes
    removedOnCompletion: objc.instanceProperty(),
    isRemovedOnCompletion: objc.instanceSelector("isRemovedOnCompletion"),
    timingFunction: objc.instanceProperty(),

    // Getting and Setting the Delegate
    delegate: objc.autoboxProperty(CAAnimationDelegate)

}));
