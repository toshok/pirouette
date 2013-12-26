// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITextFieldDelegate");
var UITextFieldDelegate;
_exports.UITextFieldDelegate = UITextFieldDelegate = foundation.Protocol.extendClass("UITextFieldDelegate", () => { return {

    // Managing Editing
    shouldBeginEditing: objc.optionalMethod("textFieldShouldBeginEditing:"),
    didBeginEditing:    objc.optionalMethod("textFieldDidBeginEditing:"),
    shouldEndEditing:   objc.optionalMethod("textFieldShouldEndEditing:"),
    didEndEditing:      objc.optionalMethod("textFieldDidEndEditing:"),

    // Editing the Text Field’s Text
    shouldChangeCharactersInRange: objc.optionalMethod("textField:shouldChangeCharactersInRange:replacementString:"),
    ShouldClear:                   objc.optionalMethod("textFieldShouldClear:"),
    ShouldReturn:                  objc.optionalMethod("textFieldShouldReturn:")

}; });
