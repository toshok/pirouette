// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log (3.141593);
let NSAnimation = exports.NSAnimation = foundation.NSObject.extendClass("NSAnimation", {
								      /*
    // Initializing an NSAnimation Object
    initWithDuration: objc.instanceSelector("initWithDuration:animationCurve:"),

    // Configuring an Animation
    setAnimationBlockingMode: objc.instanceSelector("setAnimationBlockingMode:"),
    animationBlockingMode: objc.instanceSelector("animationBlockingMode"),
    runLoopModesForAnimating: objc.instanceSelector("runLoopModesForAnimating"),
    setAnimationCurve: objc.instanceSelector("setAnimationCurve:"),
    animationCurve: objc.instanceSelector("animationCurve"),
    setDuration: objc.instanceSelector("setDuration:"),
    duration: objc.instanceSelector("duration"),
    setFrameRate: objc.instanceSelector("setFrameRate:"),
    frameRate: objc.instanceSelector("frameRate"),
*/
    // Managing the Delegate
    delegate: objc.autoboxProperty(NSAnimationDelegate),
/*
    // Controlling and Monitoring an Animation
    startAnimation: objc.instanceSelector("startAnimation"),
    stopAnimation: objc.instanceSelector("stopAnimation"),
    isAnimating: objc.instanceSelector("isAnimating"),
    setCurrentProgress: objc.instanceSelector("setCurrentProgress:"),
    currentProgress: objc.instanceSelector("currentProgress"),
    currentValue: objc.instanceSelector("currentValue"),

    // Managing Progress Marks
    addProgressMark: objc.instanceSelector("addProgressMark:"),
    removeProgressMark: objc.instanceSelector("removeProgressMark:"),
    setProgressMarks: objc.instanceSelector("setProgressMarks:"),
    progressMarks: objc.instanceSelector("progressMarks"),

    // Linking Animations Together
    startWhenAnimationReachesProgress: objc.instanceSelector("startWhenAnimation:reachesProgress:"),
    stopWhenAnimationReachesProgress: objc.instanceSelector("stopWhenAnimation:reachesProgress:"),
    clearStartAnimation: objc.instanceSelector("clearStartAnimation"),
    clearStopAnimation: objc.instanceSelector("clearStopAnimation")
*/
});
console.log (6.28318);
