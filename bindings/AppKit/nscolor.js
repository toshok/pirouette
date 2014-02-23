// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSColor;
_exports.NSColor = NSColor = foundation.NSObject.extendClass("NSColor", () => ({

    // Creating an NSColor Object from Component Values
    //
    colorWithCalibratedHSBA:      objc.staticSelector("colorWithCalibratedHue:saturation:brightness:alpha:"),
    colorWithCalibratedRGBA:      objc.staticSelector("colorWithCalibratedRed:green:blue:alpha:"),
    colorWithCalibratedWhite:     objc.staticSelector("colorWithCalibratedWhite:alpha:"),
    colorWithName:                objc.staticSelector("colorWithCatalogName:colorName:"),
    colorWithDeviceCMYKA:         objc.staticSelector("colorWithDeviceCyan:magenta:yellow:black:alpha:"),
    colorWithDeviceHSBA:          objc.staticSelector("colorWithDeviceHue:saturation:brightness:alpha:"),
    colorWithDeviceRGBA:          objc.staticSelector("colorWithDeviceRed:green:blue:alpha:"),
    colorWithDeviceWhite:         objc.staticSelector("colorWithDeviceWhite:alpha:"),
    colorWithCIColor:             objc.staticSelector("colorWithCIColor:"),
    colorWithColorSpace:          objc.staticSelector("colorWithColorSpace:components:count:"),
    colorWithSRGBA:               objc.staticSelector("colorWithSRGBRed:green:blue:alpha:"),
    colorWithGenericGamma22White: objc.staticSelector("colorWithGenericGamma22White:alpha:"),
    colorWithHSBA:                objc.staticSelector("colorWithHue:saturation:brightness:alpha:"),
    colorWithRGBA:                objc.staticSelector("colorWithRed:green:blue:alpha:"),
    colorWithWhite:               objc.staticSelector("colorWithWhite:alpha:"),

    // Creating an NSColor with Preset Components
    //
    blackColor:     objc.staticProperty({ set: null }),
    blueColor:      objc.staticProperty({ set: null }),
    brownColor:     objc.staticProperty({ set: null }),
    clearColor:     objc.staticProperty({ set: null }),
    cyanColor:      objc.staticProperty({ set: null }),
    darkGrayColor:  objc.staticProperty({ set: null }),
    grayColor:      objc.staticProperty({ set: null }),
    greenColor:     objc.staticProperty({ set: null }),
    lightGrayColor: objc.staticProperty({ set: null }),
    magentaColor:   objc.staticProperty({ set: null }),
    orangeColor:    objc.staticProperty({ set: null }),
    purpleColor:    objc.staticProperty({ set: null }),
    redColor:       objc.staticProperty({ set: null }),
    whiteColor:     objc.staticProperty({ set: null }),
    yellowColor:    objc.staticProperty({ set: null }),

    // Working with Pattern Images
    //
    colorWithPatternImage: objc.staticSelector("colorWithPatternImage:"),
    patternImage: objc.instanceProperty({ set: null }),

    // Creating a System Color—an NSColor Whose Value Is Specified by User Preferences
    //
    alternateSelectedControlColor:         objc.staticProperty({ set: null }),
    alternateSelectedControlTextColor:     objc.staticProperty({ set: null }),
    colorForControlTint:                   objc.staticSelector("colorForControlTint:"),
    controlBackgroundColor:                objc.staticProperty({ set: null }),
    controlColor:                          objc.staticProperty({ set: null }),
    controlAlternatingRowBackgroundColors: objc.staticProperty({ set: null }),
    controlHighlightColor:                 objc.staticProperty({ set: null }),
    controlLightHighlightColor:            objc.staticProperty({ set: null }),
    controlShadowColor:                    objc.staticProperty({ set: null }),
    controlDarkShadowColor:                objc.staticProperty({ set: null }),
    controlTextColor:                      objc.staticProperty({ set: null }),
    currentControlTint:                    objc.staticProperty({ set: null }),
    disabledControlTextColor:              objc.staticProperty({ set: null }),
    gridColor:                             objc.staticProperty({ set: null }),
    headerColor:                           objc.staticProperty({ set: null }),
    headerTextColor:                       objc.staticProperty({ set: null }),
    highlightColor:                        objc.staticProperty({ set: null }),
    keyboardFocusIndicatorColor:           objc.staticProperty({ set: null }),
    knobColor:                             objc.staticProperty({ set: null }),
    scrollBarColor:                        objc.staticProperty({ set: null }),
    secondarySelectedControlColor:         objc.staticProperty({ set: null }),
    selectedControlColor:                  objc.staticProperty({ set: null }),
    selectedControlTextColor:              objc.staticProperty({ set: null }),
    selectedMenuItemColor:                 objc.staticProperty({ set: null }),
    selectedMenuItemTextColor:             objc.staticProperty({ set: null }),
    selectedTextBackgroundColor:           objc.staticProperty({ set: null }),
    selectedTextColor:                     objc.staticProperty({ set: null }),
    selectedKnobColor:                     objc.staticProperty({ set: null }),
    shadowColor:                           objc.staticProperty({ set: null }),
    textBackgroundColor:                   objc.staticProperty({ set: null }),
    textColor:                             objc.staticProperty({ set: null }),
    windowBackgroundColor:                 objc.staticProperty({ set: null }),
    windowFrameColor:                      objc.staticProperty({ set: null }),
    windowFrameTextColor:                  objc.staticProperty({ set: null }),
    underPageBackgroundColor:              objc.staticProperty({ set: null }),

    // Ignoring Alpha Components
    //
    ignoresAlpha: objc.staticProperty(),

    // Copying and Pasting
    //
    colorFromPasteboard: objc.staticSelector("colorFromPasteboard:"),
    writeToPasteboard: objc.instanceSelector("writeToPasteboard:"),

    // Retrieving a Set of Components
    //
    // FIXME these APIs take CGFloat*'s.  we need to figure out a way to wrap them such that they
    // return either an array or populate an array or something.
    //getCyan:magenta:yellow:black:alpha:: objc.instanceSelector()
    //getHue:saturation:brightness:alpha:: objc.instanceSelector()
    //getRed:green:blue:alpha:: objc.instanceSelector()
    //getWhite:alpha:: objc.instanceSelector()
    //getComponents:: objc.instanceSelector()
    //numberOfComponents: objc.instanceSelector()

    // Retrieving Individual Components
    //
    alphaComponent:                objc.instanceProperty({ set: null }),
    blackComponent:                objc.instanceProperty({ set: null }),
    blueComponent:                 objc.instanceProperty({ set: null }),
    brightnessComponent:           objc.instanceProperty({ set: null }),
    catalogNameComponent:          objc.instanceProperty({ set: null }),
    colorNameComponent:            objc.instanceProperty({ set: null }),
    cyanComponent:                 objc.instanceProperty({ set: null }),
    greenComponent:                objc.instanceProperty({ set: null }),
    hueComponent:                  objc.instanceProperty({ set: null }),
    localizedCatalogNameComponent: objc.instanceProperty({ set: null }),
    localizedColorNameComponent:   objc.instanceProperty({ set: null }),
    magentaComponent:              objc.instanceProperty({ set: null }),
    redComponent:                  objc.instanceProperty({ set: null }),
    saturationComponent:           objc.instanceProperty({ set: null }),
    whiteComponent:                objc.instanceProperty({ set: null }),
    yellowComponent:               objc.instanceProperty({ set: null }),

    // Working with the Color Space
    //
    colorSpaceName:                    objc.instanceProperty({ set: null }),
    colorUsingColorSpaceName:          objc.instanceSelector("colorUsingColorSpaceName:"),
    colorUsingColorSpaceNameAndDevice: objc.instanceSelector("colorUsingColorSpaceName:device:"),
    colorSpace:                        objc.instanceProperty({ set: null }),
    colorUsingColorSpace:              objc.instanceSelector("colorUsingColorSpace:"),

    // Changing the Color
    //
    blendedColor:            objc.instanceSelector("blendedColorWithFraction:ofColor:"),
    colorWithAlphaComponent: objc.instanceSelector("colorWithAlphaComponent:"),
    highlightWithLevel:      objc.instanceSelector("highlightWithLevel:"),
    shadowWithLevel:         objc.instanceSelector("shadowWithLevel:"),

    // Converting Colors Between CGColors
    //
    CGColor:          objc.instanceProperty({ set: null }),
    colorWithCGColor: objc.staticSelector("colorWithCGColor:"),

    // Drawing
    //
    drawSwatchInRect: objc.instanceSelector("drawSwatchInRect:"),
    set:              objc.instanceSelector(),
    setFill:          objc.instanceSelector(),
    setStroke:        objc.instanceSelector()

}));
