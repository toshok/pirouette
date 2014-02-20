// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log("UIAccelerometer");
var UIAccelerometer;
_exports.UIAccelerometer = UIAccelerometer = foundation.NSObject.extendClass ("UIAccelerometer", () => ({

  // Getting the Shared Accelerometer Object
  sharedAccelerometer: objc.staticProperty(),

  // Accessing the Accelerometer Properties
  updateInterval: objc.instanceProperty(),
  delegate:       objc.autoboxProperty (UIAccelerometerDelegate)
}));
