// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPasteboard");
exports.UIPasteboard = UIPasteboard = objc.bindClass(foundation.NSObject,
  function UIPasteboard () {
    return UIPasteboard.__super__.constructor.apply(this, arguments);
  }, {

    // Getting and Removing Pasteboards
    generalPasteboard:        objc.staticSelector("generalPasteboard"),
    pasteboardWithName:       objc.staticSelector("pasteboardWithName:create:"),
    pasteboardWithUniqueName: objc.staticSelector("pasteboardWithUniqueName"),
    removePasteboardWithName: objc.staticSelector("removePasteboardWithName:"),

    // Getting and Setting Pasteboard Attributes
    name: objc.instanceProperty(),
    persistent: objc.instanceProperty(),
    changeCount: objc.instanceProperty(),

    // Determining Types of Single Pasteboard Items
    pasteboardTypes:         objc.instanceSelector("pasteboardTypes"),
    containsPasteboardTypes: objc.instanceSelector("containsPasteboardTypes:"),

    // Getting and Setting Single Pasteboard Items
    dataForPasteboardType:      objc.instanceSelector("dataForPasteboardType:"),
    valueForPasteboardType:     objc.instanceSelector("valueForPasteboardType:"),
    setData:                    objc.instanceSelector("setData:forPasteboardType:"),
    setValue:                   objc.instanceSelector("setValue:forPasteboardType:"),

    // Determining the Types of Multiple Pasteboard Items
    pasteboardTypesForItemSet:        objc.instanceSelector("pasteboardTypesForItemSet:"),
    itemSetWithPasteboardTypes:       objc.instanceSelector("itemSetWithPasteboardTypes:"),
    containsPasteboardTypesInItemSet: objc.instanceSelector("containsPasteboardTypes:inItemSet:"),
    numberOfItems: objc.instanceProperty(),

    // Getting and Setting Multiple Pasteboard Items
    dataForPasteboardTypeInItemSet:   objc.instanceSelector("dataForPasteboardType:inItemSet:"),
    valuesForPasteboardTypeInItemSet: objc.instanceSelector("valuesForPasteboardType:inItemSet:"),
    addItems:                         objc.instanceSelector("addItems:"),
    items: objc.instanceProperty(),

    // Getting and Setting Pasteboard Items of Standard Data Types
    string: objc.instanceProperty(),
    strings: objc.instanceProperty(),
    image: objc.instanceProperty(),
    images: objc.instanceProperty(),
    URL: objc.instanceProperty(),
    URLs: objc.instanceProperty(),
    color: objc.instanceProperty(),
    colors: objc.instanceProperty()

});