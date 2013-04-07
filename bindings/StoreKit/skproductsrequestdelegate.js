// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("SKProductsRequestDelgate");
exports.SKProductRequestDelegate = SKProductRequestDelegate = objc.bindProtocol(SKRequestDelegate,
  function SKProductRequestDelegate () {
    return SKProductRequestDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Receiving the Response
    didReceiveResponse: objc.requiredMethod ("productsRequest:didReceiveResponse:")

});
