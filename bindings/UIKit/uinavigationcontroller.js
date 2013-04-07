// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINavigationController");
exports.UINavigationController = UINavigationController = objc.bindClass(UIViewController,
  function UINavigationController () {
    return UINavigationController.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Navigation Controllers
    initWithRootViewController: objc.instanceSelector("initWithRootViewController:"),

    // Accessing Items on the Navigation Stack
    setViewControllers:     objc.instanceSelector("setViewControllers:animated:"),
    topViewController:      objc.instanceProperty(),
    visibleViewController:  objc.instanceProperty(),
    viewControllers:        objc.instanceProperty({ set: (v) => this.setViewControllers(v, false) }),

    // Pushing and Popping Stack Items
    pushViewController:      objc.instanceSelector("pushViewController:animated:"),
    popViewController:       objc.instanceSelector("popViewControllerAnimated:"),
    popToRootViewController: objc.instanceSelector("popToRootViewControllerAnimated:"),
    popToViewController:     objc.instanceSelector("popToViewController:animated:"),

    // Configuring Navigation Bars
    navigationBar:       objc.instanceProperty(),
    navigationBarHidden:       objc.instanceProperty({ set: (v) => this.setNavigationBarHidden(v, false) }),
    setNavigationBarHidden: objc.instanceSelector("setNavigationBarHidden:animated:"),

    // Accessing the Delegate
    delegate: objc.autoboxProperty(UINavigationControllerDelegate),

    // Configuring Custom Toolbars
    toolbar:       objc.instanceProperty(),
    setToolbarHidden:       objc.instanceSelector("setToolbarHidden:animated:"),
    toolbarHidden:       objc.instanceProperty({ set: (v) => this.setToolbarHidden(v, false) })

});
