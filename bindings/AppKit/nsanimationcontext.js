// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSAnimationContext;
_exports.NSAnimationContext = NSAnimationContext = foundation.NSObject.extendClass("NSAnimationContext", () => ({
    // Grouping Transactions
    beginGrouping: objc.instanceSelector("beginGrouping"),
    endGrouping: objc.instanceSelector("endGrouping"),

    // Getting the Current Animation Context
    currentContext: objc.instanceSelector("currentContext"),

    // Animation Completion Handlers
    setCompletionHandler: objc.instanceSelector("setCompletionHandler:"),
    completionHandler: objc.instanceSelector("completionHandler"),
    runAnimationGroup: objc.instanceSelector("runAnimationGroup:completionHandler:"),

    // Modifying the Animation Duration
    duration: objc.instanceProperty(),
    timingFunction: objc.instanceProperty()

}));
