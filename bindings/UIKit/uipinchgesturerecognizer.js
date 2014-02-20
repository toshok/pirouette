// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIPinchGestureRecognizer");
var UIPinchGestureRecognizer;
_exports.UIPinchGestureRecognizer = UIPinchGestureRecognizer = UIGestureRecognizer.extendClass ("UIPinchGestureRecognizer", () => ({

    // Interpreting the Pinching Gesture
    scale: objc.instanceProperty(),
    velocity: objc.instanceProperty()

}));
