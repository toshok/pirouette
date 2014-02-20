// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIToolbar");
var UIToolbar;
_exports.UIToolbar = UIToolbar = UIView.extendClass ("UIToolbar", () => ({

    // Configuring the Toolbar
    barStyle: objc.instanceProperty(),
    translucent: objc.instanceProperty(),

    // Configuring Toolbar Items
    items: objc.instanceProperty({ set: function(v) { return this.setItems (v, false); } }),
    setItems: objc.instanceSelector("setItems:animated:").
                            returns( function() { return objc.sig.Void; }).
			     params( function(v) { return [ foundation.NSObject, objc.sig.Bool ]; }), // XXX param 1 is actually an array, we should have a objc.sig.NSArray for that

    // Customizing Appearance
    backgroundImage:    objc.instanceSelector("backgroundImageForToolbarPosition:barMetrics:"),
    setBackgroundImage: objc.instanceSelector("setBackgroundImage:forToolbarPosition:barMetrics:"),
    tintColor: objc.instanceProperty()

}));
