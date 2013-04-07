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
                            returns( () => ck.sig.Void ).
			     params( () => [ ck.sig.Double, ck.sig.PointerTo(ck.sig.CVTimeStamp) ] ), // XXX arg1 should be CFTimeInterval

    updateBounds: objc.instanceSelector("updateBounds").
			  returns( () => foundation.NSRect ),
    addUpdateRect: objc.instanceSelector("addUpdateRect:").
                         returns( () => ck.sig.Void ).
			  params( () => [ foundation.NSRect ] ),

    render: objc.instanceSelector("render").
                  returns( () => ck.sig.Void ),
    nextFrameTime: objc.instanceSelector("nextFrameTime").
			 returns( () => ck.sig.Double ), // XXX CFTimeInterval
    endFrame: objc.instanceSelector("endFrame").
		    returns( () => ck.sig.Void )

});
