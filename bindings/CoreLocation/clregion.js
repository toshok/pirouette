// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CLRegion = CLRegion = foundation.NSObject.extendClass("CLRegion", {

    // Initializing a Circular Region
    initCircularRegion: objc.instanceSelector("initCircularRegionWithCenter:radius:identifier:"),

    // Accessing a Region’s Attributes
    identifier: objc.instanceProperty(),
    center: objc.instanceProperty(),
    radius: objc.instanceProperty(),

    // Hit-Testing in a Region
    containsCoordinate: objc.instanceSelector("containsCoordinate:")
});
