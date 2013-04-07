// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIProgressView");
exports.UIProgressView = UIProgressView = objc.bindClass(UIView,
  function UIProgressView () {
    return UIProgressView.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing the UIProgressView Object
    initWithProgressViewStyle: objc.instanceSelector("initWithProgressViewStyle:"),

    // Managing the Progress Bar
    progress: objc.instanceProperty({ set: (v) => this.setProgress(v, false) }),
    setProgress: objc.instanceSelector("setProgress:animated:"),

    // Configuring the Progress Bar
    progressViewStyle: objc.instanceProperty(),
    progressTintColor: objc.instanceProperty(),
    progressImage: objc.instanceProperty(),
    trackTintColor: objc.instanceProperty(),
    trackImage: objc.instanceProperty()

});
