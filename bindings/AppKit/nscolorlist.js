// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSColorList;
_exports.NSColorList = NSColorList = foundation.NSObject.extendClass("NSColorList", () => ({

    // Initializing an NSColorList Object
    //
    initWithName:         objc.instanceSelector("initWithName:"),
    initWithNameFromFile: objc.instanceSelector("initWithName:fromFile:"),

    // Getting Color Lists
    //
    availableColorLists: objc.staticSelector(),
    colorListNamed:      objc.staticSelector("colorListNamed:"),

    // Getting Color List Properties
    //
    name:       objc.instanceProperty({ set: null }),
    isEditable: objc.instanceProperty({ set: null }),

    // Managing Colors By Key
    //
    allKeys:      objc.instanceProperty({ set: null }),
    colorWithKey: objc.instanceSelector("colorWithKey:"),
    insertColor:  objc.instanceSelector("insertColor:key:atIndex:"),
    removeColor:  objc.instanceSelector("removeColorWithKey:"),
    setColor:     objc.instanceSelector("setColor:forKey:"),

    // Writing and Removing Color-List Files
    //
    removeFile:  objc.instanceSelector(),
    writeToFile: objc.instanceSelector("writeToFile:")
}));
