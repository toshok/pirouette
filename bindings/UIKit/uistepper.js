// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIStepper");
var UIStepper;
_exports.UIStepper = UIStepper = UIControl.extendClass ("UIStepper", () => { return {

    // Configuring the Stepper
    continuous: objc.instanceProperty(),
    autorepeat: objc.instanceProperty(),
    wraps: objc.instanceProperty(),
    minimumValue: objc.instanceProperty(),
    maximumValue: objc.instanceProperty(),
    stepValue: objc.instanceProperty(),

    // Accessing the Stepper’s Value
    value: objc.instanceProperty()

}; });
