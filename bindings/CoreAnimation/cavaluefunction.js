// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CAValueFunction;
_exports.CAValueFunction = CAValueFunction = foundation.NSObject.extendClass("CAValueFunction", () => ({

    // Getting Value Function Properties
    name: objc.instanceProperty(),

    // Creating and Initializing Value Functions
    functionWithName: objc.staticSelector("functionWithName:")

}));
