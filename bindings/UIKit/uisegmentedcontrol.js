// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UISegmentedControl");
exports.UISegmentedControl = UISegmentedControl = UIControl.extendClass ("UISegmentedControl", {

    // Initializing a Segmented Control
    initWithItems: objc.instanceSelector("initWithItems:"),

    // Managing Segment Content
    setImage: objc.instanceSelector("setImage:forSegmentAtIndex:"),
    image:    objc.instanceSelector("imageForSegmentAtIndex:"),
    setTitle: objc.instanceSelector("setTitle:forSegmentAtIndex:"),
    title:    objc.instanceSelector("titleForSegmentAtIndex:"),

    // Managing Segments
    insertSegmentWithImage: objc.instanceSelector("insertSegmentWithImage:atIndex:animated:"),
    insertSegmentWithTitle: objc.instanceSelector("insertSegmentWithTitle:atIndex:animated:"),
    removeSegment:          objc.instanceSelector("removeSegmentAtIndex:animated:"),
    removeAllSegments:      objc.instanceSelector("removeAllSegments"),
    numberOfSegments: objc.instanceProperty(),
    selectedSegmentIndex: objc.instanceProperty(),

    // Managing Segment Behavior and Appearance
    setEnabled:       objc.instanceSelector("setEnabled:forSegmentAtIndex:"),
    isEnabled:        objc.instanceSelector("isEnabledForSegmentAtIndex:"),
    setContentOffset: objc.instanceSelector("setContentOffset:forSegmentAtIndex:"),
    contentOffset:    objc.instanceSelector("contentOffsetForSegmentAtIndex:"),
    setWidth:         objc.instanceSelector("setWidth:forSegmentAtIndex:"),
    width:            objc.instanceSelector("widthForSegmentAtIndex:"),
    momentary: objc.instanceProperty(),
    segmentedControlStyle: objc.instanceProperty(),
    apportionsSegmentWidthsByContent: objc.instanceProperty(),

    // Customizing Appearance
    tintColor: objc.instanceProperty().makeUIAppearance(),
    backgroundImage:              objc.instanceSelector("backgroundImageForState:barMetrics:").makeUIAppearance(),
    setBackgroundImage:           objc.instanceSelector("setBackgroundImage:forState:barMetrics:").makeUIAppearance(),
    contentPositionAdjustment:    objc.instanceSelector("contentPositionAdjustmentForSegmentType:barMetrics:").makeUIAppearance(),
    setContentPositionAdjustment: objc.instanceSelector("setContentPositionAdjustment:forSegmentType:barMetrics:").makeUIAppearance(),
    dividerImage:                 objc.instanceSelector("dividerImageForLeftSegmentState:rightSegmentState:barMetrics:").makeUIAppearance(),
    setDividerImage:              objc.instanceSelector("setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics:").makeUIAppearance(),
    titleTextAttributes:          objc.instanceSelector("titleTextAttributesForState:").makeUIAppearance(),
    setTitleTextAttributes:       objc.instanceSelector("setTitleTextAttributes:forState:").makeUIAppearance()

});