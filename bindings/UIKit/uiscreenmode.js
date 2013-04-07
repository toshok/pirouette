// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIScreenMode");
exports.UIScreenMode = UIScreenMode = objc.bindClass(foundation.NSObject,
  function UIScreenMode () {
    return UIScreenMode.__super__.constructor.apply(this, arguments);
  }, {

    // Accessing the Screen Mode Attributes
    size: objc.instanceProperty(),
    pixelAspectRatio: objc.instanceProperty()
});
