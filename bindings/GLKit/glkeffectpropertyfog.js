// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKEffectPropertyFog = GLKEffectPropertyFog = GLKEffectProperty.extendClass ("GLKEffectPropertyFog", {
    // Enabling Fog
    enabled: objc.instanceProperty(),

    // Choosing the Fog Mode
    mode: objc.instanceProperty(),

    // Fog Properties
    color: objc.instanceProperty(),
    density: objc.instanceProperty(),
    start: objc.instanceProperty(),
    end: objc.instanceProperty()
});
