// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAValueFunction = CAValueFunction = foundation.NSObject.extendClass("CAValueFunction", {

    // Getting Value Function Properties
    name: objc.instanceProperty(),

    // Creating and Initializing Value Functions
    functionWithName: objc.staticSelector("functionWithName:")

});