// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIImagePickerControllerDelegate");
var UIImagePickerControllerDelegate;
_exports.UIImagePickerControllerDelegate = UIImagePickerControllerDelegate = foundation.Protocol.extendClass("UIImagePickerControllerDelegate", () => { return {

    // Closing the Picker
    didFinishPickingMediaWithInfo: objc.optionalMethod("imagePickerController:didFinishPickingMediaWithInfo:"),
    didCancel:                     objc.optionalMethod("imagePickerControllerDidCancel:"),
    didFinishPickingImage:         objc.optionalMethod("imagePickerController:didFinishPickingImage:editingInfo:") // Deprecated in iOS 3.0

}; });
