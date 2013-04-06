// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKUserTrackingBarButtonItem = MKUserTrackingBarButtonItem = objc.bindClass(ui.UIBarButtonItem,
  function MKUserTrackingBarButtonItem () {
    return MKUserTrackingBarButtonItem.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing
    initWithMapView: objc.instanceSelector("initWithMapView:"),

    // Accessing Properties
    mapView: objc.instanceProperty()

});