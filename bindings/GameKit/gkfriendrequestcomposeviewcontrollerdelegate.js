// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("GKFriendRequestComposeViewControllerDelegate");
exports.GKFriendRequestComposeViewControllerDelegate = GKFriendRequestComposeViewControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function GKFriendRequestComposeViewControllerDelegate () {
    return GKFriendRequestComposeViewControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Responding to User Events
    didFinish: objc.requiredMethod ("friendRequestComposeViewControllerDidFinish:")

});