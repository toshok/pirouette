// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CLGeocoder = CLGeocoder = objc.bindClass(foundation.NSObject,
  function CLGeocoder () {
    return CLGeocoder.__super__.constructor.apply(this, arguments);
  }, {

    // Reverse Geocoding a Location
    reverseGeocodeLocation: objc.instanceSelector("reverseGeocodeLocation:completionHandler:"),

    // Geocoding an Address
    geocodeAddressDictionary: objc.instanceSelector("geocodeAddressDictionary:completionHandler:"),
    geocodeAddressString: objc.instanceSelector("geocodeAddressString:completionHandler:"),
    geocodeAddressStringInRegion: objc.instanceSelector("geocodeAddressString:inRegion:completionHandler:"),

    // Managing Geocoding Requests
    cancelGeocode: objc.instanceSelector("cancelGeocode"),
    geocoding: objc.instanceProperty()

});
