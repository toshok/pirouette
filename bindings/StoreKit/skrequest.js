// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.SKRequest = SKRequest = foundation.NSObject.extendClass ("SKRequest", {

    // Controlling the Request
    start: objc.instanceSelector("start"),
    cancel: objc.instanceSelector("cancel"),

    // Accessing the Delegate
    delegate: objc.autoboxProperty(SKRequestDelegate)

});
