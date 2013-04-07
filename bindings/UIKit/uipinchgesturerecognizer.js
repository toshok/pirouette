// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPinchGestureRecognizer");
exports.UIPinchGestureRecognizer = UIPinchGestureRecognizer = objc.bindClass(UIGestureRecognizer,
  function UIPinchGestureRecognizer () {
    return UIPinchGestureRecognizer.__super__.constructor.apply(this, arguments);
  }, {

    // Interpreting the Pinching Gesture
    scale: objc.instanceProperty(),
    velocity: objc.instanceProperty()

});
