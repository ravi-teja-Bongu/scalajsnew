(function(){
'use strict';
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.14.0",
  "fileLevelThis": this
});
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))))
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)))
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1)
  };
  $throwClassCastException(arg0, arg1)
}
function $throwArrayIndexOutOfBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))))
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))))
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException())
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException())
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException()
  };
  return arg0
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return $throwNullPointerException()
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0)
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0)
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0)
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0)
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0)
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0)
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance))
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_StringIndexOutOfBoundsException(arg1))
  } else {
    return r
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4)
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4)
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)])
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4)
    } else {
      $throwArrayStoreException(null)
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4)
  } else {
    $throwArrayStoreException(null)
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"))
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"))
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"))
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"))
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"))
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"))
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"))
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"))
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"))
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"))
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException()
    };
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  return this.u[i]
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOfBoundsException(i)
  };
  this.u[i] = v
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException()
      };
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
function $s_LMain__main__AT__V(args) {
  $m_LMain$().main__AT__V(args)
}
/** @constructor */
function $c_LMain$() {
  /*<skip>*/
}
$c_LMain$.prototype = new $h_O();
$c_LMain$.prototype.constructor = $c_LMain$;
/** @constructor */
function $h_LMain$() {
  /*<skip>*/
}
$h_LMain$.prototype = $c_LMain$.prototype;
$c_LMain$.prototype.main__AT__V = (function(args) {
  var $$x3 = ReactDOM;
  var $$x2 = $m_LTextEditor$();
  var this$1 = $m_s_$less$colon$less$();
  var $$x1 = this$1.s_$less$colon$less$__f_singleton;
  var constructor = $a_LTextEditor();
  var stage = $n($$x2).apply__s_$eq$colon$eq__sjs_js_Dynamic__sjs_js_Array($$x1, constructor);
  if ((stage[0] === null)) {
    throw new $c_jl_IllegalStateException("This component has already been built into a ReactElement, and cannot be reused")
  };
  var ret = React.createElement.apply(React, stage);
  stage[0] = null;
  $$x3.render(ret, document.getElementById("root"))
});
var $d_LMain$ = new $TypeData().initClass({
  LMain$: 0
}, false, "Main$", {
  LMain$: 1,
  O: 1
});
$c_LMain$.prototype.$classData = $d_LMain$;
var $n_LMain$;
function $m_LMain$() {
  if ((!$n_LMain$)) {
    $n_LMain$ = new $c_LMain$()
  };
  return $n_LMain$
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]))
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  var value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
  /*<skip>*/
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1))
  } else {
    return $n(this.jl_System$SystemProperties$__f_properties).getProperty__T__T__T(key, default$1)
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
  /*<skip>*/
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
/** @constructor */
function $c_ju_Arrays$() {
  /*<skip>*/
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
  /*<skip>*/
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = $n(a).u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0)
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = $n(a).get(mid);
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid
      } else if ((cmp === 0)) {
        return mid
      } else {
        startIndex = ((1 + mid) | 0)
      }
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi))
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi)
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24)
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16)
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi)
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo + $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo - $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $$x1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0.0))))
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)))
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1
  } else {
    var abs__lo = lo;
    var abs__hi = hi
  };
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo))
  };
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi
    };
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi
    };
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0)
    } else {
      return absRLo
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
function $is_F1(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)))
}
function $as_F1(obj) {
  return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"))
}
function $isArrayOf_F1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F1)))
}
function $asArrayOf_F1(obj, depth) {
  return (($isArrayOf_F1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function1;", depth))
}
function $is_F2(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F2)))
}
function $as_F2(obj) {
  return (($is_F2(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function2"))
}
function $isArrayOf_F2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F2)))
}
function $asArrayOf_F2(obj, depth) {
  return (($isArrayOf_F2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function2;", depth))
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    $n(f).apply__O__O($n(it).next__O())
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end)
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
}
/** @constructor */
function $c_sc_StringOps$() {
  this.sc_StringOps$__f_fallback = null;
  $n_sc_StringOps$ = this;
  this.sc_StringOps$__f_fallback = new $c_sjsr_AnonFunction1(((x$1$2) => $m_sc_StringOps$().sc_StringOps$__f_fallback))
}
$c_sc_StringOps$.prototype = new $h_O();
$c_sc_StringOps$.prototype.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
  /*<skip>*/
}
$h_sc_StringOps$.prototype = $c_sc_StringOps$.prototype;
$c_sc_StringOps$.prototype.stripMargin$extension__T__C__T = (function(this$, marginChar) {
  var this$1 = $n(this$);
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$1.length);
  $m_sc_StringOps$();
  $m_sc_StringOps$();
  var this$4 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$4.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < this$4.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
    var arg1 = this$4.next__T();
    var this$5 = $n(arg1);
    var len = this$5.length;
    var index = 0;
    while (true) {
      if ((index < len)) {
        var this$6 = $n(arg1);
        var index$1 = index;
        var $$x1 = ($charAt(this$6, index$1) <= 32)
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        index = ((1 + index) | 0)
      } else {
        break
      }
    };
    if ((index < len)) {
      var this$7 = $n(arg1);
      var index$2 = index;
      var $$x2 = ($charAt(this$7, index$2) === marginChar)
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var this$8 = $n(arg1);
      var beginIndex = ((1 + index) | 0);
      if (((beginIndex < 0) || (beginIndex > this$8.length))) {
        $charAt(this$8, beginIndex)
      };
      var stripped = $as_T(this$8.substring(beginIndex))
    } else {
      var stripped = arg1
    };
    sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + sb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + stripped)
  };
  return sb.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
