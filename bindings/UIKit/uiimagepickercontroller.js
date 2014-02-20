// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIImagePickerController");
var UIImagePickerController;
_exports.UIImagePickerController = UIImagePickerController = UINavigationController.extendClass ("UIImagePickerController", () => ({

    // Setting the Picker Source
    availableMediaTypes:   objc.staticSelector("availableMediaTypesForSourceType:"),
    isSourceTypeAvailable: objc.staticSelector("isSourceTypeAvailable:"),
    sourceType: objc.instanceProperty(),

    // Configuring the Picker
    allowsEditing: objc.instanceProperty(),
    delegate: objc.autoboxProperty(UIImagePickerControllerDelegate),
    mediaTypes: objc.instanceProperty(),
    allowsImageEditing: objc.instanceProperty(), // Deprecated in iOS 3.1

    // Configuring the Video Capture Options
    videoQuality: objc.instanceProperty(),
    videoMaximumDuration: objc.instanceProperty(),

    // Customizing the Camera Controls
    showsCameraControls: objc.instanceProperty(),
    cameraOverlayView: objc.instanceProperty(),
    cameraViewTransform: objc.instanceProperty(),

    // Capturing Still Images or Movies
    takePicture:       objc.instanceSelector("takePicture"),
    startVideoCapture: objc.instanceSelector("startVideoCapture"),
    stopVideoCapture:  objc.instanceSelector("stopVideoCapture"),

    // Configuring the Camera
    cameraDevice: objc.instanceProperty(),
    cameraCaptureMode: objc.instanceProperty(),
    cameraFlashMode: objc.instanceProperty(),
    isCameraDeviceAvailable:              objc.staticSelector("isCameraDeviceAvailable:"),
    availableCaptureModesForCameraDevice: objc.staticSelector("availableCaptureModesForCameraDevice:"),
    isFlashAvailableForCameraDevice:      objc.staticSelector("isFlashAvailableForCameraDevice:")

}));
