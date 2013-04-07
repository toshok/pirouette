// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAValueFunction = CAValueFunction = objc.bindClass(foundation.NSObject,
  function CAValueFunction () {
    return CAValueFunction.__super__.constructor.apply(this, arguments);
  }, {

    // Getting Value Function Properties
    name: objc.instanceProperty(),

    // Creating and Initializing Value Functions
    functionWithName: objc.staticSelector("functionWithName:")

});