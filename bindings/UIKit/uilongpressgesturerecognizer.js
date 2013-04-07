// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UILongPressGestureRecognizer");
exports.UILongPressGestureRecognizer = UILongPressGestureRecognizer = objc.bindClass(UIGestureRecognizer,
  function UILongPressGestureRecognizer () {
    return UILongPressGestureRecognizer.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Gesture Recognizer
    minimumPressDuration: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty(),
    numberOfTapsRequired: objc.instanceProperty(),
    allowableMovement: objc.instanceProperty()

});
