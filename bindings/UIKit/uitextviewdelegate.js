// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UITextViewDelegate");
exports.UITextViewDelegate = UITextViewDelegate = objc.bindProtocol(foundation.Protocol,
  function UITextViewDelegate () {
    return UITextViewDelegate.__super__.constructor.apply(this, arguments);
  }, {

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

});
