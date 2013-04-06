// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("GKTurnBasedEventHandlerDelegate");
exports.GKTurnBasedEventHandlerDelegate = GKTurnBasedEventHandlerDelegate = objc.bindProtocol(foundation.Protocol,
  function GKTurnBasedEventHandlerDelegate () {
    return GKTurnBasedEventHandlerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Receiving Turn-based Events
    handleInviteFromGameCenter: objc.optionalMethod ("handleInviteFromGameCenter:"),
    handleTurnEventForMatch:    objc.optionalMethod ("handleTurnEventForMatch:"),
    handleMatchEnded:           objc.optionalMethod ("handleMatchEnded:")

});
