// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIAcceleration");
var UIAcceleration;

_exports.UIAcceleration = UIAcceleration = foundation.NSObject.extendClass ("UIAcceleration", () => ({

  // Accessing the Acceleration Values
  x: objc.instanceProperty(),
  y: objc.instanceProperty(),
  z: objc.instanceProperty(),
  timestamp: objc.instanceProperty()

}));
