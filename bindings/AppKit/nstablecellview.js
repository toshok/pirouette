// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSTableCellView;
_exports.NSTableCellView = NSTableCellView = NSView.extendClass("NSTableCellView", () => ({
  // Represented Object
  objectValue: objc.instanceProperty(),

  // Displayed Items
  imageView: objc.instanceProperty(),
  textField: objc.instanceProperty(),

  // Getting and Setting the Background Style
  backgroundStyle: objc.instanceProperty(),

  // Getting and Setting the Row Size Style
  rowSizeStyle: objc.instanceProperty(),

  // Dragging Images
  draggingImageComponents: objc.instanceProperty({ set: null })

}));
