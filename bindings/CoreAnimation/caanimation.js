// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAAnimation = CAAnimation = objc.bindClass(foundation.NSObject,
  function CAAnimation () {
    return CAAnimation.__super__.constructor.apply(this, arguments);
  }, {

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

});
