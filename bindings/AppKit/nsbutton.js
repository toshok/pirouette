// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSButton;
_exports.NSButton = NSButton = NSControl.extendClass("NSButton", () => ({

    // Configuring Buttons
    buttonType: objc.instanceProperty(),

    getPeriodicDelay: objc.instanceSelector("getPeriodicDelay:interval:"),
    setPeriodicDelay: objc.instanceSelector("setPeriodicDelay:interval:"),

    attributedTitle: objc.instanceProperty(),
    attributedAlternateTitle: objc.instanceProperty(),
    title: objc.instanceProperty(),
    alternateTitle: objc.instanceProperty(),
    sound: objc.instanceProperty(),

    setTitleWithMnemonic: objc.instanceSelector("setTitleWithMnemonic:"), // Deprecated in OS X v10.8

    // Configuring Button Images
    image: objc.instanceProperty(),
    alternateImage: objc.instanceProperty(),
    imagePosition: objc.instanceProperty(),
    isBordered: objc.instanceProperty({ set: "setBordered:" }),
    isTransparent: objc.instanceProperty({ set: "setTransparent:" }),
    bezelStyle: objc.instanceProperty(),
    showsBorderOnlyWhileMouseInside: objc.instanceProperty(),

    // Managing Button State
    allowsMixedState: objc.instanceProperty(),
    state: objc.instanceProperty(),

    setNextState: objc.instanceSelector("setNextState"),
    highlight: objc.instanceSelector("highlight:"),

    // Accessing Key Equivalents
    keyEquivalent: objc.instanceProperty(),
    keyEquivalentModifierMask: objc.instanceProperty(),

    // Handling Keyboard Events
    performKeyEquivalent: objc.instanceSelector("performKeyEquivalent:"),

    clicked: objc.instanceProperty({
      set: function (v) {
        if (v) {
	  this.proxy = new NSControlProxy(v);
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
}));

NSButton.newWithFrame = function (frame) {
  return NSButton.newWith({ initWith: "Frame", args: [frame] });
};
