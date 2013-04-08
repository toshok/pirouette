// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UINib");
exports.UINib = UINib = foundation.NSObject.extendClass ("UINib", {

    // Creating a Nib Object
    nibWithNibName: objc.staticSelector("nibWithNibName:bundle:"),
    nibWithData:    objc.staticSelector("nibWithData:bundle:"),

    // Instantiating a Nib
    instantiateWithOwner: objc.instanceSelector("instantiateWithOwner:options:")

});