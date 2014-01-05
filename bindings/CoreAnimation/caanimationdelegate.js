// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("CAAnimationDelegate");

var CAAnimationDelegate;
exports.CAAnimationDelegate = CAAnimationDelegate = foundation.Protocol.extendClass("CAAnimationDelegate", () => ({

    // Animation Progress
    animationDidStart: objc.optionalMethod("animationDidStart"),
    animationDidStop:  objc.optionalMethod("animationDidStop")

}));
