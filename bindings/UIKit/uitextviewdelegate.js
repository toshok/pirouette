// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UITextViewDelegate");
var UITextViewDelegate;
_exports.UITextViewDelegate = UITextViewDelegate = foundation.Protocol.extendClass("UITextViewDelegate", () => { return {

    // Responding to Editing Notifications
    shouldBeginEditing: objc.optionalMethod("textViewShouldBeginEditing:"),
    didBeginEditing:    objc.optionalMethod("textViewDidBeginEditing:"),
    shouldEndEditing:   objc.optionalMethod("textViewShouldEndEditing:"),
    didEndEditing:      objc.optionalMethod("textViewDidEndEditing:"),

    // Responding to Text Changes
    shouldChangeText:   objc.optionalMethod("textView:shouldChangeTextInRange:replacementText:"),
    didChangeText:      objc.optionalMethod("textViewDidChange:"),

    // Responding to Selection Changes
    didChangeSelection: objc.optionalMethod("textViewDidChangeSelection:")

}; });
