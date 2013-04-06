// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPolygon = MKPolygon = objc.bindClass(MKMultiPoint,
  function MKPolygon () {
    return MKPolygon.__super__.constructor.apply(this, arguments);
  }, {

    // Creating a Polygon Overlay
    polygonWithPoints: objc.staticSelector("polygonWithPoints:count:"),
    polygonWithPointsAndInteriorPolygons: objc.staticSelector("polygonWithPoints:count:interiorPolygons:"),
    polygonWithCoordinates: objc.staticSelector("polygonWithCoordinates:count:"),
    polygonWithCoordinatesAndinteriorPolygons: objc.staticSelector("polygonWithCoordinates:count:interiorPolygons:"),

    // Accessing the Interior Polygons
    interiorPolygons: objc.instanceProperty()

});
