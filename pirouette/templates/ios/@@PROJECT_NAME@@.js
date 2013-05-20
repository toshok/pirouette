let foundation = require('foundation'),
    ui = require('uikit'),
    objc = require('objc');

let HelloIOSAppDelegate = foundation.NSObject.extendClass("HelloIOSAppDelegate", {

    didFinishLaunching: objc.instanceSelector("application:didFinishLaunchingWithOptions:").impl(function() {
      return true;
    })
});

ui.UIApplication.main(process.argv, null, HelloIOSAppDelegate._ck_register);
