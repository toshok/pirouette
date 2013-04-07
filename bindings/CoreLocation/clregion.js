// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CLRegion = CLRegion = objc.bindClass(foundation.NSObject,
  function CLRegion () {
    return CLRegion.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing a Circular Region
    initCircularRegion: objc.instanceSelector("initCircularRegionWithCenter:radius:identifier:"),

    // Accessing a Region’s Attributes
    identifier: objc.instanceProperty(),
    center: objc.instanceProperty(),
    radius: objc.instanceProperty(),

    // Hit-Testing in a Region
    containsCoordinate: objc.instanceSelector("containsCoordinate:")
});
