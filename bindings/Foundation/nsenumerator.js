// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from 'nsobject';

export let NSEnumerator = NSObject.extendClass("NSEnumerator", () => ({

    allObjects: instanceProperty(),
    nextObject: instanceSelector()

}));

// Let an enumerator be enumerable itself using for..of
NSEnumerator.prototype[Symbol.iterator] = function () {
    let _this = this;

    return {
        next: function() {
            let value = _this.nextObject();
            return value == null ? { done: true } : { done: false, value: value };
        }
    };
};

