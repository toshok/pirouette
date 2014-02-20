// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIPrintPaper");
var UIPrintPaper;
_exports.UIPrintPaper = UIPrintPaper = foundation.NSObject.extendClass ("UIPrintPaper", () => ({

    // Getting the Paper Size and the Printing Area
    paperSize: objc.instanceProperty(),
    printableRect: objc.instanceProperty(),

    // Obtaining the Best Paper Size for Printing
    bestPaperForPageSize: objc.staticSelector("bestPaperForPageSize:withPapersFromArray:")

}));
