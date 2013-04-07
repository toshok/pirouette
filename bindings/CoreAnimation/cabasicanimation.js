// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CABasicAnimation = CABasicAnimation = objc.bindClass(CAAnimation,
  function CABasicAnimation () {
    return CABasicAnimation.__super__.constructor.apply(this, arguments);
  }, {

    // Interpolation Values
    fromValue: objc.instanceProperty(),
    toValue: objc.instanceProperty(),
    byValue: objc.instanceProperty()

});
