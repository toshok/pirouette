// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("GKPeerPickerControllerDelegate");

exports.GKPeerPickerControllerDelegate = GKPeerPickerControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function GKPeerPickerControllerDelegate () {
    return GKPeerPickerControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Creating a Session for the Peer Picker
    didSelectConnectionType:  objc.optionalMethod("peerPickerController:didSelectConnectionType:"),
    sessionForConnectionType: objc.optionalMethod("peerPickerController:sessionForConnectionType:"),

    // Responding to Connection Messages
    didConnectPeer:           objc.optionalMethod("peerPickerController:didConnectPeer:toSession:"),

    // Responding When the User Cancels the Connection Attempt
    didCancel:                objc.optionalMethod("peerPickerControllerDidCancel:")

});
