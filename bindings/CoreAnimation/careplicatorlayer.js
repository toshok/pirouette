// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAReplicationLayer = CAReplicationLayer = CALayer.extendClass("CAReplicationLayer", {

    // Setting Instance Display Properties
    instanceCount: objc.instanceProperty(),
    instanceDelay: objc.instanceProperty(),
    instanceTransform: objc.instanceProperty(),

    // Modifying Instance Layer Geometry
    preservesDepth: objc.instanceProperty(),

    // Accessing Instance Color Values
    instanceColor: objc.instanceProperty(),
    instanceRedOffset: objc.instanceProperty(),
    instanceGreenOffset: objc.instanceProperty(),
    instanceBlueOffset: objc.instanceProperty(),
    instanceAlphaOffset: objc.instanceProperty()

});
