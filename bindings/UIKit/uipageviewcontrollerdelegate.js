// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPageViewControllerDelegate");
exports.UIPageViewControllerDelegate = UIPageViewControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function UIPageViewControllerDelegate () {
    return UIPageViewControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Responding to Page View Controller Events
    didFinishAnimating:                   objc.optionalMethod("pageViewController:didFinishAnimating:previousViewControllers:transitionCompleted:"),
    spineLocationForInterfaceOrientation: objc.optionalMethod("pageViewController:spineLocationForInterfaceOrientation:")

});