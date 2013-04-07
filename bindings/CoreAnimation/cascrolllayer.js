// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAScrollLayer = CAScrollLayer = objc.bindClass(CALayer,
  function CAScrollLayer () {
    return CAScrollLayer.__super__.constructor.apply(this, arguments);
  }, {

    // Scrolling Constraints
    scrollMode: objc.instanceSelector(),

    // Scrolling the Layer
    scrollToPoint: objc.instanceSelector("scrollToPoint:").
                         returns( function() { return ck.sig.Void; } ).
			  params( function() { return [ foundation.NSPoint ]; } ),
    scrollToRect: objc.instanceSelector("scrollToRect:").
                        returns( function() { return ck.sig.Void; } ).
			 params( function() { return [ foundation.NSRect ]; } )

});
