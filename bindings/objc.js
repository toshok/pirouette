// This file is part of coffeekit.  for licensing information, see the LICENSE file

let objc_internal = require("objc_internal"),
    foundation = require("foundation");

//console.log("objc");

let sig = {
  Class:     function() { return "//"; },
  Selector:  function() { return ":"; },
  Char:      function() { return "c"; },
  UChar:     function() { return "C"; },
  Short:     function() { return "s"; },
  UShort:    function() { return "S"; },
  Int:       function() { return "i"; },
  UInt:      function() { return "I"; },
  Long:      function() { return "l"; },
  ULong:     function() { return "L"; },
  LongLong:  function() { return "q"; },
  ULongLong: function() { return "Q"; },
  Float:     function() { return "f"; },
  Double:    function() { return "d"; },
  Bool:      function() { return "c"; },  // objective c's type signatures permit a 'B' which is BOOL, but it looks like the bindings all use 'c' for bool instead. :/
  Void:      function() { return "v"; },
  Ptr:       function() { return "^"; },
  CharStar:  function() { return "*"; },
  NSString:  function() { return "@"; },
  ArrayOf:   function(s) { return function() { return "["+typeSignature([s])+"]"; }; },
  PointerTo: function(s) { return function() { return "^"+typeSignature([s]); }; },
  // some things we're hardcoding here until/unless we move them into their respective bindings
  CVTimeStamp: function() { return "{?=IiqQdq{CVSMPTETime=ssIIIssss}QQ}"; },
  CGAffineTransform: function() { return "{CGAffineTransform=ffffff}"; },
  CGContext: function() { return "{CGContext=}"; }
};
exports.sig = sig;

function typeSignature(types) {
  let getTypeSignature = function (t) {
    if (t.getTypeSignature) return t.getTypeSignature();
    if (typeof t === "function") return t();
    throw "unable to find a type signature mapping for type " + t;
  };
  // XXX ES6-port: this breaks traceur
  // (getTypeSignature(t) for t in types).join ''
  return null;
};
exports.typeSignature = typeSignature;

exports.requireFramework = function requireFramework(framework) {
  console.log ("requireFramework " + framework);
};

function Attribute(obj) {
  Attribute.add (obj, this);
}
exports.Attribute = Attribute;

Attribute.add = function (obj, attr) {
  if (!obj._ck_attributes)
    obj._ck_attributes = [];
  obj._ck_attributes.unshift(attr);
};

Attribute.find = function(obj, attrType) {
  if (!obj._ck_attributes) return [];
  // XXX ES6-port: this breaks traceur
  // return [ attr for (attr of obj._ck_attributes) if (attr instanceof attrType) ];
};

function RegisterAttribute(obj, name) {
  console.log ("In RegisterAttribute ctor");
  name = name || obj.name;
  Attribute.call(this, obj);

  obj._ck_register = name;

  let superclass_name = "";
  if (obj.__super__ &&
      obj.__super__.constructor &&
      obj.__super__.constructor._ck_register) {
    superclass_name = obj.__super__.constructor._ck_register;
  }

  //console.log(`registering ${obj._ck_register}, subclass of ${ (obj.__super__) ? obj.__super__.constructor._ck_register : ''}`);
  objc_internal.registerJSClass(obj, obj.prototype, obj._ck_register, superclass_name);
};
exports.RegisterAttribute = RegisterAttribute;

function SelectorAttribute(obj, sel_name, type_sig) {
  console.log ("In SelectorAttribute ctor");
  Attribute.call(this, obj);
  obj._ck_exported = true;
  obj._ck_sel = sel_name;
  obj._ck_typeSig = type_sig || "@@:";
};
exports.SelectorAttribute = SelectorAttribute;
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
*/

// save ourselves some long lines with this function
function does_not_conform_to(o, p) {
  return ConformsToProtocolAttribute.doesObjectConformTo(o, p);
}

function selectorInvoker(sel) {
  let sel_invoke = objc_internal.selectorInvoker(sel);
  return function () {
    console.log("invoking selector " + sel + " on object of type " + this.constructor.name);
    return sel_invoke.apply(this, [sel].concat(Array.prototype.slice.call(arguments)));
  };
}
exports.selectorInvoker = selectorInvoker;

