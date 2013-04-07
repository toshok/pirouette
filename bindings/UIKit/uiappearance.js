// This file is part of coffeekit.  for licensing information, see the LICENSE file

//console.log("UIAppearance");

let appearances = Object.create(null);

let makeAppearance = (sel, o, ...args) => {
  let appearance = appearances[o.prototype.constructor];
  if (appearance) return appearance;

  // kind of a hack to invoke the selector on the right object
  appearance = objc.selectorInvoker(sel).apply(o, args);

  // iterate over all keys in o's prototype, looking for ones whose values
  // have _ck_appearance = true set on them.
  // when we find them, we cache the typeencoding by looking it up on
  // the original class, since _UIAppearance does its own method lookup
  // and doesn't actually contain implementations of the selectors themselves.
  //
  // the code in invokeSelectorFromJS is smart enough to pull the type encoding
  // from the function object first before looking for it on the Method*
  for (let key in o.prototype) {
    let fn = o.prototype.__lookupGetter__(key) || o.prototype.__lookupSetter__(key);
    if (fn) {
      // it's a property
      if (fn._ck_appearance)
        if (!fn._ck_typeEncoding)
          fn._ck_typeEncoding = objc.getTypeEncoding(o, fn);
	  if (fn === o.prototype.__lookupGetter__(key))
            appearance.__defineGetter__(key, fn);
          else
            appearance.__defineSetter__(key, fn);
    }
    else {
      // it's a method
      fn = o.prototype[key];
      if (fn._ck_appearance) {
	if (!fn._ck_typeEncoding)
	  fn._ck_typeEncoding = objc.getTypeEncoding(o, fn);
	appearance[key] = fn;
      }
    }
  }

  appearances[o.prototype.constructor] = appearance;
  return appearance;
};

exports.UIAppearance = UIAppearance = objc.bindProtocol(foundation.Protocol,
  function UIAppearance () {
    return UIAppearance.__super__.constructor.apply(this, arguments);
  }, {

    // Appearance Methods
    appearance:                objc.requiredMethod("appearance", { tramp: () => makeAppearance("appearance", this) }),
    appearanceWhenContainedIn: objc.requiredMethod("appearanceWhenContainedIn:", { tramp: (...args) => makeAppearance.apply(null, ["appearanceWhenContainedIn", this].concat(args)) } )

});
