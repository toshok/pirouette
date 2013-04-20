// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIImagePickerControllerDelegate");
exports.UIImagePickerControllerDelegate = UIImagePickerControllerDelegate = foundation.Protocol.extendClass("UIImagePickerControllerDelegate", {

    // Closing the Picker
    didFinishPickingMediaWithInfo: objc.optionalMethod("imagePickerController:didFinishPickingMediaWithInfo:"),
    didCancel:                     objc.optionalMethod("imagePickerControllerDidCancel:"),
    didFinishPickingImage:         objc.optionalMethod("imagePickerController:didFinishPickingImage:editingInfo:") // Deprecated in iOS 3.0

});