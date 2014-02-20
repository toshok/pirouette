// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UISwitch");
var UISwitch;
_exports.UISwitch = UISwitch = UIControl.extendClass ("UISwitch", () => ({

    // Initializing the Switch Object
    initWithFrame: objc.instanceSelector("initWithFrame:"),

    // Setting the Off/On State
    on: objc.instanceProperty({ set: function (v) { return this.setOn(v, false); } }),
    setOn: objc.instanceSelector("setOn:animated:"),

    // Customizing the Appearance of the Switch
    onTintColor: objc.instanceProperty()

}));
