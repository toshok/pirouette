// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAccelerometer");
exports.UIAccelerometer = UIAccelerometer = objc.bindClass(foundation.NSObject,
  function UIAccelerometer () {
    return UIAccelerometer.__super__.constructor.apply(this, arguments);
  }, {

  // Getting the Shared Accelerometer Object
  sharedAccelerometer: objc.staticProperty(),

  // Accessing the Accelerometer Properties
  updateInterval: objc.instanceProperty(),
  delegate:       objc.autoboxProperty (UIAccelerometerDelegate)
});