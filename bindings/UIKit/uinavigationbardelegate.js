// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINavigationBarDelegate");
exports.UINavigationBarDelegate = UINavigationBarDelegate = objc.bindProtocol(foundation.Protocol,
  function UINavigationBarDelegate () {
    return UINavigationBarDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Pushing Items
    shouldPushItem: objc.optionalMethod("navigationBar:shouldPushItem:"),
    didPushItem:    objc.optionalMethod("navigationBar:didPushItem:"),

    // Popping Items
    shouldPopItem:  objc.optionalMethod("navigationBar:shouldPopItem:"),
    didPopItem:     objc.optionalMethod("navigationBar:didPopItem:")

});
