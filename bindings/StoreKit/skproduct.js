// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKProduct = SKProduct = objc.bindProtocol(foundation.NSObject,
  function SKProduct () {
    return SKProduct.__super__.constructor.apply(this, arguments);
  }, {

    // Getting Product Attributes
    localizedDescription: objc.instanceProperty(),
    localizedTitle: objc.instanceProperty(),
    price: objc.instanceProperty(),
    priceLocale: objc.instanceProperty(),
    productIdentifier: objc.instanceProperty()

});