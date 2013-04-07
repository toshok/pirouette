// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSAnimationContext = NSAnimationContext = objc.bindClass(foundation.NSObject,
  function NSAnimationContext () {
    return NSAnimationContext.__super__.constructor.apply(this, arguments);
  }, {

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

});
