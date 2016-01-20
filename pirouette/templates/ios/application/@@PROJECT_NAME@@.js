import * as foundation from '$pirouette/foundation';
import * as ui from '$pirouette/uikit';
import * as objc from '$pirouette/objc';

let @@PROJECT_NAME@@AppDelegate = foundation.NSObject.extendClass("@@PROJECT_NAME@@AppDelegate", {

    didFinishLaunching: objc.instanceSelector("application:didFinishLaunchingWithOptions:").impl(function() {
      return true;
    })
});

ui.UIApplication.main(process.argv, null, @@PROJECT_NAME@@AppDelegate._ck_register);
