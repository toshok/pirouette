// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPolyline = MKPolyline = objc.bindClass(MKMultiPoint,
  function MKPolyline () {
    return MKPolyline.__super__.constructor.apply(this, arguments);
  }, {

    // Creating a Polyline Overlay
    polylineWithPoints: objc.staticSelector("polylineWithPoints:count:"),
    polylineWithCoordinates: objc.staticSelector("polylineWithCoordinates:count:")

});