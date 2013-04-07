// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAcceleration");
exports.UIAcceleration = UIAcceleration = objc.bindClass (foundation.NSObject,
  function UIAcceleration () {
    return UIAcceleration.__super__.constructor.apply(this, arguments);
  }, {

  // Accessing the Acceleration Values
  x: objc.instanceProperty(),
  y: objc.instanceProperty(),
  z: objc.instanceProperty(),
  timestamp: objc.instanceProperty()
});
