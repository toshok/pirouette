// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITextInputTraits");
var UITextInputTraits;
_exports.UITextInputTraits = UITextInputTraits = foundation.Protocol.extendClass("UITextInputTraits", () => { return {

    // we don't want NSObjectProtocol, I'm pretty sure..  too much underlying stuff we don't want to expose.
    // so let's leave it at that.
    // @mixinProtocol foundation.NSObjectProtocol

    // Managing the Keyboard Behavior
    autocapitalizationType:        objc.requiredProperty("autocapitalizationType"),
    autocorrectionType:            objc.requiredProperty("autocorrectionType"),
    spellCheckingType:             objc.requiredProperty("spellCheckingType"),
    enablesReturnKeyAutomatically: objc.requiredProperty("enablesReturnKeyAutomatically"),
    keyboardAppearance:            objc.requiredProperty("keyboardAppearance"),
    keyboardType:                  objc.requiredProperty("keyboardType"),
    returnKeyType:                 objc.requiredProperty("returnKeyType"),
    secureTextEntry:               objc.requiredProperty("secureTextEntry")

}; });
