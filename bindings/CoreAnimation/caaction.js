// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.CAAction = CAAction = objc.bindProtocol(foundation.Protocol,
  function CAAction () {
    return CAAction.__super__.constructor.apply(this, arguments);
  }, {

    runAction:  objc.optionalMethod("runActionForKey:object:arguments:")

});
