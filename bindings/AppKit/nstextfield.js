// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { NSControl } from 'nscontrol';

export let NSTextField = NSControl.extendClass("NSTextField", () => ({

    // Controlling Selection and Editing
    //
    isEditable: instanceProperty({ set: "setEditable" }),
    isSelectable: instanceProperty({ set: "setSelectable" }),

    // Controlling Rich Text Behavior
    //
    allowsEditingTextAttributes: instanceProperty(),
    importsGraphics: instanceProperty(),

    // Setting the Text Color
    //
    textColor: instanceProperty(),

    // Autolayout Sizing
    //
    preferredMaxLayoutWidth: instanceProperty(),

    // Controlling the Background
    //
    backgroundColor: instanceProperty(),
    drawsBackground: instanceProperty(),

    // Setting a Border
    //
    isBezeled: instanceProperty({ set: "setBezeled" }),
    bezelStyle: instanceProperty(),
    isBordered: instanceProperty({ set: "setBordered" }),

    // Selecting the Text
    //
    selectText: instanceSelector("selectText:"),

    // Working with the Responder Chain
    //
    acceptsFirstResponder: instanceSelector(),
    nextText: instanceProperty(),         // Available in OS X v10.0 through OS X v10.1
    previousText: instanceProperty(),     // Available in OS X v10.0 through OS X v10.1

    // Using Keyboard Interface Control
    //
    setTitleWithMnemonic: instanceSelector("setTitleWithMnemonic:"), // Deprecated in OS X v10.8

    // Setting the Delegate
    //
    delegate: autoboxProperty(NSObject), // XXX NSTextFieldDelegate

    // NSText Delegate Method Implementations
    //
    textShouldBeginEditing: instanceSelector("textShouldBeginEditing:"),
    textDidBeginEditing: instanceSelector("textDidBeginEditing:"),
    textDidChange: instanceSelector("textDidChange:"),
    textShouldEndEditing: instanceSelector("textShouldEndEditing:"),
    textDidEndEditing: instanceSelector("textDidEndEditing:")

}));

NSTextField.newWithFrame = function (frame) {
  return NSTextField.newWith({ initWith: "Frame", args: [frame] });
};
