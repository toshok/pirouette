// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log("UIAccelerometerDelegate");

var UIAccelerometerDelegate;
_exports.UIAccelerometerDelegate = UIAccelerometerDelegate = foundation.Protocol.extendClass("UIAccelerometerDelegate", () => ({

  didAccelerate:  objc.optionalMethod("accelerometer:didAccelerate:")  // Deprecated in iOS 5.0

}));
