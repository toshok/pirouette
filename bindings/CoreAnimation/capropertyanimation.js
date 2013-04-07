// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAPropertyAnimation = CAPropertyAnimation = objc.bindClass(CAAnimation,
  function CAPropertyAnimation () {
    return CAPropertyAnimation.__super__.constructor.apply(this, arguments);
  }, {

    // Animated Key Path
    keyPath: objc.instanceProperty(),

    // Property Value Calculation Behavior
    cumulative: objc.instanceProperty(),
    additive: objc.instanceProperty(),
    valueFunction: objc.instanceProperty(),

    // Creating an Animation
    animationWithKeyPath: objc.staticSelector("animationWithKeyPath:")

});