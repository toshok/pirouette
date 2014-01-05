// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CALayer;
exports.CALayer = CALayer = foundation.NSObject.extendClass ("CALayer", () => ({

    // Creating a Layer
    layer: objc.staticSelector("layer"),
    init: objc.instanceSelector("init").
			returns( function() { return CALayer; } ),
    initWithLayer: objc.instanceSelector("initWithLayer:").
                                 returns( function() { return CALayer; } ).
				  params( function() { return [ CALayer ]; } ),


    // Accessing the Presentation Layer
    presentationLayer: objc.instanceSelector("presentationLayer").
				     returns( function() { return CALayer; } ),
    modelLayer: objc.instanceSelector("modelLayer").
			      returns( function() { return CALayer; } ),

    // Modifying the Layer Geometry
    frame: objc.instanceProperty(),
    bounds: objc.instanceProperty(),
    position: objc.instanceProperty(),
    zPosition: objc.instanceProperty(),
    anchorPointZ: objc.instanceProperty(),
    anchorPoint: objc.instanceProperty(),
    contentsScale: objc.instanceProperty(),
    affineTransform: objc.instanceProperty(),
    transform: objc.instanceProperty(),
    sublayerTransform: objc.instanceProperty(),

    // Providing Layer Content
    contents: objc.instanceProperty(),
    contentsRect: objc.instanceProperty(),
    contentsCenter: objc.instanceProperty(),
    display: objc.instanceSelector("display").
			   returns( function() { return objc.sig.Void; } ),
    drawInContext: objc.instanceSelector("drawInContext:").
                                 returns( function() { return objc.sig.Void; } ).
				  params( function() { return [ objc.sig.PointerTo(objc.sig.CGContext)]; } ),
    opaque: objc.instanceProperty(),
    edgeAntialiasingMask: objc.instanceProperty(),
    contentsAreFlipped: objc.instanceSelector("contentsAreFlipped").
				      returns( function() { return objc.sig.Bool; } ),
    geometryFlipped: objc.instanceProperty(),

    // Style Attributes
    contentsGravity: objc.instanceProperty(),
    opacity: objc.instanceProperty(),
    hidden: objc.instanceProperty(),
    masksToBounds: objc.instanceProperty(),
    doubleSided: objc.instanceProperty(),
    mask: objc.instanceProperty(),
    cornerRadius: objc.instanceProperty(),
    borderWidth: objc.instanceProperty(),
    borderColor: objc.instanceProperty(),
    backgroundColor: objc.instanceProperty(),
    backgroundFilters: objc.instanceProperty(),
    shadowOpacity: objc.instanceProperty(),
    shadowRadius: objc.instanceProperty(),
    shadowOffset: objc.instanceProperty(),
    shadowColor: objc.instanceProperty(),
    shadowPath: objc.instanceProperty(),
    filters: objc.instanceProperty(),
    compositingFilter: objc.instanceProperty(),
    style: objc.instanceProperty(),
    minificationFilter: objc.instanceProperty(),
    minificationFilterBias: objc.instanceProperty(),
    magnificationFilter: objc.instanceProperty(),

    // Managing the Layer Hierarchy
    sublayers: objc.instanceProperty(),
    superlayer: objc.instanceProperty(),
    addSublayer: objc.instanceSelector("addSublayer:").
                             returns( function() { return objc.sig.Void; } ).
			      params( function() { return [ CALayer ]; } ),

    removeFromSuperlayer: objc.instanceSelector("removeFromSuperlayer").
					returns( function() { return objc.sig.Void; } ),

    insertSublayerAtIndex: objc.instanceSelector("insertSublayer:atIndex:").
                                         returns( function() { return objc.sig.Void; } ).
					  params( function() { return [ CALayer, objc.sig.UInt ]; } ),
    insertSublayerBelow: objc.instanceSelector("insertSublayer:below:").
                                       returns( function() { return objc.sig.Void; } ).
				        params( function() { return [ CALayer, CALayer ]; } ),
    insertSublayerAbove: objc.instanceSelector("insertSublayer:above:").
                                       returns( function() { return objc.sig.Void; } ).
				        params( function() { return [ CALayer, CALayer ]; } ),
    replaceSublayerWith: objc.instanceSelector("replaceSublayer:with:").
                                       returns( function() { return objc.sig.Void; } ).
				        params( function() { return [ CALayer, CALayer ]; } ),

    // Updating Layer Display
    needsDisplay: objc.instanceProperty(),
    needsDisplayOnBoundsChange: objc.instanceProperty(),
    needsDisplayForKey: objc.staticSelector("needsDisplayForKey:"),
    setNeedsDisplayInRect: objc.instanceSelector("setNeedsDisplayInRect:").
                                       returns( function() { return objc.sig.Void; } ).
					params( function() { return [ foundation.NSRect ]; } ),
    displayIfNeeded: objc.instanceSelector("displayIfNeeded").
				   returns( function() { return objc.sig.Void; } ),

    // Layer Animations
    addAnimation: objc.instanceSelector("addAnimation:forKey:").
                              returns( function() { return objc.sig.Void; } ).
			       params( function() { return [ CAAnimation, objc.sig.NSString ]; } ),

    animation: objc.instanceSelector("animationForKey:").
                             returns( function() { return CAAnimation; } ).
			      params( function() { return [ objc.sig.NSString ]; } ),

    removeAllAnimations: objc.instanceSelector("removeAllAnimations").
				       returns( function() { return objc.sig.Void; } ),

    removeAnimation: objc.instanceSelector("removeAnimationForKey:").
                                   returns( function() { return objc.sig.Void; } ).
				    params( function() { return [ objc.sig.NSString ]; } ),

    animationKeys: objc.instanceProperty({ set: null }),

    // Managing Layer Resizing and Layout
    layoutManager: objc.instanceProperty(),
    needsLayout: objc.instanceProperty(),
    //constraints: objc.instanceProperty(),                   XXX osx only
    name: objc.instanceProperty(),
    autoresizingMask: objc.instanceProperty(),
    //addConstraint: objc.instanceSelector("addConstraint:"),   XXX osx only
    //resizeWithOldSuperlayerSize: objc.instanceSelector("resizeWithOldSuperlayerSize:"),  XXX osx only
    //resizeSublayersWithOldSize: objc.instanceSelector("resizeSublayersWithOldSize:"),    XXX osx only
    preferredFrameSize: objc.instanceSelector("preferredFrameSize").
				      returns( function() { return foundation.NSSize; } ),
    layoutIfNeeded: objc.instanceSelector("layoutIfNeeded").
				  returns( function() { return objc.sig.Void; } ),
    layoutSublayers: objc.instanceSelector("layoutSublayers").
				   returns( function() { return objc.sig.Void; } ),

    // Actions
    actions: objc.instanceProperty(),
    defaultActionForKey: objc.staticSelector("defaultActionForKey:"),
    actionForKey: objc.instanceSelector("actionForKey:").
				returns( function() { return CAAction; } ).
				 params( function() { return [ objc.sig.NSString ]; } ),

    // Mapping Between Coordinate and Time Spaces
    convertPointFromLayer: objc.instanceSelector("convertPoint:fromLayer:").
                                         returns( function() { return foundation.NSPoint; } ).
					  params( function() { return [ foundation.NSPoint, CALayer ]; }),
    convertPointToLayer: objc.instanceSelector("convertPoint:toLayer:").
      				       returns( function() { return foundation.NSPoint; } ).
					params( function() { return [ foundation.NSPoint, CALayer ]; }),
    convertRectFromLayer: objc.instanceSelector("convertRect:fromLayer:").
                                	returns( function() { return foundation.NSRect; } ).
					 params( function() { return [ foundation.NSRect, CALayer ]; }),
    convertRectToLayer: objc.instanceSelector("convertRect:toLayer:").
      				      returns( function() { return foundation.NSRect; } ).
				       params( function() { return [ foundation.NSRect, CALayer ]; }),
    convertTimeFromLayer: objc.instanceSelector("convertTime:fromLayer:").
					returns( function() { return objc.sig.Double; } ).    // these Double's should be CFTimeInverval
					 params( function() { return [ objc.sig.Double, CALayer ]; }),
    convertTimeToLayer: objc.instanceSelector("convertTime:toLayer:").
				      returns( function() { return objc.sig.Double; } ).    // these Double's should be CFTimeInverval
				      params( function() { return [ objc.sig.Double, CALayer ]; }),

    // Hit Testing
    hitTest: objc.instanceSelector("hitTest:").
			   returns( function() { return CALayer; } ).
			    params( function() { return [ foundation.NSPoint ]; } ),
    containsPoint: objc.instanceSelector("containsPoint:").
				 returns( function() { return objc.sig.Bool; } ).
				  params( function() { return [ foundation.NSPoint ]; } ),

    // Rendering
    renderInContext: objc.instanceSelector("renderInContext:").
				   returns( function() { return objc.sig.Void; } ).
				    params( function() { return [ objc.sig.PointerTo(objc.sig.CGContext) ]; } ),
    shouldRasterize: objc.instanceProperty(),
    rasterizationScale: objc.instanceProperty(),

    // Scrolling
    visibleRect: objc.instanceProperty(),
    scrollPoint: objc.instanceSelector("scrollPoint:").
			       returns( function() { return objc.sig.Void; } ).
			        params( function() { return [ foundation.NSPoint ]; } ),
    scrollRectToVisible: objc.instanceSelector("scrollRectToVisible:"),

    // Modifying the Delegate
    delegate: objc.autoboxProperty(CALayerDelegate),

    // Key-Value Coding Extensions
    shouldArchiveValueForKey: objc.instanceSelector("shouldArchiveValueForKey:").
					    returns( function() { return objc.sig.Bool; } ).
					     params( function() { return [ objc.sig.NSString ]; } ),
    defaultValueForKey: objc.staticSelector("defaultValueForKey:")

}));
