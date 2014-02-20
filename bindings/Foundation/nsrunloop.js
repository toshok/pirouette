// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log("NSRunLoop");
var NSRunLoop;
_exports.NSRunLoop = NSRunLoop = NSObject.extendClass("NSRunLoop", () => ({

    // Accessing Run Loops and Modes
    currentRunLoop: objc.staticProperty ({ set: null }),
    currentMode: objc.instanceProperty ({ set: null }),
    limitDate: objc.instanceSelector("limitDateForMode:").
                             returns( function() { return objc.sig.Void; }).
			      params( function() { return [ objc.sig.NSString ]; }),
    mainRunLoop: objc.staticProperty ({ set: null }),
    getCFRunLoop: objc.instanceSelector("getCFRunLoop"),

    // Managing Timers
    addTimer: objc.instanceSelector("addTimer:forMode:"),

    // Managing Ports
    addPort: objc.instanceSelector("addPort:forMode:"),
    removePort: objc.instanceSelector("removePort:forMode:"),

    // Running a Loop
    run: objc.instanceSelector("run"),
    runMode: objc.instanceSelector("runMode:beforeDate:"),
    runUntilDate: objc.instanceSelector("runUntilDate:"),
    acceptInputForMode: objc.instanceSelector("acceptInputForMode:beforeDate:"),

    // Scheduling and Canceling Messages
    performSelector: objc.instanceSelector("performSelector:target:argument:order:modes:"),
    cancelPerformSelector: objc.instanceSelector("cancelPerformSelector:target:argument:"),
    cancelPerformSelectors: objc.instanceSelector("cancelPerformSelectorsWithTarget:")

}));
console.log ("<NSRunLoop");
