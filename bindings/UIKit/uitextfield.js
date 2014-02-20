// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UITextField");
var UITextField;
_exports.UITextField = UITextField = UIControl.extendClass ("UITextField", () => ({

    // Accessing the Text Attributes
    text: objc.instanceProperty(),
    placeholder: objc.instanceProperty(),
    font: objc.instanceProperty(),
    textColor: objc.instanceProperty(),
    textAlignment: objc.instanceProperty(),

    // Sizing the Text Field’s Text
    adjustsFontSizeToFitWidth: objc.instanceProperty(),
    minimumFontSize: objc.instanceProperty(),

    // Managing the Editing Behavior
    editing: objc.instanceProperty(),
    clearsOnBeginEditing: objc.instanceProperty(),

    // Setting the View’s Background Appearance
    borderStyle: objc.instanceProperty(),
    background: objc.instanceProperty(),
    disabledBackground: objc.instanceProperty(),

    // Managing Overlay Views
    clearButtonMode: objc.instanceProperty(),
    leftView: objc.instanceProperty(),
    leftViewMode: objc.instanceProperty(),
    rightView: objc.instanceProperty(),
    rightViewMode: objc.instanceProperty(),

    // Accessing the Delegate
    delegate: objc.autoboxProperty(UITextFieldDelegate),

    // Drawing and Positioning Overrides
    textRect:              objc.instanceSelector("textRectForBounds:"),
    drawTextInRect:        objc.instanceSelector("drawTextInRect:"),
    placeholderRect:       objc.instanceSelector("placeholderRectForBounds:"),
    drawPlaceholderInRect: objc.instanceSelector("drawPlaceholderInRect:"),
    borderRect:            objc.instanceSelector("borderRectForBounds:"),
    editingRect:           objc.instanceSelector("editingRectForBounds:"),
    clearButtonRect:       objc.instanceSelector("clearButtonRectForBounds:"),
    leftViewRect:          objc.instanceSelector("leftViewRectForBounds:"),
    rightViewRect:         objc.instanceSelector("rightViewRectForBounds:"),

    // Replacing the System Input Views
    inputView: objc.instanceProperty(),
    inputAccessoryView: objc.instanceProperty(),

    // UITextInputTraits Protocol
    // Managing the Keyboard Behavior
    autocapitalizationType: objc.instanceProperty(),
    autocorrectionType: objc.instanceProperty(),
    spellCheckingType: objc.instanceProperty(),
    enablesReturnKeyAutomatically: objc.instanceProperty(),
    keyboardAppearance: objc.instanceProperty(),
    keyboardType: objc.instanceProperty(),
    returnKeyType: objc.instanceProperty(),
    secureTextEntry: objc.instanceProperty()
    // end UITextInputTraits Protocol

}));
