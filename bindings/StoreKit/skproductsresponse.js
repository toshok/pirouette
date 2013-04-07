// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKProductResponse = SKProductResponse = objc.bindClass(foundation.NSObject,
  function SKProductResponse () {
    return SKProductResponse.__super__.constructor.apply(this, arguments);
  }, {

    // Response Information
    products: objc.instanceProperty(),
    invalidProductIdentifiers: objc.instanceProperty()

});
