// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINavigationControllerDelegate");
exports.UINavigationControllerDelegate = UINavigationControllerDelegate = foundation.Protocol.extendClass("UINavigationControllerDelegate", {

    // Customizing Behavior
    willShowViewController: objc.optionalMethod("navigationController:willShowViewController:animated:"),
    didShowViewController:  objc.optionalMethod("navigationController:didShowViewController:animated:")

});