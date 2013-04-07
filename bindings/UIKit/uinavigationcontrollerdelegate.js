// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINavigationControllerDelegate");
exports.UINavigationControllerDelegate = UINavigationControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function UINavigationControllerDelegate () {
    return UINavigationControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Customizing Behavior
    willShowViewController: objc.optionalMethod("navigationController:willShowViewController:animated:"),
    didShowViewController:  objc.optionalMethod("navigationController:didShowViewController:animated:")

});