exports.instanceSelector = function instanceSelector (selector) {
  let instance_info = Object.create(null);
  instance_info.sel = selector;
  instance_info.makeUIAppearance = function() {
    instance_info._ck_appearance = true;
    return instance_info;
  };
  instance_info.returns = function (typeGetter) {
    instance_info.returnTypeGetter = typeGetter;
    return instance_info;
  };
  instance_info.params = function (typeGetter) {
    instance_info.paramTypeGetter = typeGetter;
    return instance_info;
  };
  instance_info.impl = function (fn) {
    instance_info.body = fn;
    return instance_info;
  };
  instance_info.register = function(cls, name) {
    console.log ("instance_info.register, name = " + name + ", selector = " + selector);

    instance_info.sel = instance_info.sel || name;
    instance_info.declaringType = cls;

    let install_selector_attribute;
    let f;

    if (!instance_info.body) {
      f = selectorInvoker(instance_info.sel);
      install_selector_attribute = false;
    }
    else {
      f = instance_info.body;
      install_selector_attribute = true;
    }

    let fsig;
    if (instance_info.returnTypeGetter) {
      let paramTypes = instance_info.paramTypesGetter ? instance_info.paramTypesGetter() : [];
      try {
        fsig = typeSignature([instance_info.returnTypeGetter(), NSObject, sig.Selector].concat(paramTypes));
      }
      catch (error) {
        console.log("error in type specification for " + c.name + " " + sel + ": " + error);
      }
    }
    else {
      fsig = "@@:"; // is this a reasonable thing to default to?
    }

    if (install_selector_attribute) {
      new SelectorAttribute (f, instance_info.sel, fsig);
    }
    else {
      f._typeSig = fsig;
    }

    f._ck_appearance = instance_info._ck_appearance;
    f._ckInfo = instance_info;

    Object.defineProperty (cls.prototype, name, { value: f });
  };
  return instance_info;
};

exports.staticSelector = function staticSelector (selector) {
  let static_info = {ck: {sel: selector, instance: false}};
  static_info.makeUIAppearance = function() {
    static_info.ck.uiappearance = true;
    return static_info;
  };
  static_info.returns = function (typeGetter) {
    static_info.ck.returnType = typeGetter;
    return static_info;
  };
  static_info.params = function (typeGetter) {
    static_info.ck.paramsType = typeGetter;
    return static_info;
  };
  static_info.impl = function (fn) {
    static_info.ck.impl = fn;
    return static_info;
  };
  static_info.register = function(cls, name) {
    Object.defineProperty (cls, name, { value: selectorInvoker(selector || name) });
    static_info.ck.sel = static_info.ck.sel || name;
  };
  return static_info;
};

function addProperty (opts, instance) {
  let info = Object.create(null);
  info.instance = instance;

  info.register = function(cls, jsprop) {
    // if opts are left off, and jsprop = 'foo',
    // we assume the getter is 'foo' and the setter is
    // 'setFoo:'
    let getter = null;
    let setter = null;

    console.log("registering property " + jsprop + ", with opts = " + opts);
    if (!opts) {
      getter = selectorInvoker(jsprop);
      setter = selectorInvoker("set" + jsprop[0].toUpperCase() + jsprop.slice(1) + ":");
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
      }
      else {
	console.log ("default getter " + jsprop);
	getter = selectorInvoker(jsprop);
      }

      if ("set" in opts) {
	if (opts.set) {
	  if (typeof opts.set === 'string')
	    setter = selectorInvoker(opts.set);
          else if (typeof opts.set === 'function')
            setter = opts.set;
          else
            throw "you can only use a string or a function for set:";
	}
      }
      else {
	console.log ("default setter");
        setter = selectorInvoker("set" + jsprop[0].toUpperCase() + jsprop.slice(1) + ":");
      }

      if ("ivar" in opts) {
	if (setter) setter._ck_ivar = opts.ivar;
	if (getter) getter._ck_ivar = opts.ivar;
      }
    }

    if (info._ck_appearance && setter) setter._ck_appearance = true;
    if (info._ck_appearance && getter) getter._ck_appearance = true;

    let descriptor = { enumerable: true, configurable: true };
    if (setter) descriptor.set = setter;
    if (getter) descriptor.get = getter;

    Object.defineProperty(instance ? cls.prototype : cls, jsprop, descriptor);

  };

  info.makeUIAppearance = function() {
    if (setter) info._ck_appearance = true;
    return info;
  };

  return info;
};

function instanceProperty(opts) {
  console.log ("adding instanceProperty opts = " + opts);
  let info = addProperty(opts, true);
  console.log ("done");
  return info;
};
exports.instanceProperty = instanceProperty;

function staticProperty(opts) {
  console.log ("adding staticProperty opts = " + opts);
  let info = addProperty(opts, false);
  console.log ("done");
  return info;
};
exports.staticProperty = staticProperty;

function optionalMethod(selector, args) {
  return { method: selector, tramp: args && args.tramp, sig: args && args.sig };
}
exports.optionalMethod = optionalMethod;

function requiredMethod(selector, args) {
  return { method: selector, required: true, tramp: args && args.tramp, sig: args && args.sig };
}
exports.requiredMethod = requiredMethod;

function optionalProperty(selector, accessors) {
  return { property: selector, get: accessors && accessors.get, set: accessors && accessors.set };
}
exports.optionalProperty = optionalProperty;

