// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAMediaTimingFunction = CAMediaTimingFunction = objc.bindClass(foundation.NSObject,
  function CAMediaTimingFunction () {
    return CAMediaTimingFunction.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Timing Functions
    functionWithName: objc.staticSelector("functionWithName:"),
    functionWithControlPoints: objc.staticSelector("functionWithControlPoints::::"),
    initWithControlPoints: objc.instanceSelector("initWithControlPoints::::").
                                 returns( () => CAMediaTimingFunction ).
				  params( () => [ ck.sig.Float, ck.sig.Float, ck.sig.Float, ck.sig.Float ] ),

    // Accessing the Control Points
    getControlPointAtIndex: objc.instanceSelector("getControlPointAtIndex:values:").
                                 returns( () => ck.sig.Void ).
                                  params( () => [ ck.sig.ULong, ck.sig.ArrayOf(ck.sig.Float) ] )

});
