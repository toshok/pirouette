// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CADisplayLink;
exports.CADisplayLink = CADisplayLink = foundation.NSObject.extendClass("CADisplayLink", () => ({
    constructor: function (handle) {
      if (!handle) throw "use CADisplayLink.displayLink instead of new CADisplayLink";

      objc.chainCtor (CADisplayLink, this, arguments);
    },

    // Creating Instances
    displayLink: objc.staticSelector("displayLinkWithTarget:selector:"),

    // Scheduling the Display Link to Send Notifications
    addToRunLoop: objc.instanceSelector("addToRunLoop:forMode:"),
    removeFromRunLoop: objc.instanceSelector("removeFromRunLoop:forMode:"),
    invalidate: objc.instanceSelector("invalidate"),

    // Configuring the Display Link
    duration: objc.instanceProperty(),
    frameInterval: objc.instanceProperty(),
    paused: objc.instanceProperty(),
    timestamp: objc.instanceProperty()

}));