function requiredProperty(selector, args) {
  return { property: selector, required: true, get: accessors && accessors.get, set: accessors && accessors.set };
}
exports.requiredProperty = requiredProperty;

function __extends (child, parent) {
  let keys = Object.getOwnPropertyNames(parent);
  let can_put = function(o, p) {
    let own = Object.getOwnPropertyDescriptor(o, p);
    return !own || (own.configurable || own.writable);
  };
  for (let i = 0, e = keys.length; i < e; i ++) {
    let key = keys[i];
    if (can_put (child, key))
      Object.defineProperty(child, key, Object.getOwnPropertyDescriptor(parent, key));
  }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype; child.prototype = new ctor();
  child.__super__ = parent.prototype;
  return child;
}

function createClass(baseType, description) {
  let base_ctor = baseType.constructor;

  let type_ctor = description.constructor || function type_ctor(_super) {
    _super.apply (Array.prototype.slice.call(arguments, 1));
  };

  function ctor () {
    type_ctor.apply(this, [base_ctor].concat(Array.prototype.slice.call(arguments)));
  };

  __extends (ctor, baseType);

  if (description) {
    var names = Object.getOwnPropertyNames(description);
    for (var i = 0, e = names.length; i < e; i ++) {
      if (names[i] === "constructor") continue; // we handled this above

      let pname = names[i];
      let info = description[pname];
      if (info.register)
	info.register(ctor, pname);
      else
	ctor[pname] = info;
    }
  }

  return ctor;
};

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

function registerClass(cls, name) {
  cls.name = name;

  console.log("registering " + name);

  // prepare the instance methods
  registerMembers(cls.prototype, obj);

  console.log(1);
  // prepare static methods
  registerMembers(cls, obj);

  console.log(2);
  // register the class with objective-c
  new RegisterAttribute(cls, name);

  console.log(3);
  return cls;
}

function extendClass(name, baseType, description) {
  console.log("a");
  let ctor = createClass(baseType, description);
  console.log("b");
  registerClass (ctor, name);
  console.log("c");
  return ctor;
};
exports.extendClass = extendClass;

let autoboxCount = 0;
exports.autobox = function autobox(protocol) {
    let ProtocolProxy = createClass (foundation.NSObject,
        function ProtocolProxy() {
	  ProtocolProxy.__super__.constructor.call(this, objc_internal.allocInstance(this.constructor._ck_register));
	});

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
              if (value.method) throw String(obj) + " is missing required method " + key + " from protocol " + String(protocol);
              if (value.property) throw String(obj) + " is missing required property " + key + " from protocol " + String(protocol);
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
	  throw "unhandled case:  property " + key + " overriding from a protocol " + String(protocol);
        }
    }

    new ConformsToProtocolAttribute(ProtocolProxy, protocol);

    registerClass ("CKProtocolProxy" + String(autoboxCount++), ProtocolProxy);

    return new ProtocolProxy();
};

function autoboxProperty(protocolType) {
  let autobox_info = Object.create(null);

  autobox_info.register = function (cls, jsprop) {
    console.log ("registering autobox property " + jsprop);
    let propinfo = addProperty ({ set: function (v) {
				    if (!info.invoker) {
				      console.log ("selector = " + "set" + jsprop[0].toUpperCase() + jsprop.slice(1) + ":");
				      info.invoker = selectorInvoker("set" + jsprop[0].toUpperCase() + jsprop.slice(1) + ":");
				    }
				    info.invoker.call (this, autobox(v, type));
				  }
				}, true);
    propinfo.register (cls, jsprop);
    console.log ("done");
  };

  return autobox_info;
}
exports.autoboxProperty = autoboxProperty;

function outlet (outletType) {
  let outlet_info = Object.create(null);

  outlet_info.register = function (cls, jsprop) {
    console.log ("registering outlet property " + jsprop);
    let propinfo = addProperty ({ get: function() {
				      //console.log(`in getter for ${jsprop}, this = ${this.constructor.name}`);
				      return new outletType (objc_internal.getInstanceVariable(this, jsprop));
				    },

				    set: function(v) {
				      //console.log(`in setter for ${jsprop}, this = ${this.constructor.name}`);
				      return objc_internal.setInstanceVariable(this, jsprop, v);
				    },

				    ivar: jsprop

				}, true);
    propinfo.register (cls, jsprop);
    console.log ("done");
  };

  return outlet_info;
};
exports.outlet = outlet;

exports.makeEnum = function makeEnum(spec) {
    let addConstant = function(obj, jsprop, v) { return Object.defineProperty(obj, jsprop, { value: v, enumerable: true, configurable: false, writable: false }); };

    let rv = Object.create(null);
    for (let name in spec) {
      addConstant (rv, name, spec[name]);
    }
    return rv;
};
