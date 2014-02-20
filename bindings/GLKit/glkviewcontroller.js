// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GLKViewController;
_exports.GLKViewController = GLKViewController = uikit.UIViewController.extendClass ("GLKViewController", () => ({

    // Configuring the Frame Rate
    preferredFramesPerSecond: objc.instanceProperty(),
    framesPerSecond: objc.instanceProperty(),

    // Configuring the Delegate
    delegate: objc.autoboxProperty(GLKViewControllerDelegate),

    // Controlling Frame Updates
    paused: objc.instanceProperty({ get: "isPaused" }),
    pauseOnWillResignActive: objc.instanceProperty(),
    resumeOnDidBecomeActive: objc.instanceProperty(),

    // Obtaining Information About View Updates
    framesDisplayed: objc.instanceProperty(),
    timeSinceFirstResume: objc.instanceProperty(),
    timeSinceLastResume: objc.instanceProperty(),
    timeSinceLastUpdate: objc.instanceProperty(),
    timeSinceLastDraw: objc.instanceProperty()

}));
