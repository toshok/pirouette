// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIActionSheetDelegate");
exports.UIActionSheetDelegate = UIActionSheetDelegate = foundation.Protocol.extendClass("UIActionSheetDelegate", {

  // Responding to Actions
  clickedButton:  objc.optionalMethod("actionSheet:clickedButtonAtIndex:"),

  // Customizing Behavior
  willPresent: objc.optionalMethod("willPresentActionSheet:"),
  didPresent:  objc.optionalMethod("didPresentActionSheet:"),
  willDismiss: objc.optionalMethod("actionSheet:willDismissWithButtonIndex:"),
  didDismiss:  objc.optionalMethod("actionSheet:didDismissWithButtonIndex:"),

  // Canceling
  cancel:      objc.optionalMethod("actionSheetCancel:")
});
