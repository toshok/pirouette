// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UILongPressGestureRecognizer");
exports.UILongPressGestureRecognizer = UILongPressGestureRecognizer = UIGestureRecognizer.extendClass ("UILongPressGestureRecognizer", {

    // Configuring the Gesture Recognizer
    minimumPressDuration: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty(),
    numberOfTapsRequired: objc.instanceProperty(),
    allowableMovement: objc.instanceProperty()

});
