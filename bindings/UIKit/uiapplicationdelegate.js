// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log("UIApplicationDelegate");
var UIApplicationDelegate;
_exports.UIApplicationDelegate = UIApplicationDelegate = foundation.Protocol.extendClass("UIApplicationDelegate", () => ({

    // Monitoring Application State Changes
    didFinishLaunchingWithOptions:   objc.optionalMethod("application:didFinishLaunchingWithOptions:", { sig: "v@:@@" }),
    didBecomeActive:                 objc.optionalMethod("applicationDidBecomeActive:"),
    willResignActive:                objc.optionalMethod("applicationWillResignActive:"),
    didEnterBackground:              objc.optionalMethod("applicationDidEnterBackground:"),
    willEnterForeground:             objc.optionalMethod("applicationWillEnterForeground:"),
    willTerminate:                   objc.optionalMethod("applicationWillTerminate:"),
    didFinishLaunching:              objc.optionalMethod("applicationDidFinishLaunching:", { sig: "v@:@" }),

    // Opening a URL Resource
    handleOpenURL:                   objc.optionalMethod("application:handleOpenURL:"),
    openURL:                         objc.optionalMethod("application:openURL:sourceApplication:annotation:"),

    // Managing Status Bar Changes
    willChangeStatusBarOrientation:  objc.optionalMethod("application:willChangeStatusBarOrientation:duration:"),
    didChangeStatusBarOrientation:   objc.optionalMethod("application:didChangeStatusBarOrientation:"),
    willChangeStatusBarFrame:        objc.optionalMethod("application:willChangeStatusBarFrame:"),
    didChangeStatusBarFrame:         objc.optionalMethod("application:didChangeStatusBarFrame:"),

    // Responding to System Notifications
    didReceiveMemoryWarning:         objc.optionalMethod("applicationDidReceiveMemoryWarning:"),
    significantTimeChange:           objc.optionalMethod("applicationSignificantTimeChange:"),

    // Handling Remote Notifications
    didReceiveRemoteNotification:                     objc.optionalMethod("application:didReceiveRemoteNotification:"),
    didRegisterForRemoveNotificationsWithDeviceToken: objc.optionalMethod("application:didRegisterForRemoteNotificationsWithDeviceToken:"),
    didFailToRegisterForRemoteNotifications:          objc.optionalMethod("application:didFailToRegisterForRemoteNotificationsWithError:"),

    // Handling Local Notifications
    didReceiveLocalNotification:     objc.optionalMethod("application:didReceiveLocalNotification:"),

    // Responding to Content Protection Changes
    protectedDataWillBecomeUnavailable: objc.optionalMethod("applicationProtectedDataWillBecomeUnavailable:"),
    protectedDataDidBecomeAvailable:    objc.optionalMethod("applicationProtectedDataDidBecomeAvailable:")

    // Providing a Window for Storyboarding
    //window  property

}));
