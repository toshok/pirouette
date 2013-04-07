// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSView = NSView = objc.bindClass(foundation.NSResponder,
  function NSView () {
    NSView.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Instances
    initWithFrame: objc.instanceSelector("initWithFrame:"),

    // Managing the View Hierarchy
    superview: objc.instanceSelector("superview"),
    setSubviews: objc.instanceSelector("setSubviews:"),
    subviews: objc.instanceSelector("subviews"),
    window: objc.instanceSelector("window"),
    addSubview: objc.instanceSelector("addSubview:"),
    addSubviewPositionedRelativeTo: objc.instanceSelector("addSubview:positioned:relativeTo:"),
    didAddSubview: objc.instanceSelector("didAddSubview:"),
    removeFromSuperview: objc.instanceSelector("removeFromSuperview"),
    removeFromSuperviewWithoutNeedingDisplay: objc.instanceSelector("removeFromSuperviewWithoutNeedingDisplay"),
    replaceSubview: objc.instanceSelector("replaceSubview:with:"),
    isDescendantOf: objc.instanceSelector("isDescendantOf:"),
    opaqueAncestor: objc.instanceSelector("opaqueAncestor"),
    ancestorSharedWithView: objc.instanceSelector("ancestorSharedWithView:"),
    sortSubviewsUsingFunction: objc.instanceSelector("sortSubviewsUsingFunction:context:"),
    viewDidMoveToSuperview: objc.instanceSelector("viewDidMoveToSuperview"),
    viewDidMoveToWindow: objc.instanceSelector("viewDidMoveToWindow"),
    viewWillMoveToSuperview: objc.instanceSelector("viewWillMoveToSuperview:"),
    viewWillMoveToWindow: objc.instanceSelector("viewWillMoveToWindow:"),
    willRemoveSubview: objc.instanceSelector("willRemoveSubview:"),
    enclosingMenuItem: objc.instanceSelector("enclosingMenuItem"),

    // Searching by Tag
    viewWithTag: objc.instanceSelector("viewWithTag:"),
    tag: objc.instanceSelector("tag"),

    // Modifying the Frame Rectangle
    frame: objc.instanceProperty(),
    setFrameOrigin: objc.instanceSelector("setFrameOrigin:"),
    setFrameSize: objc.instanceSelector("setFrameSize:"),
    setFrameRotation: objc.instanceSelector("setFrameRotation:"),
    frameRotation: objc.instanceSelector("frameRotation"),

    // Modifying the Bounds Rectangle
    bounds: objc.instanceProperty(),
    setBoundsOrigin: objc.instanceSelector("setBoundsOrigin:"),
    setBoundsSize: objc.instanceSelector("setBoundsSize:"),
    setBoundsRotation: objc.instanceSelector("setBoundsRotation:"),
    boundsRotation: objc.instanceSelector("boundsRotation"),

    // Modifying the Coordinate System
    translateOriginToPoint: objc.instanceSelector("translateOriginToPoint:"),
    scaleUnitSquareToSize: objc.instanceSelector("scaleUnitSquareToSize:"),
    rotateByAngle: objc.instanceSelector("rotateByAngle:"),

    // Examining Coordinate System Modifications
    isFlipped: objc.instanceSelector("isFlipped"),
    isRotatedFromBase: objc.instanceSelector("isRotatedFromBase"),
    isRotatedOrScaledFromBase: objc.instanceSelector("isRotatedOrScaledFromBase"),

    // Base Coordinate Conversion
    convertPointToBase: objc.instanceSelector("convertPointToBase:"),
    convertPointFromBase: objc.instanceSelector("convertPointFromBase:"),
    convertSizeToBase: objc.instanceSelector("convertSizeToBase:"),
    convertSizeFromBase: objc.instanceSelector("convertSizeFromBase:"),
    convertRectToBase: objc.instanceSelector("convertRectToBase:"),
    convertRectFromBase: objc.instanceSelector("convertRectFromBase:"),

    // Converting Coordinates
    backingAlignedRect: objc.instanceSelector("backingAlignedRect:options:"),
    convertPointFromBacking: objc.instanceSelector("convertPointFromBacking:"),
    convertPointToBacking: objc.instanceSelector("convertPointToBacking:"),
    convertPointFromLayer: objc.instanceSelector("convertPointFromLayer:"),
    convertPointToLayer: objc.instanceSelector("convertPointToLayer:"),
    convertRectFromBacking: objc.instanceSelector("convertRectFromBacking:"),
    convertRectToBacking: objc.instanceSelector("convertRectToBacking:"),
    convertRectFromLayer: objc.instanceSelector("convertRectFromLayer:"),
    convertRectToLayer: objc.instanceSelector("convertRectToLayer:"),
    convertSizeFromBacking: objc.instanceSelector("convertSizeFromBacking:"),
    convertSizeToBacking: objc.instanceSelector("convertSizeToBacking:"),
    convertSizeFromLayer: objc.instanceSelector("convertSizeFromLayer:"),
    convertSizeToLayer: objc.instanceSelector("convertSizeToLayer:"),
    convertPointFromView: objc.instanceSelector("convertPoint:fromView:"),
    convertPointToView: objc.instanceSelector("convertPoint:toView:"),
    convertSizeFromView: objc.instanceSelector("convertSize:fromView:"),
    convertSizeToView: objc.instanceSelector("convertSize:toView:"),
    convertRectFromView: objc.instanceSelector("convertRect:fromView:"),
    convertRectToView: objc.instanceSelector("convertRect:toView:"),
    centerScanRect: objc.instanceSelector("centerScanRect:"),

    // Controlling Notifications
    setPostsFrameChangedNotifications: objc.instanceSelector("setPostsFrameChangedNotifications:"),
    postsFrameChangedNotifications: objc.instanceSelector("postsFrameChangedNotifications"),
    setPostsBoundsChangedNotifications: objc.instanceSelector("setPostsBoundsChangedNotifications:"),
    postsBoundsChangedNotifications: objc.instanceSelector("postsBoundsChangedNotifications"),

    // Resizing Subviews
    resizeSubviewsWithOldSize: objc.instanceSelector("resizeSubviewsWithOldSize:"),
    resizeWithOldSuperviewSize: objc.instanceSelector("resizeWithOldSuperviewSize:"),
    setAutoresizesSubviews: objc.instanceSelector("setAutoresizesSubviews:"),
    autoresizesSubviews: objc.instanceSelector("autoresizesSubviews"),
    setAutoresizingMask: objc.instanceSelector("setAutoresizingMask:"),
    autoresizingMask: objc.instanceSelector("autoresizingMask"),

    // Focusing
    lockFocus: objc.instanceSelector("lockFocus"),
    lockFocusIfCanDraw: objc.instanceSelector("lockFocusIfCanDraw"),
    lockFocusIfCanDrawInContext: objc.instanceSelector("lockFocusIfCanDrawInContext:"),
    unlockFocus: objc.instanceSelector("unlockFocus"),
    focusView: objc.instanceSelector("focusView"),

    // Displaying
    setNeedsDisplay: objc.instanceSelector("setNeedsDisplay:"),
    setNeedsDisplayInRect: objc.instanceSelector("setNeedsDisplayInRect:"),
    needsDisplay: objc.instanceSelector("needsDisplay"),
    display: objc.instanceSelector("display"),
    displayRect: objc.instanceSelector("displayRect:"),
    displayRectIgnoringOpacity: objc.instanceSelector("displayRectIgnoringOpacity:"),
    displayRectIgnoringOpacityInContext: objc.instanceSelector("displayRectIgnoringOpacity:inContext:"),
    displayIfNeeded: objc.instanceSelector("displayIfNeeded"),
    displayIfNeededInRect: objc.instanceSelector("displayIfNeededInRect:"),
    displayIfNeededIgnoringOpacity: objc.instanceSelector("displayIfNeededIgnoringOpacity"),
    displayIfNeededInRectIgnoringOpacity: objc.instanceSelector("displayIfNeededInRectIgnoringOpacity:"),
    translateRectsNeedingDisplayInRect: objc.instanceSelector("translateRectsNeedingDisplayInRect:by:"),
    isOpaque: objc.instanceSelector("isOpaque"),
    viewWillDraw: objc.instanceSelector("viewWillDraw"),

    // Focus Ring Drawing
    drawFocusRingMask: objc.instanceSelector("drawFocusRingMask"),
    focusRingMaskBounds: objc.instanceSelector("focusRingMaskBounds"),
    noteFocusRingMaskChanged: objc.instanceSelector("noteFocusRingMaskChanged"),
    setKeyboardFocusRingNeedsDisplayInRect: objc.instanceSelector("setKeyboardFocusRingNeedsDisplayInRect:"),
    defaultFocusRingType: objc.instanceSelector("defaultFocusRingType"),
    setFocusRingType: objc.instanceSelector("setFocusRingType:"),
    focusRingType: objc.instanceSelector("focusRingType"),

    // Fullscreen Mode
    enterFullScreenMode: objc.instanceSelector("enterFullScreenMode:withOptions:"),
    exitFullScreenMode: objc.instanceSelector("exitFullScreenModeWithOptions:"),
    isInFullScreenMode: objc.instanceSelector("isInFullScreenMode"),

    // Hiding Views
    hidden: objc.instanceProperty({ get: "isHidden" }),
    isHiddenOrHasHiddenAncestor: objc.instanceSelector("isHiddenOrHasHiddenAncestor"),
    viewDidHide: objc.instanceSelector("viewDidHide"),
    viewDidUnhide: objc.instanceSelector("viewDidUnhide"),

    // Drawing
    canDrawConcurrently: objc.instanceSelector("canDrawConcurrently"),
    setCanDrawConcurrently: objc.instanceSelector("setCanDrawConcurrently:"),
    drawRect: objc.instanceSelector("drawRect:"),
    visibleRect: objc.instanceSelector("visibleRect"),
    canDraw: objc.instanceSelector("canDraw"),
    shouldDrawColor: objc.instanceSelector("shouldDrawColor"),
    getRectsBeingDrawn: objc.instanceSelector("getRectsBeingDrawn:count:"),
    needsToDrawRect: objc.instanceSelector("needsToDrawRect:"),
    wantsDefaultClipping: objc.instanceSelector("wantsDefaultClipping"),
    bitmapImageRepForCachingDisplayInRect: objc.instanceSelector("bitmapImageRepForCachingDisplayInRect:"),
    cacheDisplayInRectToBitmapImageRep: objc.instanceSelector("cacheDisplayInRect:toBitmapImageRep:"),

    // Managing Live Resize
    inLiveResize: objc.instanceSelector("inLiveResize"),
    preservesContentDuringLiveResize: objc.instanceSelector("preservesContentDuringLiveResize"),
    getRectsExposedDuringLiveResize: objc.instanceSelector("getRectsExposedDuringLiveResize:count:"),
    rectPreservedDuringLiveResize: objc.instanceSelector("rectPreservedDuringLiveResize"),
    viewWillStartLiveResize: objc.instanceSelector("viewWillStartLiveResize"),
    viewDidEndLiveResize: objc.instanceSelector("viewDidEndLiveResize"),

    // Managing the Graphics State
    allocateGState: objc.instanceSelector("allocateGState"),
    gState: objc.instanceSelector("gState"),
    setUpGState: objc.instanceSelector("setUpGState"),
    renewGState: objc.instanceSelector("renewGState"),
    releaseGState: objc.instanceSelector("releaseGState"),

    // Event Handling
    acceptsFirstMouse: objc.instanceSelector("acceptsFirstMouse:"),
    hitTest: objc.instanceSelector("hitTest:"),
    mouseInRect: objc.instanceSelector("mouse:inRect:"),
    performKeyEquivalent: objc.instanceSelector("performKeyEquivalent:"),
    rightMouseDown: objc.instanceSelector("rightMouseDown:"),
    performMnemonic: objc.instanceSelector("performMnemonic:"),
    mouseDownCanMoveWindow: objc.instanceSelector("mouseDownCanMoveWindow"),
    inputContext: objc.instanceSelector("inputContext"),

    // Dragging Operations
    registeredDraggedTypes: objc.instanceSelector("registeredDraggedTypes"),
    registerForDraggedTypes: objc.instanceSelector("registerForDraggedTypes:"),
    unregisterDraggedTypes: objc.instanceSelector("unregisterDraggedTypes"),
    beginDraggingSession: objc.instanceSelector("beginDraggingSessionWithItems:event:source:"),
    dragFile: objc.instanceSelector("dragFile:fromRect:slideBack:event:"),
    dragImage: objc.instanceSelector("dragImage:at:offset:event:pasteboard:source:slideBack:"),
    dragPromisedFiles: objc.instanceSelector("dragPromisedFilesOfTypes:fromRect:source:slideBack:event:"),
    shouldDelayWindowOrderingForEvent: objc.instanceSelector("shouldDelayWindowOrderingForEvent:"),

    // Tool Tips
    addToolTip: objc.instanceSelector("addToolTipRect:owner:userData:"),
    removeAllToolTips: objc.instanceSelector("removeAllToolTips"),
    removeToolTip: objc.instanceSelector("removeToolTip:"),
    setToolTip: objc.instanceSelector("setToolTip:"),
    toolTip: objc.instanceSelector("toolTip"),

    // Managing Tracking Rectangles
    addTrackingRect: objc.instanceSelector("addTrackingRect:owner:userData:assumeInside:"),
    removeTrackingRect: objc.instanceSelector("removeTrackingRect:"),

    // Managing Tracking Areas
    addTrackingArea: objc.instanceSelector("addTrackingArea:"),
    removeTrackingArea: objc.instanceSelector("removeTrackingArea:"),
    trackingAreas: objc.instanceSelector("trackingAreas"),
    updateTrackingAreas: objc.instanceSelector("updateTrackingAreas"),

    // Managing Cursor Tracking
    addCursorRect: objc.instanceSelector("addCursorRect:cursor:"),
    removeCursorRect: objc.instanceSelector("removeCursorRect:cursor:"),
    discardCursorRects: objc.instanceSelector("discardCursorRects"),
    resetCursorRects: objc.instanceSelector("resetCursorRects"),

    // Scrolling
    scrollPoint: objc.instanceSelector("scrollPoint:"),
    scrollRectToVisible: objc.instanceSelector("scrollRectToVisible:"),
    autoscroll: objc.instanceSelector("autoscroll:"),
    adjustScroll: objc.instanceSelector("adjustScroll:"),
    scrollRectBy: objc.instanceSelector("scrollRect:by:"),
    enclosingScrollView: objc.instanceSelector("enclosingScrollView"),
    scrollClipViewToPoint: objc.instanceSelector("scrollClipView:toPoint:"),
    reflectScrolledClipView: objc.instanceSelector("reflectScrolledClipView:"),

    // Contextual Menus
    menuForEvent: objc.instanceSelector("menuForEvent:"),
    defaultMenu: objc.instanceSelector("defaultMenu"),

    // Key-view Loop Management
    canBecomeKeyView: objc.instanceSelector("canBecomeKeyView"),
    needsPanelToBecomeKey: objc.instanceSelector("needsPanelToBecomeKey"),
    setNextKeyView: objc.instanceSelector("setNextKeyView:"),
    nextKeyView: objc.instanceSelector("nextKeyView"),
    nextValidKeyView: objc.instanceSelector("nextValidKeyView"),
    previousKeyView: objc.instanceSelector("previousKeyView"),
    previousValidKeyView: objc.instanceSelector("previousValidKeyView"),

    // Printing
    print: objc.instanceSelector("print:"),
    beginPage: objc.instanceSelector("beginPageInRect:atPlacement:"),
    dataWithEPSInsideRect: objc.instanceSelector("dataWithEPSInsideRect:"),
    dataWithPDFInsideRect: objc.instanceSelector("dataWithPDFInsideRect:"),
    printJobTitle: objc.instanceSelector("printJobTitle"),
    pageFooter: objc.instanceSelector("pageFooter"),
    pageHeader: objc.instanceSelector("pageHeader"),
    writeEPS: objc.instanceSelector("writeEPSInsideRect:toPasteboard:"),
    writePDF: objc.instanceSelector("writePDFInsideRect:toPasteboard:"),
    drawPageBorderWithSize: objc.instanceSelector("drawPageBorderWithSize:"),
    drawSheetBorderWithSize: objc.instanceSelector("drawSheetBorderWithSize:"),

    // Pagination
    heightAdjustLimit: objc.instanceSelector("heightAdjustLimit"),
    widthAdjustLimit: objc.instanceSelector("widthAdjustLimit"),
    adjustPageWidth: objc.instanceSelector("adjustPageWidthNew:left:right:limit:"),
    adjustPageHeight: objc.instanceSelector("adjustPageHeightNew:top:bottom:limit:"),
    knowsPageRange: objc.instanceSelector("knowsPageRange:"),
    rectForPage: objc.instanceSelector("rectForPage:"),
    locationOfPrintRect: objc.instanceSelector("locationOfPrintRect:"),

    // Writing Conforming Rendering Instructions
    beginDocument: objc.instanceSelector("beginDocument"),
    endDocument: objc.instanceSelector("endDocument"),
    endPage: objc.instanceSelector("endPage"),

    // Core Animation Layer-Backing
    layer: objc.instanceSelector("layer"),
    setLayer: objc.instanceSelector("setLayer:"),
    wantsLayer: objc.instanceSelector("wantsLayer"),
    setWantsLayer: objc.instanceSelector("setWantsLayer:"),
    makeBackingLayer: objc.instanceSelector("makeBackingLayer"),
    layerContentsPlacement: objc.instanceSelector("layerContentsPlacement"),
    setLayerContentsPlacement: objc.instanceSelector("setLayerContentsPlacement:"),
    layerContentsRedrawPolicy: objc.instanceSelector("layerContentsRedrawPolicy"),
    setLayerContentsRedrawPolicy: objc.instanceSelector("setLayerContentsRedrawPolicy:"),

    // Core Animation Layer Properties
    setFrameCenterRotation: objc.instanceSelector("setFrameCenterRotation:"),
    frameCenterRotation: objc.instanceSelector("frameCenterRotation"),
    setAlphaValue: objc.instanceSelector("setAlphaValue:"),
    alphaValue: objc.instanceSelector("alphaValue"),
    setBackgroundFilters: objc.instanceSelector("setBackgroundFilters:"),
    backgroundFilters: objc.instanceSelector("backgroundFilters"),
    setCompositingFilter: objc.instanceSelector("setCompositingFilter:"),
    compositingFilter: objc.instanceSelector("compositingFilter"),
    setContentFilters: objc.instanceSelector("setContentFilters:"),
    contentFilters: objc.instanceSelector("contentFilters"),
    setShadow: objc.instanceSelector("setShadow:"),
    shadow: objc.instanceSelector("shadow"),

    // Displaying Definition Windows
    showDefinitionForAttributedStringAtPoint: objc.instanceSelector("showDefinitionForAttributedString:atPoint:"),
    showDefinitionForAttributedString: objc.instanceSelector("showDefinitionForAttributedString:range:options:baselineOriginProvider:"),

    // Touch Event Handling
    acceptsTouchEvents: objc.instanceProperty(),
    wantsRestingTouches: objc.instanceProperty(),

    // Drawing Find Indicator
    isDrawingFindIndicator: objc.instanceSelector("isDrawingFindIndicator"),

    // Managing Constraints
    constraints: objc.instanceSelector("constraints"),
    addConstraint: objc.instanceSelector("addConstraint:"),
    addConstraints: objc.instanceSelector("addConstraints:"),
    removeConstraint: objc.instanceSelector("removeConstraint:"),
    removeConstraints: objc.instanceSelector("removeConstraints:"),

    // Measuring in Constraint-Based Layout
    fittingSize: objc.instanceSelector("fittingSize"),
    intrinsicContentSize: objc.instanceSelector("intrinsicContentSize"),
    invalidateIntrinsicContentSize: objc.instanceSelector("invalidateIntrinsicContentSize"),
    contentCompressionResistancePriority: objc.instanceSelector("contentCompressionResistancePriorityForOrientation:"),
    setContentCompressionResistancePriority: objc.instanceSelector("setContentCompressionResistancePriority:forOrientation:"),
    contentHuggingPriority: objc.instanceSelector("contentHuggingPriorityForOrientation:"),
    setContentHuggingPriority: objc.instanceSelector("setContentHuggingPriority:forOrientation:"),

    // Aligning Views with Constraint-Based Layout
    alignmentRectForFrame: objc.instanceSelector("alignmentRectForFrame:"),
    frameForAlignmentRect: objc.instanceSelector("frameForAlignmentRect:"),
    alignmentRectInsets: objc.instanceSelector("alignmentRectInsets"),
    baselineOffsetFromBottom: objc.instanceSelector("baselineOffsetFromBottom"),

    // Triggering Constraint-Based Layout
    needsLayout: objc.instanceSelector("needsLayout"),
    setNeedsLayout: objc.instanceSelector("setNeedsLayout:"),
    layout: objc.instanceSelector("layout"),
    layoutSubtreeIfNeeded: objc.instanceSelector("layoutSubtreeIfNeeded"),
    needsUpdateConstraints: objc.instanceSelector("needsUpdateConstraints"),
    setNeedsUpdateConstraints: objc.instanceSelector("setNeedsUpdateConstraints:"),
    updateConstraints: objc.instanceSelector("updateConstraints"),
    updateConstraintsForSubtreeIfNeeded: objc.instanceSelector("updateConstraintsForSubtreeIfNeeded"),

    // Opting in to Constraint-Based Layout
    requiresConstraintBasedLayout: objc.instanceSelector("requiresConstraintBasedLayout"),
    translatesAutoresizingMaskIntoConstraints: objc.instanceSelector("translatesAutoresizingMaskIntoConstraints"),
    setTranslatesAutoresizingMaskIntoConstraints: objc.instanceSelector("setTranslatesAutoresizingMaskIntoConstraints:"),

    // Debugging Constraint-Based Layout

    // See Cocoa Autolayout Release Notes for more details on debugging constraint-based layout.

    constraintsAffectingLayoutForOrientation: objc.instanceSelector("constraintsAffectingLayoutForOrientation:"),
    hasAmbiguousLayout: objc.instanceSelector("hasAmbiguousLayout"),
    exerciseAmbiguityInLayout: objc.instanceSelector("exerciseAmbiguityInLayout")

});