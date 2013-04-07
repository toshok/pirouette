// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("CAAnimationDelegate");

exports.CAAnimationDelegate = CAAnimationDelegate = objc.bindProtocol(foundation.Protocol,
  function CAAnimationDelegate () {
    return CAAnimationDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Animation Progress
    animationDidStart: objc.optionalMethod("animationDidStart"),
    animationDidStop:  objc.optionalMethod("animationDidStop")

});
