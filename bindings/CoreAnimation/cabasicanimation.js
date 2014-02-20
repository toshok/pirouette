// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CABasicAnimation;
_exports.CABasicAnimation = CABasicAnimation = CAAnimation.extendClass("CABasicAnimation", () => ({

    // Interpolation Values
    fromValue: objc.instanceProperty(),
    toValue: objc.instanceProperty(),
    byValue: objc.instanceProperty()

}));
