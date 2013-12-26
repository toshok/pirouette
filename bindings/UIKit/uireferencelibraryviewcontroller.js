// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIReferenceLibraryViewController");
var UIReferenceLibraryViewController;
_exports.UIReferenceLibraryViewController = UIReferenceLibraryViewController = UIViewController.extendClass ("UIReferenceLibraryViewController", () => { return {

    // Creating Reference-Library View Controllers
    dictionaryHasDefinitionForTerm: objc.staticSelector("dictionaryHasDefinitionForTerm:"),
    initWithTerm:                    objc.instanceSelector("initWithTerm:")

}; });
