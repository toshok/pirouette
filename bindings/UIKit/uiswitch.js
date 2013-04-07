// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISwitch");
exports.UISwitch = UISwitch = objc.bindClass(UIControl,
  function UISwitch () {
    return UISwitch.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing the Switch Object
    initWithFrame: objc.instanceSelector("initWithFrame:"),

    // Setting the Off/On State
    on: objc.instanceProperty({ set: function (v) { return this.setOn(v, false); } }),
    setOn: objc.instanceSelector("setOn:animated:"),

    // Customizing the Appearance of the Switch
    onTintColor: objc.instanceProperty()

});