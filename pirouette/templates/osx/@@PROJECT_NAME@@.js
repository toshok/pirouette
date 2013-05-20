let foundation = require('foundation'),
    appkit = require('appkit'),
    objc = require( 'objc');

let AppDelegate = foundation.NSObject.extendClass("AppDelegate", {

    didFinishLaunching: function() {
    },

    /* XXX we shouldn't need this, but without the selector registered the outlet doesn't get set for some reason... */
    setWindow: objc.instanceSelector("setWindow:").returns(objc.sig.Void)
                                                  .params([ appkit.NSWindow ])
                                                  .impl(function (v) {
                                                     this.window = v;
                                                  }),
    window: objc.outlet (appkit.NSWindow)
  }, [
  /* protocols this type conforms to */
  appkit.NSApplicationDelegate
]);

appkit.NSApplication.main(process.argv);
