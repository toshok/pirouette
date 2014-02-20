// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GLKEffectPropertyMaterial;
_exports.GLKEffectPropertyMaterial = GLKEffectPropertyMaterial = GLKEffectProperty.extendClass ("GLKEffectPropertyMaterial", () => ({

    // Material Properties
    ambientColor: objc.instanceProperty(),
    diffuseColor: objc.instanceProperty(),
    emissiveColor: objc.instanceProperty(),
    shininess: objc.instanceProperty(),
    specularColor: objc.instanceProperty()

}));
