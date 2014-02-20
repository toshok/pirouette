// This file is part of Pirouette.  for licensing information, see the LICENSE file
"use strict";

let objc = require("objc"),
    objc_internal = require("objc_internal");


objc.requireFramework("Foundation");

let _exports = exports;

var NSComparisonResult;
_exports.NSComparisonResult = NSComparisonResult = objc.makeEnum({
    getTypeSignature: function() { return "i"; },

    ascending: -1,
    same:       0,
    descending: 1
});
