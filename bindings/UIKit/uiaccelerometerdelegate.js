// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAccelerometerDelegate");

exports.UIAccelerometerDelegate = UIAccelerometerDelegate = foundation.Protocol.extendClass("UIAccelerometerDelegate", {

  didAccelerate:  objc.optionalMethod("accelerometer:didAccelerate:")  // Deprecated in iOS 5.0

});