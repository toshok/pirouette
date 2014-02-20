// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UITextInputMode");
var UITextInputMode;
_exports.UITextInputMode = UITextInputMode = foundation.NSObject.extendClass ("UITextInputMode", () => ({

    // Getting the Current and Active Text-Input Modes
    currentInputMode: objc.staticSelector("currentInputMode"),
    activeInputModes: objc.staticSelector("activeInputModes"),

    // Getting the Primary Language
    primaryLanguage: objc.instanceProperty()

}));
