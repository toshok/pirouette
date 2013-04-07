// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAEAGLLayer = CAEAGLLayer = objc.bindClass(CALayer,
  function CAEAGLLayer () {
    return CAEAGLLayer.__super__.constructor.apply(this, arguments);
  }, {
    // Accessing the Layer Properties
    drawableProperties: objc.instanceProperty()
});
