// This file is part of Pirouette.  for licensing information, see the LICENSE file

var NSController;
_exports.NSController = NSController = foundation.NSObject.extendClass("NSController", () => ({
  // Managing Editing
  objectDidBeginEditing: objc.instanceSelector("objectDidBeginEditing:"),
  objectDidEndEditing: objc.instanceSelector("objectDidEndEditing:"),
  commitEditing: objc.instanceSelector("commitEditing"),
  commitEditingWithDelegate: objc.instanceSelector("commitEditingWithDelegate:didCommitSelector:contextInfo:"),
  discardEditing: objc.instanceSelector("discardEditing"),
  isEditing: objc.instanceSelector("isEditing")

}));
