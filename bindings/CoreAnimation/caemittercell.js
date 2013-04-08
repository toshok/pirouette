// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAEmitterCell = CAEmitterCell = objc.bindClass(foundation.NSObject,
  function CAEmitterCell () {
    return CAEmitterCell.__super__.constructor.apply(this, arguments);
  }, {

    // Creating and Initializing an Emitter Cell
    emitterCell: objc.staticSelector("emitterCell"),

    // Providing Emitter Cell Content
    contents: objc.instanceProperty(),
    contentsRect: objc.instanceProperty(),
    emitterCells: objc.instanceProperty(),

    // Setting Emitter Cell Visual Attributes
    enabled: objc.instanceProperty(),
    color: objc.instanceProperty(),
    redRange: objc.instanceProperty(),
    greenRange: objc.instanceProperty(),
    blueRange: objc.instanceProperty(),
    alphaRange: objc.instanceProperty(),
    redSpeed: objc.instanceProperty(),
    greenSpeed: objc.instanceProperty(),
    blueSpeed: objc.instanceProperty(),
    alphaSpeed: objc.instanceProperty(),
    magnificationFilter: objc.instanceProperty(),
    minificationFilter: objc.instanceProperty(),
    minificationFilterBias: objc.instanceProperty(),
    scale: objc.instanceProperty(),
    scaleRange: objc.instanceProperty(),
    name: objc.instanceProperty(),
    style: objc.instanceProperty(),

    // Emitter Cell Motion Attributes
    spin: objc.instanceProperty(),
    spinRange: objc.instanceProperty(),
    emissionLatitude: objc.instanceProperty(),
    emissionLongitude: objc.instanceProperty(),
    emissionRange: objc.instanceProperty(),

    // Emission Cell Temporal Attributes
    lifetime: objc.instanceProperty(),
    lifetimeRange: objc.instanceProperty(),
    birthRate: objc.instanceProperty(),
    scaleSpeed: objc.instanceProperty(),
    velocity: objc.instanceProperty(),
    velocityRange: objc.instanceProperty(),
    xAcceleration: objc.instanceProperty(),
    yAcceleration: objc.instanceProperty(),
    zAcceleration: objc.instanceProperty(),

    // Key-Value Coding Extensions
    defaultValueForKey: objc.staticSelector("defaultValueForKey:"),
    shouldArchiveValueForKey: objc.instanceSelector("shouldArchiveValueForKey:").
                                            returns( function() { return ck.sig.Bool; } ).
                                             params( function() { return [ ck.sig.NSString ]; } )

});