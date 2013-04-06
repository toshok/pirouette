// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKEffectPropertyMaterial = GLKEffectPropertyMaterial = objc.bindClass(GLKEffectProperty,
  function GLKEffectPropertyMaterial () {
    return GLKEffectPropertyMaterial.__super__.constructor.apply(this, arguments);
  }, {

    // Material Properties
    ambientColor: objc.instanceProperty(),
    diffuseColor: objc.instanceProperty(),
    emissiveColor: objc.instanceProperty(),
    shininess: objc.instanceProperty(),
    specularColor: objc.instanceProperty()

});
