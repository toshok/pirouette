// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSIndexPath = NSIndexPath = objc.bindClass(foundation.NSObject,
  function NSIndexPath () {
    return NSIndexPath.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Index Paths
    indexPathWithIndex: objc.staticSelector("indexPathWithIndex:"),
    indexPathWithIndexes: objc.staticSelector ("indexPathWithIndexes:length:"),
    initWithIndex: objc.instanceSelector("initWithIndex:").
                                 returns( () => NSIndexPath ).
				  params( () => [ ck.sig.UInt ]),
    initWithIndexes: objc.instanceSelector("initWithIndexes:length:").
                                   returns( () => NSIndexPath ),//.
				  //params( () => [ (ck.sig.PointerTo ck.sig.UInt), ck.sig.UInt ])

    // Querying Index Paths
    indexAtPosition: objc.instanceSelector("indexAtPosition:").
                                   returns( () => ck.sig.UInt ).
				    params( () => [ ck.sig.UInt ] ),

    indexPathByAddingIndex: objc.instanceSelector("indexPathByAddingIndex:").
                                          returns( () => NSIndexPath ).
					   params( () => [ ck.sig.UInt ]),
    indexPathByRemovingLastIndex: objc.instanceSelector("indexPathByRemovingLastIndex").
                                                returns( () => NSIndexPath ),

    length: objc.instanceProperty({ set: null }),
    indexes: objc.instanceProperty({ set: null }),

    // Comparing Index Paths
    compare: objc.instanceSelector("compare:").
                           returns( () => NSComparisonResult ).
			    params( () => [ NSIndexPath ] )

});
