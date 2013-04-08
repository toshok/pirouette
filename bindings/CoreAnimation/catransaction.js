// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CATransaction = CATransaction = foundation.NSObject.extendClass("CATransaction", {

    // Creating and Committing Transactions
    begin: objc.staticSelector("begin"),
    commit: objc.staticSelector("commit"),
    flush: objc.staticSelector("flush"),

    // Overriding Animation Duration and Timing
    animationDuration: objc.staticProperty(),
    animationTimingFunction: objc.staticProperty(),

    // Temporarily Disabling Property Animations
    disableAction: objc.staticProperty(),

    // Getting and Setting Completion Block Objects
    completionBlock: objc.staticProperty(),

    // Managing Concurrency
    lock: objc.staticSelector("lock"),
    unlock: objc.staticSelector("unlock"),

    // Getting and Setting Transaction Properties
    setValue: objc.staticSelector("setValue:forKey:"),
    valueForKey: objc.staticSelector("valueForKey:")

});
