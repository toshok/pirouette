// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKEffectPropertyTexture = GLKEffectPropertyTexture = objc.bindClass(GLKEffectProperty,
  function GLKEffectPropertyTexture () {
    return GLKEffectPropertyTexture.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring Texture Properties
    enabled: objc.instanceProperty(),
    envMode: objc.instanceProperty(),
    glName: objc.instanceProperty(),
    target: objc.instanceProperty()
});
