// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIImageView");
var UIImageView;
_exports.UIImageView = UIImageView = UIView.extendClass ("UIImageView", () => ({

    // Initializing a UIImageView Object
    initWithImage:                    objc.instanceSelector("initWithImage:"),
    initWithImageAndHighlightedImage: objc.instanceSelector("initWithImage:highlightedImage:"),

    // Image Data
    image: objc.instanceProperty(),
    highlightedImage: objc.instanceProperty(),

    // Animating Images
    animationImages: objc.instanceProperty(),
    highlightedAnimationImages: objc.instanceProperty(),
    animationDuration: objc.instanceProperty(),
    animationRepeatCount: objc.instanceProperty(),
    startAnimating:   objc.instanceSelector("startAnimating"),
    stopAnimating:    objc.instanceSelector("stopAnimating"),
    isAnimating:      objc.instanceSelector("isAnimating"),

    // Setting and Getting Attributes
    userInteractionEnabled: objc.instanceProperty(),
    highlighted: objc.instanceProperty()

}));
