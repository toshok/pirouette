// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.EAGLContext = EAGLContext = objc.bindClass(foundation.NSObject,
  function EAGLContext () {
    return EAGLContext.__super__.constructor.apply(this, arguments);
  }, {

    // Creating EAGL Contexts
    initWithAPI: objc.instanceSelector("initWithAPI:"),
    initWithAPIAndSharegroup: objc.instanceSelector("initWithAPI:sharegroup:"),

    // Setting the Current EAGL Context
    setCurrentContext: objc.staticSelector("setCurrentContext:"),

    // Attaching Storage to a Renderbuffer
    renderbufferStorage: objc.instanceSelector("renderbufferStorage:fromDrawable:"),

    // Displaying a Renderbuffer
    presentRenderbuffer: objc.instanceSelector("presentRenderbuffer:"),

    // Getting EAGL Context Information
    API: objc.instanceProperty(),
    sharegroup: objc.instanceProperty(),
    currentContext: objc.staticSelector("currentContext")

});