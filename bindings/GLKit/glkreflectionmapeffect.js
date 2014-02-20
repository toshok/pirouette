// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GLKReflectionMapEffect;
_exports.GLKReflectionMapEffect = GLKReflectionMapEffect = GLKBaseEffect.extendClass ("GLKReflectionMapEffect", () => ({

    // Preparing the Reflection Effect
    prepareToDraw: objc.instanceSelector("prepareToDraw"),

    // Effect Properties
    textureCubeMap: objc.instanceProperty(),
    matrix: objc.instanceProperty()

}));
