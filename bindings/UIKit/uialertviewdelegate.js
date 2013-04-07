// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAlertViewDelegate");
exports.UIAlertViewDelegate = UIAlertViewDelegate = objc.bindProtocol(foundation.Protocol,
  function UIAlertViewDelegate () {
    return UIAlertViewDelegate.__super__.constructor.apply(this, arguments);
  }, {

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

});
