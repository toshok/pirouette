// This file is part of coffeekit.  for licensing information, see the LICENSE file

// console.log("NSObject");
exports.NSObject = NSObject = objc.extendClass("NSObject", objc_internal.PirouetteObject, {

    constructor: function (handle) {
      this.handle = handle;

      if (!handle) {
	// construct the native object if we aren't supplied a handle
	this.handle = this.constructor.alloc();
      }

      // then make sure to associate the handle to this object
      objc_internal.PirouetteObject.setHandle.call(this, this.handle);
    },

    toString: function () {
      return "[" + String(this.constructor._ck_register) + " " + this.handle.toString() + "]";
    }

  });

NSObject.alloc = function() {
  //console.log ("NSObject.alloc(" + this._ck_register + ")");
  return objc_internal.allocInstance (this._ck_register);
};

NSObject.getTypeSignature = function() {
  return "@";
};

NSObject.newWith = function(newInfo) {
  let methodname = "initWith" + newInfo.initWith;
  let meth = this.prototype[methodname];
  if (typeof meth !== 'function') {
    let err = "no method '" + methodname + "' defined in " + this.name + ".prototype";
    console.log(err);
    throw err;
  }

  let instance = new this.prototype.constructor;

  meth.apply(instance, newInfo.args);

  return instance;
};

console.log("creating NSObject.extendClass");
objc.createExtendClass(NSObject);

/*
 @mixinProtocol: (p) -> new ck.MixinProtocolAttribute @, p
 @conformsToProtocol: (p) -> new ck.ConformsToProtocolAttribute @, p

 @outlet: (name, type) -> ck.outlet @::, name, type
 */
