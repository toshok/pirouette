// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKRequest = SKRequest = objc.bindClass(foundation.NSObject,
  function SKRequest () {
    return SKRequest.__super__.constructor.apply(this, arguments);
  }, {

    // Controlling the Request
    start: objc.instanceSelector("start"),
    cancel: objc.instanceSelector("cancel"),

    // Accessing the Delegate
    delegate: objc.autoboxProperty(SKRequestDelegate)

});
