// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UITabBar");
var UITabBar;
_exports.UITabBar = UITabBar = UIView.extendClass ("UITabBar", () => ({

    // Getting and Setting Properties
    delegate: objc.autoboxProperty(UITabBarDelegate),

    // Configuring Items
    setItems: objc.instanceSelector("setItems:animated:"),
    items: objc.instanceProperty({ set: function (v) { return this.setItems (v, false); } }),
    selectedItem: objc.instanceProperty(),

    // Customizing Tab Bars
    beginCustomizingItems: objc.instanceSelector("beginCustomizingItems:"),
    endCustomizing:        objc.instanceSelector("endCustomizingAnimated:"),
    isCustomizing:         objc.instanceSelector("isCustomizing"),

    // Customizing Appearance
    backgroundImage: objc.instanceProperty(),
    selectedImageTintColor: objc.instanceProperty(),
    selectionIndicatorImage: objc.instanceProperty(),
    tintColor: objc.instanceProperty()

}));
