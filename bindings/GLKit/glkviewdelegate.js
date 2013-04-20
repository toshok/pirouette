// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKViewDelegate = GLKViewDelegate = foundation.Protocol.extendClass("GLKViewDelegate", {

    // Drawing the View’s Contents
    drawInRect:  objc.requiredMethod("glkView:drawInRect:", {sig: "v@:@{CGRect={CGPoint=ff}{CGSize=ff}}" })

});
