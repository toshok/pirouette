// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIView");
exports.UIView = UIView = UIResponder.extendClass ("UIView", {

    initWithFrame:    objc.instanceSelector("initWithFrame:").
                            returns( function() { return UIView; }).
			     params( function() { return [ foundation.NSRect ]; }),

    // Configuring a View’s Visual Appearance
    layerClass:      objc.staticSelector("layerClass"),
    backgroundColor: objc.instanceProperty(),
    hidden: objc.instanceProperty(),
    alpha: objc.instanceProperty(),
    opaque: objc.instanceProperty(),
    clipsToBounds: objc.instanceProperty(),
    clearsContextBeforeDrawing: objc.instanceProperty(),
    layer: objc.instanceProperty(),

    // Configuring the Event-Related Behavior
    userInteractionEnabled: objc.instanceProperty(),
    multipleTouchEnabled: objc.instanceProperty(),
    exclusiveTouch: objc.instanceProperty(),

    // Configuring the Bounds and Frame Rectangles
    frame: objc.instanceProperty(),
    bounds: objc.instanceProperty(),
    center: objc.instanceProperty(),
    transform: objc.instanceProperty(),

    // Configuring the Resizing Behavior
    sizeThatFits: objc.instanceSelector("sizeThatFits:"),
    sizeToFit:    objc.instanceSelector("sizeToFit"),
    autoresizingMask: objc.instanceProperty(),
    autoresizesSubviews: objc.instanceProperty(),
    contentMode: objc.instanceProperty(),
    contentStretch: objc.instanceProperty(),

    // Managing the View Hierarchy
    addSubview:                               objc.instanceSelector("addSubview:"),
    bringSubviewToFront:                      objc.instanceSelector("bringSubviewToFront:"),
    sendSubviewToBack:                        objc.instanceSelector("sendSubviewToBack:"),
    removeFromSuperview:                      objc.instanceSelector("removeFromSuperview"),
    insertSubviewAtIndex:                     objc.instanceSelector("insertSubview:atIndex:"),
    insertSubviewAboveSubview:                objc.instanceSelector("insertSubview:aboveSubview:"),
    insertSubviewBelowSubview:                objc.instanceSelector("insertSubview:belowSubview:"),
    exchangeSubviewAtIndexWithSubviewAtIndex: objc.instanceSelector("exchangeSubviewAtIndex:withSubviewAtIndex:"),
    isDescendantOfView:                       objc.instanceSelector("isDescendantOfView:"),
    superview: objc.instanceProperty(),
    subviews: objc.instanceProperty(),
    window: objc.instanceProperty(),

    // Laying out Subviews
    layoutSubviews: objc.instanceSelector("layoutSubviews"),
    setNeedsLayout: objc.instanceSelector("setNeedsLayout"),
    layoutIfNeeded: objc.instanceSelector("layoutIfNeeded"),

    // Drawing and Updating the View
    drawRect:              objc.instanceSelector("drawRect:"),
    setNeedsDisplay:       objc.instanceSelector("setNeedsDisplay"),
    setNeedsDisplayInRect: objc.instanceSelector("setNeedsDisplayInRect:"),
    contentScaleFactor: objc.instanceProperty(),

    // Formatting Printed View Content
    viewPrintFormatter:            objc.instanceSelector("viewPrintFormatter"),
    drawRectForViewPrintFormatter: objc.instanceSelector("drawRect:forViewPrintFormatter:"),

    // Managing Gesture Recognizers
    addGestureRecognizer:    objc.instanceSelector("addGestureRecognizer:"),
    removeGestureRecognizer: objc.instanceSelector("removeGestureRecognizer:"),
    gestureRecognizers: objc.instanceProperty(),

    // Animating Views with Blocks
    animateWithDurationDelayCompletion: objc.instanceSelector("animateWithDuration:delay:options:animations:completion:"),
    animateWithDurationCompletion:      objc.instanceSelector("animateWithDuration:animations:completion:"),
    animateWithDuration:                objc.instanceSelector("animateWithDuration:animations:"),
    transitionWithViewDelayCompletion:  objc.instanceSelector("transitionWithView:duration:options:animations:completion:"),
    transitionFromViewCompletion:       objc.instanceSelector("transitionFromView:toView:duration:options:completion:"),

    // Animating Views
    // Use of the methods in this section is discouraged in iOS 4 and later. Use the block-based animation methods instead.

    beginAnimationsWithContext: objc.instanceSelector("beginAnimations:context:"),
    commitAnimations:                   objc.instanceSelector("commitAnimations"),
    setAnimationStartDate:              objc.instanceSelector("setAnimationStartDate:"),
    setAnimationsEnabled:               objc.instanceSelector("setAnimationsEnabled:"),
    setAnimationDelegate:               objc.instanceSelector("setAnimationDelegate:"),
    setAnimationWillStartSelector:      objc.instanceSelector("setAnimationWillStartSelector:"),
    setAnimationDidStopSelector:        objc.instanceSelector("setAnimationDidStopSelector:"),
    setAnimationDuration:               objc.instanceSelector("setAnimationDuration:"),
    setAnimationDelay:                  objc.instanceSelector("setAnimationDelay:"),
    setAnimationCurve:                  objc.instanceSelector("setAnimationCurve:"),
    setAnimationRepeatCount:            objc.instanceSelector("setAnimationRepeatCount:"),
    setAnimationRepeatAutoreverses:     objc.instanceSelector("setAnimationRepeatAutoreverses:"),
    setAnimationBeginsFromCurrentState: objc.instanceSelector("setAnimationBeginsFromCurrentState:"),
    setAnimationTransitionForView:      objc.instanceSelector("setAnimationTransition:forView:cache:"),
    areAnimationsEnabled:               objc.instanceSelector("areAnimationsEnabled"),

    // Identifying the View at Runtime
    viewWithTag:          objc.instanceSelector("viewWithTag:"),
    tag: objc.instanceProperty(),

    // Converting Between View Coordinate Systems
    convertPointToView:   objc.instanceSelector("convertPoint:toView:"),
    convertPointFromView: objc.instanceSelector("convertPoint:fromView:"),
    convertRectToView:    objc.instanceSelector("convertRect:toView:"),
    convertRectFromView:  objc.instanceSelector("convertRect:fromView:"),

    // Hit Testing in a View
    hitTestWithEvent:     objc.instanceSelector("hitTest:withEvent:"),
    pointInsideWithEvent: objc.instanceSelector("pointInside:withEvent:"),

    // Ending a View Editing Session
    endEditing:           objc.instanceSelector("endEditing:"),

    // Observing View-Related Changes
    didAddSubview:        objc.instanceSelector("didAddSubview:"),
    willRemoveSubview:    objc.instanceSelector("willRemoveSubview:"),
    willMoveToSuperview:  objc.instanceSelector("willMoveToSuperview:"),
    didMoveToSuperview:   objc.instanceSelector("didMoveToSuperview"),
    willMoveToWindow:     objc.instanceSelector("willMoveToWindow:"),
    didMoveToWindow:      objc.instanceSelector("didMoveToWindow")

    // XXX ES6-port
    //@mixinProtocol UIAppearance
});
