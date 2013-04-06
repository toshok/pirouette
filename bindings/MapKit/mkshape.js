// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.MKShape = MKShape = objc.bindClass(foundation.NSObject,
  function MKShape () {
    return MKShape.__super__.constructor.apply(this, arguments);
  }, {

    // Accessing the Shape Attributes
    title: objc.instanceProperty(),
    subtitle: objc.instanceProperty()

});
