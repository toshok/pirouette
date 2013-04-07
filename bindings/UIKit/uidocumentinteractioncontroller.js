// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIDocumentInteractionController");
exports.UIDocumentInteractionController = UIDocumentInteractionController = objc.bindClass(foundation.NSObject,
  function UIDocumentInteractionController () {
    return UIDocumentInteractionController.__super__.constructor.apply(this, arguments);
  }, {

    // Creating the Document Interaction Controller
    interactionControllerWithURL:       objc.staticSelector("interactionControllerWithURL:"),

    // Presenting and Dismissing a Document Preview
    presentPreview:                      objc.instanceSelector("presentPreviewAnimated:"),
    dismissPreview:                      objc.instanceSelector("dismissPreviewAnimated:"),

    // Presenting and Dismissing Menus
    presentOptionsMenuFromRect:          objc.instanceSelector("presentOptionsMenuFromRect:inView:animated:"),
    presentOptionsMenuFromBarButtonItem: objc.instanceSelector("presentOptionsMenuFromBarButtonItem:animated:"),
    presentOpenInMenuFromRect:           objc.instanceSelector("presentOpenInMenuFromRect:inView:animated:"),
    presentOpenInMenuFromBarButtonItem:  objc.instanceSelector("presentOpenInMenuFromBarButtonItem:animated:"),
    dismissMenu:                         objc.instanceSelector("dismissMenuAnimated:"),

    // Accessing the Target Document’s Attributes
    URL: objc.instanceProperty(),
    UTI: objc.instanceProperty(),
    name: objc.instanceProperty(),
    icons: objc.instanceProperty(),
    annotation: objc.instanceProperty(),

    // Accessing the Controller Attributes
    gestureRecognizers: objc.instanceProperty(),
    delegate: objc.autoboxProperty(UIDocumentInteractionControllerDelegate)

});