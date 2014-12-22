// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from 'nsobject';

export let NSDictionary = NSObject.extendClass("NSDictionary", () => ({

    // Creating a dictionary
    dictionary: staticSelector(),
    dictionaryWithContentsOfFile: staticSelector("dictionaryWithContentsOfFile:"),
    dictionaryWithDictionary: staticSelector("dictionaryWithDictionary:"),
    dictionaryWithObjectForKey: staticSelector("dictionaryWithObject:forKey:"),
    dictionaryWithObjectsForKeys: staticSelector("dictionaryWithObjects:forKeys:"),
    dictionaryWithObjectsForKeysCount: staticSelector("dictionaryWithObjects:forKeys:count:"),

    // Counting entries
    count: instanceProperty({ set: null }),

    // Comparing dictionaries
    isEqualToDictionary: instanceSelector("isEqualToDictionary:"),

    // Accessing Keys and Values
    allKeys: instanceProperty({ set: null }),
    allValues: instanceProperty({ set: null }),
    objectForKey: instanceSelector("objectForKey:"),
    valueForKey: instanceSelector("valueForKey:"),

    // Enumerating dictionaries
    keyEnumerator: instanceSelector(),
    objectEnumerator: instanceSelector(),

    // Storing dictionaries
    writeToFileAtomically: instanceSelector("writeToFile:atomically:"),

    // Creating a description
    description: instanceProperty({ set: null }),
}));

