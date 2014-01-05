// This file is part of coffeekit.  for licensing information, see the LICENSE file

var GLKEffectPropertyMaterial;
exports.GLKEffectPropertyMaterial = GLKEffectPropertyMaterial = GLKEffectProperty.extendClass ("GLKEffectPropertyMaterial", () => ({

    // Material Properties
    ambientColor: objc.instanceProperty(),
    diffuseColor: objc.instanceProperty(),
    emissiveColor: objc.instanceProperty(),
    shininess: objc.instanceProperty(),
    specularColor: objc.instanceProperty()

}));
