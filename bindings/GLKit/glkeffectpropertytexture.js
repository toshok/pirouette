// This file is part of coffeekit.  for licensing information, see the LICENSE file

var GLKEffectPropertyTexture;
exports.GLKEffectPropertyTexture = GLKEffectPropertyTexture = GLKEffectProperty.extendClass ("GLKEffectPropertyTexture", () => ({

    // Configuring Texture Properties
    enabled: objc.instanceProperty(),
    envMode: objc.instanceProperty(),
    glName: objc.instanceProperty(),
    target: objc.instanceProperty()
}));
