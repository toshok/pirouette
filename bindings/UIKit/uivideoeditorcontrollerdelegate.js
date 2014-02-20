// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIVideoEditorControllerDelegate");
var UIVideoEditorControllerDelegate;
_exports.UIVideoEditorControllerDelegate = UIVideoEditorControllerDelegate = foundation.Protocol.extendClass("UIVideoEditorControllerDelegate", () => ({

    // Closing the Video Editor
    didSaveEditedVideoToPath: objc.optionalMethod("videoEditorController:didSaveEditedVideoToPath:"),
    didCancel:                objc.optionalMethod("videoEditorControllerDidCancel:"),

    // Handling Errors
    didFailWithError:         objc.optionalMethod("videoEditorController:didFailWithError:")

}));
