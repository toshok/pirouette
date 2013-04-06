// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKUserLocation = MKUserLocation = objc.bindClass(foundation.NSObject,
  function MKUserLocation () {
    return MKUserLocation.__super__.constructor.apply(this, arguments);
  }, {

    // Determining the User’s Position
    location: objc.instanceProperty(),
    updating: objc.instanceProperty(),
    heading: objc.instanceProperty(),

    // Accessing the User Annotation Text
    title: objc.instanceProperty(),
    subtitle: objc.instanceProperty()

});