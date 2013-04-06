// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("MKAnnotation");
exports.MKAnnotation = MKAnnotation = objc.bindProtocol(foundation.Protocol,
  function MKAnnotation () {
    return MKAnnotation.__super__.constructor.apply(this, arguments);
  }, {

    // Position Attributes
    coordinate:     objc.optionalProperty("coordinate"),
    setCoordinate:  objc.optionalMethod("setCoordinate:"),

    // Title Attributes
    title:          objc.optionalProperty("title"),
    subtitle:       objc.optionalProperty("subtitle")

});
