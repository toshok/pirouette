// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAReplicationLayer = CAReplicationLayer = objc.bindClass(CALayer,
  function CAReplicationLayer () {
    return CAReplicationLayer.__super__.constructor.apply(this, arguments);
  }, {

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
