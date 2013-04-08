// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.UIScrollView = UIScrollView = UIView.extendClass ("UIScrollView", {

    // Managing the Display of Content
    setContentOffset: objc.instanceSelector("setContentOffset:animated:"),
    contentOffset: objc.instanceProperty({ set: function(v) { return this.setContentOffset (v, false); } }),
    contentSize: objc.instanceProperty(),
    contentInset: objc.instanceProperty(),

    // Managing Scrolling
    scrollRectToVisible:              objc.instanceSelector("scrollRectToVisible:animated:"),
    touchesShouldBegin:               objc.instanceSelector("touchesShouldBegin:withEvent:inContentView:"),
    touchesShouldCancelInContentView: objc.instanceSelector("touchesShouldCancelInContentView:"),
    scrollEnabled: objc.instanceProperty(),
    directionalLockEnabled: objc.instanceProperty(),
    scrollsToTop: objc.instanceProperty(),
    pagingEnabled: objc.instanceProperty(),
    bounces: objc.instanceProperty(),
    alwaysBounceVertical: objc.instanceProperty(),
    alwaysBounceHorizontal: objc.instanceProperty(),
    canCancelContentTouches: objc.instanceProperty(),
    delaysContentTouches: objc.instanceProperty(),
    decelerationRate: objc.instanceProperty(),
    dragging: objc.instanceProperty(),
    tracking: objc.instanceProperty(),
    decelerating: objc.instanceProperty(),

    // Managing the Scroll Indicator
    indicatorStyle: objc.instanceProperty(),
    scrollIndicatorInsets: objc.instanceProperty(),
    showsHorizontalScrollIndicator: objc.instanceProperty(),
    showsVerticalScrollIndicator: objc.instanceProperty(),
    flashScrollIndicators: objc.instanceSelector("flashScrollIndicators"),

    // Zooming and Panning
    zoomToRect:   objc.instanceSelector("zoomToRect:animated:"),
    setZoomScale: objc.instanceSelector("setZoomScale:animated:"),
    panGestureRecognizer: objc.instanceProperty(),
    pinchGestureRecognizer: objc.instanceProperty(),
    zoomScale: objc.instanceProperty({ set: function (v) { return this.setZoomScale(v, false); } }),
    maximumZoomScale: objc.instanceProperty(),
    minimumZoomScale: objc.instanceProperty(),
    zoomBouncing: objc.instanceProperty(),
    zooming: objc.instanceProperty(),
    bouncesZoom: objc.instanceProperty(),

    // Managing the Delegate
    delegate: objc.autoboxProperty(UIScrollViewDelegate)

});