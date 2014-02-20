// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UITabBarController");
var UITabBarController;
_exports.UITabBarController = UITabBarController = UIViewController.extendClass ("UITabBarController", () => ({

    // Accessing the Tab Bar Controller Properties
    delegate: objc.autoboxProperty(UITabBarControllerDelegate),
    tabBar: objc.instanceProperty(),

    // Managing the View Controllers
    setViewControllers: objc.instanceSelector("setViewControllers:animated:"),
    viewControllers:   objc.instanceProperty({ set: function (v) { return this.setViewControllers(v, false); } }),
    customizableViewControllers:   objc.instanceProperty(),
    moreNavigationController:   objc.instanceProperty(),

    // Managing the Selected Tab
    selectedViewController:   objc.instanceProperty(),
    selectedIndex:   objc.instanceProperty()

}));
