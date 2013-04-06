// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKNotificationBanner = GKNotificationBanner = objc.bindClass(foundation.NSObject,
  function GKNotificationBanner () {
    return GKNotificationBanner.__super__.constructor.apply(this, arguments);
  }, {

    // Displaying a Notification Banner
    showBanner: objc.staticSelector("showBannerWithTitle:message:completionHandler:")

});
