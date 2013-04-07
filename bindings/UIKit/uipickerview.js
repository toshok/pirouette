// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPickerView");
exports.UIPickerView = UIPickerView = objc.bindClass(UIView,
  function UIPickerView () {
    return UIPickerView.__super__.constructor.apply(this, arguments);
  }, {

    // Getting the Dimensions of the View Picker
    numberOfRowsInComponent: objc.instanceSelector("numberOfRowsInComponent:"),
    rowSizeForComponent:     objc.instanceSelector("rowSizeForComponent:"),
    numberOfComponents: objc.instanceProperty(),

    // Reloading the View Picker
    reloadAllComponents:     objc.instanceSelector("reloadAllComponents"),
    reloadComponent:         objc.instanceSelector("reloadComponent:"),

    // Selecting Rows in the View Picker
    selectRow:               objc.instanceSelector("selectRow:inComponent:animated:"),
    selectedRow:             objc.instanceSelector("selectedRowInComponent:"),

    // Returning the View for a Row and Component
    viewForRowInComponent:   objc.instanceSelector("viewForRow:forComponent:"),

    // Specifying the Delegate
    delegate: objc.autoboxProperty(UIPickerViewDelegate),

    // Specifying the Data Source
    dataSource: objc.instanceProperty(),

    // Managing the Appearance of the Picker View
    showsSelectionIndicator: objc.instanceProperty()

});
