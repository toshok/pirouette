// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAGradientLayer = CAGradientLayer = objc.bindClass(CALayer,
  function CAGradientLayer () {
    return CAGradientLayer.__super__.constructor.apply(this, arguments);
  }, {

    // Gradient Style Properties
    colors: objc.instanceProperty(),
    locations: objc.instanceProperty(),
    endPoint: objc.instanceProperty(),
    startPoint: objc.instanceProperty(),
    type: objc.instanceProperty()

});
