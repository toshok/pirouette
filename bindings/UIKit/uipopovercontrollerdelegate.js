// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log("UIPopoverControllerDelegate");
var UIPopoverControllerDelegate;
_exports.UIPopoverControllerDelegate = UIPopoverControllerDelegate = foundation.Protocol.extendClass("UIPopoverControllerDelegate", () => ({

    // Managing the Popover’s Dismissal
    shouldDismissPopover: objc.optionalMethod("popoverControllerShouldDismissPopover:"),
    didDismissPopover:    objc.optionalMethod("popoverControllerDidDismissPopover:")

}));
