// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CAEmitterLayer;
_exports.CAEmitterLayer = CAEmitterLayer = CALayer.extendClass("CAEmitterLayer", () => ({

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

}));
