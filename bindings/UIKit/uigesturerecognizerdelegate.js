// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIGestureRecognizerDelegate");
exports.UIGestureRecognizerDelegate = UIGestureRecognizerDelegate = objc.bindProtocol(foundation.Protocol,
  function UIGestureRecognizerDelegate () {
    return UIGestureRecognizerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Regulating Gesture Recognition
    shouldBegin:        objc.optionalMethod("gestureRecognizerShouldBegin:"),
    shouldReceiveTouch: objc.optionalMethod("gestureRecognizer:shouldReceiveTouch:"),

    // Controlling Simultaneous Gesture Recognition
    shouldRecognizeSimultaneouslyWithGestureRecognizer: objc.optionalMethod("gestureRecognizer:shouldRecognizeSimultaneouslyWithGestureRecognizer:")

});