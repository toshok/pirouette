// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.TWRequest = TWRequest = objc.bindClass(foundation.NSObject,
  function TWRequest () {
    return TWRequest.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing Requests
    initWithURL:      objc.instanceSelector("initWithURL:parameters:requestMethod:"),

    // Accessing Properties
    account:          objc.instanceProperty(),
    requestMethod:    objc.instanceProperty(),
    URL:              objc.instanceProperty(),
    parameters:       objc.instanceProperty(),
    addMultiPartData: objc.instanceSelector("addMultiPartData:withName:type:"),

    // Sending Requests
    performRequestWithHandler: objc.instanceSelector("performRequestWithHandler:"),
    signedURLRequest: objc.instanceSelector("signedURLRequest")

});