var $d_sc_StringOps$ = new $TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
function $p_sci_IndexedSeqDefaults$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 64
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
}
$c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$c_sci_IndexedSeqDefaults$.prototype.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
  /*<skip>*/
}
$h_sci_IndexedSeqDefaults$.prototype = $c_sci_IndexedSeqDefaults$.prototype;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0)
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
  /*<skip>*/
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = $n(a).u.length;
  if ((level === 0)) {
    while ((i < len)) {
      $n(f).apply__O__O($n(a).get(i));
      i = ((1 + i) | 0)
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, $asArrayOf_O($n(a).get(i), 1), f);
      i = ((1 + i) | 0)
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().initClass({
  sci_VectorStatics$: 0
}, false, "scala.collection.immutable.VectorStatics$", {
  sci_VectorStatics$: 1,
  O: 1
});
$c_sci_VectorStatics$.prototype.$classData = $d_sci_VectorStatics$;
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$()
  };
  return $n_sci_VectorStatics$
}
/** @constructor */
function $c_s_package$() {
  this.s_package$__f_Nil = null;
  $n_s_package$ = this;
  new $c_s_package$$anon$1();
  $m_sc_Iterable$();
  $m_sc_Iterable$();
  $m_sci_Seq$();
  $m_sci_IndexedSeq$();
  $m_sc_Iterator$();
  $m_sci_List$();
  this.s_package$__f_Nil = $m_sci_Nil$();
  $m_sci_LazyList$();
  $m_sci_Vector$()
}
$c_s_package$.prototype = new $h_O();
$c_s_package$.prototype.constructor = $c_s_package$;
/** @constructor */
function $h_s_package$() {
  /*<skip>*/
}
$h_s_package$.prototype = $c_s_package$.prototype;
var $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
var $n_s_package$;
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
  /*<skip>*/
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
  /*<skip>*/
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y)
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y)
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $uC($n(x3));
      return (x2$1 === this$1)
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC($n(x3));
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3))
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2)
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2)
    } else {
      return false
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2))
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1))
    } else {
      return false
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn))
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $uC($n(xc));
    var this$2 = $uC($n(x2));
    return (this$1 === this$2)
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $uC($n(xc));
      return (x2$1 === this$3)
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC($n(xc));
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1))
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc))
    }
  } else {
    return ((xc === null) && (y === null))
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
  /*<skip>*/
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
/** @constructor */
function $c_sr_Statics$() {
  /*<skip>*/
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
  /*<skip>*/
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi))
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3)
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi))
  } else {
    return $dp_hashCode__I($n(x))
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$c_sr_Statics$PFMarker$.prototype = new $h_O();
$c_sr_Statics$PFMarker$.prototype.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
  /*<skip>*/
}
$h_sr_Statics$PFMarker$.prototype = $c_sr_Statics$PFMarker$.prototype;
var $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
/** @constructor */
function $c_sjs_js_$bar$() {
  /*<skip>*/
}
$c_sjs_js_$bar$.prototype = new $h_O();
$c_sjs_js_$bar$.prototype.constructor = $c_sjs_js_$bar$;
/** @constructor */
function $h_sjs_js_$bar$() {
  /*<skip>*/
}
$h_sjs_js_$bar$.prototype = $c_sjs_js_$bar$.prototype;
$c_sjs_js_$bar$.prototype.undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any = (function(value, ev) {
  if ((value === (void 0))) {
    return (void 0)
  } else {
    var a = $n(ev).apply__O__O(value);
    return a
  }
});
var $d_sjs_js_$bar$ = new $TypeData().initClass({
  sjs_js_$bar$: 0
}, false, "scala.scalajs.js.$bar$", {
  sjs_js_$bar$: 1,
  O: 1
});
$c_sjs_js_$bar$.prototype.$classData = $d_sjs_js_$bar$;
var $n_sjs_js_$bar$;
function $m_sjs_js_$bar$() {
  if ((!$n_sjs_js_$bar$)) {
    $n_sjs_js_$bar$ = new $c_sjs_js_$bar$()
  };
  return $n_sjs_js_$bar$
}
/** @constructor */
function $c_sjs_js_special_package$() {
  /*<skip>*/
}
$c_sjs_js_special_package$.prototype = new $h_O();
$c_sjs_js_special_package$.prototype.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
  /*<skip>*/
}
$h_sjs_js_special_package$.prototype = $c_sjs_js_special_package$.prototype;
$c_sjs_js_special_package$.prototype.objectLiteral__sci_Seq__sjs_js_Object = (function(properties) {
  var result = {};
  $n(properties).foreach__F1__V(new $c_sjsr_AnonFunction1(((pair$2) => {
    var pair = $as_T2(pair$2);
    result[$n(pair).T2__f__1] = $n(pair).T2__f__2
  })));
  return result
});
var $d_sjs_js_special_package$ = new $TypeData().initClass({
  sjs_js_special_package$: 0
}, false, "scala.scalajs.js.special.package$", {
  sjs_js_special_package$: 1,
  O: 1
});
$c_sjs_js_special_package$.prototype.$classData = $d_sjs_js_special_package$;
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$()
  };
  return $n_sjs_js_special_package$
}
/** @constructor */
function $c_sjs_js_timers_package$() {
  /*<skip>*/
}
$c_sjs_js_timers_package$.prototype = new $h_O();
$c_sjs_js_timers_package$.prototype.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
  /*<skip>*/
}
$h_sjs_js_timers_package$.prototype = $c_sjs_js_timers_package$.prototype;
$c_sjs_js_timers_package$.prototype.setInterval__D__F0__sjs_js_timers_SetIntervalHandle = (function(interval, body) {
  return setInterval((() => {
    var this$2 = $n(body);
    this$2.apply__O()
  }), interval)
});
$c_sjs_js_timers_package$.prototype.clearInterval__sjs_js_timers_SetIntervalHandle__V = (function(handle) {
  clearInterval(handle)
});
var $d_sjs_js_timers_package$ = new $TypeData().initClass({
  sjs_js_timers_package$: 0
}, false, "scala.scalajs.js.timers.package$", {
  sjs_js_timers_package$: 1,
  O: 1
});
$c_sjs_js_timers_package$.prototype.$classData = $d_sjs_js_timers_package$;
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$()
  };
  return $n_sjs_js_timers_package$
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()))
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())))
    };
    var i = 0;
    while ((i < arr)) {
      var $$x1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0)
    };
    return this.finalizeHash__I__I__I(h, arr)
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0)
  };
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n)
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0)
  };
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
  };
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $$x1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, i)
    };
    prev = hash;
    i = ((1 + i) | 0)
  };
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break
    }
    case 1: {
      var $$x1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $$x2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0)
          };
          return this.finalizeHash__I__I__I(h, l)
        };
        prev = hash;
        i = ((1 + i) | 0)
      };
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var this$1 = $n(elems);
    this$1.head__E()
  };
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
});
function $p_Lslinky_core_BaseComponentWrapper__getPatchedConstructor__sjs_js_Dynamic__sjs_js_Dynamic($thiz, constructorTag) {
  if (($thiz.Lslinky_core_BaseComponentWrapper__f_patchedConstructor === null)) {
    var componentPrototype = constructorTag.prototype;
    var x = componentPrototype.componentWillMount;
    var y = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentWillMount;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x, y)) {
      var $$x1 = $m_sjs_js_$bar$();
      var this$2 = $m_s_$less$colon$less$();
      componentPrototype.componentWillMount = $n($$x1).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$2.s_$less$colon$less$__f_singleton)
    };
    var x$1 = componentPrototype.componentDidMount;
    var y$1 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentDidMount;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y$1)) {
      var $$x2 = $m_sjs_js_$bar$();
      var this$4 = $m_s_$less$colon$less$();
      componentPrototype.componentDidMount = $n($$x2).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$4.s_$less$colon$less$__f_singleton)
    };
    var x$2 = componentPrototype.componentWillReceiveProps;
    var y$2 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentWillReceiveProps;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$2, y$2))) {
      var orig = componentPrototype.componentWillReceiveProps;
      componentPrototype.componentWillReceiveProps = (function(arg1$2) {
        $thiz.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$1__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction1__V(this, arg1$2, orig)
      })
    } else {
      var $$x3 = $m_sjs_js_$bar$();
      var this$6 = $m_s_$less$colon$less$();
      componentPrototype.componentWillReceiveProps = $n($$x3).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$6.s_$less$colon$less$__f_singleton)
    };
    var x$3 = componentPrototype.shouldComponentUpdate;
    var y$3 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.shouldComponentUpdate;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$3, y$3))) {
      var orig$2 = componentPrototype.shouldComponentUpdate;
      componentPrototype.shouldComponentUpdate = (function(arg1$2$1, arg2$2) {
        return $thiz.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$3__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__Z(this, arg1$2$1, arg2$2, orig$2)
      })
    } else {
      var $$x4 = $m_sjs_js_$bar$();
      var this$8 = $m_s_$less$colon$less$();
      componentPrototype.shouldComponentUpdate = $n($$x4).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$8.s_$less$colon$less$__f_singleton)
    };
    var x$4 = componentPrototype.componentWillUpdate;
    var y$4 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentWillUpdate;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$4, y$4))) {
      var orig$3 = componentPrototype.componentWillUpdate;
      componentPrototype.componentWillUpdate = (function(arg1$2$2, arg2$2$1) {
        $thiz.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$5__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__V(this, arg1$2$2, arg2$2$1, orig$3)
      })
    } else {
      var $$x5 = $m_sjs_js_$bar$();
      var this$10 = $m_s_$less$colon$less$();
      componentPrototype.componentWillUpdate = $n($$x5).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$10.s_$less$colon$less$__f_singleton)
    };
    var x$5 = componentPrototype.getSnapshotBeforeUpdate;
    var y$5 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.getSnapshotBeforeUpdate;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$5, y$5))) {
      var orig$4 = componentPrototype.getSnapshotBeforeUpdate;
      componentPrototype.getSnapshotBeforeUpdate = (function(arg1$2$3, arg2$2$2) {
        return $thiz.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$7__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__O(this, arg1$2$3, arg2$2$2, orig$4)
      })
    } else {
      var $$x6 = $m_sjs_js_$bar$();
      var this$12 = $m_s_$less$colon$less$();
      componentPrototype.getSnapshotBeforeUpdate = $n($$x6).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$12.s_$less$colon$less$__f_singleton)
    };
    var x$6 = componentPrototype.componentDidUpdate;
    var y$6 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentDidUpdate;
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x$6, y$6))) {
      var orig$5 = componentPrototype.componentDidUpdate;
      componentPrototype.componentDidUpdateScala = orig$5;
      componentPrototype.componentDidUpdate = (function(arg1$2$4, arg2$2$3, arg3$2) {
        $thiz.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$9__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_Any__sjs_js_Dynamic__V(this, arg1$2$4, arg2$2$3, arg3$2, orig$5)
      })
    } else {
      var $$x7 = $m_sjs_js_$bar$();
      var this$14 = $m_s_$less$colon$less$();
      componentPrototype.componentDidUpdate = $n($$x7).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$14.s_$less$colon$less$__f_singleton)
    };
    var x$7 = componentPrototype.componentWillUnmount;
    var y$7 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentWillUnmount;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x$7, y$7)) {
      var $$x8 = $m_sjs_js_$bar$();
      var this$16 = $m_s_$less$colon$less$();
      componentPrototype.componentWillUnmount = $n($$x8).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$16.s_$less$colon$less$__f_singleton)
    };
    var x$8 = componentPrototype.componentDidCatch;
    var y$8 = $m_Lslinky_core_DefinitionBase$().Lslinky_core_DefinitionBase$__f_defaultBase.componentDidCatch;
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(x$8, y$8)) {
      var $$x9 = $m_sjs_js_$bar$();
      var this$18 = $m_s_$less$colon$less$();
      componentPrototype.componentDidCatch = $n($$x9).undefOr2jsAny__sjs_js_$bar__F1__sjs_js_Any((void 0), this$18.s_$less$colon$less$__f_singleton)
    };
    componentPrototype._base = $thiz;
    var descriptor = Object.getOwnPropertyDescriptor(componentPrototype, "initialState");
    if ((descriptor !== (void 0))) {
      var v = descriptor.writable;
      var needsExtraApply = (!(v === (void 0)))
    } else {
      var needsExtraApply = false
    };
    $thiz.needsExtraApply = needsExtraApply;
    var s = $objectGetClass($thiz).getSimpleName__T();
    constructorTag.displayName = s;
    if (($thiz.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps !== null)) {
      constructorTag.getDerivedStateFromProps = ((arg1$2$5, arg2$2$4) => $thiz.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$11__sjs_js_Object__sjs_js_Object__sjs_js_Object(arg1$2$5, arg2$2$4))
    };
    if (($thiz.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError !== null)) {
      constructorTag.getDerivedStateFromError = ((arg1$2$6) => $thiz.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$15__sjs_js_Error__sjs_js_Object(arg1$2$6))
    };
    $thiz.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = constructorTag
  };
  return $thiz.Lslinky_core_BaseComponentWrapper__f_patchedConstructor
}
function $ct_Lslinky_core_BaseComponentWrapper__Lslinky_core_StateReaderProvider__Lslinky_core_StateWriterProvider__($thiz, sr, sw) {
  $thiz.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps = null;
  $thiz.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError = null;
  $thiz.Lslinky_core_BaseComponentWrapper__f_hot_stateReader = $as_Lslinky_readwrite_Reader(sr);
  $thiz.Lslinky_core_BaseComponentWrapper__f_hot_stateWriter = $as_Lslinky_readwrite_Writer(sw);
  $thiz.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = null;
  $thiz.Lslinky_core_BaseComponentWrapper__f_lastConstructorTag = null;
  $thiz.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = null;
  return $thiz
}
/** @constructor */
function $c_Lslinky_core_BaseComponentWrapper() {
  this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps = null;
  this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError = null;
  this.Lslinky_core_BaseComponentWrapper__f_hot_stateReader = null;
  this.Lslinky_core_BaseComponentWrapper__f_hot_stateWriter = null;
  this.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = null;
  this.Lslinky_core_BaseComponentWrapper__f_lastConstructorTag = null;
  this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = null
}
$c_Lslinky_core_BaseComponentWrapper.prototype = new $h_O();
$c_Lslinky_core_BaseComponentWrapper.prototype.constructor = $c_Lslinky_core_BaseComponentWrapper;
/** @constructor */
function $h_Lslinky_core_BaseComponentWrapper() {
  /*<skip>*/
}
$h_Lslinky_core_BaseComponentWrapper.prototype = $c_Lslinky_core_BaseComponentWrapper.prototype;
$c_Lslinky_core_BaseComponentWrapper.prototype.componentConstructor__Lslinky_readwrite_Reader__Lslinky_readwrite_Writer__Lslinky_readwrite_Reader__sjs_js_Dynamic__sjs_js_Object = (function(propsReader, stateWriter, stateReader, constructorTag) {
  var x = this.Lslinky_core_BaseComponentWrapper__f_lastConstructorTag;
  if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, constructorTag))) {
    this.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = null;
    this.Lslinky_core_BaseComponentWrapper__f_lastConstructorTag = constructorTag
  };
  if ((propsReader !== null)) {
    this._propsReader = propsReader
  };
  if ((stateReader !== null)) {
    this._stateReader = stateReader
  };
  if ((stateWriter !== null)) {
    this._stateWriter = stateWriter
  };
  return $n($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_slinky$core$BaseComponentWrapper$$componentConstructorMiddleware).apply__O__O__O($p_Lslinky_core_BaseComponentWrapper__getPatchedConstructor__sjs_js_Dynamic__sjs_js_Dynamic(this, constructorTag), this)
});
$c_Lslinky_core_BaseComponentWrapper.prototype.apply__O__sjs_js_Dynamic__sjs_js_Array = (function(p, constructorTag) {
  var array = [new $c_T2("__", p)];
  var properties = new $c_sjsr_WrappedVarArgs(array);
  var propsObj = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(properties);
  var x = this.Lslinky_core_BaseComponentWrapper__f_lastConstructorTag;
  if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, constructorTag))) {
    this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = null
  };
  if ((this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance === null)) {
    this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = this.componentConstructor__Lslinky_readwrite_Reader__Lslinky_readwrite_Writer__Lslinky_readwrite_Reader__sjs_js_Dynamic__sjs_js_Object(null, this.Lslinky_core_BaseComponentWrapper__f_hot_stateWriter, this.Lslinky_core_BaseComponentWrapper__f_hot_stateReader, constructorTag)
  };
  return [this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance, propsObj]
});
$c_Lslinky_core_BaseComponentWrapper.prototype.apply__s_$eq$colon$eq__sjs_js_Dynamic__sjs_js_Array = (function(ev, constructorTag) {
  return this.apply__O__sjs_js_Dynamic__sjs_js_Array(($n(ev), (void 0)), constructorTag)
});
$c_Lslinky_core_BaseComponentWrapper.prototype.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$1__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction1__V = (function(self, props, orig$1) {
  var this$1 = $m_Lslinky_core_DefinitionBase$();
  orig$1.call(self, ((($as_T((typeof props)) === "object") && $uZ(props.hasOwnProperty("__"))) ? props.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), props)))
});
$c_Lslinky_core_BaseComponentWrapper.prototype.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$3__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__Z = (function(self, nextProps, nextState, orig$2) {
  var this$1 = $m_Lslinky_core_DefinitionBase$();
  var $$x2 = ((($as_T((typeof nextProps)) === "object") && $uZ(nextProps.hasOwnProperty("__"))) ? nextProps.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), nextProps));
  var this$2 = $m_Lslinky_core_DefinitionBase$();
  var $$x1 = orig$2.call(self, $$x2, ((($as_T((typeof nextState)) === "object") && $uZ(nextState.hasOwnProperty("__"))) ? nextState.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._stateReader), nextState)));
  return $uZ($$x1)
});
$c_Lslinky_core_BaseComponentWrapper.prototype.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$5__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__V = (function(self, nextProps, nextState, orig$3) {
  var this$1 = $m_Lslinky_core_DefinitionBase$();
  var $$x1 = ((($as_T((typeof nextProps)) === "object") && $uZ(nextProps.hasOwnProperty("__"))) ? nextProps.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), nextProps));
  var this$2 = $m_Lslinky_core_DefinitionBase$();
  orig$3.call(self, $$x1, ((($as_T((typeof nextState)) === "object") && $uZ(nextState.hasOwnProperty("__"))) ? nextState.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._stateReader), nextState)))
});
$c_Lslinky_core_BaseComponentWrapper.prototype.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$7__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_ThisFunction2__O = (function(self, prevProps, prevState, orig$4) {
  var this$1 = $m_Lslinky_core_DefinitionBase$();
  var $$x1 = ((($as_T((typeof prevProps)) === "object") && $uZ(prevProps.hasOwnProperty("__"))) ? prevProps.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), prevProps));
  var this$2 = $m_Lslinky_core_DefinitionBase$();
  return orig$4.call(self, $$x1, ((($as_T((typeof prevState)) === "object") && $uZ(prevState.hasOwnProperty("__"))) ? prevState.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._stateReader), prevState)))
});
$c_Lslinky_core_BaseComponentWrapper.prototype.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$9__sjs_js_Object__sjs_js_Object__sjs_js_Object__sjs_js_Any__sjs_js_Dynamic__V = (function(self, prevProps, prevState, snapshot, orig$5) {
  var this$1 = $m_Lslinky_core_DefinitionBase$();
  var $$x1 = ((($as_T((typeof prevProps)) === "object") && $uZ(prevProps.hasOwnProperty("__"))) ? prevProps.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._propsReader), prevProps));
  var this$2 = $m_Lslinky_core_DefinitionBase$();
  orig$5.call(self, $$x1, ((($as_T((typeof prevState)) === "object") && $uZ(prevState.hasOwnProperty("__"))) ? prevState.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(self._base._stateReader), prevState)), snapshot)
});
$c_Lslinky_core_BaseComponentWrapper.prototype.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$11__sjs_js_Object__sjs_js_Object__sjs_js_Object = (function(props, state) {
  var this$1 = $m_Lslinky_core_DefinitionBase$();
  var propsScala = ((($as_T((typeof props)) === "object") && $uZ(props.hasOwnProperty("__"))) ? props.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this._propsReader), props));
  var this$2 = $m_Lslinky_core_DefinitionBase$();
  var stateScala = ((($as_T((typeof state)) === "object") && $uZ(state.hasOwnProperty("__"))) ? state.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this._stateReader), state));
  var newState = $n(this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps).apply__O__O__O(propsScala, stateScala);
  if ((newState === null)) {
    return null
  } else if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
    return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._stateWriter), newState)
  } else {
    var array = [new $c_T2("__", newState)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }
});
$c_Lslinky_core_BaseComponentWrapper.prototype.slinky$core$BaseComponentWrapper$$$anonfun$getPatchedConstructor$15__sjs_js_Error__sjs_js_Object = (function(error) {
  var newState = $n(this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError).apply__O__O(error);
  if ((newState === null)) {
    return null
  } else if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
    return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._stateWriter), newState)
  } else {
    var array = [new $c_T2("__", newState)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }
});
/** @constructor */
function $c_Lslinky_core_BaseComponentWrapper$() {
  this.Lslinky_core_BaseComponentWrapper$__f_slinky$core$BaseComponentWrapper$$componentConstructorMiddleware = null;
  this.Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled = false;
  $n_Lslinky_core_BaseComponentWrapper$ = this;
  this.Lslinky_core_BaseComponentWrapper$__f_slinky$core$BaseComponentWrapper$$componentConstructorMiddleware = new $c_sjsr_AnonFunction2(((constructor$2, x$1$2) => constructor$2));
  this.Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled = false
}
$c_Lslinky_core_BaseComponentWrapper$.prototype = new $h_O();
$c_Lslinky_core_BaseComponentWrapper$.prototype.constructor = $c_Lslinky_core_BaseComponentWrapper$;
/** @constructor */
function $h_Lslinky_core_BaseComponentWrapper$() {
  /*<skip>*/
}
$h_Lslinky_core_BaseComponentWrapper$.prototype = $c_Lslinky_core_BaseComponentWrapper$.prototype;
var $d_Lslinky_core_BaseComponentWrapper$ = new $TypeData().initClass({
  Lslinky_core_BaseComponentWrapper$: 0
}, false, "slinky.core.BaseComponentWrapper$", {
  Lslinky_core_BaseComponentWrapper$: 1,
  O: 1
});
$c_Lslinky_core_BaseComponentWrapper$.prototype.$classData = $d_Lslinky_core_BaseComponentWrapper$;
var $n_Lslinky_core_BaseComponentWrapper$;
function $m_Lslinky_core_BaseComponentWrapper$() {
  if ((!$n_Lslinky_core_BaseComponentWrapper$)) {
    $n_Lslinky_core_BaseComponentWrapper$ = new $c_Lslinky_core_BaseComponentWrapper$()
  };
  return $n_Lslinky_core_BaseComponentWrapper$
}
/** @constructor */
function $c_Lslinky_core_DefinitionBase$() {
  this.Lslinky_core_DefinitionBase$__f_defaultBase = null;
  $n_Lslinky_core_DefinitionBase$ = this;
  var superClass$$1 = $a_Lslinky_core_DefinitionBase();
  var $$x1 = ((superClass$) => (() => {
    var this$1 = new superClass$(null);
    Object.defineProperty(this$1, "initialState", {
      "get": (function() {
        return (void 0)
      }),
      "configurable": true
    });
    this$1.render = (function() {
      return null
    });
    return this$1
  }))(superClass$$1)();
  this.Lslinky_core_DefinitionBase$__f_defaultBase = $$x1
}
$c_Lslinky_core_DefinitionBase$.prototype = new $h_O();
$c_Lslinky_core_DefinitionBase$.prototype.constructor = $c_Lslinky_core_DefinitionBase$;
/** @constructor */
function $h_Lslinky_core_DefinitionBase$() {
  /*<skip>*/
}
$h_Lslinky_core_DefinitionBase$.prototype = $c_Lslinky_core_DefinitionBase$.prototype;
$c_Lslinky_core_DefinitionBase$.prototype.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O = (function(reader, value) {
  var _\uff3fvalue = value.__value;
  if ($uZ(value.hasOwnProperty("__value"))) {
    var this$1 = $n(reader);
    return $f_Lslinky_readwrite_Reader__read__sjs_js_Object__O(this$1, _\uff3fvalue)
  } else {
    var this$2 = $n(reader);
    return $f_Lslinky_readwrite_Reader__read__sjs_js_Object__O(this$2, value)
  }
});
$c_Lslinky_core_DefinitionBase$.prototype.writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object = (function(writer, value) {
  var _\uff3fvalue = $n(writer).write__O__sjs_js_Object(value);
  if (($as_T((typeof _\uff3fvalue)) === "object")) {
    return _\uff3fvalue
  } else {
    var array = [new $c_T2("__value", _\uff3fvalue)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }
});
var $d_Lslinky_core_DefinitionBase$ = new $TypeData().initClass({
  Lslinky_core_DefinitionBase$: 0
}, false, "slinky.core.DefinitionBase$", {
  Lslinky_core_DefinitionBase$: 1,
  O: 1
});
$c_Lslinky_core_DefinitionBase$.prototype.$classData = $d_Lslinky_core_DefinitionBase$;
var $n_Lslinky_core_DefinitionBase$;
function $m_Lslinky_core_DefinitionBase$() {
  if ((!$n_Lslinky_core_DefinitionBase$)) {
    $n_Lslinky_core_DefinitionBase$ = new $c_Lslinky_core_DefinitionBase$()
  };
  return $n_Lslinky_core_DefinitionBase$
}
function $f_Lslinky_readwrite_FallbackReaders__slinky$readwrite$FallbackReaders$$$anonfun$fallback$1__sjs_js_Object__O($thiz, v) {
  var v$1 = v.__;
  if ((v$1 === (void 0))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "Tried to read opaque Scala.js type that was not written by opaque writer")
  } else {
    return v.__
  }
}
function $f_Lslinky_readwrite_FallbackWriters__fallback__Lslinky_readwrite_Writer($thiz) {
  return new $c_Lslinky_readwrite_FallbackWriters$$Lambda$1(((s$2) => {
    var array = [new $c_T2("__", s$2)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }))
}
function $f_Lslinky_readwrite_Reader__read__sjs_js_Object__O($thiz, o) {
  if ((($as_T((typeof o)) === "object") && (o !== null))) {
    var v = o.__;
    var $$x1 = (!(v === (void 0)))
  } else {
    var $$x1 = false
  };
  if ($$x1) {
    var ret = o.__
  } else {
    var ret = $thiz.forceRead__sjs_js_Object__O(o)
  };
  if ($is_Lslinky_readwrite_WithRaw(ret)) {
    ret.__slinky_raw = o
  };
  return ret
}
function $is_Lslinky_readwrite_Reader(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lslinky_readwrite_Reader)))
}
function $as_Lslinky_readwrite_Reader(obj) {
  return (($is_Lslinky_readwrite_Reader(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "slinky.readwrite.Reader"))
}
function $isArrayOf_Lslinky_readwrite_Reader(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lslinky_readwrite_Reader)))
}
function $asArrayOf_Lslinky_readwrite_Reader(obj, depth) {
  return (($isArrayOf_Lslinky_readwrite_Reader(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lslinky.readwrite.Reader;", depth))
}
function $is_Lslinky_readwrite_WithRaw(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lslinky_readwrite_WithRaw)))
}
function $as_Lslinky_readwrite_WithRaw(obj) {
  return (($is_Lslinky_readwrite_WithRaw(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "slinky.readwrite.WithRaw"))
}
function $isArrayOf_Lslinky_readwrite_WithRaw(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lslinky_readwrite_WithRaw)))
}
function $asArrayOf_Lslinky_readwrite_WithRaw(obj, depth) {
  return (($isArrayOf_Lslinky_readwrite_WithRaw(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lslinky.readwrite.WithRaw;", depth))
}
function $is_Lslinky_readwrite_Writer(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lslinky_readwrite_Writer)))
}
function $as_Lslinky_readwrite_Writer(obj) {
  return (($is_Lslinky_readwrite_Writer(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "slinky.readwrite.Writer"))
}
function $isArrayOf_Lslinky_readwrite_Writer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lslinky_readwrite_Writer)))
}
function $asArrayOf_Lslinky_readwrite_Writer(obj, depth) {
  return (($isArrayOf_Lslinky_readwrite_Writer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lslinky.readwrite.Writer;", depth))
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0)
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0)
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1)
    } else {
      var v = ((codePoint - $n($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this)).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v)
    }
  };
  return ((value < radix) ? value : (-1))
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
function $p_jl_Integer$__fail$1__T__E($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
}
/** @constructor */
function $c_jl_Integer$() {
  /*<skip>*/
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  if ((s === null)) {
    var len = 0
  } else {
    var this$1 = $n(s);
    var len = this$1.length
  };
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var this$2 = $n(s);
  var firstChar = $charAt(this$2, 0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  var $$x1 = i;
  var this$3 = $n(s);
  if (($$x1 >= this$3.length)) {
    $p_jl_Integer$__fail$1__T__E(this, s)
  };
  var result = 0.0;
  while ((i !== len)) {
    var $$x2 = $m_jl_Character$();
    var this$4 = $n(s);
    var index = i;
    var digit = $n($$x2).digitWithValidRadix__I__I__I($charAt(this$4, index), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    i = ((1 + i) | 0)
  };
  if (negative) {
    var n = (-result);
    return $uI((n | 0.0))
  } else {
    var n$1 = result;
    return $uI((n$1 | 0.0))
  }
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    var $$x1 = this;
    var reference = (false ? $$x1.sjs_js_JavaScriptException__f_exception : $n($$x1));
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if ((Error.captureStackTrace === (void 0))) {
        new Error()
      } else {
        Error.captureStackTrace(this)
      }
    };
    return this
  };
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  get "name"() {
    return $objectClassName(this)
  };
  "toString"() {
    return this.toString__T()
  };
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.s_$less$colon$less$__f_singleton = null;
  $n_s_$less$colon$less$ = this;
  this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
}
$c_s_$less$colon$less$.prototype = new $h_O();
$c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
  /*<skip>*/
}
$h_s_$less$colon$less$.prototype = $c_s_$less$colon$less$.prototype;
var $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
/** @constructor */
function $c_sci_List$$anon$1() {
  /*<skip>*/
}
$c_sci_List$$anon$1.prototype = new $h_O();
$c_sci_List$$anon$1.prototype.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
  /*<skip>*/
}
$h_sci_List$$anon$1.prototype = $c_sci_List$$anon$1.prototype;
$c_sci_List$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sci_List$$anon$1.prototype.apply__O__O = (function(x) {
  return this
});
var $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step)
}
/** @constructor */
function $c_sci_Range$() {
  /*<skip>*/
}
$c_sci_Range$.prototype = new $h_O();
$c_sci_Range$.prototype.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
  /*<skip>*/
}
$h_sci_Range$.prototype = $c_sci_Range$.prototype;
$c_sci_Range$.prototype.scala$collection$immutable$Range$$fail__I__I__I__Z__E = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."))
});
$c_sci_Range$.prototype.scala$collection$immutable$Range$$emptyRangeError__T__jl_Throwable = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"))
});
var $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
/** @constructor */
function $c_s_package$$anon$1() {
  /*<skip>*/
}
$c_s_package$$anon$1.prototype = new $h_O();
$c_s_package$$anon$1.prototype.constructor = $c_s_package$$anon$1;
/** @constructor */
function $h_s_package$$anon$1() {
  /*<skip>*/
}
$h_s_package$$anon$1.prototype = $c_s_package$$anon$1.prototype;
$c_s_package$$anon$1.prototype.toString__T = (function() {
  return "object AnyRef"
});
var $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
/** @constructor */
function $c_sr_AbstractFunction0() {
  /*<skip>*/
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
  /*<skip>*/
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>"
});
/** @constructor */
function $c_sr_AbstractFunction1() {
  /*<skip>*/
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
  /*<skip>*/
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>"
});
/** @constructor */
function $c_sr_AbstractFunction2() {
  /*<skip>*/
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
  /*<skip>*/
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>"
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
  /*<skip>*/
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i)
});
var $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
  /*<skip>*/
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj)
});
var $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_s_package$().s_package$__f_Nil, this.s_util_hashing_MurmurHash3$__f_mapSeed)
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
  /*<skip>*/
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
/** @constructor */
function $c_Lslinky_core_ComponentWrapper() {
  this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps = null;
  this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError = null;
  this.Lslinky_core_BaseComponentWrapper__f_hot_stateReader = null;
  this.Lslinky_core_BaseComponentWrapper__f_hot_stateWriter = null;
  this.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = null;
  this.Lslinky_core_BaseComponentWrapper__f_lastConstructorTag = null;
  this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = null
}
$c_Lslinky_core_ComponentWrapper.prototype = new $h_Lslinky_core_BaseComponentWrapper();
$c_Lslinky_core_ComponentWrapper.prototype.constructor = $c_Lslinky_core_ComponentWrapper;
/** @constructor */
function $h_Lslinky_core_ComponentWrapper() {
  /*<skip>*/
}
$h_Lslinky_core_ComponentWrapper.prototype = $c_Lslinky_core_ComponentWrapper.prototype;
/** @constructor */
function $c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2(outer) {
  this.Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2__f_$outer = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2__f_$outer = outer
  }
}
$c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2.prototype = new $h_O();
$c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2.prototype.constructor = $c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2;
/** @constructor */
function $h_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2() {
  /*<skip>*/
}
$h_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2.prototype = $c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2.prototype;
$c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2.prototype.forceRead__sjs_js_Object__sci_Range = (function(o) {
  var this$1 = $n(this.Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2__f_$outer);
  return $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$rangeReader$1__sjs_js_Object__sci_Range(this$1, o)
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2.prototype.forceRead__sjs_js_Object__O = (function(o) {
  return this.forceRead__sjs_js_Object__sci_Range(o)
});
var $d_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2 = new $TypeData().initClass({
  Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2: 0
}, false, "slinky.readwrite.CoreReaders$$anonfun$rangeReader$2", {
  Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2.prototype.$classData = $d_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2;
/** @constructor */
function $c_Lslinky_readwrite_CoreWriters$$Lambda$13(f) {
  this.Lslinky_readwrite_CoreWriters$$Lambda$13__f_f = null;
  this.Lslinky_readwrite_CoreWriters$$Lambda$13__f_f = f
}
$c_Lslinky_readwrite_CoreWriters$$Lambda$13.prototype = new $h_O();
$c_Lslinky_readwrite_CoreWriters$$Lambda$13.prototype.constructor = $c_Lslinky_readwrite_CoreWriters$$Lambda$13;
/** @constructor */
function $h_Lslinky_readwrite_CoreWriters$$Lambda$13() {
  /*<skip>*/
}
$h_Lslinky_readwrite_CoreWriters$$Lambda$13.prototype = $c_Lslinky_readwrite_CoreWriters$$Lambda$13.prototype;
$c_Lslinky_readwrite_CoreWriters$$Lambda$13.prototype.write__O__sjs_js_Object = (function(p) {
  return (0, this.Lslinky_readwrite_CoreWriters$$Lambda$13__f_f)(p)
});
var $d_Lslinky_readwrite_CoreWriters$$Lambda$13 = new $TypeData().initClass({
  Lslinky_readwrite_CoreWriters$$Lambda$13: 0
}, false, "slinky.readwrite.CoreWriters$$Lambda$13", {
  Lslinky_readwrite_CoreWriters$$Lambda$13: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_CoreWriters$$Lambda$13.prototype.$classData = $d_Lslinky_readwrite_CoreWriters$$Lambda$13;
/** @constructor */
function $c_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2(outer) {
  this.Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2__f_$outer = null;
  if ((outer === null)) {
    $n(null)
  } else {
    this.Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2__f_$outer = outer
  }
}
$c_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2.prototype = new $h_O();
$c_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2.prototype.constructor = $c_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2;
/** @constructor */
function $h_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2() {
  /*<skip>*/
}
$h_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2.prototype = $c_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2.prototype;
$c_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2.prototype.forceRead__sjs_js_Object__O = (function(o) {
  var this$1 = $n(this.Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2__f_$outer);
  return $f_Lslinky_readwrite_FallbackReaders__slinky$readwrite$FallbackReaders$$$anonfun$fallback$1__sjs_js_Object__O(this$1, o)
});
var $d_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2 = new $TypeData().initClass({
  Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2: 0
}, false, "slinky.readwrite.FallbackReaders$$anonfun$fallback$2", {
  Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2: 1,
  O: 1,
  Lslinky_readwrite_Reader: 1
});
$c_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2.prototype.$classData = $d_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2;
/** @constructor */
function $c_Lslinky_readwrite_FallbackWriters$$Lambda$1(f) {
  this.Lslinky_readwrite_FallbackWriters$$Lambda$1__f_f = null;
  this.Lslinky_readwrite_FallbackWriters$$Lambda$1__f_f = f
}
$c_Lslinky_readwrite_FallbackWriters$$Lambda$1.prototype = new $h_O();
$c_Lslinky_readwrite_FallbackWriters$$Lambda$1.prototype.constructor = $c_Lslinky_readwrite_FallbackWriters$$Lambda$1;
/** @constructor */
function $h_Lslinky_readwrite_FallbackWriters$$Lambda$1() {
  /*<skip>*/
}
$h_Lslinky_readwrite_FallbackWriters$$Lambda$1.prototype = $c_Lslinky_readwrite_FallbackWriters$$Lambda$1.prototype;
$c_Lslinky_readwrite_FallbackWriters$$Lambda$1.prototype.write__O__sjs_js_Object = (function(p) {
  return (0, this.Lslinky_readwrite_FallbackWriters$$Lambda$1__f_f)(p)
});
var $d_Lslinky_readwrite_FallbackWriters$$Lambda$1 = new $TypeData().initClass({
  Lslinky_readwrite_FallbackWriters$$Lambda$1: 0
}, false, "slinky.readwrite.FallbackWriters$$Lambda$1", {
  Lslinky_readwrite_FallbackWriters$$Lambda$1: 1,
  O: 1,
  Lslinky_readwrite_Writer: 1
});
$c_Lslinky_readwrite_FallbackWriters$$Lambda$1.prototype.$classData = $d_Lslinky_readwrite_FallbackWriters$$Lambda$1;
/** @constructor */
function $c_LTextEditor$() {
  this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromProps = null;
  this.Lslinky_core_BaseComponentWrapper__f_getDerivedStateFromError = null;
  this.Lslinky_core_BaseComponentWrapper__f_hot_stateReader = null;
  this.Lslinky_core_BaseComponentWrapper__f_hot_stateWriter = null;
  this.Lslinky_core_BaseComponentWrapper__f_patchedConstructor = null;
  this.Lslinky_core_BaseComponentWrapper__f_lastConstructorTag = null;
  this.Lslinky_core_BaseComponentWrapper__f_componentConstructorInstance = null;
  var this$2 = $m_Lslinky_readwrite_Reader$();
  var fresh$macro$1 = new $c_Lslinky_readwrite_FallbackReaders$$anonfun$fallback$2(this$2);
  var this$4 = $m_Lslinky_readwrite_Writer$();
  var fresh$macro$2 = $f_Lslinky_readwrite_FallbackWriters__fallback__Lslinky_readwrite_Writer(this$4);
  $ct_Lslinky_core_BaseComponentWrapper__Lslinky_core_StateReaderProvider__Lslinky_core_StateWriterProvider__(this, fresh$macro$1, fresh$macro$2)
}
$c_LTextEditor$.prototype = new $h_Lslinky_core_ComponentWrapper();
$c_LTextEditor$.prototype.constructor = $c_LTextEditor$;
/** @constructor */
function $h_LTextEditor$() {
  /*<skip>*/
}
$h_LTextEditor$.prototype = $c_LTextEditor$.prototype;
var $d_LTextEditor$ = new $TypeData().initClass({
  LTextEditor$: 0
}, false, "TextEditor$", {
  LTextEditor$: 1,
  Lslinky_core_ComponentWrapper: 1,
  Lslinky_core_BaseComponentWrapper: 1,
  O: 1
});
$c_LTextEditor$.prototype.$classData = $d_LTextEditor$;
var $n_LTextEditor$;
function $m_LTextEditor$() {
  if ((!$n_LTextEditor$)) {
    $n_LTextEditor$ = new $c_LTextEditor$()
  };
  return $n_LTextEditor$
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.isArray__Z()) {
    return ($n($thiz.getComponentType__jl_Class()).getSimpleName__T() + "[]")
  } else {
    var name = $as_T($thiz.jl_Class__f_data.name);
    var this$1 = $n(name);
    var idx = (((-1) + this$1.length) | 0);
    while (true) {
      if ((idx >= 0)) {
        var this$2 = $n(name);
        var index = idx;
        var $$x1 = ($charAt(this$2, index) === 36)
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        idx = (((-1) + idx) | 0)
      } else {
        break
      }
    };
    if ((idx >= 0)) {
      var this$3 = $n(name);
      var index$1 = idx;
      var c = $charAt(this$3, index$1);
      var $$x2 = ((c >= 48) && (c <= 57))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      idx = (((-1) + idx) | 0);
      while (true) {
        if ((idx >= 0)) {
          var this$4 = $n(name);
          var index$2 = idx;
          var c$1 = $charAt(this$4, index$2);
          var $$x3 = ((c$1 >= 48) && (c$1 <= 57))
        } else {
          var $$x3 = false
        };
        if ($$x3) {
          idx = (((-1) + idx) | 0)
        } else {
          break
        }
      };
      while (true) {
        if ((idx >= 0)) {
          var this$5 = $n(name);
          var index$3 = idx;
          var $$x4 = ($charAt(this$5, index$3) === 36)
        } else {
          var $$x4 = false
        };
        if ($$x4) {
          idx = (((-1) + idx) | 0)
        } else {
          break
        }
      }
    };
    while (true) {
      if ((idx >= 0)) {
        var this$6 = $n(name);
        var index$4 = idx;
        var currChar = $charAt(this$6, index$4);
        var $$x5 = ((currChar !== 46) && (currChar !== 36))
      } else {
        var $$x5 = false
      };
      if ($$x5) {
        idx = (((-1) + idx) | 0)
      } else {
        break
      }
    };
    var this$7 = $n(name);
    var beginIndex = ((1 + idx) | 0);
    if (((beginIndex < 0) || (beginIndex > this$7.length))) {
      $charAt(this$7, beginIndex)
    };
    return $as_T(this$7.substring(beginIndex))
  }
}
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_cachedSimpleName = null;
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
$c_jl_Class.prototype.getSimpleName__T = (function() {
  if ((this.jl_Class__f_cachedSimpleName === null)) {
    this.jl_Class__f_cachedSimpleName = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this)
  };
  return this.jl_Class__f_cachedSimpleName
});
$c_jl_Class.prototype.getComponentType__jl_Class = (function() {
  return $as_jl_Class(this.jl_Class__f_data.getComponentType())
});
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"))
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth))
}
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_$less$colon$less() {
  /*<skip>*/
}
$c_s_$less$colon$less.prototype = new $h_O();
$c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
  /*<skip>*/
}
$h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
}
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  return $thiz
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  /*<skip>*/
}
$c_sc_IterableFactory$Delegate.prototype = new $h_O();
$c_sc_IterableFactory$Delegate.prototype.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
  /*<skip>*/
}
$h_sc_IterableFactory$Delegate.prototype = $c_sc_IterableFactory$Delegate.prototype;
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest))
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z())
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
  /*<skip>*/
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
var $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$c_sci_LazyList$State$Empty$.prototype = new $h_O();
$c_sci_LazyList$State$Empty$.prototype.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
  /*<skip>*/
}
$h_sci_LazyList$State$Empty$.prototype = $c_sci_LazyList$State$Empty$.prototype;
$c_sci_LazyList$State$Empty$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list")
});
$c_sci_LazyList$State$Empty$.prototype.tail__sci_LazyList = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list")
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
/** @constructor */
function $c_sjs_js_Any$() {
  /*<skip>*/
}
$c_sjs_js_Any$.prototype = new $h_O();
$c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
  /*<skip>*/
}
$h_sjs_js_Any$.prototype = $c_sjs_js_Any$.prototype;
$c_sjs_js_Any$.prototype.fromFunction0__F0__sjs_js_Function0 = (function(f) {
  return (() => $n(f).apply__O())
});
$c_sjs_js_Any$.prototype.fromFunction1__F1__sjs_js_Function1 = (function(f) {
  return ((arg1$2) => $n(f).apply__O__O(arg1$2))
});
var $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
  /*<skip>*/
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)()
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
  /*<skip>*/
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1)
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
  /*<skip>*/
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2)
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass({
  sjsr_AnonFunction2: 0
}, false, "scala.scalajs.runtime.AnonFunction2", {
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  O: 1,
  F2: 1
});
$c_sjsr_AnonFunction2.prototype.$classData = $d_sjsr_AnonFunction2;
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC($n($as_jl_Character(that)));
    return ($thiz === this$1)
  } else {
    return false
  }
}
function $f_jl_Character__toString__T($thiz) {
  return $as_T(String.fromCharCode($thiz))
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass({
  jl_RuntimeException: 0
}, false, "java.lang.RuntimeException", {
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_RuntimeException.prototype.$classData = $d_jl_RuntimeException;
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
}
function $ct_jl_StringBuilder__I__($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException()
  };
  return $thiz
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
  /*<skip>*/
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index)
});
var $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
/** @constructor */
function $c_s_$eq$colon$eq() {
  /*<skip>*/
}
$c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
  /*<skip>*/
}
$h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
/** @constructor */
function $c_sc_AbstractIterator() {
  /*<skip>*/
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
  /*<skip>*/
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1))
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until)
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>"
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1)
});
/** @constructor */
function $c_sc_Iterable$() {
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
}
$c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sc_Iterable$.prototype.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
  /*<skip>*/
}
$h_sc_Iterable$.prototype = $c_sc_Iterable$.prototype;
var $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
var $n_sc_Iterable$;
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  return $thiz
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  /*<skip>*/
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
  /*<skip>*/
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    var knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
}
/** @constructor */
function $c_sci_Iterable$() {
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
}
$c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
  /*<skip>*/
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
var $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
/** @constructor */
function $c_sci_LazyList$() {
  this.sci_LazyList$__f__empty = null;
  $n_sci_LazyList$ = this;
  var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$()));
  this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
  new $c_sjsr_AnonFunction1(((x$10$2) => $m_sr_Statics$PFMarker$()))
}
$c_sci_LazyList$.prototype = new $h_O();
$c_sci_LazyList$.prototype.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
  /*<skip>*/
}
$h_sci_LazyList$.prototype = $c_sci_LazyList$.prototype;
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList = (function(ll, n) {
  var restRef = new $c_sr_ObjectRef(ll);
  var iRef = new $c_sr_IntRef(n);
  var state = new $c_sjsr_AnonFunction0((() => {
    var rest = $as_sci_LazyList(restRef.sr_ObjectRef__f_elem);
    var i = iRef.sr_IntRef__f_elem;
    while (((i > 0) && (!$n(rest).isEmpty__Z()))) {
      var this$4 = $n(rest);
      rest = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
      restRef.sr_ObjectRef__f_elem = rest;
      i = (((-1) + i) | 0);
      iRef.sr_IntRef__f_elem = i
    };
    return $n(rest).scala$collection$immutable$LazyList$$state__sci_LazyList$State()
  }));
  return new $c_sci_LazyList(state)
});
var $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
var $b_Lslinky_core_AttrPair;
function $a_Lslinky_core_AttrPair() {
  if ((!$b_Lslinky_core_AttrPair)) {
    $b_Lslinky_core_AttrPair = class $b_Lslinky_core_AttrPair extends Object {
      constructor(arg, arg$2) {
        var name = null;
        var value = null;
        name = $as_T(arg);
        value = arg$2;
        super();
        Object.defineProperty(this, "name", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "value", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this.name = name;
        this.value = value
      };
    }
  };
  return $b_Lslinky_core_AttrPair
}
function $s_Lslinky_core_DefinitionBase__componentDidUpdate__Lslinky_core_DefinitionBase__O__O__O__V(this$1, prevProps, prevState, snapshot) {
  this$1.componentDidUpdateScala(prevProps, prevState)
}
function $s_Lslinky_core_DefinitionBase__slinky$core$DefinitionBase$$$anonfun$setState$2__Lslinky_core_DefinitionBase__sjs_js_Object__sjs_js_Object__F2__sjs_js_Object(this$1, ps, p, fn$2) {
  var $$x2 = $n(fn$2);
  var this$2 = $m_Lslinky_core_DefinitionBase$();
  var $$x1 = ((($as_T((typeof ps)) === "object") && $uZ(ps.hasOwnProperty("__"))) ? ps.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._stateReader), ps));
  var this$3 = $m_Lslinky_core_DefinitionBase$();
  var s = $n($$x2).apply__O__O__O($$x1, ((($as_T((typeof p)) === "object") && $uZ(p.hasOwnProperty("__"))) ? p.__ : this$3.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._propsReader), p)));
  if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
    return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this$1._base._stateWriter), s)
  } else {
    var array = [new $c_T2("__", s)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }
}
function $s_Lslinky_core_DefinitionBase__slinky$core$DefinitionBase$$$anonfun$setState$5__Lslinky_core_DefinitionBase__sjs_js_Object__sjs_js_Object__F2__sjs_js_Object(this$1, ps, p, fn$4) {
  var $$x2 = $n(fn$4);
  var this$2 = $m_Lslinky_core_DefinitionBase$();
  var $$x1 = ((($as_T((typeof ps)) === "object") && $uZ(ps.hasOwnProperty("__"))) ? ps.__ : this$2.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._stateReader), ps));
  var this$3 = $m_Lslinky_core_DefinitionBase$();
  var s = $n($$x2).apply__O__O__O($$x1, ((($as_T((typeof p)) === "object") && $uZ(p.hasOwnProperty("__"))) ? p.__ : this$3.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this$1._base._propsReader), p)));
  if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
    return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this$1._base._stateWriter), s)
  } else {
    var array = [new $c_T2("__", s)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }
}
var $b_Lslinky_core_DefinitionBase;
function $a_Lslinky_core_DefinitionBase() {
  if ((!$b_Lslinky_core_DefinitionBase)) {
    $b_Lslinky_core_DefinitionBase = class $b_Lslinky_core_DefinitionBase extends React.Component {
      constructor(arg) {
        var jsProps = null;
        jsProps = arg;
        super(jsProps);
        var v = this._base;
        if ((!(v === (void 0)))) {
          var initialStateValue = this.initialState;
          var stateWithExtraApplyFix = ($uZ(this._base.needsExtraApply) ? initialStateValue() : initialStateValue);
          if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
            var $$x1 = $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._base._stateWriter), stateWithExtraApplyFix)
          } else {
            var array = [new $c_T2("__", stateWithExtraApplyFix)];
            var fields = new $c_sjsr_WrappedVarArgs(array);
            var $$x1 = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
          };
          this.state = $$x1
        }
      };
      get "props_scala"() {
        var value = this.props;
        var this$1 = $m_Lslinky_core_DefinitionBase$();
        return ((($as_T((typeof value)) === "object") && $uZ(value.hasOwnProperty("__"))) ? value.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this._base._propsReader), value))
      };
      get "state_scala"() {
        var value = this.state;
        var this$1 = $m_Lslinky_core_DefinitionBase$();
        return ((($as_T((typeof value)) === "object") && $uZ(value.hasOwnProperty("__"))) ? value.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this._base._stateReader), value))
      };
      "setState_scala_1"(arg) {
        if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
          var stateObject = $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._base._stateWriter), arg)
        } else {
          var array = [new $c_T2("__", arg)];
          var fields = new $c_sjsr_WrappedVarArgs(array);
          var stateObject = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
        };
        this.setState(stateObject)
      };
      "setState_scala_2"(arg) {
        var prep0 = $as_F1(arg);
        this.setState($m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((ps$2) => {
          var $$x1 = $n(prep0);
          var this$1 = $m_Lslinky_core_DefinitionBase$();
          var s = $n($$x1).apply__O__O(((($as_T((typeof ps$2)) === "object") && $uZ(ps$2.hasOwnProperty("__"))) ? ps$2.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this._base._stateReader), ps$2)));
          if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
            return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._base._stateWriter), s)
          } else {
            var array = [new $c_T2("__", s)];
            var fields = new $c_sjsr_WrappedVarArgs(array);
            return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
          }
        }))))
      };
      "setState_scala_3"(arg) {
        var prep0 = $as_F2(arg);
        this.setState(((arg1$2, arg2$2) => $s_Lslinky_core_DefinitionBase__slinky$core$DefinitionBase$$$anonfun$setState$2__Lslinky_core_DefinitionBase__sjs_js_Object__sjs_js_Object__F2__sjs_js_Object(this, arg1$2, arg2$2, prep0)))
      };
      "setState_scala_4"(arg, arg$2) {
        var prep1 = $as_F0(arg$2);
        if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
          var stateObject = $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._base._stateWriter), arg)
        } else {
          var array = [new $c_T2("__", arg)];
          var fields = new $c_sjsr_WrappedVarArgs(array);
          var stateObject = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
        };
        this.setState(stateObject, $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(prep1))
      };
      "setState_scala_5"(arg, arg$2) {
        var prep0 = $as_F1(arg);
        var prep1 = $as_F0(arg$2);
        this.setState($m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $c_sjsr_AnonFunction1(((ps$2) => {
          var $$x1 = $n(prep0);
          var this$1 = $m_Lslinky_core_DefinitionBase$();
          var s = $n($$x1).apply__O__O(((($as_T((typeof ps$2)) === "object") && $uZ(ps$2.hasOwnProperty("__"))) ? ps$2.__ : this$1.readWithWrappingAdjustment__Lslinky_readwrite_Reader__sjs_js_Object__O($as_Lslinky_readwrite_Reader(this._base._stateReader), ps$2)));
          if ($m_Lslinky_core_BaseComponentWrapper$().Lslinky_core_BaseComponentWrapper$__f_scalaComponentWritingEnabled) {
            return $m_Lslinky_core_DefinitionBase$().writeWithWrappingAdjustment__Lslinky_readwrite_Writer__O__sjs_js_Object($as_Lslinky_readwrite_Writer(this._base._stateWriter), s)
          } else {
            var array = [new $c_T2("__", s)];
            var fields = new $c_sjsr_WrappedVarArgs(array);
            return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
          }
        }))), $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(prep1))
      };
      "setState_scala_6"(arg, arg$2) {
        var prep0 = $as_F2(arg);
        var prep1 = $as_F0(arg$2);
        this.setState(((arg1$2, arg2$2) => $s_Lslinky_core_DefinitionBase__slinky$core$DefinitionBase$$$anonfun$setState$5__Lslinky_core_DefinitionBase__sjs_js_Object__sjs_js_Object__F2__sjs_js_Object(this, arg1$2, arg2$2, prep0)), $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(prep1))
      };
      "componentWillMount"() {
        return (void 0)
      };
      "componentDidMount"() {
        return (void 0)
      };
      "componentWillReceiveProps"(arg) {
        return (void 0)
      };
      "shouldComponentUpdate"(arg, arg$2) {
        return true
      };
      "componentWillUpdate"(arg, arg$2) {
        return (void 0)
      };
      "getSnapshotBeforeUpdate"(arg, arg$2) {
        return null
      };
      "componentDidUpdate"(arg, arg$2, ...rest) {
        switch ($uI(rest.length)) {
          case 0: {
            return (void 0);
            break
          }
          case 1: {
            var prep2 = rest[0];
            $s_Lslinky_core_DefinitionBase__componentDidUpdate__Lslinky_core_DefinitionBase__O__O__O__V(this, arg, arg$2, prep2);
            return (void 0);
            break
          }
          default: {
            throw "No matching overload"
          }
        }
      };
      "componentWillUnmount"() {
        return (void 0)
      };
      "componentDidCatch"(arg, arg$2) {
        return (void 0)
      };
    }
  };
  return $b_Lslinky_core_DefinitionBase
}
var $b_Lslinky_core_OptionalAttrPair;
function $a_Lslinky_core_OptionalAttrPair() {
  if ((!$b_Lslinky_core_OptionalAttrPair)) {
    $b_Lslinky_core_OptionalAttrPair = class $b_Lslinky_core_OptionalAttrPair extends Object {
      constructor(arg, arg$2) {
        var name = null;
        var value = null;
        name = $as_T(arg);
        value = $as_s_Option(arg$2);
        super();
        Object.defineProperty(this, "name", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "value", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        this.name = name;
        this.value = value
      };
    }
  };
  return $b_Lslinky_core_OptionalAttrPair
}
var $r_LTextEditor__intervalId = Symbol("intervalId");
function $ps_LTextEditor__intervalId__LTextEditor__sjs_js_$bar(this$1) {
  return this$1[$r_LTextEditor__intervalId]
}
function $ps_LTextEditor__intervalId_$eq__LTextEditor__sjs_js_$bar__V(this$1, x$1) {
  this$1[$r_LTextEditor__intervalId] = x$1
}
var $b_LTextEditor;
function $a_LTextEditor() {
  if ((!$b_LTextEditor)) {
    $b_LTextEditor = class $b_LTextEditor extends $a_Lslinky_core_DefinitionBase() {
      constructor(arg) {
        var jsProps = null;
        jsProps = arg;
        super(jsProps);
        this[$r_LTextEditor__intervalId] = null;
        this[$r_LTextEditor__intervalId] = (void 0)
      };
      get "initialState"() {
        return new $c_T2("", $m_s_None$())
      };
      "componentDidMount"() {
        var a = $m_sjs_js_timers_package$().setInterval__D__F0__sjs_js_timers_SetIntervalHandle(3000.0, new $c_sjsr_AnonFunction0((() => {
          this.refreshPreview()
        })));
        $ps_LTextEditor__intervalId_$eq__LTextEditor__sjs_js_$bar__V(this, a)
      };
      "componentWillUnmount"() {
        var value = $ps_LTextEditor__intervalId__LTextEditor__sjs_js_$bar(this);
        if ((value !== (void 0))) {
          $m_sjs_js_timers_package$().clearInterval__sjs_js_timers_SetIntervalHandle__V(value)
        }
      };
      "render"() {
        var pair = new ($a_Lslinky_core_AttrPair())("className", "container");
        var array = [pair];
        var mods = new $c_sjsr_WrappedVarArgs(array);
        var fields = $m_sci_Nil$();
        var inst = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)];
        var this$11 = new $c_sc_IndexedSeqView$Id(mods);
        var it = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
        while ((it.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1 = it.next__O();
          if ($uZ((arg1 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict = inst[1];
            var key = $as_T(arg1.name);
            var value = arg1.value;
            dict[key] = value
          } else if ($uZ((arg1 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$13 = $n($as_s_Option(arg1.value));
            if ((!this$13.isEmpty__Z())) {
              var dict$1 = inst[1];
              var key$1 = $as_T(arg1.name);
              var value$1 = $n($as_s_Option(arg1.value)).get__O();
              dict$1[key$1] = value$1
            }
          } else {
            $uI(inst.push(arg1))
          }
        };
        var pair$1 = new ($a_Lslinky_core_AttrPair())("className", "editor-area");
        var array$1 = [pair$1];
        var mods$1 = new $c_sjsr_WrappedVarArgs(array$1);
        var fields$1 = $m_sci_Nil$();
        var inst$1 = ["main", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1)];
        var this$25 = new $c_sc_IndexedSeqView$Id(mods$1);
        var it$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
        while ((it$1.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$1 = it$1.next__O();
          if ($uZ((arg1$1 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$2 = inst$1[1];
            var key$2 = $as_T(arg1$1.name);
            var value$2 = arg1$1.value;
            dict$2[key$2] = value$2
          } else if ($uZ((arg1$1 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$27 = $n($as_s_Option(arg1$1.value));
            if ((!this$27.isEmpty__Z())) {
              var dict$3 = inst$1[1];
              var key$3 = $as_T(arg1$1.name);
              var value$3 = $n($as_s_Option(arg1$1.value)).get__O();
              dict$3[key$3] = value$3
            }
          } else {
            $uI(inst$1.push(arg1$1))
          }
        };
        var pair$2 = new ($a_Lslinky_core_AttrPair())("className", "toolbar");
        var array$2 = [pair$2];
        var mods$2 = new $c_sjsr_WrappedVarArgs(array$2);
        var fields$2 = $m_sci_Nil$();
        var inst$2 = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2)];
        var this$39 = new $c_sc_IndexedSeqView$Id(mods$2);
        var it$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$39);
        while ((it$2.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$2 = it$2.next__O();
          if ($uZ((arg1$2 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$4 = inst$2[1];
            var key$4 = $as_T(arg1$2.name);
            var value$4 = arg1$2.value;
            dict$4[key$4] = value$4
          } else if ($uZ((arg1$2 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$41 = $n($as_s_Option(arg1$2.value));
            if ((!this$41.isEmpty__Z())) {
              var dict$5 = inst$2[1];
              var key$5 = $as_T(arg1$2.name);
              var value$5 = $n($as_s_Option(arg1$2.value)).get__O();
              dict$5[key$5] = value$5
            }
          } else {
            $uI(inst$2.push(arg1$2))
          }
        };
        var v = new $c_sjsr_AnonFunction1(((x$1$2) => {
          this.execCommand("undo")
        }));
        var array$3 = [new ($a_Lslinky_core_AttrPair())("onClick", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v))];
        var mods$3 = new $c_sjsr_WrappedVarArgs(array$3);
        var fields$3 = $m_sci_Nil$();
        var inst$3 = ["button", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$3)];
        var this$51 = new $c_sc_IndexedSeqView$Id(mods$3);
        var it$3 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$51);
        while ((it$3.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$3 = it$3.next__O();
          if ($uZ((arg1$3 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$6 = inst$3[1];
            var key$6 = $as_T(arg1$3.name);
            var value$6 = arg1$3.value;
            dict$6[key$6] = value$6
          } else if ($uZ((arg1$3 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$53 = $n($as_s_Option(arg1$3.value));
            if ((!this$53.isEmpty__Z())) {
              var dict$7 = inst$3[1];
              var key$7 = $as_T(arg1$3.name);
              var value$7 = $n($as_s_Option(arg1$3.value)).get__O();
              dict$7[key$7] = value$7
            }
          } else {
            $uI(inst$3.push(arg1$3))
          }
        };
        var array$4 = ["Undo"];
        var children = new $c_sjsr_WrappedVarArgs(array$4);
        if ((inst$3[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$60 = new $c_sc_IndexedSeqView$Id(children);
        var it$4 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$60);
        while ((it$4.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$4 = it$4.next__O();
          $uI(inst$3.push(arg1$4))
        };
        if ((inst$3[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret = React.createElement.apply(React, inst$3);
        inst$3[0] = null;
        var v$1 = new $c_sjsr_AnonFunction1(((x$2$2) => {
          this.execCommand("redo")
        }));
        var array$5 = [new ($a_Lslinky_core_AttrPair())("onClick", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v$1))];
        var mods$4 = new $c_sjsr_WrappedVarArgs(array$5);
        var fields$4 = $m_sci_Nil$();
        var inst$4 = ["button", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$4)];
        var this$70 = new $c_sc_IndexedSeqView$Id(mods$4);
        var it$5 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$70);
        while ((it$5.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$5 = it$5.next__O();
          if ($uZ((arg1$5 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$8 = inst$4[1];
            var key$8 = $as_T(arg1$5.name);
            var value$8 = arg1$5.value;
            dict$8[key$8] = value$8
          } else if ($uZ((arg1$5 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$72 = $n($as_s_Option(arg1$5.value));
            if ((!this$72.isEmpty__Z())) {
              var dict$9 = inst$4[1];
              var key$9 = $as_T(arg1$5.name);
              var value$9 = $n($as_s_Option(arg1$5.value)).get__O();
              dict$9[key$9] = value$9
            }
          } else {
            $uI(inst$4.push(arg1$5))
          }
        };
        var array$6 = ["Redo"];
        var children$1 = new $c_sjsr_WrappedVarArgs(array$6);
        if ((inst$4[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$79 = new $c_sc_IndexedSeqView$Id(children$1);
        var it$6 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$79);
        while ((it$6.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$6 = it$6.next__O();
          $uI(inst$4.push(arg1$6))
        };
        if ((inst$4[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$1 = React.createElement.apply(React, inst$4);
        inst$4[0] = null;
        var v$2 = new $c_sjsr_AnonFunction1(((x$3$2) => {
          this.execCommand("bold")
        }));
        var array$7 = [new ($a_Lslinky_core_AttrPair())("onClick", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v$2))];
        var mods$5 = new $c_sjsr_WrappedVarArgs(array$7);
        var fields$5 = $m_sci_Nil$();
        var inst$5 = ["button", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$5)];
        var this$89 = new $c_sc_IndexedSeqView$Id(mods$5);
        var it$7 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$89);
        while ((it$7.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$7 = it$7.next__O();
          if ($uZ((arg1$7 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$10 = inst$5[1];
            var key$10 = $as_T(arg1$7.name);
            var value$10 = arg1$7.value;
            dict$10[key$10] = value$10
          } else if ($uZ((arg1$7 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$91 = $n($as_s_Option(arg1$7.value));
            if ((!this$91.isEmpty__Z())) {
              var dict$11 = inst$5[1];
              var key$11 = $as_T(arg1$7.name);
              var value$11 = $n($as_s_Option(arg1$7.value)).get__O();
              dict$11[key$11] = value$11
            }
          } else {
            $uI(inst$5.push(arg1$7))
          }
        };
        var array$8 = ["Bold"];
        var children$2 = new $c_sjsr_WrappedVarArgs(array$8);
        if ((inst$5[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$98 = new $c_sc_IndexedSeqView$Id(children$2);
        var it$8 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$98);
        while ((it$8.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$8 = it$8.next__O();
          $uI(inst$5.push(arg1$8))
        };
        if ((inst$5[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$2 = React.createElement.apply(React, inst$5);
        inst$5[0] = null;
        var v$3 = new $c_sjsr_AnonFunction1(((x$4$2) => {
          this.execCommand("italic")
        }));
        var array$9 = [new ($a_Lslinky_core_AttrPair())("onClick", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v$3))];
        var mods$6 = new $c_sjsr_WrappedVarArgs(array$9);
        var fields$6 = $m_sci_Nil$();
        var inst$6 = ["button", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$6)];
        var this$108 = new $c_sc_IndexedSeqView$Id(mods$6);
        var it$9 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$108);
        while ((it$9.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$9 = it$9.next__O();
          if ($uZ((arg1$9 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$12 = inst$6[1];
            var key$12 = $as_T(arg1$9.name);
            var value$12 = arg1$9.value;
            dict$12[key$12] = value$12
          } else if ($uZ((arg1$9 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$110 = $n($as_s_Option(arg1$9.value));
            if ((!this$110.isEmpty__Z())) {
              var dict$13 = inst$6[1];
              var key$13 = $as_T(arg1$9.name);
              var value$13 = $n($as_s_Option(arg1$9.value)).get__O();
              dict$13[key$13] = value$13
            }
          } else {
            $uI(inst$6.push(arg1$9))
          }
        };
        var array$10 = ["Italic"];
        var children$3 = new $c_sjsr_WrappedVarArgs(array$10);
        if ((inst$6[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$117 = new $c_sc_IndexedSeqView$Id(children$3);
        var it$10 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$117);
        while ((it$10.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$10 = it$10.next__O();
          $uI(inst$6.push(arg1$10))
        };
        if ((inst$6[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$3 = React.createElement.apply(React, inst$6);
        inst$6[0] = null;
        var v$4 = new $c_sjsr_AnonFunction1(((x$5$2) => {
          this.execCommand("underline")
        }));
        var array$11 = [new ($a_Lslinky_core_AttrPair())("onClick", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v$4))];
        var mods$7 = new $c_sjsr_WrappedVarArgs(array$11);
        var fields$7 = $m_sci_Nil$();
        var inst$7 = ["button", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$7)];
        var this$127 = new $c_sc_IndexedSeqView$Id(mods$7);
        var it$11 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$127);
        while ((it$11.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$11 = it$11.next__O();
          if ($uZ((arg1$11 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$14 = inst$7[1];
            var key$14 = $as_T(arg1$11.name);
            var value$14 = arg1$11.value;
            dict$14[key$14] = value$14
          } else if ($uZ((arg1$11 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$129 = $n($as_s_Option(arg1$11.value));
            if ((!this$129.isEmpty__Z())) {
              var dict$15 = inst$7[1];
              var key$15 = $as_T(arg1$11.name);
              var value$15 = $n($as_s_Option(arg1$11.value)).get__O();
              dict$15[key$15] = value$15
            }
          } else {
            $uI(inst$7.push(arg1$11))
          }
        };
        var array$12 = ["Underline"];
        var children$4 = new $c_sjsr_WrappedVarArgs(array$12);
        if ((inst$7[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$136 = new $c_sc_IndexedSeqView$Id(children$4);
        var it$12 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$136);
        while ((it$12.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$12 = it$12.next__O();
          $uI(inst$7.push(arg1$12))
        };
        if ((inst$7[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$4 = React.createElement.apply(React, inst$7);
        inst$7[0] = null;
        var v$5 = new $c_sjsr_AnonFunction1(((x$6$2) => {
          this.execCommand("insertOrderedList")
        }));
        var array$13 = [new ($a_Lslinky_core_AttrPair())("onClick", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v$5))];
        var mods$8 = new $c_sjsr_WrappedVarArgs(array$13);
        var fields$8 = $m_sci_Nil$();
        var inst$8 = ["button", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$8)];
        var this$146 = new $c_sc_IndexedSeqView$Id(mods$8);
        var it$13 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$146);
        while ((it$13.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$13 = it$13.next__O();
          if ($uZ((arg1$13 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$16 = inst$8[1];
            var key$16 = $as_T(arg1$13.name);
            var value$16 = arg1$13.value;
            dict$16[key$16] = value$16
          } else if ($uZ((arg1$13 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$148 = $n($as_s_Option(arg1$13.value));
            if ((!this$148.isEmpty__Z())) {
              var dict$17 = inst$8[1];
              var key$17 = $as_T(arg1$13.name);
              var value$17 = $n($as_s_Option(arg1$13.value)).get__O();
              dict$17[key$17] = value$17
            }
          } else {
            $uI(inst$8.push(arg1$13))
          }
        };
        var array$14 = ["Ordered List"];
        var children$5 = new $c_sjsr_WrappedVarArgs(array$14);
        if ((inst$8[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$155 = new $c_sc_IndexedSeqView$Id(children$5);
        var it$14 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$155);
        while ((it$14.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$14 = it$14.next__O();
          $uI(inst$8.push(arg1$14))
        };
        if ((inst$8[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$5 = React.createElement.apply(React, inst$8);
        inst$8[0] = null;
        var v$6 = new $c_sjsr_AnonFunction1(((x$7$2) => {
          this.execCommand("insertUnorderedList")
        }));
        var array$15 = [new ($a_Lslinky_core_AttrPair())("onClick", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v$6))];
        var mods$9 = new $c_sjsr_WrappedVarArgs(array$15);
        var fields$9 = $m_sci_Nil$();
        var inst$9 = ["button", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$9)];
        var this$165 = new $c_sc_IndexedSeqView$Id(mods$9);
        var it$15 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$165);
        while ((it$15.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$15 = it$15.next__O();
          if ($uZ((arg1$15 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$18 = inst$9[1];
            var key$18 = $as_T(arg1$15.name);
            var value$18 = arg1$15.value;
            dict$18[key$18] = value$18
          } else if ($uZ((arg1$15 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$167 = $n($as_s_Option(arg1$15.value));
            if ((!this$167.isEmpty__Z())) {
              var dict$19 = inst$9[1];
              var key$19 = $as_T(arg1$15.name);
              var value$19 = $n($as_s_Option(arg1$15.value)).get__O();
              dict$19[key$19] = value$19
            }
          } else {
            $uI(inst$9.push(arg1$15))
          }
        };
        var array$16 = ["Unordered List"];
        var children$6 = new $c_sjsr_WrappedVarArgs(array$16);
        if ((inst$9[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$174 = new $c_sc_IndexedSeqView$Id(children$6);
        var it$16 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$174);
        while ((it$16.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$16 = it$16.next__O();
          $uI(inst$9.push(arg1$16))
        };
        if ((inst$9[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$6 = React.createElement.apply(React, inst$9);
        inst$9[0] = null;
        var v$7 = new $c_sjsr_AnonFunction1(((x$8$2) => {
          this.openPreviewInNewWindow()
        }));
        var array$17 = [new ($a_Lslinky_core_AttrPair())("onClick", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v$7))];
        var mods$10 = new $c_sjsr_WrappedVarArgs(array$17);
        var fields$10 = $m_sci_Nil$();
        var inst$10 = ["button", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$10)];
        var this$184 = new $c_sc_IndexedSeqView$Id(mods$10);
        var it$17 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$184);
        while ((it$17.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$17 = it$17.next__O();
          if ($uZ((arg1$17 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$20 = inst$10[1];
            var key$20 = $as_T(arg1$17.name);
            var value$20 = arg1$17.value;
            dict$20[key$20] = value$20
          } else if ($uZ((arg1$17 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$186 = $n($as_s_Option(arg1$17.value));
            if ((!this$186.isEmpty__Z())) {
              var dict$21 = inst$10[1];
              var key$21 = $as_T(arg1$17.name);
              var value$21 = $n($as_s_Option(arg1$17.value)).get__O();
              dict$21[key$21] = value$21
            }
          } else {
            $uI(inst$10.push(arg1$17))
          }
        };
        var array$18 = ["Open Preview in New Window"];
        var children$7 = new $c_sjsr_WrappedVarArgs(array$18);
        if ((inst$10[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$193 = new $c_sc_IndexedSeqView$Id(children$7);
        var it$18 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$193);
        while ((it$18.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$18 = it$18.next__O();
          $uI(inst$10.push(arg1$18))
        };
        if ((inst$10[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$7 = React.createElement.apply(React, inst$10);
        inst$10[0] = null;
        var array$19 = [ret, ret$1, ret$2, ret$3, ret$4, ret$5, ret$6, ret$7];
        var children$8 = new $c_sjsr_WrappedVarArgs(array$19);
        if ((inst$2[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$199 = new $c_sc_IndexedSeqView$Id(children$8);
        var it$19 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$199);
        while ((it$19.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$19 = it$19.next__O();
          $uI(inst$2.push(arg1$19))
        };
        if ((inst$2[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$8 = React.createElement.apply(React, inst$2);
        inst$2[0] = null;
        var pair$3 = new ($a_Lslinky_core_AttrPair())("className", "aligner");
        var array$20 = [pair$3];
        var mods$11 = new $c_sjsr_WrappedVarArgs(array$20);
        var fields$11 = $m_sci_Nil$();
        var inst$11 = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$11)];
        var this$211 = new $c_sc_IndexedSeqView$Id(mods$11);
        var it$20 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$211);
        while ((it$20.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$20 = it$20.next__O();
          if ($uZ((arg1$20 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$22 = inst$11[1];
            var key$22 = $as_T(arg1$20.name);
            var value$22 = arg1$20.value;
            dict$22[key$22] = value$22
          } else if ($uZ((arg1$20 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$213 = $n($as_s_Option(arg1$20.value));
            if ((!this$213.isEmpty__Z())) {
              var dict$23 = inst$11[1];
              var key$23 = $as_T(arg1$20.name);
              var value$23 = $n($as_s_Option(arg1$20.value)).get__O();
              dict$23[key$23] = value$23
            }
          } else {
            $uI(inst$11.push(arg1$20))
          }
        };
        var pair$4 = new ($a_Lslinky_core_AttrPair())("className", "editor");
        var pair$5 = new ($a_Lslinky_core_AttrPair())("contentEditable", true);
        var v$8 = new $c_sjsr_AnonFunction1(((e$2) => {
          this.handleInput(e$2)
        }));
        var $$x1 = new ($a_Lslinky_core_AttrPair())("onInput", $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(v$8));
        var array$21 = [new $c_T2("height", "100vh")];
        var fields$12 = new $c_sjsr_WrappedVarArgs(array$21);
        var v$9 = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$12);
        var pair$6 = new ($a_Lslinky_core_AttrPair())("style", v$9);
        var array$22 = [pair$4, pair$5, $$x1, pair$6];
        var mods$12 = new $c_sjsr_WrappedVarArgs(array$22);
        var fields$13 = $m_sci_Nil$();
        var inst$12 = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$13)];
        var this$236 = new $c_sc_IndexedSeqView$Id(mods$12);
        var it$21 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$236);
        while ((it$21.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$21 = it$21.next__O();
          if ($uZ((arg1$21 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$24 = inst$12[1];
            var key$24 = $as_T(arg1$21.name);
            var value$24 = arg1$21.value;
            dict$24[key$24] = value$24
          } else if ($uZ((arg1$21 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$238 = $n($as_s_Option(arg1$21.value));
            if ((!this$238.isEmpty__Z())) {
              var dict$25 = inst$12[1];
              var key$25 = $as_T(arg1$21.name);
              var value$25 = $n($as_s_Option(arg1$21.value)).get__O();
              dict$25[key$25] = value$25
            }
          } else {
            $uI(inst$12.push(arg1$21))
          }
        };
        if ((inst$12[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$9 = React.createElement.apply(React, inst$12);
        inst$12[0] = null;
        var pair$7 = new ($a_Lslinky_core_AttrPair())("className", "preview");
        var array$23 = [pair$7];
        var mods$13 = new $c_sjsr_WrappedVarArgs(array$23);
        var fields$14 = $m_sci_Nil$();
        var inst$13 = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$14)];
        var this$251 = new $c_sc_IndexedSeqView$Id(mods$13);
        var it$22 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$251);
        while ((it$22.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$22 = it$22.next__O();
          if ($uZ((arg1$22 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$26 = inst$13[1];
            var key$26 = $as_T(arg1$22.name);
            var value$26 = arg1$22.value;
            dict$26[key$26] = value$26
          } else if ($uZ((arg1$22 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$253 = $n($as_s_Option(arg1$22.value));
            if ((!this$253.isEmpty__Z())) {
              var dict$27 = inst$13[1];
              var key$27 = $as_T(arg1$22.name);
              var value$27 = $n($as_s_Option(arg1$22.value)).get__O();
              dict$27[key$27] = value$27
            }
          } else {
            $uI(inst$13.push(arg1$22))
          }
        };
        var array$24 = ["Preview"];
        var mods$14 = new $c_sjsr_WrappedVarArgs(array$24);
        var fields$15 = $m_sci_Nil$();
        var inst$14 = ["h3", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$15)];
        var this$264 = new $c_sc_IndexedSeqView$Id(mods$14);
        var it$23 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$264);
        while ((it$23.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$23 = it$23.next__O();
          if ($uZ((arg1$23 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$28 = inst$14[1];
            var key$28 = $as_T(arg1$23.name);
            var value$28 = arg1$23.value;
            dict$28[key$28] = value$28
          } else if ($uZ((arg1$23 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$266 = $n($as_s_Option(arg1$23.value));
            if ((!this$266.isEmpty__Z())) {
              var dict$29 = inst$14[1];
              var key$29 = $as_T(arg1$23.name);
              var value$29 = $n($as_s_Option(arg1$23.value)).get__O();
              dict$29[key$29] = value$29
            }
          } else {
            $uI(inst$14.push(arg1$23))
          }
        };
        if ((inst$14[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$10 = React.createElement.apply(React, inst$14);
        inst$14[0] = null;
        var pair$8 = new ($a_Lslinky_core_AttrPair())("className", "preview-content");
        var v$10 = (() => {
          var outer = null;
          outer = this;
          var this$12$1 = {};
          this$12$1.__html = null;
          this$12$1.__html = $as_T($n($as_T2(outer.state_scala)).T2__f__1);
          return this$12$1
        })();
        var pair$9 = new ($a_Lslinky_core_AttrPair())("dangerouslySetInnerHTML", v$10);
        var array$25 = [pair$8, pair$9];
        var mods$15 = new $c_sjsr_WrappedVarArgs(array$25);
        var fields$16 = $m_sci_Nil$();
        var inst$15 = ["div", $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$16)];
        var this$281 = new $c_sc_IndexedSeqView$Id(mods$15);
        var it$24 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$281);
        while ((it$24.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$24 = it$24.next__O();
          if ($uZ((arg1$24 instanceof $a_Lslinky_core_AttrPair()))) {
            var dict$30 = inst$15[1];
            var key$30 = $as_T(arg1$24.name);
            var value$30 = arg1$24.value;
            dict$30[key$30] = value$30
          } else if ($uZ((arg1$24 instanceof $a_Lslinky_core_OptionalAttrPair()))) {
            var this$283 = $n($as_s_Option(arg1$24.value));
            if ((!this$283.isEmpty__Z())) {
              var dict$31 = inst$15[1];
              var key$31 = $as_T(arg1$24.name);
              var value$31 = $n($as_s_Option(arg1$24.value)).get__O();
              dict$31[key$31] = value$31
            }
          } else {
            $uI(inst$15.push(arg1$24))
          }
        };
        if ((inst$15[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$11 = React.createElement.apply(React, inst$15);
        inst$15[0] = null;
        var array$26 = [ret$10, ret$11];
        var children$9 = new $c_sjsr_WrappedVarArgs(array$26);
        if ((inst$13[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$290 = new $c_sc_IndexedSeqView$Id(children$9);
        var it$25 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$290);
        while ((it$25.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$25 = it$25.next__O();
          $uI(inst$13.push(arg1$25))
        };
        if ((inst$13[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$12 = React.createElement.apply(React, inst$13);
        inst$13[0] = null;
        var array$27 = [ret$9, ret$12];
        var children$10 = new $c_sjsr_WrappedVarArgs(array$27);
        if ((inst$11[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$296 = new $c_sc_IndexedSeqView$Id(children$10);
        var it$26 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$296);
        while ((it$26.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$26 = it$26.next__O();
          $uI(inst$11.push(arg1$26))
        };
        if ((inst$11[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$13 = React.createElement.apply(React, inst$11);
        inst$11[0] = null;
        var array$28 = [ret$8, ret$13];
        var children$11 = new $c_sjsr_WrappedVarArgs(array$28);
        if ((inst$1[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$302 = new $c_sc_IndexedSeqView$Id(children$11);
        var it$27 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$302);
        while ((it$27.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$27 = it$27.next__O();
          $uI(inst$1.push(arg1$27))
        };
        if ((inst$1[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$14 = React.createElement.apply(React, inst$1);
        inst$1[0] = null;
        var array$29 = [ret$14];
        var children$12 = new $c_sjsr_WrappedVarArgs(array$29);
        if ((inst[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var this$308 = new $c_sc_IndexedSeqView$Id(children$12);
        var it$28 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$308);
        while ((it$28.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
          var arg1$28 = it$28.next__O();
          $uI(inst.push(arg1$28))
        };
        if ((inst[0] === null)) {
          throw new $c_jl_IllegalStateException("This tag has already been built into a ReactElement, and cannot be reused")
        };
        var ret$15 = React.createElement.apply(React, inst);
        inst[0] = null;
        return ret$15
      };
      "execCommand"(arg, ...rest) {
        var prep0 = $as_T(arg);
        var prep1 = ((rest[0] === (void 0)) ? "" : $as_T(rest[0]));
        document.execCommand(prep0, false, prep1)
      };
      "handleInput"(arg) {
        this.setState_scala_1(new $c_T2($as_T(arg.target.innerHTML), $n($as_T2(this.state_scala)).T2__f__2))
      };
      "openPreviewInNewWindow"() {
        var previewWindow = window.open("", "_blank", "width=800,height=600");
        var $$x1 = previewWindow.document;
        $m_sc_StringOps$();
        var x = (("\n         |<!DOCTYPE html>\n         |<html lang=\"en\">\n         |<head>\n         |    <meta charset=\"UTF-8\">\n         |    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n         |    <title>Preview</title>\n         |    <style>\n         |        body { font-family: Arial, sans-serif; padding: 20px; }\n         |        .preview-content { border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; min-height: 500px; width: 100%; }\n         |    </style>\n         |</head>\n         |<body>\n         |    <div class=\"preview-content\">" + $n($as_T2(this.state_scala)).T2__f__1) + "</div> <!-- Use the current state for the preview -->\n         |    <script>\n         |        window.addEventListener('message', function(event) {\n         |            document.querySelector('.preview-content').innerHTML = event.data; // Update preview content\n         |        });\n         |    </script>\n         |</body>\n         |</html>\n         |");
        $$x1.write($m_sc_StringOps$().stripMargin$extension__T__C__T(x, 124));
        previewWindow.document.close();
        this.setState_scala_1(new $c_T2($n($as_T2(this.state_scala)).T2__f__1, new $c_s_Some(previewWindow)))
      };
      "refreshPreview"() {
        var this$1 = $n($as_s_Option($n($as_T2(this.state_scala)).T2__f__2));
        if ((!this$1.isEmpty__Z())) {
          var arg1 = this$1.get__O();
          var s = $as_T($n($as_T2(this.state_scala)).T2__f__1);
          arg1.postMessage(s, "*")
        }
      };
    }
  };
  return $b_LTextEditor
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayStoreException = new $TypeData().initClass({
  jl_ArrayStoreException: 0
}, false, "java.lang.ArrayStoreException", {
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayStoreException.prototype.$classData = $d_jl_ArrayStoreException;
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass({
  jl_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", {
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NegativeArraySizeException.prototype.$classData = $d_jl_NegativeArraySizeException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
var $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
function $as_jl_SecurityException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
  /*<skip>*/
}
$h_s_$less$colon$less$$anon$1.prototype = $c_s_$less$colon$less$$anon$1.prototype;
$c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
  return x
});
$c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
  return "generalized constraint"
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $n($objectGetClass(this$1)).getName__T())
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
var $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
/** @constructor */
function $c_s_Option() {
  /*<skip>*/
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
  /*<skip>*/
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$())
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1)
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    $m_sc_Iterator$();
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a)
  }
});
function $as_s_Option(obj) {
  return (((obj instanceof $c_s_Option) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Option"))
}
function $isArrayOf_s_Option(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Option)))
}
function $asArrayOf_s_Option(obj, depth) {
  return (($isArrayOf_s_Option(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Option;", depth))
}
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
  /*<skip>*/
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n)
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2"
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, $n(Tuple2$1).T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, $n(Tuple2$1).T2__f__2))
  } else {
    return false
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
var $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator")
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E()
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
  /*<skip>*/
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed)
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this)
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0)
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1)
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that)
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
  /*<skip>*/
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1)
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize)
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z())
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O()
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O())
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo)
  } else if ((until <= lo)) {
    var rest = 0
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0)
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that)
  };
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  } else {
    this.sc_Iterator$SliceIterator__f_dropping = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass({
  sc_Iterator$SliceIterator: 0
}, false, "scala.collection.Iterator$SliceIterator", {
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$SliceIterator.prototype.$classData = $d_sc_Iterator$SliceIterator;
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $as_sc_LinearSeq($thiz);
  var len = 0;
  while (true) {
    var this$1 = $n(these);
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq($n(these).tail__O())
    } else {
      break
    }
  };
  return len
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return $n(skipped).head__O()
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1)
    } else if ($n(xs).isEmpty__Z()) {
      return (-1)
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeq($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $$x1 = (!this$2.isEmpty__Z())
      } else {
        var $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z())
      }
    }
  }
}
function $p_sc_StringOps$$anon$1__advance__T($thiz) {
  var start = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
  while (true) {
    if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
      $m_sc_StringOps$();
      $m_sc_StringOps$();
      var this$ = $thiz.sc_StringOps$$anon$1__f_$this$2;
      var i = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
      var this$2 = $n(this$);
      var c = $charAt(this$2, i);
      var $$x1 = (!((c === 13) || (c === 10)))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0)
    } else {
      break
    }
  };
  var end = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
  if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
    $m_sc_StringOps$();
    var this$$2 = $thiz.sc_StringOps$$anon$1__f_$this$2;
    var i$1 = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
    var this$5 = $n(this$$2);
    var c$1 = $charAt(this$5, i$1);
    $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0);
    if (($thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
      $m_sc_StringOps$();
      $m_sc_StringOps$();
      var this$$3 = $thiz.sc_StringOps$$anon$1__f_$this$2;
      var i$2 = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index;
      var this$7 = $n(this$$3);
      var c$2 = $charAt(this$7, i$2);
      var $$x2 = ((c$1 === 13) && (c$2 === 10))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = ((1 + $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index) | 0)
    };
    if ((!$thiz.sc_StringOps$$anon$1__f_stripped$1)) {
      end = $thiz.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index
    }
  };
  var this$9 = $n($thiz.sc_StringOps$$anon$1__f_$this$2);
  var endIndex = end;
  if ((start < 0)) {
    $charAt(this$9, start)
  };
  if ((endIndex > this$9.length)) {
    $charAt(this$9, endIndex)
  };
  if ((endIndex < start)) {
    $charAt(this$9, (-1))
  };
  return $as_T(this$9.substring(start, endIndex))
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len = 0;
  this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = 0;
  this.sc_StringOps$$anon$1__f_$this$2 = null;
  this.sc_StringOps$$anon$1__f_stripped$1 = false;
  this.sc_StringOps$$anon$1__f_$this$2 = \u03b4this$2;
  this.sc_StringOps$$anon$1__f_stripped$1 = stripped$1;
  var this$1 = $n(\u03b4this$2);
  this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len = this$1.length;
  this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index = 0
}
$c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StringOps$$anon$1.prototype.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
  /*<skip>*/
}
$h_sc_StringOps$$anon$1.prototype = $c_sc_StringOps$$anon$1.prototype;
$c_sc_StringOps$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)
});
$c_sc_StringOps$$anon$1.prototype.next__T = (function() {
  return ((this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index >= this.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len) ? $as_T($n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()) : $p_sc_StringOps$$anon$1__advance__T(this))
});
$c_sc_StringOps$$anon$1.prototype.next__O = (function() {
  return this.next__T()
});
var $d_sc_StringOps$$anon$1 = new $TypeData().initClass({
  sc_StringOps$$anon$1: 0
}, false, "scala.collection.StringOps$$anon$1", {
  sc_StringOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StringOps$$anon$1.prototype.$classData = $d_sc_StringOps$$anon$1;
/** @constructor */
function $c_sci_IndexedSeq$() {
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
}
$c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_IndexedSeq$.prototype.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
  /*<skip>*/
}
$h_sci_IndexedSeq$.prototype = $c_sci_IndexedSeq$.prototype;
var $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.sci_LazyList$LazyIterator__f_lazyList = null;
  this.sci_LazyList$LazyIterator__f_lazyList = lazyList
}
$c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_LazyList$LazyIterator.prototype.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
  /*<skip>*/
}
$h_sci_LazyList$LazyIterator.prototype = $c_sci_LazyList$LazyIterator.prototype;
$c_sci_LazyList$LazyIterator.prototype.hasNext__Z = (function() {
  return (!$n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z())
});
$c_sci_LazyList$LazyIterator.prototype.next__O = (function() {
  if ($n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z()) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  } else {
    var this$1 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    var this$2 = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State());
    this$2.head__E()
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  new $c_T2($m_sci_Nil$(), $m_sci_Nil$());
  new $c_sci_List$$anon$1()
}
$c_sci_List$.prototype = new $h_O();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
  /*<skip>*/
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
var $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
/** @constructor */
function $c_sci_Seq$() {
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
}
$c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_sci_Seq$.prototype.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
  /*<skip>*/
}
$h_sci_Seq$.prototype = $c_sci_Seq$.prototype;
var $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
function $p_sci_Vector$__liftedTree1$1__I($thiz) {
  try {
    $m_sc_StringOps$();
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if (false) {
      return 250
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0)
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
  /*<skip>*/
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
var $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I()
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
  /*<skip>*/
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz)
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz)
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return false
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $$x1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($$x1 ^ hi)
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi)
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $$x1 = res;
    var index = i;
    res = (($$x1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that)
}
function $f_T__toString__T($thiz) {
  return $thiz
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(index) {
    super();
    var s = ("String index out of range: " + index);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
/** @constructor */
function $c_s_None$() {
  /*<skip>*/
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
  /*<skip>*/
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw new $c_ju_NoSuchElementException("None.get")
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None"
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880
});
$c_s_None$.prototype.toString__T = (function() {
  return "None"
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E()
});
var $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
  /*<skip>*/
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some"
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value)
  } else {
    return false
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
var $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
/** @constructor */
function $c_sc_AbstractIterable() {
  /*<skip>*/
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
  /*<skip>*/
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T()
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value))
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I()
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b)
  };
  return this
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  $n($thiz.sci_NewVectorIterator__f_v);
  var slice = null;
  while (($n(slice).u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    $n($thiz.sci_NewVectorIterator__f_v);
    slice = null
  };
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  };
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul($n(slice).u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0)
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz)
  };
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io
  };
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $n($thiz.sci_NewVectorIterator__f_a1).u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0)
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)))
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = $n(v).sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len
}
$c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
  /*<skip>*/
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0)
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this)
  };
  var r = $n(this.sci_NewVectorIterator__f_a1).get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this)
      };
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io
      };
      this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1
      }
    }
  };
  return this
});
var $d_sci_NewVectorIterator = new $TypeData().initClass({
  sci_NewVectorIterator: 0
}, false, "scala.collection.immutable.NewVectorIterator", {
  sci_NewVectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
});
$c_sci_NewVectorIterator.prototype.$classData = $d_sci_NewVectorIterator;
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.sci_RangeIterator__f_step = 0;
  this.sci_RangeIterator__f_lastElement = 0;
  this.sci_RangeIterator__f__hasNext = false;
  this.sci_RangeIterator__f__next = 0;
  this.sci_RangeIterator__f_step = step;
  this.sci_RangeIterator__f_lastElement = lastElement;
  this.sci_RangeIterator__f__hasNext = (!initiallyEmpty);
  this.sci_RangeIterator__f__next = start
}
$c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_RangeIterator.prototype.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
  /*<skip>*/
}
$h_sci_RangeIterator.prototype = $c_sci_RangeIterator.prototype;
$c_sci_RangeIterator.prototype.knownSize__I = (function() {
  return (this.sci_RangeIterator__f__hasNext ? ((1 + $intDiv(((this.sci_RangeIterator__f_lastElement - this.sci_RangeIterator__f__next) | 0), this.sci_RangeIterator__f_step)) | 0) : 0)
});
$c_sci_RangeIterator.prototype.hasNext__Z = (function() {
  return this.sci_RangeIterator__f__hasNext
});
$c_sci_RangeIterator.prototype.next__I = (function() {
  if ((!this.sci_RangeIterator__f__hasNext)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O()
  };
  var value = this.sci_RangeIterator__f__next;
  this.sci_RangeIterator__f__hasNext = (value !== this.sci_RangeIterator__f_lastElement);
  this.sci_RangeIterator__f__next = ((value + this.sci_RangeIterator__f_step) | 0);
  return value
});
$c_sci_RangeIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var value = this.sci_RangeIterator__f__next;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.sci_RangeIterator__f_step, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.sci_RangeIterator__f_step > 0)) {
      var value$2 = this.sci_RangeIterator__f_lastElement;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2
      };
      this.sci_RangeIterator__f__next = this$6__lo;
      var value$3 = this.sci_RangeIterator__f_lastElement;
      var hi$4 = (value$3 >> 31);
      this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4))
    } else if ((this.sci_RangeIterator__f_step < 0)) {
      var value$4 = this.sci_RangeIterator__f_lastElement;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2
      };
      this.sci_RangeIterator__f__next = this$10__lo;
      var value$5 = this.sci_RangeIterator__f_lastElement;
      var hi$6 = (value$5 >> 31);
      this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6))
    }
  };
  return this
});
$c_sci_RangeIterator.prototype.next__O = (function() {
  return this.next__I()
});
var $d_sci_RangeIterator = new $TypeData().initClass({
  sci_RangeIterator: 0
}, false, "scala.collection.immutable.RangeIterator", {
  sci_RangeIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_RangeIterator.prototype.$classData = $d_sci_RangeIterator;
function $f_Lslinky_readwrite_CoreReaders__slinky$readwrite$CoreReaders$$$anonfun$rangeReader$1__sjs_js_Object__sci_Range($thiz, o) {
  if ($uZ(o.inclusive)) {
    var x = $uI(o.start);
    var end = $uI(o.end);
    var isEmpty = (x > end);
    var step = $uI(o.step);
    return new $c_sci_Range$Inclusive(x, end, step)
  } else {
    var x$1 = $uI(o.start);
    var end$1 = $uI(o.end);
    var isEmpty$1 = (x$1 >= end$1);
    var step$1 = $uI(o.step);
    return new $c_sci_Range$Exclusive(x$1, end$1, step$1)
  }
}
function $f_Lslinky_readwrite_CoreReaders__$init$__V($thiz) {
  $thiz.Lslinky_readwrite_Reader$__f_rangeReader = new $c_Lslinky_readwrite_CoreReaders$$anonfun$rangeReader$2($thiz)
}
function $f_Lslinky_readwrite_CoreWriters__$init$__V($thiz) {
  $thiz.Lslinky_readwrite_Writer$__f_rangeWriter = new $c_Lslinky_readwrite_CoreWriters$$Lambda$13(((r$2) => {
    var r = $as_sci_Range(r$2);
    var value = $n(r).sci_Range__f_start;
    var $$x3 = new $c_T2("start", value);
    var value$1 = $n(r).sci_Range__f_end;
    var $$x2 = new $c_T2("end", value$1);
    var value$2 = $n(r).sci_Range__f_step;
    var $$x1 = new $c_T2("step", value$2);
    var value$3 = $n(r).isInclusive__Z();
    var array = [$$x3, $$x2, $$x1, new $c_T2("inclusive", value$3)];
    var fields = new $c_sjsr_WrappedVarArgs(array);
    return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
  }))
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.stringPrefix__T() + "(<not computed>)")
}
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
/** @constructor */
function $c_Lslinky_readwrite_Reader$() {
  this.Lslinky_readwrite_Reader$__f_rangeReader = null;
  $n_Lslinky_readwrite_Reader$ = this;
  $f_Lslinky_readwrite_CoreReaders__$init$__V(this)
}
$c_Lslinky_readwrite_Reader$.prototype = new $h_O();
$c_Lslinky_readwrite_Reader$.prototype.constructor = $c_Lslinky_readwrite_Reader$;
/** @constructor */
function $h_Lslinky_readwrite_Reader$() {
  /*<skip>*/
}
$h_Lslinky_readwrite_Reader$.prototype = $c_Lslinky_readwrite_Reader$.prototype;
var $d_Lslinky_readwrite_Reader$ = new $TypeData().initClass({
  Lslinky_readwrite_Reader$: 0
}, false, "slinky.readwrite.Reader$", {
  Lslinky_readwrite_Reader$: 1,
  O: 1,
  Lslinky_readwrite_CoreReaders: 1,
  Lslinky_readwrite_MacroReaders: 1,
  Lslinky_readwrite_UnionReaders: 1,
  Lslinky_readwrite_FallbackReaders: 1,
  Lslinky_readwrite_FunctionReaders: 1,
  Lslinky_readwrite_TypeConstructorReaders: 1
});
$c_Lslinky_readwrite_Reader$.prototype.$classData = $d_Lslinky_readwrite_Reader$;
var $n_Lslinky_readwrite_Reader$;
function $m_Lslinky_readwrite_Reader$() {
  if ((!$n_Lslinky_readwrite_Reader$)) {
    $n_Lslinky_readwrite_Reader$ = new $c_Lslinky_readwrite_Reader$()
  };
  return $n_Lslinky_readwrite_Reader$
}
/** @constructor */
function $c_Lslinky_readwrite_Writer$() {
  this.Lslinky_readwrite_Writer$__f_rangeWriter = null;
  $n_Lslinky_readwrite_Writer$ = this;
  $f_Lslinky_readwrite_CoreWriters__$init$__V(this)
}
$c_Lslinky_readwrite_Writer$.prototype = new $h_O();
$c_Lslinky_readwrite_Writer$.prototype.constructor = $c_Lslinky_readwrite_Writer$;
/** @constructor */
function $h_Lslinky_readwrite_Writer$() {
  /*<skip>*/
}
$h_Lslinky_readwrite_Writer$.prototype = $c_Lslinky_readwrite_Writer$.prototype;
var $d_Lslinky_readwrite_Writer$ = new $TypeData().initClass({
  Lslinky_readwrite_Writer$: 0
}, false, "slinky.readwrite.Writer$", {
  Lslinky_readwrite_Writer$: 1,
  O: 1,
  Lslinky_readwrite_CoreWriters: 1,
  Lslinky_readwrite_MacroWriters: 1,
  Lslinky_readwrite_UnionWriters: 1,
  Lslinky_readwrite_FallbackWriters: 1,
  Lslinky_readwrite_FunctionWriters: 1,
  Lslinky_readwrite_TypeConstructorWriters: 1
});
$c_Lslinky_readwrite_Writer$.prototype.$classData = $d_Lslinky_readwrite_Writer$;
var $n_Lslinky_readwrite_Writer$;
function $m_Lslinky_readwrite_Writer$() {
  if ((!$n_Lslinky_readwrite_Writer$)) {
    $n_Lslinky_readwrite_Writer$ = new $c_Lslinky_readwrite_Writer$()
  };
  return $n_Lslinky_readwrite_Writer$
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s
    }
  }
}
/** @constructor */
function $c_sc_AbstractView() {
  /*<skip>*/
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
  /*<skip>*/
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this)
});
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2)
      }
    };
    return false
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
/** @constructor */
function $c_sc_AbstractSeq() {
  /*<skip>*/
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
  /*<skip>*/
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
/** @constructor */
function $c_sc_AbstractSeqView() {
  /*<skip>*/
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
  /*<skip>*/
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
  /*<skip>*/
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx)
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I()
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z()
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
  /*<skip>*/
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView"
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I()
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
/** @constructor */
function $c_sci_AbstractSeq() {
  /*<skip>*/
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
  /*<skip>*/
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I())
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength
        } else {
          var maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
/** @constructor */
function $c_scm_AbstractSeq() {
  /*<skip>*/
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
  /*<skip>*/
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements")
    };
    $thiz.sci_LazyList__f_midEvaluation = true;
    try {
      var res = $as_sci_LazyList$State($n($thiz.sci_LazyList__f_lazyState).apply__O())
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false
    };
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  var this$1 = $n(b);
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    var this$2 = $n(b);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    $n(b);
    var this$3 = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State());
    this$3.head__E()
  };
  var this$5 = $n(b);
  this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
  this.sci_LazyList__f_lazyState = null;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false;
  this.sci_LazyList__f_bitmap$0 = false;
  this.sci_LazyList__f_lazyState = lazyState;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false
}
$c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$c_sci_LazyList.prototype.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
  /*<skip>*/
}
$h_sci_LazyList.prototype = $c_sci_LazyList.prototype;
$c_sci_LazyList.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_LazyList.prototype.length__I = (function() {
  return $f_sc_LinearSeqOps__length__I(this)
});
$c_sci_LazyList.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
});
$c_sci_LazyList.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_LazyList.prototype.scala$collection$immutable$LazyList$$state__sci_LazyList$State = (function() {
  return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
});
$c_sci_LazyList.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
});
$c_sci_LazyList.prototype.knownSize__I = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1))
});
$c_sci_LazyList.prototype.head__O = (function() {
  var this$1 = $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State());
  this$1.head__E()
});
$c_sci_LazyList.prototype.force__sci_LazyList = (function() {
  var these = this;
  var those = this;
  if ((!$n(these).isEmpty__Z())) {
    var this$1 = $n(these);
    these = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  };
  while ((those !== these)) {
    if ($n(these).isEmpty__Z()) {
      return this
    };
    var this$2 = $n(these);
    these = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ($n(these).isEmpty__Z()) {
      return this
    };
    var this$3 = $n(these);
    these = $n(this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ((these === those)) {
      return this
    };
    var this$4 = $n(those);
    those = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  };
  return this
});
$c_sci_LazyList.prototype.iterator__sc_Iterator = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
});
$c_sci_LazyList.prototype.foreach__F1__V = (function(f) {
  var _$this = this;
  while ((!$n(_$this).isEmpty__Z())) {
    var $$x1 = $n(f);
    var this$1 = $n(_$this);
    var this$2 = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State());
    $n($$x1).apply__O__O(this$2.head__E());
    var this$3 = $n(_$this);
    _$this = $n(this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
  }
});
$c_sci_LazyList.prototype.className__T = (function() {
  return "LazyList"
});
$c_sci_LazyList.prototype.drop__I__sci_LazyList = (function(n) {
  return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
});
$c_sci_LazyList.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  this.force__sci_LazyList();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $n(sb).scm_StringBuilder__f_underlying, start, sep, end);
  return sb
});
$c_sci_LazyList.prototype.toString__T = (function() {
  return $n($p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")")).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_sci_LazyList.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_LazyList.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_LazyList(n)
});
$c_sci_LazyList.prototype.tail__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList()
});
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
var $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
}
$c_sjsr_WrappedVarArgs.prototype = new $h_O();
$c_sjsr_WrappedVarArgs.prototype.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
  /*<skip>*/
}
$h_sjsr_WrappedVarArgs.prototype = $c_sjsr_WrappedVarArgs.prototype;
$c_sjsr_WrappedVarArgs.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sjsr_WrappedVarArgs.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
});
$c_sjsr_WrappedVarArgs.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_sjsr_WrappedVarArgs.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sjsr_WrappedVarArgs.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sjsr_WrappedVarArgs.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o)
});
$c_sjsr_WrappedVarArgs.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
});
$c_sjsr_WrappedVarArgs.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this)
});
$c_sjsr_WrappedVarArgs.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this)
});
$c_sjsr_WrappedVarArgs.prototype.foreach__F1__V = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f)
});
$c_sjsr_WrappedVarArgs.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
});
$c_sjsr_WrappedVarArgs.prototype.length__I = (function() {
  return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
});
$c_sjsr_WrappedVarArgs.prototype.apply__I__O = (function(idx) {
  return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
});
$c_sjsr_WrappedVarArgs.prototype.className__T = (function() {
  return "WrappedVarArgs"
});
$c_sjsr_WrappedVarArgs.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1))
});
var $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
function $p_sci_Range__gap__J($thiz) {
  var value = $thiz.sci_Range__f_end;
  var hi = (value >> 31);
  var value$1 = $thiz.sci_Range__f_start;
  var hi$1 = (value$1 >> 31);
  var lo = ((value - value$1) | 0);
  var hi$2 = ((((-2147483648) ^ lo) > ((-2147483648) ^ value)) ? (((-1) + ((hi - hi$1) | 0)) | 0) : ((hi - hi$1) | 0));
  return new $c_RTLong(lo, hi$2)
}
function $p_sci_Range__isExact__Z($thiz) {
  var this$2 = $p_sci_Range__gap__J($thiz);
  var value = $thiz.sci_Range__f_step;
  var hi = (value >> 31);
  var this$3 = $m_RTLong$();
  var lo = this$3.remainderImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return ((lo === 0) && (hi$1 === 0))
}
function $p_sci_Range__hasStub__Z($thiz) {
  return ($thiz.isInclusive__Z() || (!$p_sci_Range__isExact__Z($thiz)))
}
function $p_sci_Range__longLength__J($thiz) {
  var this$2 = $p_sci_Range__gap__J($thiz);
  var value = $thiz.sci_Range__f_step;
  var hi = (value >> 31);
  var this$3 = $m_RTLong$();
  var lo = this$3.divideImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var value$1 = ($p_sci_Range__hasStub__Z($thiz) ? 1 : 0);
  var hi$2 = (value$1 >> 31);
  var lo$1 = ((lo + value$1) | 0);
  var hi$3 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ lo)) ? ((1 + ((hi$1 + hi$2) | 0)) | 0) : ((hi$1 + hi$2) | 0));
  return new $c_RTLong(lo$1, hi$3)
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.sci_Range__f_start = start;
  $thiz.sci_Range__f_end = end;
  $thiz.sci_Range__f_step = step;
  $thiz.sci_Range__f_isEmpty = ((((start > end) && (step > 0)) || ((start < end) && (step < 0))) || ((start === end) && (!$thiz.isInclusive__Z())));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.")
  };
  if ($thiz.sci_Range__f_isEmpty) {
    var $$x1 = 0
  } else {
    var t = $p_sci_Range__longLength__J($thiz);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var $$x1 = (((hi === 0) ? (((-2147483648) ^ lo) > (-1)) : (hi > 0)) ? (-1) : lo)
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = $$x1;
  switch (step) {
    case 1: {
      var $$x2 = ($thiz.isInclusive__Z() ? end : (((-1) + end) | 0));
      break
    }
    case (-1): {
      var $$x2 = ($thiz.isInclusive__Z() ? end : ((1 + end) | 0));
      break
    }
    default: {
      var this$2 = $p_sci_Range__gap__J($thiz);
      var hi$1 = (step >> 31);
      var this$3 = $m_RTLong$();
      var lo$1 = this$3.remainderImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, step, hi$1);
      var $$x2 = ((lo$1 !== 0) ? ((end - lo$1) | 0) : ($thiz.isInclusive__Z() ? end : ((end - step) | 0)))
    }
  };
  $thiz.sci_Range__f_scala$collection$immutable$Range$$lastElement = $$x2;
  return $thiz
}
/** @constructor */
function $c_sci_Range() {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0
}
$c_sci_Range.prototype = new $h_sci_AbstractSeq();
$c_sci_Range.prototype.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
  /*<skip>*/
}
$h_sci_Range.prototype = $c_sci_Range.prototype;
$c_sci_Range.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_Range.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_Range.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_Range.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sci_Range.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_RangeIterator(this.sci_Range__f_start, this.sci_Range__f_step, this.sci_Range__f_scala$collection$immutable$Range$$lastElement, this.sci_Range__f_isEmpty)
});
$c_sci_Range.prototype.isEmpty__Z = (function() {
  return this.sci_Range__f_isEmpty
});
$c_sci_Range.prototype.length__I = (function() {
  return ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0) ? $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, this.isInclusive__Z()) : this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements)
});
$c_sci_Range.prototype.last__I = (function() {
  if (this.sci_Range__f_isEmpty) {
    var $$x1 = $m_sci_Range$().scala$collection$immutable$Range$$emptyRangeError__T__jl_Throwable("last");
    throw (false ? $$x1.sjs_js_JavaScriptException__f_exception : $n($$x1))
  } else {
    return this.sci_Range__f_scala$collection$immutable$Range$$lastElement
  }
});
$c_sci_Range.prototype.scala$collection$immutable$Range$$validateMaxLength__V = (function() {
  if ((this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements < 0)) {
    $m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(this.sci_Range__f_start, this.sci_Range__f_end, this.sci_Range__f_step, this.isInclusive__Z())
  }
});
$c_sci_Range.prototype.foreach__F1__V = (function(f) {
  if ((!this.sci_Range__f_isEmpty)) {
    var i = this.sci_Range__f_start;
    while (true) {
      $n(f).apply__O__O(i);
      if ((i === this.sci_Range__f_scala$collection$immutable$Range$$lastElement)) {
        return (void 0)
      };
      i = ((i + this.sci_Range__f_step) | 0)
    }
  }
});
$c_sci_Range.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x2 = $as_sci_Range(that);
    var x1$2 = this.length__I();
    switch (x1$2) {
      case 0: {
        return $n(x2).sci_Range__f_isEmpty;
        break
      }
      case 1: {
        return (($n(x2).length__I() === 1) && (this.sci_Range__f_start === $n(x2).sci_Range__f_start));
        break
      }
      default: {
        return (($n(x2).length__I() === x1$2) && ((this.sci_Range__f_start === $n(x2).sci_Range__f_start) && (this.sci_Range__f_step === $n(x2).sci_Range__f_step)))
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that)
  }
});
$c_sci_Range.prototype.applyPreferredMaxLength__I = (function() {
  return 2147483647
});
$c_sci_Range.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    var x2 = $as_sci_Range(other);
    if (this.sci_Range__f_isEmpty) {
      return $n(x2).sci_Range__f_isEmpty
    } else {
      var this$1 = $n(x2);
      if (((!this$1.sci_Range__f_isEmpty) && (this.sci_Range__f_start === $n(x2).sci_Range__f_start))) {
        var l0 = this.last__I();
        return ((l0 === $n(x2).last__I()) && ((this.sci_Range__f_start === l0) || (this.sci_Range__f_step === $n(x2).sci_Range__f_step)))
      } else {
        return false
      }
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other)
  }
});
$c_sci_Range.prototype.hashCode__I = (function() {
  if ((this.length__I() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    var start = this.sci_Range__f_start;
    var step = this.sci_Range__f_step;
    var last = this.sci_Range__f_scala$collection$immutable$Range$$lastElement;
    return this$1.rangeHash__I__I__I__I__I(start, step, last, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  } else {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  }
});
$c_sci_Range.prototype.toString__T = (function() {
  var preposition = (this.isInclusive__Z() ? "to" : "until");
  var stepped = ((this.sci_Range__f_step === 1) ? "" : (" by " + this.sci_Range__f_step));
  var prefix = (this.sci_Range__f_isEmpty ? "empty " : ((!$p_sci_Range__isExact__Z(this)) ? "inexact " : ""));
  return (((((((prefix + "Range ") + this.sci_Range__f_start) + " ") + preposition) + " ") + this.sci_Range__f_end) + stepped)
});
$c_sci_Range.prototype.className__T = (function() {
  return "Range"
});
$c_sci_Range.prototype.apply$mcII$sp__I__I = (function(idx) {
  this.scala$collection$immutable$Range$$validateMaxLength__V();
  if (((idx < 0) || (idx >= this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + (((-1) + this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements) | 0)) + ")"))
  } else {
    return ((this.sci_Range__f_start + Math.imul(this.sci_Range__f_step, idx)) | 0)
  }
});
$c_sci_Range.prototype.apply__O__O = (function(v1) {
  var idx = $uI(v1);
  return this.apply$mcII$sp__I__I(idx)
});
$c_sci_Range.prototype.apply__I__O = (function(i) {
  return this.apply$mcII$sp__I__I(i)
});
function $as_sci_Range(obj) {
  return (((obj instanceof $c_sci_Range) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Range"))
}
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Range)))
}
function $asArrayOf_sci_Range(obj, depth) {
  return (($isArrayOf_sci_Range(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth))
}
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step)
}
$c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$c_sci_Range$Exclusive.prototype.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
  /*<skip>*/
}
$h_sci_Range$Exclusive.prototype = $c_sci_Range$Exclusive.prototype;
$c_sci_Range$Exclusive.prototype.isInclusive__Z = (function() {
  return false
});
var $d_sci_Range$Exclusive = new $TypeData().initClass({
  sci_Range$Exclusive: 0
}, false, "scala.collection.immutable.Range$Exclusive", {
  sci_Range$Exclusive: 1,
  sci_Range: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$Exclusive.prototype.$classData = $d_sci_Range$Exclusive;
/** @constructor */
function $c_sci_Range$Inclusive(start, end, step) {
  this.sci_Range__f_start = 0;
  this.sci_Range__f_end = 0;
  this.sci_Range__f_step = 0;
  this.sci_Range__f_isEmpty = false;
  this.sci_Range__f_scala$collection$immutable$Range$$numRangeElements = 0;
  this.sci_Range__f_scala$collection$immutable$Range$$lastElement = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step)
}
$c_sci_Range$Inclusive.prototype = new $h_sci_Range();
$c_sci_Range$Inclusive.prototype.constructor = $c_sci_Range$Inclusive;
/** @constructor */
function $h_sci_Range$Inclusive() {
  /*<skip>*/
}
$h_sci_Range$Inclusive.prototype = $c_sci_Range$Inclusive.prototype;
$c_sci_Range$Inclusive.prototype.isInclusive__Z = (function() {
  return true
});
var $d_sci_Range$Inclusive = new $TypeData().initClass({
  sci_Range$Inclusive: 0
}, false, "scala.collection.immutable.Range$Inclusive", {
  sci_Range$Inclusive: 1,
  sci_Range: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$Inclusive.prototype.$classData = $d_sci_Range$Inclusive;
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
  /*<skip>*/
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I()
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? $n($as_sci_BigVector(this)).sci_BigVector__f_length0 : $n(this.sci_Vector__f_prefix1).u.length)
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), 0))
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector"
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
});
$c_sci_Vector.prototype.foreach__F1__V = (function(f) {
  var i = 0;
  while ((i < 0)) {
    var $$x1 = $m_sci_VectorStatics$();
    var idx = i;
    $n($$x1).foreachRec__I__AO__F1__V((((-1) + ((1 - ((idx < 0) ? ((-idx) | 0) : idx)) | 0)) | 0), null, f);
    i = ((1 + i) | 0)
  }
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1)
    } else if ($n(xs).isEmpty__Z()) {
      return (-1)
    } else {
      var this$1 = $n(xs);
      this$1.tail__E()
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if ((!(aEmpty || bEmpty))) {
        var $$x3 = $m_sr_BoxesRunTime$();
        var this$1 = $n(a);
        var $$x2;
        this$1.head__E();
        var this$2 = $n(b);
        var $$x1 = $n($$x3).equals__O__O__Z($$x2, this$2.head__E())
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        var this$3 = $n(a);
        this$3.tail__E()
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
  /*<skip>*/
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
  /*<skip>*/
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq"
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$())
});
$c_sci_List.prototype.foreach__F1__V = (function(f) {
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    var $$x1 = $n(f);
    var this$1 = $n(these);
    $n($$x1).apply__O__O(this$1.head__E());
    var this$2 = $n(these);
    this$2.tail__E()
  }
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    var this$1 = $n(these);
    this$1.tail__E()
  };
  return len
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
});
$c_sci_List.prototype.className__T = (function() {
  return "List"
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
  } else {
    return $f_sc_Seq__equals__O__Z(this, o)
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n)
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
  /*<skip>*/
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_length0 = 0
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
  /*<skip>*/
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"))
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)))
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth))
}
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
  /*<skip>*/
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list")
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list")
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1)
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this)
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E()
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E()
});
var $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0)
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
  /*<skip>*/
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index))
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)))
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"))
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E($uI(v1))
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i)
});
var $d_sci_Vector0$ = new $TypeData().initClass({
  sci_Vector0$: 0
}, false, "scala.collection.immutable.Vector0$", {
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector0$.prototype.$classData = $d_sci_Vector0$;
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$()
  };
  return $n_sci_Vector0$
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
  /*<skip>*/
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq"
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I()
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I()
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0)
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i))
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i))
});
var $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_LMain__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=main.js.map
