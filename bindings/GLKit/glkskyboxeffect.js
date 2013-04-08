// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKSkyboxEffect = GLKSkyboxEffect = GLKBaseEffect.extendClass ("GLKSkyboxEffect", {

    // Naming the Effect
    label: objc.instanceProperty(),

    // Preparing the Effect for Rendering
    prepareToDraw: objc.instanceSelector("prepareToDraw"),

    // Drawing the Skybox
    draw: objc.instanceSelector("draw"),

    // Configuring the Skybox
    textureCubeMap: objc.instanceProperty(),
    center: objc.instanceProperty(),
    xSize: objc.instanceProperty(),
    ySize: objc.instanceProperty(),
    zSize: objc.instanceProperty(),

    // Setting the Skybox Transform
    transform: objc.instanceProperty()

});
