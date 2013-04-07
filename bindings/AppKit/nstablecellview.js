// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSTableCellView = NSTableCellView = objc.bindClass(NSView,
  function NSTableCellView () {
    NSTableCellView.__super__.constructor.apply(this, arguments);
  }, {

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

});