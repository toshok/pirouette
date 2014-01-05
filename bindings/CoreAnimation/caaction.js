// This file is part of coffeekit.  for licensing information, see the LICENSE file

var CAAction;
exports.CAAction = CAAction = foundation.Protocol.extendClass("CAAction", () => ({

    runAction:  objc.optionalMethod("runActionForKey:object:arguments:")

}));
