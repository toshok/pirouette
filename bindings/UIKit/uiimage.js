// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIImage");
exports.UIImage = UIImage = objc.bindClass(foundation.NSObject,
  function UIImage () {
    return UIImage.__super__.constructor.apply(this, arguments);
  }, {

    // Cached Image Loading Routines
    imageNamed: objc.staticSelector("imageNamed:"),

    // Creating New Images
    imageWithContentsOfFile:          objc.staticSelector("imageWithContentsOfFile:"),
    imageWithData:                    objc.staticSelector("imageWithData:"),
    imageWithCGImage:                 objc.staticSelector("imageWithCGImage:"),
    imageWithCGImageScaleOrientation: objc.staticSelector("imageWithCGImage:scale:orientation:"),
    imageWithCIImage:                 objc.staticSelector("imageWithCIImage:"),
    animatedImageNamed:               objc.staticSelector("animatedImageNamed:duration:"),
    animatedImageWithImages:          objc.staticSelector("animatedImageWithImages:duration:"),
    animatedResizableImageNamed:      objc.staticSelector("animatedResizableImageNamed:capInsets:duration:"),
    resizableImage:                   objc.instanceSelector("resizableImageWithCapInsets:"),
    stretchableImage:                 objc.instanceSelector("stretchableImageWithLeftCapWidth:topCapHeight:"), // Deprecated in iOS 5.0

    // Initializing Images
    initWithContentsOfFile:          objc.instanceSelector("initWithContentsOfFile:"),
    initWithData:                    objc.instanceSelector("initWithData:"),
    initWithCGImage:                 objc.instanceSelector("initWithCGImage:"),
    initWithCGImageScaleOrientation: objc.instanceSelector("initWithCGImage:scale:orientation:"),
    initWithCIImage:                 objc.instanceSelector("initWithCIImage:"),

    // Image Attributes
    imageOrientation: objc.instanceProperty(),
    size: objc.instanceProperty(),
    scale: objc.instanceProperty(),
    CGImage: objc.instanceProperty(),
    CIImage: objc.instanceProperty(),
    images: objc.instanceProperty(),
    duration: objc.instanceProperty(),
    capInsets: objc.instanceProperty(),
    leftCapWidth: objc.instanceProperty(), // Deprecated in iOS 5.0
    topCapHeight: objc.instanceProperty(), // Deprecated in iOS 5.0

    // Drawing Images
    drawAtPoint:          objc.instanceSelector("drawAtPoint:"),
    drawAtPointWithBlend: objc.instanceSelector("drawAtPoint:blendMode:alpha:"),
    drawInRect:           objc.instanceSelector("drawInRect:"),
    drawInRectWithBlend:  objc.instanceSelector("drawInRect:blendMode:alpha:"),
    drawAsPatternInRect:  objc.instanceSelector("drawAsPatternInRect:")

});