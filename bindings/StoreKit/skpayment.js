// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKPayment = SKPayment = NSObject.extendClass ("SKPayment", {

    // Creating Instances
    paymentWithProduct: objc.staticSelector("paymentWithProduct:"),
    paymentWithProductIdentifier: objc.staticSelector("paymentWithProductIdentifier:"), // Deprecated in iOS 5.0

    // Getting Attributes
    productIdentifier: objc.instanceProperty(),
    quantity: objc.instanceProperty(),
    requestData: objc.instanceProperty()

});
