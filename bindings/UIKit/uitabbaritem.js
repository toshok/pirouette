// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITabBarItem");
var UITabBarItem;
_exports.UITabBarItem = UITabBarItem = UIBarItem.extendClass ("UITabBarItem", () => { return {

    // Initializing a Item
    initWithTabBarSystemItem: objc.instanceSelector("initWithTabBarSystemItem:tag:"),
    initWithTitle:            objc.instanceSelector("initWithTitle:image:tag:"),

    // Getting and Setting Properties
    badgeValue: objc.instanceProperty(),

    // Managing the Finished Selected Image
    finishedSelectedImage:    objc.instanceSelector("finishedSelectedImage"),
    finishedUnselectedImage:  objc.instanceSelector("finishedUnselectedImage"),
    setFinishedSelectedImage: objc.instanceSelector("setFinishedSelectedImage:withFinishedUnselectedImage:"),

    // Customizing Appearance
    titlePositionAdjustment:    objc.instanceSelector("titlePositionAdjustment"),
    setTitlePositionAdjustment: objc.instanceSelector("setTitlePositionAdjustment:")

}; });
