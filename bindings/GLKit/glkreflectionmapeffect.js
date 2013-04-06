// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKReflectionMapEffect = GLKReflectionMapEffect = objc.bindClass(GLKBaseEffect,
  function GLKReflectionMapEffect () {
    return GLKReflectionMapEffect.__super__.constructor.apply(this, arguments);
  }, {

    // Preparing the Reflection Effect
    prepareToDraw: objc.instanceSelector("prepareToDraw"),

    // Effect Properties
    textureCubeMap: objc.instanceProperty(),
    matrix: objc.instanceProperty()

});
