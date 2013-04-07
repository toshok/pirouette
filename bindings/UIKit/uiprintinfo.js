// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPrintInfo");
exports.UIPrintPageInteractionController = UIPrintPageInteractionController = objc.bindClass(foundation.NSObject,
  function UIPrintPageInteractionController () {
    return UIPrintPageInteractionController.__super__.constructor.apply(this, arguments);
  }, {

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

});
