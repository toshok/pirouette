// This file is part of Pirouette.  for licensing information, see the LICENSE file
"use strict";

let objc = require("objc"),
    objc_internal = require("objc_internal"),
    foundation = require("foundation"),
    coreAnimation = require("coreanimation"),
    ck = require("coffeekit");

objc.requireFramework("UIKit");

let _exports = exports;

let UITableViewStyle;
_exports.UITableViewStyle = UITableViewStyle = objc.makeEnum({
    plain: 0,
    grouped: 1
});


let UITableViewCellStyle;
_exports.UITableViewCellStyle = UITableViewCellStyle = objc.makeEnum({
   value1: 0,
   value2: 1,
   subtitle: 2
});

let UIButtonType;
_exports.UIButtonType = UIButtonType = objc.makeEnum({
   custom: 0,
   roundedRect: 1,
   detailDisclosure: 2,
   infoLight: 3,
   infoDark: 4,
   contactAdd: 5
});

let UITextAlignment;
_exports.UITextAlignment = UITextAlignment = objc.makeEnum({
   left: 0,
   center: 1,
   right: 2
});

let UIControlState;
_exports.UIControlState = UIControlState = objc.makeEnum({
   normal               : 0,
   highlighted          : 1 << 0,
   disabled             : 1 << 1,
   selected             : 1 << 2,
   application          : 0x00FF0000,
   reserved             : 0xFF000000
});

let UIBarStyle;
_exports.UIBarStyle = UIBarStyle = objc.makeEnum({
   default          : 0,
   black            : 1,

   blackOpaque      : 1, // Deprecated
   blackTranslucent : 2  //Deprecated
});


let UIDataDetectorType;
_exports.UIDataDetectorType = UIDataDetectorType = objc.makeEnum({
   phoneNumber   : 1 << 0,
   link          : 1 << 1,
   address       : 1 << 2,
   calendarEvent : 1 << 3,
   none          : 0,
   all           : ~0
});


let UIBarButtonItemStye;
_exports.UIBarButtonItemStyle = UIBarButtonItemStye = objc.makeEnum({
   plain: 0,
   bordered: 1,
   done: 2
});

let UIBarButtonSystemItem;
_exports.UIBarButtonSystemItem = UIBarButtonSystemItem = objc.makeEnum({
   done: 0,
   cancel: 1,
   edit: 2,
   save: 3,
   add: 4,
   flexibleSpace: 5,
   fixedSpace: 6,
   compose: 7,
   reply: 8,
   action: 9,
   organize: 10,
   bookmarks: 11,
   search: 12,
   refresh: 13,
   stop: 14,
   camera: 15,
   trash: 16,
   play: 17,
   pause: 18,
   rewind: 19,
   fastForward: 20,
   undo: 21,        // iOS 3.0 and later
   redo: 22,        // iOS 3.0 and later
   pageCurl: 23     // iOS 4.0 and later
});


let UIControlEvent;
_exports.UIControlEvent = UIControlEvent = objc.makeEnum({
   TouchDown           : 1 <<  0,
   TouchDownRepeat     : 1 <<  1,
   TouchDragInside     : 1 <<  2,
   TouchDragOutside    : 1 <<  3,
   TouchDragEnter      : 1 <<  4,
   TouchDragExit       : 1 <<  5,
   TouchUpInside       : 1 <<  6,
   TouchUpOutside      : 1 <<  7,
   TouchCancel         : 1 <<  8,

   ValueChanged        : 1 << 12,

   EditingDidBegin     : 1 << 16,
   EditingChanged      : 1 << 17,
   EditingDidEnd       : 1 << 18,
   EditingDidEndOnExit : 1 << 19,

   AllTouchEvents      : 0x00000FFF,
   AllEditingEvents    : 0x000F0000,
   ApplicationReserved : 0x0F000000,
   SystemReserved      : 0xF0000000,
   AllEvents           : 0xFFFFFFFF
});

let UIPopoverArrowDirection;
_exports.UIPopoverArrowDirection = UIPopoverArrowDirection = objc.makeEnum({
   up:       1 << 0,
   down:     1 << 1,
   left:     1 << 2,
   right:    1 << 3,
   any:      (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3),
   unknown: ~0
});

let UIUserInterfaceIdiom;
_exports.UIUserInterfaceIdiom = UIUserInterfaceIdiom = objc.makeEnum({
   phone: 0,
   pad: 1
});
