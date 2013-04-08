// This file is part of coffeekit.  for licensing information, see the LICENSE file

let objc = require("objc"),
    foundation = require("foundation"),
    uikit = require("uikit"),
    gles = require("opengles");

objc.requireFramework("GLKit");

exports.GLKViewDrawableColorFormat = GLKViewDrawableColorFormat = objc.makeEnum({
   rgba8888 : 0,
   rgb565   : 1
});

exports.GLKViewDrawableDepthFormat = GLKViewDrawableDepthFormat = objc.makeEnum({
   depthNone : 0,
   depth16   : 1,
   depth24   : 2
});

exports.GLKViewDrawableStencilFormat = GLKViewDrawableStencilFormat = objc.makeEnum({
   stencilNone : 0,
   stencil8    : 1
});

exports.GLKViewDrawableMultisample = GLKViewDrawableMultisample = objc.makeEnum({
   multisampleNone : 0,
   multisample4X   : 1
});

exports.GLKVertexAttrib = GLKVertexAttrib = objc.makeEnum({
   position  : 0,
   normal    : 1,
   color     : 2,
   texCoord0 : 3,
   texCoord1 : 4
});
