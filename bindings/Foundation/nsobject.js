// This file is part of coffeekit.  for licensing information, see the LICENSE file

// console.log("NSObject");
class NSObject extends objc_internal.PirouetteObject {

  constructor(handle) {
    this.handle = handle;

    if (!handle) {
      console.log("calling @constructor.alloc()!");
      this.handle = this.constructor.alloc();
    }

    objc_internal.Pirouette.setHandle.call(this, this.handle);

    return NSObject.__super__.constructor.apply(this, arguments);
  }

  static alloc() {
    return objc_internal.allocInstance (this.constructor.name);
  }

  static getTypeSignature() {
    return "@";
  }

  toString() {
    return `[${this.constructor._ck_register} ${this.handle}]`;
  }

    /*
    newWith: objc.staticMethod (newInfo) ->
                meth = @::["initWith#{newInfo.initWith}"];
                if (typeof meth) isnt 'function'
                        console.log "no method 'initWith#{newInfo.initWith}' defined in #{@name}.prototype"
                        throw "no method 'initWith#{newInfo.initWith}' defined in #{@name}.prototype"

                instance = new @::constructor

                meth.apply instance, newInfo.args

                instance


    @mixinProtocol: (p) -> new ck.MixinProtocolAttribute @, p
    @conformsToProtocol: (p) -> new ck.ConformsToProtocolAttribute @, p

    @outlet: (name, type) -> ck.outlet @::, name, type
     */

}