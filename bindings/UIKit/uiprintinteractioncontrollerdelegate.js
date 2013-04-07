// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIPrintInteractionControllerDelegte");
exports.UIPrintInteractionControllerDelegate = UIPrintInteractionControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function UIPrintInteractionControllerDelegate () {
    return UIPrintInteractionControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Returning a Parent View Controller
    parentViewController: objc.optionalMethod("printInteractionControllerParentViewController:"),

    // Choosing a Paper Size for the Print Job
    choosePaper:          objc.optionalMethod("printInteractionController:choosePaper:"),

    // Responding to the Presentation and Dismissal of the Printing Interface
    willPresentPrinterOptions: objc.optionalMethod("printInteractionControllerWillPresentPrinterOptions:"),
    didPresentPrinterOptions:  objc.optionalMethod("printInteractionControllerDidPresentPrinterOptions:"),
    willDismissPrinterOptions: objc.optionalMethod("printInteractionControllerWillDismissPrinterOptions:"),
    didDismissPrinterOptions:  objc.optionalMethod("printInteractionControllerDidDismissPrinterOptions:"),

    // Responding to the Start and End of a Print Job
    willStartJob: objc.optionalMethod("printInteractionControllerWillStartJob:"),
    didFinishJob: objc.optionalMethod("printInteractionControllerDidFinishJob:"),

});