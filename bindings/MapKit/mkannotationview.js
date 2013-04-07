// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKAnnotationView = MKAnnotationView = objc.bindClass(ui.UIView,
  function MKAnnotationView () {
    return MKAnnotationView.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing and Preparing the View
    initWithAnnotation: objc.instanceSelector("initWithAnnotation:reuseIdentifier:"),
    prepareForReuse: objc.instanceSelector("prepareForReuse"),

    // Getting and Setting Attributes
    enabled: objc.instanceProperty(),
    image: objc.instanceProperty(),
    highlighted: objc.instanceProperty(),
    annotation: objc.instanceProperty(),
    centerOffset: objc.instanceProperty(),
    calloutOffset: objc.instanceProperty(),
    reuseIdentifier: objc.instanceProperty(),

    // Managing the Selection State
    setSelected: objc.instanceSelector("setSelected:animated:"),
    selected: objc.instanceProperty({ set: function(v) { return this.setSelected(v, false); } }),

    // Managing Callout Views
    canShowCallout: objc.instanceProperty(),
    leftCalloutAccessoryView: objc.instanceProperty(),
    rightCalloutAccessoryView: objc.instanceProperty(),

    // Supporting Drag Operations
    draggable: objc.instanceProperty(),
    setDragState: objc.instanceSelector("setDragState:animated:"),
    dragState: objc.instanceProperty ({ set: function(v) { return this.setDragState(v, false); } })

});
