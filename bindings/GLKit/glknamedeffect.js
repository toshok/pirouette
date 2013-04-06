// This file is part of coffeekit.  for licensing information, see the LICENSE file

let Protocol = foundation.Protocol;

exports.GLKNamedEffect = GLKNamedEffect = objc.bindProtocol(Protocol,
  function GLKNamedEffect () {
    return GLKNamedEffect.__super__.constructor.apply(this, arguments);
  }, {

    // Binding the Shader Program
    prepareToDraw:  Protocol.requiredMethod("prepareToDraw")

});
