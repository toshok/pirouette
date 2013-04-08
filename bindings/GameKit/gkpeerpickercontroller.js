// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GKPeerPickerController = GKPeerPickerController = foundation.NSObject.extendClass ("GKPeerPickerController", {

    // Setting and Getting the Delegate
    delegate: objc.autoboxProperty(GKPeerPickerControllerDelegate),

    // Displaying the Picker Dialog
    show: objc.instanceSelector("show"),
    dismiss: objc.instanceSelector("dismiss"),
    visible: objc.instanceProperty(),

    // Configuring Connectivity Options
    connectionTypesMask: objc.instanceProperty()

});
