// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("CALayerDelegate");
var CALayerDelegate;
_exports.CALayerDelegate = CALayerDelegate = foundation.Protocol.extendClass("CALayerDelegate", () => ({

    // Providing Layer Content
    displayLayer:   objc.optionalMethod("displayLayer"),
    drawLayer:      objc.optionalMethod("drawLayer:inContext:"),

    // Actions
    actionForLayer: objc.optionalMethod("actionForLayer:forKey:")

}));
