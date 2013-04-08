// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPanGestureRecognizer");
exports.UIPanGestureRecognizer = UIPanGestureRecognizer = UIGestureRecognizer.extendClass ("UIPanGestureRecognizer", {

    // Configuring the Gesture Recognizer
    maximumNumberOfTouches: objc.instanceProperty(),
    minimumNumberOfTouches: objc.instanceProperty(),

    // Tracking the Location and Velocity of the Gesture
    translationInView:    objc.instanceSelector("translationInView:"),
    setTranslationInView: objc.instanceSelector("setTranslation:inView:"),
    velocityInView:       objc.instanceSelector("velocityInView:")

});
