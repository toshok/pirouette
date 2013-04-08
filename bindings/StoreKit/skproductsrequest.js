// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKProductRequest = SKProductRequest = SKRequest.extendClass ("SKProductRequest", {

    // Initializing a Products sRequest
    initWithProductIdentifiers: objc.instanceSelector("initWithProductIdentifiers:"),

    // Setting the Delegate
    delegate: objc.autoboxProperty(SKProductsRequestDelegate)

});
