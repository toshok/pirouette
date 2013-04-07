// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CADisplayLink = CADisplayLink = objc.bindClass(foundation.NSObject,
  function CADisplayLink (handle) {
    if (!handle) throw "use CADisplayLink.displayLink instead of new CADisplayLink";

    return CADisplayLink.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Instances
    displayLink: objc.staticSelector("displayLinkWithTarget:selector:"),

    // Scheduling the Display Link to Send Notifications
    addToRunLoop: objc.instanceSelector("addToRunLoop:forMode:").
                                returns( function() { return ck.sig.Void; } ).
				 params( function() { return [ foundation.NSRunLoop, ck.sig.NSString ]; } ),
    removeFromRunLoop: objc.instanceSelector("removeFromRunLoop:forMode:").
                                     returns( function() { return ck.sig.Void; } ).
				      params( function() { return [ foundation.NSRunLoop, ck.sig.NSString ]; } ),
    invalidate: objc.instanceSelector("invalidate").
                             returns( function() { return ck.sig.Void; } ),

    // Configuring the Display Link
    duration: objc.instanceProperty(),
    frameInterval: objc.instanceProperty(),
    paused: objc.instanceProperty(),
    timestamp: objc.instanceProperty()

});
