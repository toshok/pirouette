// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAKeyFrameAnimation = CAKeyFrameAnimation = CAAnimation.extendClass("CAKeyFrameAnimation", {

    // Providing Keyframe Values
    path: objc.instanceProperty(),
    values: objc.instanceProperty(),

    // Keyframe Timing
    keyTimes: objc.instanceProperty(),
    timingFunctions: objc.instanceProperty(),
    calculationMode: objc.instanceProperty(),

    // Rotation Mode Attribute
    rotationMode: objc.instanceProperty(),

    // Cubic Mode Attributes
    tensionValues: objc.instanceProperty(),
    continuityValues: objc.instanceProperty(),
    biasValues: objc.instanceProperty()

});
