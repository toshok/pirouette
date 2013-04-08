// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSWindow = NSWindow = foundation.NSResponder.extendClass("NSWindow", {
    title: objc.instanceProperty(),
    contentView: objc.instanceProperty(),

    makeKeyAndOrderFront: objc.instanceSelector("makeKeyAndOrderFront:"),
    initWithCoder: objc.instanceSelector("initWithCoder:"),
    setFrame: objc.instanceSelector("setFrame:display:")
});