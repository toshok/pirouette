// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIReferenceLibraryViewController");
exports.UIReferenceLibraryViewController = UIReferenceLibraryViewController = objc.bindClass(UIViewController,
  function UIReferenceLibraryViewController () {
    return UIReferenceLibraryViewController.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Reference-Library View Controllers
    dictionaryHasDefinitionForTerm: objc.staticSelector("dictionaryHasDefinitionForTerm:"),
    initWithTerm:                    objc.instanceSelector("initWithTerm:")

});
