// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKMutablePayment = SKMutablePayment = objc.bindClass(SKPayment,
  function SKMutablePayment () {
    return SKMutablePayment.__super__.constructor.apply(this, arguments);
  }, {

    // Getting and Setting Attributes
    productIdentifier: objc.instanceProperty(),
    quantity: objc.instanceProperty(),
    requestData: objc.instanceProperty()

});