// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CAGradientLayer;
exports.CAGradientLayer = CAGradientLayer = CALayer.extendClass("CAGradientLayer", () => ({

    // Gradient Style Properties
    colors: objc.instanceProperty(),
    locations: objc.instanceProperty(),
    endPoint: objc.instanceProperty(),
    startPoint: objc.instanceProperty(),
    type: objc.instanceProperty()

}));
