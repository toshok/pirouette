import { makeEnum } from '../objc';

export let NSButtonType = makeEnum({
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


export let NSBezelStyle = makeEnum({
   Rounded           : 1,
   RegularSquare     : 2,
   ThickSquare       : 3,
   ThickerSquare     : 4,
   Disclosure        : 5,
   ShadowlessSquare  : 6,
   Circular          : 7,
   TexturedSquare    : 8,
   HelpButton        : 9,
   SmallSquare       : 10,
   TexturedRounded   : 11,
   RoundRect         : 12,
   Recessed          : 13,
   RoundedDisclosure : 14,
   Inline            : 15,
   SmallIconButton   : 2
});

export let NSDatePickerStyle = makeEnum({
    TextFieldAndStepper:    0,
    ClockAndCalendar:       1,
    TextField:              2
});

export let NSDatePickerMode = makeEnum({
    Single:     0,
    Range:      1
});

