// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPanGestureRecognizer");
exports.UIPanGestureRecognizer = UIPanGestureRecognizer = objc.bindClass(UIGestureRecognizer,
  function UIPanGestureRecognizer () {
    return UIPanGestureRecognizer.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Gesture Recognizer
    maximumNumberOfTouches: objc.instanceProperty(),
    minimumNumberOfTouches: objc.instanceProperty(),

    // Tracking the Location and Velocity of the Gesture
    translationInView:    objc.instanceSelector("translationInView:"),
    setTranslationInView: objc.instanceSelector("setTranslation:inView:"),
    velocityInView:       objc.instanceSelector("velocityInView:")

});
