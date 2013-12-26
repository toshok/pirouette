// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITextRange");
var UITextRange;
_exports.UITextRange = UITextRange = foundation.NSObject.extendClass ("UITextRange", () => { return {

    // Defining Ranges of Text
    start: objc.instanceProperty(),
    end: objc.instanceProperty(),
    empty: objc.instanceProperty()

}; });
