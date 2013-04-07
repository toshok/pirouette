// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIBezierPath");
exports.UIBezierPath = UIBezierPath = objc.bindClass(foundation.NSObject,
  function UIBezierPath () {
    return UIBezierPath.__super__.constructor.apply(this, arguments);
  }, {

    // Creating a UIBezierPath Object
    bezierPath:                                 objc.instanceSelector("bezierPath"),
    bezierPathWithRect:                         objc.instanceSelector("bezierPathWithRect:"),
    bezierPathWithOvalInRect:                   objc.instanceSelector("bezierPathWithOvalInRect:"),
    bezierPathWithRoundedRect:                  objc.instanceSelector("bezierPathWithRoundedRect:cornerRadius:"),
    bezierPathWithRoundedRectByRoundingCorners: objc.instanceSelector("bezierPathWithRoundedRect:byRoundingCorners:cornerRadii:"),
    bezierPathWithArc:                          objc.instanceSelector("bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise:"),
    bezierPathWithCGPath:                       objc.instanceSelector("bezierPathWithCGPath:"),

    // Constructing a Path
    moveToPoint:      objc.instanceSelector("moveToPoint:"),
    addLineToPoint:   objc.instanceSelector("addLineToPoint:"),
    addArc:           objc.instanceSelector("addArcWithCenter:radius:startAngle:endAngle:clockwise:"),
    addCurve:         objc.instanceSelector("addCurveToPoint:controlPoint1:controlPoint2:"),
    addQuadCurve:     objc.instanceSelector("addQuadCurveToPoint:controlPoint:"),
    closePath:        objc.instanceSelector("closePath"),
    removeAllPoints:  objc.instanceSelector("removeAllPoints"),
    appendPath:       objc.instanceSelector("appendPath:"),
    CGPath: objc.instanceProperty(),
    currentPoint: objc.instanceProperty(),

    // Accessing Drawing Properties
    lineWidth: objc.instanceProperty(),
    lineCapStyle: objc.instanceProperty(),
    lineJoinStyle: objc.instanceProperty(),
    miterLimit: objc.instanceProperty(),
    flatness: objc.instanceProperty(),
    usesEvenOddFillRule: objc.instanceProperty(),
    setLineDash:      objc.instanceSelector("setLineDash:count:phase:"),
    getLineDash:      objc.instanceSelector("getLineDash:count:phase:"),

    // Drawing Paths
    fill:                objc.instanceSelector("fill"),
    fillWithBlendMode:   objc.instanceSelector("fillWithBlendMode:alpha:"),
    stroke:              objc.instanceSelector("stroke"),
    strokeWithBlendMode: objc.instanceSelector("strokeWithBlendMode:alpha:"),

    // Clipping Paths
    addClip:             objc.instanceSelector("addClip"),

    // Hit Detection
    containsPoint:    objc.instanceSelector("containsPoint:"),
    empty: objc.instanceProperty(),
    bounds: objc.instanceProperty(),

    // Applying Transformations
    applyTransform:   objc.instanceSelector("applyTransform:")

});