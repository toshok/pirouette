// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIPopoverControllerDelegate");
var UIPopoverControllerDelegate;
_exports.UIPopoverControllerDelegate = UIPopoverControllerDelegate = foundation.Protocol.extendClass("UIPopoverControllerDelegate", () => { return {

    // Managing the Popover’s Dismissal
    shouldDismissPopover: objc.optionalMethod("popoverControllerShouldDismissPopover:"),
    didDismissPopover:    objc.optionalMethod("popoverControllerDidDismissPopover:")

}; });
