// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPolyline = MKPolyline = MKMultiPoint.extendClass ("MKPolyline", {

    // Creating a Polyline Overlay
    polylineWithPoints: objc.staticSelector("polylineWithPoints:count:"),
    polylineWithCoordinates: objc.staticSelector("polylineWithCoordinates:count:")

});