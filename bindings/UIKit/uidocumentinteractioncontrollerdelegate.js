// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIDocumentInteractionControllerDelegate");
exports.UIDocumentInteractionControllerDelegate = UIDocumentInteractionControllerDelegate = objc.bindProtocol(foundation.Protocol,
  function UIDocumentInteractionControllerDelegate () {
    return UIDocumentInteractionControllerDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Parent View Controller
    viewControllerForPreview: objc.optionalMethod("documentInteractionControllerViewControllerForPreview:"),
    viewForPreview:           objc.optionalMethod("documentInteractionControllerViewForPreview:"),
    rectForPreview:           objc.optionalMethod("documentInteractionControllerRectForPreview:"),

    // Presenting the User Interface
    willBeginPreview:         objc.optionalMethod("documentInteractionControllerWillBeginPreview:"),
    didEndPreview:            objc.optionalMethod("documentInteractionControllerDidEndPreview:"),
    willPresentOptionsMenu:   objc.optionalMethod("documentInteractionControllerWillPresentOptionsMenu:"),
    didDismissOptionsMenu:    objc.optionalMethod("documentInteractionControllerDidDismissOptionsMenu:"),
    willPresentOpenInMenu:    objc.optionalMethod("documentInteractionControllerWillPresentOpenInMenu:"),
    didDismissOpenInMenu:     objc.optionalMethod("documentInteractionControllerDidDismissOpenInMenu:"),

    // Opening Files
    willBeginSendingToApplication: objc.optionalMethod("documentInteractionController:willBeginSendingToApplication:"),
    didEndSendingToApplication:    objc.optionalMethod("documentInteractionController:didEndSendingToApplication:"),

    // Managing Actions
    canPerformAction:         objc.optionalMethod("documentInteractionController:canPerformAction:"),
    performAction:            objc.optionalMethod("documentInteractionController:performAction:")

});
