// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CAMediaTimingFunction;
exports.CAMediaTimingFunction = CAMediaTimingFunction = foundation.NSObject.extendClass("CAMediaTimingFunction", () => ({

    // Creating Timing Functions
    functionWithName: objc.staticSelector("functionWithName:"),
    functionWithControlPoints: objc.staticSelector("functionWithControlPoints::::"),
    initWithControlPoints: objc.instanceSelector("initWithControlPoints::::"),

    // Accessing the Control Points
    getControlPointAtIndex: objc.instanceSelector("getControlPointAtIndex:values:")

}));
