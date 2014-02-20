// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CAShapeLayer;
_exports.CAShapeLayer = CAShapeLayer = CALayer.extendClass("CAShapeLayer", () => ({

    // Specifying the Shape Path
    path: objc.instanceProperty(),

    // Accessing Shape Style Properties
    fillColor: objc.instanceProperty(),
    fillRule: objc.instanceProperty(),
    lineCap: objc.instanceProperty(),
    lineDashPattern: objc.instanceProperty(),
    lineDashPhase: objc.instanceProperty(),
    lineJoin: objc.instanceProperty(),
    lineWidth: objc.instanceProperty(),
    miterLimit: objc.instanceProperty(),
    strokeColor: objc.instanceProperty(),
    strokeStart: objc.instanceProperty(),
    strokeEnd: objc.instanceProperty()

}));
