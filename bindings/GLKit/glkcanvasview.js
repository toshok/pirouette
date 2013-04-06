// This file is part of coffeekit.  for licensing information, see the LICENSE file

// XXX this likely shouldn't use bindClass, since that registers the type with objc.
// or maybe it doesn't matter?

//console.log "GLKCanvasView"
exports.GLKCanvasView = GLKCanvasView = objc.bindClass(GLKView,
  function GLKCanvasView () {
    return GLKCanvasView.__super__.constructor.apply(this, arguments);
  }, {

    getContext: (name, args) => {
      if (name === "experimental-webgl" || name === "webgl") {
	if (!this.webglcontext) {
	  this.context = new gles.EAGLContext().initWithAPI(gles.EAGLRenderingAPI.OpenGLES2);
          this.webglcontext = objc.allocateWebGLRenderingContext(this.context);
	}
	return this.webglcontext;
      }
      else {
	throw "GLKCanvasView only supports webgl rendering";
      }
    },

    width: objc.instanceProperty({ get: () => this.frame.width,
				   set: null
				 }),

    height: objc.instanceProperty({ get: () => this.frame.height,
				    set: null
				  })
});
