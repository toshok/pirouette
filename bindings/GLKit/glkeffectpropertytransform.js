// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKEffectPropertyTransform = GLKEffectPropertyTransform = objc.bindClass(GLKEffectProperty,
  function GLKEffectPropertyTransform () {
    return GLKEffectPropertyTransform.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring Modelview Properties
    modelviewMatrix: objc.instanceProperty(),
    normalMatrix: objc.instanceProperty(),

    // Configuring the Projection Matrix
    projectionMatrix: objc.instanceProperty(),

    // Configuring the Transform Matrix
    transformMatrix: objc.instanceProperty()
});
