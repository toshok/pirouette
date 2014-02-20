// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIRotationGestureRecognizer");
var UIRotationGestureRecognizer;
_exports.UIRotationGestureRecognizer = UIRotationGestureRecognizer = UIGestureRecognizer.extendClass ("UIRotationGestureRecognizer", () => ({

    // Interpreting the Gesture
    rotation: objc.instanceProperty(),
    velocity: objc.instanceProperty()

}));
