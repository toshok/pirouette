// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UITableViewCell");
exports.UITableViewCell = UITableViewCell = objc.bindClass(UIView,
  function UITableViewCell () {
    return UITableViewCell.__super__.constructor.apply(this, arguments);
  }, {

    // Initializing a UITableViewCell Object
    initWithStyle: objc.instanceSelector("initWithStyle:reuseIdentifier:"),
    initWithFrame:  objc.instanceSelector("initWithFrame:reuseIdentifier:"), // Deprecated in iOS 3.0

    // Reusing Cells
    reuseIdentifier: objc.instanceProperty(),
    prepareForReuse: objc.instanceSelector("prepareForReuse"),

    // Managing Text as Cell Content
    textLabel: objc.instanceProperty({ set: null }),
    detailTextLabel: objc.instanceProperty({ set: null }),
    font: objc.instanceProperty(), // Deprecated in iOS 3.0
    lineBreakMode: objc.instanceProperty(), // Deprecated in iOS 3.0
    selectedTextColor: objc.instanceProperty(), // Deprecated in iOS 3.0
    text: objc.instanceProperty(), // Deprecated in iOS 3.0
    textAlignment: objc.instanceProperty(), // Deprecated in iOS 3.0
    textColor: objc.instanceProperty(), // Deprecated in iOS 3.0

    // Managing Images as Cell Content
    imageView: objc.instanceProperty(),
    image: objc.instanceProperty(), // Deprecated in iOS 3.0
    selectedImage: objc.instanceProperty(), // Deprecated in iOS 3.0

    // Accessing Views of the Cell Object
    contentView: objc.instanceProperty(),
    backgroundView: objc.instanceProperty(),
    selectedBackgroundView: objc.instanceProperty(),
    multipleSelectionBackgroundView: objc.instanceProperty(),

    // Managing Accessory Views
    accessoryType: objc.instanceProperty(),
    accessoryView: objc.instanceProperty(),
    editingAccessoryType: objc.instanceProperty(),
    editingAccessoryView: objc.instanceProperty(),
    hidesAccessoryWhenEditing: objc.instanceProperty(), // Deprecated in iOS 3.0

    // Managing Cell Selection and Highlighting
    setSelected:    objc.instanceSelector("setSelected:animated:"),
    setHighlighted: objc.instanceSelector("setHighlighted:animated:"),
    selected: objc.instanceProperty({ set: (v) => this.setSelected (v, false) }),
    selectionStyle: objc.instanceProperty(),
    highlighted: objc.instanceProperty({ set: (v) => this.setHighlighted (v, false) }),

    // Editing the Cell
    setEditing: objc.instanceSelector("setEditing:animated:"),
    editing: objc.instanceProperty({ set: (v) => this.setEditing (v, false) }),
    editingStyle: objc.instanceProperty(),
    showingDeleteConfirmation: objc.instanceProperty(),
    showsReorderControl: objc.instanceProperty(),

    // Adjusting to State Transitions
    willTransitionToState: objc.instanceSelector("willTransitionToState:"),
    didTransitionToState:  objc.instanceSelector("didTransitionToState:"),

    // Managing Content Indentation
    indentationLevel: objc.instanceProperty(),
    indentationWidth: objc.instanceProperty(),
    shouldIndentWhileEditing: objc.instanceProperty(),

    // Managing Targets and Actions

    // These properties are deprecated as of iOS 3.0. Instead, use the tableView:commitEditingStyle:forRowAtIndexPath: method of the UITableViewDataSource protocol or the tableView:accessoryButtonTappedForRowWithIndexPath: method of the UITableViewDelegate protocol.

    accessoryAction: objc.instanceProperty(), // Deprecated in iOS 3.0
    editAction: objc.instanceProperty(), // Deprecated in iOS 3.0
    target: objc.instanceProperty(), // Deprecated in iOS 3.0

});