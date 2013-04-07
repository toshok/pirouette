// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIRotationGestureRecognizer");
exports.UIRotationGestureRecognizer = UIRotationGestureRecognizer = objc.bindClass(UIGestureRecognizer,
  function UIRotationGestureRecognizer () {
    return UIRotationGestureRecognizer.__super__.constructor.apply(this, arguments);
  }, {

    // Interpreting the Gesture
    rotation: objc.instanceProperty(),
    velocity: objc.instanceProperty()

});
