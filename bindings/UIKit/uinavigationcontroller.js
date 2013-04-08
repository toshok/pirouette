// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINavigationController");
exports.UINavigationController = UINavigationController = UIViewController.extendClass ("UINavigationController", {

    // Creating Navigation Controllers
    initWithRootViewController: objc.instanceSelector("initWithRootViewController:"),

    // Accessing Items on the Navigation Stack
    setViewControllers:     objc.instanceSelector("setViewControllers:animated:"),
    topViewController:      objc.instanceProperty(),
    visibleViewController:  objc.instanceProperty(),
    viewControllers:        objc.instanceProperty({ set: function(v) { return this.setViewControllers(v, false); } }),

    // Pushing and Popping Stack Items
    pushViewController:      objc.instanceSelector("pushViewController:animated:"),
    popViewController:       objc.instanceSelector("popViewControllerAnimated:"),
    popToRootViewController: objc.instanceSelector("popToRootViewControllerAnimated:"),
    popToViewController:     objc.instanceSelector("popToViewController:animated:"),

    // Configuring Navigation Bars
    navigationBar:       objc.instanceProperty(),
    navigationBarHidden:       objc.instanceProperty({ set: function(v) { return this.setNavigationBarHidden(v, false); } }),
    setNavigationBarHidden: objc.instanceSelector("setNavigationBarHidden:animated:"),

    // Accessing the Delegate
    delegate: objc.autoboxProperty(UINavigationControllerDelegate),

    // Configuring Custom Toolbars
    toolbar:       objc.instanceProperty(),
    setToolbarHidden:       objc.instanceSelector("setToolbarHidden:animated:"),
    toolbarHidden:       objc.instanceProperty({ set: function (v) { return this.setToolbarHidden(v, false); } })

});
