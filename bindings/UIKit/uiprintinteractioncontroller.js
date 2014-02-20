// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIPrintInteractionController");
var UIPrintPageInteractionController;
_exports.UIPrintPageInteractionController = UIPrintPageInteractionController = foundation.NSObject.extendClass ("UIPrintPageInteractionController", () => ({

    // Getting the Shared Controller Instance
    sharedPrintController: objc.staticSelector("sharedPrintController"),

    // Determining Printability
    isPrintingAvailable:   objc.staticSelector("isPrintingAvailable"),
    canPrintData:          objc.staticSelector("canPrintData:"),
    canPrintURL:           objc.staticSelector("canPrintURL:"),
    printableUTIs:         objc.staticSelector("printableUTIs"),

    // Providing the Source of Printable Content
    printingItem: objc.instanceProperty(),
    printingItems: objc.instanceProperty(),
    printPageRenderer: objc.instanceProperty(),
    printFormatter: objc.instanceProperty(),

    // Presenting the Printing User Interface
    present:                  objc.instanceSelector("presentAnimated:completionHandler:"),
    presentFromBarButtonItem: objc.instanceSelector("presentFromBarButtonItem:animated:completionHandler:"),
    presentFromRect:          objc.instanceSelector("presentFromRect:inView:animated:completionHandler:"),
    dismiss:                  objc.instanceSelector("dismissAnimated:"),

    // Accessing Print-Job Information
    printInfo: objc.instanceProperty(),
    printPaper: objc.instanceProperty(),
    showsPageRange: objc.instanceProperty(),

    // Assigning the Delegate
    delegate: objc.autoboxProperty(UIPrintInteractionControllerDelegate)
}));
