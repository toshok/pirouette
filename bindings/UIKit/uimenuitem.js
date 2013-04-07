// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIMenuItem");
exports.UIMenuItem = UIMenuItem = objc.bindClass(foundation.NSObject,
  function UIMenuItem () {
    return UIMenuItem.__super__.constructor.apply(this, arguments);
  }, {

    // Creating a Menu Item
    initWithTitle: objc.instanceSelector("initWithTitle:action:"),

    // Accessing Menu-Item Attributes
    title: objc.instanceProperty(),
    action: objc.instanceProperty()

});
