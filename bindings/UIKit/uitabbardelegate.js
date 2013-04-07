// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITabBarDelegate");
exports.UITabBarDelegate = UITabBarDelegate = objc.bindProtocol(foundation.Protocol,
  function UITabBarDelegate () {
    return UITabBarDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Customizing Tab Bars
    willBeginCustomizingItems: objc.optionalMethod("tabBar:willBeginCustomizingItems:"),
    didBeginCustomizingItems:  objc.optionalMethod("tabBar:didBeginCustomizingItems:"),
    willEndCustomizingItems:   objc.optionalMethod("tabBar:willEndCustomizingItems:changed:"),
    didEndCustomizingItems:    objc.optionalMethod("tabBar:didEndCustomizingItems:changed:"),
    didSelectItem:             objc.requiredMethod("tabBar:didSelectItem:")

});