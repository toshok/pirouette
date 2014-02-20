// This file is part of Pirouette.  for licensing information, see the LICENSE file
"use strict";

let objc = require('objc'),
    foundation = require('foundation');

objc.requireFramework("OpenGLES");

let _exports = exports;

let EAGLRenderingAPI;
_exports.EAGLRenderingAPI = EAGLRenderingAPI = objc.makeEnum({
   OpenGLES1         : 1,
   OpenGLES2         : 2
});
