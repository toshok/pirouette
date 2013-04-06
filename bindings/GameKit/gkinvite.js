// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKInvite = GKInvite = objc.bindClass(foundation.NSObject,
  function GKInvite () {
    return GKInvite.__super__.constructor.apply(this, arguments);
  }, {

    // Invitation Properties
    hosted: objc.instanceProperty(),
    inviter: objc.instanceProperty()

});
