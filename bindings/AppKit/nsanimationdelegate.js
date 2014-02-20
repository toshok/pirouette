// This file is part of Pirouette.  for licensing information, see the LICENSE file

let NSAnimationDelegate = exports.NSAnimationDelegate = foundation.Protocol.extendClass ("NSAnimationDelegate", {
  // Controlling and Monitoring an Animation
  animationDidEnd: objc.optionalMethod(),
  animationDidStop: objc.optionalMethod(),
  animationShouldStart: objc.optionalMethod(),
  valueForProgress: objc.optionalMethod(),

  // Managing Progress Marks
  reachedProgressMark: objc.optionalMethod()
});

console.log ("NSAnimationDelegate done, = " + NSAnimationDelegate._ck_register);
