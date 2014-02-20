// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIPageControl");
var UIPageControl;
_exports.UIPageControl = UIPageControl = UIControl.extendClass ("UIPageControl", () => ({

    // Managing the Page Navigation
    currentPage: objc.instanceProperty(),
    numberOfPages: objc.instanceProperty(),
    hidesForSinglePage: objc.instanceProperty(),

    // Updating the Page Display
    defersCurrentPageDisplay:         objc.instanceProperty(),
    updateCurrentPageDisplay: objc.instanceSelector("updateCurrentPageDisplay"),

    // Resizing the Control
    sizeForNumberOfPages: objc.instanceSelector("sizeForNumberOfPages:")

}));
