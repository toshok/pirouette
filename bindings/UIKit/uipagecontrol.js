// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIPageControl");
exports.UIPageControl = UIPageControl = objc.bindClass(UIControl,
  function UIPageControl () {
    return UIPageControl.__super__.constructor.apply(this, arguments);
  }, {

    // Managing the Page Navigation
    currentPage: objc.instanceProperty(),
    numberOfPages: objc.instanceProperty(),
    hidesForSinglePage: objc.instanceProperty(),

    // Updating the Page Display
    defersCurrentPageDisplay:         objc.instanceProperty(),
    updateCurrentPageDisplay: objc.instanceSelector("updateCurrentPageDisplay"),

    // Resizing the Control
    sizeForNumberOfPages: objc.instanceSelector("sizeForNumberOfPages:")

});
