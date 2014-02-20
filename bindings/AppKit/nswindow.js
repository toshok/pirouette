// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSWindow;
_exports.NSWindow = NSWindow = foundation.NSResponder.extendClass("NSWindow", () => ({

  // Creating Windows
  initWithContentRect: objc.instanceSelector("initWithContentRect:styleMask:backing:defer:"),
  initWithContentRectOnScreen: objc.instanceSelector("initWithContentRect:styleMask:backing:defer:screen:"),

  // Configuring Windows
  styleMask: objc.instanceProperty(),

  toggleFullScreen: objc.instanceSelector("toggleFullScreen:"),
  worksWhenModal: objc.instanceSelector(),
  alphaValue: objc.instanceProperty(),

  backgroundColor: objc.instanceProperty(),

  colorSpace: objc.instanceProperty(),

  contentView: objc.instanceProperty(),

  canHide: objc.instanceProperty(),

  isOnActiveSpace: objc.instanceSelector(),
  hidesOnDeactivate: objc.instanceProperty(),

  collectionBehavior: objc.instanceProperty(),

  isOpaque: objc.instanceProperty({ set: "setOpaque:" }),

  hasShadow: objc.instanceProperty(),

  invalidateShadow: objc.instanceSelector(),

  // these could/should be properties with the right accessor functions.
  autorecalculatesContentBorderThickness:    objc.instanceSelector("autorecalculatesContentBorderThicknessForEdge:"),
  setAutorecalculatesContentBorderThickness: objc.instanceSelector("setAutorecalculatesContentBorderThickness:forEdge:"),
  contentBorderThickness: objc.instanceSelector("contentBorderThicknessForEdge:"),
  setContentBorderThickness: objc.instanceSelector("setContentBorderThickness:forEdge:"),

  // XXX we don't have NSWindowDelegate yet
  //delegate: objc.autoboxProperty(NSWindowDelegate),


  preventsApplicationTerminationWhenModal: objc.instanceProperty(),

  canBeVisibleOnAllSpaces: objc.instanceProperty(), // Deprecated in OS X v10.5

  // Accessing Window Information
  defaultDepthLimit: objc.staticSelector(),
  windowNumber: objc.instanceProperty({ set: null }), // read-only

  windowNumbers: objc.staticSelector("windowNumbersWithOptions:"),

  gState: objc.instanceProperty({ set: null }),

  canStoreColor: objc.instanceProperty({ set: null }),

  deviceDescription: objc.instanceProperty({ set: null }),


  canBecomeVisibleWithoutLogin: objc.instanceProperty(),

  sharingType: objc.instanceProperty(),

  backingType: objc.instanceProperty(),

  backingLocation: objc.instanceProperty({ set: null}),

  preferredBackingLocation: objc.instanceProperty(),

  isOneShot: objc.instanceProperty(),

  depthLimit: objc.instanceProperty(),

  hasDynamicDepthLimit: objc.instanceProperty(),

  // Getting Layout Information
  contentRectForFrameRect: objc.staticSelector("contentRectForFrameRect:styleMask:"),
  frameRectForContentRect: objc.staticSelector("frameRectForContentRect:styleMask:"),
  minFrameWidthWithTitle:  objc.staticSelector("minFrameWidthWithTitle:styleMask:"),

  contentRectForFrameRect: objc.instanceSelector("contentRectForFrameRect:"),
  frameRectForContentRect: objc.instanceSelector("frameRectForContentRect:"),

  // Managing Windows
  drawers: objc.instanceProperty({ set: null }),
  windowController: objc.instanceProperty(),

  // Managing Sheets
  attachedSheet: objc.instanceProperty({ set: null }),
  isSheet: objc.instanceProperty({ set: null }),

  // Sizing Windows
  frame:                objc.instanceProperty({ set: function(v) { this.setFrameAnimated (v, true, false); } }),
  setFrameOrigin:       objc.instanceSelector("setFrameOrigin:"),
  setFrameTopLeftPoint: objc.instanceSelector("setFrameTopLeftPoint:"),
  constrainFrameRect:   objc.instanceSelector("constrainFrameRect:toScreen:"),
  cascadeTopLeft:       objc.instanceSelector("cascadeTopLeftFromPoint:"),
  setFrame:             objc.instanceSelector("setFrame:display:"),
  setFrameAnimated:     objc.instanceSelector("setFrame:display:animate:"),
  animationResizeTime:  objc.instanceSelector("animationResizeTime:"),
  aspectRatio:          objc.instanceProperty(),
  minSize:              objc.instanceProperty(),
  maxSize:              objc.instanceProperty(),
  isZoomed:             objc.instanceProperty({ set: null }),
  performZoom:          objc.instanceSelector("performZoom:"),
  zoom:                 objc.instanceSelector("zoom:"),
  resizeFlags:          objc.instanceProperty({ set: null }),
  showsResizeIndicator: objc.instanceProperty(),
  resizeIncrements:     objc.instanceProperty(),
  preservesContentDuringLiveResize: objc.instanceProperty(),
  inLiveResize:         objc.instanceProperty({ set: null }),

  // Sizing Content
  contentAspectRatio:      objc.instanceProperty(),
  setContentSize:          objc.instanceSelector("setContentSize:"),
  contentMinSize:          objc.instanceProperty(),
  contentMaxSize:          objc.instanceProperty(),
  contentResizeIncrements: objc.instanceProperty(),

  // Managing Window Layers
  visible:              objc.instanceProperty({ get: "isVisible", set: null }),
  orderOut:             objc.instanceSelector("orderOut:"),
  orderBack:            objc.instanceSelector("orderBack:"),
  orderFront:           objc.instanceSelector("orderFront:"),
  orderFrontRegardless: objc.instanceSelector(),
  orderWindow:          objc.instanceSelector("orderWindow:relativeTo:"),
  level:                objc.instanceProperty(),

  // Managing Window Frames in User Defaults
  removeFrame:          objc.staticSelector("removeFrameUsingName:"),
  setFrame:             objc.instanceSelector("setFrameUsingName:"),
  setFrameUsingName:    objc.instanceSelector("setFrameUsingName:force:"),
  saveFrameUsingName:   objc.instanceSelector("saveFrameUsingName:"),
  frameAutosaveName:    objc.instanceProperty(),
  stringWithSavedFrame: objc.instanceSelector(),
  setFrameFromString:   objc.instanceSelector("setFrameFromString:"),

  // Managing Key Status
  isKeyWindow:          objc.instanceProperty({ set: null }),
  canBecomeKeyWindow:   objc.instanceProperty({ set: null }),
  makeKeyWindow:        objc.instanceSelector(),
  makeKeyAndOrderFront: objc.instanceSelector("makeKeyAndOrderFront:"),
  becomeKeyWindow:      objc.instanceSelector(),
  resignKeyWindow:      objc.instanceSelector(),

  // Managing Main Status
  isMainWindow:        objc.instanceProperty({ set: null }),
  canBecomeMainWindow: objc.instanceProperty({ set: null }),
  makeMainWindow:      objc.instanceSelector(),
  becomeMainWindow:    objc.instanceSelector(),
  resignMainWindow:    objc.instanceSelector(),

  // Managing Toolbars
  toolbar:            objc.instanceProperty(),
  toggleToolbarShown: objc.instanceSelector("toggleToolbarShown:"),
  runToolbarCustomizationPalette: objc.instanceSelector("runToolbarCustomizationPalette:"),

  // Managing Attached Windows
  childWindows:      objc.instanceProperty({ set: null }),
  addChildWindow:    objc.instanceSelector("addChildWindow:ordered:"),
  removeChildWindow: objc.instanceSelector("removeChildWindow:"),
  parentWindow:      objc.instanceProperty(),

  // Managing Window Buffers
  isFlushWindowDisabled: objc.instanceProperty({ set: null }),
  enableFlushWindow:     objc.instanceSelector(),
  disableFlushWindow:    objc.instanceSelector(),
  flushWindow:           objc.instanceSelector(),
  flushWindowIfNeeded:   objc.instanceSelector(),

  // Managing Default Buttons
  defaultButtonCell:                        objc.instanceProperty(),
  enableKeyEquivalentForDefaultButtonCell:  objc.instanceSelector(),
  disableKeyEquivalentForDefaultButtonCell: objc.instanceSelector(),

  // Managing Field Editors
  fieldEditor: objc.instanceSelector("fieldEditor:forObject:"),
  endEditing:  objc.instanceSelector("endEditingFor:"),

  // Managing the Window Menu
  excludedFromWindowsMenu: objc.instanceProperty({ get: "isExcludedFromWindowsMenu" }),

  // Managing Cursor Rectangles
  areCursorRectsEnabled:        objc.instanceProperty({ set: null }),
  enableCursorRects:            objc.instanceSelector(),
  disableCursorRects:           objc.instanceSelector(),
  discardCursorRects:           objc.instanceSelector(),
  invalidateCursorRectsForView: objc.instanceSelector("invalidateCursorRectsForView:"),
  resetCursorRects:             objc.instanceSelector(),

  // Managing Title Bars
  standardWindowButtonForStyleMask: objc.staticSelector("standardWindowButton:forStyleMask:"),
  standardWindowButton:             objc.instanceSelector("standardWindowButton:"),
  showsToolbarButton:               objc.instanceProperty(),

  // Managing Tooltips
  allowsToolTipsWhenApplicationIsInactive: objc.instanceProperty(),

  // Handling Events
  menuChanged: objc.staticSelector("menuChanged:"),
  currentEvent: objc.instanceSelector(),
  nextEventMatchingMask: objc.instanceSelector("nextEventMatchingMask:"),
  nextEventMatchingMaskUntilDate: objc.instanceSelector("nextEventMatchingMask:untilDate:inMode:dequeue:"),
  discardEvents: objc.instanceSelector("discardEventsMatchingMask:beforeEvent:"),
  postEvent: objc.instanceSelector("postEvent:atStart:"),
  sendEvent: objc.instanceSelector("sendEvent:"),
  tryToPerform: objc.instanceSelector("tryToPerform:with:"),

  // Managing Responders
  initialFirstResponder: objc.instanceProperty({ set: null }),
  firstResponder: objc.instanceProperty({ set: null }),
  setInitialFirstResponse: objc.instanceSelector("setInitialFirstResponder:"),
  makeFirstResponder: objc.instanceSelector("makeFirstResponder:"),

  // Managing the Key View Loop
  selectKeyViewPrecedingView: objc.instanceSelector("selectKeyViewPrecedingView:"),
  selectKeyViewFollowingView: objc.instanceSelector("selectKeyViewFollowingView:"),
  selectPreviousKeyView: objc.instanceSelector("selectPreviousKeyView:"),
  selectNextKeyView: objc.instanceSelector("selectNextKeyView:"),
  keyViewSelectionDirection: objc.instanceProperty({ set: null }),
  autorecalculatesKeyViewLoop: objc.instanceSelector(),
  recalculateKeyViewLoop: objc.instanceSelector(),
  setAutorecalculatesKeyViewLoop: objc.instanceSelector("setAutorecalculatesKeyViewLoop:"),

  // Handling Keyboard Events
  keyDown: objc.instanceSelector("keyDown:"),

  // Handling Mouse Events
  acceptsMouseMovedEvents: objc.instanceProperty({ set: null }),
  ignoresMouseEvents: objc.instanceProperty({ set: null }),
  mouseLocationOutsideOfEventStream: objc.instanceProperty({ set: null }),
  setAcceptsMouseMovedEvents: objc.instanceSelector("setAcceptsMouseMovedEvents"),
  windowNumber: objc.staticSelector("windowNumberAtPoint:belowWindowWithWindowNumber:"),

  // Handling Window Restoration
  restorable: objc.instanceProperty({ get: "isRestorable" }),
  restorationClass: objc.instanceProperty(),
  disableSnapshotRestoration: objc.instanceSelector(),
  enableSnapshotRestoration: objc.instanceSelector(),

  // Bracketing Drawing Operations
  cacheImageInRect: objc.instanceSelector("cacheImageInRect:"),
  restoreCachedImage: objc.instanceSelector(),
  discardCachedImage: objc.instanceSelector(),

  // Drawing Windows
  display: objc.instanceSelector(),
  displayIfNeeded: objc.instanceSelector(),
  viewsNeedDisplay: objc.instanceProperty(),
  autodisplay: objc.instanceProperty({ get: "isAutodisplay" }),
  useOptimizedDrawing: objc.instanceSelector("useOptimizedDrawing:"),
  graphicsContext: objc.instanceProperty({ set: null }),
  allowsConcurrentViewDrawing: objc.instanceProperty(),

  // Window Animation
  animationBehavior: objc.instanceProperty(),

  // Updating Windows
  disableScreenUpdatesUntilFlush: objc.instanceSelector(),
  update: objc.instanceSelector(),

  // Dragging Items
  dragImage: objc.instanceSelector("dragImage:at:offset:event:pasteboard:source:slideBack:"),
  registerForDraggedTypes: objc.instanceSelector("registerForDraggedTypes:"),
  unregisterDraggedTypes: objc.instanceSelector(),

  // Converting Coordinates
  backingScaleFactor: objc.instanceProperty({ set: null }),
  backingAlignedRect: objc.instanceSelector("backingAlignedRect:options:"),
  convertRectFromBacking: objc.instanceSelector("convertRectFromBacking:"),
  convertRectToBacking: objc.instanceSelector("convertRectToBacking:"),
  convertRectToScreen: objc.instanceSelector("convertRectToScreen:"),
  convertRectFromScreen: objc.instanceSelector("convertRectFromScreen:"),
  convertBaseToScreen: objc.instanceSelector("convertBaseToScreen:"),
  convertScreenToBase: objc.instanceSelector("convertScreenToBase:"),
  userSpaceScaleFactor: objc.instanceProperty({ set: null }),

  // Accessing Edited Status
  documentEdited: objc.instanceProperty({ get: "isDocumentEdited" }),

  // Managing Titles
  title: objc.instanceProperty(),
  setTitleWithRepresentedFilename: objc.instanceSelector("setTitleWithRepresentedFilename:"),
  representedFilename: objc.instanceProperty(),
  representedURL: objc.instanceProperty(),

  // Accessing Screen Information
  screen: objc.instanceProperty({ set: null }),
  deepestScreen: objc.instanceProperty({ set: null }),
  displaysWhenScreenProfileChanges: objc.instanceProperty(),

  // Moving Windows
  movableByWindowBackground: objc.instanceProperty({ get: "isMovableByWindowBackground" }),
  movable: objc.instanceProperty({ get: "isMovable" }),
  center: objc.instanceProperty({ set: null }),

  // Closing Windows
  performClose: objc.instanceSelector("performClose:"),
  close: objc.instanceSelector(),
  releasedWhenClosed: objc.instanceProperty({ get: "isReleasedWhenClosed" }),

  // Minimizing Windows
  isMiniaturized: objc.instanceProperty({ set: null }),
  performMiniaturize: objc.instanceSelector("performMiniaturize:"),
  miniaturize: objc.instanceSelector("miniaturize:"),
  deminiaturize: objc.instanceSelector("deminiaturize:"),
  miniwindowImage: objc.instanceProperty(),
  miniwindowTitle: objc.instanceProperty(),

  // Getting the Dock Tile
  dockTile: objc.instanceProperty({ set: null }),

  // Printing Windows
  print: objc.instanceSelector("print:"),
  dataWithEPS: objc.instanceSelector("dataWithEPSInsideRect:"),
  dataWithPDF: objc.instanceSelector("dataWithPDFInsideRect:"),

  // Providing Services
  validRequestor: objc.instanceSelector("validRequestorForSendType:returnType:"),

  // Working with Carbon
  initWithWindowRef: objc.instanceSelector("initWithWindowRef:"),
  windowRef: objc.instanceProperty({ set: null }),

  // Triggering Constraint-Based Layout
  updateConstraintsIfNeeded: objc.instanceSelector(),
  layoutIfNeeded: objc.instanceSelector(),

  // Debugging Constraint-Based Layout

  // See Cocoa Autolayout Release Notes for more details on debugging constraint-based layout.

  visualizeConstraints: objc.instanceSelector("visualizeConstraints:"),

  // Constraint-Based Layouts
  anchorAttribute: objc.instanceSelector("anchorAttributeForOrientation:"),
  setAnchorAttribute: objc.instanceSelector("setAnchorAttribute:forOrientation:")
}));
