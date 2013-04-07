// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CALayer = CALayer = objc.bindClass(foundation.NSObject,
  function CALayer () {
    return CALayer.__super__.constructor.apply(this, arguments);
  }, {

    // Creating a Layer
    layer: objc.staticSelector("layer"),
    init: objc.instanceSelector("init").
			returns( () => CALayer ),
    initWithLayer: objc.instanceSelector("initWithLayer:").
                                 returns( () => CALayer ).
				  params( () => [ CALayer ] ),


    // Accessing the Presentation Layer
    presentationLayer: objc.instanceSelector("presentationLayer").
				     returns( () => CALayer ),
    modelLayer: objc.instanceSelector("modelLayer").
			      returns( () => CALayer ),

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
			   returns( () => ck.sig.Void ),
    drawInContext: objc.instanceSelector("drawInContext:").
                                 returns( () => ck.sig.Void ).
				  params( () => [ ck.sig.PointerTo(ck.sig.CGContext)] ),
    opaque: objc.instanceProperty(),
    edgeAntialiasingMask: objc.instanceProperty(),
    contentsAreFlipped: objc.instanceSelector("contentsAreFlipped").
				      returns( () => ck.sig.Bool ),
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
                             returns( () => ck.sig.Void ).
			      params( () => [ CALayer ] ),

    removeFromSuperlayer: objc.instanceSelector("removeFromSuperlayer").
					returns( () => ck.sig.Void ),

    insertSublayerAtIndex: objc.instanceSelector("insertSublayer:atIndex:").
                                         returns( () => ck.sig.Void ).
					  params( () => [ CALayer, ck.sig.UInt ] ),
    insertSublayerBelow: objc.instanceSelector("insertSublayer:below:").
                                       returns( () => ck.sig.Void ).
				        params( () => [ CALayer, CALayer ] ),
    insertSublayerAbove: objc.instanceSelector("insertSublayer:above:").
                                       returns( () => ck.sig.Void ).
				        params( () => [ CALayer, CALayer ] ),
    replaceSublayerWith: objc.instanceSelector("replaceSublayer:with:").
                                       returns( () => ck.sig.Void ).
				        params( () => [ CALayer, CALayer ] ),

    // Updating Layer Display
    needsDisplay: objc.instanceProperty(),
    needsDisplayOnBoundsChange: objc.instanceProperty(),
    @needsDisplayForKey: objc.instanceSelector("needsDisplayForKey:"),
    setNeedsDisplayInRect: objc.instanceSelector("setNeedsDisplayInRect:").
                                       returns( () => ck.sig.Void ).
					params( () => [ foundation.NSRect ] ),
    displayIfNeeded: objc.instanceSelector("displayIfNeeded").
				   returns( () => ck.sig.Void ),

    // Layer Animations
    addAnimation: objc.instanceSelector("addAnimation:forKey:").
                              returns( () => ck.sig.Void ).
			       params( () => [ CAAnimation, ck.sig.NSString ] ),

    animation: objc.instanceSelector("animationForKey:").
                             returns( () => CAAnimation ).
			      params( () => [ ck.sig.NSString ] ),

    removeAllAnimations: objc.instanceSelector("removeAllAnimations").
				       returns( () => ck.sig.Void ),

    removeAnimation: objc.instanceSelector("removeAnimationForKey:").
                                   returns( () => ck.sig.Void ).
				    params( () => [ ck.sig.NSString ] ),

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
				      returns( () => foundation.NSSize ),
    layoutIfNeeded: objc.instanceSelector("layoutIfNeeded").
				  returns( () => ck.sig.Void ),
    layoutSublayers: objc.instanceSelector("layoutSublayers").
				   returns( () => ck.sig.Void ),

    // Actions
    actions: objc.instanceProperty(),
    @defaultActionForKey: objc.instanceSelector("defaultActionForKey:"),
    actionForKey: objc.instanceSelector("actionForKey:").
				returns( () => CAAction ).
				 params( () => [ ck.sig.NSString ] ),

    // Mapping Between Coordinate and Time Spaces
    convertPointFromLayer: objc.instanceSelector("convertPoint:fromLayer:").
                                         returns( () => foundation.NSPoint ).
					  params( () => [ foundation.NSPoint, CALayer ]),
    convertPointToLayer: objc.instanceSelector("convertPoint:toLayer:").
      				       returns( () => foundation.NSPoint ).
					params( () => [ foundation.NSPoint, CALayer ]),
    convertRectFromLayer: objc.instanceSelector("convertRect:fromLayer:").
                                	returns( () => foundation.NSRect ).
					 params( () => [ foundation.NSRect, CALayer ]),
    convertRectToLayer: objc.instanceSelector("convertRect:toLayer:").
      				      returns( () => foundation.NSRect ).
				       params( () => [ foundation.NSRect, CALayer ]),
    convertTimeFromLayer: objc.instanceSelector("convertTime:fromLayer:").
					returns( () => ck.sig.Double ).    // these Double's should be CFTimeInverval
					 params( () => [ ck.sig.Double, CALayer ]),
    convertTimeToLayer: objc.instanceSelector("convertTime:toLayer:").
				      returns( () => ck.sig.Double ).    // these Double's should be CFTimeInverval
				      params( () => [ ck.sig.Double, CALayer ]),

    // Hit Testing
    hitTest: objc.instanceSelector("hitTest:").
			   returns( () => CALayer ).
			    params( () => [ foundation.NSPoint ] ),
    containsPoint: objc.instanceSelector("containsPoint:").
				 returns( () => ck.sig.Bool ).
				  params( () => [ foundation.NSPoint ] ),

    // Rendering
    renderInContext: objc.instanceSelector("renderInContext:").
				   returns( () => ck.sig.Void ).
				    params( () => [ ck.sig.PointerTo(ck.sig.CGContext) ] ),
    shouldRasterize: objc.instanceProperty(),
    rasterizationScale: objc.instanceProperty(),

    // Scrolling
    visibleRect: objc.instanceProperty(),
    scrollPoint: objc.instanceSelector("scrollPoint:").
			       returns( () => ck.sig.Void ).
			        params( () => [ foundation.NSPoint ] ),
    scrollRectToVisible: objc.instanceSelector("scrollRectToVisible:"),

    // Modifying the Delegate
    delegate: objc.autoboxProperty(CALayerDelegate),

    // Key-Value Coding Extensions
    shouldArchiveValueForKey: objc.instanceSelector("shouldArchiveValueForKey:").
					    returns( () => ck.sig.Bool ).
					     params( () => [ ck.sig.NSString ] ),
    @defaultValueForKey: objc.instanceSelector("defaultValueForKey:")

});