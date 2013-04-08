// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINavigationItem");
exports.UINavigationItem = UINavigationItem = foundation.NSObject.extendClass ("UINavigationItem", {

    // Initializing an Item
    initWithTitle: objc.instanceSelector("initWithTitle:"),

    // Getting and Setting Properties
    title:   objc.instanceProperty(),
    prompt:   objc.instanceProperty(),
    backBarButtonItem:   objc.instanceProperty(),
    hidesBackButton:   objc.instanceProperty({ set: function(v) { return this.setHidesBackButton(v, false); } }),
    setHidesBackButton: objc.instanceSelector("setHidesBackButton:animated:"),
    leftItemsSupplementBackButton:   objc.instanceProperty(),

    // Customizing Views
    titleView:       objc.instanceProperty(),
    leftBarButtonItems:       objc.instanceProperty({ set: function(v) { return this.setLeftBarButtonItems(v, false); } }),
    leftBarButtonItem:       objc.instanceProperty({ set: function(v) { return this.setLeftBarButtonItem(v, false); } }),
    rightBarButtonItems:       objc.instanceProperty({ set: function(v) { return this.setRightBarButtonItems(v, false); } }),
    rightBarButtonItem:       objc.instanceProperty({ set: function(v) { return this.setRightBarButtonItem(v, false); } }),
    setLeftBarButtonItems:  objc.instanceSelector("setLeftBarButtonItems:animated:"),
    setLeftBarButtonItem:   objc.instanceSelector("setLeftBarButtonItem:animated:"),
    setRightBarButtonItems: objc.instanceSelector("setRightBarButtonItems:animated:"),
    setRightBarButtonItem:  objc.instanceSelector("setRightBarButtonItem:animated:")

});
