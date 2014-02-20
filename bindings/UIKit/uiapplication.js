// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIApplication");
var UIApplication;
_exports.UIApplication = UIApplication = UIResponder.extendClass ("UIApplication", () => ({

    // Getting the Application Instance

    sharedApplication: objc.staticProperty({ set: null, get: function () { return objc.selectorInvoker("sharedApplication").call(UIApplication); } }),

    // Setting and Getting the Delegate
    delegate: objc.autoboxProperty(UIApplicationDelegate),

    // Getting Application Windows
    keyWindow: objc.instanceProperty({ set: null }), // readonly
    windows: objc.instanceProperty({ set: null }), // readonly

    // Controlling and Handling Events
    sendEvent:                      objc.instanceSelector("sendEvent:"),
    sendAction:                     objc.instanceSelector("sendAction:to:from:forEvent:"),
    beginIgnoringInteractionEvents: objc.instanceSelector("beginIgnoringInteractionEvents"),
    endIgnoringInteractionEvents:   objc.instanceSelector("endIgnoringInteractionEvents"),

    isIgnoringInteractionEvents: objc.instanceProperty({ set: null }), // readonly

    applicationSupportsShakeToEdit: objc.instanceProperty(),
    proximitySensingEnabled: objc.instanceProperty({ get: "isProximitySensingEnabled" }), //  property Deprecated in iOS 3.0

    // Opening a URL Resource
    openURL:    objc.instanceSelector("openURL:"),
    canOpenURL: objc.instanceSelector("canOpenURL:"),

    // Registering for Remote Notifications
    registerForRemoteNotificationTypes: objc.instanceSelector("registerForRemoteNotificationTypes:"),
    unregisterForRemoteNotifications:   objc.instanceSelector("unregisterForRemoteNotifications"),
    enableRemoteNotificationTypes:      objc.instanceSelector("enableRemoteNotificationTypes"),

    // Managing Application Activity
    idleTimerDisabled: objc.instanceProperty({ get: "isIdleTimerDisabled" }),

    // Managing Background Execution
    applicationState: objc.instanceProperty({ set: null }), // readonly
    backgroundTimeRemaining: objc.instanceProperty({ set: null }),

    beginBackgroundTaskWithExpirationHandler: objc.instanceSelector("beginBackgroundTaskWithExpirationHandler:"),
    endBackgroundTask:                        objc.instanceSelector("endBackgroundTask:"),
    setKeepAliveTimeoutWithHandler:           objc.instanceSelector("setKeepAliveTimeout:handler:"),
    clearKeepAliveTimeout:                    objc.instanceSelector("clearKeepAliveTimeout"),

    // Registering for Local Notifications
    scheduleLocalNotification:   objc.instanceSelector("scheduleLocalNotification:"),
    presentLocalNotificationNow: objc.instanceSelector("presentLocalNotificationNow:"),
    cancelLocalNotification:     objc.instanceSelector("cancelLocalNotification:"),
    cancelAllLocalNotification:  objc.instanceSelector("cancelAllLocalNotification:"),

    scheduledLocalNotifications: objc.instanceProperty(),

    // Determining the Availability of Protected Content
    protectedDataAvailable: objc.instanceProperty({ get: "isProtectedDataAvailable", set: null }), // readonly

    // Registering for Remote Control Events
    beginReceivingRemoteControlEvents: objc.instanceSelector("beginReceivingRemoteControlEvents"),
    endReceivingRemoteControlEvents: objc.instanceSelector("endReceivingRemoteControlEvents"),

    // Managing Status Bar Orientation

    setStatusBarOrientation: objc.instanceSelector("setStatusBarOrientation:animated:"),
    statusBarOrientation:        objc.instanceProperty({ set: function (v) { return this.setStatusBarOrientation(v, false); } }),
    statusBarOrientationAnimationDuration:        objc.instanceProperty({ set: null }), // readonly

    // Controlling Application Appearance
    setStatusBarHidden: objc.instanceSelector("setStatusBarHidden:withAnimation:"),
    statusBarHidden:   objc.instanceProperty({ get: "isStatusBarHidden", set: function (v) { return this.setStatusBarHidden(v, false); } }),

    setStatusBarStyle: objc.instanceSelector("setStatusBarStyle:withAnimation:"),
    statusBarStyle:  objc.instanceProperty({ set: function (v) { return this.setStatusBarStyle(v, false); } }),
    statusBarFrame:  objc.instanceProperty({ set: null }),

    networkActivityIndicatorVisible: objc.instanceProperty({ get: "isNetworkActivityIndicatorVisible" }),
    applicationIconBadgeNumber: objc.instanceProperty(),
    userInterfaceLayoutDirection: objc.instanceProperty({ set: null }), // readonly

    // Setting the Icon of a Newsstand Application
    setNewsstandIconImage: objc.instanceSelector("setNewsstandIconImage:")

}));

UIApplication.main = function (args, principalClassName, delegateClassName) {
  return objc_internal.UIApplicationMain(args, principalClassName, delegateClassName);
};
