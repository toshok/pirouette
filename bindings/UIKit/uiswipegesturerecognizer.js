// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log "UISwipeGestureRecognizer"
exports.UISwipeGestureRecognizer = UISwipeGestureRecognizer = UIGestureRecognizer.extendClass ("UISwipeGestureRecognizer", {

    // Configuring the Gesture
    direction: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty()

});
