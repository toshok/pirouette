// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIMenuController");
exports.UIMenuController = UIMenuController = foundation.NSObject.extendClass ("UIMenuController", {

    // Getting the Menu Controller Instance
    sharedMenuController: objc.staticSelector("sharedMenuController"),

    // Showing and Hiding the Menu
    menuVisible: objc.instanceProperty({ set: function (v) { return this.setMenuVisible(v, false); } }),
    setMenuVisible:   objc.instanceSelector("setMenuVisible:animated:"),

    // Positioning the Menu
    setTargetRect:    objc.instanceSelector("setTargetRect:inView:"),
    menuFrame: objc.instanceProperty(),
    arrowDirection: objc.instanceProperty(),

    // Updating the Menu
    update:           objc.instanceSelector("update"),

    // Customizing Menu Items
    menuItems: objc.instanceProperty(),

});