// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log "UITextInputStringTokenizer"
exports.UITextInputStringTokenizer = UITextInputStringTokenizer = objc.bindClass(foundation.NSObject,
  function UITextInputStringTokenizer () {
    return UITextInputStringTokenizer.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing a Tokenizer
    initWithTextInput: objc.instanceSelector("initWithTextInput:")

});
