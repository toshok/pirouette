// This file is part of coffeekit.  for licensing information, see the LICENSE file

let objc = require("objc_internal"),
    foundation = require("foundation");

console.log("objc");

function __extends (child, parent) {
    let keys = Object.getOwnPropertyNames(parent);
    for (let i = 0, e = keys.length; i < e; i ++) {
        let key = keys[i];
        // is [[CanPut]] exposed in some way to ES6 without using Object.getOwnPropertyDescriptor?  that would be lovely...
        try { Object.defineProperty(child, key, Object.getOwnPropertyDescriptor(parent, key)); } catch (e) {}
    }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype; child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
}


function registerMembers (o, c) {
    let names = Object.getOwnPropertyNames(o);
    for (let i = 0, e = names.length; i < e; i ++) {
        let name = names[i];
        let desc = Object.getOwnPropertyDescriptor(o, name);

        // skip properties
        if (desc.set || desc.get) continue;

        // XXX for some reason NSResponder's constructor is coming up with a _ck_register = NSObject.  wtf?
        if (name === 'constructor') continue;

        let impl = o[name];
        if (impl && impl._ck_register)
            o[name] = impl._ck_register(c, name);
        if (impl && impl._ck_registerProp)
            impl._ck_registerProp(c, name);
    }
}

exports.register = (obj, name = obj.name) => {
        console.log(`registering $name`);

        // prepare the instance methods
        registerMembers(obj.prototype, obj);

        // prepare static methods
        registerMembers(obj, obj);

        // register the class with objective-c
        new RegisterAttribute(obj, name);
};


class Attribute {
  constructor(obj) {
    Attribute.add (obj, this);
  }

  static add(obj, attr) {
    if (!obj._ck_attributes)
      obj._ck_attributes = [];
    obj._ck_attributes.unshift(attr);
  }

  static find(obj, attrType) {
    if (!obj._ck_attributes) return [];
    // XXX ES6-port: this breaks traceur
    // return [ attr for (attr of obj._ck_attributes) if (attr instanceof attrType) ];
  }
}

exports.RegisterAttribute = class RegisterAttribute extends Attribute {
  constructor (obj, name = obj.name) {
    super(obj);
    obj._ck_register = name;

    let superclass_name = "";
    if (obj.__super__ &&
	obj.__super__.constructor &&
	obj.__super__.constructor._ck_register)
      superclass_name = obj.__super__.constructor._ck_register;

    //console.log(`registering ${obj._ck_register}, subclass of ${ (obj.__super__) ? obj.__super__.constructor._ck_register : ''}`);
    objc_internal.registerJSClass(obj, obj.prototype, obj._ck_register, superclass_name);
  }
};

exports.SelectorAttribute = class SelectorAttribute extends Attribute {
  constructor (obj, sel_name, type_sig) {
    super(obj);
    obj._ck_exported = true;
    obj._ck_sel = sel_name;
    obj._ck_typeSig = type_sig || "@@:";
  }
}

let selectorInvoker = (sel) => {
  let sel_invoke = objc_internal.selectorInvoker(sel);
  return () => {
    console.log(`invoking selector $sel on object of type ${this.constructor.name}`);
    sel_invoke.apply(this, [sel].concat(Array.prototype.slice.call(arguments)));
  }
};

exports.instanceSelector = (selector) => {
  let info = {ck: {sel: selector}};
  info.makeUIAppearance = () => {
    info.ck.uiappearance = true;
    return info;
  };
  info.register = (cls, name) => {
    cls.prototype[name] = selectorInvoker(selector);
  };
  return info;
};

/*
class MixinProtocolAttribute extends Attribute {
  constructor(obj, protocol) {
    super(obj);

    for (let key in protocol) {
      let value = protocol[key];

      if (protocol.hasOwnProperty(key)) {
	// class/static
        if (value.required) {
          if (value.method) {
            obj[key] = value.tramp || selectorInvoker(value.method);
            obj[key]._ck_typeSig = value.sig || "@@:";
	  }
          else if (value.property) {
            let accessors = Object.create(null);
	    if (value.get) accessors.get = value.get;
            if (value.set) accessors.set = value.set;
            addProperty(obj, value.property, accessors);
	  }
	}
      }
      else {
        // instance
        if (value.required)
	  if (value.method) {
            obj.prototype[key] = value.tramp || selectorInvoker(value.method);
            obj.prototype[key]._ck_typeSig = value.sig || "@@:";
	  }
	  else if (value.property) {
            addProperty(obj.prototype, value.property);
	  }
	}
      }

    }
  }
}
*/

