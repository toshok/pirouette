// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("GKLeaderboardViewControllerDelegate")

exports.GKLeaderboardViewControllerDelegate = GKLeaderboardViewControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function GKLeaderboardViewControllerDelegate () {
    return GKLeaderboardViewControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Handling User Actions
    didFinish: objc.requiredMethod ("leaderboardViewControllerDidFinish:")

});
