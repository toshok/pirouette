// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPinchGestureRecognizer");
exports.UIPinchGestureRecognizer = UIPinchGestureRecognizer = UIGestureRecognizer.extendClass ("UIPinchGestureRecognizer", {

    // Interpreting the Pinching Gesture
    scale: objc.instanceProperty(),
    velocity: objc.instanceProperty()

});
