// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UINavigationBarDelegate");
var UINavigationBarDelegate;
_exports.UINavigationBarDelegate = UINavigationBarDelegate = foundation.Protocol.extendClass("UINavigationBarDelegate", () => ({

    // Pushing Items
    shouldPushItem: objc.optionalMethod("navigationBar:shouldPushItem:"),
    didPushItem:    objc.optionalMethod("navigationBar:didPushItem:"),

    // Popping Items
    shouldPopItem:  objc.optionalMethod("navigationBar:shouldPopItem:"),
    didPopItem:     objc.optionalMethod("navigationBar:didPopItem:")

}));
