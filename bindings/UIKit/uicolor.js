// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIColor");
var UIColor;
_exports.UIColor = UIColor = foundation.NSObject.extendClass ("UIColor", () => { return {

    // Creating a UIColor Object from Component Values
    colorWithWhite:          objc.staticSelector("colorWithWhite:alpha:"),
    colorWithHSBA:           objc.staticSelector("colorWithHue:saturation:brightness:alpha:"),
    colorWithRGBA:           objc.staticSelector("colorWithRed:green:blue:alpha:"),
    colorWithCGColor:        objc.staticSelector("colorWithCGColor:"),
    colorWithPatternImage:   objc.staticSelector("colorWithPatternImage:"),
    colorWithCIColor:        objc.staticSelector("colorWithCIColor:"),
    colorWithAlphaComponent: objc.staticSelector("colorWithAlphaComponent:"),

    // Initializing a UIColor Object
    initWithWhite:            objc.instanceSelector("initWithWhite:alpha:"),
    initWithHSBA:             objc.instanceSelector("initWithHue:saturation:brightness:alpha:"),
    initWithRGBA:             objc.instanceSelector("initWithRed:green:blue:alpha:"),
    initWithCGColor:          objc.instanceSelector("initWithCGColor:"),
    initWithPatternImage:     objc.instanceSelector("initWithPatternImage:"),
    initWithCIColor:          objc.instanceSelector("initWithCIColor:"),

    // Creating a UIColor with Preset Component Values
    blackColor:           objc.staticProperty({ set : null }), // readonly
    darkGrayColor:        objc.staticProperty({ set : null }), // readonly
    lightGrayColor:       objc.staticProperty({ set : null }), // readonly
    whiteColor:           objc.staticProperty({ set : null }), // readonly
    grayColor:            objc.staticProperty({ set : null }), // readonly
    redColor:             objc.staticProperty({ set : null }), // readonly
    greenColor:           objc.staticProperty({ set : null }), // readonly
    blueColor:            objc.staticProperty({ set : null }), // readonly
    cyanColor:            objc.staticProperty({ set : null }), // readonly
    yellowColor:          objc.staticProperty({ set : null }), // readonly
    magentaColor:         objc.staticProperty({ set : null }), // readonly
    orangeColor:          objc.staticProperty({ set : null }), // readonly
    purpleColor:          objc.staticProperty({ set : null }), // readonly
    brownColor:           objc.staticProperty({ set : null }), // readonly
    clearColor:           objc.staticProperty({ set : null }), // readonly

    // System Colors
    lightTextColor:                    objc.staticProperty({ set : null }), // readonly
    darkTextColor:                     objc.staticProperty({ set : null }), // readonly
    groupTableViewBackgroundColor:     objc.staticProperty({ set : null }), // readonly
    viewFlipsideBackgroundColor:       objc.staticProperty({ set : null }), // readonly
    scrollViewTexturedBackgroundColor: objc.staticProperty({ set : null }), // readonly
    underPageBackgroundColor:          objc.staticProperty({ set : null }), // readonly

    // Retrieving Color Information
    CGColor:         objc.instanceProperty(),
    CIColor:         objc.instanceProperty(),
    getHSBA:         objc.instanceSelector("getHue:saturation:brightness:alpha:"),
    getRGBA:         objc.instanceSelector("getRed:green:blue:alpha:"),
    getWhite:        objc.instanceSelector("getWhite:alpha:"),

    // Drawing Operations
    set:                      objc.instanceSelector("set"),
    setFill:                  objc.instanceSelector("setFill"),
    setStroke:                objc.instanceSelector("setStroke")

}; });
