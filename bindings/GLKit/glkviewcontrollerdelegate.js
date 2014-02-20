// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GLKViewControllerDelegate;
_exports.GLKViewControllerDelegate = GLKViewControllerDelegate = foundation.Protocol.extendClass ("GLKViewControllerDelegate", () => ({

    // Handling an Update Event
    update:    objc.requiredMethod("glkViewControllerUpdate:", {sig: "v@:@"}),

    // Pause and Resume Notifications
    willPause: objc.optionalMethod("glkViewController:willPause:" , {sig: "v@:@B"})

}));
