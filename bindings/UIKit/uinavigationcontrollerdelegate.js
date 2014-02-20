// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UINavigationControllerDelegate");
var UINavigationControllerDelegate;
_exports.UINavigationControllerDelegate = UINavigationControllerDelegate = foundation.Protocol.extendClass("UINavigationControllerDelegate", () => ({

    // Customizing Behavior
    willShowViewController: objc.optionalMethod("navigationController:willShowViewController:animated:"),
    didShowViewController:  objc.optionalMethod("navigationController:didShowViewController:animated:")

}));
