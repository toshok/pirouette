// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIWebView");
exports.UIWebView = UIWebView = UIView.extendClass ("UIWebView", {

    // Setting the Delegate
    delegate: objc.autoboxProperty(UIWebViewDelegate),

    // Loading Content
    loadData:       objc.instanceSelector("loadData:MIMEType:textEncodingName:baseURL:"),
    loadHTMLString: objc.instanceSelector("loadHTMLString:baseURL:"),
    loadRequest:    objc.instanceSelector("loadRequest:"),
    stopLoading:    objc.instanceSelector("stopLoading"),
    reload:         objc.instanceSelector("reload"),
    loading: objc.instanceProperty(),
    request: objc.instanceProperty(),

    // Moving Back and Forward
    goBack:    objc.instanceSelector("goBack"),
    goForward: objc.instanceSelector("goForward"),
    canGoBack: objc.instanceProperty(),
    canGoForward: objc.instanceProperty(),

    // Setting Web Content Properties
    scalesPageToFit: objc.instanceProperty(),
    scrollView: objc.instanceProperty(),
    detectsPhoneNumbers: objc.instanceProperty(), // Deprecated in iOS 3.0

    // Running JavaScript
    stringByEvaluatingJavaScriptFromString: objc.instanceSelector("stringByEvaluatingJavaScriptFromString:"),

    // Detecting Types of Data
    dataDetectorTypes: objc.instanceProperty(),

    // Managing Media Playback
    allowsInlineMediaPlayback: objc.instanceProperty(),
    mediaPlaybackRequiresUserAction: objc.instanceProperty(),
    mediaPlaybackAllowsAirPlay: objc.instanceProperty()

});