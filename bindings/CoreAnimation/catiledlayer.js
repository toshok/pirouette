// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CATiledLayer = CATiledLayer = CALayer.extendClass("CATiledLayer", {

    // Visual Fade
    fadeDuration: objc.staticSelector("fadeDuration"),

    // Levels of Detail
    levelsOfDetail: objc.instanceProperty(),
    levelsOfDetailBias: objc.instanceProperty(),

    // Layer Tile Size
    tileSize: objc.instanceProperty()
});
