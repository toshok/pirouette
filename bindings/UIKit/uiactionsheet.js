// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIActionSheet");
var UIActionSheet;
_exports.UIActionSheet = UIActionSheet = UIView.extendClass ("UIActionSheet", () => ({

  // Creating Action Sheets
  init: objc.instanceSelector("initWithTitle:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles:"),

  // Setting Properties
  delegate: objc.autoboxProperty(UIActionSheetDelegate),
  title: objc.instanceProperty(),
  visible: objc.instanceProperty({ set: null, get: "isVisible" }),
  property: objc.instanceProperty(),

  // Configuring Buttons
  addButton:        	  objc.instanceSelector("addButtonWithTitle:"),
  buttonTitle:      	  objc.instanceSelector("buttonTitleAtIndex:"),
  numberOfButtons:        objc.instanceProperty(),
  cancelButtonIndex:      objc.instanceProperty(),
  destructiveButtonIndex: objc.instanceProperty(),
  firstOtherButtonIndex:  objc.instanceProperty(),

  // Presenting the Action Sheet
  showFromTabBar:        objc.instanceSelector("showFromTabBar:"),
  showFromToolbar:       objc.instanceSelector("showFromToolbar:"),
  showInView:            objc.instanceSelector("showInView:"),
  showFromBarButtonItem: objc.instanceSelector("showFromBarButtonItem:animated:"),
  showFromRect:          objc.instanceSelector("showFromRect:inView:animated:"),

  // Dismissing the Action Sheet
  dismissWithClickedButtonIndexAnimated: objc.instanceSelector("dismissWithClickedButtonIndex:animated:")
}));
