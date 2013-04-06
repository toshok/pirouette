// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKTurnBasedParticipant = GKTurnBasedParticipant = objc.bindClass(foundation.NSObject,
  function GKTurnBasedParticipant () {
    return GKTurnBasedParticipant.__super__.constructor.apply(this, arguments);
  }, {

    // Participant Information
    playerID: objc.instanceProperty(),
    lastTurnDate: objc.instanceProperty(),
    status: objc.instanceProperty(),

    // Setting the Match Outcome
    matchOutcome: objc.instanceProperty()

});