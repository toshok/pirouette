// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKPlayer = GKPlayer = objc.bindClass(foundation.NSObject,
  function GKPlayer () {
    return GKPlayer.__super__.constructor.apply(this, arguments);
  }, {

    // Loading Player Details
    loadPlayersForIdentifiers: objc.staticSelector("loadPlayersForIdentifiers:withCompletionHandler:"),

    // Identifying the Player
    playerID: objc.instanceProperty(),

    // Player Details
    alias: objc.instanceProperty(),
    isFriend: objc.instanceProperty(),

    // Player Photos
    loadPhotoForSize: objc.instanceSelector("loadPhotoForSize:withCompletionHandler:")

});
