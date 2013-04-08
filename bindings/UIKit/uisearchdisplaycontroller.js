// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISearchDisplayController");
exports.UISearchDisplayController = UISearchDisplayController = foundation.NSObject.extendClass ("UISearchDisplayController", {

    // Initialization
    initWithSearchBar: objc.instanceSelector("initWithSearchBar:contentsController:"),

    // Displaying the Search Interface
    active:                   objc.instanceProperty ({ set: function(v) { return this.setActive(v, false); } }),
    setActive:                objc.instanceSelector("setActive:animated:"),

    // Configuration
    delegate:                 autoboxProperty(UISearchDisplayDelegate),
    searchBar:                objc.instanceProperty(),
    searchContentsController: objc.instanceProperty(),
    searchResultsTableView:   objc.instanceProperty(),
    searchResultsDataSource:  objc.instanceProperty(),
    searchResultsDelegate:    objc.instanceProperty(),
    searchResultsTitle:       objc.instanceProperty()

});