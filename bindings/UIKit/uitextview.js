// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITextView");
exports.UITextView = UITextView = objc.bindClass(UIScrollView,
  function UITextView () {
    return UITextView.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Text Attributes
    text: objc.instanceProperty(),
    font: objc.instanceProperty(),
    textColor: objc.instanceProperty(),
    editable: objc.instanceProperty(),
    dataDetectorTypes: objc.instanceProperty(),
    textAlignment: objc.instanceProperty(),
    hasText: objc.instanceSelector("hasText"),

    // Working with the Selection
    selectedRange: objc.instanceProperty(),
    scrollRangeToVisible: objc.instanceSelector("scrollRangeToVisible:"),

    // Accessing the Delegate
    //@autoboxProperty "delegate", UITextViewDelegate

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

    // XXX ES6-port
    //@conformsToProtocol UITextInput

});
