// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from 'nsobject';

export let NSArray = NSObject.extendClass("NSArray", () => ({

    // Creating an array
    array: staticSelector(),
    arrayWithArray: staticSelector("arrayWithArray:"),
    arrayWithContentsOfFile: staticSelector("arrayWithContentsOfFile:"),
    arrayWithContentsOfUrl: staticSelector("arrayWithContentsOfUrl:"),
    arrayWithObject: staticSelector("arrayWithObject:"),
    arrayWithObjects: staticSelector("arrayWithObjects:"),
    arrayWithObjectsCount: staticSelector("arrayWithObjects:count:"),

    // Querying an array
    containsObject: instanceSelector("containsObject:"),
    count: instanceProperty({ set: null }),
    firstObject: instanceProperty(),
    lastObject: instanceProperty(),
    objectAtIndex: instanceSelector("objectAtIndex:"),
    objectEnumerator: instanceSelector(),
    reverseObjectEnumerator: instanceSelector(),

    // Finding objects in an array
    indexOfObject: instanceSelector("indexOfObject:"),

    // Comparing arrays
    firstObjectCommonWithArray: instanceSelector("firstObjectCommonWithArray:"),
    isEqualToArray: instanceSelector("isEqualToArray:"),

    // Deriving new arrays
    arrayByAddingObject: instanceSelector("arrayByAddingObject:"),
    arrayByAddingObjectsFromArray: instanceSelector("arrayByAddingObjectsFromArray:"),

    // Working with string elements
    componentsJoinedByString: instanceSelector("componentsJoinedByString:"),

    // Creating a description
    description: instanceProperty({ set: null }),
    writeToFile: instanceSelector("writeToFile:atomically:"),

    // Key-Value coding
    setValue: instanceSelector("setValue:forKey:"),
    valueForKey: instanceSelector("valueForKey:"),
}));

NSArray.prototype[Symbol.iterator] = function () {
    return this.objectEnumerator()[Symbol.iterator]();
};

NSArray.prototype.toJSArray = function () {
    let rv = new Array(this.count);
    
    let i = 0;
    for (let value of this)
        rv[i++] = value;

    return rv;
};

