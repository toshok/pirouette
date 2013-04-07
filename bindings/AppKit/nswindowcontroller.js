// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSWindowController = NSWindowController = objc.bindClass(foundation.NSResponder,
  function NSWindowController (handle, arg2) {
    if (typeof (handle) === 'string') {
      NSWindowController.__super__.constructor.apply(this, arguments);
      this.initWithWindowNibName (arg2);
    }
    else {
      NSWindowController.__super__.constructor.call(this, handle);
    }
  }, {

    window: objc.instanceProperty(),

    initWithWindow: objc.instanceSelector("initWithWindow:"),
    initWithWindowNibName: objc.instanceSelector("initWithWindowNibName:")

});
