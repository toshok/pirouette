// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log "UIStoryboard"
var UIStoryboard;
_exports.UIStoryboard = UIStoryboard = foundation.NSObject.extendClass ("UIStoryboard", () => { return {

    // Getting a Storyboard Object
    storyboardWithName:                      objc.instanceSelector("storyboardWithName:bundle:"),

    // Instantiating Storyboard View Controllers
    instantiateInitialViewController:        objc.instanceSelector("instantiateInitialViewController"),
    instantiateViewControllerWithIdentifier: objc.instanceSelector("instantiateViewControllerWithIdentifier:")

}; });
