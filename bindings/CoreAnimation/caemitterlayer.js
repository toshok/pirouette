// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAEmitterLayer = CAEmitterLayer = objc.bindClass(CALayer,
  function CAEmitterLayer () {
    return CAEmitterLayer.__super__.constructor.apply(this, arguments);
  }, {

    // Specifying Particle Emitter Cells
    emitterCells: objc.instanceProperty(),

    // Emitter Geometry
    renderMode: objc.instanceProperty(),
    emitterPosition: objc.instanceProperty(),
    emitterShape: objc.instanceProperty(),
    emitterZPosition: objc.instanceProperty(),
    emitterDepth: objc.instanceProperty(),
    emitterSize: objc.instanceProperty(),

    // Emitter Cell Attribute Multipliers
    scale: objc.instanceProperty(),
    seed: objc.instanceProperty(),
    spin: objc.instanceProperty(),
    velocity: objc.instanceProperty(),
    birthRate: objc.instanceProperty(),
    emitterMode: objc.instanceProperty(),
    lifetime: objc.instanceProperty(),
    preservesDepth: objc.instanceProperty()

});
