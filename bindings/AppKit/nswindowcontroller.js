// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSWindowController = NSWindowController = foundation.NSResponder.extendClass("NSWindowController", {
  constructor: function (_super, handle, arg2) {
    if (typeof (handle) === 'string') {
      _super.call(this);
      this.initWithWindowNibName (arg2);
    }
    else {
      _super.apply(this, arguments.slice(1));
    }
  },

  window: objc.instanceProperty(),

  initWithWindow: objc.instanceSelector("initWithWindow:"),
  initWithWindowNibName: objc.instanceSelector("initWithWindowNibName:")

});
