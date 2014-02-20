// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UITapGestureRecognizer");
var UITapGestureRecognizer;
_exports.UITapGestureRecognizer = UITapGestureRecognizer = UIGestureRecognizer.extendClass ("UITapGestureRecognizer", () => ({

    // Configuring the Gesture
    numberOfTapsRequired: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty()

}));
