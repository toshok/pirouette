// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CALayer;
_exports.CALayer = CALayer = foundation.NSObject.extendClass ("CALayer", () => ({

    // Creating a Layer
    layer: objc.staticSelector("layer"),
    init: objc.instanceSelector("init"),
    initWithLayer: objc.instanceSelector("initWithLayer:"),

    // Accessing the Presentation Layer
    presentationLayer: objc.instanceSelector("presentationLayer"),
    modelLayer: objc.instanceSelector("modelLayer"),

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
    display: objc.instanceSelector("display"),
    drawInContext: objc.instanceSelector("drawInContext:"),
    opaque: objc.instanceProperty(),
    edgeAntialiasingMask: objc.instanceProperty(),
    contentsAreFlipped: objc.instanceSelector("contentsAreFlipped"),
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
    addSublayer: objc.instanceSelector("addSublayer:"),

    removeFromSuperlayer: objc.instanceSelector("removeFromSuperlayer"),

    insertSublayerAtIndex: objc.instanceSelector("insertSublayer:atIndex:"),
    insertSublayerBelow: objc.instanceSelector("insertSublayer:below:"),
    insertSublayerAbove: objc.instanceSelector("insertSublayer:above:"),
    replaceSublayerWith: objc.instanceSelector("replaceSublayer:with:"),

    // Updating Layer Display
    needsDisplay: objc.instanceProperty(),
    needsDisplayOnBoundsChange: objc.instanceProperty(),
    needsDisplayForKey: objc.staticSelector("needsDisplayForKey:"),
    setNeedsDisplayInRect: objc.instanceSelector("setNeedsDisplayInRect:"),
    displayIfNeeded: objc.instanceSelector("displayIfNeeded"),

    // Layer Animations
    addAnimation: objc.instanceSelector("addAnimation:forKey:"),

    animation: objc.instanceSelector("animationForKey:"),

    removeAllAnimations: objc.instanceSelector("removeAllAnimations"),

    removeAnimation: objc.instanceSelector("removeAnimationForKey:"),

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
    preferredFrameSize: objc.instanceSelector("preferredFrameSize"),
    layoutIfNeeded: objc.instanceSelector("layoutIfNeeded"),
    layoutSublayers: objc.instanceSelector("layoutSublayers"),

    // Actions
    actions: objc.instanceProperty(),
    defaultActionForKey: objc.staticSelector("defaultActionForKey:"),
    actionForKey: objc.instanceSelector("actionForKey:"),

    // Mapping Between Coordinate and Time Spaces
    convertPointFromLayer: objc.instanceSelector("convertPoint:fromLayer:"),
    convertPointToLayer: objc.instanceSelector("convertPoint:toLayer:"),
    convertRectFromLayer: objc.instanceSelector("convertRect:fromLayer:"),
    convertRectToLayer: objc.instanceSelector("convertRect:toLayer:"),
    convertTimeFromLayer: objc.instanceSelector("convertTime:fromLayer:"),
    convertTimeToLayer: objc.instanceSelector("convertTime:toLayer:"),

    // Hit Testing
    hitTest: objc.instanceSelector("hitTest:"),
    containsPoint: objc.instanceSelector("containsPoint:"),

    // Rendering
    renderInContext: objc.instanceSelector("renderInContext:"),
    shouldRasterize: objc.instanceProperty(),
    rasterizationScale: objc.instanceProperty(),

    // Scrolling
    visibleRect: objc.instanceProperty(),
    scrollPoint: objc.instanceSelector("scrollPoint:"),
    scrollRectToVisible: objc.instanceSelector("scrollRectToVisible:"),

    // Modifying the Delegate
    delegate: objc.autoboxProperty(CALayerDelegate),

    // Key-Value Coding Extensions
    shouldArchiveValueForKey: objc.instanceSelector("shouldArchiveValueForKey:"),
    defaultValueForKey: objc.staticSelector("defaultValueForKey:")

}));
