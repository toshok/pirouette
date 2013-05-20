// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIResponder");
exports.UIResponder = UIResponder = foundation.NSObject.extendClass ("UIResponder", {

    // Managing the Responder Chain
    nextResponder:           objc.instanceProperty(),
    isFirstResponder:        objc.instanceProperty(),
    canBecomeFirstResponder: objc.instanceProperty(),
    becomeFirstResponder:    objc.instanceSelector(),
    canResignFirstResponder: objc.instanceProperty(),
    resignFirstResponder:    objc.instanceSelector(),

    // Managing Input Views
    inputView: objc.instanceProperty(),
    inputAccessoryView: objc.instanceProperty(),
    reloadInputViews: objc.instanceSelector(),

    // Responding to Touch Events
    touchesBegan:     objc.instanceSelector("touchesBegan:withEvent:"),
    touchesMoved:     objc.instanceSelector("touchesMoved:withEvent:"),
    touchesEnded:     objc.instanceSelector("touchesEnded:withEvent:"),
    touchesCancelled: objc.instanceSelector("touchesCancelled:withEvent:"),

    // Responding to Motion Events
    motionBegan:     objc.instanceSelector("motionBegan:withEvent:"),
    motionEnded:     objc.instanceSelector("motionEnded:withEvent:"),
    motionCancelled: objc.instanceSelector("motionCancelled:withEvent:"),

    // Responding to Remote-Control Events
    remoteControlReceived: objc.instanceSelector("remoteControlReceivedWithEvent:"),

    // Getting the Undo Manager
    undoManager: objc.instanceProperty(),

    // Validating Commands
    canPerformAction: objc.instanceSelector("canPerformAction:withSender:")

});