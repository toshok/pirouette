// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIPopoverControllerDelegate");
exports.UIPopoverControllerDelegate = UIPopoverControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function UIPopoverControllerDelegate () {
    return UIPopoverControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Managing the Popover’s Dismissal
    shouldDismissPopover: objc.optionalMethod("popoverControllerShouldDismissPopover:"),
    didDismissPopover:    objc.optionalMethod("popoverControllerDidDismissPopover:")

});