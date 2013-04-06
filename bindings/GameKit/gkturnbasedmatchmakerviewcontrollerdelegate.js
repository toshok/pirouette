// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("GKTurnBasedMatchmakerViewControllerDelegate");
exports.GKTurnBasedMatchmakerViewControllerDelegate = GKTurnBasedMatchmakerViewControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function GKTurnBasedMatchmakerViewControllerDelegate () {
    return GKTurnBasedMatchmakerViewControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Events
    didFindMatch:       objc.requiredMethod ("turnBasedMatchmakerViewController:didFindMatch:"),
    playerQuitForMatch: objc.requiredMethod ("turnBasedMatchmakerViewController:playerQuitForMatch:"),
    didFailWithError:   objc.requiredMethod ("turnBasedMatchmakerViewController:didFailWithError:"),
    wasCancelled:       objc.requiredMethod ("turnBasedMatchmakerViewControllerWasCancelled:")

});