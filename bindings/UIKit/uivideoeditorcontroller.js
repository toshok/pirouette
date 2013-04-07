// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIVideoEditorController");
exports.UIVideoEditorController = UIVideoEditorController = objc.bindClass(UINavigationController,
  function UIVideoEditorController () {
    return UIVideoEditorController.__super__.constructor.apply(this, arguments);
  }, {

    // Determining Editing Availability
    canEditVideoAtPath: objc.staticSelector("canEditVideoAtPath:"),

    // Configuring the Editor
    delegate: objc.autoboxProperty(UIVideoEditorControllerDelegate),
    videoMaximumDuration: objc.instanceProperty(),
    videoPath: objc.instanceProperty(),
    videoQuality: objc.instanceProperty()

});