// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIControl");
exports.UIControl = UIControl = UIView.extendClass ("UIControl", {

    // Preparing and Sending Action Messages
    sendAction:                  objc.instanceSelector("sendAction:to:forEvent:"),
    sendActionsForControlEvents: objc.instanceSelector("sendActionsForControlEvents:"),
    addTarget:                   objc.instanceSelector("addTarget:action:forControlEvents:"),
    removeTarget:                objc.instanceSelector("removeTarget:action:forControlEvents:"),
    actionsForTarget:            objc.instanceSelector("actionsForTarget:forControlEvent:"),

    // FIXME these two should be properties
    allTargets:                  objc.instanceSelector("allTargets"),
    allControlEvents:            objc.instanceSelector("allControlEvents"),

    // Setting and Getting Control Attributes
    state:            objc.instanceProperty(),
    enabled:            objc.instanceProperty(),
    selected:            objc.instanceProperty(),
    highlighted:            objc.instanceProperty(),
    contentVerticalAlignment:            objc.instanceProperty(),
    contentHorizontalAlignment:            objc.instanceProperty(),

    // Tracking Touches and Redrawing Controls
    beginTrackingWithTouch:      objc.instanceSelector("beginTrackingWithTouch:withEvent:"),
    continueTrackingWithTouch:   objc.instanceSelector("continueTrackingWithTouch:withEvent:"),
    endTrackingWithTouch:        objc.instanceSelector("endTrackingWithTouch:withEvent:"),
    cancelTrackingWithEvent:     objc.instanceSelector("cancelTrackingWithEvent:"),

    tracking:            objc.instanceProperty(),
    touchInside:            objc.instanceProperty()
});

let UIControlProxy = foundation.NSObject.extendClass ("UIControlProxy", {

    constructor: function (fn) {
      objc.chainCtor (UIControlProxy, this);
      this.fn = fn;
    },

    proxyAction: objc.instanceSelector("action").
                               returns( function() { return objc.sig.Void; }).
				params( function() { return []; }).
				  impl( function() { this.fn(); } )
});

let UIControlProxy1 = foundation.NSObject.extendClass("UIControlProxy1", {

    constructor: function (fn) {
      objc.chainCtor (UIControlProxy1, this);
      this.fn = fn;
    },

    proxyAction: objc.instanceSelector("action").
                               returns( function() { return objc.sig.Void; }).
				params( function() { return [foundation.NSObject]; }).
				  impl( function(v) { this.fn(v); } )
});
