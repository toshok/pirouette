// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("GKSessionDelegate");
exports.GKSessionDelegate = GKSessionDelegate = objc.bindProtocol(foundation.Protocol,
  function GKSessionDelegate () {
    return GKSessionDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Observing Changes to Peers
    didChangeState: objc.requiredMethod ("session:peer:didChangeState:"),

    // Connection Requests from Other Peers
    didReceiveConnectionRequestFromPeer: objc.requiredMethod ("session:didReceiveConnectionRequestFromPeer:"),

    // Connection Errors
    connectionWithPeerFailed: objc.requiredMethod ("session:connectionWithPeerFailed:withError:"),
    didFailWithError: objc.requiredMethod ("session:didFailWithError:")

});
