// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSIndexPath = NSIndexPath = NSObject.extendClass("NSIndexPath", {

    // Creating Index Paths
    indexPathWithIndex: objc.staticSelector("indexPathWithIndex:"),
    indexPathWithIndexes: objc.staticSelector ("indexPathWithIndexes:length:"),
    initWithIndex: objc.instanceSelector("initWithIndex:")/*.
                                 returns( function() { return NSIndexPath; } ).
				  params( function() { return [ objc.sig.UInt ]; })*/,
    initWithIndexes: objc.instanceSelector("initWithIndexes:length:")/*.
                                   returns( function() { return NSIndexPath; } ),.
			           params( function() { return [ (objc.sig.PointerTo objc.sig.UInt), objc.sig.UInt ])*/,

    // Querying Index Paths
    indexAtPosition: objc.instanceSelector("indexAtPosition:").
                                   returns( function() { return objc.sig.UInt; } ).
				    params( function() { return [ objc.sig.UInt ]; } ),

    indexPathByAddingIndex: objc.instanceSelector("indexPathByAddingIndex:")/*.
                                          returns( function() { return NSIndexPath; } ).
					   params( function() { return [ objc.sig.UInt ]; })*/,
    indexPathByRemovingLastIndex: objc.instanceSelector("indexPathByRemovingLastIndex")/*.
                                                returns( function() { return NSIndexPath; } )*/,

    length: objc.instanceProperty({ set: null }),
    indexes: objc.instanceProperty({ set: null }),

    // Comparing Index Paths
    compare: objc.instanceSelector("compare:")/*.
                           returns( function() { return NSComparisonResult; } ).
			    params( function() { return [ NSIndexPath ]; } )*/

});
