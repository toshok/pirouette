// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKViewController = GLKViewController = objc.bindClass(uikit.UIViewController,
  function GLKViewController () {
    return GLKViewController.__super__.constructor.apply(this, arguments);
  }, {

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

});
