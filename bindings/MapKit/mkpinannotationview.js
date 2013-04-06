// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPinAnnotationView = MKPinAnnotationView = objc.bindClass(ui.UIView,
  function MKPinAnnotationView () {
    return MKPinAnnotationView.__super__.constructor.apply(this, arguments);
  }, {

    // Getting and Setting Attributes
    pinColor: objc.instanceProperty(),
    animatesDrop: objc.instanceProperty()

});
