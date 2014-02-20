// This file is part of Pirouette.  for licensing information, see the LICENSE file

// XXX this likely shouldn't use extendClass, since that registers the type with objc.
// or maybe it doesn't matter?

//console.log "GLKCanvasView"
var GLKCanvasView;
_exports.GLKCanvasView = GLKCanvasView = GLKView.extendClass("GLKCanvasView", () => ({

    getContext: function (name, args) {
      if (name === "experimental-webgl" || name === "webgl") {
	if (!this.webglcontext) {
	  this.context = new gles.EAGLContext().initWithAPI(gles.EAGLRenderingAPI.OpenGLES2);
          this.webglcontext = objc_internal.allocateWebGLRenderingContext(this.context);
	}
	return this.webglcontext;
      }
      else {
	throw "GLKCanvasView only supports webgl rendering";
      }
    },

    width: objc.instanceProperty({ get: function() { return this.frame.width; },
				   set: null
				 }),

    height: objc.instanceProperty({ get: function() { return this.frame.height; },
				    set: null
				  })
}));