exports.MixinProtocolAttribute = MixinProtocolAttribute;

class ConformsToProtocolAttribute extends Attribute {
  constructor (obj, protocol) {
    this.protocol = protocol;
    super (obj);

    for (let key in protocol.prototype) {
      let value = protocol.prototype[key];

      if (key === 'constructor') continue;

      if (protocol.hasOwnProperty(key))
        // class/static, do nothing
	;
      else {
        // instance
        let fn = obj.prototype[key];
	if (fn) {
          fn._ckProtocolInfo = { sel: value.method, sig: value.sig };
	}
      }

      // FIXME
      //   there's not much more that's necessary here..  if the attribute is present
      //   we need to synthesize a conformsToProtocol: method which will iterate all
      //   CTPA's and return yes/no.
      //
      // we should also probably verify that required methods are implemented?  maybe not?...
      //
      console.log("need to implement ConformsToProtocolAttribute");
    }
  }

  static doesObjectConformTo(obj, protocol) {
    // XXX ES6-port: this breaks traceur
    // return (conforms for conforms in (Attribute.find obj, ConformsToProtocolAttribute) when conforms.protocol is protocol).length > 0
  }
}
exports.ConformsToProtocolAttribute = ConformsToProtocolAttribute;

// save ourselves some long lines with this function
let does_not_conform_to = (o, p) => ConformsToProtocolAttribute.doesObjectConformTo(o, p);

let autoboxCount = 0;
exports.autobox = (obj, protocol) => {
    class ProtocolProxy extends foundation.NSObject {
        constructor() {
	  super (objc_internal.allocInstance(this.constructor._ck_register));
	}
    }

    // check if the object (or its constructor) conforms to the protocol.  if it does
    // then we can just use the object, without the proxy
    if (does_not_conform_to(obj, protocol) || does_not_conform_to(obj.constructor, protocol)) return obj;

    // first check for required methods.  if obj doesn't implement them, error out.
    for (let key in protocol) {
        let value = protocol[key];

        if (protocol.hasOwnProperty(key)) {
            // class/static
            // nothing for now XXX
        }
        else {
            // instance
            if (value.required && !obj[key]) {
                if (value.method) throw `$obj is missing required method $key from protocol $protocol`;
                if (value.property) throw `$obj is missing required property $key from protocol $protocol`;
            }
        }
    }

    // now loop over the items that are in obj and match up the names to those in the protocol
    for (let key in obj) {
        let value = obj[key];
        let pv = protocol.prototype[key];

        if (!pv) continue;

        if (pv.method) {
            ProtocolProxy.prototype[key] = value.bind(obj);
            new SelectorAttribute(ProtocolProxy.prototype[key], pv.method, pv.sig);
        }
        else {
            throw `unhandled case:  property $key overriding from a protocol $protocol`;
        }
    }

    new ConformsToProtocolAttribute(ProtocolProxy, protocol);
    new RegisterAttribute(ProtocolProxy, `CKProtocolProxy$(autoboxCount++)`);

    return new ProtocolProxy();
};

