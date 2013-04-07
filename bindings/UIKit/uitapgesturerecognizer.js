// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITapGestureRecognizer");
exports.UITapGestureRecognizer = UITapGestureRecognizer = objc.bindClass(UIGestureRecognizer,
  function UITapGestureRecognizer () {
    return UITapGestureRecognizer.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Gesture
    numberOfTapsRequired: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty()

});