// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CAAnimationGroup;
exports.CAAnimationGroup = CAAnimationGroup = CAAnimation.extendClass("CAAnimationGroup", () => ({

    // Grouped Animations
    animations: objc.instanceProperty()

}));
