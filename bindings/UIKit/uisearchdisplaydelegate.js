// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISearchDisplayDelegate");
var UISearchDisplayDelegate;
_exports.UISearchDisplayDelegate = UISearchDisplayDelegate = foundation.Protocol.extendClass("UISearchDisplayDelegate", () => { return {

    // Search State Change
    willBeginSearch: objc.optionalMethod("searchDisplayControllerWillBeginSearch:"),
    didBeginSearch:  objc.optionalMethod("searchDisplayControllerDidBeginSearch:"),
    willEndSearch:   objc.optionalMethod("searchDisplayControllerWillEndSearch:"),
    didEndSearch:    objc.optionalMethod("searchDisplayControllerDidEndSearch:"),

    // Loading and Unloading the Table View
    didLoadSearchResultsTableView:    objc.optionalMethod("searchDisplayController:didLoadSearchResultsTableView:"),
    willUnloadSearchResultsTableView: objc.optionalMethod("searchDisplayController:willUnloadSearchResultsTableView:"),

    // Showing and Hiding the Table View
    willShowSearchResultsTableView: objc.optionalMethod("searchDisplayController:willShowSearchResultsTableView:"),
    didShowSearchResultsTableView:  objc.optionalMethod("searchDisplayController:didShowSearchResultsTableView:"),
    willHideSearchResultsTableView: objc.optionalMethod("searchDisplayController:willHideSearchResultsTableView:"),
    didHideSearchResultsTableView:  objc.optionalMethod("searchDisplayController:didHideSearchResultsTableView:"),

    // Responding to Changes in Search Criteria
    shouldReloadTableForSearchString: objc.optionalMethod("searchDisplayController:shouldReloadTableForSearchString:"),
    shouldReloadTableForSearchScope:  objc.optionalMethod("searchDisplayController:shouldReloadTableForSearchScope:")

}; });
