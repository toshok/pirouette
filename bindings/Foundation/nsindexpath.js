// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSIndexPath = NSIndexPath = objc.bindClass(foundation.NSObject,
  function NSIndexPath () {
    return NSIndexPath.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Index Paths
    indexPathWithIndex: objc.staticSelector("indexPathWithIndex:"),
    indexPathWithIndexes: objc.staticSelector ("indexPathWithIndexes:length:"),
    initWithIndex: objc.instanceSelector("initWithIndex:").
                                 returns( function() { return NSIndexPath; } ).
				  params( function() { return [ ck.sig.UInt ]; }),
    initWithIndexes: objc.instanceSelector("initWithIndexes:length:").
                                   returns( function() { return NSIndexPath; } ),//.
				  //params( function() { return [ (ck.sig.PointerTo ck.sig.UInt), ck.sig.UInt ])

    // Querying Index Paths
    indexAtPosition: objc.instanceSelector("indexAtPosition:").
                                   returns( function() { return ck.sig.UInt; } ).
				    params( function() { return [ ck.sig.UInt ]; } ),

    indexPathByAddingIndex: objc.instanceSelector("indexPathByAddingIndex:").
                                          returns( function() { return NSIndexPath; } ).
					   params( function() { return [ ck.sig.UInt ]; }),
    indexPathByRemovingLastIndex: objc.instanceSelector("indexPathByRemovingLastIndex").
                                                returns( function() { return NSIndexPath; } ),

    length: objc.instanceProperty({ set: null }),
    indexes: objc.instanceProperty({ set: null }),

    // Comparing Index Paths
    compare: objc.instanceSelector("compare:").
                           returns( function() { return NSComparisonResult; } ).
			    params( function() { return [ NSIndexPath ]; } )

});
