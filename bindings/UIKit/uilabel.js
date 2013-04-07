// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UILabel");
exports.UILabel = UILabel = objc.bindClass(UIView,
  function UILabel () {
    return UILabel.__super__.constructor.apply(this, arguments);
  }, {

    // Accessing the Text Attributes
    text: objc.instanceProperty(),
    font: objc.instanceProperty(),
    textColor: objc.instanceProperty(),
    textAlignment: objc.instanceProperty(),
    lineBreakMode: objc.instanceProperty(),
    enabled: objc.instanceProperty(),

    // Sizing the Label’s Text
    adjustsFontSizeToFitWidth: objc.instanceProperty(),
    baselineAdjustment: objc.instanceProperty(),
    minimumFontSize: objc.instanceProperty(),
    numberOfLines: objc.instanceProperty(),

    // Managing Highlight Values
    highlightedTextColor: objc.instanceProperty(),
    highlighted: objc.instanceProperty(),

    // Drawing a Shadow
    shadowColor: objc.instanceProperty(),
    shadowOffset: objc.instanceProperty(),

    // Drawing and Positioning Overrides
    textRect:       objc.instanceSelector("textRectForBounds:limitedToNumberOfLines:"),
    drawTextInRect: objc.instanceSelector("drawTextInRect:"),

    // Setting and Getting Attributes
    userInteractionEnabled: objc.instanceProperty()

});
