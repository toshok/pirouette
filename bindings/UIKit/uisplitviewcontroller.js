// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISplitViewController");
var UISplitViewController;
_exports.UISplitViewController = UISplitViewController = UIViewController.extendClass ("UISplitViewController", () => { return {

    // Managing the Child View Controllers
    viewControllers: objc.instanceProperty(),

    // Accessing the Delegate Object
    delegate: objc.autoboxProperty(UISplitViewController)

}; });
