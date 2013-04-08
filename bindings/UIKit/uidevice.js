// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIDevice");
exports.UIDevice = UIDevice = foundation.NSObject.extendClass ("UIDevice", {

    // Getting the Shared Device Instance
    currentDevice:                                objc.staticProperty({ set: null }),

    // Determining the Available Features
    multitaskingSupported:                              objc.instanceProperty(),

    // Identifying the Device and Operating System
    name:                              objc.instanceProperty(),
    systemName:                              objc.instanceProperty(),
    systemVersion:                              objc.instanceProperty(),
    model:                              objc.instanceProperty(),
    localizedModel:                              objc.instanceProperty(),
    userInterfaceIdiom:                              objc.instanceProperty(),
    uniqueIdentifier:                              objc.instanceProperty(), // Deprecated in iOS 5.0

    // Getting the Device Orientation
    orientation:                              objc.instanceProperty(),
    generatesDeviceOrientationNotifications:                              objc.instanceProperty(),
    beginGeneratingDeviceOrientationNotifications: objc.instanceSelector("beginGeneratingDeviceOrientationNotifications"),
    endGeneratingDeviceOrientationNotifications:   objc.instanceSelector("endGeneratingDeviceOrientationNotifications"),

    // Getting the Device Battery State
    batteryLevel:                              objc.instanceProperty(),
    batteryMonitoringEnabled:                              objc.instanceProperty(),
    batteryState:                              objc.instanceProperty(),

    // Using the Proximity Sensor
    proximityMonitoringEnabled:                              objc.instanceProperty(),
    proximityState:                              objc.instanceProperty(),

    // Playing Input Clicks
    playInputClick:                                objc.instanceSelector("playInputClick")

});
