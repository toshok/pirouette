// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIPrintInfo");

export let UIPrintPageInteractionController = NSObject.extendClass ("UIPrintPageInteractionController", () => ({

    // Creating a UIPrintInfo Object
    printInfo:               staticSelector("printInfo"),
    printInfoWithDictionary: staticSelector("printInfoWithDictionary:"),
    dictionaryRepresentation: instanceSelector("dictionaryRepresentation"),

    // Getting and Setting Print-Job Attributes
    duplex: instanceProperty(),
    jobName: instanceProperty(),
    orientation: instanceProperty(),
    outputType: instanceProperty(),
    printerID: instanceProperty()

}));
