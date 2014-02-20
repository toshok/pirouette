// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIVideoEditorController");
var UIVideoEditorController;
_exports.UIVideoEditorController = UIVideoEditorController = UINavigationController.extendClass ("UIVideoEditorController", () => ({

    // Determining Editing Availability
    canEditVideoAtPath: objc.staticSelector("canEditVideoAtPath:"),

    // Configuring the Editor
    delegate: objc.autoboxProperty(UIVideoEditorControllerDelegate),
    videoMaximumDuration: objc.instanceProperty(),
    videoPath: objc.instanceProperty(),
    videoQuality: objc.instanceProperty()

}));
