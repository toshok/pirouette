// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKLeaderboardViewController = GKLeaderboardViewController = objc.bindClass(ui.UINavigationController,
  function GKLeaderboardViewController () {
    return GKLeaderboardViewController.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Leaderboard View Controller
    category:            objc.instanceProperty(),
    leaderboardDelegate: objc.autoboxProperty(GKLeaderboardViewControllerDelegate),
    timeScope:           objc.instanceProperty()

});
