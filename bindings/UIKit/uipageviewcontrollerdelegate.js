// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPageViewControllerDelegate");
exports.UIPageViewControllerDelegate = UIPageViewControllerDelegate = foundation.Protocol.extendClass("UIPageViewControllerDelegate", {

    // Responding to Page View Controller Events
    didFinishAnimating:                   objc.optionalMethod("pageViewController:didFinishAnimating:previousViewControllers:transitionCompleted:"),
    spineLocationForInterfaceOrientation: objc.optionalMethod("pageViewController:spineLocationForInterfaceOrientation:")

});