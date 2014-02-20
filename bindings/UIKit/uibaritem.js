// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIBarItem");
var UIBarItem;
_exports.UIBarItem = UIBarItem = UIView.extendClass ("UIBarItem", () => ({

    // Getting and Setting Properties
    enabled: objc.instanceProperty(),
    image: objc.instanceProperty(),
    landscapeImagePhone: objc.instanceProperty(),
    imageInsets: objc.instanceProperty(),
    landscapeImagePhoneInsets: objc.instanceProperty(),
    title: objc.instanceProperty(),
    tag: objc.instanceProperty(),

    // Customizing Appearance
    setTitleTextAttributes: objc.instanceSelector("setTitleTextAttributes:forState:"),
    getTitleTextAttributes: objc.instanceSelector("titleTextAttributesForState:")

}));
