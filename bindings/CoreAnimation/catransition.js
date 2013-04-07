// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CATransition = CATransition = objc.bindClass(foundation.NSObject,
  function CATransition () {
    return CATransition.__super__.constructor.apply(this, arguments);
  }, {

  // Transition Start and End Point
  startProgress: objc.instanceProperty(),
  endProgress: objc.instanceProperty(),

  // Transition Properties
  type: objc.instanceProperty(),
  subtype: objc.instanceProperty(),

  // Custom Transition Filter
  filter: objc.instanceProperty()

});
