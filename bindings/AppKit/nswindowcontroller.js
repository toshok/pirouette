// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSWindowController;
_exports.NSWindowController = NSWindowController = foundation.NSResponder.extendClass("NSWindowController", () => ({
  constructor: function (handle, arg2) {
    if (typeof (handle) === 'string') {
      objc.chainCtor (NSWindowController, this, []);
      this.initWithWindowNibName (arg2);
    }
    else {
      objc.chainCtor (NSWindowController, this, arguments);
    }
  },

  window: objc.instanceProperty(),

  initWithWindow: objc.instanceSelector("initWithWindow:"),
  initWithWindowNibName: objc.instanceSelector("initWithWindowNibName:")

}));
