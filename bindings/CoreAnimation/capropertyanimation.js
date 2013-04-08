// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAPropertyAnimation = CAPropertyAnimation = CAAnimation.extendClass("CAPropertyAnimation", {

    // Animated Key Path
    keyPath: objc.instanceProperty(),

    // Property Value Calculation Behavior
    cumulative: objc.instanceProperty(),
    additive: objc.instanceProperty(),
    valueFunction: objc.instanceProperty(),

    // Creating an Animation
    animationWithKeyPath: objc.staticSelector("animationWithKeyPath:")

});