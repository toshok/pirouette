// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CABasicAnimation = CABasicAnimation = CAAnimation.extendClass("CABasicAnimation", {

    // Interpolation Values
    fromValue: objc.instanceProperty(),
    toValue: objc.instanceProperty(),
    byValue: objc.instanceProperty()

});
