// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log "UIStoryboard"
exports.UIStoryboard = UIStoryboard = foundation.NSObject.extendClass ("UIStoryboard", {

    // Getting a Storyboard Object
    storyboardWithName:                      objc.instanceSelector("storyboardWithName:bundle:"),

    // Instantiating Storyboard View Controllers
    instantiateInitialViewController:        objc.instanceSelector("instantiateInitialViewController"),
    instantiateViewControllerWithIdentifier: objc.instanceSelector("instantiateViewControllerWithIdentifier:")

});