// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKView = GLKView = objc.bindClass(uikit.UIView,
  function GLKView () {
    return GLKView.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing the View
    initWithFrameAndContext: objc.instanceSelector("initWithFrame:context:"),

    // Delegate
    delegate: objc.autoboxProperty(GLKViewDelegate),

    // Configuring the Framebuffer Object
    drawableColorFormat: objc.instanceProperty(),
    drawableDepthFormat: objc.instanceProperty(),
    drawableStencilFormat: objc.instanceProperty(),
    drawableMultisample: objc.instanceProperty(),

    // Read-only Framebuffer Properties
    drawableHeight: objc.instanceProperty(),
    drawableWidth: objc.instanceProperty(),

    // Drawing Your View’s Contents
    context: objc.instanceProperty(),
    bindDrawable: objc.instanceSelector("bindDrawable"),
    enableSetNeedsDisplay: objc.instanceProperty(),
    display: objc.instanceSelector("display"),
    snapshot: objc.instanceSelector("snapshot"),

    // Deleting the View’s Underlying Framebuffer Object
    deleteDrawable: objc.instanceSelector("deleteDrawable")

});
