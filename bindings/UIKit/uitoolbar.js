// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIToolbar");
exports.UIToolbar = UIToolbar = objc.bindClass(UIView,
  function UIToolbar () {
    return UIToolbar.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Toolbar
    barStyle: objc.instanceProperty(),
    translucent: objc.instanceProperty(),

    // Configuring Toolbar Items
    items: objc.instanceProperty({ set: function(v) { return this.setItems (v, false); } }),
    setItems: objc.instanceSelector("setItems:animated:").
                            returns( function() { return ck.sig.Void; }).
			     params( function(v) { return [ foundation.NSObject, ck.sig.Bool ]; }), // XXX param 1 is actually an array, we should have a ck.sig.NSArray for that

    // Customizing Appearance
    backgroundImage:    objc.instanceSelector("backgroundImageForToolbarPosition:barMetrics:"),
    setBackgroundImage: objc.instanceSelector("setBackgroundImage:forToolbarPosition:barMetrics:"),
    tintColor: objc.instanceProperty()

});