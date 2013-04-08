// This file is part of coffeekit.  for licensing information, see the LICENSE file

let objc = require('objc'),
    objc_internal = require('objc_internal'),
    foundation = require("foundation");

objc.requireFramework("AppKit");

exports.NSButtonType = NSButtonType = objc.makeEnum({
   MomentaryLightButton   : 0,
   PushOnPushOffButton    : 1,
   ToggleButton           : 2,
   SwitchButton           : 3,
   RadioButton            : 4,
   MomentaryChangeButton  : 5,
   OnOffButton            : 6,
   MomentaryPushInButton  : 7,
   MomentaryPushButton    : 0,
   MomentaryLight         : 7
});


exports.NSBezelStyle = NSBezelStyle = objc.makeEnum({
   RoundedBezelStyle           : 1,
   RegularSquareBezelStyle     : 2,
   ThickSquareBezelStyle       : 3,
   ThickerSquareBezelStyle     : 4,
   DisclosureBezelStyle        : 5,
   ShadowlessSquareBezelStyle  : 6,
   CircularBezelStyle          : 7,
   TexturedSquareBezelStyle    : 8,
   HelpButtonBezelStyle        : 9,
   SmallSquareBezelStyle       : 10,
   TexturedRoundedBezelStyle   : 11,
   RoundRectBezelStyle         : 12,
   RecessedBezelStyle          : 13,
   RoundedDisclosureBezelStyle : 14,
   InlineBezelStyle            : 15,
   SmallIconButtonBezelStyle   : 2
});