addProperty = (obj, jsprop, opts) => {
  let info = Object.create(null);
  info._ck_registerProp = () => {
    // if opts are left off, and jsprop = 'foo',
    // we assume the getter is 'foo' and the setter is
    // 'setFoo:'
    let getter = null;
    let setter = null;

    if (opts === undefined) {
      getter = selectorInvoker(jsprop);
      setter = selectorInvoker(`set${jsprop[0].toUpperCase()}${jsprop.slice(1)}:`);
    }
    else {
      // the value for the set/get members of opts overrides this above behavior.
      //
      // that is, if an attribute is missing, we default to the same behavior as above.  if
      // it is present and null, we don't add it.  so, to generate a read-only property with
      // the default getter name, pass { set: null }
      if ("get" in opts) {
        if (opts.get) {
          if (typeof opts.get === 'string')
	    getter = selectorInvoker(opts.get);
          else if (typeof opts.get === 'function')
            getter = opts.get;
          else
            throw "you can only use a string or a function for get:";
	}
        else
	  getter = selectorInvoker(jsprop);
      }

      if ("set" in opts) {
	if (opts.set) {
	  if (typeof opts.set === 'string')
	    setter = selectorInvoker(opts.set);
          else if (typeof opts.set === 'function')
            setter = opts.set;
	}
        else
          throw "you can only use a string or a function for set:";
      }
      else {
        setter = selectorInvoker(`set${jsprop[0].toUpperCase()}${jsprop.slice(1)}:`);
      }
    }

    if ("ivar" in opts) {
      if (setter) setter._ck_ivar = opts.ivar;
      if (getter) getter._ck_ivar = opts.ivar;
    }

    if (info._ck_appearance && setter) setter._ck_appearance = true;
    if (info._ck_appearance && getter) getter._ck_appearance = true;

    let descriptor = { enumerable: true, configurable: true };
    if (setter) descriptor.set = setter;
    if (getter) descriptor.get = getter;

    Object.defineProperty(obj, jsprop, descriptor);

    info.makeUIAppearance = () => {
      if (setter) info._ck_appearance = true;
      return info;
    };

    Object.defineProperty(obj, jsprop, { value: info, configurable: true });
    return info;
  };
};

exports.addProperty = addProperty;

exports.selectorInvoker = selectorInvoker;

exports.instanceProperty = (cls, jsprop, opts) => addProperty(cls.prototype, jsprop, opts);

exports.staticProperty = (cls, jsprop, opts) => addProperty(cls, jsprop, opts);

exports.makeEnum = (spec) => {
    let addConstant = (obj, jsprop, v) => { Object.defineProperty(obj, jsprop, { value: v, enumerable: true, configurable: false, writable: false }); };

    let rv = Object.create(null);
    for (let name in spec) {
      addConstant (rv, name, spec[name]);
    }
    return rv;
};

exports.outlet = outlet = (outletType, jsprop) => {
  addProperty(obj, jsprop, { get: () => {
			       //console.log(`in getter for ${jsprop}, this = ${this.constructor.name}`);
			       return new outletType (objc_internal.getInstanceVariable(this, jsprop));
			     },

			     set: (v) => {
			       //console.log(`in setter for ${jsprop}, this = ${this.constructor.name}`);
			       return objc_internal.setInstanceVariable(this, jsprop, v);
			     },

			     ivar: jsprop

			   });
};

exports.sig = {
  Class:    () => "//",
  Selector: () => ":",
  Char:     () => "c",
  UChar:    () => "C",
  Short:    () => "s",
  UShort:   () => "S",
  Int:      () => "i",
  UInt:     () => "I",
  Long:     () => "l",
  ULong:    () => "L",
  LongLong: () => "q",
  ULongLong: () => "Q",
  Float:    () => "f",
  Double:   () => "d",
  Bool:     () => "c",  // objective c's type signatures permit a 'B' which is BOOL, but it looks like the bindings all use 'c' for bool instead. :/
  Void:     () => "v",
  Ptr:      () => "^",
  CharStar: () => "*",
  NSString: () => "@",
//	ArrayOf: (s) () => () => `[${exports.typeSignature[s]}]`,
//	PointerTo: (s) () => () => `^${exports.typeSignature [s]}`,
        // some things we're hardcoding here until/unless we move them into their respective bindings
  CVTimeStamp: () => "{?=IiqQdq{CVSMPTETime=ssIIIssss}QQ}",
  CGAffineTransform: () => "{CGAffineTransform=ffffff}",
  CGContext: () => "{CGContext=}"
};

exports.typeSignature = (types) => {
  let getTypeSignature = (t) => {
    if (t.getTypeSignature) return t.getTypeSignature();
    if (typeof t === "function") return t();
    throw `unable to find a type signature mapping for type $t`;
  };
    // XXX ES6-port: this breaks traceur
    // (getTypeSignature(t) for t in types).join ''
  return null;
};
