// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CAScrollLayer;
exports.CAScrollLayer = CAScrollLayer = CALayer.extendClass("CAScrollLayer", () => ({

    // Scrolling Constraints
    scrollMode: objc.instanceSelector(),

    // Scrolling the Layer
    scrollToPoint: objc.instanceSelector("scrollToPoint:"),
    scrollToRect: objc.instanceSelector("scrollToRect:")

}));
