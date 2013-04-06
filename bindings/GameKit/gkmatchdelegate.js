// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("GKMatchDelegate");
exports.GKMatchDelegate = GKMatchDelegate = objc.bindProtocol(foundation.Protocol,
  function GKMatchDelegate () {
    return GKMatchDelegate.__super__.constructor.apply(this, arguments);
  }, {
    // Receiving Data from Other Players
    didReceiveData:             objc.requiredMethod("match:didReceiveData:fromPlayer:"),

    // Receiving State Notifications About Other Players
    playerDidChangeState:       objc.optionalMethod("match:player:didChangeState:"),

    // Handling Errors
    connectionWithPlayerFailed: objc.optionalMethod("match:connectionWithPlayerFailed:withError:"),
    didFail:                    objc.optionalMethod("match:didFailWithError:"),

    // Reinviting a Player
    shouldReinvitePlayer:       objc.optionalMethod("match:shouldReinvitePlayer:")
});
