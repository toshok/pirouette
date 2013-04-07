// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAConstraintLayoutManager = CAConstraintLayoutManager = objc.bindClass(foundation.NSObject,
  function CAConstraintLayoutManager () {
    return CAConstraintLayoutManager.__super__.constructor.apply(this, arguments);
  }, {

    // Creating the Layout Manager
    layoutManager: objc.staticSelector("layoutManager")

});
