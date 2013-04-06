// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKTurnBasedMatchmakerViewController = GKTurnBasedMatchmakerViewController = objc.bindClass(ui.UINavigationController,
  function GKTurnBasedMatchmakerViewController () {
    return GKTurnBasedMatchmakerViewController.__super__.constructor.apply(this, arguments);
  }, {

    // Displaying a UI For Turn-Based Matches
    initWithMatchRequest: objc.instanceSelector("initWithMatchRequest:"),
    turnBasedMatchmakerDelegate: objc.autoboxProperty(GKTurnBasedMatchmakerViewControllerDelegate),
    showExistingMatches: objc.instanceProperty()

});
