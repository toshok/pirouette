// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIStoryboardSegue");
var UIStoryboardSegue;
_exports.UIStoryboardSegue = UIStoryboardSegue = foundation.NSObject.extendClass ("UIStoryboardSegue", () => { return {

    // Initializing a Storyboard Segue
    initWithIdentifier: objc.instanceSelector("initWithIdentifier:source:destination:"),

    // Accessing the Segue Attributes
    sourceViewController: objc.instanceProperty(),
    destinationViewController: objc.instanceProperty(),
    identifier: objc.instanceProperty(),

    // Performing the Segue
    perform: objc.instanceSelector("perform")

}; });
