// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("NSRunLoop");
exports.NSRunLoop = NSRunLoop = objc.bindClass(foundation.NSObject,
  function NSRunLoop () {
    return NSRunLoop.__super__.constructor.apply(this, arguments);
  }, {

    // Accessing Run Loops and Modes
    currentRunLoop: objc.staticProperty ({ set: null }),
    currentMode: objc.instanceProperty ({ set: null }),
    limitDate: objc.instanceSelector("limitDateForMode:").
                             returns( () => ck.sig.Void).
			      params( () => [ ck.sig.NSString ]),
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

});
