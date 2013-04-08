// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKAchievementViewController = GKAchievementViewController = ui.UINavigationController.extendClass ("GKAchievementViewController", {

    // Setting the Delegate
    achievementDelgate: objc.autoboxProperty(GKAchievementViewControllerDelegate)

});
