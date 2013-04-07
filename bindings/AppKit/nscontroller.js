// This file is part of coffeekit.  for licensing information, see the LICENSE file

exports.NSController = NSController = objc.bindClass(foundation.NSObject,
  function NSController () {
    NSController.__super__.constructor.apply(this, arguments);
  }, {

  // Managing Editing
  objectDidBeginEditing: objc.instanceSelector("objectDidBeginEditing:"),
  objectDidEndEditing: objc.instanceSelector("objectDidEndEditing:"),
  commitEditing: objc.instanceSelector("commitEditing"),
  commitEditingWithDelegate: objc.instanceSelector("commitEditingWithDelegate:didCommitSelector:contextInfo:"),
  discardEditing: objc.instanceSelector("discardEditing"),
  isEditing: objc.instanceSelector("isEditing")

});