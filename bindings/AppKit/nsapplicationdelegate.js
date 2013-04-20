// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSApplicationDelegate = NSApplicationDelegate = foundation.Protocol.extendClass ("NSApplicationDelegate", {

  // Launching Applications
  willFinishLaunching: objc.optionalMethod("applicationWillFinishLaunching:").returns(objc.sig.Void).params([NSObject/*should be NSDictionary*/]),
  didFinishLaunching: objc.optionalMethod("applicationDidFinishLaunching:").returns(objc.sig.Void).params([NSObject/*should be NSDictionary*/]),

  // Terminating Applications
  shouldTerminate: objc.optionalMethod("applicationShouldTerminate:"),
  shouldTerminateAfterLastWindowClosed: objc.optionalMethod("applicationShouldTerminateAfterLastWindowClosed:"),
  willTerminate: objc.optionalMethod("applicationWillTerminate:"),

  // Managing Active Status
  willBecomeActive: objc.optionalMethod("applicationWillBecomeActive:"),
  didBecomeActive: objc.optionalMethod("applicationDidBecomeActive:"),
  willResignActive: objc.optionalMethod("applicationWillResignActive:"),
  didResignActive: objc.optionalMethod("applicationDidResignActive:"),

  // Hiding Applications
  willHide: objc.optionalMethod("applicationWillHide:"),
  didHide: objc.optionalMethod("applicationDidHide:"),
  willUnhide: objc.optionalMethod("applicationWillUnhide:"),
  didUnhide: objc.optionalMethod("applicationDidUnhide:"),

  // Managing Windows
  willUpdate: objc.optionalMethod("applicationWillUpdate:"),
  didUpdate: objc.optionalMethod("applicationDidUpdate:"),
  shouldHandleReopen: objc.optionalMethod("applicationShouldHandleReopen:hasVisibleWindows:"),

  // Managing the Dock Menu
  dockMenu: objc.optionalMethod("applicationDockMenu:"),

  // Displaying Errors
  willPresentError: objc.optionalMethod("application:willPresentError:"),

  // Managing the Screen
  didChangeScreenParameters: objc.optionalMethod("applicationDidChangeScreenParameters:"),

  // Opening Files
  openFile: objc.optionalMethod("application:openFile:"),
  openFileWithoutUI: objc.optionalMethod("application:openFileWithoutUI:"),
  openTempFile: objc.optionalMethod("application:openTempFile:"),
  openFiles: objc.optionalMethod("application:openFiles:"),
  openUntitledFile: objc.optionalMethod("applicationOpenUntitledFile:"),
  shouldOpenUntitledFile: objc.optionalMethod("applicationShouldOpenUntitledFile:"),

  // Printing
  printFile: objc.optionalMethod("application:printFile:"),
  printFilesWithSettings: objc.optionalMethod("application:printFiles:withSettings:showPrintPanels:"),

  // Handling Push Notifications
  didRegisterForRemoteNotificationsWithDeviceToken: objc.optionalMethod("application:didRegisterForRemoteNotificationsWithDeviceToken:"),
  didFailToRegisterForRemoteNotificationsWithError: objc.optionalMethod("application:didFailToRegisterForRemoteNotificationsWithError:"),
  didReceiveRemoteNotification: objc.optionalMethod("application:didReceiveRemoteNotification:"),

  // Application Restorable State
  didDecodeRestorableState: objc.optionalMethod("application:didDecodeRestorableState:"),
  willEncodeRestorableState: objc.optionalMethod("application:willEncodeRestorableState:")
});
