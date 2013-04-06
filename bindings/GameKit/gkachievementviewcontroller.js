// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKAchievementViewController = GKAchievementViewController = objc.bindClass(ui.UINavigationController,
  function GKAchievementViewController () {
    return GKAchievementViewController.__super__.constructor.apply(this, arguments);
  }, {

    // Setting the Delegate
    achievementDelgate: objc.autoboxProperty(GKAchievementViewControllerDelegate)

});
