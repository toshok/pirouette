// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAccelerometerDelegate");

exports.UIAccelerometerDelegate = UIAccelerometerDelegate = objc.bindProtocol(foundation.Protocol,
  function UIAccelerometerDelegate () {
    return UIAccelerometerDelegate.__super__.constructor.apply(this, arguments);
  }, {

  didAccelerate:  objc.optionalMethod("accelerometer:didAccelerate:")  // Deprecated in iOS 5.0

});