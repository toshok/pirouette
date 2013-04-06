// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log "GKMatchmakerViewControllerDelegate"
exports.GKMatchmakerViewControllerDelegate = GKMatchmakerViewControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function GKMatchmakerViewControllerDelegate () {
    return GKMatchmakerViewControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Completing a Match Request
    didFindMatch:                     objc.optionalMethod ("matchmakerViewController:didFindMatch:"),
    didFindPlayers:                   objc.optionalMethod ("matchmakerViewController:didFindPlayers:"),

    // Handling Cancellations
    wasCancelled:                     objc.requiredMethod ("matchmakerViewControllerWasCancelled:"),

    // Handling Errors
    didFail:                          objc.requiredMethod ("matchmakerViewController:didFailWithError:"),

    // Hosted Matches
    didReceiveAcceptFromHostedPlayer: objc.optionalMethod ("matchmakerViewController:didReceiveAcceptFromHostedPlayer:")
});
