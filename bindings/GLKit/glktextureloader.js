// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.GLKTextureLoader = GLKTextureLoader = foundation.NSObject.extendClass ("GLKTextureLoader", {

    // Initialization
    initWithSharegroup: objc.instanceSelector("initWithSharegroup:"),

    // Loading Textures from Files
    textureWithContentsOfFile: objc.staticSelector("textureWithContentsOfFile:options:error:"),
    textureWithContentsOfFileWithQueue: objc.instanceSelector("textureWithContentsOfFile:options:queue:completionHandler:"),

    // Loading a Texture From a URL
    textureWithContentsOfURL: objc.staticSelector("textureWithContentsOfURL:options:error:"),
    textureWithContentsOfURLWithQueue: objc.instanceSelector("textureWithContentsOfURL:options:queue:completionHandler:"),

    // Creating Textures from In-Memory Representations
    textureWithContentsOfData: objc.staticSelector("textureWithContentsOfData:options:error:"),
    textureWithContentsOfDataWithQueue: objc.instanceSelector("textureWithContentsOfData:options:queue:completionHandler:"),

    // Creating Textures from CGImages
    textureWithCGImage: objc.staticSelector("textureWithCGImage:options:error:"),
    textureWithCGImageWithQueue: objc.instanceSelector("textureWithCGImage:options:queue:completionHandler:"),

    // Loading Cube Maps from Files
    cubeMapWithContentsOfFile: objc.staticSelector("cubeMapWithContentsOfFile:options:error:"),
    cubeMapWithContentsOfFileWithQueue: objc.instanceSelector("cubeMapWithContentsOfFile:options:queue:completionHandler:"),
    cubeMapWithContentsOfFiles: objc.staticSelector("cubeMapWithContentsOfFiles:options:error:"),
    cubeMapWithContentsOfFilesWithQueue: objc.instanceSelector("cubeMapWithContentsOfFiles:options:queue:completionHandler:"),

    // Loading Cube Maps from URLs
    cubeMapWithContentsOfURL: objc.staticSelector("cubeMapWithContentsOfURL:options:error:"),
    cubeMapWithContentsOfURLWithQueue: objc.instanceSelector("cubeMapWithContentsOfURL:options:queue:completionHandler:")

});
