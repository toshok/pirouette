// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPointAnnotation = MKPointAnnotation = objc.bindClass(MKShape,
  function MKPointAnnotation () {
    return MKPointAnnotation.__super__.constructor.apply(this, arguments);
  }, {

    // Accessing the Annotation’s Location
    coordinate: objc.instanceProperty()

});