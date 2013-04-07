// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKPayment = SKPayment = objc.bindClass(NSObject,
  function SKPayment () {
    return SKPayment.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Instances
    paymentWithProduct: objc.staticSelector("paymentWithProduct:"),
    paymentWithProductIdentifier: objc.staticSelector("paymentWithProductIdentifier:"), // Deprecated in iOS 5.0

    // Getting Attributes
    productIdentifier: objc.instanceProperty(),
    quantity: objc.instanceProperty(),
    requestData: objc.instanceProperty()

});
