// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKBaseEffect = GLKBaseEffect = objc.bindClass(foundation.NSObject,
  function GLKBaseEffect () {
    return GLKBaseEffect.__super__.constructor.apply(this, arguments);
  }, {

    // XXX ES6-port
    // @mixinProtocol GLKNamedEffect

    // Naming the Effect
    label: objc.instanceProperty(),

    // Configuring the Modelview Transform
    transform: objc.instanceProperty(),

    // Configuring Lights
    lightingType: objc.instanceProperty(),
    lightModelTwoSided: objc.instanceProperty(),
    material: objc.instanceProperty(),
    lightModelAmbientColor: objc.instanceProperty(),
    light0: objc.instanceProperty(),
    light1: objc.instanceProperty(),
    light2: objc.instanceProperty(),

    // Configuring Textures
    texturingEnabled: objc.instanceProperty(),
    texture2d0: objc.instanceProperty(),
    texture2d1: objc.instanceProperty(),
    textureOrder: objc.instanceProperty(),

    // Configuring Fog
    fog: objc.instanceProperty(),

    // Configuring Color Information
    colorMaterialEnabled: objc.instanceProperty(),
    useConstantColor: objc.instanceProperty(),
    constantColor: objc.instanceProperty(),

    // Preparing the Effect for Drawing
    prepareToDraw: objc.instanceSelector()
});
