// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKCircleView = MKCircleView = objc.bindClass(MKOverlayPathView,
  function MKCircleView () {
    return MKCircleView.__super__.constructor.apply(this, arguments);
  }, {

    // MethodGroup
    initWithCircle: objc.instanceSelector("initWithCircle:"),
    circle: objc.instanceProperty()

});
