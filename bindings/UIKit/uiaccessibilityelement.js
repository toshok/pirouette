// This file is part of coffeekit.  for licensing information, see the LICENSE file

console.log("UIAccessibilityElement");
exports.UIAccessibilityElement = UIAccessibilityElement = foundation.NSObject.extendClass ("UIAccessibilityElement", {

  // Creating an Accessibility Element
  initWithAccessibilityContainer: objc.instanceSelector("initWithAccessibilityContainer:"),

  // Accessing the Containing View
  accessibilityContainer: objc.instanceProperty(),

  // Determining Accessibility
  isAccessibilityElement: objc.instanceProperty(),

  // Accessing the Attributes of an Accessibility Element
  accessibilityLabel: objc.instanceProperty(),
  accessibilityHint: objc.instanceProperty(),
  accessibilityValue: objc.instanceProperty(),
  accessibilityFrame: objc.instanceProperty(),
  accessibilityTraits: objc.instanceProperty()

});