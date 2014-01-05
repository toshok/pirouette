// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CARenderer;
exports.CARenderer = CARenderer = foundation.NSObject.extendClass("CARenderer", () => ({

    // Rendered Layer
    layer: objc.instanceProperty(),

    // Renderer Geometry
    bounds: objc.instanceProperty(),

    // Create a New Renderer
    rendererWithCGLContext: objc.staticSelector("rendererWithCGLContext:options:"),

    // Render a Frame
    beginFrameAtTime: objc.instanceSelector("beginFrameAtTime:timeStamp:").
                            returns( function() { return objc.sig.Void; } ).
			     params( function() { return [ objc.sig.Double, objc.sig.PointerTo(objc.sig.CVTimeStamp) ]; } ), // XXX arg1 should be CFTimeInterval

    updateBounds: objc.instanceSelector("updateBounds").
			  returns( function() { return foundation.NSRect; } ),
    addUpdateRect: objc.instanceSelector("addUpdateRect:").
                         returns( function() { return objc.sig.Void; } ).
			  params( function() { return [ foundation.NSRect ]; } ),

    render: objc.instanceSelector("render").
                  returns( function() { return objc.sig.Void; } ),
    nextFrameTime: objc.instanceSelector("nextFrameTime").
			 returns( function() { return objc.sig.Double; } ), // XXX CFTimeInterval
    endFrame: objc.instanceSelector("endFrame").
		    returns( function() { return objc.sig.Void; } )

}));
