// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKViewDelegate = GLKViewDelegate = objc.bindProtocol(foundation.Protocol,
  function GLKViewDelegate () {
    return GLKViewDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Drawing the View’s Contents
    drawInRect:  objc.requiredMethod("glkView:drawInRect:", {sig: "v@:@{CGRect={CGPoint=ff}{CGSize=ff}}" })

});
