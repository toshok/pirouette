// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAlertViewDelegate");
var UIAlertViewDelegate;
_exports.UIAlertViewDelegate = UIAlertViewDelegate = foundation.Protocol.extendClass("UIAlertViewDelegate", () => { return {

  // Responding to Actions
  clickedButton:                objc.optionalMethod("alertView:clickedButtonAtIndex:"),

  // Customizing Behavior
  shouldEnableFirstOtherButton: objc.optionalMethod("alertViewShouldEnableFirstOtherButton:"),
  willPresent:                  objc.optionalMethod("willPresentAlertView:"),
  didPresent:                   objc.optionalMethod("didPresentAlertView:"),
  willDismiss:                  objc.optionalMethod("alertView:willDismissWithButtonIndex:"),
  didDismiss:                   objc.optionalMethod("alertView:didDismissWithButtonIndex:"),

  // Canceling
  cancel:                       objc.optionalMethod("alertViewCancel:")

}; });
