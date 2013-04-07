// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIActionSheet");
exports.UIActionSheet = UIActionSheet = objc.bindClass(UIView,
  function UIActionSheet () {
    return UIActionSheet.__super__.constructor.apply(this, arguments);
  }, {

  // Creating Action Sheets
  init: objc.instanceSelector("initWithTitle:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles:"),

  // Setting Properties
  delegate: objc.autoboxProperty(UIActionSheetDelegate),
  title: objc.instanceProperty(),
  visible: objc.instanceProperty({ set: null, get: "isVisible" }),
  property: objc.instanceProperty(),

  // Configuring Buttons
  addButton:        	  objc.nativeSelector("addButtonWithTitle:"),
  buttonTitle:      	  objc.nativeSelector("buttonTitleAtIndex:"),
  numberOfButtons:        objc.instanceProperty(),
  cancelButtonIndex:      objc.instanceProperty(),
  destructiveButtonIndex: objc.instanceProperty(),
  firstOtherButtonIndex:  objc.instanceProperty(),

  // Presenting the Action Sheet
  showFromTabBar:        objc.nativeSelector("showFromTabBar:"),
  showFromToolbar:       objc.nativeSelector("showFromToolbar:"),
  showInView:            objc.nativeSelector("showInView:"),
  showFromBarButtonItem: objc.nativeSelector("showFromBarButtonItem:animated:"),
  showFromRect:          objc.nativeSelector("showFromRect:inView:animated:"),

  // Dismissing the Action Sheet
  dismissWithClickedButtonIndexAnimated: objc.nativeSelector("dismissWithClickedButtonIndex:animated:")
});