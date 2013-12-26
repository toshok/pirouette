// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIAcceleration");
var UIAcceleration;

_exports.UIAcceleration = UIAcceleration = foundation.NSObject.extendClass ("UIAcceleration", () => { return {

  // Accessing the Acceleration Values
  x: objc.instanceProperty(),
  y: objc.instanceProperty(),
  z: objc.instanceProperty(),
  timestamp: objc.instanceProperty()
}; });
