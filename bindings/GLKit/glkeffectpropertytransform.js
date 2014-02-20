// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GLKEffectPropertyTransform;
_exports.GLKEffectPropertyTransform = GLKEffectPropertyTransform = GLKEffectProperty.extendClass ("GLKEffectPropertyTransform", () => ({

    // Configuring Modelview Properties
    modelviewMatrix: objc.instanceProperty(),
    normalMatrix: objc.instanceProperty(),

    // Configuring the Projection Matrix
    projectionMatrix: objc.instanceProperty(),

    // Configuring the Transform Matrix
    transformMatrix: objc.instanceProperty()
}));
