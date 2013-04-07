// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPopoverController");
exports.UIPopoverController = UIPopoverController = objc.bindClass(foundation.NSObject,
  function UIPopoverController () {
    return UIPopoverController.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing the Popover
    initWithContentViewController: objc.instanceSelector("initWithContentViewController:"),

    // Configuring the Popover Attributes
    setContentViewController: objc.instanceSelector("setContentViewController:animated:"),
    setPopoverContentSize:    objc.instanceSelector("setPopoverContentSize:animated:"),
    contentViewController: objc.instanceProperty({ set: function(v) { return this.setContentViewController(v, false); } }),
    popoverContentSize: objc.instanceProperty({ set: function(v) { return this.setPopoverContentSize(v, false); } }),
    passthroughViews: objc.instanceProperty(),
    delegate: objc.autoboxProperty(UIPopoverControllerDelegate),

    // Getting the Popover Attributes
    popoverVisible: objc.instanceProperty(),
    popoverArrowDirection: objc.instanceProperty(),

    // Presenting and Dismissing the Popover
    presentPopoverFromRect:          objc.instanceSelector("presentPopoverFromRect:inView:permittedArrowDirections:animated:"),
    presentPopoverFromBarButtonItem: objc.instanceSelector("presentPopoverFromBarButtonItem:permittedArrowDirections:animated:"),
    dismissPopover:                  objc.instanceSelector("dismissPopoverAnimated:"),

    // Customizing the Popover Appearance
    popoverLayoutMargins: objc.instanceProperty(),
    popoverBackgroundViewClass: objc.instanceProperty()

});