// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINib");
exports.UINib = UINib = objc.bindClass(foundation.NSObject,
  function UINib () {
    return UINib.__super__.constructor.apply(this, arguments);
  }, {

    // Creating a Nib Object
    nibWithNibName: objc.staticSelector("nibWithNibName:bundle:"),
    nibWithData:    objc.staticSelector("nibWithData:bundle:"),

    // Instantiating a Nib
    instantiateWithOwner: objc.instanceSelector("instantiateWithOwner:options:")

});