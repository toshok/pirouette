// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GLKEffectPropertyTexture;
_exports.GLKEffectPropertyTexture = GLKEffectPropertyTexture = GLKEffectProperty.extendClass ("GLKEffectPropertyTexture", () => ({

    // Configuring Texture Properties
    enabled: objc.instanceProperty(),
    envMode: objc.instanceProperty(),
    glName: objc.instanceProperty(),
    target: objc.instanceProperty()
}));
