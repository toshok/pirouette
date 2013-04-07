// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UICanvasView");
exports.UICanvasView = UICanvasView = objc.bindClass(UIView,
  function UICanvasView () {
    return UICanvasView.__super__.constructor.apply(this, arguments);
  }, {

  layerClass: objc.staticSelector("layerClass").
                          returns( function () { return ck.sig.Class; }).
			     impl( function () { return coreAnimation.CAEAGLLayer; }),
  getContext: function (name, args) {
    if (name === "experimental-webgl" || name === "webgl") {
      if (!this.context)
	this.context = objc_internal.allocateGLContext(this.layer, args);
      return this.context;
    }
    else {
      throw "UICanvasView only supports webgl rendering";
    }
  }

});