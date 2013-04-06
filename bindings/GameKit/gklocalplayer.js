// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKLocalPlayer = GKLocalPlayer = objc.bindClass(GKPlayer,
  function GKLocalPlayer () {
    return GKLocalPlayer.__super__.constructor.apply(this, arguments);
  }, {

    // Accessing the Shared Local Player
    localPlayer: objc.staticSelector("localPlayer"),

    // Authentication
    authenticate: objc.instanceSelector("authenticateWithCompletionHandler:"),
    authenticated: objc.instanceProperty(),

    // Accessing Friends
    loadFriends: objc.instanceSelector("loadFriendsWithCompletionHandler:"),
    friends: objc.instanceProperty(),

    // Age-Restricted Content
    underage: objc.instanceProperty()

});