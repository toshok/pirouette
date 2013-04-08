// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPolygonView = MKPolygonView = MKOverlayPathView.extendClass ("MKPolygonView", {

    // MethodGroup
    initWithPolygon: objc.instanceSelector("initWithPolygon:"),
    polygon: objc.instanceProperty()

});