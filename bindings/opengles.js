// This file is part of coffeekit.  for licensing information, see the LICENSE file

let objc = require('objc'),
    foundation = require('foundation');

objc.requireFramework("OpenGLES");

exports.EAGLRenderingAPI = EAGLRenderingAPI = objc.makeEnum({
   OpenGLES1         : 1,
   OpenGLES2         : 2
});
