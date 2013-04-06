// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKAchievementDescription = GKAchievementDescription = objc.bindClass(foundation.NSObject,
  function GKAchievementDescription () {
    return GKAchievementDescription.__super__.constructor.apply(this, arguments);
  }, {

    // Retrieving Achievement Descriptions
    loadAchievementDescriptions: objc.staticSelector("loadAchievementDescriptionsWithCompletionHandler:"),

    // Reading and Writing Achievement Properties
    identifier:            objc.instanceProperty(),
    title:                 objc.instanceProperty(),
    achievedDescription:   objc.instanceProperty(),
    unachievedDescription: objc.instanceProperty(),
    maximumPoints:         objc.instanceProperty(),
    image:                 objc.instanceProperty(),
    hidden:                objc.instanceProperty(),

    // Working with Achievement Images
    incompleteAchievementImage: objc.staticSelector("incompleteAchievementImage"),
    placeholderCompletedAchievementImage: objc.staticSelector("placeholderCompletedAchievementImage"),
    loadImage: objc.instanceSelector("loadImageWithCompletionHandler:")

});
