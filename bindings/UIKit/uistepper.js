// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIStepper");
exports.UIStepper = UIStepper = objc.bindClass(UIControl,
  function UIStepper () {
    return UIStepper.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Stepper
    continuous: objc.instanceProperty(),
    autorepeat: objc.instanceProperty(),
    wraps: objc.instanceProperty(),
    minimumValue: objc.instanceProperty(),
    maximumValue: objc.instanceProperty(),
    stepValue: objc.instanceProperty(),

    // Accessing the Stepper’s Value
    value: objc.instanceProperty()

});