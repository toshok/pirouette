// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CAGradientLayer;
_exports.CAGradientLayer = CAGradientLayer = CALayer.extendClass("CAGradientLayer", () => ({

    // Gradient Style Properties
    colors: objc.instanceProperty(),
    locations: objc.instanceProperty(),
    endPoint: objc.instanceProperty(),
    startPoint: objc.instanceProperty(),
    type: objc.instanceProperty()

}));
