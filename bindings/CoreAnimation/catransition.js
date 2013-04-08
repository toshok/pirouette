// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CATransition = CATransition = foundation.NSObject.extendClass("CATransition", {

  // Transition Start and End Point
  startProgress: objc.instanceProperty(),
  endProgress: objc.instanceProperty(),

  // Transition Properties
  type: objc.instanceProperty(),
  subtype: objc.instanceProperty(),

  // Custom Transition Filter
  filter: objc.instanceProperty()

});
