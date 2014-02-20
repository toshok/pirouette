// This file is part of Pirouette.  for licensing information, see the LICENSE file
"use strict";

let objc = require("objc"),
    objc_internal = require("objc_internal"),
    foundation = require("foundation"),
    uikit = require("uikit"),
    gles = require("opengles");

objc.requireFramework("GLKit");

let _exports = exports;

let GLKViewDrawableColorFormat;
_exports.GLKViewDrawableColorFormat = GLKViewDrawableColorFormat = objc.makeEnum({
   rgba8888 : 0,
   rgb565   : 1
});

let GLKViewDrawableDepthFormat;
_exports.GLKViewDrawableDepthFormat = GLKViewDrawableDepthFormat = objc.makeEnum({
   depthNone : 0,
   depth16   : 1,
   depth24   : 2
});

let GLKViewDrawableStencilFormat;
_exports.GLKViewDrawableStencilFormat = GLKViewDrawableStencilFormat = objc.makeEnum({
   stencilNone : 0,
   stencil8    : 1
});

let GLKViewDrawableMultisample;
_exports.GLKViewDrawableMultisample = GLKViewDrawableMultisample = objc.makeEnum({
   multisampleNone : 0,
   multisample4X   : 1
});

let GLKVertexAttrib;
_exports.GLKVertexAttrib = GLKVertexAttrib = objc.makeEnum({
   position  : 0,
   normal    : 1,
   color     : 2,
   texCoord0 : 3,
   texCoord1 : 4
});
