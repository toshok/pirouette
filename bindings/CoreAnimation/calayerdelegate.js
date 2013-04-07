// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("CALayerDelegate");
exports.CALayerDelegate = CALayerDelegate = objc.bindProtocol(foundation.Protocol,
  function CALayerDelegate () {
    return CALayerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Providing Layer Content
    displayLayer:   objc.optionalMethod("displayLayer"),
    drawLayer:      objc.optionalMethod("drawLayer:inContext:"),

    // Actions
    actionForLayer: objc.optionalMethod("actionForLayer:forKey:")

});