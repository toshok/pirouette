// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIPageViewControllerDelegate");
var UIPageViewControllerDelegate;
_exports.UIPageViewControllerDelegate = UIPageViewControllerDelegate = foundation.Protocol.extendClass("UIPageViewControllerDelegate", () => ({

    // Responding to Page View Controller Events
    didFinishAnimating:                   objc.optionalMethod("pageViewController:didFinishAnimating:previousViewControllers:transitionCompleted:"),
    spineLocationForInterfaceOrientation: objc.optionalMethod("pageViewController:spineLocationForInterfaceOrientation:")

}));
