// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIImagePickerControllerDelegate");
exports.UIImagePickerControllerDelegate = UIImagePickerControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function UIImagePickerControllerDelegate () {
    return UIImagePickerControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Closing the Picker
    didFinishPickingMediaWithInfo: objc.optionalMethod("imagePickerController:didFinishPickingMediaWithInfo:"),
    didCancel:                     objc.optionalMethod("imagePickerControllerDidCancel:"),
    didFinishPickingImage:         objc.optionalMethod("imagePickerController:didFinishPickingImage:editingInfo:") // Deprecated in iOS 3.0

});