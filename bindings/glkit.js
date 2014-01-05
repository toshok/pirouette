// This file is part of coffeekit.  for licensing information, see the LICENSE file

let objc = require("objc"),
    objc_internal = require("objc_internal"),
    foundation = require("foundation"),
    uikit = require("uikit"),
    gles = require("opengles");

objc.requireFramework("GLKit");

var GLKViewDrawableColorFormat;
exports.GLKViewDrawableColorFormat = GLKViewDrawableColorFormat = objc.makeEnum({
   rgba8888 : 0,
   rgb565   : 1
});

var GLKViewDrawableDepthFormat;
exports.GLKViewDrawableDepthFormat = GLKViewDrawableDepthFormat = objc.makeEnum({
   depthNone : 0,
   depth16   : 1,
   depth24   : 2
});

var GLKViewDrawableStencilFormat;
exports.GLKViewDrawableStencilFormat = GLKViewDrawableStencilFormat = objc.makeEnum({
   stencilNone : 0,
   stencil8    : 1
});

var GLKViewDrawableMultisample;
exports.GLKViewDrawableMultisample = GLKViewDrawableMultisample = objc.makeEnum({
   multisampleNone : 0,
   multisample4X   : 1
});

var GLKVertexAttrib;
exports.GLKVertexAttrib = GLKVertexAttrib = objc.makeEnum({
   position  : 0,
   normal    : 1,
   color     : 2,
   texCoord0 : 3,
   texCoord1 : 4
});
