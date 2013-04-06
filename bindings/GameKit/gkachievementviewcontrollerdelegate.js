// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("GKAchievementViewControllerDelegate");
exports.GKAchievementViewControllerDelegate = GKAchievementViewControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function GKAchievementViewControllerDelegate () {
    return GKAchievementViewControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Responding to a Dismiss Action
    didFinish: objc.requiredMethod ("achievementViewControllerDidFinish:")

});
