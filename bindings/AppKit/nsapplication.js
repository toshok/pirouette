// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSApplication = NSApplication = objc.bindClass(foundation.NSResponder,
  function NSApplication () {
    return NSApplication.__super__.constructor.apply(this, arguments);
  }, {

    // Getting the Application
    sharedApplication: objc.staticProperty( { get: () => new NSApplication (objc.staticCall("NSApplication", "sharedApplication")) } ),

    // Configuring Applications
    applicationIconImage: objc.instanceSelector("applicationIconImage"),
    setApplicationIconImage: objc.instanceSelector("setApplicationIconImage:"),

    delegate: objc.autoboxProperty(NSApplicationDelegate),

    // Launching Applications
    finishLaunching: objc.instanceSelector("finishLaunching"),

    // Terminating Applications
    terminate: objc.instanceSelector("terminate:"),
    replyToApplicationShouldTerminate: objc.instanceSelector("replyToApplicationShouldTerminate:"),

    // Managing Active Status
    isActive: objc.instanceSelector("isActive"),
    activateIgnoringOtherApps: objc.instanceSelector("activateIgnoringOtherApps:"),
    deactivate: objc.instanceSelector("deactivate"),

    // Hiding Applications
    hideOtherApplications: objc.instanceSelector("hideOtherApplications:"),
    unhideAllApplications: objc.instanceSelector("unhideAllApplications:"),

    // Managing the Event Loop
    isRunning: objc.instanceSelector("isRunning"),
    run: objc.instanceSelector("run"),
    stop: objc.instanceSelector("stop:"),
    runModalForWindow: objc.instanceSelector("runModalForWindow:"),
    stopModal: objc.instanceSelector("stopModal"),
    stopModalWithCode: objc.instanceSelector("stopModalWithCode:"),
    abortModal: objc.instanceSelector("abortModal"),
    beginModalSessionForWindow: objc.instanceSelector("beginModalSessionForWindow:"),
    runModalSession: objc.instanceSelector("runModalSession:"),
    modalWindow: objc.instanceSelector("modalWindow"),
    endModalSession: objc.instanceSelector("endModalSession:"),
    sendEvent: objc.instanceSelector("sendEvent:"),

    // Handling Events
    currentEvent: objc.instanceSelector("currentEvent"),
    nextEvent: objc.instanceSelector("nextEventMatchingMask:untilDate:inMode:dequeue:"),
    discardEvents: objc.instanceSelector("discardEventsMatchingMask:beforeEvent:"),

    // Posting Events
    postEvent: objc.instanceSelector("postEvent:atStart:"),

    // Managing Sheets
    beginSheet: objc.instanceSelector("beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:"),
    endSheet: objc.instanceSelector("endSheet:"),
    endSheetWithReturnCode: objc.instanceSelector("endSheet:returnCode:"),

    // Managing Windows
    keyWindow: objc.instanceSelector("keyWindow"),
    mainWindow: objc.instanceSelector("mainWindow"),
    windowWithWindowNumber: objc.instanceSelector("windowWithWindowNumber:"),
    windows: objc.instanceSelector("windows"),
    makeWindowsPerform: objc.instanceSelector("makeWindowsPerform:inOrder:"),

    // Minimizing Windows
    miniaturizeAll: objc.instanceSelector("miniaturizeAll:"),

    // User Interface Layout Direction
    userInterfaceLayoutDirection: objc.instanceSelector("userInterfaceLayoutDirection"),

    // Hiding Windows
    isHidden: objc.instanceSelector("isHidden"),
    hide: objc.instanceSelector("hide:"),
    unhide: objc.instanceSelector("unhide:"),
    unhideWithoutActivation: objc.instanceSelector("unhideWithoutActivation"),

    // Updating Windows
    updateWindows: objc.instanceSelector("updateWindows"),
    setWindowsNeedUpdate: objc.instanceSelector("setWindowsNeedUpdate:"),

    // Managing Window Layers
    preventWindowOrdering: objc.instanceSelector("preventWindowOrdering"),
    arrangeInFront: objc.instanceSelector("arrangeInFront:"),

    // Accessing the Main Menu
    mainMenu: objc.instanceSelector("mainMenu"),
    setMainMenu: objc.instanceSelector("setMainMenu:"),

    // Managing the Window Menu
    windowsMenu: objc.instanceSelector("windowsMenu"),
    setWindowsMenu: objc.instanceSelector("setWindowsMenu:"),
    addWindowsItem: objc.instanceSelector("addWindowsItem:title:filename:"),
    changeWindowsItem: objc.instanceSelector("changeWindowsItem:title:filename:"),
    removeWindowsItem: objc.instanceSelector("removeWindowsItem:"),
    updateWindowsItem: objc.instanceSelector("updateWindowsItem:"),

    // Accessing the Dock Tile
    dockTile: objc.instanceSelector("dockTile"),

    // Managing the Services Menu
    registerServicesMenu: objc.instanceSelector("registerServicesMenuSendTypes:returnTypes:"),
    servicesMenu: objc.instanceSelector("servicesMenu"),
    setServicesMenu: objc.instanceSelector("setServicesMenu:"),

    // Providing Services
    validRequestor: objc.instanceSelector("validRequestorForSendType:returnType:"),
    servicesProvider: objc.instanceSelector("servicesProvider"),
    setServicesProvider: objc.instanceSelector("setServicesProvider:"),

    // Managing Panels
    orderFrontColorPanel: objc.instanceSelector("orderFrontColorPanel:"),
    orderFrontStandardAboutPanel: objc.instanceSelector("orderFrontStandardAboutPanel:"),
    orderFrontStandardAboutPanelWithOptions: objc.instanceSelector("orderFrontStandardAboutPanelWithOptions:"),
    orderFrontCharacterPalette: objc.instanceSelector("orderFrontCharacterPalette:"),
    runPageLayout: objc.instanceSelector("runPageLayout:"),

    // Displaying Help
    showHelp: objc.instanceSelector("showHelp:"),
    activateContextHelpMode: objc.instanceSelector("activateContextHelpMode:"),
    helpMenu: objc.instanceSelector("helpMenu"),
    setHelpMenu: objc.instanceSelector("setHelpMenu:"),

    // Managing Threads
    detachDrawingThread: objc.instanceSelector("detachDrawingThread:toTarget:withObject:"),

    // Posting Actions
    tryToPerform: objc.instanceSelector("tryToPerform:with:"),
    sendAction: objc.instanceSelector("sendAction:to:from:"),
    targetForAction: objc.instanceSelector("targetForAction:"),
    targetForActionToFrom: objc.instanceSelector("targetForAction:to:from:"),

    // Drawing Windows
    context: objc.instanceSelector("context"),

    // Logging Exceptions
    reportException: objc.instanceSelector("reportException:"),

    // Scripting
    // FIXME application:delegateHandlesKey:: objc.instanceSelector("application:delegateHandlesKey:" // delegate method
    orderedDocuments: objc.instanceSelector("orderedDocuments"),
    orderedWindows: objc.instanceSelector("orderedWindows"),

    // Managing User Attention Requests
    requestUserAttention: objc.instanceSelector("requestUserAttention:"),
    cancelUserAttentionRequest: objc.instanceSelector("cancelUserAttentionRequest:"),
    replyToOpenOrPrint: objc.instanceSelector("replyToOpenOrPrint:"),

    // Keyboard Accessibility
    isFullKeyboardAccessEnabled: objc.instanceSelector("isFullKeyboardAccessEnabled"),

    // Presentation Options
    currentSystemPresentationOptions: objc.instanceSelector("currentSystemPresentationOptions"),
    presentationOptions: objc.instanceSelector("presentationOptions"),
    setPresentationOptions: objc.instanceSelector("setPresentationOptions:"),

    // Activation Policy
    activationPolicy: objc.instanceSelector("activationPolicy"),
    setActivationPolicy: objc.instanceSelector("setActivationPolicy:"),

    // Deprecated
    // FIXME
    //application:printFiles:: objc.instanceSelector("application:printFiles:"  // delegate method Available in Mac OS X v10.3 through Mac OS X v10.5
    //beginModalSessionForWindow:relativeToWindow:: objc.instanceSelector("beginModalSessionForWindow:relativeToWindow:" // Deprecated in Mac OS X v10.0
    //runModalForWindow:relativeToWindow:: objc.instanceSelector("runModalForWindow:relativeToWindow:" // Deprecated in Mac OS X v10.0

    // Spotlight for Help
    registerUserInterfaceItemSearchHandler: objc.instanceSelector("registerUserInterfaceItemSearchHandler:"),
    unregisterUserInterfaceItemSearchHandler: objc.instanceSelector("unregisterUserInterfaceItemSearchHandler:"),
    searchString: objc.instanceSelector("searchString:inUserInterfaceItemString:searchRange:foundRange:"),

    // Managing Relaunch on Login
    disableRelaunchOnLogin: objc.instanceSelector("disableRelaunchOnLogin"),
    enableRelaunchOnLogin: objc.instanceSelector("enableRelaunchOnLogin"),

    // Managing Remote Notifications
    enabledRemoteNotificationTypes: objc.instanceSelector("enabledRemoteNotificationTypes"),
    registerForRemoteNotificationTypes: objc.instanceSelector("registerForRemoteNotificationTypes:"),
    unregisterForRemoteNotifications: objc.instanceSelector("unregisterForRemoteNotifications")

});

// use this instead of NSApplicationMain
NSApplication.main = (args) => objc_internal.NSApplicationMain (args);
