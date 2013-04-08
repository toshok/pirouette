// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UILocalizedIndexCollation");
exports.UILocalizedIndexCollation = UILocalizedIndexCollation = foundation.NSObject.extendClass ("UILocalizedIndexCollation", {

    // Getting the Shared Instance
    currentCollation:    objc.staticSelector("currentCollation"),

    // Preparing the for Sections and Section Indexes
    sectionForObject:     objc.instanceSelector("sectionForObject:collationStringSelector:"),
    sortedArrayFromArray: objc.instanceSelector("sortedArrayFromArray:collationStringSelector:"),

    // Providing Section Index Data to the Table View
    sectionTitles: objc.instanceProperty(),
    sectionIndexTitles: objc.instanceProperty(),
    sectionForSectionIndexTitleAtIndex: objc.instanceSelector("sectionForSectionIndexTitleAtIndex:")

});