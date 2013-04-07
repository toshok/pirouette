// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIStoryboardPopoverSegue");
exports.UIStoryboardPopoverSegue = UIStoryboardPopoverSegue = objc.bindClass(UIStoryboardSegue,
  function UIStoryboardPopoverSegue () {
    return UIStoryboardPopoverSegue.__super__.constructor.apply(this, arguments);
  }, {

    // Accessing the Segue Attributes
    popoverController: objc.instanceProperty()

});
