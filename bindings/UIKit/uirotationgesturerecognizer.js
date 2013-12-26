// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIRotationGestureRecognizer");
var UIRotationGestureRecognizer;
_exports.UIRotationGestureRecognizer = UIRotationGestureRecognizer = UIGestureRecognizer.extendClass ("UIRotationGestureRecognizer", () => { return {

    // Interpreting the Gesture
    rotation: objc.instanceProperty(),
    velocity: objc.instanceProperty()

}; });
