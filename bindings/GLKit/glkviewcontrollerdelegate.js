// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKViewControllerDelegate = GLKViewControllerDelegate = foundation.Protocol.extendClass ("GLKViewControllerDelegate", {

    // Handling an Update Event
    update:    objc.requiredMethod("glkViewControllerUpdate:", {sig: "v@:@"}),

    // Pause and Resume Notifications
    willPause: objc.optionalMethod("glkViewController:willPause:" , {sig: "v@:@B"})

});
