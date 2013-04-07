// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIDatePicker");
exports.UIDatePicker = UIDatePicker = objc.bindClass(UIControl,
  function UIDatePicker () {
    return UIDatePicker.__super__.constructor.apply(this, arguments);
  }, {

    // Managing the Date and Calendar
    calendar:  objc.instanceProperty(),
    date:  objc.instanceProperty({ set: function(v) { return this.setDate(v, false); } }),
    setDate:           objc.instanceSelector("setDate:animated:"),
    timeZone:  objc.instanceProperty(),
    locale:  objc.instanceProperty(), // Deprecated in iOS 5.0

    // Configuring the Date Picker Mode
    datePickerMode:  objc.instanceProperty(),

    // Configuring Temporal Attributes
    maximumDate:  objc.instanceProperty(),
    minimumDate:  objc.instanceProperty(),
    minuteInterval:  objc.instanceProperty(),
    countDownDuration:  objc.instanceProperty()

});