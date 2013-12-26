// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIDatePicker");
var UIDatePicker;
_exports.UIDatePicker = UIDatePicker = UIControl.extendClass ("UIDatePicker", () => { return {

    // Managing the Date and Calendar
    calendar:  objc.instanceProperty(),
    date:      objc.instanceProperty(),
    setDate:   objc.instanceSelector("setDate:animated:"),
    timeZone:  objc.instanceProperty(),
    locale:    objc.instanceProperty(), // Deprecated in iOS 5.0

    // Configuring the Date Picker Mode
    datePickerMode:  objc.instanceProperty(),

    // Configuring Temporal Attributes
    maximumDate:  objc.instanceProperty(),
    minimumDate:  objc.instanceProperty(),
    minuteInterval:  objc.instanceProperty(),
    countDownDuration:  objc.instanceProperty()

}; });
