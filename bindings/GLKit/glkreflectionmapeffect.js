// This file is part of coffeekit.  for licensing information, see the LICENSE file

var GLKReflectionMapEffect;
exports.GLKReflectionMapEffect = GLKReflectionMapEffect = GLKBaseEffect.extendClass ("GLKReflectionMapEffect", () => ({

    // Preparing the Reflection Effect
    prepareToDraw: objc.instanceSelector("prepareToDraw"),

    // Effect Properties
    textureCubeMap: objc.instanceProperty(),
    matrix: objc.instanceProperty()

}));
