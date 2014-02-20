// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UITabBarControllerDelegate");
var UITabBarControllerDelegate;
_exports.UITabBarControllerDelegate = UITabBarControllerDelegate = foundation.Protocol.extendClass("UITabBarControllerDelegate", () => ({

    // Managing Tab Bar Selections
    shouldSelectViewController:          objc.optionalMethod("tabBarController:shouldSelectViewController:"),
    didSelectViewController:             objc.optionalMethod("tabBarController:didSelectViewController:"),

    // Managing Tab Bar Customizations
    willBeginCustomizingViewControllers: objc.optionalMethod("tabBarController:willBeginCustomizingViewControllers:"),
    willEndCustomizingViewControllers:   objc.optionalMethod("tabBarController:willEndCustomizingViewControllers:changed:"),
    didEndCustomizingViewControllers:    objc.optionalMethod("tabBarController:didEndCustomizingViewControllers:changed:")

}));
