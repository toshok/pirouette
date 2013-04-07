// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKProductRequest = SKProductRequest = objc.bindProtocol(SKRequest,
  function SKProductRequest () {
    return SKProductRequest.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing a Products sRequest
    initWithProductIdentifiers: objc.instanceSelector("initWithProductIdentifiers:"),

    // Setting the Delegate
    delegate: objc.autoboxProperty(SKProductsRequestDelegate)

});
