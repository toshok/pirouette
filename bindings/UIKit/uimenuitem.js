// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIMenuItem");
exports.UIMenuItem = UIMenuItem = foundation.NSObject.extendClass ("UIMenuItem", {

    // Creating a Menu Item
    initWithTitle: objc.instanceSelector("initWithTitle:action:"),

    // Accessing Menu-Item Attributes
    title: objc.instanceProperty(),
    action: objc.instanceProperty()

});
