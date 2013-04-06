// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKOverlayView = MKOverlayView = objc.bindClass(ui.UIView,
  function MKOverlayView () {
    return MKOverlayView.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing an Overlay View
    initWithOverlay: objc.instanceSelector("initWithOverlay:"),

    // Attributes of the Overlay
    overlay: objc.instanceSelector(),

    // Converting Points on the Map
    pointForMapPoint: objc.instanceSelector("pointForMapPoint:"),
    mapPointForPoint: objc.instanceSelector("mapPointForPoint:"),
    rectForMapRect: objc.instanceSelector("rectForMapRect:"),
    mapRectForRect: objc.instanceSelector("mapRectForRect:"),

    // Drawing the Overlay
    canDrawMapRect: objc.instanceSelector("canDrawMapRect:zoomScale:"),
    drawMapRect: objc.instanceSelector("drawMapRect:zoomScale:inContext:"),
    setNeedsDisplay: objc.instanceSelector("setNeedsDisplayInMapRect:"),
    setNeedsDisplayAtZoomScale: objc.instanceSelector("setNeedsDisplayInMapRect:zoomScale:")

});
