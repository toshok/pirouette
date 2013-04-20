// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPickerViewDelegate");
exports.UIPickerViewDelegate = UIPickerViewDelegate = foundation.Protocol.extendClass("UIPickerViewDelegate", {

    // Setting the Dimensions of the Picker View
    rowHeightForComponent: objc.optionalMethod("pickerView:rowHeightForComponent:"),
    widthForComponent:     objc.optionalMethod("pickerView:widthForComponent:"),

    // Setting the Content of Component Rows

    // The methods in this group are marked optional. However, to use a picker view, you must implement either the titleForRow or the viewForRow method to provide the content of component rows.

    titleForRow:           objc.optionalMethod("pickerView:titleForRow:forComponent:"),
    viewForRow:            objc.optionalMethod("pickerView:viewForRow:forComponent:reusingView:"),

    // Responding to Row Selection
    didSelectRow:          objc.optionalMethod("pickerView:didSelectRow:inComponent:")

});
