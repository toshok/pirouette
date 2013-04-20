// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITextInput");

exports.UITextInput = UITextInput = foundation.Protocol.extendClass("UITextInput", {

    // Replacing and Returning Text
    textInRange:  objc.requiredMethod("textInRange:"),
    replaceRange: objc.requiredMethod("replaceRange:withText:"),

    // Working with Marked and Selected Text
    selectedTextRange:          objc.requiredProperty("selectedTextRange"),
    markedTextRange:            objc.requiredProperty("markedTextRange"),
    markedTextStyle:            objc.requiredProperty("markedTextStyle"),
    setMarkedTextSelectedRange: objc.requiredMethod("setMarkedText:selectedRange:"),
    unmarkText:                 objc.requiredMethod("unmarkText"),
    selectionAffinity:          objc.optionalMethod("selectionAffinity"),

    // Computing Text Ranges and Text Positions
    textRangeFromPosition:           objc.requiredMethod("textRangeFromPosition:toPosition:"),
    positionFromPosition:            objc.requiredMethod("positionFromPosition:offset:"),
    positionFromPositionInDirection: objc.requiredMethod("positionFromPosition:inDirection:offset:"),
    beginningOfDocument:             objc.requiredProperty("beginningOfDocument"),
    endOfDocument:                   objc.requiredProperty("endOfDocument"),

    // Evaluating Text Positions
    comparePosition:    objc.requiredMethod("comparePosition:toPosition:"),
    offsetFromPosition: objc.requiredMethod("offsetFromPosition:toPosition:"),

    // Determining Layout and Writing Direction
    positionWithinRange:               objc.optionalMethod("positionWithinRange:farthestInDirection:"),
    characterRangeByExtendingPosition: objc.requiredMethod("characterRangeByExtendingPosition:inDirection:"),
    baseWritingDirectionForPosition:   objc.requiredMethod("baseWritingDirectionForPosition:inDirection:"),
    setBaseWritingDirection:           objc.requiredMethod("setBaseWritingDirection:forRange:"),

    // Geometry and Hit-Testing Methods
    firstRectForRange:                 objc.requiredMethod("firstRectForRange:"),
    caretRectForPosition:              objc.requiredMethod("caretRectForPosition:"),
    closestPositionToPoint:            objc.requiredMethod("closestPositionToPoint:"),
    closestPositionToPointWithinRange: objc.requiredMethod("closestPositionToPoint:withinRange:"),
    characterRangeAtPoint:             objc.requiredMethod("characterRangeAtPoint:"),

    // Text Input Delegate and Text Input Tokenizer
    inputDelegate: objc.requiredProperty("inputDelegate"),
    tokenizer:     objc.requiredProperty("tokenizer"),

    // Returning Text Styling Information
    textStylingAtPosition: objc.optionalMethod("textStylingAtPosition:inDirection:"),

    // Reconciling Text Position and Character Offset
    positionWithinRange:       objc.optionalMethod("positionWithinRange:atCharacterOffset:"),
    characterOffsetOfPosition: objc.optionalMethod("characterOffsetOfPosition:withinRange:"),

    // Returning the Text Input View
    textInputView: objc.optionalMethod("textInputView"),

    // XXX ES6-port
    //@mixinProtocol UIKeyInput
});