// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKMutablePayment = SKMutablePayment = SKPayment.extendClass ("SKMutablePayment", {

    // Getting and Setting Attributes
    productIdentifier: objc.instanceProperty(),
    quantity: objc.instanceProperty(),
    requestData: objc.instanceProperty()

});