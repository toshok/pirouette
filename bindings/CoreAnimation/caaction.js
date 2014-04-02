// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

export let CAAction = foundation.Protocol.extendClass("CAAction", () => ({

    runAction:  objc.optionalMethod("runActionForKey:object:arguments:")

}));
