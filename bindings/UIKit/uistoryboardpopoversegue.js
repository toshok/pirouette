// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIStoryboardPopoverSegue");
exports.UIStoryboardPopoverSegue = UIStoryboardPopoverSegue = UIStoryboardSegue.extendClass ("UIStoryboardPopoverSegue", {

    // Accessing the Segue Attributes
    popoverController: objc.instanceProperty()

});
