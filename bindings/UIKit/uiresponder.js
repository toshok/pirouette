// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIResponder");
exports.UIResponder = UIResponder = foundation.NSObject.extendClass ("UIResponder", {

    // Managing the Responder Chain
    nextResponder:           objc.instanceSelector("nextResponder"),
    isFirstResponder:        objc.instanceSelector("isFirstResponder"),
    canBecomeFirstResponder: objc.instanceSelector("canBecomeFirstResponder"),
    becomeFirstResponder:    objc.instanceSelector("becomeFirstResponder"),
    canResignFirstResponder: objc.instanceSelector("canResignFirstResponder"),
    resignFirstResponder:    objc.instanceSelector("resignFirstResponder"),

    // Managing Input Views
    inputView: objc.instanceProperty(),
    inputAccessoryView: objc.instanceProperty(),
    reloadInputViews: objc.instanceSelector("reloadInputViews"),

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