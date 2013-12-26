// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIBarButtonItem");
var UIBarButtonItem;
_exports.UIBarButtonItem = UIBarButtonItem = UIBarItem.extendClass ("UIBarButtonItem", () => { return {

    // Initializing an Item
    initWithCustomView:          objc.instanceSelector("initWithCustomView:"),
    initWithBarButtonSystemItem: objc.instanceSelector("initWithBarButtonSystemItem:target:action:"),
    initWithImage:               objc.instanceSelector("initWithImage:style:target:action:"),
    initWithTitle:               objc.instanceSelector("initWithTitle:style:target:action:"),
    initWithImageAndLandscape:   objc.instanceSelector("initWithImage:landscapeImagePhone:style:target:action:"),

    initWithClickHandler: function (title,style,click) {
      this.proxy = new UIControlProxy1(click);
      return this.initWithTitle(title, style, this.proxy, this.proxy.proxyAction);
    },

    // Getting and Setting Properties
    target: objc.instanceProperty(),
    action: objc.instanceProperty(),
    style: objc.instanceProperty(),
    possibleTitles: objc.instanceProperty(),
    width: objc.instanceProperty(),
    customView: objc.instanceProperty(),

    tintColor: objc.instanceProperty().makeUIAppearance(),

    getBackButtonBackgroundImage:                      objc.instanceSelector("backButtonBackgroundImageForState:barMetrics:").makeUIAppearance(),
    setBackButtonBackgroundImage:                      objc.instanceSelector("setBackButtonBackgroundImage:forState:barMetrics:").makeUIAppearance(),

    getBackButtonTitlePositionAdjustment:              objc.instanceSelector("backButtonTitlePositionAdjustmentForBarMetrics:").makeUIAppearance(),
    setBackButtonTitlePositionAdjustment:              objc.instanceSelector("setBackButtonTitlePositionAdjustment:forBarMetrics:").makeUIAppearance(),

    getBackButtonBackgroundVerticalPositionAdjustment: objc.instanceSelector("backButtonBackgroundVerticalPositionAdjustmentForBarMetrics:").makeUIAppearance(),
    setBackButtonBackgroundVerticalPositionAdjustment: objc.instanceSelector("setBackButtonBackgroundVerticalPositionAdjustment:forBarMetrics:").makeUIAppearance(),

    getBackgroundVerticalPositionAdjustment:           objc.instanceSelector("backgroundVerticalPositionAdjustmentForBarMetrics:").makeUIAppearance(),
    setBackgroundVerticalPositionAdjustment:           objc.instanceSelector("setBackgroundVerticalPositionAdjustment:forBarMetrics:").makeUIAppearance(),

    getBackgroundImage:                                objc.instanceSelector("backgroundImageForState:barMetrics:").makeUIAppearance(),
    setBackgroundImage:                                objc.instanceSelector("setBackgroundImage:forState:barMetrics:").makeUIAppearance(),

    getTitlePositionAdjustment:                        objc.instanceSelector("titlePositionAdjustmentForBarMetrics:").makeUIAppearance(),
    setTitlePositionAdjustment:                        objc.instanceSelector("setTitlePositionAdjustment:forBarMetrics:").makeUIAppearance(),

    clicked: objc.instanceProperty({
        set: function (v) {
          if (v) {
            this.proxy = new UIControlProxy1(v);
            this.target = this.proxy;
            this.action = this.proxy.proxyAction;
	  }
          else {
            this.proxy = null;
            this.target = null;
            this.action = null;
	  }
	},
        get: null // this should really be an actual getter that returns the callback...
    })

}; });
