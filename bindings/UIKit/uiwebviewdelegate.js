// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIWebViewDelegate");
exports.UIWebViewDelegate = UIWebViewDelegate = objc.bindProtocol(foundation.Protocol,
  function UIWebViewDelegate () {
    return UIWebViewDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Loading Content
    shouldStartLoad: objc.optionalMethod("webView:shouldStartLoadWithRequest:navigationType:"),
    didStartLoad:    objc.optionalMethod("webViewDidStartLoad:"),
    didFinishLoad:   objc.optionalMethod("webViewDidFinishLoad:"),
    didFailLoad:     objc.optionalMethod("webView:didFailLoadWithError:")

});