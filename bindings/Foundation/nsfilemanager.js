// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, staticProperty, staticSelector } from '../objc';
import { NSObject } from 'nsobject';

export let NSFileManager = NSObject.extendClass("NSFileManager", () => ({

    defaultManager: staticSelector(),

    // Discovering directory contents
    enumeratorAtPath: instanceSelector("enumeratorAtPath:"),
    subpathsAtPath: instanceSelector("subpathsAtPath:"),

    // Determining access to files
    fileExistsAtPath: instanceSelector("fileExistsAtPath:"),
    fileExistsAtPathIsDirectory: instanceSelector("fileExistsAtPath:isDirectory:"),
    isReadableFileAtPath: instanceSelector("isReadableFileAtPath:"),
    isWritableFileAtPath: instanceSelector("isWritableFileAtPath:"),
    isExecutableFileAtPath: instanceSelector("isExecutableFileAtPath:"),
    isDeletableFileAtPath: instanceSelector("isDeletableFileAtPath:"),

    // Getting and setting attributes
    componentsToDisplayForPath: instanceSelector("componentsToDisplayForPath:"),
    displayNameAtPath: instanceSelector("displayNameAtPath:"),

    // Getting and comparing file contents
    contentsAtPath: instanceSelector("contentsAtPath:"),
    contentsEqualAtPathAndPath: instanceSelector("contentsEqualAtPath:andPath:"),

    // Managing the delegate
    //delegate: instanceProperty({ get: null }),

    // Managing the current directory
    changeCurrentDirectoryPath: instanceSelector("changeCurrentDirectoryPath:"),
    currentDirectoryPath: instanceProperty({ set: null }),
}));

