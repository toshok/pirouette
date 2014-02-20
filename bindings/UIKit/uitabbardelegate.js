// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UITabBarDelegate");
var UITabBarDelegate;
_exports.UITabBarDelegate = UITabBarDelegate = foundation.Protocol.extendClass("UITabBarDelegate", () => ({

    // Customizing Tab Bars
    willBeginCustomizingItems: objc.optionalMethod("tabBar:willBeginCustomizingItems:"),
    didBeginCustomizingItems:  objc.optionalMethod("tabBar:didBeginCustomizingItems:"),
    willEndCustomizingItems:   objc.optionalMethod("tabBar:willEndCustomizingItems:changed:"),
    didEndCustomizingItems:    objc.optionalMethod("tabBar:didEndCustomizingItems:changed:"),
    didSelectItem:             objc.requiredMethod("tabBar:didSelectItem:")

}));
