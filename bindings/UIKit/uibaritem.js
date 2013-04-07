// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIBarItem");
exports.UIBarItem = UIBarItem = objc.bindClass(UIView,
  function UIBarItem () {
    return UIBarItem.__super__.constructor.apply(this, arguments);
  }, {

    // Getting and Setting Properties
    enabled: objc.instanceProperty(),
    image: objc.instanceProperty(),
    landscapeImagePhone: objc.instanceProperty(),
    imageInsets: objc.instanceProperty(),
    landscapeImagePhoneInsets: objc.instanceProperty(),
    title: objc.instanceProperty(),
    tag: objc.instanceProperty(),

    // Customizing Appearance
    setTitleTextAttributes: objc.instanceSelector("setTitleTextAttributes:forState:"),
    getTitleTextAttributes: objc.instanceSelector("titleTextAttributesForState:")

});