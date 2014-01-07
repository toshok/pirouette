// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CARenderer;
exports.CARenderer = CARenderer = foundation.NSObject.extendClass("CARenderer", () => ({

    // Rendered Layer
    layer: objc.instanceProperty(),

    // Renderer Geometry
    bounds: objc.instanceProperty(),

    // Create a New Renderer
    rendererWithCGLContext: objc.staticSelector("rendererWithCGLContext:options:"),

    // Render a Frame
    beginFrameAtTime: objc.instanceSelector("beginFrameAtTime:timeStamp:"),

    updateBounds: objc.instanceSelector("updateBounds"),
    addUpdateRect: objc.instanceSelector("addUpdateRect:"),

    render: objc.instanceSelector("render"),
    nextFrameTime: objc.instanceSelector("nextFrameTime"),
    endFrame: objc.instanceSelector("endFrame")

}));
