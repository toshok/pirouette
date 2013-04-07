// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAAnimationGroup = CAAnimationGroup = objc.bindClass(CAAnimation,
  function CAAnimationGroup () {
    return CAAnimationGroup.__super__.constructor.apply(this, arguments);
  }, {

    // Grouped Animations
    animations: objc.instanceProperty()

});
