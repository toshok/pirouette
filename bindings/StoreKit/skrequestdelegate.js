// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("SKRequestDelegate");
exports.SKRequestDelegate = SKRequestDelegate = objc.bindProtocol(foundation.Protocol,
  function SKRequestDelegate () {
    return SKRequestDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Completing Requests
    requestDidFinish: objc.optionalMethod("requestDidFinish:"),

    // Handling Errrors
    requestDidFail: objc.optionalMethod("request:didFailWithError:")

});
