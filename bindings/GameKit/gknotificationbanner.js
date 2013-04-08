// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKNotificationBanner = GKNotificationBanner = foundation.NSObject.extendClass ("GKNotificationBanner", {

    // Displaying a Notification Banner
    showBanner: objc.staticSelector("showBannerWithTitle:message:completionHandler:")

});
