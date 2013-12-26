// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINavigationBar");
var UINavigationBar;
_exports.UINavigationBar = UINavigationBar = UIView.extendClass ("UINavigationBar", () => { return {

    // Configuring Navigation Bars
    barStyle: objc.instanceProperty(),
    translucent: objc.instanceProperty(),

    // Assigning the Delegate
    delegate: objc.autoboxProperty(UINavigationBarDelegate),

    // Pushing and Popping Items
    pushNavigationItem: objc.instanceSelector("pushNavigationItem:animated:"),
    popNavigationItem:  objc.instanceSelector("popNavigationItemAnimated:"),
    setItems:           objc.instanceSelector("setItems:animated:"),
    items: objc.instanceProperty({ set: function(v) { return this.setItems(v, false); } }),
    topItem: objc.instanceProperty(),
    backItem: objc.instanceProperty(),

    // Customizing the Bar Appearance
    backgroundImage:                    objc.instanceSelector("backgroundImageForBarMetrics:"),
    setBackgroundImage:                 objc.instanceSelector("setBackgroundImage:forBarMetrics:"),
    titleVerticalPositionAdjustment:    objc.instanceSelector("titleVerticalPositionAdjustmentForBarMetrics:"),
    setTitleVerticalPositionAdjustment: objc.instanceSelector("setTitleVerticalPositionAdjustment:forBarMetrics:"),
    tintColor: objc.instanceProperty(),
    titleTextAttributes: objc.instanceProperty()

}; });
