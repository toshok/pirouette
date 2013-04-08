// This file is part of coffeekit.  for licensing information, see the LICENSE file

let objc = require("objc"),
    objc_internal = require("objc_internal");


objc.requireFramework("Foundation");

exports.NSComparisonResult = NSComparisonResult = objc.makeEnum({
    getTypeSignature: function() { return "i"; },

    ascending: -1,
    same:       0,
    descending: 1
});
