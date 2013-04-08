// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKProduct = SKProduct = foundation.NSObject.extendClass ("SKProduct", {

    // Getting Product Attributes
    localizedDescription: objc.instanceProperty(),
    localizedTitle: objc.instanceProperty(),
    price: objc.instanceProperty(),
    priceLocale: objc.instanceProperty(),
    productIdentifier: objc.instanceProperty()

});