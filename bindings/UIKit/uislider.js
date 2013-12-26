// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISlider");
var UISlider;
_exports.UISlider = UISlider = UIControl.extendClass ("UISlider", () => { return {

    // Accessing the Slider’s Value
    value: objc.instanceProperty({ set: function(v) { return this.setValue(v, false); } }),
    setValue: objc.instanceSelector("setValue:animated:"),

    // Accessing the Slider’s Value Limits
    minimumValue: objc.instanceProperty(),
    maximumValue: objc.instanceProperty(),

    // Modifying the Slider’s Behavior
    continuous: objc.instanceProperty(),

    // Changing the Slider’s Appearance
    minimumTrackImage:    objc.instanceSelector("minimumTrackImageForState:"),
    setMinimumTrackImage: objc.instanceSelector("setMinimumTrackImage:forState:"),
    maximumTrackImage:    objc.instanceSelector("maximumTrackImageForState:"),
    setMaximumTrackImage: objc.instanceSelector("setMaximumTrackImage:forState:"),
    thumbImage:           objc.instanceSelector("thumbImageForState:"),
    setThumbImage:        objc.instanceSelector("setThumbImage:forState:"),
    currentMaximumTrackImage: objc.instanceProperty(),
    currentThumbImage: objc.instanceProperty(),
    minimumValueImage: objc.instanceProperty(),
    maximumValueImage: objc.instanceProperty(),
    currentMinimumTrackImage: objc.instanceProperty(),
    minimumTrackTintColor: objc.instanceProperty().makeUIAppearance(),
    maximumTrackTintColor: objc.instanceProperty().makeUIAppearance(),
    thumbTintColor: objc.instanceProperty().makeUIAppearance(),

    // Overrides for Subclasses
    maximumValueImageRect: objc.instanceSelector("maximumValueImageRectForBounds:"),
    minimumValueImageRect: objc.instanceSelector("minimumValueImageRectForBounds:"),
    trackRect:             objc.instanceSelector("trackRectForBounds:"),
    thumbRect:             objc.instanceSelector("thumbRectForBounds:trackRect:value:")

}; });
