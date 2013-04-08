// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKMatchmakerViewController = GKMatchmakerViewController = ui.UINavigationController.extendClass ("GKMatchmakerViewController", {

    // Initializing a Matchmaker View Controller
    initWithInvite: objc.instanceSelector ("initWithInvite:"),
    initWithMatchRequest: objc.instanceSelector ("initWithMatchRequest:"),

    // Getting and Setting the Delegate
    matchmakerDelegate: objc.autoboxProperty(GKMatchmakerViewControllerDelegate),

    // Matchmaker View Controller Properties
    defaultInvitationMessage: objc.instanceProperty(),
    hosted: objc.instanceProperty(),
    matchRequest: objc.instanceProperty(),

    // Adding Players to an Existing Match
    addPlayersToMatch: objc.instanceSelector ("addPlayersToMatch:"),

    // Implementing Hosted Matches
    setHostedPlayer: objc.instanceSelector ("setHostedPlayer:connected:"),
    setHostedPlayerReady: objc.instanceSelector ("setHostedPlayerReady:") // Deprecated in iOS 5.0

});
