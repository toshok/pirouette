// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UILongPressGestureRecognizer");
var UILongPressGestureRecognizer;
_exports.UILongPressGestureRecognizer = UILongPressGestureRecognizer = UIGestureRecognizer.extendClass ("UILongPressGestureRecognizer", () => { return {

    // Configuring the Gesture Recognizer
    minimumPressDuration: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty(),
    numberOfTapsRequired: objc.instanceProperty(),
    allowableMovement: objc.instanceProperty()

}; });
