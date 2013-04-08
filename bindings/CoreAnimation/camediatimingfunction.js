// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAMediaTimingFunction = CAMediaTimingFunction = foundation.NSObject.extendClass("CAMediaTimingFunction", {

    // Creating Timing Functions
    functionWithName: objc.staticSelector("functionWithName:"),
    functionWithControlPoints: objc.staticSelector("functionWithControlPoints::::"),
    initWithControlPoints: objc.instanceSelector("initWithControlPoints::::").
                                 returns( function() { return CAMediaTimingFunction; } ).
				  params( function() { return [ objc.sig.Float, objc.sig.Float, objc.sig.Float, objc.sig.Float ]; } ),

    // Accessing the Control Points
    getControlPointAtIndex: objc.instanceSelector("getControlPointAtIndex:values:").
                                 returns( function() { return objc.sig.Void; } ).
                                  params( function() { return [ objc.sig.ULong, objc.sig.ArrayOf(objc.sig.Float) ]; } )

});
