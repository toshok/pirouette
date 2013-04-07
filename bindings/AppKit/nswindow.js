// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSWindow = NSWindow = objc.bindClass(foundation.NSResponder,
  function NSWindow () {
    NSWindow.__super__.constructor.apply(this, arguments);
  }, {

    title: objc.instanceProperty(),
    contentView: objc.instanceProperty(),

    makeKeyAndOrderFront: objc.instanceSelector("makeKeyAndOrderFront:"),
    initWithCoder: objc.instanceSelector("initWithCoder:"),
    setFrame: objc.instanceSelector("setFrame:display:")
});