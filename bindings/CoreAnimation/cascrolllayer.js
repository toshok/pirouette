// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAScrollLayer = CAScrollLayer = CALayer.extendClass("CAScrollLayer", {

    // Scrolling Constraints
    scrollMode: objc.instanceSelector(),

    // Scrolling the Layer
    scrollToPoint: objc.instanceSelector("scrollToPoint:").
                         returns( function() { return objc.sig.Void; } ).
			  params( function() { return [ foundation.NSPoint ]; } ),
    scrollToRect: objc.instanceSelector("scrollToRect:").
                        returns( function() { return objc.sig.Void; } ).
			 params( function() { return [ foundation.NSRect ]; } )

});
