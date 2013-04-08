// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIEvent");
exports.UIEvent = UIEvent = foundation.NSObject.extendClass ("UIEvent", {

    // Getting the Touches for an Event
    allTouches:       objc.instanceSelector("allTouches"),
    touchesForView:   objc.instanceSelector("touchesForView:"),
    touchesForWindow: objc.instanceSelector("touchesForWindow:"),

    // Getting Event Attributes
    timestamp: objc.instanceProperty(),

    // Getting the Event Type
    type: objc.instanceProperty(),
    subtype: objc.instanceProperty(),

    // Getting the Touches for a Gesture Recognizer
    touchesForGestureRecognizer: objc.instanceSelector("touchesForGestureRecognizer:")

});
