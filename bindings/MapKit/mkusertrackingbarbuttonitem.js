// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKUserTrackingBarButtonItem = MKUserTrackingBarButtonItem = ui.UIBarButtonItem.extendClass ("MKUserTrackingBarButtonItem", {

    // Initializing
    initWithMapView: objc.instanceSelector("initWithMapView:"),

    // Accessing Properties
    mapView: objc.instanceProperty()

});