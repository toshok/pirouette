// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("MKOverlay");
exports.MKOverlay = MKOverlay = objc.bindProtocol(foundation.Protocol,
  function MKOverlay () {
    return MKOverlay.__super__.constructor.apply(this, arguments);
  }, {

    // Describing the Overlay Geometry
    coordinate:          objc.optionalProperty("coordinate"),
    boundingMapRect:     objc.optionalProperty("boundingMapRect"),

    // Determining Map Intersections
    intersectsMapRect:   objc.optionalMethod("intersectsMapRect:")
});
