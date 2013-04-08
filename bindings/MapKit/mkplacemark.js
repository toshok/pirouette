// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPlacemark = MKPlacemark = cl.CLPlacemark.extendClass ("MKPlacemark", {

    // Initializing a Placemark Object
    initWithCoordinate: objc.instanceSelector("initWithCoordinate:addressDictionary:"),

    // Accessing the Placemark Attributes
    countryCode: objc.instanceProperty()

});