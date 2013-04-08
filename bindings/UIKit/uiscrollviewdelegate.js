// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIScrollViewDelegate");
exports.UIScrollViewDelegate = UIScrollViewDelegate = objc.bindProtocol(foundation.Protocol,
  function UIScrollViewDelegate () {
    return UIScrollViewDelegate.__super__.constructor.apply(this, arguments);
  }, {

    // Responding to Scrolling and Dragging
    didScroll:             objc.optionalMethod("scrollViewDidScroll:"),
    willBeginDragging:     objc.optionalMethod("scrollViewWillBeginDragging:"),
    willEndDragging:       objc.optionalMethod("scrollViewWillEndDragging:withVelocity:targetContentOffset:"),
    didEndDragging:        objc.optionalMethod("scrollViewDidEndDragging:willDecelerate:"),
    shouldScrollToTop:     objc.optionalMethod("scrollViewShouldScrollToTop:"),
    didScrollToTop:        objc.optionalMethod("scrollViewDidScrollToTop:"),
    willBeginDecelerating: objc.optionalMethod("scrollViewWillBeginDecelerating:"),
    didEndDecelerating:    objc.optionalMethod("scrollViewDidEndDecelerating:"),

    // Managing Zooming
    viewForZoomingInScrollView: objc.optionalMethod("viewForZoomingInScrollView:"),
    willBeginZooming:           objc.optionalMethod("scrollViewWillBeginZooming:withView:"),
    didEndZooming:              objc.optionalMethod("scrollViewDidEndZooming:withView:atScale:"),
    didZoom:                    objc.optionalMethod("scrollViewDidZoom:"),

    // Responding to Scrolling Animations
    didEndScrollingAnimation:   objc.optionalMethod("scrollViewDidEndScrollingAnimation:")

});