// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIDocument");
exports.UIDocument = UIDocument = foundation.NSObject.extendClass ("UIDocument", {

    // Initializing a Document Object
    initWithFileURL: objc.instanceSelector("initWithFileURL:"),

    // Accessing Document Attributes
    fileURL: objc.instanceProperty(),
    localizedName: objc.instanceProperty(),
    fileType: objc.instanceProperty(),
    fileModificationDate: objc.instanceProperty(),
    documentState: objc.instanceProperty(),

    // Writing Document Data
    closeWithCompletionHandler: objc.instanceSelector("closeWithCompletionHandler:"),
    contents:                   objc.instanceSelector("contentsForType:error:"),
    saveToURL:                  objc.instanceSelector("saveToURL:forSaveOperation:completionHandler:"),
    writeContentsSafelyToURL:   objc.instanceSelector("writeContents:andAttributes:safelyToURL:forSaveOperation:error:"),
    writeContentsToURL:         objc.instanceSelector("writeContents:toURL:forSaveOperation:originalContentsURL:error:"),
    savingFileType:             objc.instanceSelector("savingFileType"),
    fileAttributesToWriteToURL: objc.instanceSelector("fileAttributesToWriteToURL:forSaveOperation:error:"),
    fileNameExtensionForType:   objc.instanceSelector("fileNameExtensionForType:saveOperation:"),

    // Reading Document Data
    openWithCompletionHandler: objc.instanceSelector("openWithCompletionHandler:"),
    loadFromContents:          objc.instanceSelector("loadFromContents:ofType:error:"),
    readFromURL:               objc.instanceSelector("readFromURL:error:"),

    // Accessing Document Files Asynchronously
    performAsynchronousFileAccessUsingBlock: objc.instanceSelector("performAsynchronousFileAccessUsingBlock:"),

    // Reverting a Document
    revertToContentsOfURL:     objc.instanceSelector("revertToContentsOfURL:completionHandler:"),

    // Disabling and Enabling Editing
    disableEditing:            objc.instanceSelector("disableEditing"),
    enableEditing:             objc.instanceSelector("enableEditing"),

    // Tracking Changes and Autosaving
    undoManager:              objc.instanceProperty(),
    hasUnsavedChanges:             objc.instanceSelector("hasUnsavedChanges"),
    updateChangeCount:             objc.instanceSelector("updateChangeCount:"),
    changeCountToken:              objc.instanceSelector("changeCountTokenForSaveOperation:"),
    updateChangeCountWithToken:    objc.instanceSelector("updateChangeCountWithToken:forSaveOperation:"),
    autosaveWithCompletionHandler: objc.instanceSelector("autosaveWithCompletionHandler:"),

    // Resolving Conflicts and Handling Errors
    handleError:                      objc.instanceSelector("handleError:userInteractionPermitted:"),
    finishedHandlingError:            objc.instanceSelector("finishedHandlingError:recovered:"),
    userInteractionNoLongerPermitted: objc.instanceSelector("userInteractionNoLongerPermittedForError:")

});
