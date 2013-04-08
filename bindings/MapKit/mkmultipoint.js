// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKMultiPoint = MKMultiPoint = MKShape.extendClass ("MKMultiPoint", {

  // Accessing the Points in the Shape
  points: objc.instanceProperty(),
  pointCount: objc.instanceProperty(),

  // Getting Coordinate Values
  getCoordinates: objc.instanceSelector("getCoordinates:range:")

});
