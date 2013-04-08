// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSAlert = NSAlert = foundation.NSObject.extendClass("NSAlert", {
    init: objc.instanceSelector("init"),
    alertWithError: objc.staticSelector("alertWithError:"),
    alertWithMessageText: objc.staticSelector("alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:"),

    // Configuring Alerts
    //
    layout: objc.instanceSelector("layout"),
    alertStyle: objc.instanceProperty(),
    accessoryView: objc.instanceProperty(),
    showsHelp: objc.instanceProperty(),
    helpAnchor: objc.instanceProperty(),
    delegate: objc.instanceProperty(),

    // Displaying Alerts
    //
    runModal: objc.instanceSelector("runModal"),
    beginSheetModalForWindow: objc.instanceSelector("beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo"),
    suppressionButton: objc.instanceProperty({ set: null }), // read-only
    showsSuppressionButton: objc.instanceProperty(),

    // Accessing Alert Text
    //
    informativeText: objc.instanceProperty(),
    messageText: objc.instanceProperty(),

    // Accesing Alert Icons
    //
    icon: objc.instanceProperty(),

    // Accessing Alert Buttons
    //
    buttons: objc.instanceProperty({ set: null }), // read-only
    addButtonWithTitle: objc.instanceSelector("addButtonWithTitle:"),

    // Getting Alert Panels
    window: objc.instanceProperty({ set: null}) // read-only

});
