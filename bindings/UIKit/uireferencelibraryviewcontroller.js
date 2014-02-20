// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIReferenceLibraryViewController");
var UIReferenceLibraryViewController;
_exports.UIReferenceLibraryViewController = UIReferenceLibraryViewController = UIViewController.extendClass ("UIReferenceLibraryViewController", () => ({

    // Creating Reference-Library View Controllers
    dictionaryHasDefinitionForTerm: objc.staticSelector("dictionaryHasDefinitionForTerm:"),
    initWithTerm:                    objc.instanceSelector("initWithTerm:")

}));
