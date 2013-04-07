// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIKeyInput");
exports.UIKeyInput = UIKeyInput = objc.bindProtocol(foundation.Protocol,
  function UIKeyInput () {
    return UIKeyInput.__super__.constructor.apply(this, arguments);
  }, {

    // XXX ES6-port
    // @mixinProtocol UITextInputTraits

    // Inserting and Deleting Text
    insertText:     objc.requiredMethod("insertText:"),
    deleteBackward: objc.requiredMethod("deleteBackward"),
    hasText:        objc.requiredMethod("hasText")

});