// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSControl = NSControl = objc.bindClass(NSView,
  function NSControl () {
    NSControl.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing an NSControl
    initWithFrame: objc.instanceSelector("initWithFrame:"),

    // Setting the Control’s Cell
    cellClass: objc.instanceProperty(),
    cell: objc.instanceProperty(),

    // Enabling and Disabling the Control
    enabled: objc.instanceProperty({ get: "isEnabled" }),

    // Identifying the Selected Cell
    selectedCell: objc.instanceSelector("selectedCell"),
    selectedTag: objc.instanceSelector("selectedTag"),

    // Setting the Control’s Value
    doubleValue: objc.instanceProperty(),
    floatValue: objc.instanceProperty(),
    intValue: objc.instanceProperty(),
    integerValue: objc.instanceProperty(),
    objectValue: objc.instanceProperty(),
    stringValue: objc.instanceProperty(),
    attributedStringValue: objc.instanceProperty(),
    setNeedsDisplay: objc.instanceSelector("setNeedsDisplay"),

    // Interacting with Other Controls
    takeDoubleValueFrom: objc.instanceSelector("takeDoubleValueFrom:"),
    takeFloatValueFrom: objc.instanceSelector("takeFloatValueFrom:"),
    takeIntValueFrom: objc.instanceSelector("takeIntValueFrom:"),
    takeIntegerValueFrom: objc.instanceSelector("takeIntegerValueFrom:"),
    takeObjectValueFrom: objc.instanceSelector("takeObjectValueFrom:"),
    takeStringValueFrom: objc.instanceSelector("takeStringValueFrom:"),

    // Formatting Text
    alignment: objc.instanceProperty(),
    font: objc.instanceProperty(),
    formatter: objc.instanceProperty(),
    baseWritingDirection: objc.instanceProperty(),
    setFloatingPointFormat: objc.instanceSelector("setFloatingPointFormat:left:right:"), // Deprecated in Mac OS X v10.0

    // Managing the Field Editor
    abortEditing: objc.instanceSelector("abortEditing"),
    currentEditor: objc.instanceSelector("currentEditor"),
    validateEditing: objc.instanceSelector("validateEditing"),

    // Resizing the Control
    calcSize: objc.instanceSelector("calcSize"),
    sizeToFit: objc.instanceSelector("sizeToFit"),

    // Displaying a Cell
    selectCell: objc.instanceSelector("selectCell:"),
    drawCell: objc.instanceSelector("drawCell:"),
    drawCellInside: objc.instanceSelector("drawCellInside:"),
    updateCell: objc.instanceSelector("updateCell:"),
    updateCellInside: objc.instanceSelector("updateCellInside:"),

    // Implementing the Target/action Mechanism
    action: objc.instanceProperty(),
    target: objc.instanceProperty(),
    continuous: objc.instanceProperty({ get: "isContinuous" }),
    sendActionTo: objc.instanceSelector("sendAction:to:"),
    sendActionOn: objc.instanceSelector("sendActionOn:"),

    // Getting and Setting Tags
    tag: objc.instanceProperty(),

    // Activating from the Keyboard
    performClick: objc.instanceSelector("performClick:"),
    refusesFirstResponder: objc.instanceSelector("refusesFirstResponder"),
    setRefusesFirstResponder: objc.instanceSelector("setRefusesFirstResponder:"),

    // Tracking the Mouse
    mouseDown: objc.instanceSelector("mouseDown:"),
    ignoresMultiClick: objc.instanceProperty(),

    // Control Editing Notifications
    controlTextDidBeginEditing: objc.instanceSelector("controlTextDidBeginEditing:"),  // delegate method
    controlTextDidChange: objc.instanceSelector("controlTextDidChange:"),  // delegate method
    controlTextDidEndEditing: objc.instanceSelector("controlTextDidEndEditing:"),  // delegate method

    // Supporting Constraint-Based Layout
    invalidateIntrinsicContentSizeForCell: objc.instanceSelector("invalidateIntrinsicContentSizeForCell:"),

});


exports.NSControlProxy = NSControlProxy = objc.bindClass(foundation.NSObject,
  function NSControlProxy (fn) {
    NSControlProxy.__super__.constructor.apply(this, arguments);
    this.fn = fn;
  }, {

    proxyAction: objc.instanceSelector("action").
                               returns( () => ck.sig.Void).
			        params( () => [foundation.NSObject]).
				  impl( () => @fn())

});
