// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIManagedDocument");
var UIManagedDocument;
_exports.UIManagedDocument = UIManagedDocument = foundation.NSObject.extendClass ("UIManagedDocument", () => { return {

    // Managing the Core Data Stack
    configurePersistentStoreCoordinator: objc.instanceSelector("configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:"),
    persistentStoreType:                 objc.instanceSelector("persistentStoreTypeForFileType:"),
    managedObjectContext: objc.instanceProperty(),
    managedObjectModel: objc.instanceProperty(),
    persistentStoreOptions: objc.instanceProperty(),
    modelConfiguration: objc.instanceProperty(),

    // Customizing Read and Write Operations
    readAdditionalContent:  objc.instanceSelector("readAdditionalContentFromURL:error:"),
    additionalContent:      objc.instanceSelector("additionalContentForURL:error:"),
    writeAdditionalContent: objc.instanceSelector("writeAdditionalContent:toURL:originalContentsURL:error:"),

    // Naming the Persistent Store File
    persistentStoreName: objc.staticSelector("persistentStoreName")

}; });
