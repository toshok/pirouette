// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIFont");
exports.UIFont = UIFont = objc.bindClass(foundation.NSObject,
  function UIFont () {
    return UIFont.__super__.constructor.apply(this, arguments);
  }, {

    // Creating Arbitrary Fonts
    fontWithName: objc.staticSelector("fontWithName:size:"),
    fontWithSize:  objc.instanceSelector("fontWithSize:"),

    // Creating System Fonts
    systemFontOfSize:       objc.staticSelector("systemFontOfSize:"),
    boldSystemFontOfSize:   objc.staticSelector("boldSystemFontOfSize:"),
    italicSystemFontOfSize: objc.staticSelector("italicSystemFontOfSize:"),

    // Getting the Available Font Names
    familyNames:            objc.instanceSelector("familyNames"),
    fontNamesForFamilyName: objc.instanceSelector("fontNamesForFamilyName:"),

    // Getting Font Name Attributes
    familyName: objc.instanceProperty(),
    fontName: objc.instanceProperty(),

    // Getting Font Metrics
    pointSize: objc.instanceProperty(),
    ascender: objc.instanceProperty(),
    descender: objc.instanceProperty(),
    capHeight: objc.instanceProperty(),
    xHeight: objc.instanceProperty(),
    lineHeight: objc.instanceProperty(),
    leading: objc.instanceProperty(), // Deprecated in iOS 4.0

    // Getting System Font Information
    labelFontSize:       objc.staticSelector("labelFontSize"),
    buttonFontSize:      objc.staticSelector("buttonFontSize"),
    smallSystemFontSize: objc.staticSelector("smallSystemFontSize"),
    systemFontSize:      objc.staticSelector("systemFontSize")

});