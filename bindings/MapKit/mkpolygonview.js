// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPolygonView = MKPolygonView = objc.bindClass(MKOverlayPathView,
  function MKPolygonView () {
    return MKPolygonView.__super__.constructor.apply(this, arguments);
  }, {

    // MethodGroup
    initWithPolygon: objc.instanceSelector("initWithPolygon:"),
    polygon: objc.instanceProperty()

});