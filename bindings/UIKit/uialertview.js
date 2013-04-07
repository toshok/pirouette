// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAlertView");
exports.UIAlertView = UIAlertView = objc.bindClass(UIView,
  function UIAlertView () {
    return UIAlertView.__super__.constructor.apply(this, arguments);
  }, {
  // Creating Alert Views
  init: objc.instanceSelector("initWithTitle:message:delegate:cancelButtonTitle:otherButtonTitles:"),

  // Setting Properties
  delegate:       objc.autoboxProperty(UIAlertViewDelegate),
  alertViewStyle: objc.instanceProperty(),
  title:          objc.instanceProperty(),
  message:        objc.instanceProperty(),
  visible:        objc.instanceProperty(),

  // Configuring Buttons
  addButtonWithTitle:    objc.instanceSelector("addButtonWithTitle:"),
  buttonTitleAtIndex:    objc.instanceSelector("buttonTitleAtIndex:"),
  textFieldAtIndex:      objc.instanceSelector("textFieldAtIndex:"),
  numberOfButtons:       objc.instanceProperty(),
  cancelButtonIndex:     objc.instanceProperty(),
  firstOtherButtonIndex: objc.instanceProperty(),

  // Displaying
  show: objc.instanceSelector("show"),

  // Dismissing
  dismissWithClickedButtonIndex: objc.instanceSelector("dismissWithClickedButtonIndex:animated:")

});
