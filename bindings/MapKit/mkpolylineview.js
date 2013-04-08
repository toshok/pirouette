// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPolylineView = MKPolylineView = MKOverlayPathView.extendClass ("MKPolylineView", {

    // MethodGroup
    initWithPolyline: objc.instanceSelector("initWithPolyline:"),
    polyline: objc.instanceProperty()

});
