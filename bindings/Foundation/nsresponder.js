// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("NSResponder");
exports.NSResponder = NSResponder = objc.bindClass(foundation.NSObject,
  function NSResponder () {
    return NSResponder.__super__.constructor.apply(this, arguments);
  }, {

});
