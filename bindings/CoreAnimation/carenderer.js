// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CARenderer = CARenderer = objc.bindClass(foundation.NSObject,
  function CARenderer () {
    return CARenderer.__super__.constructor.apply(this, arguments);
  }, {

    // Rendered Layer
    layer: objc.instanceProperty(),

    // Renderer Geometry
    bounds: objc.instanceProperty(),

    // Create a New Renderer
    rendererWithCGLContext: objc.staticSelector("rendererWithCGLContext:options:"),

    // Render a Frame
    beginFrameAtTime: objc.instanceSelector("beginFrameAtTime:timeStamp:").
                            returns( function() { return ck.sig.Void; } ).
			     params( function() { return [ ck.sig.Double, ck.sig.PointerTo(ck.sig.CVTimeStamp) ]; } ), // XXX arg1 should be CFTimeInterval

    updateBounds: objc.instanceSelector("updateBounds").
			  returns( function() { return foundation.NSRect; } ),
    addUpdateRect: objc.instanceSelector("addUpdateRect:").
                         returns( function() { return ck.sig.Void; } ).
			  params( function() { return [ foundation.NSRect ]; } ),

    render: objc.instanceSelector("render").
                  returns( function() { return ck.sig.Void; } ),
    nextFrameTime: objc.instanceSelector("nextFrameTime").
			 returns( function() { return ck.sig.Double; } ), // XXX CFTimeInterval
    endFrame: objc.instanceSelector("endFrame").
		    returns( function() { return ck.sig.Void; } )

});
