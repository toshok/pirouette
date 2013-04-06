// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKMatchRequest = GKMatchRequest = objc.bindClass(foundation.NSObject,
  function GKMatchRequest () {
    return GKMatchRequest.__super__.constructor.apply(this, arguments);
  }, {

    // Restricting the Number of Players
    maxPlayers: objc.instanceProperty(),
    minPlayers: objc.instanceProperty(),

    // Creating Subsets of Players
    playerGroup: objc.instanceProperty(),
    playerAttributes: objc.instanceProperty(),

    // Inviting an Initial Group of Players
    playersToInvite: objc.instanceProperty()

});
