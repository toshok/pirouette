// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UICanvasView");
var UICanvasView;
_exports.UICanvasView = UICanvasView = UIView.extendClass ("UICanvasView", () => ({

  layerClass: objc.staticSelector("layerClass").
                          returns( function () { return objc.sig.Class; }).
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

}));
