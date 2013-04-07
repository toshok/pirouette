// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIVideoEditorControllerDelegate");
exports.UIVideoEditorControllerDelegate = UIVideoEditorControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function UIVideoEditorControllerDelegate () {
    return UIVideoEditorControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Closing the Video Editor
    didSaveEditedVideoToPath: objc.optionalMethod("videoEditorController:didSaveEditedVideoToPath:"),
    didCancel:                objc.optionalMethod("videoEditorControllerDidCancel:"),

    // Handling Errors
    didFailWithError:         objc.optionalMethod("videoEditorController:didFailWithError:")

});