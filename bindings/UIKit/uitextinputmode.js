// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITextInputMode");
exports.UITextInputMode = UITextInputMode = objc.bindClass(foundation.NSObject,
  function UITextInputMode () {
    return UITextInputMode.__super__.constructor.apply(this, arguments);
  }, {

    // Getting the Current and Active Text-Input Modes
    currentInputMode: objc.staticSelector("currentInputMode"),
    activeInputModes: objc.staticSelector("activeInputModes"),

    // Getting the Primary Language
    primaryLanguage: objc.instanceProperty()

});