// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CAEAGLLayer;
exports.CAEAGLLayer = CAEAGLLayer = CALayer.extendClass("CAEAGLLayer", () => ({
    // Accessing the Layer Properties
    drawableProperties: objc.instanceProperty()
}));
