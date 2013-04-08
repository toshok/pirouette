// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKLeaderboardViewController = GKLeaderboardViewController = ui.UINavigationController.extendClass ("GKLeaderboardViewController", {

    // Configuring the Leaderboard View Controller
    category:            objc.instanceProperty(),
    leaderboardDelegate: objc.autoboxProperty(GKLeaderboardViewControllerDelegate),
    timeScope:           objc.instanceProperty()

});
