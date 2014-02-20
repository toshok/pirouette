// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIPrintInfo");
var UIPrintPageInteractionController;
_exports.UIPrintPageInteractionController = UIPrintPageInteractionController = foundation.NSObject.extendClass ("UIPrintPageInteractionController", () => ({

    // Creating a UIPrintInfo Object
    printInfo:               objc.staticSelector("printInfo"),
    printInfoWithDictionary: objc.staticSelector("printInfoWithDictionary:"),
    dictionaryRepresentation: objc.instanceSelector("dictionaryRepresentation"),

    // Getting and Setting Print-Job Attributes
    duplex: objc.instanceProperty(),
    jobName: objc.instanceProperty(),
    orientation: objc.instanceProperty(),
    outputType: objc.instanceProperty(),
    printerID: objc.instanceProperty()

}));
