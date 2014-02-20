// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UINib");
var UINib;
_exports.UINib = UINib = foundation.NSObject.extendClass ("UINib", () => ({

    // Creating a Nib Object
    nibWithNibName: objc.staticSelector("nibWithNibName:bundle:"),
    nibWithData:    objc.staticSelector("nibWithData:bundle:"),

    // Instantiating a Nib
    instantiateWithOwner: objc.instanceSelector("instantiateWithOwner:options:")

}));
