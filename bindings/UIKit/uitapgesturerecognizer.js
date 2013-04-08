// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITapGestureRecognizer");
exports.UITapGestureRecognizer = UITapGestureRecognizer = UIGestureRecognizer.extendClass ("UITapGestureRecognizer", {

    // Configuring the Gesture
    numberOfTapsRequired: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty()

});