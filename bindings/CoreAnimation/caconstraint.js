// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CAConstraint;
_exports.CAConstraint = CAConstraint = foundation.NSObject.extendClass("CAConstraint", () => ({

    // Create a New Constraint
    constraintWithAttributeAndScaleAndOffset: objc.staticSelector("constraintWithAttribute:relativeTo:attribute:scale:offset:"),
    constraintWithAttributeAndOffset:         objc.staticSelector("constraintWithAttribute:relativeTo:attribute:offset:"),
    constraintWithAttribute:                  objc.staticSelector("constraintWithAttribute:relativeTo:attribute:"),
    init:                                     objc.instanceSelector("initWithAttribute:relativeTo:attribute:scale:offset:"),

    // Accessing Constraint Values
    attribute:       objc.instanceProperty(),
    offset:          objc.instanceProperty(),
    scale:           objc.instanceProperty(),
    sourceAttribute: objc.instanceProperty(),
    sourceName:      objc.instanceProperty()

}));
