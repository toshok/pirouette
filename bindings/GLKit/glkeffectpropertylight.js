// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKEffectPropertyLight = GLKEffectPropertyLight = objc.bindClass(GLKEffectProperty,
  function GLKEffectPropertyLight () {
    return GLKEffectPropertyLight.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring Common Lighting Properties
    enabled: objc.instanceProperty(),
    position: objc.instanceProperty(),
    transform: objc.instanceProperty(),

    // Configuring Light Colors
    ambientColor: objc.instanceProperty(),
    diffuseColor: objc.instanceProperty(),
    specularColor: objc.instanceProperty(),

    // Configuring Lighting Attenuation
    constantAttenuation: objc.instanceProperty(),
    linearAttenuation: objc.instanceProperty(),
    quadraticAttenuation: objc.instanceProperty(),

    // Configuring Spotlight Properties
    spotCutoff: objc.instanceProperty(),
    spotDirection: objc.instanceProperty(),
    spotExponent: objc.instanceProperty()

});