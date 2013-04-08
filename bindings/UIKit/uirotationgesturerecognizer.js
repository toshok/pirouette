// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIRotationGestureRecognizer");
exports.UIRotationGestureRecognizer = UIRotationGestureRecognizer = UIGestureRecognizer.extendClass ("UIRotationGestureRecognizer", {

    // Interpreting the Gesture
    rotation: objc.instanceProperty(),
    velocity: objc.instanceProperty()

});
