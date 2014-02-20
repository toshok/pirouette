// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GLKTextureInfo;
_exports.GLKTextureInfo = GLKTextureInfo = foundation.NSObject.extendClass ("GLKTextureInfo", () => ({

    // Reading Texture Information
    glName: objc.instanceProperty(),
    glTarget: objc.instanceProperty(),
    height: objc.instanceProperty(),
    width: objc.instanceProperty(),
    textureOrigin: objc.instanceProperty(),
    alphaState: objc.instanceProperty(),
    containsMipmaps: objc.instanceProperty()

}));
