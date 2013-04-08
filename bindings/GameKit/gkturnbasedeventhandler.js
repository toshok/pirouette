// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKTurnBasedEventHandler = GKTurnBasedEventHandler = foundation.NSObject.extendClass ("GKTurnBasedEventHandler", {

    // Retrieving the Shared Instance
    sharedTurnBasedEventHandler: objc.staticSelector("sharedTurnBasedEventHandler"),

    // Getting and Setting the Delegate
    delegate: objc.autoboxProperty(GKTurnBasedEventHandlerDelegate)

});
