// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAccelerometer");
exports.UIAccelerometer = UIAccelerometer = foundation.NSObject.extendClass ("UIAccelerometer", {

  // Getting the Shared Accelerometer Object
  sharedAccelerometer: objc.staticProperty(),

  // Accessing the Accelerometer Properties
  updateInterval: objc.instanceProperty(),
  delegate:       objc.autoboxProperty (UIAccelerometerDelegate)
});