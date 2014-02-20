// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CATiledLayer;
_exports.CATiledLayer = CATiledLayer = CALayer.extendClass("CATiledLayer", () => ({

    // Visual Fade
    fadeDuration: objc.staticSelector("fadeDuration"),

    // Levels of Detail
    levelsOfDetail: objc.instanceProperty(),
    levelsOfDetailBias: objc.instanceProperty(),

    // Layer Tile Size
    tileSize: objc.instanceProperty()
}));
