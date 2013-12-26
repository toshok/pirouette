// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIProgressView");
var UIProgressView;
_exports.UIProgressView = UIProgressView = UIView.extendClass ("UIProgressView", () => { return {

    // Initializing the UIProgressView Object
    initWithProgressViewStyle: objc.instanceSelector("initWithProgressViewStyle:"),

    // Managing the Progress Bar
    progress: objc.instanceProperty({ set: function (v) { return this.setProgress(v, false); } }),
    setProgress: objc.instanceSelector("setProgress:animated:"),

    // Configuring the Progress Bar
    progressViewStyle: objc.instanceProperty(),
    progressTintColor: objc.instanceProperty(),
    progressImage: objc.instanceProperty(),
    trackTintColor: objc.instanceProperty(),
    trackImage: objc.instanceProperty()

}; });
