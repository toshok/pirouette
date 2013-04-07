// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log "UISwipeGestureRecognizer"
exports.UISwipeGestureRecognizer = UISwipeGestureRecognizer = objc.bindClass(UIGestureRecognizer,
  function UISwipeGestureRecognizer () {
    return UISwipeGestureRecognizer.__super__.constructor.apply(this, arguments);
  }, {

    // Configuring the Gesture
    direction: objc.instanceProperty(),
    numberOfTouchesRequired: objc.instanceProperty()

});
