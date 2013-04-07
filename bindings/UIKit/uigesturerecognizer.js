// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIGestureRecognizer");
exports.UIGestureRecognizer = UIGestureRecognizer = objc.bindClass(foundation.NSObject,
  function UIGestureRecognizer () {
    return UIGestureRecognizer.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing a Gesture Recognizer
    initWithTarget: objc.instanceSelector("initWithTarget:action:"),

    // Adding and Removing Targets and Actions
    addTarget:             objc.instanceSelector("addTarget:action:"),
    removeTarget:          objc.instanceSelector("removeTarget:action:"),

    // Getting the Touches and Location of a Gesture
    locationInView:        objc.instanceSelector("locationInView:"),
    locationOfTouchInView: objc.instanceSelector("locationOfTouch:inView:"),
    numberOfTouches:       objc.instanceSelector("numberOfTouches"),

    // Getting the Recognizer’s State and View
    state: objc.instanceProperty(),
    view: objc.instanceProperty(),
    enabled: objc.instanceProperty(),

    // Canceling and Delaying Touches
    cancelsTouchesInView: objc.instanceProperty(),
    delaysTouchesBegan: objc.instanceProperty(),
    delaysTouchesEnded: objc.instanceProperty(),

    // Specifying Dependencies Between Gesture Recognizers
    requireGestureRecognizerToFail: objc.instanceSelector("requireGestureRecognizerToFail:"),

    // Setting and Getting the Delegate
    delegate: objc.autoboxProperty(UIGestureRecognizerDelegate),

    // Methods For Subclasses

    // The UIGestureRecognizerSubclass.h header file contains a extension
    // class extension that declares methods intended to be called or
    // overridden only by subclasses of UIGestureRecognizer. Clients that
    // merely use concrete subclasses of UIGestureRecognizer must never
    // call these methods (except for those noted).

    touchesBegan:                      objc.instanceSelector("touchesBegan:withEvent:"),
    touchesMoved:                      objc.instanceSelector("touchesMoved:withEvent:"),
    touchesEnded:                      objc.instanceSelector("touchesEnded:withEvent:"),
    touchesCancelled:                  objc.instanceSelector("touchesCancelled:withEvent:"),
    reset:                             objc.instanceSelector("reset"),
    ignoreTouch:                       objc.instanceSelector("ignoreTouch:forEvent:"),
    canBePreventedByGestureRecognizer: objc.instanceSelector("canBePreventedByGestureRecognizer:"),
    canPreventGestureRecognizer:       objc.instanceSelector("canPreventGestureRecognizer:")

});
