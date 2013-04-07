// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISplitViewController");
exports.UISplitViewController = UISplitViewController = objc.bindClass(UIViewController,
  function UISplitViewController () {
    return UISplitViewController.__super__.constructor.apply(this, arguments);
  }, {

    // Managing the Child View Controllers
    viewControllers: objc.instanceProperty(),

    // Accessing the Delegate Object
    delegate: objc.autoboxProperty(UISplitViewController)

});
