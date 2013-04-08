// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CLHeading = CLHeading = foundation.NSObject.extendClass("CLHeading", {

    // Accessing the Heading Attributes
    magneticHeading: objc.instanceProperty(),
    trueHeading: objc.instanceProperty(),
    headingAccuracy: objc.instanceProperty(),
    timestamp: objc.instanceProperty(),
    description: objc.instanceSelector("description"),

    // Accessing the Raw Heading Data
    x: objc.instanceProperty(),
    y: objc.instanceProperty(),
    z: objc.instanceProperty()

});
