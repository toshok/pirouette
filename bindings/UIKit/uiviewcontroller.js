// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log "UIViewController"
var UIViewController;
_exports.UIViewController = UIViewController = UIResponder.extendClass ("UIViewController", () => ({
    constructor: function (handle, arg2) {
      if (typeof (handle) === 'string') {
	objc.chainCtor (UIViewController, this, []);
	this.initWithNibNameAndBundle(handle, arg2);
      }
      else {
	objc.chainCtor (UIViewController, this, arguments);
      }
    },

    // Creating a View Controller Using Nib Files
    initWithNibNameAndBundle: objc.instanceSelector("initWithNibName:bundle:"),
    nibName: objc.instanceProperty(),
    nibBundle: objc.instanceProperty(),

    // Managing the View
    loadView:       objc.instanceSelector("loadView").returns( function() { return objc.sig.Void; } ),
    viewDidLoad:    objc.instanceSelector("viewDidLoad"),
    viewWillUnload: objc.instanceSelector("viewWillUnload"),
    viewDidUnload:  objc.instanceSelector("viewDidUnload"),
    isViewLoaded:   objc.instanceSelector("isViewLoaded"),
    view: objc.instanceProperty(),
    title: objc.instanceProperty(),
    contentSizeForViewInPopover: objc.instanceProperty(),
    modalInPopover: objc.instanceProperty(),

    // Using a Storyboard
    performSegue:     objc.instanceSelector("performSegueWithIdentifier:sender:"),
    prepareForSegue:  objc.instanceSelector("prepareForSegue:sender:"),
    storyboard: objc.instanceProperty(),

    // Responding to View Events
    viewWillAppear:    objc.instanceSelector("viewWillAppear:"),
    viewDidAppear:     objc.instanceSelector("viewDidAppear:"),
    viewWillDisappear: objc.instanceSelector("viewWillDisappear:"),
    viewDidDisappear:  objc.instanceSelector("viewDidDisappear:"),

    // Configuring the View’s Layout Behavior
    wantsFullScreenLayout: objc.instanceProperty(),

    // Configuring the View Rotation Settings
    interfaceOrientation: objc.instanceProperty(),
    shouldAutorotateToInterfaceOrientation: objc.instanceSelector("shouldAutorotateToInterfaceOrientation:"),
    attemptRotationToDeviceOrientation:     objc.instanceSelector("attemptRotationToDeviceOrientation"),
    rotatingHeaderView:                     objc.instanceSelector("rotatingHeaderView"),
    rotatingFooterView:                     objc.instanceSelector("rotatingFooterView"),

    // Responding to View Rotation Events
    willRotateToInterfaceOrientation:                        objc.instanceSelector("willRotateToInterfaceOrientation:duration:"),
    willAnimateRotationToInterfaceOrientation:               objc.instanceSelector("willAnimateRotationToInterfaceOrientation:duration:"),
    didRotateFromInterfaceOrientation:                       objc.instanceSelector("didRotateFromInterfaceOrientation:"),
    didAnimateFirstHalfOfRotationToInterfaceOrientation:     objc.instanceSelector("didAnimateFirstHalfOfRotationToInterfaceOrientation:"), // Deprecated in iOS 5.0
    willAnimateFirstHalfOfRotationToInterfaceOrientation:    objc.instanceSelector("willAnimateFirstHalfOfRotationToInterfaceOrientation:duration:"), // Deprecated in iOS 5.0
    willAnimateSecondHalfOfRotationFromInterfaceOrientation: objc.instanceSelector("willAnimateSecondHalfOfRotationFromInterfaceOrientation:duration:"), // Deprecated in iOS 5.0

    // Managing Child View Controllers
    childViewControllers: objc.instanceProperty(),
    addChildViewController:                                                 objc.instanceSelector("addChildViewController:"),
    removeFromParentViewController:                                         objc.instanceSelector("removeFromParentViewController"),
    automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers: objc.instanceSelector("automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers"),

    // Managing the Layout of Contained View Controllers
    viewDidLayoutSubviews:            objc.instanceSelector("viewDidLayoutSubviews"),
    viewWillLayoutSubviews:           objc.instanceSelector("viewWillLayoutSubviews"),
    willMoveToParentViewController:   objc.instanceSelector("willMoveToParentViewController:"),
    isMovingFromParentViewController: objc.instanceSelector("isMovingFromParentViewController"),
    isMovingToParentViewController:   objc.instanceSelector("isMovingToParentViewController"),
    didMoveToParentViewController:    objc.instanceSelector("didMoveToParentViewController:"),

    // Initiating Transitions Between Contained View Controllers
    transition:                       objc.instanceSelector("transitionFromViewController:toViewController:duration:options:animations:completion:"),

    // Handling Memory Warnings
    didReceiveMemoryWarning:          objc.instanceSelector("didReceiveMemoryWarning"),

    // Getting Other Related View Controllers
    parentViewController: objc.instanceProperty(),
    searchDisplayController: objc.instanceProperty(),
    splitViewController: objc.instanceProperty(),
    modalViewController: objc.instanceProperty(),
    navigationController: objc.instanceProperty(),
    tabBarController: objc.instanceProperty(),

    // Presenting View Controllers
    present:          objc.instanceSelector("presentViewController:animated:completion:"),
    isBeingPresented: objc.instanceSelector("isBeingPresented"),
    dismiss:          objc.instanceSelector("dismissViewControllerAnimated:completion:"),
    isBeingDismissed: objc.instanceSelector("isBeingDismissed"),
    definesPresentationContext: objc.instanceProperty(),
    providesPresentationContextTransitionStyle: objc.instanceProperty(),
    presentingViewController: objc.instanceProperty(),
    presentedViewController: objc.instanceProperty(),

    // Configuring a Navigation Interface
    setEditing:     objc.instanceSelector("setEditing:animated:"),
    editButtonItem: objc.instanceSelector("editButtonItem"),
    navigationItem: objc.instanceProperty(),
    editing: objc.instanceProperty({ set: function(v) { this.setEditing(v, false); } }),
    hidesBottomBarWhenPushed: objc.instanceProperty(),

    // Configuring the Navigation Controller’s Toolbar
    setToolbarItems: objc.instanceSelector("setToolbarItems:animated:"),
    toolbarItems: objc.instanceProperty({ set: function(v) { return this.setToolbarItems(v, false); } }),

    // Configuring Tab Bar Items
    tabBarItem: objc.instanceProperty(),

    // Presenting Modal Views
    presentModal:                       objc.instanceSelector("presentModalViewController:animated:"),
    dismissModal:                       objc.instanceSelector("dismissModalViewControllerAnimated:"),
    disablesAutomaticKeyboardDismissal: objc.instanceSelector("disablesAutomaticKeyboardDismissal"),
    modalTransitionStyle: objc.instanceProperty(),
    modalPresentationStyle: objc.instanceProperty()

}));
