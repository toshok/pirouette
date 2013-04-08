// This file is part of coffeekit.  for licensing information, see the LICENSE file

// console.log("NSObject");
exports.NSObject = NSObject = objc.extendClass("NSObject", objc_internal.PirouetteObject, {

    constructor: function (_super, handle) {
      this.handle = handle;

      if (!handle) {
	console.log("calling @constructor.alloc()!");
	this.handle = this.constructor.alloc();
      }

      objc_internal.Pirouette.setHandle.call(this, this.handle);
      return _super.apply(this, arguments.slice(1));
    },

    toString: function () {
      return "[" + String(this.constructor._ck_register) + " " + this.handle.toString() + "]";
    }

  });

NSObject.alloc = function() {
  return objc_internal.allocInstance (this.name);
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

NSObject.extendClass = function(name, description) {
  return objc.extendClass(name, this, description);
};

/*
 @mixinProtocol: (p) -> new ck.MixinProtocolAttribute @, p
 @conformsToProtocol: (p) -> new ck.ConformsToProtocolAttribute @, p

 @outlet: (name, type) -> ck.outlet @::, name, type
 */
