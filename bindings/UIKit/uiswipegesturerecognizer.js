// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log "UISwipeGestureRecognizer"
var UISwipeGestureRecognizer;
_exports.UISwipeGestureRecognizer = UISwipeGestureRecognizer = UIGestureRecognizer.extendClass ("UISwipeGestureRecognizer", () => ({

    // Configuring the Gesture
    direction: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty()

}));
