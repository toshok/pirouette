// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITabBarControllerDelegate");
exports.UITabBarControllerDelegate = UITabBarControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function UITabBarControllerDelegate () {
    return UITabBarControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Managing Tab Bar Selections
    shouldSelectViewController:          objc.optionalMethod("tabBarController:shouldSelectViewController:"),
    didSelectViewController:             objc.optionalMethod("tabBarController:didSelectViewController:"),

    // Managing Tab Bar Customizations
    willBeginCustomizingViewControllers: objc.optionalMethod("tabBarController:willBeginCustomizingViewControllers:"),
    willEndCustomizingViewControllers:   objc.optionalMethod("tabBarController:willEndCustomizingViewControllers:changed:"),
    didEndCustomizingViewControllers:    objc.optionalMethod("tabBarController:didEndCustomizingViewControllers:changed:")

});