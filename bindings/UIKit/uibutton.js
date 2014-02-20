// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log ("UIButton");
var UIButton;
_exports.UIButton = UIButton = UIControl.extendClass ("UIButton", () => ({

  // Creating Buttons
  buttonWithType:                     objc.staticSelector("buttonWithType:"),

  // Configuring Button Title
  titleLabel:                         objc.instanceProperty(),
  reversesTitleShadowWhenHighlighted: objc.instanceProperty(),
  setTitle:            		      objc.instanceSelector("setTitle:forState:"),
  getTitle:            		      objc.instanceSelector("titleForState:"),
  setTitleColor:       		      objc.instanceSelector("setTitleColor:forState:").makeUIAppearance(),
  getTitleColor:       		      objc.instanceSelector("titleColorForState:").makeUIAppearance(),
  setTitleShadowColor: 		      objc.instanceSelector("setTitleShadowColor:forState:"),
  getTitleShadowColor: 		      objc.instanceSelector("titleShadowColorForState:"),

  font:              objc.instanceProperty(), // Deprecated in iOS 3.0
  lineBreakMode:     objc.instanceProperty(), // Deprecated in iOS 3.0
  titleShadowOffset: objc.instanceProperty(), // Deprecated in iOS 3.0

  // Configuring Button Presentation
  adjustsImageWhenHighlighted: objc.instanceProperty(),
  adjustsImageWhenDisabled:    objc.instanceProperty(),
  showsTouchWhenHighlighted:   objc.instanceProperty(),

  setBackgroundImage:  objc.instanceSelector("setBackgroundImage:forState:"),
  getBbackgroundImage: objc.instanceSelector("backgroundImageForState:"),
  setImage:            objc.instanceSelector("setImage:forState:"),
  getImage:            objc.instanceSelector("imageForState:"),
  tintColor:           objc.instanceProperty().makeUIAppearance(),

  // Configuring Edge Insets
  contentEdgeInsets:   objc.instanceProperty(),
  titleEdgeInsets:     objc.instanceProperty(),
  imageEdgeInsets:     objc.instanceProperty(),

  // Getting the Current State
  buttonType:              objc.instanceProperty(),
  currentTitle:            objc.instanceProperty(),
  currentTitleColor:       objc.instanceProperty(),
  currentTitleShadowColor: objc.instanceProperty(),
  currentImage:            objc.instanceProperty(),
  currentBackgroundImage:  objc.instanceProperty(),
  imageView:               objc.instanceProperty(),

  // Getting Dimensions
  backgroundRectForBounds: objc.instanceSelector("backgroundRectForBounds:"),
  contentRectForBounds:    objc.instanceSelector("contentRectForBounds:"),
  titleRectForContentRect: objc.instanceSelector("titleRectForContentRect:"),
  imageRectForContentRect: objc.instanceSelector("imageRectForContentRect:"),

  clicked: objc.instanceProperty({
				 set: function (v) {
				   if (v) {
				     this.proxy = new UIControlProxy(v);
				     this.addTarget(this.proxy, this.proxy.proxyAction, UIControlEvent.TouchUpInside);
				   }
				   else {
				     this.proxy = null;
				   }
				 },
				 get: null // this should really be an actual getter that returns the callback...
  }),

  // handle accessors for normal state
  title: objc.instanceProperty({
      set: function (v) { this.setTitle(v, UIControlState.normal); },
      get: function () { return this.getTitle(UIControlState.normal); }
  })

}));
