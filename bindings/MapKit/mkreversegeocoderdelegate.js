// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("MKReverseGeocoderDelegate");
exports.MKReverseGeocoderDelegate = MKReverseGeocoderDelegate = objc.bindProtocol(foundation.Protocol,
  function MKReverseGeocoderDelegate () {
    return MKReverseGeocoderDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Processing Placemark Searches
    didFail:            objc.optionalMethod("reverseGeocoder:didFailWithError:"), // Deprecated in iOS 5.0
    didFindPlacemark:   objc.optionalMethod("reverseGeocoder:didFindPlacemark:") // Deprecated in iOS 5.0

});