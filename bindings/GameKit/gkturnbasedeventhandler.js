// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKTurnBasedEventHandler = GKTurnBasedEventHandler = objc.bindClass(foundation.NSObject,
  function GKTurnBasedEventHandler () {
    return GKTurnBasedEventHandler.__super__.constructor.apply(this, arguments);
  }, {

    // Retrieving the Shared Instance
    sharedTurnBasedEventHandler: objc.staticSelector("sharedTurnBasedEventHandler"),

    // Getting and Setting the Delegate
    delegate: objc.autoboxProperty(GKTurnBasedEventHandlerDelegate)

});
