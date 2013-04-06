// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPlacemark = MKPlacemark = objc.bindClass(cl.CLPlacemark,
  function MKPlacemark () {
    return MKPlacemark.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing a Placemark Object
    initWithCoordinate: objc.instanceSelector("initWithCoordinate:addressDictionary:"),

    // Accessing the Placemark Attributes
    countryCode: objc.instanceProperty()

});