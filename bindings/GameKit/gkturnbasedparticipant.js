// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKTurnBasedParticipant = GKTurnBasedParticipant = foundation.NSObject.extendClass ("GKTurnBasedParticipant", {

    // Participant Information
    playerID: objc.instanceProperty(),
    lastTurnDate: objc.instanceProperty(),
    status: objc.instanceProperty(),

    // Setting the Match Outcome
    matchOutcome: objc.instanceProperty()

});