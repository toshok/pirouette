// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAShapeLayer = CAShapeLayer = objc.bindClass(CALayer,
  function CAShapeLayer () {
    return CAShapeLayer.__super__.constructor.apply(this, arguments);
  }, {

    // Specifying the Shape Path
    path: objc.instanceProperty(),

    // Accessing Shape Style Properties
    fillColor: objc.instanceProperty(),
    fillRule: objc.instanceProperty(),
    lineCap: objc.instanceProperty(),
    lineDashPattern: objc.instanceProperty(),
    lineDashPhase: objc.instanceProperty(),
    lineJoin: objc.instanceProperty(),
    lineWidth: objc.instanceProperty(),
    miterLimit: objc.instanceProperty(),
    strokeColor: objc.instanceProperty(),
    strokeStart: objc.instanceProperty(),
    strokeEnd: objc.instanceProperty()

});
