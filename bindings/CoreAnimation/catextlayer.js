// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CATextLayer;
exports.CATextLayer = CATextLayer = CALayer.extendClass("CATextLayer", () => ({

    // Getting and Setting the Text
    string: objc.instanceProperty(),

    // Text Visual Properties
    font: objc.instanceProperty(),
    fontSize: objc.instanceProperty(),
    foregroundColor: objc.instanceProperty(),

    // Text Alignment and Truncation
    wrapped: objc.instanceProperty(),
    alignmentMode: objc.instanceProperty(),
    truncationMode: objc.instanceProperty()

}));
