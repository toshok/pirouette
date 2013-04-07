// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.TWTweetComposeViewController = TWTweetComposeViewController = objc.bindClass(ui.UIViewController,
  function TWTweetComposeViewController () {
    return TWTweetComposeViewController.__super__.constructor.apply(this, arguments);
  }, {

    // Checking Status
    canSendTweet: objc.staticSelector("canSendTweet"),

    // Composing Tweets
    setInitialText: objc.instanceSelector("setInitialText:"),
    addImage: objc.instanceSelector("addImage:"),
    addURL: objc.instanceSelector("addURL:"),
    removeAllImages: objc.instanceSelector("removeAllImages"),
    removeAllURLs: objc.instanceSelector("removeAllURLs"),

    // Handling Results
    completionHandler: objc.instanceProperty()

});
