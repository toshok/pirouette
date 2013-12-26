// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIMenuItem");
var UIMenuItem;
_exports.UIMenuItem = UIMenuItem = foundation.NSObject.extendClass ("UIMenuItem", () => { return {

    // Creating a Menu Item
    initWithTitle: objc.instanceSelector("initWithTitle:action:"),

    // Accessing Menu-Item Attributes
    title: objc.instanceProperty(),
    action: objc.instanceProperty()

}; });
