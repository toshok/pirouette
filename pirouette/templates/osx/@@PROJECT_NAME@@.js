import { NSObject } from '$pirouette/foundation';
import { NSApplication, NSApplicationDelegate, NSWindow } from '$pirouette/appkit';
import { outlet } from '$pirouette/objc';

let AppDelegate = NSObject.extendClass("AppDelegate", {

    didFinishLaunching: function(notification) {
	console.log("hey, we made it here");
	console.log(`window == ${this.window}`);
    },

    window: outlet (NSWindow)
  }, [
  /* protocols this type conforms to */
  NSApplicationDelegate
]);

NSApplication.main(process.argv);
