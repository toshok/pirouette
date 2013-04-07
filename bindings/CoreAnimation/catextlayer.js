// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CATextLayer = CATextLayer = objc.bindClass(CALayer,
  function CATextLayer () {
    return CATextLayer.__super__.constructor.apply(this, arguments);
  }, {

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

});