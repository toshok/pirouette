// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITextRange");
exports.UITextRange = UITextRange = objc.bindClass(foundation.NSObject,
  function UITextRange () {
    return UITextRange.__super__.constructor.apply(this, arguments);
  }, {

    // Defining Ranges of Text
    start: objc.instanceProperty(),
    end: objc.instanceProperty(),
    empty: objc.instanceProperty()

});