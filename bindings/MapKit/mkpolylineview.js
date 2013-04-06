// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKPolylineView = MKPolylineView = objc.bindClass(MKOverlayPathView,
  function MKPolylineView () {
    return MKPolylineView.__super__.constructor.apply(this, arguments);
  }, {

    // MethodGroup
    initWithPolyline: objc.instanceSelector("initWithPolyline:"),
    polyline: objc.instanceProperty()

});
