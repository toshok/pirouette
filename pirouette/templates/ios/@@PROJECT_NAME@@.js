import * as foundation from '$pirouette/foundation';
import * as ui from '$pirouette/uiit';
import * as objc from '$pirouette/objc';

let HelloIOSAppDelegate = foundation.NSObject.extendClass("HelloIOSAppDelegate", {

    didFinishLaunching: objc.instanceSelector("application:didFinishLaunchingWithOptions:").impl(function() {
      return true;
    })
});

ui.UIApplication.main(process.argv, null, HelloIOSAppDelegate._ck_register);
