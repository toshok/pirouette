// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIGestureRecognizerDelegate");
var UIGestureRecognizerDelegate;
_exports.UIGestureRecognizerDelegate = UIGestureRecognizerDelegate = foundation.Protocol.extendClass("UIGestureRecognizerDelegate", () => ({

    // Regulating Gesture Recognition
    shouldBegin:        objc.optionalMethod("gestureRecognizerShouldBegin:"),
    shouldReceiveTouch: objc.optionalMethod("gestureRecognizer:shouldReceiveTouch:"),

    // Controlling Simultaneous Gesture Recognition
    shouldRecognizeSimultaneouslyWithGestureRecognizer: objc.optionalMethod("gestureRecognizer:shouldRecognizeSimultaneouslyWithGestureRecognizer:")

}));
