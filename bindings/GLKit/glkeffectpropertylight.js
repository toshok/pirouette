// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GLKEffectPropertyLight;
_exports.GLKEffectPropertyLight = GLKEffectPropertyLight = GLKEffectProperty.extendClass ("GLKEffectPropertyLight", () => ({

    // Configuring Common Lighting Properties
    enabled: objc.instanceProperty(),
    position: objc.instanceProperty(),
    transform: objc.instanceProperty(),

    // Configuring Light Colors
    ambientColor: objc.instanceProperty(),
    diffuseColor: objc.instanceProperty(),
    specularColor: objc.instanceProperty(),

    // Configuring Lighting Attenuation
    constantAttenuation: objc.instanceProperty(),
    linearAttenuation: objc.instanceProperty(),
    quadraticAttenuation: objc.instanceProperty(),

    // Configuring Spotlight Properties
    spotCutoff: objc.instanceProperty(),
    spotDirection: objc.instanceProperty(),
    spotExponent: objc.instanceProperty()

}));
