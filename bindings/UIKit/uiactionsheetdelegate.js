// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log("UIActionSheetDelegate");
var UIActionSheetDelegate;
_exports.UIActionSheetDelegate = UIActionSheetDelegate = foundation.Protocol.extendClass("UIActionSheetDelegate", () => ({

  // Responding to Actions
  clickedButton:  objc.optionalMethod("actionSheet:clickedButtonAtIndex:"),

  // Customizing Behavior
  willPresent: objc.optionalMethod("willPresentActionSheet:"),
  didPresent:  objc.optionalMethod("didPresentActionSheet:"),
  willDismiss: objc.optionalMethod("actionSheet:willDismissWithButtonIndex:"),
  didDismiss:  objc.optionalMethod("actionSheet:didDismissWithButtonIndex:"),

  // Canceling
  cancel:      objc.optionalMethod("actionSheetCancel:")
}));
