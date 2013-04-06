// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKMatchmaker = GKMatchmaker = objc.bindClass(foundation.NSObject,
  function GKMatchmaker () {
    return GKMatchmaker.__super__.constructor.apply(this, arguments);
  }, {

    // Retrieving the Shared Matchmaker
    sharedMatchmaker: objc.staticSelector("sharedMatchmaker"),

    // Receiving Invitations From Other Players
    inviteHandler: objc.instanceProperty(),

    // Matching Players
    findMatchForRequest: objc.instanceSelector ("findMatchForRequest:withCompletionHandler:"),
    findPlayersForHostedMatchRequest: objc.instanceSelector ("findPlayersForHostedMatchRequest:withCompletionHandler:"),
    addPlayersToMatch: objc.instanceSelector ("addPlayersToMatch:matchRequest:completionHandler:"),
    cancel: objc.instanceSelector ("cancel"),
    queryPlayerGroupActivity: objc.instanceSelector ("queryPlayerGroupActivity:withCompletionHandler:"),
    queryActivity: objc.instanceSelector ("queryActivityWithCompletionHandler:")

});
