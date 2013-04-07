// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIManagedDocument");
exports.UIManagedDocument = UIManagedDocument = objc.bindClass(foundation.NSObject,
  function UIManagedDocument () {
    return UIManagedDocument.__super__.constructor.apply(this, arguments);
  }, {

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

});
