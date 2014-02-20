// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CAPropertyAnimation;
_exports.CAPropertyAnimation = CAPropertyAnimation = CAAnimation.extendClass("CAPropertyAnimation", () => ({

    // Animated Key Path
    keyPath: objc.instanceProperty(),

    // Property Value Calculation Behavior
    cumulative: objc.instanceProperty(),
    additive: objc.instanceProperty(),
    valueFunction: objc.instanceProperty(),

    // Creating an Animation
    animationWithKeyPath: objc.staticSelector("animationWithKeyPath:")

}));
