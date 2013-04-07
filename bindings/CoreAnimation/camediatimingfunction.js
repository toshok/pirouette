// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAMediaTimingFunction = CAMediaTimingFunction = objc.bindClass(foundation.NSObject,
  function CAMediaTimingFunction () {
    return CAMediaTimingFunction.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Timing Functions
    functionWithName: objc.staticSelector("functionWithName:"),
    functionWithControlPoints: objc.staticSelector("functionWithControlPoints::::"),
    initWithControlPoints: objc.instanceSelector("initWithControlPoints::::").
                                 returns( function() { return CAMediaTimingFunction; } ).
				  params( function() { return [ ck.sig.Float, ck.sig.Float, ck.sig.Float, ck.sig.Float ]; } ),

    // Accessing the Control Points
    getControlPointAtIndex: objc.instanceSelector("getControlPointAtIndex:values:").
                                 returns( function() { return ck.sig.Void; } ).
                                  params( function() { return [ ck.sig.ULong, ck.sig.ArrayOf(ck.sig.Float) ]; } )

});
