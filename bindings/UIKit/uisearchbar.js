// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISearchBar");
exports.UISearchBar = UISearchBar = UIView.extendClass ("UISearchBar", {

    // Text Content
    placeholder: objc.instanceProperty(),
    prompt: objc.instanceProperty(),
    text: objc.instanceProperty(),

    // Display Attributes
    barStyle: objc.instanceProperty(),
    tintColor: objc.instanceProperty(),
    translucent: objc.instanceProperty(),

    // Text Input Properties
    autocapitalizationType: objc.instanceProperty(),
    autocorrectionType: objc.instanceProperty(),
    keyboardType: objc.instanceProperty(),
    spellCheckingType: objc.instanceProperty(),

    // Button Configuration
    showsBookmarkButton: objc.instanceProperty(),
    showsCancelButton: objc.instanceProperty({ set: function (v) { return this.setShowsCancelButton (v, false); } }),
    setShowsCancelButton: objc.instanceSelector("setShowsCancelButton:animated:"),
    showsSearchResultsButton: objc.instanceProperty(),
    searchResultsButtonSelected: objc.instanceProperty(),

    // Scope Buttons
    scopeButtonTitles: objc.instanceProperty(),
    selectedScopeButtonIndex: objc.instanceProperty(),
    showsScopeBar: objc.instanceProperty(),

    // Delegate
    delegate: objc.autoboxProperty(UISearchBar),

    // Customizing Appearance
    imageForSearchBarIcon:                 objc.instanceSelector("imageForSearchBarIcon:state:"),
    setImageForSearchBarIcon:              objc.instanceSelector("setImage:forSearchBarIcon:state:"),
    positionAdjustmentForSearchBarIcon:    objc.instanceSelector("positionAdjustmentForSearchBarIcon:"),
    setPositionAdjustmentForSearchBarIcon: objc.instanceSelector("setPositionAdjustment:forSearchBarIcon:"),
    scopeBarButtonBackgroundImage:         objc.instanceSelector("scopeBarButtonBackgroundImageForState:"),
    setScopeBarButtonBackgroundImage:      objc.instanceSelector("setScopeBarButtonBackgroundImage:forState:"),
    scopeBarButtonDividerImage:            objc.instanceSelector("scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:"),
    setScopeBarButtonDividerImage:         objc.instanceSelector("setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:"),
    scopeBarButtonTitleTextAttributes:     objc.instanceSelector("scopeBarButtonTitleTextAttributesForState:"),
    setScopeBarButtonTitleTextAttributes:  objc.instanceSelector("setScopeBarButtonTitleTextAttributes:forState:"),
    searchFieldBackgroundImage:            objc.instanceSelector("searchFieldBackgroundImageForState:"),
    setSearchFieldBackgroundImage:         objc.instanceSelector("setSearchFieldBackgroundImage:forState:"),
    backgroundImage: objc.instanceProperty(),
    scopeBarBackgroundImage: objc.instanceProperty(),
    searchFieldBackgroundPositionAdjustment: objc.instanceProperty(),
    searchTextPositionAdjustment: objc.instanceProperty()

});
