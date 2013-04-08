// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPrintPaper");
exports.UIPrintPaper = UIPrintPaper = objc.bindClass(foundation.NSObject,
  function UIPrintPaper () {
    return UIPrintPaper.__super__.constructor.apply(this, arguments);
  }, {
    // Getting the Paper Size and the Printing Area
    paperSize: objc.instanceProperty(),
    printableRect: objc.instanceProperty(),

    // Obtaining the Best Paper Size for Printing
    bestPaperForPageSize: objc.staticSelector("bestPaperForPageSize:withPapersFromArray:")

});