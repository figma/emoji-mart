(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory(require("react"));
	else
		root["EmojiMart"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_94__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.frequently = exports.store = exports.emojiIndex = exports.Category = exports.Emoji = exports.Picker = undefined;

	var _components = __webpack_require__(1);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _components.Picker;
	  }
	});
	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _components.Emoji;
	  }
	});
	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _components.Category;
	  }
	});

	var _emojiIndex = __webpack_require__(163);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	var _store = __webpack_require__(133);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(121);

	var _frequently2 = _interopRequireDefault(_frequently);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.emojiIndex = _emojiIndex2.default;
	exports.store = _store2.default;
	exports.frequently = _frequently2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _anchors = __webpack_require__(2);

	Object.defineProperty(exports, 'Anchors', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_anchors).default;
	  }
	});

	var _category = __webpack_require__(120);

	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category).default;
	  }
	});

	var _emoji = __webpack_require__(136);

	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_emoji).default;
	  }
	});

	var _picker = __webpack_require__(158);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_picker).default;
	  }
	});

	var _preview = __webpack_require__(161);

	Object.defineProperty(exports, 'Preview', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_preview).default;
	  }
	});

	var _search = __webpack_require__(162);

	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});

	var _skins = __webpack_require__(167);

	Object.defineProperty(exports, 'Skins', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_skins).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _svgs = __webpack_require__(104);

	var SVGs = _interopRequireWildcard(_svgs);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Anchors = function (_React$Component) {
	  (0, _inherits3.default)(Anchors, _React$Component);

	  function Anchors(props) {
	    (0, _classCallCheck3.default)(this, Anchors);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Anchors.__proto__ || (0, _getPrototypeOf2.default)(Anchors)).call(this, props));

	    var defaultCategory = null;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = (0, _getIterator3.default)(props.categories), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var category = _step.value;

	        if (category.first) {
	          defaultCategory = category;
	          break;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    _this.state = {
	      selected: defaultCategory.name
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Anchors, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var categories = _props.categories;
	      var onAnchorClick = _props.onAnchorClick;
	      var color = _props.color;
	      var i18n = _props.i18n;
	      var selected = this.state.selected;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-anchors' },
	        categories.map(function (category, i) {
	          var name = category.name;
	          var anchor = category.anchor;
	          var isSelected = name == selected;
	          var SVGElement = SVGs[name];

	          if (anchor === false) {
	            return null;
	          }

	          return _react2.default.createElement(
	            'span',
	            {
	              key: name,
	              title: i18n.categories[name.toLowerCase()],
	              onClick: function onClick() {
	                return onAnchorClick(category, i);
	              },
	              className: 'emoji-mart-anchor ' + (isSelected ? 'emoji-mart-anchor-selected' : ''),
	              style: { color: isSelected ? color : null }
	            },
	            _react2.default.createElement(SVGElement, null),
	            _react2.default.createElement('span', { className: 'emoji-mart-anchor-bar', style: { backgroundColor: color } })
	          );
	        })
	      );
	    }
	  }]);
	  return Anchors;
	}(_react2.default.Component);

	exports.default = Anchors;


	Anchors.propTypes = {
	  categories: _propTypes2.default.array,
	  onAnchorClick: _propTypes2.default.func
	};

	Anchors.defaultProps = {
	  categories: [],
	  onAnchorClick: function onAnchorClick() {}
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(51);
	module.exports = __webpack_require__(53);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	var global        = __webpack_require__(17)
	  , hide          = __webpack_require__(21)
	  , Iterators     = __webpack_require__(9)
	  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(7)
	  , step             = __webpack_require__(8)
	  , Iterators        = __webpack_require__(9)
	  , toIObject        = __webpack_require__(10);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(14)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(11)
	  , defined = __webpack_require__(13);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(12);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(15)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(31)
	  , hide           = __webpack_require__(21)
	  , has            = __webpack_require__(32)
	  , Iterators      = __webpack_require__(9)
	  , $iterCreate    = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(47)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(48)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(17)
	  , core      = __webpack_require__(18)
	  , ctx       = __webpack_require__(19)
	  , hide      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 17 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(22)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(26) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(23)
	  , IE8_DOM_DEFINE = __webpack_require__(25)
	  , toPrimitive    = __webpack_require__(29)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(26) && !__webpack_require__(27)(function(){
	  return Object.defineProperty(__webpack_require__(28)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(27)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24)
	  , document = __webpack_require__(17).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(24);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 32 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(47)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(23)
	  , dPs         = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(28)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(22)
	  , anObject = __webpack_require__(23)
	  , getKeys  = __webpack_require__(36);

	module.exports = __webpack_require__(26) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(45);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(32)
	  , toIObject    = __webpack_require__(10)
	  , arrayIndexOf = __webpack_require__(38)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(10)
	  , toLength  = __webpack_require__(39)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(17)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(22).f
	  , has = __webpack_require__(32)
	  , TAG = __webpack_require__(48)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(43)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(17).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(32)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(13);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(52)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(14)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , defined   = __webpack_require__(13);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(23)
	  , get      = __webpack_require__(54);
	module.exports = __webpack_require__(18).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(55)
	  , ITERATOR  = __webpack_require__(48)('iterator')
	  , Iterators = __webpack_require__(9);
	module.exports = __webpack_require__(18).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(12)
	  , TAG = __webpack_require__(48)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	module.exports = __webpack_require__(18).Object.getPrototypeOf;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(50)
	  , $getPrototypeOf = __webpack_require__(49);

	__webpack_require__(59)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(16)
	  , core    = __webpack_require__(18)
	  , fails   = __webpack_require__(27);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(62);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	var $Object = __webpack_require__(18).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(26), 'Object', {defineProperty: __webpack_require__(22).f});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(66);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(67);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(70);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(5);
	module.exports = __webpack_require__(69).f('iterator');

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	module.exports = __webpack_require__(18).Symbol;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(17)
	  , has            = __webpack_require__(32)
	  , DESCRIPTORS    = __webpack_require__(26)
	  , $export        = __webpack_require__(16)
	  , redefine       = __webpack_require__(31)
	  , META           = __webpack_require__(73).KEY
	  , $fails         = __webpack_require__(27)
	  , shared         = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(47)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(48)
	  , wksExt         = __webpack_require__(69)
	  , wksDefine      = __webpack_require__(74)
	  , keyOf          = __webpack_require__(75)
	  , enumKeys       = __webpack_require__(76)
	  , isArray        = __webpack_require__(79)
	  , anObject       = __webpack_require__(23)
	  , toIObject      = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(29)
	  , createDesc     = __webpack_require__(30)
	  , _create        = __webpack_require__(34)
	  , gOPNExt        = __webpack_require__(80)
	  , $GOPD          = __webpack_require__(82)
	  , $DP            = __webpack_require__(22)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(81).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(78).f  = $propertyIsEnumerable;
	  __webpack_require__(77).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(15)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(24)
	  , has      = __webpack_require__(32)
	  , setDesc  = __webpack_require__(22).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(27)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(17)
	  , core           = __webpack_require__(18)
	  , LIBRARY        = __webpack_require__(15)
	  , wksExt         = __webpack_require__(69)
	  , defineProperty = __webpack_require__(22).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(10);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(77)
	  , pIE     = __webpack_require__(78);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 78 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(12);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(10)
	  , gOPN      = __webpack_require__(81).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(37)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(78)
	  , createDesc     = __webpack_require__(30)
	  , toIObject      = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(29)
	  , has            = __webpack_require__(32)
	  , IE8_DOM_DEFINE = __webpack_require__(25)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(26) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74)('asyncIterator');

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74)('observable');

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(87);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(91);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(66);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89);
	module.exports = __webpack_require__(18).Object.setPrototypeOf;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(16);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(90).set});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(24)
	  , anObject = __webpack_require__(23);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(19)(Function.call, __webpack_require__(82).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	var $Object = __webpack_require__(18).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(16)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(34)});

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(97)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(103)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 96 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(98);
	var invariant = __webpack_require__(99);
	var warning = __webpack_require__(100);

	var ReactPropTypesSecret = __webpack_require__(101);
	var checkPropTypes = __webpack_require__(102);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(98);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 101 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(99);
	  var warning = __webpack_require__(100);
	  var ReactPropTypesSecret = __webpack_require__(101);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(96)))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(98);
	var invariant = __webpack_require__(99);
	var ReactPropTypesSecret = __webpack_require__(101);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _activity = __webpack_require__(105);

	Object.defineProperty(exports, 'Activity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activity).default;
	  }
	});

	var _flags = __webpack_require__(111);

	Object.defineProperty(exports, 'Flags', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flags).default;
	  }
	});

	var _foods = __webpack_require__(112);

	Object.defineProperty(exports, 'Foods', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foods).default;
	  }
	});

	var _nature = __webpack_require__(113);

	Object.defineProperty(exports, 'Nature', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nature).default;
	  }
	});

	var _objects = __webpack_require__(114);

	Object.defineProperty(exports, 'Objects', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_objects).default;
	  }
	});

	var _people = __webpack_require__(115);

	Object.defineProperty(exports, 'People', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_people).default;
	  }
	});

	var _places = __webpack_require__(116);

	Object.defineProperty(exports, 'Places', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_places).default;
	  }
	});

	var _recent = __webpack_require__(117);

	Object.defineProperty(exports, 'Recent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_recent).default;
	  }
	});

	var _symbols = __webpack_require__(118);

	Object.defineProperty(exports, 'Symbols', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_symbols).default;
	  }
	});

	var _custom = __webpack_require__(119);

	Object.defineProperty(exports, 'Custom', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_custom).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var activity = function (_React$Component) {
		(0, _inherits3.default)(activity, _React$Component);

		function activity() {
			(0, _classCallCheck3.default)(this, activity);
			return (0, _possibleConstructorReturn3.default)(this, (activity.__proto__ || (0, _getPrototypeOf2.default)(activity)).apply(this, arguments));
		}

		(0, _createClass3.default)(activity, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "20", width: "20", version: "1.1", viewBox: "0 0 20 20" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1243 1293)" },
						_react2.default.createElement(
							"g",
							{ id: "basketball" },
							_react2.default.createElement("path", { d: "M 11 0.0493164L 11 0L 10 0L 10 1L 11 1.05493L 11 0.0493164Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 10 19L 10 20L 11 19.9506L 11 18.9451L 10 19Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 11 9L 10 9L 10 10L 11 10L 11 9Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 10 20C 10.3375 20 10.6711 19.9833 11 19.9506L 10 20Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 6.62927 9L 5.62378 9L 5.67871 10L 6.67871 10L 6.62927 9Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 15.0549 9L 14.0494 9L 14 10L 15 10L 15.0549 9Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 20 10L 20 9L 19.9507 9L 18.9451 9L 19 10L 20 10Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 1 10L 1.05493 9L 0.0493758 9L 0 10L 1 10Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 0.0493758 9C 0.0167196 9.32891 0 9.6625 0 10L 0.0493758 9Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 4.05237 16.7549C 5.68335 14.9755 6.67871 12.604 6.67871 10L 5.67871 10C 5.67871 12.3307 4.79285 14.4543 3.33936 16.0529C 1.88586 14.4543 1 12.3307 1 10L 0 10C 0 15.5228 4.47717 20 10 20L 10 19C 7.72009 19 5.63818 18.1523 4.05237 16.7549Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 1 10L 5.67871 10L 5.62378 9L 1.05493 9L 1 10Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 3.33936 3.94714C 4.58203 5.31372 5.40979 7.06445 5.62378 9L 6.62927 9C 6.40991 6.79126 5.47192 4.79382 4.05237 3.24512C 5.63818 1.84766 7.72009 1 10 1L 10 0C 4.81467 0 0.551104 3.94669 0.0493758 9L 1.05493 9C 1.26892 7.06433 2.09668 5.31372 3.33936 3.94714Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 10 1L 10 9L 11 9L 11 1.05493L 10 1Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 19.9507 9C 19.7474 6.95312 18.927 5.08789 17.6781 3.5929C 17.4857 3.36255 17.2831 3.14099 17.071 2.92896C 15.4825 1.34045 13.3622 0.283813 11 0.0493164L 11 1.05493C 13.0648 1.2832 14.9191 2.20996 16.3213 3.59363C 15.0728 5.0885 14.2527 6.95349 14.0494 9L 15.0549 9C 15.2488 7.24634 15.9464 5.64465 17 4.34265C 18.0536 5.64465 18.7512 7.24634 18.9451 9L 19.9507 9Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 18.9451 9L 15.0549 9L 15 10L 19 10L 18.9451 9Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 14.0494 9L 11 9L 11 10L 14 10L 14.0494 9Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 6.67871 10L 10 10L 10 9L 6.62927 9L 6.67871 10Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 10 10L 10 19L 11 18.9451L 11 10L 10 10Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 17 17.1414C 17.2235 16.9222 17.4373 16.6921 17.6395 16.453C 19.1122 14.7113 20 12.4594 20 10L 19 10C 19 12.1433 18.2509 14.1116 17 15.6573C 15.7491 14.1116 15 12.1433 15 10L 14 10C 14 12.4375 14.8721 14.6713 16.3213 16.4064C 14.9191 17.79 13.0648 18.7168 11 18.9451L 11 19.9506C 13.3273 19.7196 15.4195 18.6909 17 17.1414Z", transform: "translate(-1243 -1293)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 11 0.0493164L 11 0L 10 0L 10 1L 11 1.05493L 11 0.0493164Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 10 19L 10 20L 11 19.9506L 11 18.9451L 10 19Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 11 9L 10 9L 10 10L 11 10L 11 9Z" }),
						_react2.default.createElement("path", { id: "path3_fill", d: "M 10 20C 10.3375 20 10.6711 19.9833 11 19.9506L 10 20Z" }),
						_react2.default.createElement("path", { id: "path4_fill", d: "M 6.62927 9L 5.62378 9L 5.67871 10L 6.67871 10L 6.62927 9Z" }),
						_react2.default.createElement("path", { id: "path5_fill", d: "M 15.0549 9L 14.0494 9L 14 10L 15 10L 15.0549 9Z" }),
						_react2.default.createElement("path", { id: "path6_fill", d: "M 20 10L 20 9L 19.9507 9L 18.9451 9L 19 10L 20 10Z" }),
						_react2.default.createElement("path", { id: "path7_fill", d: "M 1 10L 1.05493 9L 0.0493758 9L 0 10L 1 10Z" }),
						_react2.default.createElement("path", { id: "path8_fill", d: "M 0.0493758 9C 0.0167196 9.32891 0 9.6625 0 10L 0.0493758 9Z" }),
						_react2.default.createElement("path", { id: "path9_fill", d: "M 4.05237 16.7549C 5.68335 14.9755 6.67871 12.604 6.67871 10L 5.67871 10C 5.67871 12.3307 4.79285 14.4543 3.33936 16.0529C 1.88586 14.4543 1 12.3307 1 10L 0 10C 0 15.5228 4.47717 20 10 20L 10 19C 7.72009 19 5.63818 18.1523 4.05237 16.7549Z" }),
						_react2.default.createElement("path", { id: "path10_fill", d: "M 1 10L 5.67871 10L 5.62378 9L 1.05493 9L 1 10Z" }),
						_react2.default.createElement("path", { id: "path11_fill", d: "M 3.33936 3.94714C 4.58203 5.31372 5.40979 7.06445 5.62378 9L 6.62927 9C 6.40991 6.79126 5.47192 4.79382 4.05237 3.24512C 5.63818 1.84766 7.72009 1 10 1L 10 0C 4.81467 0 0.551104 3.94669 0.0493758 9L 1.05493 9C 1.26892 7.06433 2.09668 5.31372 3.33936 3.94714Z" }),
						_react2.default.createElement("path", { id: "path12_fill", d: "M 10 1L 10 9L 11 9L 11 1.05493L 10 1Z" }),
						_react2.default.createElement("path", { id: "path13_fill", d: "M 19.9507 9C 19.7474 6.95312 18.927 5.08789 17.6781 3.5929C 17.4857 3.36255 17.2831 3.14099 17.071 2.92896C 15.4825 1.34045 13.3622 0.283813 11 0.0493164L 11 1.05493C 13.0648 1.2832 14.9191 2.20996 16.3213 3.59363C 15.0728 5.0885 14.2527 6.95349 14.0494 9L 15.0549 9C 15.2488 7.24634 15.9464 5.64465 17 4.34265C 18.0536 5.64465 18.7512 7.24634 18.9451 9L 19.9507 9Z" }),
						_react2.default.createElement("path", { id: "path14_fill", d: "M 18.9451 9L 15.0549 9L 15 10L 19 10L 18.9451 9Z" }),
						_react2.default.createElement("path", { id: "path15_fill", d: "M 14.0494 9L 11 9L 11 10L 14 10L 14.0494 9Z" }),
						_react2.default.createElement("path", { id: "path16_fill", d: "M 6.67871 10L 10 10L 10 9L 6.62927 9L 6.67871 10Z" }),
						_react2.default.createElement("path", { id: "path17_fill", d: "M 10 10L 10 19L 11 18.9451L 11 10L 10 10Z" }),
						_react2.default.createElement("path", { id: "path18_fill", d: "M 17 17.1414C 17.2235 16.9222 17.4373 16.6921 17.6395 16.453C 19.1122 14.7113 20 12.4594 20 10L 19 10C 19 12.1433 18.2509 14.1116 17 15.6573C 15.7491 14.1116 15 12.1433 15 10L 14 10C 14 12.4375 14.8721 14.6713 16.3213 16.4064C 14.9191 17.79 13.0648 18.7168 11 18.9451L 11 19.9506C 13.3273 19.7196 15.4195 18.6909 17 17.1414Z" })
					)
				);
			}
		}]);
		return activity;
	}(_react2.default.Component);

	exports.default = activity;
	;

	activity.displayName = "activity";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(107);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(109);
	module.exports = __webpack_require__(18).Object.assign;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(16);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(110)});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(36)
	  , gOPS     = __webpack_require__(77)
	  , pIE      = __webpack_require__(78)
	  , toObject = __webpack_require__(50)
	  , IObject  = __webpack_require__(11)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(27)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var flags = function (_React$Component) {
		(0, _inherits3.default)(flags, _React$Component);

		function flags() {
			(0, _classCallCheck3.default)(this, flags);
			return (0, _possibleConstructorReturn3.default)(this, (flags.__proto__ || (0, _getPrototypeOf2.default)(flags)).apply(this, arguments));
		}

		(0, _createClass3.default)(flags, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "17", width: "12", version: "1.1", viewBox: "0 0 12 17" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1093 1289)" },
						_react2.default.createElement(
							"g",
							{ id: "Vector" },
							_react2.default.createElement("path", { d: "M 0 0L 1 0L 1 17L 0 17L 0 0Z", transform: "translate(-1093 -1289)" }),
							_react2.default.createElement("path", { d: "M 1 0L 1 1L 11 1L 11 8L 1 8L 1 9L 11 9L 12 9L 12 8L 12 1L 12 0L 11 0L 1 0Z", transform: "translate(-1093 -1289)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 0 0L 1 0L 1 17L 0 17L 0 0Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 1 0L 1 1L 11 1L 11 8L 1 8L 1 9L 11 9L 12 9L 12 8L 12 1L 12 0L 11 0L 1 0Z" })
					)
				);
			}
		}]);
		return flags;
	}(_react2.default.Component);

	exports.default = flags;
	;

	flags.displayName = "flags";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var foods = function (_React$Component) {
		(0, _inherits3.default)(foods, _React$Component);

		function foods() {
			(0, _classCallCheck3.default)(this, foods);
			return (0, _possibleConstructorReturn3.default)(this, (foods.__proto__ || (0, _getPrototypeOf2.default)(foods)).apply(this, arguments));
		}

		(0, _createClass3.default)(foods, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "20", width: "16", version: "1.1", viewBox: "0 0 16 20" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1279 1293)" },
						_react2.default.createElement(
							"g",
							{ id: "food (Stroke)" },
							_react2.default.createElement("path", { d: "M 8.25 5.7673L 8.25 4.98322L 8.25 4.71502L 8.25 2.99994L 8.25 1.99994L 8.0508 1.99994L 8 1.99994L 7.25 1.99994L 7 1.99994L 7 2.99994L 7 6.40372L 7 7.49921L 8 8.58581L 8.65919 8.2902C 9.11129 8.08204 9.49542 7.99375 10 7.99994C 11.1823 7.99994 12.1726 8.35962 12.857 8.99187C 13.5286 9.61219 14 10.581 14 11.9999C 14 13.3536 13.3237 14.8803 12.2791 16.0886C 11.2169 17.3172 9.96878 17.9999 9 17.9999C 8.54712 18.006 8.26139 17.9422 7.92428 17.7776L 7.5 17.5788L 7.07572 17.7776C 6.73861 17.9422 6.45288 18.006 6 17.9999C 5.03122 17.9999 3.78313 17.3172 2.72094 16.0886C 1.67635 14.8803 1 13.3536 1 11.9999C 1 10.581 1.47142 9.61219 2.14298 8.99187C 2.82744 8.35962 3.8177 7.99994 5 7.99994C 5.5828 7.99167 6.02575 8.11029 6.53557 8.38482L 6 7.11994C 5.67691 7.04124 5.34249 6.99994 5 6.99994C 2.23853 6.99994 0 8.68622 0 11.9999C 0 15.3137 3.23853 18.9999 6 18.9999C 6.56238 18.9999 7.06152 18.8886 7.5 18.6832C 7.93848 18.8886 8.43762 18.9999 9 18.9999C 11.7615 18.9999 15 15.3137 15 11.9999C 15 8.68622 12.7615 6.99994 10 6.99994C 9.74508 6.99994 9.49463 7.02283 9.25 7.067C 8.90376 7.1295 8.56917 7.23462 8.25 7.37775L 8.25 6.30652L 8.25 5.7673Z", transform: "translate(-1279 -1292.5)" }),
							_react2.default.createElement("path", { d: "M 7 7.49921C 6.6825 7.33271 6.34781 7.20466 6 7.11994L 6.53557 8.38482L 7 7.49921Z", transform: "translate(-1279 -1292.5)" }),
							_react2.default.createElement("path", { d: "M 8 8.58581L 7 7.49921L 6.53557 8.38482L 8 8.58581Z", transform: "translate(-1279 -1292.5)" }),
							_react2.default.createElement("path", { d: "M 7.41721 8.84717L 8 9.15279L 8 8.58581L 6.53557 8.38482L 7.25 8.75948L 7.25 8.92215L 7.41721 8.84717Z", transform: "translate(-1279 -1292.5)" }),
							_react2.default.createElement("path", { d: "M 15.3885 0.737612C 14.0405 -0.158873 12.2452 -0.274473 10.7281 0.591493C 10.1221 0.937534 9.62493 1.40344 9.25 1.94242C 9.23673 1.9615 9.22361 1.98068 9.21064 1.99994C 8.67317 2.79838 8.39986 3.75061 8.4325 4.7088L 9.45461 4.13673C 9.58318 3.05262 10.2085 2.03971 11.2239 1.45997C 12.2344 0.883169 13.3987 0.867227 14.3664 1.30968L 15.3885 0.737612Z", transform: "translate(-1279 -1292.5)" }),
							_react2.default.createElement("path", { d: "M 9.25 5.1361C 10.4571 5.6136 11.866 5.55523 13.0929 4.8548C 14.6099 3.98871 15.4442 2.37189 15.3885 0.737612L 14.3664 1.30968C 14.2379 2.39377 13.6125 3.40663 12.5971 3.98637C 11.5865 4.56327 10.4223 4.57919 9.45461 4.13673L 8.4325 4.7088C 8.69033 4.88027 8.96452 5.02317 9.25 5.1361Z", transform: "translate(-1279 -1292.5)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 8.25 5.7673L 8.25 4.98322L 8.25 4.71502L 8.25 2.99994L 8.25 1.99994L 8.0508 1.99994L 8 1.99994L 7.25 1.99994L 7 1.99994L 7 2.99994L 7 6.40372L 7 7.49921L 8 8.58581L 8.65919 8.2902C 9.11129 8.08204 9.49542 7.99375 10 7.99994C 11.1823 7.99994 12.1726 8.35962 12.857 8.99187C 13.5286 9.61219 14 10.581 14 11.9999C 14 13.3536 13.3237 14.8803 12.2791 16.0886C 11.2169 17.3172 9.96878 17.9999 9 17.9999C 8.54712 18.006 8.26139 17.9422 7.92428 17.7776L 7.5 17.5788L 7.07572 17.7776C 6.73861 17.9422 6.45288 18.006 6 17.9999C 5.03122 17.9999 3.78313 17.3172 2.72094 16.0886C 1.67635 14.8803 1 13.3536 1 11.9999C 1 10.581 1.47142 9.61219 2.14298 8.99187C 2.82744 8.35962 3.8177 7.99994 5 7.99994C 5.5828 7.99167 6.02575 8.11029 6.53557 8.38482L 6 7.11994C 5.67691 7.04124 5.34249 6.99994 5 6.99994C 2.23853 6.99994 0 8.68622 0 11.9999C 0 15.3137 3.23853 18.9999 6 18.9999C 6.56238 18.9999 7.06152 18.8886 7.5 18.6832C 7.93848 18.8886 8.43762 18.9999 9 18.9999C 11.7615 18.9999 15 15.3137 15 11.9999C 15 8.68622 12.7615 6.99994 10 6.99994C 9.74508 6.99994 9.49463 7.02283 9.25 7.067C 8.90376 7.1295 8.56917 7.23462 8.25 7.37775L 8.25 6.30652L 8.25 5.7673Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 7 7.49921C 6.6825 7.33271 6.34781 7.20466 6 7.11994L 6.53557 8.38482L 7 7.49921Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 8 8.58581L 7 7.49921L 6.53557 8.38482L 8 8.58581Z" }),
						_react2.default.createElement("path", { id: "path3_fill", d: "M 7.41721 8.84717L 8 9.15279L 8 8.58581L 6.53557 8.38482L 7.25 8.75948L 7.25 8.92215L 7.41721 8.84717Z" }),
						_react2.default.createElement("path", { id: "path4_fill", d: "M 15.3885 0.737612C 14.0405 -0.158873 12.2452 -0.274473 10.7281 0.591493C 10.1221 0.937534 9.62493 1.40344 9.25 1.94242C 9.23673 1.9615 9.22361 1.98068 9.21064 1.99994C 8.67317 2.79838 8.39986 3.75061 8.4325 4.7088L 9.45461 4.13673C 9.58318 3.05262 10.2085 2.03971 11.2239 1.45997C 12.2344 0.883169 13.3987 0.867227 14.3664 1.30968L 15.3885 0.737612Z" }),
						_react2.default.createElement("path", { id: "path5_fill", d: "M 9.25 5.1361C 10.4571 5.6136 11.866 5.55523 13.0929 4.8548C 14.6099 3.98871 15.4442 2.37189 15.3885 0.737612L 14.3664 1.30968C 14.2379 2.39377 13.6125 3.40663 12.5971 3.98637C 11.5865 4.56327 10.4223 4.57919 9.45461 4.13673L 8.4325 4.7088C 8.69033 4.88027 8.96452 5.02317 9.25 5.1361Z" })
					)
				);
			}
		}]);
		return foods;
	}(_react2.default.Component);

	exports.default = foods;
	;

	foods.displayName = "foods";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var nature = function (_React$Component) {
		(0, _inherits3.default)(nature, _React$Component);

		function nature() {
			(0, _classCallCheck3.default)(this, nature);
			return (0, _possibleConstructorReturn3.default)(this, (nature.__proto__ || (0, _getPrototypeOf2.default)(nature)).apply(this, arguments));
		}

		(0, _createClass3.default)(nature, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "18", width: "18", version: "1.1", viewBox: "0 0 18 18" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1317 1291)" },
						_react2.default.createElement(
							"g",
							{ id: "Vector" },
							_react2.default.createElement("path", { d: "M 15.2322 1.51644C 16.2875 4.20921 15.7257 7.38702 13.552 9.56072C 11.3784 11.7344 8.20063 12.2962 5.50787 11.241C 4.45261 8.54825 5.01437 5.37043 7.18806 3.19673C 9.36176 1.02304 12.5395 0.461271 15.2322 1.51644ZM 14.2592 10.2678C 16.8319 7.69507 17.4106 3.88343 15.9954 0.753299C 12.8652 -0.661862 9.05371 -0.083127 6.48096 2.48963C 3.9082 5.06238 3.32947 8.87403 4.74475 12.0042C 7.87488 13.4193 11.6864 12.8406 14.2592 10.2678Z", transform: "translate(-1316.37 -1290.86)" }),
							_react2.default.createElement("path", { d: "M 15.7399 1.21503L 0.73994 17.715L 0 17.0424L 15 0.542361L 15.7399 1.21503Z", transform: "translate(-1316.37 -1290.86)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 15.2322 1.51644C 16.2875 4.20921 15.7257 7.38702 13.552 9.56072C 11.3784 11.7344 8.20063 12.2962 5.50787 11.241C 4.45261 8.54825 5.01437 5.37043 7.18806 3.19673C 9.36176 1.02304 12.5395 0.461271 15.2322 1.51644ZM 14.2592 10.2678C 16.8319 7.69507 17.4106 3.88343 15.9954 0.753299C 12.8652 -0.661862 9.05371 -0.083127 6.48096 2.48963C 3.9082 5.06238 3.32947 8.87403 4.74475 12.0042C 7.87488 13.4193 11.6864 12.8406 14.2592 10.2678Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 15.7399 1.21503L 0.73994 17.715L 0 17.0424L 15 0.542361L 15.7399 1.21503Z" })
					)
				);
			}
		}]);
		return nature;
	}(_react2.default.Component);

	exports.default = nature;
	;

	nature.displayName = "nature";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var objects = function (_React$Component) {
		(0, _inherits3.default)(objects, _React$Component);

		function objects() {
			(0, _classCallCheck3.default)(this, objects);
			return (0, _possibleConstructorReturn3.default)(this, (objects.__proto__ || (0, _getPrototypeOf2.default)(objects)).apply(this, arguments));
		}

		(0, _createClass3.default)(objects, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "18", width: "20", version: "1.1", viewBox: "0 0 20 18" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1168 1292)" },
						_react2.default.createElement(
							"g",
							{ id: "Union" },
							_react2.default.createElement("path", { d: "M 17.0814 1.61096C 14.9336 -0.536987 11.4512 -0.536987 9.30334 1.61096L 1.17151 9.74268C -0.390503 11.3048 -0.390503 13.8374 1.17151 15.3995C 2.73352 16.9614 5.26514 16.9629 6.82739 15.4005L 10.3247 11.9032L 10.6389 11.589L 12.8389 9.38904C 13.8151 8.41272 13.8151 6.82983 12.8389 5.85352C 11.8625 4.8772 10.2795 4.8772 9.30322 5.85352L 3.64648 11.5104L 4.35352 12.2174L 10.0104 6.56067C 10.5962 5.97485 11.5459 5.97485 12.1317 6.56067C 12.7175 7.14636 12.7175 8.09619 12.1317 8.68188L 9.93188 10.8818L 9.61755 11.196L 6.12024 14.6935C 4.94885 15.8649 3.05042 15.8641 1.87866 14.6924C 0.707153 13.5209 0.707153 11.6213 1.87866 10.4498L 10.0104 2.31799C 11.7678 0.560669 14.6169 0.560669 16.3744 2.31799C 18.1317 4.07544 18.1317 6.92468 16.3744 8.68201L 8.59619 16.4602L 9.30334 17.1672L 17.0814 9.38916C 19.2294 7.24121 19.2294 3.75879 17.0814 1.61096Z", transform: "translate(-1167.34 -1291.22)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 17.0814 1.61096C 14.9336 -0.536987 11.4512 -0.536987 9.30334 1.61096L 1.17151 9.74268C -0.390503 11.3048 -0.390503 13.8374 1.17151 15.3995C 2.73352 16.9614 5.26514 16.9629 6.82739 15.4005L 10.3247 11.9032L 10.6389 11.589L 12.8389 9.38904C 13.8151 8.41272 13.8151 6.82983 12.8389 5.85352C 11.8625 4.8772 10.2795 4.8772 9.30322 5.85352L 3.64648 11.5104L 4.35352 12.2174L 10.0104 6.56067C 10.5962 5.97485 11.5459 5.97485 12.1317 6.56067C 12.7175 7.14636 12.7175 8.09619 12.1317 8.68188L 9.93188 10.8818L 9.61755 11.196L 6.12024 14.6935C 4.94885 15.8649 3.05042 15.8641 1.87866 14.6924C 0.707153 13.5209 0.707153 11.6213 1.87866 10.4498L 10.0104 2.31799C 11.7678 0.560669 14.6169 0.560669 16.3744 2.31799C 18.1317 4.07544 18.1317 6.92468 16.3744 8.68201L 8.59619 16.4602L 9.30334 17.1672L 17.0814 9.38916C 19.2294 7.24121 19.2294 3.75879 17.0814 1.61096Z" })
					)
				);
			}
		}]);
		return objects;
	}(_react2.default.Component);

	exports.default = objects;
	;

	objects.displayName = "objects";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var people = function (_React$Component) {
		(0, _inherits3.default)(people, _React$Component);

		function people() {
			(0, _classCallCheck3.default)(this, people);
			return (0, _possibleConstructorReturn3.default)(this, (people.__proto__ || (0, _getPrototypeOf2.default)(people)).apply(this, arguments));
		}

		(0, _createClass3.default)(people, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "20", width: "20", version: "1.1", viewBox: "0 0 20 20" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1355 1293)" },
						_react2.default.createElement(
							"g",
							{ id: "emoji" },
							_react2.default.createElement("path", { d: "M 9.99994 19C 5.02936 19 1 14.9706 1 10C 1 5.02942 5.02936 1 9.99994 1L 9.99994 0C 4.47711 0 0 4.47717 0 10C 0 15.5228 4.47711 20 9.99994 20L 9.99994 19Z", transform: "translate(-1355 -1293)" }),
							_react2.default.createElement("path", { d: "M 18.9999 10C 18.9999 14.9706 14.9705 19 9.99994 19L 9.99994 20C 15.5228 20 19.9999 15.5228 19.9999 10C 19.9999 4.47717 15.5228 0 9.99994 0L 9.99994 1C 14.9705 1 18.9999 5.02942 18.9999 10Z", transform: "translate(-1355 -1293)" }),
							_react2.default.createElement("path", { d: "M 14.4443 7.77771C 14.4443 8.39136 13.9468 8.8888 13.3332 8.8888C 12.7195 8.8888 12.2221 8.39136 12.2221 7.77771C 12.2221 7.16406 12.7195 6.66663 13.3332 6.66663C 13.9468 6.66663 14.4443 7.16406 14.4443 7.77771Z", transform: "translate(-1355 -1293)" }),
							_react2.default.createElement("path", { d: "M 5.18097 11.1111C 5.68512 13.3068 7.65143 14.9445 10.0001 14.9445C 12.3487 14.9445 14.315 13.3068 14.8191 11.1111L 13.7858 11.1111C 13.306 12.7485 11.7927 13.9445 10.0001 13.9445C 8.20746 13.9445 6.69415 12.7485 6.21429 11.1111L 5.18097 11.1111Z", transform: "translate(-1355 -1293)" }),
							_react2.default.createElement("path", { d: "M 6.66669 8.8888C 7.28033 8.8888 7.77777 8.39136 7.77777 7.77771C 7.77777 7.16406 7.28033 6.66663 6.66669 6.66663C 6.05304 6.66663 5.5556 7.16406 5.5556 7.77771C 5.5556 8.39136 6.05304 8.8888 6.66669 8.8888Z", transform: "translate(-1355 -1293)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 9.99994 19C 5.02936 19 1 14.9706 1 10C 1 5.02942 5.02936 1 9.99994 1L 9.99994 0C 4.47711 0 0 4.47717 0 10C 0 15.5228 4.47711 20 9.99994 20L 9.99994 19Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 18.9999 10C 18.9999 14.9706 14.9705 19 9.99994 19L 9.99994 20C 15.5228 20 19.9999 15.5228 19.9999 10C 19.9999 4.47717 15.5228 0 9.99994 0L 9.99994 1C 14.9705 1 18.9999 5.02942 18.9999 10Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 14.4443 7.77771C 14.4443 8.39136 13.9468 8.8888 13.3332 8.8888C 12.7195 8.8888 12.2221 8.39136 12.2221 7.77771C 12.2221 7.16406 12.7195 6.66663 13.3332 6.66663C 13.9468 6.66663 14.4443 7.16406 14.4443 7.77771Z" }),
						_react2.default.createElement("path", { id: "path3_fill", d: "M 5.18097 11.1111C 5.68512 13.3068 7.65143 14.9445 10.0001 14.9445C 12.3487 14.9445 14.315 13.3068 14.8191 11.1111L 13.7858 11.1111C 13.306 12.7485 11.7927 13.9445 10.0001 13.9445C 8.20746 13.9445 6.69415 12.7485 6.21429 11.1111L 5.18097 11.1111Z" }),
						_react2.default.createElement("path", { id: "path4_fill", d: "M 6.66669 8.8888C 7.28033 8.8888 7.77777 8.39136 7.77777 7.77771C 7.77777 7.16406 7.28033 6.66663 6.66669 6.66663C 6.05304 6.66663 5.5556 7.16406 5.5556 7.77771C 5.5556 8.39136 6.05304 8.8888 6.66669 8.8888Z" })
					)
				);
			}
		}]);
		return people;
	}(_react2.default.Component);

	exports.default = people;
	;

	people.displayName = "people";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var places = function (_React$Component) {
		(0, _inherits3.default)(places, _React$Component);

		function places() {
			(0, _classCallCheck3.default)(this, places);
			return (0, _possibleConstructorReturn3.default)(this, (places.__proto__ || (0, _getPrototypeOf2.default)(places)).apply(this, arguments));
		}

		(0, _createClass3.default)(places, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "19", width: "20", version: "1.1", viewBox: "0 0 20 19" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1207 1292)" },
						_react2.default.createElement(
							"g",
							{ id: "Vector" },
							_react2.default.createElement("path", { d: "M 15.1626 1C 14.4544 0.99473 13.8297 1.1816 13.2407 1.57485L 2.58638 8.57485C -0.317953 10.483 1.03313 15 4.50823 15L 13.9661 15L 19.1354 15L 19.1354 16L 13.9661 16L 4.50823 16C 0.0402508 16 -1.69686 10.1925 2.03728 7.73909L 12.6916 0.739093C 13.4074 0.27514 14.3096 0.0052703 15.1626 0L 19.1354 0L 19.1354 1L 15.1626 1Z", transform: "translate(-1206.14 -1292)" }),
							_react2.default.createElement("path", { d: "M 12.6354 15.5C 12.6354 16.8807 13.7547 18 15.1354 18C 16.5161 18 17.6354 16.8807 17.6354 15.5L 18.6354 15.5C 18.6354 17.433 17.0684 19 15.1354 19C 13.2024 19 11.6354 17.433 11.6354 15.5L 12.6354 15.5Z", transform: "translate(-1206.14 -1292)" }),
							_react2.default.createElement("path", { d: "M 14.3854 4.5L 8.63538 4.5L 8.63538 3.5L 14.3854 3.5C 15.628 3.5 16.6354 4.50736 16.6354 5.75C 16.6354 6.99264 15.628 8 14.3854 8L 3.13538 8L 3.13538 7L 14.3854 7C 15.0757 7 15.6354 6.44036 15.6354 5.75C 15.6354 5.05964 15.0757 4.5 14.3854 4.5Z", transform: "translate(-1206.14 -1292)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 15.1626 1C 14.4544 0.99473 13.8297 1.1816 13.2407 1.57485L 2.58638 8.57485C -0.317953 10.483 1.03313 15 4.50823 15L 13.9661 15L 19.1354 15L 19.1354 16L 13.9661 16L 4.50823 16C 0.0402508 16 -1.69686 10.1925 2.03728 7.73909L 12.6916 0.739093C 13.4074 0.27514 14.3096 0.0052703 15.1626 0L 19.1354 0L 19.1354 1L 15.1626 1Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 12.6354 15.5C 12.6354 16.8807 13.7547 18 15.1354 18C 16.5161 18 17.6354 16.8807 17.6354 15.5L 18.6354 15.5C 18.6354 17.433 17.0684 19 15.1354 19C 13.2024 19 11.6354 17.433 11.6354 15.5L 12.6354 15.5Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 14.3854 4.5L 8.63538 4.5L 8.63538 3.5L 14.3854 3.5C 15.628 3.5 16.6354 4.50736 16.6354 5.75C 16.6354 6.99264 15.628 8 14.3854 8L 3.13538 8L 3.13538 7L 14.3854 7C 15.0757 7 15.6354 6.44036 15.6354 5.75C 15.6354 5.05964 15.0757 4.5 14.3854 4.5Z" })
					)
				);
			}
		}]);
		return places;
	}(_react2.default.Component);

	exports.default = places;
	;

	places.displayName = "places";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var recent = function (_React$Component) {
		(0, _inherits3.default)(recent, _React$Component);

		function recent() {
			(0, _classCallCheck3.default)(this, recent);
			return (0, _possibleConstructorReturn3.default)(this, (recent.__proto__ || (0, _getPrototypeOf2.default)(recent)).apply(this, arguments));
		}

		(0, _createClass3.default)(recent, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "20", width: "20", version: "1.1", viewBox: "0 0 20 20" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1395 1293)" },
						_react2.default.createElement(
							"g",
							{ id: "Vector" },
							_react2.default.createElement("path", { d: "M 9 4L 10 4L 10 10L 16 10L 16 11L 10 11L 9 11L 9 10L 9 4Z", transform: "translate(-1395 -1293)" }),
							_react2.default.createElement("path", { d: "M 10 20C 4.47717 20 0 15.5228 0 10C 0 4.47717 4.47717 0 10 0L 10 1C 5.02942 1 1 5.02942 1 10C 1 14.9706 5.02942 19 10 19L 10 20Z", transform: "translate(-1395 -1293)" }),
							_react2.default.createElement("path", { d: "M 20 10C 20 15.5228 15.5228 20 10 20L 10 19C 14.9706 19 19 14.9706 19 10C 19 5.02942 14.9706 1 10 1L 10 0C 15.5228 0 20 4.47717 20 10Z", transform: "translate(-1395 -1293)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 9 4L 10 4L 10 10L 16 10L 16 11L 10 11L 9 11L 9 10L 9 4Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 10 20C 4.47717 20 0 15.5228 0 10C 0 4.47717 4.47717 0 10 0L 10 1C 5.02942 1 1 5.02942 1 10C 1 14.9706 5.02942 19 10 19L 10 20Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 20 10C 20 15.5228 15.5228 20 10 20L 10 19C 14.9706 19 19 14.9706 19 10C 19 5.02942 14.9706 1 10 1L 10 0C 15.5228 0 20 4.47717 20 10Z" })
					)
				);
			}
		}]);
		return recent;
	}(_react2.default.Component);

	exports.default = recent;
	;

	recent.displayName = "recent";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var symbols = function (_React$Component) {
		(0, _inherits3.default)(symbols, _React$Component);

		function symbols() {
			(0, _classCallCheck3.default)(this, symbols);
			return (0, _possibleConstructorReturn3.default)(this, (symbols.__proto__ || (0, _getPrototypeOf2.default)(symbols)).apply(this, arguments));
		}

		(0, _createClass3.default)(symbols, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"svg",
					(0, _extends3.default)({ height: "16", width: "19", version: "1.1", viewBox: "0 0 19 16" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1132 1290)" },
						_react2.default.createElement(
							"g",
							{ id: "Union (Stroke)" },
							_react2.default.createElement("path", { d: "M 5.05505 1C 2.79626 1 1 2.75369 1 4.875C 1 6.12494 1.61959 7.24236 2.59326 7.95445L 2.93721 8.20599L 2.90819 8.26281L 9 13.823L 15.0927 8.26203L 15.0638 8.20513L 15.4067 7.95433C 16.3804 7.24223 17 6.12493 17 4.875C 17 2.7537 15.2036 1 12.9449 1C 11.4353 1 10.1258 1.78696 9.42824 2.94437L 9.00003 3.65486L 8.57178 2.9444C 7.87409 1.78695 6.56457 1 5.05505 1ZM 0 4.875C 0 2.16379 2.28236 0 5.05505 0C 6.64635 0 8.07138 0.710132 8.99998 1.82632C 9.92852 0.710119 11.3536 0 12.9449 0C 15.7175 0 18 2.16378 18 4.875C 18 6.3754 17.2974 7.71236 16.2022 8.6032L 16.0476 8.7443L 9.33707 14.8693L 9 15.177L 8.66293 14.8693L 1.95236 8.7443L 1.79898 8.60431C 0.703066 7.71346 0 6.37594 0 4.875Z", transform: "translate(-1131.5 -1289.5)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 5.05505 1C 2.79626 1 1 2.75369 1 4.875C 1 6.12494 1.61959 7.24236 2.59326 7.95445L 2.93721 8.20599L 2.90819 8.26281L 9 13.823L 15.0927 8.26203L 15.0638 8.20513L 15.4067 7.95433C 16.3804 7.24223 17 6.12493 17 4.875C 17 2.7537 15.2036 1 12.9449 1C 11.4353 1 10.1258 1.78696 9.42824 2.94437L 9.00003 3.65486L 8.57178 2.9444C 7.87409 1.78695 6.56457 1 5.05505 1ZM 0 4.875C 0 2.16379 2.28236 0 5.05505 0C 6.64635 0 8.07138 0.710132 8.99998 1.82632C 9.92852 0.710119 11.3536 0 12.9449 0C 15.7175 0 18 2.16378 18 4.875C 18 6.3754 17.2974 7.71236 16.2022 8.6032L 16.0476 8.7443L 9.33707 14.8693L 9 15.177L 8.66293 14.8693L 1.95236 8.7443L 1.79898 8.60431C 0.703066 7.71346 0 6.37594 0 4.875Z" })
					)
				);
			}
		}]);
		return symbols;
	}(_react2.default.Component);

	exports.default = symbols;
	;

	symbols.displayName = "symbols";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var custom = function (_React$Component) {
					(0, _inherits3.default)(custom, _React$Component);

					function custom() {
									(0, _classCallCheck3.default)(this, custom);
									return (0, _possibleConstructorReturn3.default)(this, (custom.__proto__ || (0, _getPrototypeOf2.default)(custom)).apply(this, arguments));
					}

					(0, _createClass3.default)(custom, [{
									key: "render",
									value: function render() {
													return _react2.default.createElement(
																	"svg",
																	(0, _extends3.default)({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
																	_react2.default.createElement(
																					"g",
																					{ transform: "translate(2.000000, 1.000000)" },
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", x: "8", y: "0" }),
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", transform: "translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) ", x: "8.343", y: "0.049" }),
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", transform: "translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) ", x: "8.343", y: "0.049" })
																	)
													);
									}
					}]);
					return custom;
	}(_react2.default.Component);

	exports.default = custom;
	;

	custom.displayName = "custom";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _frequently = __webpack_require__(121);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Category = function (_React$Component) {
	  (0, _inherits3.default)(Category, _React$Component);

	  function Category() {
	    (0, _classCallCheck3.default)(this, Category);
	    return (0, _possibleConstructorReturn3.default)(this, (Category.__proto__ || (0, _getPrototypeOf2.default)(Category)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Category, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.container = this.refs.container;
	      this.label = this.refs.label;
	      this.parent = this.container.parentNode;

	      this.margin = 0;
	      this.minMargin = 0;

	      this.memoizeSize();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _props = this.props;
	      var name = _props.name;
	      var perLine = _props.perLine;
	      var native = _props.native;
	      var hasStickyPosition = _props.hasStickyPosition;
	      var emojis = _props.emojis;
	      var emojiProps = _props.emojiProps;
	      var skin = emojiProps.skin;
	      var size = emojiProps.size;
	      var set = emojiProps.set;
	      var nextPerLine = nextProps.perLine;
	      var nextNative = nextProps.native;
	      var nextHasStickyPosition = nextProps.hasStickyPosition;
	      var nextEmojis = nextProps.emojis;
	      var nextEmojiProps = nextProps.emojiProps;
	      var nextSkin = nextEmojiProps.skin;
	      var nextSize = nextEmojiProps.size;
	      var nextSet = nextEmojiProps.set;
	      var shouldUpdate = false;

	      if (name == 'Recent' && perLine != nextPerLine) {
	        shouldUpdate = true;
	      }

	      if (name == 'Search') {
	        shouldUpdate = !(emojis == nextEmojis);
	      }

	      if (skin != nextSkin || size != nextSize || native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
	        shouldUpdate = true;
	      }

	      return shouldUpdate;
	    }
	  }, {
	    key: 'memoizeSize',
	    value: function memoizeSize() {
	      var _container$getBoundin = this.container.getBoundingClientRect();

	      var top = _container$getBoundin.top;
	      var height = _container$getBoundin.height;

	      var _parent$getBoundingCl = this.parent.getBoundingClientRect();

	      var parentTop = _parent$getBoundingCl.top;

	      var _label$getBoundingCli = this.label.getBoundingClientRect();

	      var labelHeight = _label$getBoundingCli.height;


	      this.top = top - parentTop + this.parent.scrollTop;

	      if (height == 0) {
	        this.maxMargin = 0;
	      } else {
	        this.maxMargin = height - labelHeight;
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(scrollTop) {
	      var margin = scrollTop - this.top;
	      margin = margin < this.minMargin ? this.minMargin : margin;
	      margin = margin > this.maxMargin ? this.maxMargin : margin;

	      if (margin == this.margin) return;
	      var name = this.props.name;


	      if (!this.props.hasStickyPosition) {
	        this.label.style.top = margin + 'px';
	      }

	      this.margin = margin;
	      return true;
	    }
	  }, {
	    key: 'getEmojis',
	    value: function getEmojis() {
	      var _props2 = this.props;
	      var name = _props2.name;
	      var emojis = _props2.emojis;
	      var perLine = _props2.perLine;


	      if (name == 'Recent') {
	        var custom = this.props.custom;

	        var frequentlyUsed = _frequently2.default.get(perLine);

	        if (frequentlyUsed.length) {
	          emojis = frequentlyUsed.map(function (id) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	              for (var _iterator = (0, _getIterator3.default)(custom), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var emoji = _step.value;

	                if (emoji.id === id) {
	                  return emoji;
	                }
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }

	            return id;
	          });
	        }
	      }

	      if (emojis) {
	        emojis = emojis.slice(0);
	      }

	      return emojis;
	    }
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay(display) {
	      var emojis = this.getEmojis();

	      if (!emojis) {
	        return;
	      }

	      this.container.style.display = display;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var name = _props3.name;
	      var hasStickyPosition = _props3.hasStickyPosition;
	      var emojiProps = _props3.emojiProps;
	      var i18n = _props3.i18n;
	      var emojis = this.getEmojis();
	      var labelStyles = {};
	      var labelSpanStyles = {};
	      var containerStyles = {};

	      if (!emojis) {
	        containerStyles = {
	          display: 'none'
	        };
	      }

	      if (!hasStickyPosition) {
	        labelStyles = {
	          height: 28
	        };

	        labelSpanStyles = {
	          position: 'absolute'
	        };
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: 'container', className: 'emoji-mart-category ' + (emojis && !emojis.length ? 'emoji-mart-no-results' : ''), style: containerStyles },
	        _react2.default.createElement(
	          'div',
	          { style: labelStyles, 'data-name': name, className: 'emoji-mart-category-label' },
	          _react2.default.createElement(
	            'span',
	            { style: labelSpanStyles, ref: 'label' },
	            i18n.categories[name.toLowerCase()]
	          )
	        ),
	        emojis && emojis.map(function (emoji) {
	          return (0, _.Emoji)((0, _extends3.default)({
	            emoji: emoji
	          }, emojiProps));
	        }),
	        emojis && !emojis.length && _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            (0, _.Emoji)((0, _extends3.default)({}, emojiProps, {
	              size: 38,
	              emoji: 'sleuth_or_spy',
	              onOver: null,
	              onLeave: null,
	              onClick: null
	            }))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-no-results-label' },
	            i18n.notfound
	          )
	        )
	      );
	    }
	  }]);
	  return Category;
	}(_react2.default.Component);

	exports.default = Category;


	Category.propTypes = {
	  emojis: _propTypes2.default.array,
	  hasStickyPosition: _propTypes2.default.bool,
	  name: _propTypes2.default.string.isRequired,
	  native: _propTypes2.default.bool.isRequired,
	  perLine: _propTypes2.default.number.isRequired,
	  emojiProps: _propTypes2.default.object.isRequired
	};

	Category.defaultProps = {
	  emojis: [],
	  hasStickyPosition: true
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(122);

	var _keys2 = _interopRequireDefault(_keys);

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _store = __webpack_require__(133);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];

	var frequently = _store2.default.get('frequently');
	var defaults = {};

	function add(emoji) {
	  var id = emoji.id;


	  frequently || (frequently = defaults);
	  frequently[id] || (frequently[id] = 0);
	  frequently[id] += 1;

	  _store2.default.set('last', id);
	  _store2.default.set('frequently', frequently);
	}

	function get(perLine) {
	  if (!frequently) {
	    defaults = {};

	    // Use Array.prototype.fill() when it is more widely supported.
	    return [].concat((0, _toConsumableArray3.default)(Array(perLine))).map(function (_, i) {
	      defaults[DEFAULTS[i]] = perLine - i;
	      return DEFAULTS[i];
	    });
	  }

	  var quantity = perLine * 4,
	      sorted = (0, _keys2.default)(frequently).sort(function (a, b) {
	    return frequently[a] - frequently[b];
	  }).reverse(),
	      sliced = sorted.slice(0, quantity),
	      last = _store2.default.get('last');

	  if (last && sliced.indexOf(last) == -1) {
	    sliced.pop();
	    sliced.push(last);
	  }

	  return sliced;
	}

	exports.default = { add: add, get: get };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(124);
	module.exports = __webpack_require__(18).Object.keys;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(50)
	  , $keys    = __webpack_require__(36);

	__webpack_require__(59)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(126);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(128);
	module.exports = __webpack_require__(18).Array.from;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(19)
	  , $export        = __webpack_require__(16)
	  , toObject       = __webpack_require__(50)
	  , call           = __webpack_require__(129)
	  , isArrayIter    = __webpack_require__(130)
	  , toLength       = __webpack_require__(39)
	  , createProperty = __webpack_require__(131)
	  , getIterFn      = __webpack_require__(54);

	$export($export.S + $export.F * !__webpack_require__(132)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(23);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(9)
	  , ITERATOR   = __webpack_require__(48)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(22)
	  , createDesc      = __webpack_require__(30);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(48)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(134);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NAMESPACE = 'emoji-mart';

	var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

	function update(state) {
	  for (var key in state) {
	    var value = state[key];
	    set(key, value);
	  }
	}

	function set(key, value) {
	  if (!isLocalStorageSupported) return;
	  try {
	    window.localStorage[NAMESPACE + '.' + key] = (0, _stringify2.default)(value);
	  } catch (e) {}
	}

	function get(key) {
	  if (!isLocalStorageSupported) return;
	  try {
	    var value = window.localStorage[NAMESPACE + '.' + key];
	  } catch (e) {
	    return;
	  }

	  if (value) {
	    return JSON.parse(value);
	  }
	}

	function setNamespace(namespace) {
	  NAMESPACE = namespace;
	}

	exports.default = { update: update, set: set, get: get, setNamespace: setNamespace };

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(18)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _data = __webpack_require__(137);

	var _data2 = _interopRequireDefault(_data);

	var _utils = __webpack_require__(138);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SHEET_COLUMNS = 49;

	var _getPosition = function _getPosition(props) {
	  var _getData2 = _getData(props);

	  var sheet_x = _getData2.sheet_x;
	  var sheet_y = _getData2.sheet_y;
	  var multiply = 100 / (SHEET_COLUMNS - 1);

	  return multiply * sheet_x + '% ' + multiply * sheet_y + '%';
	};

	var _getData = function _getData(props) {
	  var emoji = props.emoji;
	  var skin = props.skin;
	  var set = props.set;

	  return (0, _utils.getData)(emoji, skin, set);
	};

	var _getSanitizedData = function _getSanitizedData(props) {
	  var emoji = props.emoji;
	  var skin = props.skin;
	  var set = props.set;

	  return (0, _utils.getSanitizedData)(emoji, skin, set);
	};

	var _handleClick = function _handleClick(e, props) {
	  if (!props.onClick) {
	    return;
	  }
	  var onClick = props.onClick;
	  var emoji = _getSanitizedData(props);

	  onClick(emoji, e);
	};

	var _handleOver = function _handleOver(e, props) {
	  if (!props.onOver) {
	    return;
	  }
	  var onOver = props.onOver;
	  var emoji = _getSanitizedData(props);

	  onOver(emoji, e);
	};

	var _handleLeave = function _handleLeave(e, props) {
	  if (!props.onLeave) {
	    return;
	  }
	  var onLeave = props.onLeave;
	  var emoji = _getSanitizedData(props);

	  onLeave(emoji, e);
	};

	var Emoji = function Emoji(props) {
	  for (var k in Emoji.defaultProps) {
	    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
	      props[k] = Emoji.defaultProps[k];
	    }
	  }

	  var _getData3 = _getData(props);

	  var unified = _getData3.unified;
	  var custom = _getData3.custom;
	  var imageUrl = _getData3.imageUrl;
	  var style = {};
	  var children = props.children;

	  if (!unified && !custom) {
	    return null;
	  }

	  if (props.native && unified) {
	    style = { fontSize: props.size };
	    children = (0, _utils.unifiedToNative)(unified);

	    if (props.forceSize) {
	      style.display = 'inline-block';
	      style.width = props.size;
	      style.height = props.size;
	    }
	  } else if (custom) {
	    style = {
	      width: props.size,
	      height: props.size,
	      display: 'inline-block',
	      backgroundImage: 'url(' + imageUrl + ')',
	      backgroundSize: '100%'
	    };
	  } else {
	    var setHasEmoji = _getData(props)['has_img_' + props.set];

	    if (!setHasEmoji) {
	      return null;
	    }

	    style = {
	      width: props.size,
	      height: props.size,
	      display: 'inline-block',
	      backgroundImage: 'url(' + props.backgroundImageFn(props.set, props.sheetSize) + ')',
	      backgroundSize: 100 * SHEET_COLUMNS + '%',
	      backgroundPosition: _getPosition(props)
	    };
	  }

	  return _react2.default.createElement(
	    'span',
	    {
	      key: props.emoji.id || props.emoji,
	      onClick: function onClick(e) {
	        return _handleClick(e, props);
	      },
	      onMouseEnter: function onMouseEnter(e) {
	        return _handleOver(e, props);
	      },
	      onMouseLeave: function onMouseLeave(e) {
	        return _handleLeave(e, props);
	      },
	      className: 'emoji-mart-emoji' },
	    _react2.default.createElement(
	      'span',
	      { style: style },
	      children
	    )
	  );
	};

	Emoji.propTypes = {
	  onOver: _propTypes2.default.func,
	  onLeave: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  backgroundImageFn: _propTypes2.default.func,
	  native: _propTypes2.default.bool,
	  forceSize: _propTypes2.default.bool,
	  skin: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]),
	  sheetSize: _propTypes2.default.oneOf([16, 20, 32, 64]),
	  set: _propTypes2.default.oneOf(['apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']),
	  size: _propTypes2.default.number.isRequired,
	  emoji: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	Emoji.defaultProps = {
	  skin: 1,
	  set: 'apple',
	  sheetSize: 64,
	  native: false,
	  forceSize: false,
	  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
	    return 'https://unpkg.com/emoji-datasource-' + set + '@' + ('^3.0.0') + '/img/' + set + '/sheets/' + sheetSize + '.png';
	  },
	  onOver: function onOver() {},
	  onLeave: function onLeave() {},
	  onClick: function onClick() {}
	};

	exports.default = Emoji;

/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={categories:[{name:"People",emojis:["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rolling_on_the_floor_laughing","relaxed","blush","innocent","slightly_smiling_face","upside_down_face","wink","relieved","heart_eyes","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","stuck_out_tongue","money_mouth_face","hugging_face","nerd_face","sunglasses","clown_face","face_with_cowboy_hat","smirk","unamused","disappointed","pensive","worried","confused","slightly_frowning_face","white_frowning_face","persevere","confounded","tired_face","weary","triumph","angry","rage","no_mouth","neutral_face","expressionless","hushed","frowning","anguished","open_mouth","astonished","dizzy_face","flushed","scream","fearful","cold_sweat","cry","disappointed_relieved","drooling_face","sob","sweat","sleepy","sleeping","face_with_rolling_eyes","thinking_face","lying_face","grimacing","zipper_mouth_face","nauseated_face","sneezing_face","mask","face_with_thermometer","face_with_head_bandage","smiling_imp","imp","japanese_ogre","japanese_goblin","hankey","ghost","skull","skull_and_crossbones","alien","space_invader","robot_face","jack_o_lantern","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","open_hands","raised_hands","clap","pray","handshake","+1","-1","facepunch","fist","left-facing_fist","right-facing_fist","hand_with_index_and_middle_fingers_crossed","v","the_horns","ok_hand","point_left","point_right","point_up_2","point_down","point_up","hand","raised_back_of_hand","raised_hand_with_fingers_splayed","spock-hand","wave","call_me_hand","muscle","middle_finger","writing_hand","selfie","nail_care","ring","lipstick","kiss","lips","tongue","ear","nose","footprints","eye","eyes","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","baby","boy","girl","man","woman","blond-haired-woman","person_with_blond_hair","older_man","older_woman","man_with_gua_pi_mao","woman-wearing-turban","man_with_turban","female-police-officer","cop","female-construction-worker","construction_worker","female-guard","guardsman","female-detective","sleuth_or_spy","female-doctor","male-doctor","female-farmer","male-farmer","female-cook","male-cook","female-student","male-student","female-singer","male-singer","female-teacher","male-teacher","female-factory-worker","male-factory-worker","female-technologist","male-technologist","female-office-worker","male-office-worker","female-mechanic","male-mechanic","female-scientist","male-scientist","female-artist","male-artist","female-firefighter","male-firefighter","female-pilot","male-pilot","female-astronaut","male-astronaut","female-judge","male-judge","mother_christmas","santa","princess","prince","bride_with_veil","man_in_tuxedo","angel","pregnant_woman","woman-bowing","bow","information_desk_person","man-tipping-hand","no_good","man-gesturing-no","ok_woman","man-gesturing-ok","raising_hand","man-raising-hand","face_palm","woman-facepalming","man-facepalming","shrug","woman-shrugging","man-shrugging","person_with_pouting_face","man-pouting","person_frowning","man-frowning","haircut","man-getting-haircut","massage","man-getting-massage","man_in_business_suit_levitating","dancer","man_dancing","dancers","man-with-bunny-ears-partying","woman-walking","walking","woman-running","runner","couple","two_women_holding_hands","two_men_holding_hands","couple_with_heart","woman-heart-woman","man-heart-man","couplekiss","woman-kiss-woman","man-kiss-man","family","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-boy","woman-girl","woman-girl-boy","woman-boy-boy","woman-girl-girl","man-boy","man-girl","man-girl-boy","man-boy-boy","man-girl-girl","womans_clothes","shirt","jeans","necktie","dress","bikini","kimono","high_heel","sandal","boot","mans_shoe","athletic_shoe","womans_hat","tophat","mortar_board","crown","helmet_with_white_cross","school_satchel","pouch","purse","handbag","briefcase","eyeglasses","dark_sunglasses","closed_umbrella","umbrella","man-woman-boy","woman-heart-man","woman-kiss-man","male-police-officer","blond-haired-man","man-wearing-turban","male-construction-worker","male-guard","male-detective","woman-with-bunny-ears-partying","man-running","woman-getting-massage","woman-getting-haircut","man-walking","woman-tipping-hand","woman-gesturing-no","woman-gesturing-ok","man-bowing","woman-raising-hand","woman-frowning","woman-pouting"]},{name:"Nature",emojis:["dog","cat","mouse","hamster","rabbit","fox_face","bear","panda_face","koala","tiger","lion_face","cow","pig","pig_nose","frog","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","duck","eagle","owl","bat","wolf","boar","horse","unicorn_face","bee","bug","butterfly","snail","shell","beetle","ant","spider","spider_web","turtle","snake","lizard","scorpion","crab","squid","octopus","shrimp","tropical_fish","fish","blowfish","dolphin","shark","whale","whale2","crocodile","leopard","tiger2","water_buffalo","ox","cow2","deer","dromedary_camel","camel","elephant","rhinoceros","gorilla","racehorse","pig2","goat","ram","sheep","dog2","poodle","cat2","rooster","turkey","dove_of_peace","rabbit2","mouse2","rat","chipmunk","feet","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","mushroom","ear_of_rice","bouquet","tulip","rose","wilted_flower","sunflower","blossom","cherry_blossom","hibiscus","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","moon","new_moon_with_face","full_moon_with_face","sun_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","crescent_moon","dizzy","star","star2","sparkles","zap","fire","boom","comet","sunny","mostly_sunny","partly_sunny","barely_sunny","partly_sunny_rain","rainbow","cloud","rain_cloud","thunder_cloud_and_rain","lightning","snow_cloud","snowman","snowman_without_snow","snowflake","wind_blowing_face","dash","tornado","fog","ocean","droplet","sweat_drops","umbrella_with_rain_drops"]},{name:"Foods",emojis:["green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","pineapple","kiwifruit","avocado","tomato","eggplant","cucumber","carrot","corn","hot_pepper","potato","sweet_potato","chestnut","peanuts","honey_pot","croissant","bread","baguette_bread","cheese_wedge","egg","fried_egg","bacon","pancakes","fried_shrimp","poultry_leg","meat_on_bone","pizza","hotdog","hamburger","fries","stuffed_flatbread","taco","burrito","green_salad","shallow_pan_of_food","spaghetti","ramen","stew","fish_cake","sushi","bento","curry","rice","rice_ball","rice_cracker","oden","dango","shaved_ice","ice_cream","icecream","cake","birthday","custard","lollipop","candy","chocolate_bar","popcorn","doughnut","cookie","glass_of_milk","baby_bottle","coffee","tea","sake","beer","beers","clinking_glasses","wine_glass","tumbler_glass","cocktail","tropical_drink","champagne","spoon","fork_and_knife","knife_fork_plate"]},{name:"Activity",emojis:["soccer","basketball","football","baseball","tennis","volleyball","rugby_football","8ball","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","goal_net","ice_hockey_stick_and_puck","field_hockey_stick_and_ball","cricket_bat_and_ball","golf","bow_and_arrow","fishing_pole_and_fish","boxing_glove","martial_arts_uniform","ice_skate","ski","skier","snowboarder","woman-lifting-weights","weight_lifter","fencer","wrestlers","woman-wrestling","man-wrestling","person_doing_cartwheel","woman-cartwheeling","man-cartwheeling","woman-bouncing-ball","person_with_ball","handball","woman-playing-handball","man-playing-handball","woman-golfing","golfer","woman-surfing","surfer","woman-swimming","swimmer","water_polo","woman-playing-water-polo","man-playing-water-polo","woman-rowing-boat","rowboat","horse_racing","woman-biking","bicyclist","woman-mountain-biking","mountain_bicyclist","running_shirt_with_sash","sports_medal","medal","first_place_medal","second_place_medal","third_place_medal","trophy","rosette","reminder_ribbon","ticket","admission_tickets","circus_tent","juggling","woman-juggling","man-juggling","performing_arts","art","clapper","microphone","headphones","musical_score","musical_keyboard","drum_with_drumsticks","saxophone","trumpet","guitar","violin","game_die","dart","bowling","video_game","slot_machine","man-bouncing-ball","man-lifting-weights","man-golfing","man-surfing","man-swimming","man-rowing-boat","man-biking","man-mountain-biking"]},{name:"Places",emojis:["car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","scooter","bike","motor_scooter","racing_motorcycle","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","mountain_railway","monorail","bullettrain_side","bullettrain_front","light_rail","steam_locomotive","train2","metro","tram","station","helicopter","small_airplane","airplane","airplane_departure","airplane_arriving","rocket","satellite","seat","canoe","boat","motor_boat","speedboat","passenger_ship","ferry","ship","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","world_map","moyai","statue_of_liberty","fountain","tokyo_tower","european_castle","japanese_castle","stadium","ferris_wheel","roller_coaster","carousel_horse","umbrella_on_ground","beach_with_umbrella","desert_island","mountain","snow_capped_mountain","mount_fuji","volcano","desert","camping","tent","railway_track","motorway","building_construction","factory","house","house_with_garden","house_buildings","derelict_house_building","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine","japan","rice_scene","national_park","sunrise","sunrise_over_mountains","stars","sparkler","fireworks","city_sunrise","city_sunset","cityscape","night_with_stars","milky_way","bridge_at_night","foggy"]},{name:"Objects",emojis:["watch","iphone","calling","computer","keyboard","desktop_computer","printer","three_button_mouse","trackball","joystick","compression","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_with_flash","video_camera","movie_camera","film_projector","film_frames","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass","hourglass_flowing_sand","satellite_antenna","battery","electric_plug","bulb","flashlight","candle","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","scales","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","chains","gun","bomb","hocho","dagger_knife","crossed_swords","shield","smoking","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","barber","alembic","telescope","microscope","hole","pill","syringe","thermometer","toilet","potable_water","shower","bathtub","bath","bellhop_bell","key","old_key","door","couch_and_lamp","bed","sleeping_accommodation","frame_with_picture","shopping_bags","shopping_trolley","gift","balloon","flags","ribbon","confetti_ball","tada","dolls","izakaya_lantern","wind_chime","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","inbox_tray","outbox_tray","package","label","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","postbox","postal_horn","scroll","page_with_curl","page_facing_up","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","spiral_note_pad","spiral_calendar_pad","calendar","date","card_index","card_file_box","ballot_box_with_ballot","file_cabinet","clipboard","file_folder","open_file_folder","card_index_dividers","rolled_up_newspaper","newspaper","notebook","notebook_with_decorative_cover","ledger","closed_book","green_book","blue_book","orange_book","books","book","bookmark","link","paperclip","linked_paperclips","triangular_ruler","straight_ruler","pushpin","round_pushpin","scissors","lower_left_ballpoint_pen","lower_left_fountain_pen","black_nib","lower_left_paintbrush","lower_left_crayon","memo","pencil2","mag","mag_right","lock_with_ink_pen","closed_lock_with_key","lock","unlock"]},{name:"Symbols",emojis:["heart","yellow_heart","green_heart","blue_heart","purple_heart","black_heart","broken_heart","heavy_heart_exclamation_mark_ornament","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om_symbol","wheel_of_dharma","star_of_david","six_pointed_star","menorah_with_nine_branches","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","accept","radioactive_sign","biohazard_sign","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u5272","u7981","a","b","ab","cl","o2","sos","x","o","octagonal_sign","no_entry","name_badge","no_entry_sign","100","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","no_smoking","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","low_brightness","high_brightness","part_alternation_mark","warning","children_crossing","trident","fleur_de_lis","beginner","recycle","white_check_mark","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","globe_with_meridians","diamond_shape_with_a_dot_inside","m","cyclone","zzz","atm","wc","wheelchair","parking","u7a7a","sa","passport_control","customs","baggage_claim","left_luggage","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","symbols","information_source","abc","abcd","capital_abcd","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","1234","hash","keycap_star","arrow_forward","double_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","black_square_for_stop","eject","black_circle_for_record","black_right_pointing_double_triangle_with_vertical_bar","black_left_pointing_double_triangle_with_vertical_bar","fast_forward","rewind","arrow_double_up","arrow_double_down","arrow_backward","arrow_up_small","arrow_down_small","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","twisted_rightwards_arrows","repeat","repeat_one","arrows_counterclockwise","arrows_clockwise","musical_note","notes","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","heavy_dollar_sign","currency_exchange","tm","copyright","registered","wavy_dash","curly_loop","loop","end","back","on","top","soon","heavy_check_mark","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_red_triangle","small_red_triangle_down","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","white_square_button","black_square_button","black_small_square","white_small_square","black_medium_small_square","white_medium_small_square","black_medium_square","white_medium_square","black_large_square","white_large_square","speaker","mute","sound","loud_sound","bell","no_bell","mega","loudspeaker","eye-in-speech-bubble","speech_balloon","left_speech_bubble","thought_balloon","right_anger_bubble","spades","clubs","hearts","diamonds","black_joker","flower_playing_cards","mahjong","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230","female_sign","male_sign","staff_of_aesculapius"]},{name:"Flags",emojis:["checkered_flag","crossed_flags","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-cn","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-de","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-er","flag-es","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-fr","flag-ga","flag-gb","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-it","flag-je","flag-jm","flag-jo","flag-jp","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kr","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-ru","flag-rw","flag-sa","flag-sb","flag-sc","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-un","flag-us","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","rainbow-flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"]}],emojis:{"100":{name:"Hundred Points Symbol",unified:"1F4AF",sheet_x:17,sheet_y:32,short_names:["100"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"100,hundred,points,symbol,score,perfect,numbers,century,exam,quiz,test,pass"},"1234":{name:"Input Symbol for Numbers",unified:"1F522",sheet_x:19,sheet_y:48,short_names:["1234"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"1234,input,symbol,for,numbers,blue-square"},dog:{name:"Dog Face",unified:"1F436",sheet_x:11,sheet_y:30,short_names:["dog"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dog,face,animal,friend,nature,woof,puppy,pet,faithful"},green_apple:{name:"Green Apple",unified:"1F34F",sheet_x:6,sheet_y:12,short_names:["green_apple"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"green,apple,fruit,nature"},watch:{name:"Watch",unified:"231A",variations:["231A-FE0F"],sheet_x:0,sheet_y:14,short_names:["watch"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"watch,time,accessories"},waving_white_flag:{name:"Waving White FLAG",unified:"1F3F3",variations:["1F3F3-FE0F"],sheet_x:10,sheet_y:13,short_names:["waving_white_flag"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"waving,white,flag"},heart:{name:"Heavy Black Heart",unified:"2764",variations:["2764-FE0F"],sheet_x:3,sheet_y:30,short_names:["heart"],text:"<3",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["<3"],search:"heart,heavy,black,love,like,valentines,<3"},car:{name:"Automobile",unified:"1F697",sheet_x:25,sheet_y:29,short_names:["car","red_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"car,red,automobile"},soccer:{name:"Soccer Ball",unified:"26BD",variations:["26BD-FE0F"],sheet_x:2,sheet_y:5,short_names:["soccer"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"soccer,ball,sports,football"},grinning:{name:"Grinning Face",unified:"1F600",sheet_x:22,sheet_y:33,short_names:["grinning"],text:":D",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grinning,face,smile,happy,joy,:d,grin"},yellow_heart:{name:"Yellow Heart",unified:"1F49B",sheet_x:17,sheet_y:7,short_names:["yellow_heart"],text:"<3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"yellow,heart,love,like,affection,valentines"},iphone:{name:"Mobile Phone",unified:"1F4F1",sheet_x:19,sheet_y:0,short_names:["iphone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"iphone,mobile,phone,technology,apple,gadgets,dial"},waving_black_flag:{name:"Waving Black FLAG",unified:"1F3F4",sheet_x:10,sheet_y:14,short_names:["waving_black_flag"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"waving,black,flag"},cat:{name:"Cat Face",unified:"1F431",sheet_x:11,sheet_y:25,short_names:["cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cat,face,animal,meow,nature,pet,kitten"},taxi:{name:"Taxi",unified:"1F695",sheet_x:25,sheet_y:27,short_names:["taxi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"taxi,uber,vehicle,cars,transportation"},apple:{name:"Red Apple",unified:"1F34E",sheet_x:6,sheet_y:11,short_names:["apple"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"apple,red,fruit,mac,school"},basketball:{name:"Basketball and Hoop",unified:"1F3C0",sheet_x:8,sheet_y:27,short_names:["basketball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"basketball,and,hoop,sports,balls,nba"},smiley:{name:"Smiling Face with Open Mouth",unified:"1F603",sheet_x:22,sheet_y:36,short_names:["smiley"],text:":)",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["=)","=-)"],search:"smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)"},mouse:{name:"Mouse Face",unified:"1F42D",sheet_x:11,sheet_y:21,short_names:["mouse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mouse,face,animal,nature,cheese_wedge,rodent"},calling:{name:"Mobile Phone with Rightwards Arrow at Left",unified:"1F4F2",sheet_x:19,sheet_y:1,short_names:["calling"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"calling,mobile,phone,with,rightwards,arrow,at,left,iphone,incoming"},blue_car:{name:"Recreational Vehicle",unified:"1F699",sheet_x:25,sheet_y:31,short_names:["blue_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blue,car,recreational,vehicle,transportation"},pear:{name:"Pear",unified:"1F350",sheet_x:6,sheet_y:13,short_names:["pear"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pear,fruit,nature,food"},checkered_flag:{name:"Chequered FLAG",unified:"1F3C1",sheet_x:8,sheet_y:28,short_names:["checkered_flag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"checkered,flag,chequered,contest,finishline,race,gokart"},green_heart:{name:"Green Heart",unified:"1F49A",sheet_x:17,sheet_y:6,short_names:["green_heart"],text:"<3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"green,heart,love,like,affection,valentines"},football:{name:"American Football",unified:"1F3C8",sheet_x:9,sheet_y:6,short_names:["football"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"football,american,sports,balls,nfl"},smile:{name:"Smiling Face with Open Mouth and Smiling Eyes",unified:"1F604",sheet_x:22,sheet_y:37,short_names:["smile"],text:":)",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["C:","c:",":D",":-D"],search:"smile,smiling,face,with,open,mouth,and,eyes,happy,joy,funny,haha,laugh,like,:d,:),c:,:-d"},tangerine:{name:"Tangerine",unified:"1F34A",sheet_x:6,sheet_y:7,short_names:["tangerine"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tangerine,food,fruit,nature,orange"},bus:{name:"Bus",unified:"1F68C",sheet_x:25,sheet_y:18,short_names:["bus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bus,car,vehicle,transportation"},baseball:{name:"Baseball",unified:"26BE",variations:["26BE-FE0F"],sheet_x:2,sheet_y:6,short_names:["baseball"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baseball,sports,balls"},hamster:{name:"Hamster Face",unified:"1F439",sheet_x:11,sheet_y:33,short_names:["hamster"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hamster,face,animal,nature"},blue_heart:{name:"Blue Heart",unified:"1F499",sheet_x:17,sheet_y:5,short_names:["blue_heart"],text:"<3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blue,heart,love,like,affection,valentines"},grin:{name:"Grinning Face with Smiling Eyes",unified:"1F601",sheet_x:22,sheet_y:34,short_names:["grin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grin,grinning,face,with,smiling,eyes,happy,smile,joy,kawaii"},triangular_flag_on_post:{name:"Triangular Flag on POST",unified:"1F6A9",sheet_x:26,sheet_y:3,short_names:["triangular_flag_on_post"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"triangular,flag,on,post,mark,milestone,place"},computer:{name:"Personal Computer",unified:"1F4BB",sheet_x:17,sheet_y:44,short_names:["computer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"computer,personal,technology,laptop,screen,display,monitor"},tennis:{name:"Tennis Racquet and Ball",unified:"1F3BE",sheet_x:8,sheet_y:25,short_names:["tennis"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tennis,racquet,and,ball,sports,balls,green"},trolleybus:{name:"Trolleybus",unified:"1F68E",sheet_x:25,sheet_y:20,short_names:["trolleybus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"trolleybus,bart,transportation,vehicle"},laughing:{name:"Smiling Face with Open Mouth and Tightly-Closed Eyes",unified:"1F606",sheet_x:22,sheet_y:39,short_names:["laughing","satisfied"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":>",":->"],search:"laughing,satisfied,smiling,face,with,open,mouth,and,tightly,closed,eyes,happy,joy,lol,haha,glad,xd,laugh,:>,:->"},rabbit:{name:"Rabbit Face",unified:"1F430",sheet_x:11,sheet_y:24,short_names:["rabbit"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rabbit,face,animal,nature,pet,spring,magic,bunny"},lemon:{name:"Lemon",unified:"1F34B",sheet_x:6,sheet_y:8,short_names:["lemon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lemon,fruit,nature"},keyboard:{name:"Keyboard",unified:"2328",variations:["2328-FE0F"],sheet_x:0,sheet_y:16,short_names:["keyboard"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"keyboard,technology,computer,type,input,text"},"rainbow-flag":{name:"Rainbow FLAG",unified:"1F3F3-FE0F-200D-1F308",sheet_x:40,sheet_y:48,short_names:["rainbow-flag"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"rainbow,flag"},purple_heart:{name:"Purple Heart",unified:"1F49C",sheet_x:17,sheet_y:8,short_names:["purple_heart"],text:"<3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"purple,heart,love,like,affection,valentines"},black_heart:{name:"Black Heart",unified:"1F5A4",sheet_x:22,sheet_y:7,short_names:["black_heart"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"black,heart,evil"},desktop_computer:{name:"Desktop Computer",unified:"1F5A5",sheet_x:22,sheet_y:8,short_names:["desktop_computer"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"desktop,computer,technology,computing,screen"},fox_face:{name:"Fox Face",unified:"1F98A",sheet_x:30,sheet_y:39,short_names:["fox_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"fox,face,animal,nature"},"flag-af":{name:"Regional Indicator Symbol Letters AF",unified:"1F1E6-1F1EB",sheet_x:31,sheet_y:14,short_names:["flag-af"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,af,regional,indicator,symbol,letters"},racing_car:{name:"Racing Car",unified:"1F3CE",sheet_x:9,sheet_y:27,short_names:["racing_car"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"racing,car,sports,race,fast,formula,f1"},volleyball:{name:"Volleyball",unified:"1F3D0",sheet_x:9,sheet_y:29,short_names:["volleyball"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"volleyball,sports,balls"},sweat_smile:{name:"Smiling Face with Open Mouth and Cold Sweat",unified:"1F605",sheet_x:22,sheet_y:38,short_names:["sweat_smile"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sweat,smile,smiling,face,with,open,mouth,and,cold,hot,happy,laugh,relief"},banana:{name:"Banana",unified:"1F34C",sheet_x:6,sheet_y:9,short_names:["banana"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"banana,fruit,food,monkey"},"flag-ax":{name:"Regional Indicator Symbol Letters AX",unified:"1F1E6-1F1FD",sheet_x:31,sheet_y:26,short_names:["flag-ax"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ax,regional,indicator,symbol,letters"},rugby_football:{name:"Rugby Football",unified:"1F3C9",sheet_x:9,sheet_y:7,short_names:["rugby_football"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rugby,football,sports,team"},watermelon:{name:"Watermelon",unified:"1F349",sheet_x:6,sheet_y:6,short_names:["watermelon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"watermelon,fruit,food,picnic,summer"},broken_heart:{name:"Broken Heart",unified:"1F494",sheet_x:17,sheet_y:0,short_names:["broken_heart"],text:"</3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["</3"],search:"broken,heart,sad,sorry,break,heartbreak,</3"},police_car:{name:"Police Car",unified:"1F693",sheet_x:25,sheet_y:25,short_names:["police_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"police,car,vehicle,cars,transportation,law,legal,enforcement"},bear:{name:"Bear Face",unified:"1F43B",sheet_x:11,sheet_y:35,short_names:["bear"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bear,face,animal,nature,wild"},joy:{name:"Face with Tears of Joy",unified:"1F602",sheet_x:22,sheet_y:35,short_names:["joy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"joy,face,with,tears,of,cry,weep,happy,happytears,haha"},printer:{name:"Printer",unified:"1F5A8",sheet_x:22,sheet_y:9,short_names:["printer"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"printer,paper,ink"},ambulance:{name:"Ambulance",unified:"1F691",sheet_x:25,sheet_y:23,short_names:["ambulance"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ambulance,health,911,hospital"},panda_face:{name:"Panda Face",unified:"1F43C",sheet_x:11,sheet_y:36,short_names:["panda_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"panda,face,animal,nature"},heavy_heart_exclamation_mark_ornament:{name:"Heavy Heart Exclamation Mark Ornament",unified:"2763",variations:["2763-FE0F"],sheet_x:3,sheet_y:29,short_names:["heavy_heart_exclamation_mark_ornament"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"heavy,heart,exclamation,mark,ornament"},grapes:{name:"Grapes",unified:"1F347",sheet_x:6,sheet_y:4,short_names:["grapes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grapes,fruit,food,wine"},"8ball":{name:"Billiards",unified:"1F3B1",sheet_x:8,sheet_y:12,short_names:["8ball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"8ball,billiards,pool,hobby,game,luck,magic"},"flag-al":{name:"Regional Indicator Symbol Letters AL",unified:"1F1E6-1F1F1",sheet_x:31,sheet_y:17,short_names:["flag-al"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,al,regional,indicator,symbol,letters"},rolling_on_the_floor_laughing:{name:"Rolling on the Floor Laughing",unified:"1F923",sheet_x:28,sheet_y:29,short_names:["rolling_on_the_floor_laughing"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"rolling,on,the,floor,laughing"},three_button_mouse:{name:"Three Button Mouse",unified:"1F5B1",sheet_x:22,sheet_y:10,short_names:["three_button_mouse"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"three,button,mouse"},trackball:{name:"Trackball",unified:"1F5B2",sheet_x:22,sheet_y:11,short_names:["trackball"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"trackball,technology,trackpad"},fire_engine:{name:"Fire Engine",unified:"1F692",sheet_x:25,sheet_y:24,short_names:["fire_engine"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fire,engine,transportation,cars,vehicle"},table_tennis_paddle_and_ball:{name:"Table Tennis Paddle and Ball",unified:"1F3D3",sheet_x:9,sheet_y:32,short_names:["table_tennis_paddle_and_ball"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"table,tennis,paddle,and,ball"},two_hearts:{name:"Two Hearts",unified:"1F495",sheet_x:17,sheet_y:1,short_names:["two_hearts"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"two,hearts,love,like,affection,valentines,heart"},"flag-dz":{name:"Regional Indicator Symbol Letters DZ",unified:"1F1E9-1F1FF",sheet_x:32,sheet_y:26,short_names:["flag-dz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dz,regional,indicator,symbol,letters"},koala:{name:"Koala",unified:"1F428",sheet_x:11,sheet_y:16,short_names:["koala"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"koala,animal,nature"},relaxed:{name:"White Smiling Face",unified:"263A",variations:["263A-FE0F"],sheet_x:1,sheet_y:17,short_names:["relaxed"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"relaxed,white,smiling,face,blush,massage,happiness"},strawberry:{name:"Strawberry",unified:"1F353",sheet_x:6,sheet_y:16,short_names:["strawberry"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"strawberry,fruit,food,nature"},badminton_racquet_and_shuttlecock:{name:"Badminton Racquet and Shuttlecock",unified:"1F3F8",sheet_x:10,sheet_y:17,short_names:["badminton_racquet_and_shuttlecock"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"badminton,racquet,and,shuttlecock"},tiger:{name:"Tiger Face",unified:"1F42F",sheet_x:11,sheet_y:23,short_names:["tiger"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tiger,face,animal,cat,danger,wild,nature,roar"},"flag-as":{name:"Regional Indicator Symbol Letters AS",unified:"1F1E6-1F1F8",sheet_x:31,sheet_y:22,short_names:["flag-as"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,as,regional,indicator,symbol,letters"},revolving_hearts:{name:"Revolving Hearts",unified:"1F49E",sheet_x:17,sheet_y:10,short_names:["revolving_hearts"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"revolving,hearts,love,like,affection,valentines"},blush:{name:"Smiling Face with Smiling Eyes",unified:"1F60A",sheet_x:22,sheet_y:43,short_names:["blush"],text:":)",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blush,smiling,face,with,eyes,smile,happy,flushed,crush,embarrassed,shy,joy"},melon:{name:"Melon",unified:"1F348",sheet_x:6,sheet_y:5,short_names:["melon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"melon,fruit,nature,food"},joystick:{name:"Joystick",unified:"1F579",sheet_x:21,sheet_y:26,short_names:["joystick"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"joystick,game,play"},minibus:{name:"Minibus",unified:"1F690",sheet_x:25,sheet_y:22,short_names:["minibus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"minibus,vehicle,car,transportation"},goal_net:{name:"Goal Net",unified:"1F945",sheet_x:30,sheet_y:8,short_names:["goal_net"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"goal,net,sports"},innocent:{name:"Smiling Face with Halo",unified:"1F607",sheet_x:22,sheet_y:40,short_names:["innocent"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"innocent,smiling,face,with,halo,angel,heaven"},compression:{name:"Compression",unified:"1F5DC",sheet_x:22,sheet_y:19,short_names:["compression"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"compression"},heartbeat:{name:"Beating Heart",unified:"1F493",sheet_x:16,sheet_y:48,short_names:["heartbeat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heartbeat,beating,heart,love,like,affection,valentines,pink"},lion_face:{name:"Lion Face",unified:"1F981",sheet_x:30,sheet_y:30,short_names:["lion_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lion,face"},"flag-ad":{name:"Regional Indicator Symbol Letters AD",unified:"1F1E6-1F1E9",sheet_x:31,sheet_y:12,short_names:["flag-ad"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ad,regional,indicator,symbol,letters"},cherries:{name:"Cherries",unified:"1F352",sheet_x:6,sheet_y:15,short_names:["cherries"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cherries,food,fruit"},truck:{name:"Delivery Truck",unified:"1F69A",sheet_x:25,sheet_y:32,short_names:["truck"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"truck,delivery,cars,transportation"},ice_hockey_stick_and_puck:{name:"Ice Hockey Stick and Puck",unified:"1F3D2",sheet_x:9,sheet_y:31,short_names:["ice_hockey_stick_and_puck"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"ice,hockey,stick,and,puck"},minidisc:{name:"Minidisc",unified:"1F4BD",sheet_x:17,sheet_y:46,short_names:["minidisc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"minidisc,technology,record,data,disk,90s"},"flag-ao":{name:"Regional Indicator Symbol Letters AO",unified:"1F1E6-1F1F4",sheet_x:31,sheet_y:19,short_names:["flag-ao"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ao,regional,indicator,symbol,letters"},articulated_lorry:{name:"Articulated Lorry",unified:"1F69B",sheet_x:25,sheet_y:33,short_names:["articulated_lorry"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"articulated,lorry,vehicle,cars,transportation,express"},peach:{name:"Peach",unified:"1F351",sheet_x:6,sheet_y:14,short_names:["peach"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"peach,fruit,nature,food"},cow:{name:"Cow Face",unified:"1F42E",sheet_x:11,sheet_y:22,short_names:["cow"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cow,face,beef,ox,animal,nature,moo,milk"},heartpulse:{name:"Growing Heart",unified:"1F497",sheet_x:17,sheet_y:3,short_names:["heartpulse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heartpulse,growing,heart,like,love,affection,valentines,pink"},slightly_smiling_face:{name:"Slightly Smiling Face",unified:"1F642",sheet_x:24,sheet_y:1,short_names:["slightly_smiling_face"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":)","(:",":-)"],search:"slightly,smiling,face,smile,:),(:,:-)"},floppy_disk:{name:"Floppy Disk",unified:"1F4BE",sheet_x:17,sheet_y:47,short_names:["floppy_disk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"floppy,disk,oldschool,technology,save,90s,80s"},sparkling_heart:{name:"Sparkling Heart",unified:"1F496",sheet_x:17,sheet_y:2,short_names:["sparkling_heart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sparkling,heart,love,like,affection,valentines"},tractor:{name:"Tractor",unified:"1F69C",sheet_x:25,sheet_y:34,short_names:["tractor"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tractor,vehicle,car,farming,agriculture"},pineapple:{name:"Pineapple",unified:"1F34D",sheet_x:6,sheet_y:10,short_names:["pineapple"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pineapple,fruit,nature,food"},upside_down_face:{name:"Upside-Down Face",unified:"1F643",sheet_x:24,sheet_y:2,short_names:["upside_down_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"upside,down,face,flipped,silly,smile"},pig:{name:"Pig Face",unified:"1F437",sheet_x:11,sheet_y:31,short_names:["pig"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pig,face,animal,oink,nature"},field_hockey_stick_and_ball:{name:"Field Hockey Stick and Ball",unified:"1F3D1",sheet_x:9,sheet_y:30,short_names:["field_hockey_stick_and_ball"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"field,hockey,stick,and,ball"},"flag-ai":{name:"Regional Indicator Symbol Letters AI",unified:"1F1E6-1F1EE",sheet_x:31,sheet_y:16,short_names:["flag-ai"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ai,regional,indicator,symbol,letters"},wink:{name:"Winking Face",unified:"1F609",sheet_x:22,sheet_y:42,short_names:["wink"],text:";)",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[";)",";-)"],search:"wink,winking,face,happy,mischievous,secret,;),smile,eye,;-)"},pig_nose:{name:"Pig Nose",unified:"1F43D",sheet_x:11,sheet_y:37,short_names:["pig_nose"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pig,nose,animal,oink"},kiwifruit:{name:"Kiwifruit",unified:"1F95D",sheet_x:30,sheet_y:27,short_names:["kiwifruit"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"kiwifruit"},cd:{name:"Optical Disc",unified:"1F4BF",sheet_x:17,sheet_y:48,short_names:["cd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cd,optical,disc,technology,dvd,disk,90s"},cricket_bat_and_ball:{name:"Cricket Bat and Ball",unified:"1F3CF",sheet_x:9,sheet_y:28,short_names:["cricket_bat_and_ball"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"cricket,bat,and,ball"},cupid:{name:"Heart with Arrow",unified:"1F498",sheet_x:17,sheet_y:4,short_names:["cupid"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cupid,heart,with,arrow,love,like,affection,valentines"},scooter:{name:"Scooter",unified:"1F6F4",sheet_x:27,sheet_y:27,short_names:["scooter"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"scooter"},"flag-aq":{name:"Regional Indicator Symbol Letters AQ",unified:"1F1E6-1F1F6",sheet_x:31,sheet_y:20,short_names:["flag-aq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,aq,regional,indicator,symbol,letters"},relieved:{name:"Relieved Face",unified:"1F60C",sheet_x:22,sheet_y:45,short_names:["relieved"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"relieved,face,relaxed,phew,massage,happiness"},frog:{name:"Frog Face",unified:"1F438",sheet_x:11,sheet_y:32,short_names:["frog"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"frog,face,animal,nature,croak,toad"},bike:{name:"Bicycle",unified:"1F6B2",sheet_x:26,sheet_y:12,short_names:["bike"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bike,bicycle,sports,exercise,hipster"},"flag-ag":{name:"Regional Indicator Symbol Letters AG",unified:"1F1E6-1F1EC",sheet_x:31,sheet_y:15,short_names:["flag-ag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ag,regional,indicator,symbol,letters"},golf:{name:"Flag in Hole",unified:"26F3",variations:["26F3-FE0F"],sheet_x:2,sheet_y:20,short_names:["golf"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"golf,flag,in,hole,sports,business,summer"},dvd:{name:"Dvd",unified:"1F4C0",sheet_x:18,sheet_y:0,short_names:["dvd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dvd,cd,disk,disc"},gift_heart:{name:"Heart with Ribbon",unified:"1F49D",sheet_x:17,sheet_y:9,short_names:["gift_heart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gift,heart,with,ribbon,love,valentines"},avocado:{name:"Avocado",unified:"1F951",sheet_x:30,sheet_y:15,short_names:["avocado"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"avocado,fruit,food"},tomato:{name:"Tomato",unified:"1F345",sheet_x:6,sheet_y:2,short_names:["tomato"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tomato,fruit,vegetable,nature,food"},vhs:{name:"Videocassette",unified:"1F4FC",sheet_x:19,sheet_y:11,short_names:["vhs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"vhs,videocassette,record,video,oldschool,90s,80s"},"flag-ar":{name:"Regional Indicator Symbol Letters AR",unified:"1F1E6-1F1F7",sheet_x:31,sheet_y:21,short_names:["flag-ar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ar,regional,indicator,symbol,letters"},heart_decoration:{name:"Heart Decoration",unified:"1F49F",sheet_x:17,sheet_y:11,short_names:["heart_decoration"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heart,decoration,purple-square,love,like"},motor_scooter:{name:"Motor Scooter",unified:"1F6F5",sheet_x:27,sheet_y:28,short_names:["motor_scooter"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"motor,scooter,vehicle,vespa,sasha"},bow_and_arrow:{name:"Bow and Arrow",unified:"1F3F9",sheet_x:10,sheet_y:18,short_names:["bow_and_arrow"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"bow,and,arrow,sports"},monkey_face:{name:"Monkey Face",unified:"1F435",sheet_x:11,sheet_y:29,short_names:["monkey_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":o)"],search:"monkey,face,animal,nature,circus,:o)"},heart_eyes:{name:"Smiling Face with Heart-Shaped Eyes",unified:"1F60D",sheet_x:22,sheet_y:46,short_names:["heart_eyes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heart,eyes,smiling,face,with,shaped,love,like,affection,valentines,infatuation,crush"},"flag-am":{name:"Regional Indicator Symbol Letters AM",unified:"1F1E6-1F1F2",sheet_x:31,sheet_y:18,short_names:["flag-am"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,am,regional,indicator,symbol,letters"},peace_symbol:{name:"Peace Symbol",unified:"262E",variations:["262E-FE0F"],sheet_x:1,sheet_y:13,short_names:["peace_symbol"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"peace,symbol,hippie"},camera:{name:"Camera",unified:"1F4F7",sheet_x:19,sheet_y:6,short_names:["camera"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"camera,gadgets,photography"},kissing_heart:{name:"Face Throwing a Kiss",unified:"1F618",sheet_x:23,sheet_y:8,short_names:["kissing_heart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":*",":-*"],search:"kissing,heart,face,throwing,a,kiss,love,like,affection,valentines,infatuation,:*,:-*"},racing_motorcycle:{name:"Racing Motorcycle",unified:"1F3CD",sheet_x:9,sheet_y:26,short_names:["racing_motorcycle"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"racing,motorcycle"},eggplant:{name:"Aubergine",unified:"1F346",sheet_x:6,sheet_y:3,short_names:["eggplant"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"eggplant,aubergine,vegetable,nature,food"},see_no_evil:{name:"See-No-Evil Monkey",unified:"1F648",sheet_x:24,sheet_y:22,short_names:["see_no_evil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"see,no,evil,monkey,animal,nature,haha"},fishing_pole_and_fish:{name:"Fishing Pole and Fish",unified:"1F3A3",sheet_x:7,sheet_y:47,short_names:["fishing_pole_and_fish"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fishing,pole,and,fish,food,hobby,summer"},boxing_glove:{name:"Boxing Glove",unified:"1F94A",sheet_x:30,sheet_y:12,short_names:["boxing_glove"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"boxing,glove,sports,fighting"},rotating_light:{name:"Police Cars Revolving Light",unified:"1F6A8",sheet_x:26,sheet_y:2,short_names:["rotating_light"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rotating,light,police,cars,revolving,ambulance,911,emergency,alert,error,pinged,law,legal"},hear_no_evil:{name:"Hear-No-Evil Monkey",unified:"1F649",sheet_x:24,sheet_y:23,short_names:["hear_no_evil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hear,no,evil,monkey,animal,nature"},kissing:{name:"Kissing Face",unified:"1F617",sheet_x:23,sheet_y:7,short_names:["kissing"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kissing,face,love,like,3,valentines,infatuation,kiss"},"flag-aw":{name:"Regional Indicator Symbol Letters AW",unified:"1F1E6-1F1FC",sheet_x:31,sheet_y:25,short_names:["flag-aw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,aw,regional,indicator,symbol,letters"},camera_with_flash:{name:"Camera with Flash",unified:"1F4F8",sheet_x:19,sheet_y:7,short_names:["camera_with_flash"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"camera,with,flash"},latin_cross:{name:"Latin Cross",unified:"271D",variations:["271D-FE0F"],sheet_x:3,sheet_y:16,short_names:["latin_cross"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"latin,cross,christianity"},cucumber:{name:"Cucumber",unified:"1F952",sheet_x:30,sheet_y:16,short_names:["cucumber"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"cucumber,fruit,food,pickle"},"flag-au":{name:"Regional Indicator Symbol Letters AU",unified:"1F1E6-1F1FA",sheet_x:31,sheet_y:24,short_names:["flag-au"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,au,regional,indicator,symbol,letters"},star_and_crescent:{name:"Star and Crescent",unified:"262A",variations:["262A-FE0F"],sheet_x:1,sheet_y:12,short_names:["star_and_crescent"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"star,and,crescent,islam"},video_camera:{name:"Video Camera",unified:"1F4F9",sheet_x:19,sheet_y:8,short_names:["video_camera"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"video,camera,film,record"},carrot:{name:"Carrot",unified:"1F955",sheet_x:30,sheet_y:19,short_names:["carrot"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"carrot,vegetable,food,orange"},kissing_smiling_eyes:{name:"Kissing Face with Smiling Eyes",unified:"1F619",sheet_x:23,sheet_y:9,short_names:["kissing_smiling_eyes"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kissing,smiling,eyes,face,with,affection,valentines,infatuation,kiss"},speak_no_evil:{name:"Speak-No-Evil Monkey",unified:"1F64A",sheet_x:24,sheet_y:24,short_names:["speak_no_evil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"speak,no,evil,monkey,animal,nature,omg"},martial_arts_uniform:{name:"Martial Arts Uniform",unified:"1F94B",sheet_x:30,sheet_y:13,short_names:["martial_arts_uniform"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"martial,arts,uniform,judo,karate,taekwondo"},oncoming_police_car:{name:"Oncoming Police Car",unified:"1F694",sheet_x:25,sheet_y:26,short_names:["oncoming_police_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oncoming,police,car,vehicle,law,legal,enforcement,911"},oncoming_bus:{name:"Oncoming Bus",unified:"1F68D",sheet_x:25,sheet_y:19,short_names:["oncoming_bus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oncoming,bus,vehicle,transportation"},movie_camera:{name:"Movie Camera",unified:"1F3A5",sheet_x:8,sheet_y:0,short_names:["movie_camera"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"movie,camera,film,record"},corn:{name:"Ear of Maize",unified:"1F33D",sheet_x:5,sheet_y:43,short_names:["corn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"corn,ear,of,maize,food,vegetable,plant"},om_symbol:{name:"Om Symbol",unified:"1F549",sheet_x:20,sheet_y:27,short_names:["om_symbol"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"om,symbol"},monkey:{name:"Monkey",unified:"1F412",sheet_x:10,sheet_y:43,short_names:["monkey"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"monkey,animal,nature,banana,circus"},ice_skate:{name:"Ice Skate",unified:"26F8",sheet_x:2,sheet_y:24,short_names:["ice_skate"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"ice,skate,sports"},kissing_closed_eyes:{name:"Kissing Face with Closed Eyes",unified:"1F61A",sheet_x:23,sheet_y:10,short_names:["kissing_closed_eyes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kissing,closed,eyes,face,with,love,like,affection,valentines,infatuation,kiss"},"flag-at":{name:"Regional Indicator Symbol Letters AT",unified:"1F1E6-1F1F9",sheet_x:31,sheet_y:23,short_names:["flag-at"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,at,regional,indicator,symbol,letters"},film_projector:{name:"Film Projector",unified:"1F4FD",sheet_x:19,sheet_y:12,short_names:["film_projector"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"film,projector,video,tape,record,movie"},hot_pepper:{name:"Hot Pepper",unified:"1F336",sheet_x:5,sheet_y:36,short_names:["hot_pepper"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"hot,pepper,food,spicy,chilli,chili"},oncoming_automobile:{name:"Oncoming Automobile",unified:"1F698",sheet_x:25,sheet_y:30,short_names:["oncoming_automobile"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oncoming,automobile,car,vehicle,transportation"},yum:{name:"Face Savouring Delicious Food",unified:"1F60B",sheet_x:22,sheet_y:44,short_names:["yum"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"yum,face,savouring,delicious,food,happy,joy,tongue,smile,silly,yummy,nom"},chicken:{name:"Chicken",unified:"1F414",sheet_x:10,sheet_y:45,short_names:["chicken"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chicken,animal,cluck,nature,bird"},"flag-az":{name:"Regional Indicator Symbol Letters AZ",unified:"1F1E6-1F1FF",sheet_x:31,sheet_y:27,short_names:["flag-az"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,az,regional,indicator,symbol,letters"},wheel_of_dharma:{name:"Wheel of Dharma",unified:"2638",variations:["2638-FE0F"],sheet_x:1,sheet_y:15,short_names:["wheel_of_dharma"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"wheel,of,dharma,hinduism,buddhism,sikhism,jainism"},ski:{name:"Ski and Ski Boot",unified:"1F3BF",sheet_x:8,sheet_y:26,short_names:["ski"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ski,and,boot,sports,winter,cold,snow"},"flag-bs":{name:"Regional Indicator Symbol Letters BS",unified:"1F1E7-1F1F8",sheet_x:31,sheet_y:43,short_names:["flag-bs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bs,regional,indicator,symbol,letters"},stuck_out_tongue_winking_eye:{name:"Face with Stuck-out Tongue and Winking Eye",unified:"1F61C",sheet_x:23,sheet_y:12,short_names:["stuck_out_tongue_winking_eye"],text:";p",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[";p",";-p",";b",";-b",";P",";-P"],search:"stuck,out,tongue,winking,eye,face,with,and,prank,childish,playful,mischievous,smile,wink,;p,;-p,;b,;-b"},star_of_david:{name:"Star of David",unified:"2721",variations:["2721-FE0F"],sheet_x:3,sheet_y:17,short_names:["star_of_david"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"star,of,david,judaism"},potato:{name:"Potato",unified:"1F954",sheet_x:30,sheet_y:18,short_names:["potato"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"potato,food,tuber,vegatable,starch"},skier:{name:"Skier",unified:"26F7",sheet_x:2,sheet_y:23,short_names:["skier"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skier,sports,winter,snow"},oncoming_taxi:{name:"Oncoming Taxi",unified:"1F696",sheet_x:25,sheet_y:28,short_names:["oncoming_taxi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oncoming,taxi,vehicle,cars,uber"},film_frames:{name:"Film Frames",unified:"1F39E",sheet_x:7,sheet_y:42,short_names:["film_frames"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"film,frames"},penguin:{name:"Penguin",unified:"1F427",sheet_x:11,sheet_y:15,short_names:["penguin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"penguin,animal,nature"},telephone_receiver:{name:"Telephone Receiver",unified:"1F4DE",sheet_x:18,sheet_y:30,short_names:["telephone_receiver"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"telephone,receiver,technology,communication,dial"},"flag-bh":{name:"Regional Indicator Symbol Letters BH",unified:"1F1E7-1F1ED",sheet_x:31,sheet_y:34,short_names:["flag-bh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bh,regional,indicator,symbol,letters"},snowboarder:{name:"Snowboarder",unified:"1F3C2",sheet_x:8,sheet_y:29,short_names:["snowboarder"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C2-1F3FB",image:"1f3c2-1f3fb.png",sheet_x:8,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C2-1F3FC",image:"1f3c2-1f3fc.png",sheet_x:8,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C2-1F3FD",image:"1f3c2-1f3fd.png",sheet_x:8,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C2-1F3FE",image:"1f3c2-1f3fe.png",sheet_x:8,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C2-1F3FF",image:"1f3c2-1f3ff.png",sheet_x:8,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true}},search:"snowboarder,sports,winter"},sweet_potato:{name:"Roasted Sweet Potato",unified:"1F360",sheet_x:6,sheet_y:29,short_names:["sweet_potato"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sweet,potato,roasted,food,nature"},stuck_out_tongue_closed_eyes:{name:"Face with Stuck-out Tongue and Tightly-Closed Eyes",unified:"1F61D",sheet_x:23,sheet_y:13,short_names:["stuck_out_tongue_closed_eyes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"stuck,out,tongue,closed,eyes,face,with,and,tightly,prank,playful,mischievous,smile"},bird:{name:"Bird",unified:"1F426",sheet_x:11,sheet_y:14,short_names:["bird"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bird,animal,nature,fly,tweet,spring"},aerial_tramway:{name:"Aerial Tramway",unified:"1F6A1",sheet_x:25,sheet_y:39,short_names:["aerial_tramway"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"aerial,tramway,transportation,vehicle,ski"},six_pointed_star:{name:"Six Pointed Star with Middle Dot",unified:"1F52F",sheet_x:20,sheet_y:12,short_names:["six_pointed_star"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"six,pointed,star,with,middle,dot,purple-square,religion,jewish,hexagram"},menorah_with_nine_branches:{name:"Menorah with Nine Branches",unified:"1F54E",sheet_x:20,sheet_y:32,short_names:["menorah_with_nine_branches"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"menorah,with,nine,branches"},phone:{name:"Black Telephone",unified:"260E",variations:["260E-FE0F"],sheet_x:0,sheet_y:46,short_names:["phone","telephone"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"phone,telephone,black,technology,communication,dial"},baby_chick:{name:"Baby Chick",unified:"1F424",sheet_x:11,sheet_y:12,short_names:["baby_chick"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baby,chick,animal,chicken,bird"},chestnut:{name:"Chestnut",unified:"1F330",sheet_x:5,sheet_y:30,short_names:["chestnut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chestnut,food,squirrel"},stuck_out_tongue:{name:"Face with Stuck-out Tongue",unified:"1F61B",sheet_x:23,sheet_y:11,short_names:["stuck_out_tongue"],text:":p",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":p",":-p",":P",":-P",":b",":-b"],search:"stuck,out,tongue,face,with,prank,childish,playful,mischievous,smile,:p,:-p,:b,:-b"},"woman-lifting-weights":{name:"Woman Lifting Weights",unified:"1F3CB-FE0F-200D-2640-FE0F",sheet_x:40,sheet_y:24,short_names:["woman-lifting-weights"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB-200D-2640-FE0F",image:"1f3cb-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC-200D-2640-FE0F",image:"1f3cb-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD-200D-2640-FE0F",image:"1f3cb-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE-200D-2640-FE0F",image:"1f3cb-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF-200D-2640-FE0F",image:"1f3cb-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,lifting,weights"},"flag-bd":{name:"Regional Indicator Symbol Letters BD",unified:"1F1E7-1F1E9",sheet_x:31,sheet_y:30,short_names:["flag-bd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bd,regional,indicator,symbol,letters"},mountain_cableway:{name:"Mountain Cableway",unified:"1F6A0",sheet_x:25,sheet_y:38,short_names:["mountain_cableway"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mountain,cableway,transportation,vehicle,ski"},yin_yang:{name:"Yin Yang",unified:"262F",variations:["262F-FE0F"],sheet_x:1,sheet_y:14,short_names:["yin_yang"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"yin,yang,balance"},money_mouth_face:{name:"Money-Mouth Face",unified:"1F911",sheet_x:27,sheet_y:31,short_names:["money_mouth_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"money,mouth,face,rich,dollar"},suspension_railway:{name:"Suspension Railway",unified:"1F69F",sheet_x:25,sheet_y:37,short_names:["suspension_railway"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"suspension,railway,vehicle,transportation"},"flag-bb":{name:"Regional Indicator Symbol Letters BB",unified:"1F1E7-1F1E7",sheet_x:31,sheet_y:29,short_names:["flag-bb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bb,regional,indicator,symbol,letters"},peanuts:{name:"Peanuts",unified:"1F95C",sheet_x:30,sheet_y:26,short_names:["peanuts"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"peanuts,food,nut"},pager:{name:"Pager",unified:"1F4DF",sheet_x:18,sheet_y:31,short_names:["pager"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pager,bbcall,oldschool,90s"},hatching_chick:{name:"Hatching Chick",unified:"1F423",sheet_x:11,sheet_y:11,short_names:["hatching_chick"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hatching,chick,animal,chicken,egg,born,baby,bird"},weight_lifter:{name:"Weight Lifter",unified:"1F3CB",variations:["1F3CB-FE0F"],sheet_x:9,sheet_y:14,short_names:["weight_lifter"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB",image:"1f3cb-1f3fb.png",sheet_x:9,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC",image:"1f3cb-1f3fc.png",sheet_x:9,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD",image:"1f3cb-1f3fd.png",sheet_x:9,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE",image:"1f3cb-1f3fe.png",sheet_x:9,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF",image:"1f3cb-1f3ff.png",sheet_x:9,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"1F3CB-FE0F-200D-2642-FE0F",search:"weight,lifter"},fax:{name:"Fax Machine",unified:"1F4E0",sheet_x:18,sheet_y:32,short_names:["fax"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fax,machine,communication,technology"},hugging_face:{name:"Hugging Face",unified:"1F917",sheet_x:27,sheet_y:37,short_names:["hugging_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"hugging,face"},railway_car:{name:"Railway Car",unified:"1F683",sheet_x:25,sheet_y:9,short_names:["railway_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"railway,car,transportation,vehicle"},fencer:{name:"Fencer",unified:"1F93A",sheet_x:29,sheet_y:38,short_names:["fencer"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"fencer"},hatched_chick:{name:"Front-Facing Baby Chick",unified:"1F425",sheet_x:11,sheet_y:13,short_names:["hatched_chick"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hatched,chick,front,facing,baby,animal,chicken,bird"},"flag-by":{name:"Regional Indicator Symbol Letters BY",unified:"1F1E7-1F1FE",sheet_x:31,sheet_y:47,short_names:["flag-by"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,by,regional,indicator,symbol,letters"},honey_pot:{name:"Honey Pot",unified:"1F36F",sheet_x:6,sheet_y:44,short_names:["honey_pot"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"honey,pot,bees,sweet,kitchen"},orthodox_cross:{name:"Orthodox Cross",unified:"2626",variations:["2626-FE0F"],sheet_x:1,sheet_y:11,short_names:["orthodox_cross"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"orthodox,cross,suppedaneum,religion"},duck:{name:"Duck",unified:"1F986",sheet_x:30,sheet_y:35,short_names:["duck"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"duck,animal,nature,bird,mallard"},train:{name:"Tram Car",unified:"1F68B",sheet_x:25,sheet_y:17,short_names:["train"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"train,tram,car,transportation,vehicle,carriage,public,travel"},nerd_face:{name:"Nerd Face",unified:"1F913",sheet_x:27,sheet_y:33,short_names:["nerd_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"nerd,face,nerdy,geek,dork"},croissant:{name:"Croissant",unified:"1F950",sheet_x:30,sheet_y:14,short_names:["croissant"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"croissant,food,bread,french"},place_of_worship:{name:"Place of Worship",unified:"1F6D0",sheet_x:27,sheet_y:13,short_names:["place_of_worship"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"place,of,worship,religion,church,temple,prayer"},wrestlers:{name:"Wrestlers",unified:"1F93C",sheet_x:29,sheet_y:39,short_names:["wrestlers"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"wrestlers"},"flag-be":{name:"Regional Indicator Symbol Letters BE",unified:"1F1E7-1F1EA",sheet_x:31,sheet_y:31,short_names:["flag-be"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,be,regional,indicator,symbol,letters"},tv:{name:"Television",unified:"1F4FA",sheet_x:19,sheet_y:9,short_names:["tv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tv,television,technology,program,oldschool,show"},sunglasses:{name:"Smiling Face with Sunglasses",unified:"1F60E",sheet_x:22,sheet_y:47,short_names:["sunglasses"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["8)"],search:"sunglasses,smiling,face,with,cool,smile,summer,beach,sunglass,8)"},ophiuchus:{name:"Ophiuchus",unified:"26CE",sheet_x:2,sheet_y:10,short_names:["ophiuchus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ophiuchus,sign,purple-square,constellation,astrology"},bread:{name:"Bread",unified:"1F35E",sheet_x:6,sheet_y:27,short_names:["bread"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bread,food,wheat,breakfast,toast"},"flag-bz":{name:"Regional Indicator Symbol Letters BZ",unified:"1F1E7-1F1FF",sheet_x:31,sheet_y:48,short_names:["flag-bz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bz,regional,indicator,symbol,letters"},"woman-wrestling":{name:"Woman Wrestling",unified:"1F93C-200D-2640-FE0F",sheet_x:47,sheet_y:48,short_names:["woman-wrestling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"woman,wrestling"},eagle:{name:"Eagle",unified:"1F985",sheet_x:30,sheet_y:34,short_names:["eagle"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"eagle,animal,nature,bird"},mountain_railway:{name:"Mountain Railway",unified:"1F69E",sheet_x:25,sheet_y:36,short_names:["mountain_railway"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mountain,railway,transportation,vehicle"},radio:{name:"Radio",unified:"1F4FB",sheet_x:19,sheet_y:10,short_names:["radio"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"radio,communication,music,podcast,program"},monorail:{name:"Monorail",unified:"1F69D",sheet_x:25,sheet_y:35,short_names:["monorail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"monorail,transportation,vehicle"},"flag-bj":{name:"Regional Indicator Symbol Letters BJ",unified:"1F1E7-1F1EF",sheet_x:31,sheet_y:36,short_names:["flag-bj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bj,regional,indicator,symbol,letters"},owl:{name:"Owl",unified:"1F989",sheet_x:30,sheet_y:38,short_names:["owl"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"owl,animal,nature,bird,hoot"},clown_face:{name:"Clown Face",unified:"1F921",sheet_x:28,sheet_y:27,short_names:["clown_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"clown,face"},aries:{name:"Aries",unified:"2648",variations:["2648-FE0F"],sheet_x:1,sheet_y:20,short_names:["aries"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"aries,sign,purple-square,zodiac,astrology"},"man-wrestling":{name:"Man Wrestling",unified:"1F93C-200D-2642-FE0F",sheet_x:48,sheet_y:0,short_names:["man-wrestling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"man,wrestling"},studio_microphone:{name:"Studio Microphone",unified:"1F399",sheet_x:7,sheet_y:39,short_names:["studio_microphone"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"studio,microphone,singer,recording,artist"},baguette_bread:{name:"Baguette Bread",unified:"1F956",sheet_x:30,sheet_y:20,short_names:["baguette_bread"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"baguette,bread,food,french"},"flag-bm":{name:"Regional Indicator Symbol Letters BM",unified:"1F1E7-1F1F2",sheet_x:31,sheet_y:38,short_names:["flag-bm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bm,regional,indicator,symbol,letters"},person_doing_cartwheel:{name:"Person Doing Cartwheel",unified:"1F938",sheet_x:29,sheet_y:26,short_names:["person_doing_cartwheel"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB",image:"1f938-1f3fb.png",sheet_x:29,sheet_y:27,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC",image:"1f938-1f3fc.png",sheet_x:29,sheet_y:28,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD",image:"1f938-1f3fd.png",sheet_x:29,sheet_y:29,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE",image:"1f938-1f3fe.png",sheet_x:29,sheet_y:30,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF",image:"1f938-1f3ff.png",sheet_x:29,sheet_y:31,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"person,doing,cartwheel"},taurus:{name:"Taurus",unified:"2649",variations:["2649-FE0F"],sheet_x:1,sheet_y:21,short_names:["taurus"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"taurus,purple-square,sign,zodiac,astrology"},level_slider:{name:"Level Slider",unified:"1F39A",sheet_x:7,sheet_y:40,short_names:["level_slider"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"level,slider,scale"},bat:{name:"Bat",unified:"1F987",sheet_x:30,sheet_y:36,short_names:["bat"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"bat,animal,nature,blind,vampire"},face_with_cowboy_hat:{name:"Face with Cowboy Hat",unified:"1F920",sheet_x:28,sheet_y:26,short_names:["face_with_cowboy_hat"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"face,with,cowboy,hat"},cheese_wedge:{name:"Cheese Wedge",unified:"1F9C0",sheet_x:30,sheet_y:47,short_names:["cheese_wedge"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"cheese,wedge"},bullettrain_side:{name:"High-Speed Train",unified:"1F684",sheet_x:25,sheet_y:10,short_names:["bullettrain_side"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bullettrain,side,high,speed,train,transportation,vehicle"},smirk:{name:"Smirking Face",unified:"1F60F",sheet_x:22,sheet_y:48,short_names:["smirk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smirk,smirking,face,smile,mean,prank,smug,sarcasm"},"flag-bt":{name:"Regional Indicator Symbol Letters BT",unified:"1F1E7-1F1F9",sheet_x:31,sheet_y:44,short_names:["flag-bt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bt,regional,indicator,symbol,letters"},gemini:{name:"Gemini",unified:"264A",variations:["264A-FE0F"],sheet_x:1,sheet_y:22,short_names:["gemini"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gemini,sign,zodiac,purple-square,astrology"},bullettrain_front:{name:"High-Speed Train with Bullet Nose",unified:"1F685",sheet_x:25,sheet_y:11,short_names:["bullettrain_front"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bullettrain,front,high,speed,train,with,bullet,nose,transportation,vehicle,fast,public,travel"},egg:{name:"Egg",unified:"1F95A",sheet_x:30,sheet_y:24,short_names:["egg"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"egg,food,chicken,breakfast"},wolf:{name:"Wolf Face",unified:"1F43A",sheet_x:11,sheet_y:34,short_names:["wolf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wolf,face,animal,nature,wild"},control_knobs:{name:"Control Knobs",unified:"1F39B",sheet_x:7,sheet_y:41,short_names:["control_knobs"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"control,knobs,dial"},"woman-cartwheeling":{name:"Woman Cartwheeling",unified:"1F938-200D-2640-FE0F",sheet_x:47,sheet_y:24,short_names:["woman-cartwheeling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB-200D-2640-FE0F",image:"1f938-1f3fb-200d-2640-fe0f.png",sheet_x:47,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC-200D-2640-FE0F",image:"1f938-1f3fc-200d-2640-fe0f.png",sheet_x:47,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD-200D-2640-FE0F",image:"1f938-1f3fd-200d-2640-fe0f.png",sheet_x:47,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE-200D-2640-FE0F",image:"1f938-1f3fe-200d-2640-fe0f.png",sheet_x:47,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF-200D-2640-FE0F",image:"1f938-1f3ff-200d-2640-fe0f.png",sheet_x:47,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,cartwheeling"},stopwatch:{name:"Stopwatch",unified:"23F1",sheet_x:0,sheet_y:26,short_names:["stopwatch"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"stopwatch,time,deadline"},unamused:{name:"Unamused Face",unified:"1F612",sheet_x:23,sheet_y:2,short_names:["unamused"],text:":(",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"unamused,face,indifference,bored,straight face,serious,sarcasm"},light_rail:{name:"Light Rail",unified:"1F688",sheet_x:25,sheet_y:14,short_names:["light_rail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"light,rail,transportation,vehicle"},boar:{name:"Boar",unified:"1F417",sheet_x:10,sheet_y:48,short_names:["boar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"boar,animal,nature"},"flag-bo":{name:"Regional Indicator Symbol Letters BO",unified:"1F1E7-1F1F4",sheet_x:31,sheet_y:40,short_names:["flag-bo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bo,regional,indicator,symbol,letters"},"man-cartwheeling":{name:"Man Cartwheeling",unified:"1F938-200D-2642-FE0F",sheet_x:47,sheet_y:30,short_names:["man-cartwheeling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB-200D-2642-FE0F",image:"1f938-1f3fb-200d-2642-fe0f.png",sheet_x:47,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC-200D-2642-FE0F",image:"1f938-1f3fc-200d-2642-fe0f.png",sheet_x:47,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD-200D-2642-FE0F",image:"1f938-1f3fd-200d-2642-fe0f.png",sheet_x:47,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE-200D-2642-FE0F",image:"1f938-1f3fe-200d-2642-fe0f.png",sheet_x:47,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF-200D-2642-FE0F",image:"1f938-1f3ff-200d-2642-fe0f.png",sheet_x:47,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,cartwheeling"},fried_egg:{name:"Cooking",unified:"1F373",sheet_x:6,sheet_y:48,short_names:["fried_egg","cooking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fried,egg,cooking,food,breakfast,kitchen"},cancer:{name:"Cancer",unified:"264B",variations:["264B-FE0F"],sheet_x:1,sheet_y:23,short_names:["cancer"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cancer,sign,zodiac,purple-square,astrology"},leo:{name:"Leo",unified:"264C",variations:["264C-FE0F"],sheet_x:1,sheet_y:24,short_names:["leo"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"leo,sign,purple-square,zodiac,astrology"},disappointed:{name:"Disappointed Face",unified:"1F61E",sheet_x:23,sheet_y:14,short_names:["disappointed"],text:":(",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["):",":(",":-("],search:"disappointed,face,sad,upset,depressed,:(,):,:-("},timer_clock:{name:"Timer Clock",unified:"23F2",sheet_x:0,sheet_y:27,short_names:["timer_clock"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"timer,clock,alarm"},steam_locomotive:{name:"Steam Locomotive",unified:"1F682",sheet_x:25,sheet_y:8,short_names:["steam_locomotive"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"steam,locomotive,transportation,vehicle,train"},horse:{name:"Horse Face",unified:"1F434",sheet_x:11,sheet_y:28,short_names:["horse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"horse,face,animal,brown,nature"},"flag-bq":{name:"Regional Indicator Symbol Letters BQ",unified:"1F1E7-1F1F6",sheet_x:31,sheet_y:41,short_names:["flag-bq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bq,regional,indicator,symbol,letters"},bacon:{name:"Bacon",unified:"1F953",sheet_x:30,sheet_y:17,short_names:["bacon"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"bacon,food,breakfast,pork,pig,meat"},"woman-bouncing-ball":{name:"Woman Bouncing Ball",unified:"26F9-FE0F-200D-2640-FE0F",sheet_x:48,sheet_y:25,short_names:["woman-bouncing-ball"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB-200D-2640-FE0F",image:"26f9-1f3fb-200d-2640-fe0f.png",sheet_x:48,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC-200D-2640-FE0F",image:"26f9-1f3fc-200d-2640-fe0f.png",sheet_x:48,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD-200D-2640-FE0F",image:"26f9-1f3fd-200d-2640-fe0f.png",sheet_x:48,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE-200D-2640-FE0F",image:"26f9-1f3fe-200d-2640-fe0f.png",sheet_x:48,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF-200D-2640-FE0F",image:"26f9-1f3ff-200d-2640-fe0f.png",sheet_x:48,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,bouncing,ball"},pensive:{name:"Pensive Face",unified:"1F614",sheet_x:23,sheet_y:4,short_names:["pensive"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pensive,face,sad,depressed,okay,upset"},"train2":{name:"Train",unified:"1F686",sheet_x:25,sheet_y:12,short_names:["train2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"train2,train,transportation,vehicle"},virgo:{name:"Virgo",unified:"264D",variations:["264D-FE0F"],sheet_x:1,sheet_y:25,short_names:["virgo"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"virgo,sign,zodiac,purple-square,astrology"},person_with_ball:{name:"Person with Ball",unified:"26F9",variations:["26F9-FE0F"],sheet_x:2,sheet_y:25,short_names:["person_with_ball"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB",image:"26f9-1f3fb.png",sheet_x:2,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC",image:"26f9-1f3fc.png",sheet_x:2,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD",image:"26f9-1f3fd.png",sheet_x:2,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE",image:"26f9-1f3fe.png",sheet_x:2,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF",image:"26f9-1f3ff.png",sheet_x:2,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"26F9-FE0F-200D-2642-FE0F",search:"person,with,ball"},"flag-ba":{name:"Regional Indicator Symbol Letters BA",unified:"1F1E7-1F1E6",sheet_x:31,sheet_y:28,short_names:["flag-ba"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"flag,ba,regional,indicator,symbol,letters"},pancakes:{name:"Pancakes",unified:"1F95E",sheet_x:30,sheet_y:28,short_names:["pancakes"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"pancakes,food,breakfast,flapjacks,hotcakes"},unicorn_face:{name:"Unicorn Face",unified:"1F984",sheet_x:30,sheet_y:33,short_names:["unicorn_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"unicorn,face"},alarm_clock:{name:"Alarm Clock",unified:"23F0",sheet_x:0,sheet_y:25,short_names:["alarm_clock"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"alarm,clock,time,wake"},handball:{name:"Handball",unified:"1F93E",sheet_x:29,sheet_y:46,short_names:["handball"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB",image:"1f93e-1f3fb.png",sheet_x:29,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC",image:"1f93e-1f3fc.png",sheet_x:29,sheet_y:48,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD",image:"1f93e-1f3fd.png",sheet_x:30,sheet_y:0,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE",image:"1f93e-1f3fe.png",sheet_x:30,sheet_y:1,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF",image:"1f93e-1f3ff.png",sheet_x:30,sheet_y:2,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"handball"},fried_shrimp:{name:"Fried Shrimp",unified:"1F364",sheet_x:6,sheet_y:33,short_names:["fried_shrimp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fried,shrimp,food,animal,appetizer,summer"},"flag-bw":{name:"Regional Indicator Symbol Letters BW",unified:"1F1E7-1F1FC",sheet_x:31,sheet_y:46,short_names:["flag-bw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bw,regional,indicator,symbol,letters"},worried:{name:"Worried Face",unified:"1F61F",sheet_x:23,sheet_y:15,short_names:["worried"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"worried,face,concern,nervous,:("},mantelpiece_clock:{name:"Mantelpiece Clock",unified:"1F570",sheet_x:21,sheet_y:9,short_names:["mantelpiece_clock"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"mantelpiece,clock,time"},libra:{name:"Libra",unified:"264E",variations:["264E-FE0F"],sheet_x:1,sheet_y:26,short_names:["libra"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"libra,sign,purple-square,zodiac,astrology"},metro:{name:"Metro",unified:"1F687",sheet_x:25,sheet_y:13,short_names:["metro"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"metro,transportation,blue-square,mrt,underground,tube"},bee:{name:"Honeybee",unified:"1F41D",sheet_x:11,sheet_y:5,short_names:["bee","honeybee"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bee,honeybee"},hourglass:{name:"Hourglass",unified:"231B",variations:["231B-FE0F"],sheet_x:0,sheet_y:15,short_names:["hourglass"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hourglass,time,clock,oldschool,limit,exam,quiz,test"},"flag-br":{name:"Regional Indicator Symbol Letters BR",unified:"1F1E7-1F1F7",sheet_x:31,sheet_y:42,short_names:["flag-br"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,br,regional,indicator,symbol,letters"},tram:{name:"Tram",unified:"1F68A",sheet_x:25,sheet_y:16,short_names:["tram"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tram,transportation,vehicle"},scorpius:{name:"Scorpius",unified:"264F",variations:["264F-FE0F"],sheet_x:1,sheet_y:27,short_names:["scorpius"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scorpius,sign,zodiac,purple-square,astrology,scorpio"},poultry_leg:{name:"Poultry Leg",unified:"1F357",sheet_x:6,sheet_y:20,short_names:["poultry_leg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"poultry,leg,food,meat,drumstick,bird,chicken,turkey"},"woman-playing-handball":{name:"Woman Playing Handball",unified:"1F93E-200D-2640-FE0F",sheet_x:48,sheet_y:13,short_names:["woman-playing-handball"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB-200D-2640-FE0F",image:"1f93e-1f3fb-200d-2640-fe0f.png",sheet_x:48,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC-200D-2640-FE0F",image:"1f93e-1f3fc-200d-2640-fe0f.png",sheet_x:48,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD-200D-2640-FE0F",image:"1f93e-1f3fd-200d-2640-fe0f.png",sheet_x:48,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE-200D-2640-FE0F",image:"1f93e-1f3fe-200d-2640-fe0f.png",sheet_x:48,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF-200D-2640-FE0F",image:"1f93e-1f3ff-200d-2640-fe0f.png",sheet_x:48,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,playing,handball"},bug:{name:"Bug",unified:"1F41B",sheet_x:11,sheet_y:3,short_names:["bug"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bug,animal,insect,nature,worm"},confused:{name:"Confused Face",unified:"1F615",sheet_x:23,sheet_y:5,short_names:["confused"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":\\",":-\\",":/",":-/"],search:"confused,face,indifference,huh,weird,hmmm,:/,:\\,:-\\,:-/"},sagittarius:{name:"Sagittarius",unified:"2650",variations:["2650-FE0F"],sheet_x:1,sheet_y:28,short_names:["sagittarius"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sagittarius,sign,zodiac,purple-square,astrology"},butterfly:{name:"Butterfly",unified:"1F98B",sheet_x:30,sheet_y:40,short_names:["butterfly"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"butterfly,animal,insect,nature,caterpillar"},hourglass_flowing_sand:{name:"Hourglass with Flowing Sand",unified:"23F3",sheet_x:0,sheet_y:28,short_names:["hourglass_flowing_sand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hourglass,flowing,sand,with,oldschool,time,countdown"},"flag-io":{name:"Regional Indicator Symbol Letters IO",unified:"1F1EE-1F1F4",sheet_x:33,sheet_y:24,short_names:["flag-io"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,io,regional,indicator,symbol,letters"},slightly_frowning_face:{name:"Slightly Frowning Face",unified:"1F641",sheet_x:24,sheet_y:0,short_names:["slightly_frowning_face"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"slightly,frowning,face,disappointed,sad,upset"},station:{name:"Station",unified:"1F689",sheet_x:25,sheet_y:15,short_names:["station"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"station,transportation,vehicle,public"},meat_on_bone:{name:"Meat on Bone",unified:"1F356",sheet_x:6,sheet_y:19,short_names:["meat_on_bone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"meat,on,bone,good,food,drumstick"},"man-playing-handball":{name:"Man Playing Handball",unified:"1F93E-200D-2642-FE0F",sheet_x:48,sheet_y:19,short_names:["man-playing-handball"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB-200D-2642-FE0F",image:"1f93e-1f3fb-200d-2642-fe0f.png",sheet_x:48,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC-200D-2642-FE0F",image:"1f93e-1f3fc-200d-2642-fe0f.png",sheet_x:48,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD-200D-2642-FE0F",image:"1f93e-1f3fd-200d-2642-fe0f.png",sheet_x:48,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE-200D-2642-FE0F",image:"1f93e-1f3fe-200d-2642-fe0f.png",sheet_x:48,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF-200D-2642-FE0F",image:"1f93e-1f3ff-200d-2642-fe0f.png",sheet_x:48,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,playing,handball"},"flag-vg":{name:"Regional Indicator Symbol Letters VG",unified:"1F1FB-1F1EC",sheet_x:36,sheet_y:12,short_names:["flag-vg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vg,regional,indicator,symbol,letters"},satellite_antenna:{name:"Satellite Antenna",unified:"1F4E1",sheet_x:18,sheet_y:33,short_names:["satellite_antenna"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"satellite,antenna"},helicopter:{name:"Helicopter",unified:"1F681",sheet_x:25,sheet_y:7,short_names:["helicopter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"helicopter,transportation,vehicle,fly"},pizza:{name:"Slice of Pizza",unified:"1F355",sheet_x:6,sheet_y:18,short_names:["pizza"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pizza,slice,of,food,party"},snail:{name:"Snail",unified:"1F40C",sheet_x:10,sheet_y:37,short_names:["snail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"snail,slow,animal,shell"},white_frowning_face:{name:"White Frowning Face",unified:"2639",variations:["2639-FE0F"],sheet_x:1,sheet_y:16,short_names:["white_frowning_face"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"white,frowning,face"},capricorn:{name:"Capricorn",unified:"2651",variations:["2651-FE0F"],sheet_x:1,sheet_y:29,short_names:["capricorn"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"capricorn,sign,zodiac,purple-square,astrology"},"woman-golfing":{name:"Woman Golfing",unified:"1F3CC-FE0F-200D-2640-FE0F",sheet_x:40,sheet_y:36,short_names:["woman-golfing"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB-200D-2640-FE0F",image:"1f3cc-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC-200D-2640-FE0F",image:"1f3cc-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD-200D-2640-FE0F",image:"1f3cc-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE-200D-2640-FE0F",image:"1f3cc-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF-200D-2640-FE0F",image:"1f3cc-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,golfing"},"flag-bn":{name:"Regional Indicator Symbol Letters BN",unified:"1F1E7-1F1F3",sheet_x:31,sheet_y:39,short_names:["flag-bn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"flag,bn,regional,indicator,symbol,letters"},battery:{name:"Battery",unified:"1F50B",sheet_x:19,sheet_y:25,short_names:["battery"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"battery,power,energy,sustain"},shell:{name:"Spiral Shell",unified:"1F41A",sheet_x:11,sheet_y:2,short_names:["shell"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"shell,spiral,nature,sea,beach"},aquarius:{name:"Aquarius",unified:"2652",variations:["2652-FE0F"],sheet_x:1,sheet_y:30,short_names:["aquarius"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"aquarius,sign,purple-square,zodiac,astrology"},golfer:{name:"Golfer",unified:"1F3CC",variations:["1F3CC-FE0F"],sheet_x:9,sheet_y:20,short_names:["golfer"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB",image:"1f3cc-1f3fb.png",sheet_x:9,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC",image:"1f3cc-1f3fc.png",sheet_x:9,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD",image:"1f3cc-1f3fd.png",sheet_x:9,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE",image:"1f3cc-1f3fe.png",sheet_x:9,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF",image:"1f3cc-1f3ff.png",sheet_x:9,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"1F3CC-FE0F-200D-2642-FE0F",search:"golfer"},hotdog:{name:"Hot Dog",unified:"1F32D",sheet_x:5,sheet_y:27,short_names:["hotdog"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"hotdog,hot,dog,food,frankfurter"},small_airplane:{name:"Small Airplane",unified:"1F6E9",sheet_x:27,sheet_y:22,short_names:["small_airplane"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"small,airplane,flight,transportation,fly,vehicle"},persevere:{name:"Persevering Face",unified:"1F623",sheet_x:23,sheet_y:19,short_names:["persevere"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"persevere,persevering,face,sick,no,upset,oops"},beetle:{name:"Lady Beetle",unified:"1F41E",sheet_x:11,sheet_y:6,short_names:["beetle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"beetle,lady,animal,insect,nature,ladybug"},airplane:{name:"Airplane",unified:"2708",variations:["2708-FE0F"],sheet_x:2,sheet_y:35,short_names:["airplane"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"airplane,vehicle,transportation,flight,fly"},"woman-surfing":{name:"Woman Surfing",unified:"1F3C4-200D-2640-FE0F",sheet_x:40,sheet_y:0,short_names:["woman-surfing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB-200D-2640-FE0F",image:"1f3c4-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C4-1F3FC-200D-2640-FE0F",image:"1f3c4-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C4-1F3FD-200D-2640-FE0F",image:"1f3c4-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C4-1F3FE-200D-2640-FE0F",image:"1f3c4-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C4-1F3FF-200D-2640-FE0F",image:"1f3c4-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,surfing"},pisces:{name:"Pisces",unified:"2653",variations:["2653-FE0F"],sheet_x:1,sheet_y:31,short_names:["pisces"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pisces,purple-square,sign,zodiac,astrology"},electric_plug:{name:"Electric Plug",unified:"1F50C",sheet_x:19,sheet_y:26,short_names:["electric_plug"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"electric,plug,charger,power"},hamburger:{name:"Hamburger",unified:"1F354",sheet_x:6,sheet_y:17,short_names:["hamburger"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hamburger,meat,fast food,beef,cheeseburger,mcdonalds,burger king"},confounded:{name:"Confounded Face",unified:"1F616",sheet_x:23,sheet_y:6,short_names:["confounded"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"confounded,face,confused,sick,unwell,oops,:s"},"flag-bg":{name:"Regional Indicator Symbol Letters BG",unified:"1F1E7-1F1EC",sheet_x:31,sheet_y:33,short_names:["flag-bg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bg,regional,indicator,symbol,letters"},tired_face:{name:"Tired Face",unified:"1F62B",sheet_x:23,sheet_y:27,short_names:["tired_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tired,face,sick,whine,upset,frustrated"},surfer:{name:"Surfer",unified:"1F3C4",sheet_x:8,sheet_y:41,short_names:["surfer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB",image:"1f3c4-1f3fb.png",sheet_x:8,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C4-1F3FC",image:"1f3c4-1f3fc.png",sheet_x:8,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C4-1F3FD",image:"1f3c4-1f3fd.png",sheet_x:8,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C4-1F3FE",image:"1f3c4-1f3fe.png",sheet_x:8,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C4-1F3FF",image:"1f3c4-1f3ff.png",sheet_x:8,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F3C4-200D-2642-FE0F",search:"surfer"},fries:{name:"French Fries",unified:"1F35F",sheet_x:6,sheet_y:28,short_names:["fries"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fries,french,chips,snack,fast food"},bulb:{name:"Electric Light Bulb",unified:"1F4A1",sheet_x:17,sheet_y:13,short_names:["bulb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bulb,electric,light,electricity,idea"},id:{name:"Squared Id",unified:"1F194",sheet_x:4,sheet_y:11,short_names:["id"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"id,squared,purple-square,words"},airplane_departure:{name:"Airplane Departure",unified:"1F6EB",sheet_x:27,sheet_y:23,short_names:["airplane_departure"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"airplane,departure"},"flag-bf":{name:"Regional Indicator Symbol Letters BF",unified:"1F1E7-1F1EB",sheet_x:31,sheet_y:32,short_names:["flag-bf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bf,regional,indicator,symbol,letters"},ant:{name:"Ant",unified:"1F41C",sheet_x:11,sheet_y:4,short_names:["ant"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ant,animal,insect,nature,bug"},weary:{name:"Weary Face",unified:"1F629",sheet_x:23,sheet_y:25,short_names:["weary"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"weary,face,tired,sleepy,sad,frustrated,upset"},"flag-bi":{name:"Regional Indicator Symbol Letters BI",unified:"1F1E7-1F1EE",sheet_x:31,sheet_y:35,short_names:["flag-bi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bi,regional,indicator,symbol,letters"},spider:{name:"Spider",unified:"1F577",sheet_x:21,sheet_y:24,short_names:["spider"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"spider,animal,arachnid"},"woman-swimming":{name:"Woman Swimming",unified:"1F3CA-200D-2640-FE0F",sheet_x:40,sheet_y:12,short_names:["woman-swimming"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB-200D-2640-FE0F",image:"1f3ca-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CA-1F3FC-200D-2640-FE0F",image:"1f3ca-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CA-1F3FD-200D-2640-FE0F",image:"1f3ca-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CA-1F3FE-200D-2640-FE0F",image:"1f3ca-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CA-1F3FF-200D-2640-FE0F",image:"1f3ca-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,swimming"},stuffed_flatbread:{name:"Stuffed Flatbread",unified:"1F959",sheet_x:30,sheet_y:23,short_names:["stuffed_flatbread"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"stuffed,flatbread,food,gyro"},airplane_arriving:{name:"Airplane Arriving",unified:"1F6EC",sheet_x:27,sheet_y:24,short_names:["airplane_arriving"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"airplane,arriving"},flashlight:{name:"Electric Torch",unified:"1F526",sheet_x:20,sheet_y:3,short_names:["flashlight"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flashlight,electric,torch,dark,camping,sight,night"},atom_symbol:{name:"Atom Symbol",unified:"269B",variations:["269B-FE0F"],sheet_x:1,sheet_y:46,short_names:["atom_symbol"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"atom,symbol,science"},triumph:{name:"Face with Look of Triumph",unified:"1F624",sheet_x:23,sheet_y:20,short_names:["triumph"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"triumph,face,with,look,of,gas,phew,proud,pride"},candle:{name:"Candle",unified:"1F56F",sheet_x:21,sheet_y:8,short_names:["candle"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"candle,fire,wax"},swimmer:{name:"Swimmer",unified:"1F3CA",sheet_x:9,sheet_y:8,short_names:["swimmer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB",image:"1f3ca-1f3fb.png",sheet_x:9,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3CA-1F3FC",image:"1f3ca-1f3fc.png",sheet_x:9,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3CA-1F3FD",image:"1f3ca-1f3fd.png",sheet_x:9,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3CA-1F3FE",image:"1f3ca-1f3fe.png",sheet_x:9,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3CA-1F3FF",image:"1f3ca-1f3ff.png",sheet_x:9,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F3CA-200D-2642-FE0F",search:"swimmer"},"flag-cv":{name:"Regional Indicator Symbol Letters CV",unified:"1F1E8-1F1FB",sheet_x:32,sheet_y:15,short_names:["flag-cv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cv,regional,indicator,symbol,letters"},spider_web:{name:"Spider Web",unified:"1F578",sheet_x:21,sheet_y:25,short_names:["spider_web"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"spider,web,animal,insect,arachnid,silk"},accept:{name:"Circled Ideograph Accept",unified:"1F251",sheet_x:4,sheet_y:32,short_names:["accept"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"accept,circled,ideograph,ok,good,chinese,kanji,agree,yes,orange-circle"},taco:{name:"Taco",unified:"1F32E",sheet_x:5,sheet_y:28,short_names:["taco"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"taco,food,mexican"},rocket:{name:"Rocket",unified:"1F680",sheet_x:25,sheet_y:6,short_names:["rocket"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rocket,launch,ship,staffmode,nasa,outer space,outer_space,fly"},"flag-kh":{name:"Regional Indicator Symbol Letters KH",unified:"1F1F0-1F1ED",sheet_x:33,sheet_y:35,short_names:["flag-kh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kh,regional,indicator,symbol,letters"},radioactive_sign:{name:"Radioactive Sign",unified:"2622",variations:["2622-FE0F"],sheet_x:1,sheet_y:9,short_names:["radioactive_sign"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"radioactive,sign"},burrito:{name:"Burrito",unified:"1F32F",sheet_x:5,sheet_y:29,short_names:["burrito"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"burrito,food,mexican"},angry:{name:"Angry Face",unified:"1F620",sheet_x:23,sheet_y:16,short_names:["angry"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[">:(",">:-("],search:"angry,face,mad,annoyed,frustrated,>:(,>:-("},water_polo:{name:"Water Polo",unified:"1F93D",sheet_x:29,sheet_y:40,short_names:["water_polo"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB",image:"1f93d-1f3fb.png",sheet_x:29,sheet_y:41,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC",image:"1f93d-1f3fc.png",sheet_x:29,sheet_y:42,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD",image:"1f93d-1f3fd.png",sheet_x:29,sheet_y:43,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE",image:"1f93d-1f3fe.png",sheet_x:29,sheet_y:44,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF",image:"1f93d-1f3ff.png",sheet_x:29,sheet_y:45,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"water,polo"},satellite:{name:"Satellite",unified:"1F6F0",sheet_x:27,sheet_y:25,short_names:["satellite"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"satellite,communication,future,radio,space"},turtle:{name:"Turtle",unified:"1F422",sheet_x:11,sheet_y:10,short_names:["turtle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"turtle,animal,slow,nature,tortoise"},wastebasket:{name:"Wastebasket",unified:"1F5D1",sheet_x:22,sheet_y:16,short_names:["wastebasket"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"wastebasket,bin,trash,rubbish,garbage,toss"},"woman-playing-water-polo":{name:"Woman Playing Water Polo",unified:"1F93D-200D-2640-FE0F",sheet_x:48,sheet_y:1,short_names:["woman-playing-water-polo"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB-200D-2640-FE0F",image:"1f93d-1f3fb-200d-2640-fe0f.png",sheet_x:48,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC-200D-2640-FE0F",image:"1f93d-1f3fc-200d-2640-fe0f.png",sheet_x:48,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD-200D-2640-FE0F",image:"1f93d-1f3fd-200d-2640-fe0f.png",sheet_x:48,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE-200D-2640-FE0F",image:"1f93d-1f3fe-200d-2640-fe0f.png",sheet_x:48,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF-200D-2640-FE0F",image:"1f93d-1f3ff-200d-2640-fe0f.png",sheet_x:48,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,playing,water,polo"},snake:{name:"Snake",unified:"1F40D",sheet_x:10,sheet_y:38,short_names:["snake"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"snake,animal,evil,nature,hiss,python"},rage:{name:"Pouting Face",unified:"1F621",sheet_x:23,sheet_y:17,short_names:["rage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rage,pouting,face,angry,mad,hate,despise"},green_salad:{name:"Green Salad",unified:"1F957",sheet_x:30,sheet_y:21,short_names:["green_salad"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"green,salad,food,healthy,lettuce"},oil_drum:{name:"Oil Drum",unified:"1F6E2",sheet_x:27,sheet_y:18,short_names:["oil_drum"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"oil,drum,barrell"},seat:{name:"Seat",unified:"1F4BA",sheet_x:17,sheet_y:43,short_names:["seat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"seat,sit,airplane,transport,bus,flight,fly"},biohazard_sign:{name:"Biohazard Sign",unified:"2623",variations:["2623-FE0F"],sheet_x:1,sheet_y:10,short_names:["biohazard_sign"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"biohazard,sign"},"flag-cm":{name:"Regional Indicator Symbol Letters CM",unified:"1F1E8-1F1F2",sheet_x:32,sheet_y:9,short_names:["flag-cm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cm,regional,indicator,symbol,letters"},shallow_pan_of_food:{name:"Shallow Pan of Food",unified:"1F958",sheet_x:30,sheet_y:22,short_names:["shallow_pan_of_food"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shallow,pan,of,food,cooking,casserole,paella"},"man-playing-water-polo":{name:"Man Playing Water Polo",unified:"1F93D-200D-2642-FE0F",sheet_x:48,sheet_y:7,short_names:["man-playing-water-polo"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB-200D-2642-FE0F",image:"1f93d-1f3fb-200d-2642-fe0f.png",sheet_x:48,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC-200D-2642-FE0F",image:"1f93d-1f3fc-200d-2642-fe0f.png",sheet_x:48,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD-200D-2642-FE0F",image:"1f93d-1f3fd-200d-2642-fe0f.png",sheet_x:48,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE-200D-2642-FE0F",image:"1f93d-1f3fe-200d-2642-fe0f.png",sheet_x:48,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF-200D-2642-FE0F",image:"1f93d-1f3ff-200d-2642-fe0f.png",sheet_x:48,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,playing,water,polo"},canoe:{name:"Canoe",unified:"1F6F6",sheet_x:27,sheet_y:29,short_names:["canoe"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"canoe,boat,paddle,water,ship"},"flag-ca":{name:"Regional Indicator Symbol Letters CA",unified:"1F1E8-1F1E6",sheet_x:32,sheet_y:0,short_names:["flag-ca"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ca,regional,indicator,symbol,letters"},lizard:{name:"Lizard",unified:"1F98E",sheet_x:30,sheet_y:43,short_names:["lizard"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lizard,animal,nature,reptile"},mobile_phone_off:{name:"Mobile Phone off",unified:"1F4F4",sheet_x:19,sheet_y:3,short_names:["mobile_phone_off"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mobile,phone,off,mute,orange-square,silence,quiet"},money_with_wings:{name:"Money with Wings",unified:"1F4B8",sheet_x:17,sheet_y:41,short_names:["money_with_wings"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"money,with,wings,dollar,bills,payment,sale"},no_mouth:{name:"Face Without Mouth",unified:"1F636",sheet_x:23,sheet_y:38,short_names:["no_mouth"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,mouth,face,without,hellokitty"},"flag-ic":{name:"Regional Indicator Symbol Letters IC",unified:"1F1EE-1F1E8",sheet_x:33,sheet_y:18,short_names:["flag-ic"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ic,regional,indicator,symbol,letters"},neutral_face:{name:"Neutral Face",unified:"1F610",sheet_x:23,sheet_y:0,short_names:["neutral_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":|",":-|"],search:"neutral,face,indifference,meh,:|,:-|"},dollar:{name:"Banknote with Dollar Sign",unified:"1F4B5",sheet_x:17,sheet_y:38,short_names:["dollar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dollar,banknote,with,sign,money,sales,bill,currency"},vibration_mode:{name:"Vibration Mode",unified:"1F4F3",sheet_x:19,sheet_y:2,short_names:["vibration_mode"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"vibration,mode,orange-square,phone"},spaghetti:{name:"Spaghetti",unified:"1F35D",sheet_x:6,sheet_y:26,short_names:["spaghetti"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"spaghetti,food,italian,noodle"},"woman-rowing-boat":{name:"Woman Rowing Boat",unified:"1F6A3-200D-2640-FE0F",sheet_x:46,sheet_y:1,short_names:["woman-rowing-boat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB-200D-2640-FE0F",image:"1f6a3-1f3fb-200d-2640-fe0f.png",sheet_x:46,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC-200D-2640-FE0F",image:"1f6a3-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD-200D-2640-FE0F",image:"1f6a3-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE-200D-2640-FE0F",image:"1f6a3-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF-200D-2640-FE0F",image:"1f6a3-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,rowing,boat"},scorpion:{name:"Scorpion",unified:"1F982",sheet_x:30,sheet_y:31,short_names:["scorpion"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"scorpion,animal,arachnid"},boat:{name:"Sailboat",unified:"26F5",variations:["26F5-FE0F"],sheet_x:2,sheet_y:22,short_names:["boat","sailboat"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"boat,sailboat"},"flag-ky":{name:"Regional Indicator Symbol Letters KY",unified:"1F1F0-1F1FE",sheet_x:33,sheet_y:42,short_names:["flag-ky"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ky,regional,indicator,symbol,letters"},rowboat:{name:"Rowboat",unified:"1F6A3",sheet_x:25,sheet_y:41,short_names:["rowboat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB",image:"1f6a3-1f3fb.png",sheet_x:25,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC",image:"1f6a3-1f3fc.png",sheet_x:25,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD",image:"1f6a3-1f3fd.png",sheet_x:25,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE",image:"1f6a3-1f3fe.png",sheet_x:25,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF",image:"1f6a3-1f3ff.png",sheet_x:25,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"1F6A3-200D-2642-FE0F",search:"rowboat"},expressionless:{name:"Expressionless Face",unified:"1F611",sheet_x:23,sheet_y:1,short_names:["expressionless"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"expressionless,face,indifferent,-_-,meh,deadpan"},"u6709":{name:"Squared Cjk Unified Ideograph-6709",unified:"1F236",sheet_x:4,sheet_y:26,short_names:["u6709"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u6709,squared,cjk,unified,ideograph,6709,orange-square,chinese,have,kanji"},yen:{name:"Banknote with Yen Sign",unified:"1F4B4",sheet_x:17,sheet_y:37,short_names:["yen"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"yen,banknote,with,sign,money,sales,japanese,dollar,currency"},crab:{name:"Crab",unified:"1F980",sheet_x:30,sheet_y:29,short_names:["crab"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"crab,animal,crustacean"},ramen:{name:"Steaming Bowl",unified:"1F35C",sheet_x:6,sheet_y:25,short_names:["ramen"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ramen,steaming,bowl,food,japanese,noodle,chopsticks"},motor_boat:{name:"Motor Boat",unified:"1F6E5",sheet_x:27,sheet_y:21,short_names:["motor_boat"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"motor,boat,ship"},"flag-cf":{name:"Regional Indicator Symbol Letters CF",unified:"1F1E8-1F1EB",sheet_x:32,sheet_y:3,short_names:["flag-cf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cf,regional,indicator,symbol,letters"},hushed:{name:"Hushed Face",unified:"1F62F",sheet_x:23,sheet_y:31,short_names:["hushed"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hushed,face,woo,shh"},"u7121":{name:"Squared Cjk Unified Ideograph-7121",unified:"1F21A",variations:["1F21A-FE0F"],sheet_x:4,sheet_y:20,short_names:["u7121"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u7121,squared,cjk,unified,ideograph,7121,nothing,chinese,kanji,japanese,orange-square"},speedboat:{name:"Speedboat",unified:"1F6A4",sheet_x:25,sheet_y:47,short_names:["speedboat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"speedboat,ship,transportation,vehicle,summer"},squid:{name:"Squid",unified:"1F991",sheet_x:30,sheet_y:46,short_names:["squid"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"squid,animal,nature,ocean,sea"},stew:{name:"Pot of Food",unified:"1F372",sheet_x:6,sheet_y:47,short_names:["stew"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"stew,pot,of,food,meat,soup"},horse_racing:{name:"Horse Racing",unified:"1F3C7",sheet_x:9,sheet_y:0,short_names:["horse_racing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C7-1F3FB",image:"1f3c7-1f3fb.png",sheet_x:9,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C7-1F3FC",image:"1f3c7-1f3fc.png",sheet_x:9,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C7-1F3FD",image:"1f3c7-1f3fd.png",sheet_x:9,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C7-1F3FE",image:"1f3c7-1f3fe.png",sheet_x:9,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C7-1F3FF",image:"1f3c7-1f3ff.png",sheet_x:9,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"horse,racing,animal,betting,competition,gambling,luck"},euro:{name:"Banknote with Euro Sign",unified:"1F4B6",sheet_x:17,sheet_y:39,short_names:["euro"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"euro,banknote,with,sign,money,sales,dollar,currency"},passenger_ship:{name:"Passenger Ship",unified:"1F6F3",sheet_x:27,sheet_y:26,short_names:["passenger_ship"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"passenger,ship,yacht,cruise,ferry"},pound:{name:"Banknote with Pound Sign",unified:"1F4B7",sheet_x:17,sheet_y:40,short_names:["pound"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pound,banknote,with,sign,british,sterling,money,sales,bills,uk,england,currency"},fish_cake:{name:"Fish Cake with Swirl Design",unified:"1F365",sheet_x:6,sheet_y:34,short_names:["fish_cake"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fish,cake,with,swirl,design,food,japan,sea,beach"},octopus:{name:"Octopus",unified:"1F419",sheet_x:11,sheet_y:1,short_names:["octopus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"octopus,animal,creature,ocean,sea,nature,beach"},"woman-biking":{name:"Woman Biking",unified:"1F6B4-200D-2640-FE0F",sheet_x:46,sheet_y:13,short_names:["woman-biking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB-200D-2640-FE0F",image:"1f6b4-1f3fb-200d-2640-fe0f.png",sheet_x:46,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B4-1F3FC-200D-2640-FE0F",image:"1f6b4-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B4-1F3FD-200D-2640-FE0F",image:"1f6b4-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B4-1F3FE-200D-2640-FE0F",image:"1f6b4-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B4-1F3FF-200D-2640-FE0F",image:"1f6b4-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,biking"},frowning:{name:"Frowning Face with Open Mouth",unified:"1F626",sheet_x:23,sheet_y:22,short_names:["frowning"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"frowning,face,with,open,mouth,aw,what"},"flag-td":{name:"Regional Indicator Symbol Letters TD",unified:"1F1F9-1F1E9",sheet_x:35,sheet_y:36,short_names:["flag-td"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,td,regional,indicator,symbol,letters"},"u7533":{name:"Squared Cjk Unified Ideograph-7533",unified:"1F238",sheet_x:4,sheet_y:28,short_names:["u7533"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u7533,squared,cjk,unified,ideograph,7533,chinese,japanese,kanji,orange-square"},"u55b6":{name:"Squared Cjk Unified Ideograph-55b6",unified:"1F23A",sheet_x:4,sheet_y:30,short_names:["u55b6"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u55b6,squared,cjk,unified,ideograph,55b6,japanese,opening hours,orange-square"},anguished:{name:"Anguished Face",unified:"1F627",sheet_x:23,sheet_y:23,short_names:["anguished"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["D:"],search:"anguished,face,stunned,nervous,d:"},moneybag:{name:"Money Bag",unified:"1F4B0",sheet_x:17,sheet_y:33,short_names:["moneybag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"moneybag,money,bag,dollar,payment,coins,sale"},sushi:{name:"Sushi",unified:"1F363",sheet_x:6,sheet_y:32,short_names:["sushi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sushi,food,fish,japanese,rice"},bicyclist:{name:"Bicyclist",unified:"1F6B4",sheet_x:26,sheet_y:14,short_names:["bicyclist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB",image:"1f6b4-1f3fb.png",sheet_x:26,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6B4-1F3FC",image:"1f6b4-1f3fc.png",sheet_x:26,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6B4-1F3FD",image:"1f6b4-1f3fd.png",sheet_x:26,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6B4-1F3FE",image:"1f6b4-1f3fe.png",sheet_x:26,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6B4-1F3FF",image:"1f6b4-1f3ff.png",sheet_x:26,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F6B4-200D-2642-FE0F",search:"bicyclist"},shrimp:{name:"Shrimp",unified:"1F990",sheet_x:30,sheet_y:45,short_names:["shrimp"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shrimp,animal,ocean,nature,seafood"},ferry:{name:"Ferry",unified:"26F4",sheet_x:2,sheet_y:21,short_names:["ferry"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"ferry,boat,ship,yacht"},"flag-cl":{name:"Regional Indicator Symbol Letters CL",unified:"1F1E8-1F1F1",sheet_x:32,sheet_y:8,short_names:["flag-cl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cl,regional,indicator,symbol,letters"},credit_card:{name:"Credit Card",unified:"1F4B3",sheet_x:17,sheet_y:36,short_names:["credit_card"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"credit,card,money,sales,dollar,bill,payment,shopping"},"flag-cn":{name:"Regional Indicator Symbol Letters CN",unified:"1F1E8-1F1F3",sheet_x:32,sheet_y:10,short_names:["flag-cn","cn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cn,regional,indicator,symbol,letters"},bento:{name:"Bento Box",unified:"1F371",sheet_x:6,sheet_y:46,short_names:["bento"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bento,box,food,japanese"},ship:{name:"Ship",unified:"1F6A2",sheet_x:25,sheet_y:40,short_names:["ship"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ship,transportation,titanic,deploy"},open_mouth:{name:"Face with Open Mouth",unified:"1F62E",sheet_x:23,sheet_y:30,short_names:["open_mouth"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":o",":-o",":O",":-O"],search:"open,mouth,face,with,surprise,impressed,wow,whoa,:o,:-o"},"u6708":{name:"Squared Cjk Unified Ideograph-6708",unified:"1F237",variations:["1F237-FE0F"],sheet_x:4,sheet_y:27,short_names:["u6708"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u6708,squared,cjk,unified,ideograph,6708,chinese,month,moon,japanese,orange-square,kanji"},tropical_fish:{name:"Tropical Fish",unified:"1F420",sheet_x:11,sheet_y:8,short_names:["tropical_fish"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tropical,fish,animal,swim,ocean,beach,nemo"},"woman-mountain-biking":{name:"Woman Mountain Biking",unified:"1F6B5-200D-2640-FE0F",sheet_x:46,sheet_y:25,short_names:["woman-mountain-biking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB-200D-2640-FE0F",image:"1f6b5-1f3fb-200d-2640-fe0f.png",sheet_x:46,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B5-1F3FC-200D-2640-FE0F",image:"1f6b5-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B5-1F3FD-200D-2640-FE0F",image:"1f6b5-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B5-1F3FE-200D-2640-FE0F",image:"1f6b5-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B5-1F3FF-200D-2640-FE0F",image:"1f6b5-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,mountain,biking"},"flag-cx":{name:"Regional Indicator Symbol Letters CX",unified:"1F1E8-1F1FD",sheet_x:32,sheet_y:17,short_names:["flag-cx"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cx,regional,indicator,symbol,letters"},fish:{name:"Fish",unified:"1F41F",sheet_x:11,sheet_y:7,short_names:["fish"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fish,animal,food,nature"},eight_pointed_black_star:{name:"Eight Pointed Black Star",unified:"2734",variations:["2734-FE0F"],sheet_x:3,sheet_y:20,short_names:["eight_pointed_black_star"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"eight,pointed,black,star,orange-square,shape,polygon"},anchor:{name:"Anchor",unified:"2693",variations:["2693-FE0F"],sheet_x:1,sheet_y:40,short_names:["anchor"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"anchor,ship,ferry,sea,boat"},gem:{name:"Gem Stone",unified:"1F48E",sheet_x:16,sheet_y:43,short_names:["gem"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gem,stone,blue,ruby,diamond,jewelry"},astonished:{name:"Astonished Face",unified:"1F632",sheet_x:23,sheet_y:34,short_names:["astonished"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"astonished,face,xox,surprised,poisoned"},mountain_bicyclist:{name:"Mountain Bicyclist",unified:"1F6B5",sheet_x:26,sheet_y:20,short_names:["mountain_bicyclist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB",image:"1f6b5-1f3fb.png",sheet_x:26,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6B5-1F3FC",image:"1f6b5-1f3fc.png",sheet_x:26,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6B5-1F3FD",image:"1f6b5-1f3fd.png",sheet_x:26,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6B5-1F3FE",image:"1f6b5-1f3fe.png",sheet_x:26,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6B5-1F3FF",image:"1f6b5-1f3ff.png",sheet_x:26,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F6B5-200D-2642-FE0F",search:"mountain,bicyclist"},curry:{name:"Curry and Rice",unified:"1F35B",sheet_x:6,sheet_y:24,short_names:["curry"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"curry,and,rice,food,spicy,hot,indian"},"flag-cc":{name:"Regional Indicator Symbol Letters CC",unified:"1F1E8-1F1E8",sheet_x:32,sheet_y:1,short_names:["flag-cc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cc,regional,indicator,symbol,letters"},blowfish:{name:"Blowfish",unified:"1F421",sheet_x:11,sheet_y:9,short_names:["blowfish"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blowfish,animal,nature,food,sea,ocean"},rice:{name:"Cooked Rice",unified:"1F35A",sheet_x:6,sheet_y:23,short_names:["rice"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rice,cooked,food,china,asian"},running_shirt_with_sash:{name:"Running Shirt with Sash",unified:"1F3BD",sheet_x:8,sheet_y:24,short_names:["running_shirt_with_sash"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"running,shirt,with,sash,play,pageant"},dizzy_face:{name:"Dizzy Face",unified:"1F635",sheet_x:23,sheet_y:37,short_names:["dizzy_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dizzy,face,spent,unconscious,xox"},construction:{name:"Construction Sign",unified:"1F6A7",sheet_x:26,sheet_y:1,short_names:["construction"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"construction,sign,wip,progress,caution,warning"},scales:{name:"Scales",unified:"2696",variations:["2696-FE0F"],sheet_x:1,sheet_y:43,short_names:["scales"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"scales"},vs:{name:"Squared Vs",unified:"1F19A",sheet_x:4,sheet_y:17,short_names:["vs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"vs,squared,words,orange-square"},fuelpump:{name:"Fuel Pump",unified:"26FD",variations:["26FD-FE0F"],sheet_x:2,sheet_y:32,short_names:["fuelpump"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fuelpump,fuel,pump,gas station,petroleum"},white_flower:{name:"White Flower",unified:"1F4AE",sheet_x:17,sheet_y:31,short_names:["white_flower"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,flower,japanese,spring"},rice_ball:{name:"Rice Ball",unified:"1F359",sheet_x:6,sheet_y:22,short_names:["rice_ball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rice,ball,food,japanese"},dolphin:{name:"Dolphin",unified:"1F42C",sheet_x:11,sheet_y:20,short_names:["dolphin","flipper"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dolphin,flipper,animal,nature,fish,sea,ocean,fins,beach"},wrench:{name:"Wrench",unified:"1F527",sheet_x:20,sheet_y:4,short_names:["wrench"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wrench,tools,diy,ikea,fix,maintainer"},"flag-co":{name:"Regional Indicator Symbol Letters CO",unified:"1F1E8-1F1F4",sheet_x:32,sheet_y:11,short_names:["flag-co"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,co,regional,indicator,symbol,letters"},sports_medal:{name:"Sports Medal",unified:"1F3C5",sheet_x:8,sheet_y:47,short_names:["sports_medal"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"sports,medal"},flushed:{name:"Flushed Face",unified:"1F633",sheet_x:23,sheet_y:35,short_names:["flushed"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flushed,face,blush,shy,flattered"},hammer:{name:"Hammer",unified:"1F528",sheet_x:20,sheet_y:5,short_names:["hammer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hammer,tools,build,create"},ideograph_advantage:{name:"Circled Ideograph Advantage",unified:"1F250",sheet_x:4,sheet_y:31,short_names:["ideograph_advantage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ideograph,advantage,circled,chinese,kanji,obtain,get,circle"},shark:{name:"Shark",unified:"1F988",sheet_x:30,sheet_y:37,short_names:["shark"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shark,animal,nature,fish,sea,ocean,jaws,fins,beach"},medal:{name:"Military Medal",unified:"1F396",sheet_x:7,sheet_y:37,short_names:["medal"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"medal,military"},"flag-km":{name:"Regional Indicator Symbol Letters KM",unified:"1F1F0-1F1F2",sheet_x:33,sheet_y:37,short_names:["flag-km"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,km,regional,indicator,symbol,letters"},scream:{name:"Face Screaming in Fear",unified:"1F631",sheet_x:23,sheet_y:33,short_names:["scream"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scream,face,screaming,in,fear,munch,scared,omg"},busstop:{name:"Bus Stop",unified:"1F68F",sheet_x:25,sheet_y:21,short_names:["busstop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"busstop,bus,stop,transportation,wait"},rice_cracker:{name:"Rice Cracker",unified:"1F358",sheet_x:6,sheet_y:21,short_names:["rice_cracker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rice,cracker,food,japanese"},vertical_traffic_light:{name:"Vertical Traffic Light",unified:"1F6A6",sheet_x:26,sheet_y:0,short_names:["vertical_traffic_light"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"vertical,traffic,light,transportation,driving"},hammer_and_pick:{name:"Hammer and Pick",unified:"2692",sheet_x:1,sheet_y:39,short_names:["hammer_and_pick"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"hammer,and,pick,tools,build,create"},"flag-cg":{name:"Regional Indicator Symbol Letters CG",unified:"1F1E8-1F1EC",sheet_x:32,sheet_y:4,short_names:["flag-cg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cg,regional,indicator,symbol,letters"},whale:{name:"Spouting Whale",unified:"1F433",sheet_x:11,sheet_y:27,short_names:["whale"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"whale,spouting,animal,nature,sea,ocean"},secret:{name:"Circled Ideograph Secret",unified:"3299",variations:["3299-FE0F"],sheet_x:4,sheet_y:0,short_names:["secret"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"secret,circled,ideograph,privacy,chinese,sshh,kanji,red-circle"},fearful:{name:"Fearful Face",unified:"1F628",sheet_x:23,sheet_y:24,short_names:["fearful"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fearful,face,scared,terrified,nervous,oops,huh"},first_place_medal:{name:"First Place Medal",unified:"1F947",sheet_x:30,sheet_y:9,short_names:["first_place_medal"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"first,place,medal"},oden:{name:"Oden",unified:"1F362",sheet_x:6,sheet_y:31,short_names:["oden"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oden,food,japanese"},"whale2":{name:"Whale",unified:"1F40B",sheet_x:10,sheet_y:36,short_names:["whale2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"whale2,whale,animal,nature,sea,ocean"},traffic_light:{name:"Horizontal Traffic Light",unified:"1F6A5",sheet_x:25,sheet_y:48,short_names:["traffic_light"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"traffic,light,horizontal,transportation,signal"},"flag-cd":{name:"Regional Indicator Symbol Letters CD",unified:"1F1E8-1F1E9",sheet_x:32,sheet_y:2,short_names:["flag-cd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cd,regional,indicator,symbol,letters"},hammer_and_wrench:{name:"Hammer and Wrench",unified:"1F6E0",sheet_x:27,sheet_y:16,short_names:["hammer_and_wrench"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"hammer,and,wrench,tools,build,create"},second_place_medal:{name:"Second Place Medal",unified:"1F948",sheet_x:30,sheet_y:10,short_names:["second_place_medal"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"second,place,medal"},dango:{name:"Dango",unified:"1F361",sheet_x:6,sheet_y:30,short_names:["dango"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dango,food,dessert,sweet,japanese,barbecue,meat"},cold_sweat:{name:"Face with Open Mouth and Cold Sweat",unified:"1F630",sheet_x:23,sheet_y:32,short_names:["cold_sweat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cold,sweat,face,with,open,mouth,and,nervous"},congratulations:{name:"Circled Ideograph Congratulation",unified:"3297",variations:["3297-FE0F"],sheet_x:3,sheet_y:48,short_names:["congratulations"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"congratulations,circled,ideograph,congratulation,chinese,kanji,japanese,red-circle"},cry:{name:"Crying Face",unified:"1F622",sheet_x:23,sheet_y:18,short_names:["cry"],text:":'(",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":'("],search:"cry,crying,face,tears,sad,depressed,upset,:'("},crocodile:{name:"Crocodile",unified:"1F40A",sheet_x:10,sheet_y:35,short_names:["crocodile"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crocodile,animal,nature,reptile,lizard,alligator"},"u5408":{name:"Squared Cjk Unified Ideograph-5408",unified:"1F234",sheet_x:4,sheet_y:24,short_names:["u5408"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u5408,squared,cjk,unified,ideograph,5408,japanese,chinese,join,kanji,red-square"},"flag-ck":{name:"Regional Indicator Symbol Letters CK",unified:"1F1E8-1F1F0",sheet_x:32,sheet_y:7,short_names:["flag-ck"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ck,regional,indicator,symbol,letters"},pick:{name:"Pick",unified:"26CF",sheet_x:2,sheet_y:11,short_names:["pick"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"pick,tools,dig"},shaved_ice:{name:"Shaved Ice",unified:"1F367",sheet_x:6,sheet_y:36,short_names:["shaved_ice"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"shaved,ice,hot,dessert,summer"},third_place_medal:{name:"Third Place Medal",unified:"1F949",sheet_x:30,sheet_y:11,short_names:["third_place_medal"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"third,place,medal"},world_map:{name:"World Map",unified:"1F5FA",sheet_x:22,sheet_y:27,short_names:["world_map"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"world,map,location,direction"},trophy:{name:"Trophy",unified:"1F3C6",sheet_x:8,sheet_y:48,short_names:["trophy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"trophy,win,award,contest,place,ftw,ceremony"},"flag-cr":{name:"Regional Indicator Symbol Letters CR",unified:"1F1E8-1F1F7",sheet_x:32,sheet_y:13,short_names:["flag-cr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cr,regional,indicator,symbol,letters"},moyai:{name:"Moyai",unified:"1F5FF",sheet_x:22,sheet_y:32,short_names:["moyai"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"moyai,rock,easter island,moai"},"u6e80":{name:"Squared Cjk Unified Ideograph-6e80",unified:"1F235",sheet_x:4,sheet_y:25,short_names:["u6e80"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u6e80,squared,cjk,unified,ideograph,6e80,full,chinese,japanese,red-square,kanji"},leopard:{name:"Leopard",unified:"1F406",sheet_x:10,sheet_y:31,short_names:["leopard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"leopard,animal,nature"},nut_and_bolt:{name:"Nut and Bolt",unified:"1F529",sheet_x:20,sheet_y:6,short_names:["nut_and_bolt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"nut,and,bolt,handy,tools,fix"},disappointed_relieved:{name:"Disappointed but Relieved Face",unified:"1F625",sheet_x:23,sheet_y:21,short_names:["disappointed_relieved"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"disappointed,relieved,but,face,phew,sweat,nervous"},ice_cream:{name:"Ice Cream",unified:"1F368",sheet_x:6,sheet_y:37,short_names:["ice_cream"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ice,cream,food,hot,dessert"},rosette:{name:"Rosette",unified:"1F3F5",sheet_x:10,sheet_y:15,short_names:["rosette"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"rosette,flower,decoration,military"},icecream:{name:"Soft Ice Cream",unified:"1F366",sheet_x:6,sheet_y:35,short_names:["icecream"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"icecream,soft,ice,cream,food,hot,dessert,summer"},"u5272":{name:"Squared Cjk Unified Ideograph-5272",unified:"1F239",sheet_x:4,sheet_y:29,short_names:["u5272"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u5272,squared,cjk,unified,ideograph,5272,cut,divide,chinese,kanji,pink-square"},statue_of_liberty:{name:"Statue of Liberty",unified:"1F5FD",sheet_x:22,sheet_y:30,short_names:["statue_of_liberty"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"statue,of,liberty,american,newyork"},gear:{name:"Gear",unified:"2699",variations:["2699-FE0F"],sheet_x:1,sheet_y:45,short_names:["gear"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"gear,cog"},drooling_face:{name:"Drooling Face",unified:"1F924",sheet_x:28,sheet_y:30,short_names:["drooling_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"drooling,face"},"flag-ci":{name:"Regional Indicator Symbol Letters CI",unified:"1F1E8-1F1EE",sheet_x:32,sheet_y:6,short_names:["flag-ci"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ci,regional,indicator,symbol,letters"},"tiger2":{name:"Tiger",unified:"1F405",sheet_x:10,sheet_y:30,short_names:["tiger2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tiger2,tiger,animal,nature,roar"},sob:{name:"Loudly Crying Face",unified:"1F62D",sheet_x:23,sheet_y:29,short_names:["sob"],text:":'(",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sob,loudly,crying,face,cry,tears,sad,upset,depressed"},"flag-hr":{name:"Regional Indicator Symbol Letters HR",unified:"1F1ED-1F1F7",sheet_x:33,sheet_y:15,short_names:["flag-hr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hr,regional,indicator,symbol,letters"},fountain:{name:"Fountain",unified:"26F2",variations:["26F2-FE0F"],sheet_x:2,sheet_y:19,short_names:["fountain"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fountain,photo,summer,water,fresh"},water_buffalo:{name:"Water Buffalo",unified:"1F403",sheet_x:10,sheet_y:28,short_names:["water_buffalo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"water,buffalo,animal,nature,ox,cow"},cake:{name:"Shortcake",unified:"1F370",sheet_x:6,sheet_y:45,short_names:["cake"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cake,shortcake,food,dessert"},"u7981":{name:"Squared Cjk Unified Ideograph-7981",unified:"1F232",sheet_x:4,sheet_y:22,short_names:["u7981"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u7981,squared,cjk,unified,ideograph,7981,kanji,japanese,chinese,forbidden,limit,restricted,red-square"},reminder_ribbon:{name:"Reminder Ribbon",unified:"1F397",sheet_x:7,sheet_y:38,short_names:["reminder_ribbon"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"reminder,ribbon,sports,cause,support,awareness"},chains:{name:"Chains",unified:"26D3",sheet_x:2,sheet_y:13,short_names:["chains"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"chains,lock,arrest"},"flag-cu":{name:"Regional Indicator Symbol Letters CU",unified:"1F1E8-1F1FA",sheet_x:32,sheet_y:14,short_names:["flag-cu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cu,regional,indicator,symbol,letters"},sweat:{name:"Face with Cold Sweat",unified:"1F613",sheet_x:23,sheet_y:3,short_names:["sweat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sweat,face,with,cold,hot,sad,tired,exercise"},gun:{name:"Pistol",unified:"1F52B",sheet_x:20,sheet_y:8,short_names:["gun"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gun,pistol,violence,weapon,revolver"},a:{name:"Negative Squared Latin Capital Letter a",unified:"1F170",variations:["1F170-FE0F"],sheet_x:4,sheet_y:3,short_names:["a"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"a,negative,squared,latin,capital,letter,red-square,alphabet"},ox:{name:"Ox",unified:"1F402",sheet_x:10,sheet_y:27,short_names:["ox"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ox,animal,cow,beef"},tokyo_tower:{name:"Tokyo Tower",unified:"1F5FC",sheet_x:22,sheet_y:29,short_names:["tokyo_tower"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tokyo,tower,photo,japanese"},birthday:{name:"Birthday Cake",unified:"1F382",sheet_x:7,sheet_y:14,short_names:["birthday"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"birthday,cake,food,dessert"},ticket:{name:"Ticket",unified:"1F3AB",sheet_x:8,sheet_y:6,short_names:["ticket"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ticket,event,concert,pass"},sleepy:{name:"Sleepy Face",unified:"1F62A",sheet_x:23,sheet_y:26,short_names:["sleepy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sleepy,face,tired,rest,nap"},european_castle:{name:"European Castle",unified:"1F3F0",sheet_x:10,sheet_y:12,short_names:["european_castle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"european,castle,building,royalty,history"},custard:{name:"Custard",unified:"1F36E",sheet_x:6,sheet_y:43,short_names:["custard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"custard,dessert,food"},"cow2":{name:"Cow",unified:"1F404",sheet_x:10,sheet_y:29,short_names:["cow2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cow2,cow,beef,ox,animal,nature,moo,milk"},bomb:{name:"Bomb",unified:"1F4A3",sheet_x:17,sheet_y:15,short_names:["bomb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bomb,boom,explode,explosion,terrorism"},"flag-cw":{name:"Regional Indicator Symbol Letters CW",unified:"1F1E8-1F1FC",sheet_x:32,sheet_y:16,short_names:["flag-cw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cw,regional,indicator,symbol,letters"},b:{name:"Negative Squared Latin Capital Letter B",unified:"1F171",variations:["1F171-FE0F"],sheet_x:4,sheet_y:4,short_names:["b"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"b,negative,squared,latin,capital,letter,red-square,alphabet"},admission_tickets:{name:"Admission Tickets",unified:"1F39F",sheet_x:7,sheet_y:43,short_names:["admission_tickets"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"admission,tickets"},ab:{name:"Negative Squared Ab",unified:"1F18E",sheet_x:4,sheet_y:7,short_names:["ab"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ab,negative,squared,red-square,alphabet"},sleeping:{name:"Sleeping Face",unified:"1F634",sheet_x:23,sheet_y:36,short_names:["sleeping"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sleeping,face,tired,sleepy,night,zzz"},deer:{name:"Deer",unified:"1F98C",sheet_x:30,sheet_y:41,short_names:["deer"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"deer,animal,nature,horns,venison"},"flag-cy":{name:"Regional Indicator Symbol Letters CY",unified:"1F1E8-1F1FE",sheet_x:32,sheet_y:18,short_names:["flag-cy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cy,regional,indicator,symbol,letters"},lollipop:{name:"Lollipop",unified:"1F36D",sheet_x:6,sheet_y:42,short_names:["lollipop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lollipop,food,snack,candy,sweet"},japanese_castle:{name:"Japanese Castle",unified:"1F3EF",sheet_x:10,sheet_y:11,short_names:["japanese_castle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"japanese,castle,photo,building"},hocho:{name:"Hocho",unified:"1F52A",sheet_x:20,sheet_y:7,short_names:["hocho","knife"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hocho,knife,blade,cutlery,kitchen,weapon"},circus_tent:{name:"Circus Tent",unified:"1F3AA",sheet_x:8,sheet_y:5,short_names:["circus_tent"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"circus,tent,festival,carnival,party"},cl:{name:"Squared Cl",unified:"1F191",sheet_x:4,sheet_y:8,short_names:["cl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cl,squared,alphabet,words,red-square"},candy:{name:"Candy",unified:"1F36C",sheet_x:6,sheet_y:41,short_names:["candy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"candy,snack,dessert,sweet,lolly"},"flag-cz":{name:"Regional Indicator Symbol Letters CZ",unified:"1F1E8-1F1FF",sheet_x:32,sheet_y:19,short_names:["flag-cz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cz,regional,indicator,symbol,letters"},stadium:{name:"Stadium",unified:"1F3DF",sheet_x:9,sheet_y:44,short_names:["stadium"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"stadium,photo,place,sports,concert,venue"},dagger_knife:{name:"Dagger Knife",unified:"1F5E1",sheet_x:22,sheet_y:22,short_names:["dagger_knife"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"dagger,knife"},face_with_rolling_eyes:{name:"Face with Rolling Eyes",unified:"1F644",sheet_x:24,sheet_y:3,short_names:["face_with_rolling_eyes"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"face,with,rolling,eyes"},juggling:{name:"Juggling",unified:"1F939",sheet_x:29,sheet_y:32,short_names:["juggling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB",image:"1f939-1f3fb.png",sheet_x:29,sheet_y:33,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC",image:"1f939-1f3fc.png",sheet_x:29,sheet_y:34,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD",image:"1f939-1f3fd.png",sheet_x:29,sheet_y:35,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE",image:"1f939-1f3fe.png",sheet_x:29,sheet_y:36,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF",image:"1f939-1f3ff.png",sheet_x:29,sheet_y:37,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"juggling"},dromedary_camel:{name:"Dromedary Camel",unified:"1F42A",sheet_x:11,sheet_y:18,short_names:["dromedary_camel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dromedary,camel,animal,hot,desert,hump"},"woman-juggling":{name:"Woman Juggling",unified:"1F939-200D-2640-FE0F",sheet_x:47,sheet_y:36,short_names:["woman-juggling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB-200D-2640-FE0F",image:"1f939-1f3fb-200d-2640-fe0f.png",sheet_x:47,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC-200D-2640-FE0F",image:"1f939-1f3fc-200d-2640-fe0f.png",sheet_x:47,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD-200D-2640-FE0F",image:"1f939-1f3fd-200d-2640-fe0f.png",sheet_x:47,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE-200D-2640-FE0F",image:"1f939-1f3fe-200d-2640-fe0f.png",sheet_x:47,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF-200D-2640-FE0F",image:"1f939-1f3ff-200d-2640-fe0f.png",sheet_x:47,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,juggling"},"o2":{name:"Negative Squared Latin Capital Letter O",unified:"1F17E",variations:["1F17E-FE0F"],sheet_x:4,sheet_y:5,short_names:["o2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"o2,negative,squared,latin,capital,letter,o,alphabet,red-square"},"flag-dk":{name:"Regional Indicator Symbol Letters DK",unified:"1F1E9-1F1F0",sheet_x:32,sheet_y:23,short_names:["flag-dk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dk,regional,indicator,symbol,letters"},camel:{name:"Bactrian Camel",unified:"1F42B",sheet_x:11,sheet_y:19,short_names:["camel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"camel,bactrian,animal,nature,hot,desert,hump"},ferris_wheel:{name:"Ferris Wheel",unified:"1F3A1",sheet_x:7,sheet_y:45,short_names:["ferris_wheel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ferris,wheel,photo,carnival,londoneye"},thinking_face:{name:"Thinking Face",unified:"1F914",sheet_x:27,sheet_y:34,short_names:["thinking_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"thinking,face"},crossed_swords:{name:"Crossed Swords",unified:"2694",variations:["2694-FE0F"],sheet_x:1,sheet_y:41,short_names:["crossed_swords"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"crossed,swords,weapon"},chocolate_bar:{name:"Chocolate Bar",unified:"1F36B",sheet_x:6,sheet_y:40,short_names:["chocolate_bar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chocolate,bar,food,snack,dessert,sweet"},"man-juggling":{name:"Man Juggling",unified:"1F939-200D-2642-FE0F",sheet_x:47,sheet_y:42,short_names:["man-juggling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB-200D-2642-FE0F",image:"1f939-1f3fb-200d-2642-fe0f.png",sheet_x:47,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC-200D-2642-FE0F",image:"1f939-1f3fc-200d-2642-fe0f.png",sheet_x:47,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD-200D-2642-FE0F",image:"1f939-1f3fd-200d-2642-fe0f.png",sheet_x:47,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE-200D-2642-FE0F",image:"1f939-1f3fe-200d-2642-fe0f.png",sheet_x:47,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF-200D-2642-FE0F",image:"1f939-1f3ff-200d-2642-fe0f.png",sheet_x:47,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,juggling"},roller_coaster:{name:"Roller Coaster",unified:"1F3A2",sheet_x:7,sheet_y:46,short_names:["roller_coaster"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"roller,coaster,carnival,playground,photo,fun"},sos:{name:"Squared Sos",unified:"1F198",sheet_x:4,sheet_y:15,short_names:["sos"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sos,squared,help,red-square,words,emergency,911"},shield:{name:"Shield",unified:"1F6E1",sheet_x:27,sheet_y:17,short_names:["shield"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shield,protection,security"},"flag-dj":{name:"Regional Indicator Symbol Letters DJ",unified:"1F1E9-1F1EF",sheet_x:32,sheet_y:22,short_names:["flag-dj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dj,regional,indicator,symbol,letters"},popcorn:{name:"Popcorn",unified:"1F37F",sheet_x:7,sheet_y:11,short_names:["popcorn"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"popcorn,food,movie theater,films,snack"},elephant:{name:"Elephant",unified:"1F418",sheet_x:11,sheet_y:0,short_names:["elephant"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"elephant,animal,nature,nose,th,circus"},lying_face:{name:"Lying Face",unified:"1F925",sheet_x:28,sheet_y:31,short_names:["lying_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lying,face,lie,pinocchio"},carousel_horse:{name:"Carousel Horse",unified:"1F3A0",sheet_x:7,sheet_y:44,short_names:["carousel_horse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"carousel,horse,photo,carnival"},performing_arts:{name:"Performing Arts",unified:"1F3AD",sheet_x:8,sheet_y:8,short_names:["performing_arts"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"performing,arts,acting,theater,drama"},x:{name:"Cross Mark",unified:"274C",sheet_x:3,sheet_y:23,short_names:["x"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"x,cross,mark,no,delete,remove,cancel"},rhinoceros:{name:"Rhinoceros",unified:"1F98F",sheet_x:30,sheet_y:44,short_names:["rhinoceros"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"rhinoceros,animal,nature,horn"},grimacing:{name:"Grimacing Face",unified:"1F62C",sheet_x:23,sheet_y:28,short_names:["grimacing"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grimacing,face,grimace,teeth"},doughnut:{name:"Doughnut",unified:"1F369",sheet_x:6,sheet_y:38,short_names:["doughnut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"doughnut,food,dessert,snack,sweet,donut"},"flag-dm":{name:"Regional Indicator Symbol Letters DM",unified:"1F1E9-1F1F2",sheet_x:32,sheet_y:24,short_names:["flag-dm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dm,regional,indicator,symbol,letters"},smoking:{name:"Smoking Symbol",unified:"1F6AC",sheet_x:26,sheet_y:6,short_names:["smoking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smoking,symbol,kills,tobacco,cigarette,joint,smoke"},o:{name:"Heavy Large Circle",unified:"2B55",variations:["2B55-FE0F"],sheet_x:3,sheet_y:45,short_names:["o"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"o,heavy,large,circle,round"},umbrella_on_ground:{name:"Umbrella on Ground",unified:"26F1",sheet_x:2,sheet_y:18,short_names:["umbrella_on_ground"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"umbrella,on,ground"},"flag-do":{name:"Regional Indicator Symbol Letters DO",unified:"1F1E9-1F1F4",sheet_x:32,sheet_y:25,short_names:["flag-do"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,do,regional,indicator,symbol,letters"},coffin:{name:"Coffin",unified:"26B0",variations:["26B0-FE0F"],sheet_x:2,sheet_y:3,short_names:["coffin"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"coffin,vampire,dead,die,death,rip,graveyard,cemetery"},cookie:{name:"Cookie",unified:"1F36A",sheet_x:6,sheet_y:39,short_names:["cookie"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cookie,food,snack,oreo,chocolate,sweet,dessert"},gorilla:{name:"Gorilla",unified:"1F98D",sheet_x:30,sheet_y:42,short_names:["gorilla"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"gorilla,animal,nature,circus"},art:{name:"Artist Palette",unified:"1F3A8",sheet_x:8,sheet_y:3,short_names:["art"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"art,artist,palette,design,paint,draw,colors"},zipper_mouth_face:{name:"Zipper-Mouth Face",unified:"1F910",sheet_x:27,sheet_y:30,short_names:["zipper_mouth_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"zipper,mouth,face,sealed,secret"},octagonal_sign:{name:"Octagonal Sign",unified:"1F6D1",sheet_x:27,sheet_y:14,short_names:["octagonal_sign"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"octagonal,sign"},nauseated_face:{name:"Nauseated Face",unified:"1F922",sheet_x:28,sheet_y:28,short_names:["nauseated_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"nauseated,face,vomit,gross,green,sick,throw up,ill"},beach_with_umbrella:{name:"Beach with Umbrella",unified:"1F3D6",sheet_x:9,sheet_y:35,short_names:["beach_with_umbrella"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"beach,with,umbrella"},"flag-ec":{name:"Regional Indicator Symbol Letters EC",unified:"1F1EA-1F1E8",sheet_x:32,sheet_y:28,short_names:["flag-ec"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ec,regional,indicator,symbol,letters"},funeral_urn:{name:"Funeral Urn",unified:"26B1",variations:["26B1-FE0F"],sheet_x:2,sheet_y:4,short_names:["funeral_urn"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"funeral,urn,dead,die,death,rip,ashes"},glass_of_milk:{name:"Glass of Milk",unified:"1F95B",sheet_x:30,sheet_y:25,short_names:["glass_of_milk"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"glass,of,milk"},racehorse:{name:"Horse",unified:"1F40E",sheet_x:10,sheet_y:39,short_names:["racehorse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"racehorse,horse,animal,gamble,luck"},clapper:{name:"Clapper Board",unified:"1F3AC",sheet_x:8,sheet_y:7,short_names:["clapper"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clapper,board,movie,film,record"},amphora:{name:"Amphora",unified:"1F3FA",sheet_x:10,sheet_y:19,short_names:["amphora"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"amphora,vase,jar"},sneezing_face:{name:"Sneezing Face",unified:"1F927",sheet_x:28,sheet_y:38,short_names:["sneezing_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"sneezing,face,gesundheit,sneeze,sick,allergy"},baby_bottle:{name:"Baby Bottle",unified:"1F37C",sheet_x:7,sheet_y:8,short_names:["baby_bottle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baby,bottle,food,container,milk"},"pig2":{name:"Pig",unified:"1F416",sheet_x:10,sheet_y:47,short_names:["pig2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pig2,pig,animal,nature"},desert_island:{name:"Desert Island",unified:"1F3DD",sheet_x:9,sheet_y:42,short_names:["desert_island"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"desert,island,photo,tropical,mojito"},microphone:{name:"Microphone",unified:"1F3A4",sheet_x:7,sheet_y:48,short_names:["microphone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"microphone,sound,music,pa"},"flag-eg":{name:"Regional Indicator Symbol Letters EG",unified:"1F1EA-1F1EC",sheet_x:32,sheet_y:30,short_names:["flag-eg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,eg,regional,indicator,symbol,letters"},no_entry:{name:"No Entry",unified:"26D4",variations:["26D4-FE0F"],sheet_x:2,sheet_y:14,short_names:["no_entry"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,entry,limit,security,privacy,bad,denied,stop,circle"},name_badge:{name:"Name Badge",unified:"1F4DB",sheet_x:18,sheet_y:27,short_names:["name_badge"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"name,badge,fire,forbid"},mask:{name:"Face with Medical Mask",unified:"1F637",sheet_x:23,sheet_y:39,short_names:["mask"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mask,face,with,medical,sick,ill,disease"},coffee:{name:"Hot Beverage",unified:"2615",variations:["2615-FE0F"],sheet_x:1,sheet_y:0,short_names:["coffee"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"coffee,hot,beverage,caffeine,latte,espresso"},mountain:{name:"Mountain",unified:"26F0",sheet_x:2,sheet_y:17,short_names:["mountain"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"mountain,photo,nature,environment"},headphones:{name:"Headphone",unified:"1F3A7",sheet_x:8,sheet_y:2,short_names:["headphones"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"headphones,headphone,music,score,gadgets"},goat:{name:"Goat",unified:"1F410",sheet_x:10,sheet_y:41,short_names:["goat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"goat,animal,nature"},"flag-sv":{name:"Regional Indicator Symbol Letters SV",unified:"1F1F8-1F1FB",sheet_x:35,sheet_y:30,short_names:["flag-sv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sv,regional,indicator,symbol,letters"},crystal_ball:{name:"Crystal Ball",unified:"1F52E",sheet_x:20,sheet_y:11,short_names:["crystal_ball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crystal,ball,disco,party,magic,circus,fortune_teller"},prayer_beads:{name:"Prayer Beads",unified:"1F4FF",sheet_x:19,sheet_y:13,short_names:["prayer_beads"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"prayer,beads,dhikr,religious"},"flag-gq":{name:"Regional Indicator Symbol Letters GQ",unified:"1F1EC-1F1F6",sheet_x:33,sheet_y:5,short_names:["flag-gq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gq,regional,indicator,symbol,letters"},musical_score:{name:"Musical Score",unified:"1F3BC",sheet_x:8,sheet_y:23,short_names:["musical_score"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"musical,score,treble,clef"},ram:{name:"Ram",unified:"1F40F",sheet_x:10,sheet_y:40,short_names:["ram"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ram,animal,sheep,nature"},tea:{name:"Teacup Without Handle",unified:"1F375",sheet_x:7,sheet_y:1,short_names:["tea"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tea,teacup,without,handle,drink,bowl,breakfast,green,british"},face_with_thermometer:{name:"Face with Thermometer",unified:"1F912",sheet_x:27,sheet_y:32,short_names:["face_with_thermometer"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"face,with,thermometer,sick,temperature,cold,fever"},snow_capped_mountain:{name:"Snow Capped Mountain",unified:"1F3D4",sheet_x:9,sheet_y:33,short_names:["snow_capped_mountain"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"snow,capped,mountain"},no_entry_sign:{name:"No Entry Sign",unified:"1F6AB",sheet_x:26,sheet_y:5,short_names:["no_entry_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,entry,sign,forbid,stop,limit,denied,disallow,circle"},barber:{name:"Barber Pole",unified:"1F488",sheet_x:16,sheet_y:37,short_names:["barber"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"barber,pole,hair,salon,style"},face_with_head_bandage:{name:"Face with Head-Bandage",unified:"1F915",sheet_x:27,sheet_y:35,short_names:["face_with_head_bandage"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"face,with,head,bandage,injured,clumsy,hurt"},mount_fuji:{name:"Mount Fuji",unified:"1F5FB",sheet_x:22,sheet_y:28,short_names:["mount_fuji"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mount,fuji,photo,mountain,nature,japanese"},sheep:{name:"Sheep",unified:"1F411",sheet_x:10,sheet_y:42,short_names:["sheep"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sheep,animal,nature,wool,shipit"},"flag-er":{name:"Regional Indicator Symbol Letters ER",unified:"1F1EA-1F1F7",sheet_x:32,sheet_y:32,short_names:["flag-er"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,er,regional,indicator,symbol,letters"},sake:{name:"Sake Bottle and Cup",unified:"1F376",sheet_x:7,sheet_y:2,short_names:["sake"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sake,bottle,and,cup,wine,drink,drunk,beverage,japanese,alcohol,booze"},musical_keyboard:{name:"Musical Keyboard",unified:"1F3B9",sheet_x:8,sheet_y:20,short_names:["musical_keyboard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"musical,keyboard,piano,instrument"},smiling_imp:{name:"Smiling Face with Horns",unified:"1F608",sheet_x:22,sheet_y:41,short_names:["smiling_imp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smiling,imp,face,with,horns,devil"},"dog2":{name:"Dog",unified:"1F415",sheet_x:10,sheet_y:46,short_names:["dog2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dog2,dog,animal,nature,friend,doge,pet,faithful"},beer:{name:"Beer Mug",unified:"1F37A",sheet_x:7,sheet_y:6,short_names:["beer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"beer,mug,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze"},alembic:{name:"Alembic",unified:"2697",variations:["2697-FE0F"],sheet_x:1,sheet_y:44,short_names:["alembic"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"alembic,distilling,science,experiment"},"flag-ee":{name:"Regional Indicator Symbol Letters EE",unified:"1F1EA-1F1EA",sheet_x:32,sheet_y:29,short_names:["flag-ee"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ee,regional,indicator,symbol,letters"},volcano:{name:"Volcano",unified:"1F30B",sheet_x:4,sheet_y:44,short_names:["volcano"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"volcano,photo,nature,disaster"},drum_with_drumsticks:{name:"Drum with Drumsticks",unified:"1F941",sheet_x:30,sheet_y:4,short_names:["drum_with_drumsticks"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"drum,with,drumsticks"},anger:{name:"Anger Symbol",unified:"1F4A2",sheet_x:17,sheet_y:14,short_names:["anger"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"anger,symbol,angry,mad"},saxophone:{name:"Saxophone",unified:"1F3B7",sheet_x:8,sheet_y:18,short_names:["saxophone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"saxophone,music,instrument,jazz,blues"},poodle:{name:"Poodle",unified:"1F429",sheet_x:11,sheet_y:17,short_names:["poodle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"poodle,dog,animal,101,nature,pet"},hotsprings:{name:"Hot Springs",unified:"2668",variations:["2668-FE0F"],sheet_x:1,sheet_y:36,short_names:["hotsprings"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hotsprings,hot,springs,bath,warm,relax"},"flag-et":{name:"Regional Indicator Symbol Letters ET",unified:"1F1EA-1F1F9",sheet_x:32,sheet_y:34,short_names:["flag-et"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,et,regional,indicator,symbol,letters"},desert:{name:"Desert",unified:"1F3DC",sheet_x:9,sheet_y:41,short_names:["desert"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"desert,photo,warm,saharah"},beers:{name:"Clinking Beer Mugs",unified:"1F37B",sheet_x:7,sheet_y:7,short_names:["beers"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"beers,clinking,beer,mugs,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze"},imp:{name:"Imp",unified:"1F47F",sheet_x:15,sheet_y:47,short_names:["imp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"imp,devil,angry,horns"},telescope:{name:"Telescope",unified:"1F52D",sheet_x:20,sheet_y:10,short_names:["telescope"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"telescope,stars,space,zoom"},japanese_ogre:{name:"Japanese Ogre",unified:"1F479",sheet_x:15,sheet_y:36,short_names:["japanese_ogre"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"japanese,ogre,monster,red,mask,halloween,scary,creepy,devil,demon"},no_pedestrians:{name:"No Pedestrians",unified:"1F6B7",sheet_x:26,sheet_y:32,short_names:["no_pedestrians"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,pedestrians,rules,crossing,walking,circle"},clinking_glasses:{name:"Clinking Glasses",unified:"1F942",sheet_x:30,sheet_y:5,short_names:["clinking_glasses"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"clinking,glasses,beverage,drink,party,alcohol,celebrate,cheers"},camping:{name:"Camping",unified:"1F3D5",sheet_x:9,sheet_y:34,short_names:["camping"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"camping,photo,outdoors,tent"},"cat2":{name:"Cat",unified:"1F408",sheet_x:10,sheet_y:33,short_names:["cat2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cat2,cat,animal,meow,pet,cats"},trumpet:{name:"Trumpet",unified:"1F3BA",sheet_x:8,sheet_y:21,short_names:["trumpet"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"trumpet,music,brass"},"flag-eu":{name:"Regional Indicator Symbol Letters EU",unified:"1F1EA-1F1FA",sheet_x:32,sheet_y:35,short_names:["flag-eu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,eu,regional,indicator,symbol,letters"},microscope:{name:"Microscope",unified:"1F52C",sheet_x:20,sheet_y:9,short_names:["microscope"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"microscope,laboratory,experiment,zoomin,science,study"},wine_glass:{name:"Wine Glass",unified:"1F377",sheet_x:7,sheet_y:3,short_names:["wine_glass"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wine,glass,drink,beverage,drunk,alcohol,booze"},japanese_goblin:{name:"Japanese Goblin",unified:"1F47A",sheet_x:15,sheet_y:37,short_names:["japanese_goblin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"japanese,goblin,red,evil,mask,monster,scary,creepy"},tent:{name:"Tent",unified:"26FA",variations:["26FA-FE0F"],sheet_x:2,sheet_y:31,short_names:["tent"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tent,photo,camping,outdoors"},rooster:{name:"Rooster",unified:"1F413",sheet_x:10,sheet_y:44,short_names:["rooster"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rooster,animal,nature,chicken"},do_not_litter:{name:"Do Not Litter Symbol",unified:"1F6AF",sheet_x:26,sheet_y:9,short_names:["do_not_litter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"do,not,litter,symbol,trash,bin,garbage,circle"},hole:{name:"Hole",unified:"1F573",sheet_x:21,sheet_y:10,short_names:["hole"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"hole,embarrassing"},"flag-fk":{name:"Regional Indicator Symbol Letters FK",unified:"1F1EB-1F1F0",sheet_x:32,sheet_y:38,short_names:["flag-fk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fk,regional,indicator,symbol,letters"},guitar:{name:"Guitar",unified:"1F3B8",sheet_x:8,sheet_y:19,short_names:["guitar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"guitar,music,instrument"},tumbler_glass:{name:"Tumbler Glass",unified:"1F943",sheet_x:30,sheet_y:6,short_names:["tumbler_glass"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"tumbler,glass,drink,beverage,drunk,alcohol,liquor,booze,bourbon,scotch,whisky,shot"},"flag-fo":{name:"Regional Indicator Symbol Letters FO",unified:"1F1EB-1F1F4",sheet_x:32,sheet_y:40,short_names:["flag-fo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fo,regional,indicator,symbol,letters"},no_bicycles:{name:"No Bicycles",unified:"1F6B3",sheet_x:26,sheet_y:13,short_names:["no_bicycles"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,bicycles,cyclist,prohibited,circle"},violin:{name:"Violin",unified:"1F3BB",sheet_x:8,sheet_y:22,short_names:["violin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"violin,music,instrument,orchestra,symphony"},hankey:{name:"Pile of Poo",unified:"1F4A9",sheet_x:17,sheet_y:21,short_names:["hankey","poop","shit"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hankey,poop,shit,pile,of,poo"},pill:{name:"Pill",unified:"1F48A",sheet_x:16,sheet_y:39,short_names:["pill"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pill,health,medicine,doctor,pharmacy,drug"},turkey:{name:"Turkey",unified:"1F983",sheet_x:30,sheet_y:32,short_names:["turkey"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"turkey,animal,bird"},railway_track:{name:"Railway Track",unified:"1F6E4",sheet_x:27,sheet_y:20,short_names:["railway_track"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"railway,track,train,transportation"},cocktail:{name:"Cocktail Glass",unified:"1F378",sheet_x:7,sheet_y:4,short_names:["cocktail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cocktail,glass,drink,drunk,alcohol,beverage,booze,mojito"},game_die:{name:"Game Die",unified:"1F3B2",sheet_x:8,sheet_y:13,short_names:["game_die"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"game,die,dice,random,tabletop,play,luck"},dove_of_peace:{name:"Dove of Peace",unified:"1F54A",sheet_x:20,sheet_y:28,short_names:["dove_of_peace"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"dove,of,peace"},motorway:{name:"Motorway",unified:"1F6E3",sheet_x:27,sheet_y:19,short_names:["motorway"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"motorway,road,cupertino,interstate,highway"},"flag-fj":{name:"Regional Indicator Symbol Letters FJ",unified:"1F1EB-1F1EF",sheet_x:32,sheet_y:37,short_names:["flag-fj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fj,regional,indicator,symbol,letters"},"non-potable_water":{name:"Non-Potable Water Symbol",unified:"1F6B1",sheet_x:26,sheet_y:11,short_names:["non-potable_water"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"non,potable,water,symbol,drink,faucet,tap,circle"},ghost:{name:"Ghost",unified:"1F47B",sheet_x:15,sheet_y:38,short_names:["ghost"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ghost,halloween,spooky,scary"},syringe:{name:"Syringe",unified:"1F489",sheet_x:16,sheet_y:38,short_names:["syringe"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"syringe,health,hospital,drugs,blood,medicine,needle,doctor,nurse"},building_construction:{name:"Building Construction",unified:"1F3D7",sheet_x:9,sheet_y:36,short_names:["building_construction"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"building,construction,wip,working,progress"},"flag-fi":{name:"Regional Indicator Symbol Letters FI",unified:"1F1EB-1F1EE",sheet_x:32,sheet_y:36,short_names:["flag-fi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fi,regional,indicator,symbol,letters"},tropical_drink:{name:"Tropical Drink",unified:"1F379",sheet_x:7,sheet_y:5,short_names:["tropical_drink"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tropical,drink,beverage,cocktail,summer,beach,alcohol,booze,mojito"},thermometer:{name:"Thermometer",unified:"1F321",sheet_x:5,sheet_y:17,short_names:["thermometer"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"thermometer,weather,temperature,hot,cold"},skull:{name:"Skull",unified:"1F480",sheet_x:15,sheet_y:48,short_names:["skull"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"skull,dead,skeleton,creepy"},dart:{name:"Direct Hit",unified:"1F3AF",sheet_x:8,sheet_y:10,short_names:["dart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dart,direct,hit,game,play,bar"},"rabbit2":{name:"Rabbit",unified:"1F407",sheet_x:10,sheet_y:32,short_names:["rabbit2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rabbit2,rabbit,animal,nature,pet,magic,spring"},underage:{name:"No One Under Eighteen Symbol",unified:"1F51E",sheet_x:19,sheet_y:44,short_names:["underage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"underage,no,one,under,eighteen,symbol,18,drink,pub,night,minor,circle"},"flag-fr":{name:"Regional Indicator Symbol Letters FR",unified:"1F1EB-1F1F7",sheet_x:32,sheet_y:41,short_names:["flag-fr","fr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fr,regional,indicator,symbol,letters"},factory:{name:"Factory",unified:"1F3ED",sheet_x:10,sheet_y:9,short_names:["factory"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"factory,building,industry,pollution,smoke"},"mouse2":{name:"Mouse",unified:"1F401",sheet_x:10,sheet_y:26,short_names:["mouse2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mouse2,mouse,animal,nature,rodent"},toilet:{name:"Toilet",unified:"1F6BD",sheet_x:26,sheet_y:38,short_names:["toilet"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"toilet,restroom,wc,washroom,bathroom,potty"},no_mobile_phones:{name:"No Mobile Phones",unified:"1F4F5",sheet_x:19,sheet_y:4,short_names:["no_mobile_phones"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,mobile,phones,iphone,mute,circle"},bowling:{name:"Bowling",unified:"1F3B3",sheet_x:8,sheet_y:14,short_names:["bowling"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bowling,sports,fun,play"},champagne:{name:"Bottle with Popping Cork",unified:"1F37E",sheet_x:7,sheet_y:10,short_names:["champagne"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"champagne,bottle,with,popping,cork,drink,wine,celebration"},skull_and_crossbones:{name:"Skull and Crossbones",unified:"2620",variations:["2620-FE0F"],sheet_x:1,sheet_y:8,short_names:["skull_and_crossbones"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skull,and,crossbones,poison,danger,deadly,scary"},spoon:{name:"Spoon",unified:"1F944",sheet_x:30,sheet_y:7,short_names:["spoon"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"spoon,cutlery,kitchen,tableware"},video_game:{name:"Video Game",unified:"1F3AE",sheet_x:8,sheet_y:9,short_names:["video_game"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"video,game,play,console,ps4,controller"},no_smoking:{name:"No Smoking Symbol",unified:"1F6AD",sheet_x:26,sheet_y:7,short_names:["no_smoking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,smoking,symbol,cigarette,blue-square,smell,smoke"},"flag-gf":{name:"Regional Indicator Symbol Letters GF",unified:"1F1EC-1F1EB",sheet_x:32,sheet_y:46,short_names:["flag-gf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gf,regional,indicator,symbol,letters"},alien:{name:"Extraterrestrial Alien",unified:"1F47D",sheet_x:15,sheet_y:45,short_names:["alien"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"alien,extraterrestrial,ufo,paul,weird,outer_space"},house:{name:"House Building",unified:"1F3E0",sheet_x:9,sheet_y:45,short_names:["house"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"house,building,home"},rat:{name:"Rat",unified:"1F400",sheet_x:10,sheet_y:25,short_names:["rat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rat,animal,mouse,rodent"},potable_water:{name:"Potable Water Symbol",unified:"1F6B0",sheet_x:26,sheet_y:10,short_names:["potable_water"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"potable,water,symbol,blue-square,liquid,restroom,cleaning,faucet"},chipmunk:{name:"Chipmunk",unified:"1F43F",sheet_x:11,sheet_y:39,short_names:["chipmunk"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"chipmunk,animal,nature,rodent,squirrel"},exclamation:{name:"Heavy Exclamation Mark Symbol",unified:"2757",variations:["2757-FE0F"],sheet_x:3,sheet_y:28,short_names:["exclamation","heavy_exclamation_mark"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"exclamation,heavy,mark,symbol,heavy_exclamation_mark,danger,surprise,punctuation,wow,warning"},"flag-pf":{name:"Regional Indicator Symbol Letters PF",unified:"1F1F5-1F1EB",sheet_x:34,sheet_y:44,short_names:["flag-pf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pf,regional,indicator,symbol,letters"},space_invader:{name:"Alien Monster",unified:"1F47E",sheet_x:15,sheet_y:46,short_names:["space_invader"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"space,invader,alien,monster,game,arcade,play"},slot_machine:{name:"Slot Machine",unified:"1F3B0",sheet_x:8,sheet_y:11,short_names:["slot_machine"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"slot,machine,bet,gamble,vegas,fruit machine,luck,casino"},shower:{name:"Shower",unified:"1F6BF",sheet_x:26,sheet_y:40,short_names:["shower"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"shower,clean,water,bathroom"},fork_and_knife:{name:"Fork and Knife",unified:"1F374",sheet_x:7,sheet_y:0,short_names:["fork_and_knife"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fork,and,knife,cutlery,kitchen"},house_with_garden:{name:"House with Garden",unified:"1F3E1",sheet_x:9,sheet_y:46,short_names:["house_with_garden"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"house,with,garden,home,plant,nature"},feet:{name:"Paw Prints",unified:"1F43E",sheet_x:11,sheet_y:38,short_names:["feet","paw_prints"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"feet,paw,prints"},grey_exclamation:{name:"White Exclamation Mark Ornament",unified:"2755",sheet_x:3,sheet_y:27,short_names:["grey_exclamation"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grey,exclamation,white,mark,ornament,surprise,punctuation,gray,wow,warning"},"man-bouncing-ball":{name:"Man Bouncing Ball",unified:"26F9-FE0F-200D-2642-FE0F",sheet_x:48,sheet_y:31,short_names:["man-bouncing-ball"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB-200D-2642-FE0F",image:"26f9-1f3fb-200d-2642-fe0f.png",sheet_x:48,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC-200D-2642-FE0F",image:"26f9-1f3fc-200d-2642-fe0f.png",sheet_x:48,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD-200D-2642-FE0F",image:"26f9-1f3fd-200d-2642-fe0f.png",sheet_x:48,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE-200D-2642-FE0F",image:"26f9-1f3fe-200d-2642-fe0f.png",sheet_x:48,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF-200D-2642-FE0F",image:"26f9-1f3ff-200d-2642-fe0f.png",sheet_x:48,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"26F9",search:"man,bouncing,ball"},house_buildings:{name:"House Buildings",unified:"1F3D8",sheet_x:9,sheet_y:37,short_names:["house_buildings"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"house,buildings"},knife_fork_plate:{name:"Fork and Knife with Plate",unified:"1F37D",sheet_x:7,sheet_y:9,short_names:["knife_fork_plate"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"knife,fork,plate,and,with"},robot_face:{name:"Robot Face",unified:"1F916",sheet_x:27,sheet_y:36,short_names:["robot_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"robot,face"},bathtub:{name:"Bathtub",unified:"1F6C1",sheet_x:26,sheet_y:47,short_names:["bathtub"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bathtub,clean,shower,bathroom"},"flag-tf":{name:"Regional Indicator Symbol Letters TF",unified:"1F1F9-1F1EB",sheet_x:35,sheet_y:37,short_names:["flag-tf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tf,regional,indicator,symbol,letters"},"flag-ga":{name:"Regional Indicator Symbol Letters GA",unified:"1F1EC-1F1E6",sheet_x:32,sheet_y:42,short_names:["flag-ga"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ga,regional,indicator,symbol,letters"},"man-lifting-weights":{name:"Man Lifting Weights",unified:"1F3CB-FE0F-200D-2642-FE0F",sheet_x:40,sheet_y:30,short_names:["man-lifting-weights"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB-200D-2642-FE0F",image:"1f3cb-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC-200D-2642-FE0F",image:"1f3cb-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD-200D-2642-FE0F",image:"1f3cb-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE-200D-2642-FE0F",image:"1f3cb-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF-200D-2642-FE0F",image:"1f3cb-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CB",search:"man,lifting,weights"},bath:{name:"Bath",unified:"1F6C0",sheet_x:26,sheet_y:41,short_names:["bath"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6C0-1F3FB",image:"1f6c0-1f3fb.png",sheet_x:26,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6C0-1F3FC",image:"1f6c0-1f3fc.png",sheet_x:26,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6C0-1F3FD",image:"1f6c0-1f3fd.png",sheet_x:26,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6C0-1F3FE",image:"1f6c0-1f3fe.png",sheet_x:26,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6C0-1F3FF",image:"1f6c0-1f3ff.png",sheet_x:26,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"bath,clean,shower,bathroom"},derelict_house_building:{name:"Derelict House Building",unified:"1F3DA",sheet_x:9,sheet_y:39,short_names:["derelict_house_building"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"derelict,house,building"},dragon:{name:"Dragon",unified:"1F409",sheet_x:10,sheet_y:34,short_names:["dragon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dragon,animal,myth,nature,chinese,green"},jack_o_lantern:{name:"Jack-O-Lantern",unified:"1F383",sheet_x:7,sheet_y:15,short_names:["jack_o_lantern"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"jack,o,lantern,halloween,light,pumpkin,creepy,fall"},question:{name:"Black Question Mark Ornament",unified:"2753",sheet_x:3,sheet_y:25,short_names:["question"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"question,black,mark,ornament,doubt,confused"},smiley_cat:{name:"Smiling Cat Face with Open Mouth",unified:"1F63A",sheet_x:23,sheet_y:42,short_names:["smiley_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smiley,cat,smiling,face,with,open,mouth,animal,cats,happy,smile"},dragon_face:{name:"Dragon Face",unified:"1F432",sheet_x:11,sheet_y:26,short_names:["dragon_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dragon,face,animal,myth,nature,chinese,green"},bellhop_bell:{name:"Bellhop Bell",unified:"1F6CE",sheet_x:27,sheet_y:11,short_names:["bellhop_bell"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"bellhop,bell,service"},grey_question:{name:"White Question Mark Ornament",unified:"2754",sheet_x:3,sheet_y:26,short_names:["grey_question"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grey,question,white,mark,ornament,doubts,gray,huh,confused"},office:{name:"Office Building",unified:"1F3E2",sheet_x:9,sheet_y:47,short_names:["office"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"office,building,bureau,work"},"flag-gm":{name:"Regional Indicator Symbol Letters GM",unified:"1F1EC-1F1F2",sheet_x:33,sheet_y:2,short_names:["flag-gm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gm,regional,indicator,symbol,letters"},"man-golfing":{name:"Man Golfing",unified:"1F3CC-FE0F-200D-2642-FE0F",sheet_x:40,sheet_y:42,short_names:["man-golfing"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB-200D-2642-FE0F",image:"1f3cc-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC-200D-2642-FE0F",image:"1f3cc-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD-200D-2642-FE0F",image:"1f3cc-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE-200D-2642-FE0F",image:"1f3cc-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF-200D-2642-FE0F",image:"1f3cc-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CC",search:"man,golfing"},"flag-ge":{name:"Regional Indicator Symbol Letters GE",unified:"1F1EC-1F1EA",sheet_x:32,sheet_y:45,short_names:["flag-ge"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ge,regional,indicator,symbol,letters"},key:{name:"Key",unified:"1F511",sheet_x:19,sheet_y:31,short_names:["key"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"key,lock,door,password"},bangbang:{name:"Double Exclamation Mark",unified:"203C",variations:["203C-FE0F"],sheet_x:0,sheet_y:2,short_names:["bangbang"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bangbang,double,exclamation,mark,surprise"},cactus:{name:"Cactus",unified:"1F335",sheet_x:5,sheet_y:35,short_names:["cactus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cactus,vegetable,plant,nature"},department_store:{name:"Department Store",unified:"1F3EC",sheet_x:10,sheet_y:8,short_names:["department_store"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"department,store,building,shopping,mall"},"man-surfing":{name:"Man Surfing",unified:"1F3C4-200D-2642-FE0F",sheet_x:40,sheet_y:6,short_names:["man-surfing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB-200D-2642-FE0F",image:"1f3c4-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C4-1F3FC-200D-2642-FE0F",image:"1f3c4-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C4-1F3FD-200D-2642-FE0F",image:"1f3c4-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C4-1F3FE-200D-2642-FE0F",image:"1f3c4-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C4-1F3FF-200D-2642-FE0F",image:"1f3c4-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3C4",search:"man,surfing"},smile_cat:{name:"Grinning Cat Face with Smiling Eyes",unified:"1F638",sheet_x:23,sheet_y:40,short_names:["smile_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smile,cat,grinning,face,with,smiling,eyes,animal,cats"},old_key:{name:"Old Key",unified:"1F5DD",sheet_x:22,sheet_y:20,short_names:["old_key"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"old,key,lock,door,password"},"man-swimming":{name:"Man Swimming",unified:"1F3CA-200D-2642-FE0F",sheet_x:40,sheet_y:18,short_names:["man-swimming"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB-200D-2642-FE0F",image:"1f3ca-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CA-1F3FC-200D-2642-FE0F",image:"1f3ca-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CA-1F3FD-200D-2642-FE0F",image:"1f3ca-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CA-1F3FE-200D-2642-FE0F",image:"1f3ca-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CA-1F3FF-200D-2642-FE0F",image:"1f3ca-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CA",search:"man,swimming"},"flag-de":{name:"Regional Indicator Symbol Letters DE",unified:"1F1E9-1F1EA",sheet_x:32,sheet_y:20,short_names:["flag-de","de"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,de,regional,indicator,symbol,letters"},post_office:{name:"Japanese Post Office",unified:"1F3E3",sheet_x:9,sheet_y:48,short_names:["post_office"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"post,office,japanese,building,envelope,communication"},interrobang:{name:"Exclamation Question Mark",unified:"2049",variations:["2049-FE0F"],sheet_x:0,sheet_y:3,short_names:["interrobang"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"interrobang,exclamation,question,mark,wat,punctuation,surprise"},joy_cat:{name:"Cat Face with Tears of Joy",unified:"1F639",sheet_x:23,sheet_y:41,short_names:["joy_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"joy,cat,face,with,tears,of,animal,cats,haha,happy"},christmas_tree:{name:"Christmas Tree",unified:"1F384",sheet_x:7,sheet_y:16,short_names:["christmas_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"christmas,tree,festival,vacation,december,xmas,celebration"},low_brightness:{name:"Low Brightness Symbol",unified:"1F505",sheet_x:19,sheet_y:19,short_names:["low_brightness"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"low,brightness,symbol,sun,afternoon,warm,summer"},evergreen_tree:{name:"Evergreen Tree",unified:"1F332",sheet_x:5,sheet_y:32,short_names:["evergreen_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"evergreen,tree,plant,nature"},heart_eyes_cat:{name:"Smiling Cat Face with Heart-Shaped Eyes",unified:"1F63B",sheet_x:23,sheet_y:43,short_names:["heart_eyes_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heart,eyes,cat,smiling,face,with,shaped,animal,love,like,affection,cats,valentines"},"man-rowing-boat":{name:"Man Rowing Boat",unified:"1F6A3-200D-2642-FE0F",sheet_x:46,sheet_y:7,short_names:["man-rowing-boat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB-200D-2642-FE0F",image:"1f6a3-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC-200D-2642-FE0F",image:"1f6a3-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD-200D-2642-FE0F",image:"1f6a3-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE-200D-2642-FE0F",image:"1f6a3-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF-200D-2642-FE0F",image:"1f6a3-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6A3",search:"man,rowing,boat"},door:{name:"Door",unified:"1F6AA",sheet_x:26,sheet_y:4,short_names:["door"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"door,house,entry,exit"},"flag-gh":{name:"Regional Indicator Symbol Letters GH",unified:"1F1EC-1F1ED",sheet_x:32,sheet_y:48,short_names:["flag-gh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gh,regional,indicator,symbol,letters"},european_post_office:{name:"European Post Office",unified:"1F3E4",sheet_x:10,sheet_y:0,short_names:["european_post_office"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"european,post,office,building,email"},high_brightness:{name:"High Brightness Symbol",unified:"1F506",sheet_x:19,sheet_y:20,short_names:["high_brightness"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"high,brightness,symbol,sun,light"},deciduous_tree:{name:"Deciduous Tree",unified:"1F333",sheet_x:5,sheet_y:33,short_names:["deciduous_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"deciduous,tree,plant,nature"},couch_and_lamp:{name:"Couch and Lamp",unified:"1F6CB",sheet_x:27,sheet_y:3,short_names:["couch_and_lamp"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"couch,and,lamp,read,chill"},"man-biking":{name:"Man Biking",unified:"1F6B4-200D-2642-FE0F",sheet_x:46,sheet_y:19,short_names:["man-biking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB-200D-2642-FE0F",image:"1f6b4-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B4-1F3FC-200D-2642-FE0F",image:"1f6b4-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B4-1F3FD-200D-2642-FE0F",image:"1f6b4-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B4-1F3FE-200D-2642-FE0F",image:"1f6b4-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B4-1F3FF-200D-2642-FE0F",image:"1f6b4-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B4",search:"man,biking"},hospital:{name:"Hospital",unified:"1F3E5",sheet_x:10,sheet_y:1,short_names:["hospital"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hospital,building,health,surgery,doctor"},"flag-gi":{name:"Regional Indicator Symbol Letters GI",unified:"1F1EC-1F1EE",sheet_x:33,sheet_y:0,short_names:["flag-gi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gi,regional,indicator,symbol,letters"},smirk_cat:{name:"Cat Face with Wry Smile",unified:"1F63C",sheet_x:23,sheet_y:44,short_names:["smirk_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smirk,cat,face,with,wry,smile,animal,cats"},bank:{name:"Bank",unified:"1F3E6",sheet_x:10,sheet_y:2,short_names:["bank"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bank,building,money,sales,cash,business,enterprise"},part_alternation_mark:{name:"Part Alternation Mark",unified:"303D",variations:["303D-FE0F"],sheet_x:3,sheet_y:47,short_names:["part_alternation_mark"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"part,alternation,mark,graph,presentation,stats,business,economics,bad"},kissing_cat:{name:"Kissing Cat Face with Closed Eyes",unified:"1F63D",sheet_x:23,sheet_y:45,short_names:["kissing_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kissing,cat,face,with,closed,eyes,animal,cats,kiss"},"man-mountain-biking":{name:"Man Mountain Biking",unified:"1F6B5-200D-2642-FE0F",sheet_x:46,sheet_y:31,short_names:["man-mountain-biking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB-200D-2642-FE0F",image:"1f6b5-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B5-1F3FC-200D-2642-FE0F",image:"1f6b5-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B5-1F3FD-200D-2642-FE0F",image:"1f6b5-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B5-1F3FE-200D-2642-FE0F",image:"1f6b5-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B5-1F3FF-200D-2642-FE0F",image:"1f6b5-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B5",search:"man,mountain,biking"},"flag-gr":{name:"Regional Indicator Symbol Letters GR",unified:"1F1EC-1F1F7",sheet_x:33,sheet_y:6,short_names:["flag-gr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gr,regional,indicator,symbol,letters"},bed:{name:"Bed",unified:"1F6CF",sheet_x:27,sheet_y:12,short_names:["bed"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"bed,sleep,rest"},palm_tree:{name:"Palm Tree",unified:"1F334",sheet_x:5,sheet_y:34,short_names:["palm_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"palm,tree,plant,vegetable,nature,summer,beach,mojito,tropical"},hotel:{name:"Hotel",unified:"1F3E8",sheet_x:10,sheet_y:4,short_names:["hotel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hotel,building,accomodation,checkin"},scream_cat:{name:"Weary Cat Face",unified:"1F640",sheet_x:23,sheet_y:48,short_names:["scream_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scream,cat,weary,face,animal,cats,munch,scared"},"flag-gl":{name:"Regional Indicator Symbol Letters GL",unified:"1F1EC-1F1F1",sheet_x:33,sheet_y:1,short_names:["flag-gl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gl,regional,indicator,symbol,letters"},sleeping_accommodation:{name:"Sleeping Accommodation",unified:"1F6CC",sheet_x:27,sheet_y:4,short_names:["sleeping_accommodation"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6CC-1F3FB",image:"1f6cc-1f3fb.png",sheet_x:27,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F6CC-1F3FC",image:"1f6cc-1f3fc.png",sheet_x:27,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F6CC-1F3FD",image:"1f6cc-1f3fd.png",sheet_x:27,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F6CC-1F3FE",image:"1f6cc-1f3fe.png",sheet_x:27,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F6CC-1F3FF",image:"1f6cc-1f3ff.png",sheet_x:27,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"sleeping,accommodation"},seedling:{name:"Seedling",unified:"1F331",sheet_x:5,sheet_y:31,short_names:["seedling"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"seedling,plant,nature,grass,lawn,spring"},warning:{name:"Warning Sign",unified:"26A0",variations:["26A0-FE0F"],sheet_x:1,sheet_y:48,short_names:["warning"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"warning,sign,exclamation,wip,alert,error,problem,issue"},herb:{name:"Herb",unified:"1F33F",sheet_x:5,sheet_y:45,short_names:["herb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"herb,vegetable,plant,medicine,weed,grass,lawn"},crying_cat_face:{name:"Crying Cat Face",unified:"1F63F",sheet_x:23,sheet_y:47,short_names:["crying_cat_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crying,cat,face,animal,tears,weep,sad,cats,upset,cry"},children_crossing:{name:"Children Crossing",unified:"1F6B8",sheet_x:26,sheet_y:33,short_names:["children_crossing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"children,crossing,school,warning,danger,sign,driving,yellow-diamond"},"flag-gd":{name:"Regional Indicator Symbol Letters GD",unified:"1F1EC-1F1E9",sheet_x:32,sheet_y:44,short_names:["flag-gd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gd,regional,indicator,symbol,letters"},frame_with_picture:{name:"Frame with Picture",unified:"1F5BC",sheet_x:22,sheet_y:12,short_names:["frame_with_picture"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"frame,with,picture"},convenience_store:{name:"Convenience Store",unified:"1F3EA",sheet_x:10,sheet_y:6,short_names:["convenience_store"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"convenience,store,building,shopping,groceries"},school:{name:"School",unified:"1F3EB",sheet_x:10,sheet_y:7,short_names:["school"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"school,building,student,education,learn,teach"},pouting_cat:{name:"Pouting Cat Face",unified:"1F63E",sheet_x:23,sheet_y:46,short_names:["pouting_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pouting,cat,face,animal,cats"},"flag-gp":{name:"Regional Indicator Symbol Letters GP",unified:"1F1EC-1F1F5",sheet_x:33,sheet_y:4,short_names:["flag-gp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gp,regional,indicator,symbol,letters"},trident:{name:"Trident Emblem",unified:"1F531",sheet_x:20,sheet_y:14,short_names:["trident"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"trident,emblem,weapon,spear"},shamrock:{name:"Shamrock",unified:"2618",variations:["2618-FE0F"],sheet_x:1,sheet_y:1,short_names:["shamrock"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shamrock,vegetable,plant,nature,irish,clover"},shopping_bags:{name:"Shopping Bags",unified:"1F6CD",sheet_x:27,sheet_y:10,short_names:["shopping_bags"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shopping,bags"},shopping_trolley:{name:"Shopping Trolley",unified:"1F6D2",sheet_x:27,sheet_y:15,short_names:["shopping_trolley"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shopping,trolley"},love_hotel:{name:"Love Hotel",unified:"1F3E9",sheet_x:10,sheet_y:5,short_names:["love_hotel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"love,hotel,like,affection,dating"},fleur_de_lis:{name:"Fleur-De-Lis",unified:"269C",variations:["269C-FE0F"],sheet_x:1,sheet_y:47,short_names:["fleur_de_lis"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"fleur,de,lis,decorative,scout"},four_leaf_clover:{name:"Four Leaf Clover",unified:"1F340",sheet_x:5,sheet_y:46,short_names:["four_leaf_clover"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"four,leaf,clover,vegetable,plant,nature,lucky,irish"},"flag-gu":{name:"Regional Indicator Symbol Letters GU",unified:"1F1EC-1F1FA",sheet_x:33,sheet_y:9,short_names:["flag-gu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gu,regional,indicator,symbol,letters"},open_hands:{name:"Open Hands Sign",unified:"1F450",sheet_x:13,sheet_y:18,short_names:["open_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F450-1F3FB",image:"1f450-1f3fb.png",sheet_x:13,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F450-1F3FC",image:"1f450-1f3fc.png",sheet_x:13,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F450-1F3FD",image:"1f450-1f3fd.png",sheet_x:13,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F450-1F3FE",image:"1f450-1f3fe.png",sheet_x:13,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F450-1F3FF",image:"1f450-1f3ff.png",sheet_x:13,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"open,hands,sign,fingers,butterfly"},raised_hands:{name:"Person Raising Both Hands in Celebration",unified:"1F64C",sheet_x:24,sheet_y:31,short_names:["raised_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64C-1F3FB",image:"1f64c-1f3fb.png",sheet_x:24,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64C-1F3FC",image:"1f64c-1f3fc.png",sheet_x:24,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64C-1F3FD",image:"1f64c-1f3fd.png",sheet_x:24,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64C-1F3FE",image:"1f64c-1f3fe.png",sheet_x:24,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64C-1F3FF",image:"1f64c-1f3ff.png",sheet_x:24,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"raised,hands,person,raising,both,in,celebration,gesture,hooray,yea"},wedding:{name:"Wedding",unified:"1F492",sheet_x:16,sheet_y:47,short_names:["wedding"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wedding,love,like,affection,couple,marriage,bride,groom"},bamboo:{name:"Pine Decoration",unified:"1F38D",sheet_x:7,sheet_y:30,short_names:["bamboo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bamboo,pine,decoration,plant,nature,vegetable,panda,pine_decoration"},beginner:{name:"Japanese Symbol for Beginner",unified:"1F530",sheet_x:20,sheet_y:13,short_names:["beginner"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"beginner,japanese,symbol,for,badge,shield"},"flag-gt":{name:"Regional Indicator Symbol Letters GT",unified:"1F1EC-1F1F9",sheet_x:33,sheet_y:8,short_names:["flag-gt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gt,regional,indicator,symbol,letters"},gift:{name:"Wrapped Present",unified:"1F381",sheet_x:7,sheet_y:13,short_names:["gift"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gift,wrapped,present,birthday,christmas,xmas"},classical_building:{name:"Classical Building",unified:"1F3DB",sheet_x:9,sheet_y:40,short_names:["classical_building"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"classical,building,art,culture,history"},"flag-gg":{name:"Regional Indicator Symbol Letters GG",unified:"1F1EC-1F1EC",sheet_x:32,sheet_y:47,short_names:["flag-gg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gg,regional,indicator,symbol,letters"},balloon:{name:"Balloon",unified:"1F388",sheet_x:7,sheet_y:25,short_names:["balloon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"balloon,party,celebration,birthday,circus"},tanabata_tree:{name:"Tanabata Tree",unified:"1F38B",sheet_x:7,sheet_y:28,short_names:["tanabata_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tanabata,tree,plant,nature,branch,summer"},clap:{name:"Clapping Hands Sign",unified:"1F44F",sheet_x:13,sheet_y:12,short_names:["clap"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44F-1F3FB",image:"1f44f-1f3fb.png",sheet_x:13,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44F-1F3FC",image:"1f44f-1f3fc.png",sheet_x:13,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44F-1F3FD",image:"1f44f-1f3fd.png",sheet_x:13,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44F-1F3FE",image:"1f44f-1f3fe.png",sheet_x:13,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44F-1F3FF",image:"1f44f-1f3ff.png",sheet_x:13,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"clap,clapping,hands,sign,praise,applause,congrats,yay"},recycle:{name:"Black Universal Recycling Symbol",unified:"267B",variations:["267B-FE0F"],sheet_x:1,sheet_y:37,short_names:["recycle"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"recycle,black,universal,recycling,symbol,arrow,environment,garbage,trash"},pray:{name:"Person with Folded Hands",unified:"1F64F",sheet_x:25,sheet_y:0,short_names:["pray"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64F-1F3FB",image:"1f64f-1f3fb.png",sheet_x:25,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64F-1F3FC",image:"1f64f-1f3fc.png",sheet_x:25,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64F-1F3FD",image:"1f64f-1f3fd.png",sheet_x:25,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64F-1F3FE",image:"1f64f-1f3fe.png",sheet_x:25,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64F-1F3FF",image:"1f64f-1f3ff.png",sheet_x:25,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"pray,person,with,folded,hands,please,hope,wish,namaste,highfive"},church:{name:"Church",unified:"26EA",variations:["26EA-FE0F"],sheet_x:2,sheet_y:16,short_names:["church"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"church,building,religion,christ"},white_check_mark:{name:"White Heavy Check Mark",unified:"2705",sheet_x:2,sheet_y:34,short_names:["white_check_mark"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,check,mark,heavy,green-square,ok,agree,vote,election,answer"},flags:{name:"Carp Streamer",unified:"1F38F",sheet_x:7,sheet_y:32,short_names:["flags"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flags,carp,streamer,fish,japanese,koinobori,banner"},leaves:{name:"Leaf Fluttering in Wind",unified:"1F343",sheet_x:6,sheet_y:0,short_names:["leaves"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"leaves,leaf,fluttering,in,wind,nature,plant,tree,vegetable,grass,lawn,spring"},"flag-gn":{name:"Regional Indicator Symbol Letters GN",unified:"1F1EC-1F1F3",sheet_x:33,sheet_y:3,short_names:["flag-gn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gn,regional,indicator,symbol,letters"},ribbon:{name:"Ribbon",unified:"1F380",sheet_x:7,sheet_y:12,short_names:["ribbon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ribbon,decoration,pink,girl,bowtie"},"flag-gw":{name:"Regional Indicator Symbol Letters GW",unified:"1F1EC-1F1FC",sheet_x:33,sheet_y:10,short_names:["flag-gw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gw,regional,indicator,symbol,letters"},handshake:{name:"Handshake",unified:"1F91D",sheet_x:28,sheet_y:19,short_names:["handshake"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"handshake,agreement,shake"},"u6307":{name:"Squared Cjk Unified Ideograph-6307",unified:"1F22F",variations:["1F22F-FE0F"],sheet_x:4,sheet_y:21,short_names:["u6307"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u6307,squared,cjk,unified,ideograph,6307,chinese,point,green-square,kanji"},fallen_leaf:{name:"Fallen Leaf",unified:"1F342",sheet_x:5,sheet_y:48,short_names:["fallen_leaf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fallen,leaf,nature,plant,vegetable,leaves"},mosque:{name:"Mosque",unified:"1F54C",sheet_x:20,sheet_y:30,short_names:["mosque"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"mosque,islam,worship,minaret"},chart:{name:"Chart with Upwards Trend and Yen Sign",unified:"1F4B9",sheet_x:17,sheet_y:42,short_names:["chart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chart,with,upwards,trend,and,yen,sign,green-square,graph,presentation,stats"},"flag-gy":{name:"Regional Indicator Symbol Letters GY",unified:"1F1EC-1F1FE",sheet_x:33,sheet_y:11,short_names:["flag-gy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gy,regional,indicator,symbol,letters"},"+1":{name:"Thumbs Up Sign",unified:"1F44D",sheet_x:13,sheet_y:0,short_names:["+1","thumbsup"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44D-1F3FB",image:"1f44d-1f3fb.png",sheet_x:13,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44D-1F3FC",image:"1f44d-1f3fc.png",sheet_x:13,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44D-1F3FD",image:"1f44d-1f3fd.png",sheet_x:13,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44D-1F3FE",image:"1f44d-1f3fe.png",sheet_x:13,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44D-1F3FF",image:"1f44d-1f3ff.png",sheet_x:13,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"+1,thumbsup,thumbs,up,sign,yes,awesome,good,agree,accept,cool,hand,like"},maple_leaf:{name:"Maple Leaf",unified:"1F341",sheet_x:5,sheet_y:47,short_names:["maple_leaf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"maple,leaf,nature,plant,vegetable,ca,fall"},confetti_ball:{name:"Confetti Ball",unified:"1F38A",sheet_x:7,sheet_y:27,short_names:["confetti_ball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"confetti,ball,festival,party,birthday,circus"},synagogue:{name:"Synagogue",unified:"1F54D",sheet_x:20,sheet_y:31,short_names:["synagogue"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"synagogue,judaism,worship,temple,jewish"},tada:{name:"Party Popper",unified:"1F389",sheet_x:7,sheet_y:26,short_names:["tada"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tada,party,popper,congratulations,birthday,magic,circus,celebration"},kaaba:{name:"Kaaba",unified:"1F54B",sheet_x:20,sheet_y:29,short_names:["kaaba"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"kaaba,mecca,mosque,islam"},"-1":{name:"Thumbs Down Sign",unified:"1F44E",sheet_x:13,sheet_y:6,short_names:["-1","thumbsdown"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44E-1F3FB",image:"1f44e-1f3fb.png",sheet_x:13,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44E-1F3FC",image:"1f44e-1f3fc.png",sheet_x:13,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44E-1F3FD",image:"1f44e-1f3fd.png",sheet_x:13,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44E-1F3FE",image:"1f44e-1f3fe.png",sheet_x:13,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44E-1F3FF",image:"1f44e-1f3ff.png",sheet_x:13,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:",1,thumbsdown,thumbs,down,sign,no,dislike,hand"},sparkle:{name:"Sparkle",unified:"2747",variations:["2747-FE0F"],sheet_x:3,sheet_y:22,short_names:["sparkle"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sparkle,stars,green-square,awesome,good,fireworks"},"flag-ht":{name:"Regional Indicator Symbol Letters HT",unified:"1F1ED-1F1F9",sheet_x:33,sheet_y:16,short_names:["flag-ht"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ht,regional,indicator,symbol,letters"},mushroom:{name:"Mushroom",unified:"1F344",sheet_x:6,sheet_y:1,short_names:["mushroom"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mushroom,plant,vegetable"},"flag-hn":{name:"Regional Indicator Symbol Letters HN",unified:"1F1ED-1F1F3",sheet_x:33,sheet_y:14,short_names:["flag-hn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hn,regional,indicator,symbol,letters"},shinto_shrine:{name:"Shinto Shrine",unified:"26E9",sheet_x:2,sheet_y:15,short_names:["shinto_shrine"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shinto,shrine,temple,japan,kyoto"},ear_of_rice:{name:"Ear of Rice",unified:"1F33E",sheet_x:5,sheet_y:44,short_names:["ear_of_rice"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ear,of,rice,nature,plant"},facepunch:{name:"Fisted Hand Sign",unified:"1F44A",sheet_x:12,sheet_y:31,short_names:["facepunch","punch"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44A-1F3FB",image:"1f44a-1f3fb.png",sheet_x:12,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44A-1F3FC",image:"1f44a-1f3fc.png",sheet_x:12,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44A-1F3FD",image:"1f44a-1f3fd.png",sheet_x:12,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44A-1F3FE",image:"1f44a-1f3fe.png",sheet_x:12,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44A-1F3FF",image:"1f44a-1f3ff.png",sheet_x:12,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"facepunch,punch,fisted,hand,sign,angry,violence,fist,hit,attack"},eight_spoked_asterisk:{name:"Eight Spoked Asterisk",unified:"2733",variations:["2733-FE0F"],sheet_x:3,sheet_y:19,short_names:["eight_spoked_asterisk"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"eight,spoked,asterisk,star,sparkle,green-square"},dolls:{name:"Japanese Dolls",unified:"1F38E",sheet_x:7,sheet_y:31,short_names:["dolls"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dolls,japanese,toy,kimono"},bouquet:{name:"Bouquet",unified:"1F490",sheet_x:16,sheet_y:45,short_names:["bouquet"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bouquet,flowers,nature,spring"},negative_squared_cross_mark:{name:"Negative Squared Cross Mark",unified:"274E",sheet_x:3,sheet_y:24,short_names:["negative_squared_cross_mark"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"negative,squared,cross,mark,x,green-square,no,deny"},"flag-hk":{name:"Regional Indicator Symbol Letters HK",unified:"1F1ED-1F1F0",sheet_x:33,sheet_y:12,short_names:["flag-hk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hk,regional,indicator,symbol,letters"},fist:{name:"Raised Fist",unified:"270A",sheet_x:2,sheet_y:37,short_names:["fist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270A-1F3FB",image:"270a-1f3fb.png",sheet_x:2,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270A-1F3FC",image:"270a-1f3fc.png",sheet_x:2,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270A-1F3FD",image:"270a-1f3fd.png",sheet_x:2,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270A-1F3FE",image:"270a-1f3fe.png",sheet_x:2,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270A-1F3FF",image:"270a-1f3ff.png",sheet_x:2,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"fist,raised,fingers,hand,grasp"},izakaya_lantern:{name:"Izakaya Lantern",unified:"1F3EE",sheet_x:10,sheet_y:10,short_names:["izakaya_lantern","lantern"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"izakaya,lantern,light,paper,halloween,spooky"},japan:{name:"Silhouette of Japan",unified:"1F5FE",sheet_x:22,sheet_y:31,short_names:["japan"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"japan,silhouette,of,nation,country,japanese,asia"},"left-facing_fist":{name:"Left-Facing Fist",unified:"1F91B",sheet_x:28,sheet_y:7,short_names:["left-facing_fist"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91B-1F3FB",image:"1f91b-1f3fb.png",sheet_x:28,sheet_y:8,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91B-1F3FC",image:"1f91b-1f3fc.png",sheet_x:28,sheet_y:9,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91B-1F3FD",image:"1f91b-1f3fd.png",sheet_x:28,sheet_y:10,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91B-1F3FE",image:"1f91b-1f3fe.png",sheet_x:28,sheet_y:11,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91B-1F3FF",image:"1f91b-1f3ff.png",sheet_x:28,sheet_y:12,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"left,facing,fist"},tulip:{name:"Tulip",unified:"1F337",sheet_x:5,sheet_y:37,short_names:["tulip"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tulip,flowers,plant,nature,summer,spring"},rice_scene:{name:"Moon Viewing Ceremony",unified:"1F391",sheet_x:7,sheet_y:34,short_names:["rice_scene"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rice,scene,moon,viewing,ceremony,photo,japan,asia,tsukimi"},wind_chime:{name:"Wind Chime",unified:"1F390",sheet_x:7,sheet_y:33,short_names:["wind_chime"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wind,chime,nature,ding,spring,bell"},globe_with_meridians:{name:"Globe with Meridians",unified:"1F310",sheet_x:5,sheet_y:0,short_names:["globe_with_meridians"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"globe,with,meridians,earth,international,world,internet,interweb,i18n"},"flag-hu":{name:"Regional Indicator Symbol Letters HU",unified:"1F1ED-1F1FA",sheet_x:33,sheet_y:17,short_names:["flag-hu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hu,regional,indicator,symbol,letters"},national_park:{name:"National Park",unified:"1F3DE",sheet_x:9,sheet_y:43,short_names:["national_park"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"national,park,photo,environment,nature"},diamond_shape_with_a_dot_inside:{name:"Diamond Shape with a Dot Inside",unified:"1F4A0",sheet_x:17,sheet_y:12,short_names:["diamond_shape_with_a_dot_inside"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"diamond,shape,with,a,dot,inside,jewel,blue,gem,crystal,fancy"},"right-facing_fist":{name:"Right-Facing Fist",unified:"1F91C",sheet_x:28,sheet_y:13,short_names:["right-facing_fist"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91C-1F3FB",image:"1f91c-1f3fb.png",sheet_x:28,sheet_y:14,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91C-1F3FC",image:"1f91c-1f3fc.png",sheet_x:28,sheet_y:15,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91C-1F3FD",image:"1f91c-1f3fd.png",sheet_x:28,sheet_y:16,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91C-1F3FE",image:"1f91c-1f3fe.png",sheet_x:28,sheet_y:17,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91C-1F3FF",image:"1f91c-1f3ff.png",sheet_x:28,sheet_y:18,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"right,facing,fist"},email:{name:"Envelope",unified:"2709",variations:["2709-FE0F"],sheet_x:2,sheet_y:36,short_names:["email","envelope"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"email,envelope,letter,postal,inbox,communication"},rose:{name:"Rose",unified:"1F339",sheet_x:5,sheet_y:39,short_names:["rose"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rose,flowers,valentines,love,spring"},"flag-is":{name:"Regional Indicator Symbol Letters IS",unified:"1F1EE-1F1F8",sheet_x:33,sheet_y:27,short_names:["flag-is"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,is,regional,indicator,symbol,letters"},m:{name:"Circled Latin Capital Letter M",unified:"24C2",variations:["24C2-FE0F"],sheet_x:0,sheet_y:32,short_names:["m"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"m,circled,latin,capital,letter,alphabet,blue-circle"},sunrise:{name:"Sunrise",unified:"1F305",sheet_x:4,sheet_y:38,short_names:["sunrise"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sunrise,morning,view,vacation,photo"},envelope_with_arrow:{name:"Envelope with Downwards Arrow Above",unified:"1F4E9",sheet_x:18,sheet_y:41,short_names:["envelope_with_arrow"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"envelope,with,arrow,downwards,above,email,communication"},"flag-in":{name:"Regional Indicator Symbol Letters IN",unified:"1F1EE-1F1F3",sheet_x:33,sheet_y:23,short_names:["flag-in"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,in,regional,indicator,symbol,letters"},wilted_flower:{name:"Wilted Flower",unified:"1F940",sheet_x:30,sheet_y:3,short_names:["wilted_flower"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"wilted,flower,plant,nature"},hand_with_index_and_middle_fingers_crossed:{name:"Hand with Index and Middle Fingers Crossed",unified:"1F91E",sheet_x:28,sheet_y:20,short_names:["hand_with_index_and_middle_fingers_crossed"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91E-1F3FB",image:"1f91e-1f3fb.png",sheet_x:28,sheet_y:21,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91E-1F3FC",image:"1f91e-1f3fc.png",sheet_x:28,sheet_y:22,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91E-1F3FD",image:"1f91e-1f3fd.png",sheet_x:28,sheet_y:23,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91E-1F3FE",image:"1f91e-1f3fe.png",sheet_x:28,sheet_y:24,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91E-1F3FF",image:"1f91e-1f3ff.png",sheet_x:28,sheet_y:25,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"hand,with,index,and,middle,fingers,crossed"},"flag-id":{name:"Regional Indicator Symbol Letters ID",unified:"1F1EE-1F1E9",sheet_x:33,sheet_y:19,short_names:["flag-id"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,id,regional,indicator,symbol,letters"},v:{name:"Victory Hand",unified:"270C",variations:["270C-FE0F"],sheet_x:3,sheet_y:0,short_names:["v"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270C-1F3FB",image:"270c-1f3fb.png",sheet_x:3,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270C-1F3FC",image:"270c-1f3fc.png",sheet_x:3,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270C-1F3FD",image:"270c-1f3fd.png",sheet_x:3,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270C-1F3FE",image:"270c-1f3fe.png",sheet_x:3,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270C-1F3FF",image:"270c-1f3ff.png",sheet_x:3,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"v,victory,hand,fingers,ohyeah,peace,two"},sunrise_over_mountains:{name:"Sunrise over Mountains",unified:"1F304",sheet_x:4,sheet_y:37,short_names:["sunrise_over_mountains"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sunrise,over,mountains,view,vacation,photo"},sunflower:{name:"Sunflower",unified:"1F33B",sheet_x:5,sheet_y:41,short_names:["sunflower"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sunflower,nature,plant,fall"},cyclone:{name:"Cyclone",unified:"1F300",sheet_x:4,sheet_y:33,short_names:["cyclone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cyclone,weather,swirl,blue,cloud,vortex,spiral,whirlpool,spin"},incoming_envelope:{name:"Incoming Envelope",unified:"1F4E8",sheet_x:18,sheet_y:40,short_names:["incoming_envelope"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"incoming,envelope,email,inbox"},"e-mail":{name:"E-Mail Symbol",unified:"1F4E7",sheet_x:18,sheet_y:39,short_names:["e-mail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"e,mail,symbol,communication,inbox"},blossom:{name:"Blossom",unified:"1F33C",sheet_x:5,sheet_y:42,short_names:["blossom"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blossom,nature,flowers,yellow"},stars:{name:"Shooting Star",unified:"1F320",sheet_x:5,sheet_y:16,short_names:["stars"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"stars,shooting,star,night,photo"},the_horns:{name:"Sign of the Horns",unified:"1F918",sheet_x:27,sheet_y:38,short_names:["the_horns","sign_of_the_horns"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F918-1F3FB",image:"1f918-1f3fb.png",sheet_x:27,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F918-1F3FC",image:"1f918-1f3fc.png",sheet_x:27,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F918-1F3FD",image:"1f918-1f3fd.png",sheet_x:27,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F918-1F3FE",image:"1f918-1f3fe.png",sheet_x:27,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F918-1F3FF",image:"1f918-1f3ff.png",sheet_x:27,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"the,horns,sign,of"},zzz:{name:"Sleeping Symbol",unified:"1F4A4",sheet_x:17,sheet_y:16,short_names:["zzz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"zzz,sleeping,symbol,sleepy,tired"},"flag-ir":{name:"Regional Indicator Symbol Letters IR",unified:"1F1EE-1F1F7",sheet_x:33,sheet_y:26,short_names:["flag-ir"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ir,regional,indicator,symbol,letters"},"flag-iq":{name:"Regional Indicator Symbol Letters IQ",unified:"1F1EE-1F1F6",sheet_x:33,sheet_y:25,short_names:["flag-iq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,iq,regional,indicator,symbol,letters"},love_letter:{name:"Love Letter",unified:"1F48C",sheet_x:16,sheet_y:41,short_names:["love_letter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"love,letter,email,like,affection,envelope,valentines"},ok_hand:{name:"Ok Hand Sign",unified:"1F44C",sheet_x:12,sheet_y:43,short_names:["ok_hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44C-1F3FB",image:"1f44c-1f3fb.png",sheet_x:12,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44C-1F3FC",image:"1f44c-1f3fc.png",sheet_x:12,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44C-1F3FD",image:"1f44c-1f3fd.png",sheet_x:12,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44C-1F3FE",image:"1f44c-1f3fe.png",sheet_x:12,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44C-1F3FF",image:"1f44c-1f3ff.png",sheet_x:12,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"ok,hand,sign,fingers,limbs,perfect"},sparkler:{name:"Firework Sparkler",unified:"1F387",sheet_x:7,sheet_y:24,short_names:["sparkler"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sparkler,firework,stars,night,shine"},atm:{name:"Automated Teller Machine",unified:"1F3E7",sheet_x:10,sheet_y:3,short_names:["atm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"atm,automated,teller,machine,money,sales,cash,blue-square,payment,bank"},cherry_blossom:{name:"Cherry Blossom",unified:"1F338",sheet_x:5,sheet_y:38,short_names:["cherry_blossom"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cherry,blossom,nature,plant,spring,flower"},wc:{name:"Water Closet",unified:"1F6BE",sheet_x:26,sheet_y:39,short_names:["wc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wc,water,closet,toilet,restroom,blue-square"},"flag-ie":{name:"Regional Indicator Symbol Letters IE",unified:"1F1EE-1F1EA",sheet_x:33,sheet_y:20,short_names:["flag-ie"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ie,regional,indicator,symbol,letters"},inbox_tray:{name:"Inbox Tray",unified:"1F4E5",sheet_x:18,sheet_y:37,short_names:["inbox_tray"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"inbox,tray,email,documents"},point_left:{name:"White Left Pointing Backhand Index",unified:"1F448",sheet_x:12,sheet_y:19,short_names:["point_left"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F448-1F3FB",image:"1f448-1f3fb.png",sheet_x:12,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F448-1F3FC",image:"1f448-1f3fc.png",sheet_x:12,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F448-1F3FD",image:"1f448-1f3fd.png",sheet_x:12,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F448-1F3FE",image:"1f448-1f3fe.png",sheet_x:12,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F448-1F3FF",image:"1f448-1f3ff.png",sheet_x:12,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,left,white,pointing,backhand,index,direction,fingers,hand"},fireworks:{name:"Fireworks",unified:"1F386",sheet_x:7,sheet_y:23,short_names:["fireworks"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fireworks,photo,festival,carnival,congratulations"},hibiscus:{name:"Hibiscus",unified:"1F33A",sheet_x:5,sheet_y:40,short_names:["hibiscus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hibiscus,plant,vegetable,flowers,beach"},outbox_tray:{name:"Outbox Tray",unified:"1F4E4",sheet_x:18,sheet_y:36,short_names:["outbox_tray"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"outbox,tray,inbox,email"},point_right:{name:"White Right Pointing Backhand Index",unified:"1F449",sheet_x:12,sheet_y:25,short_names:["point_right"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F449-1F3FB",image:"1f449-1f3fb.png",sheet_x:12,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F449-1F3FC",image:"1f449-1f3fc.png",sheet_x:12,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F449-1F3FD",image:"1f449-1f3fd.png",sheet_x:12,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F449-1F3FE",image:"1f449-1f3fe.png",sheet_x:12,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F449-1F3FF",image:"1f449-1f3ff.png",sheet_x:12,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,right,white,pointing,backhand,index,fingers,hand,direction"},city_sunrise:{name:"Sunset over Buildings",unified:"1F307",sheet_x:4,sheet_y:40,short_names:["city_sunrise"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"city,sunrise,sunset,over,buildings,photo,good morning,dawn"},"flag-im":{name:"Regional Indicator Symbol Letters IM",unified:"1F1EE-1F1F2",sheet_x:33,sheet_y:22,short_names:["flag-im"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,im,regional,indicator,symbol,letters"},earth_americas:{name:"Earth Globe Americas",unified:"1F30E",sheet_x:4,sheet_y:47,short_names:["earth_americas"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"earth,americas,globe,world,usa,international"},wheelchair:{name:"Wheelchair Symbol",unified:"267F",variations:["267F-FE0F"],sheet_x:1,sheet_y:38,short_names:["wheelchair"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wheelchair,symbol,blue-square,disabled,a11y,accessibility"},"point_up_2":{name:"White Up Pointing Backhand Index",unified:"1F446",sheet_x:12,sheet_y:7,short_names:["point_up_2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F446-1F3FB",image:"1f446-1f3fb.png",sheet_x:12,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F446-1F3FC",image:"1f446-1f3fc.png",sheet_x:12,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F446-1F3FD",image:"1f446-1f3fd.png",sheet_x:12,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F446-1F3FE",image:"1f446-1f3fe.png",sheet_x:12,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F446-1F3FF",image:"1f446-1f3ff.png",sheet_x:12,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,up,2,white,pointing,backhand,index,fingers,hand,direction"},parking:{name:"Negative Squared Latin Capital Letter P",unified:"1F17F",variations:["1F17F-FE0F"],sheet_x:4,sheet_y:6,short_names:["parking"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"parking,negative,squared,latin,capital,letter,p,cars,blue-square,alphabet"},city_sunset:{name:"Cityscape at Dusk",unified:"1F306",sheet_x:4,sheet_y:39,short_names:["city_sunset"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"city,sunset,cityscape,at,dusk,photo,evening,sky,buildings"},earth_africa:{name:"Earth Globe Europe-Africa",unified:"1F30D",sheet_x:4,sheet_y:46,short_names:["earth_africa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"earth,africa,globe,europe,world,international"},package:{name:"Package",unified:"1F4E6",sheet_x:18,sheet_y:38,short_names:["package"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"package,mail,gift,cardboard,box,moving"},"flag-il":{name:"Regional Indicator Symbol Letters IL",unified:"1F1EE-1F1F1",sheet_x:33,sheet_y:21,short_names:["flag-il"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,il,regional,indicator,symbol,letters"},cityscape:{name:"Cityscape",unified:"1F3D9",sheet_x:9,sheet_y:38,short_names:["cityscape"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"cityscape,photo,night life,urban"},point_down:{name:"White Down Pointing Backhand Index",unified:"1F447",sheet_x:12,sheet_y:13,short_names:["point_down"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F447-1F3FB",image:"1f447-1f3fb.png",sheet_x:12,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F447-1F3FC",image:"1f447-1f3fc.png",sheet_x:12,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F447-1F3FD",image:"1f447-1f3fd.png",sheet_x:12,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F447-1F3FE",image:"1f447-1f3fe.png",sheet_x:12,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F447-1F3FF",image:"1f447-1f3ff.png",sheet_x:12,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,down,white,pointing,backhand,index,fingers,hand,direction"},"flag-it":{name:"Regional Indicator Symbol Letters IT",unified:"1F1EE-1F1F9",sheet_x:33,sheet_y:28,short_names:["flag-it","it"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,it,regional,indicator,symbol,letters"},label:{name:"Label",unified:"1F3F7",sheet_x:10,sheet_y:16,short_names:["label"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"label,sale,tag"},"u7a7a":{name:"Squared Cjk Unified Ideograph-7a7a",unified:"1F233",sheet_x:4,sheet_y:23,short_names:["u7a7a"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u7a7a,squared,cjk,unified,ideograph,7a7a,kanji,japanese,chinese,empty,sky,blue-square"},earth_asia:{name:"Earth Globe Asia-Australia",unified:"1F30F",sheet_x:4,sheet_y:48,short_names:["earth_asia"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"earth,asia,globe,australia,world,east,international"},"flag-jm":{name:"Regional Indicator Symbol Letters JM",unified:"1F1EF-1F1F2",sheet_x:33,sheet_y:30,short_names:["flag-jm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,jm,regional,indicator,symbol,letters"},sa:{name:"Squared Katakana Sa",unified:"1F202",variations:["1F202-FE0F"],sheet_x:4,sheet_y:19,short_names:["sa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sa,squared,katakana,japanese,blue-square"},night_with_stars:{name:"Night with Stars",unified:"1F303",sheet_x:4,sheet_y:36,short_names:["night_with_stars"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"night,with,stars,evening,city,downtown"},mailbox_closed:{name:"Closed Mailbox with Lowered Flag",unified:"1F4EA",sheet_x:18,sheet_y:42,short_names:["mailbox_closed"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mailbox,closed,with,lowered,flag,email,communication,inbox"},point_up:{name:"White Up Pointing Index",unified:"261D",variations:["261D-FE0F"],sheet_x:1,sheet_y:2,short_names:["point_up"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"261D-1F3FB",image:"261d-1f3fb.png",sheet_x:1,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"261D-1F3FC",image:"261d-1f3fc.png",sheet_x:1,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"261D-1F3FD",image:"261d-1f3fd.png",sheet_x:1,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"261D-1F3FE",image:"261d-1f3fe.png",sheet_x:1,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"261D-1F3FF",image:"261d-1f3ff.png",sheet_x:1,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,up,white,pointing,index,hand,fingers,direction"},full_moon:{name:"Full Moon Symbol",unified:"1F315",sheet_x:5,sheet_y:5,short_names:["full_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"full,moon,symbol,nature,yellow,twilight,planet,space,night,evening,sleep"},mailbox:{name:"Closed Mailbox with Raised Flag",unified:"1F4EB",sheet_x:18,sheet_y:43,short_names:["mailbox"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mailbox,closed,with,raised,flag,email,inbox,communication"},milky_way:{name:"Milky Way",unified:"1F30C",sheet_x:4,sheet_y:45,short_names:["milky_way"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"milky,way,photo,space,stars"},waning_gibbous_moon:{name:"Waning Gibbous Moon Symbol",unified:"1F316",sheet_x:5,sheet_y:6,short_names:["waning_gibbous_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"waning,gibbous,moon,symbol,nature,twilight,planet,space,night,evening,sleep,waxing_gibbous_moon"},"flag-jp":{name:"Regional Indicator Symbol Letters JP",unified:"1F1EF-1F1F5",sheet_x:33,sheet_y:32,short_names:["flag-jp","jp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,jp,regional,indicator,symbol,letters"},hand:{name:"Raised Hand",unified:"270B",sheet_x:2,sheet_y:43,short_names:["hand","raised_hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270B-1F3FB",image:"270b-1f3fb.png",sheet_x:2,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270B-1F3FC",image:"270b-1f3fc.png",sheet_x:2,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270B-1F3FD",image:"270b-1f3fd.png",sheet_x:2,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270B-1F3FE",image:"270b-1f3fe.png",sheet_x:2,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270B-1F3FF",image:"270b-1f3ff.png",sheet_x:2,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"hand,raised"},passport_control:{name:"Passport Control",unified:"1F6C2",sheet_x:26,sheet_y:48,short_names:["passport_control"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"passport,control,custom,blue-square"},mailbox_with_mail:{name:"Open Mailbox with Raised Flag",unified:"1F4EC",sheet_x:18,sheet_y:44,short_names:["mailbox_with_mail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mailbox,with,mail,open,raised,flag,email,inbox,communication"},customs:{name:"Customs",unified:"1F6C3",sheet_x:27,sheet_y:0,short_names:["customs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"customs,passport,border,blue-square"},bridge_at_night:{name:"Bridge at Night",unified:"1F309",sheet_x:4,sheet_y:42,short_names:["bridge_at_night"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bridge,at,night,photo,sanfrancisco"},raised_back_of_hand:{name:"Raised Back of Hand",unified:"1F91A",sheet_x:28,sheet_y:1,short_names:["raised_back_of_hand"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91A-1F3FB",image:"1f91a-1f3fb.png",sheet_x:28,sheet_y:2,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91A-1F3FC",image:"1f91a-1f3fc.png",sheet_x:28,sheet_y:3,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91A-1F3FD",image:"1f91a-1f3fd.png",sheet_x:28,sheet_y:4,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91A-1F3FE",image:"1f91a-1f3fe.png",sheet_x:28,sheet_y:5,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91A-1F3FF",image:"1f91a-1f3ff.png",sheet_x:28,sheet_y:6,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"raised,back,of,hand,fingers,backhand"},last_quarter_moon:{name:"Last Quarter Moon Symbol",unified:"1F317",sheet_x:5,sheet_y:7,short_names:["last_quarter_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"last,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},crossed_flags:{name:"Crossed FLAGS",unified:"1F38C",sheet_x:7,sheet_y:29,short_names:["crossed_flags"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crossed,flags,japanese,nation,country,border"},waning_crescent_moon:{name:"Waning Crescent Moon Symbol",unified:"1F318",sheet_x:5,sheet_y:8,short_names:["waning_crescent_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"waning,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},baggage_claim:{name:"Baggage Claim",unified:"1F6C4",sheet_x:27,sheet_y:1,short_names:["baggage_claim"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baggage,claim,blue-square,airport,transport"},raised_hand_with_fingers_splayed:{name:"Raised Hand with Fingers Splayed",unified:"1F590",sheet_x:21,sheet_y:38,short_names:["raised_hand_with_fingers_splayed"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F590-1F3FB",image:"1f590-1f3fb.png",sheet_x:21,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F590-1F3FC",image:"1f590-1f3fc.png",sheet_x:21,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F590-1F3FD",image:"1f590-1f3fd.png",sheet_x:21,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F590-1F3FE",image:"1f590-1f3fe.png",sheet_x:21,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F590-1F3FF",image:"1f590-1f3ff.png",sheet_x:21,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"raised,hand,with,fingers,splayed,palm"},foggy:{name:"Foggy",unified:"1F301",sheet_x:4,sheet_y:34,short_names:["foggy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"foggy,photo,mountain"},mailbox_with_no_mail:{name:"Open Mailbox with Lowered Flag",unified:"1F4ED",sheet_x:18,sheet_y:45,short_names:["mailbox_with_no_mail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mailbox,with,no,mail,open,lowered,flag,email,inbox"},"flag-je":{name:"Regional Indicator Symbol Letters JE",unified:"1F1EF-1F1EA",sheet_x:33,sheet_y:29,short_names:["flag-je"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,je,regional,indicator,symbol,letters"},new_moon:{name:"New Moon Symbol",unified:"1F311",sheet_x:5,sheet_y:1,short_names:["new_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"new,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},"flag-jo":{name:"Regional Indicator Symbol Letters JO",unified:"1F1EF-1F1F4",sheet_x:33,sheet_y:31,short_names:["flag-jo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,jo,regional,indicator,symbol,letters"},postbox:{name:"Postbox",unified:"1F4EE",sheet_x:18,sheet_y:46,short_names:["postbox"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"postbox,email,letter,envelope"},"spock-hand":{name:"Raised Hand with Part Between Middle and Ring Fingers",unified:"1F596",sheet_x:22,sheet_y:1,short_names:["spock-hand"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F596-1F3FB",image:"1f596-1f3fb.png",sheet_x:22,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F596-1F3FC",image:"1f596-1f3fc.png",sheet_x:22,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F596-1F3FD",image:"1f596-1f3fd.png",sheet_x:22,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F596-1F3FE",image:"1f596-1f3fe.png",sheet_x:22,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F596-1F3FF",image:"1f596-1f3ff.png",sheet_x:22,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"spock,hand,raised,with,part,between,middle,and,ring,fingers"},left_luggage:{name:"Left Luggage",unified:"1F6C5",sheet_x:27,sheet_y:2,short_names:["left_luggage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"left,luggage,blue-square,travel"},waxing_crescent_moon:{name:"Waxing Crescent Moon Symbol",unified:"1F312",sheet_x:5,sheet_y:2,short_names:["waxing_crescent_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"waxing,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},mens:{name:"Mens Symbol",unified:"1F6B9",sheet_x:26,sheet_y:34,short_names:["mens"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mens,symbol,toilet,restroom,wc,blue-square,gender,male"},postal_horn:{name:"Postal Horn",unified:"1F4EF",sheet_x:18,sheet_y:47,short_names:["postal_horn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"postal,horn,instrument,music"},wave:{name:"Waving Hand Sign",unified:"1F44B",sheet_x:12,sheet_y:37,short_names:["wave"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44B-1F3FB",image:"1f44b-1f3fb.png",sheet_x:12,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44B-1F3FC",image:"1f44b-1f3fc.png",sheet_x:12,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44B-1F3FD",image:"1f44b-1f3fd.png",sheet_x:12,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44B-1F3FE",image:"1f44b-1f3fe.png",sheet_x:12,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44B-1F3FF",image:"1f44b-1f3ff.png",sheet_x:12,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"wave,waving,hand,sign,hands,gesture,goodbye,solong,farewell,hello,palm"},"flag-kz":{name:"Regional Indicator Symbol Letters KZ",unified:"1F1F0-1F1FF",sheet_x:33,sheet_y:43,short_names:["flag-kz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kz,regional,indicator,symbol,letters"},scroll:{name:"Scroll",unified:"1F4DC",sheet_x:18,sheet_y:28,short_names:["scroll"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scroll,documents,ancient,history,paper"},womens:{name:"Womens Symbol",unified:"1F6BA",sheet_x:26,sheet_y:35,short_names:["womens"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"womens,symbol,purple-square,woman,female,toilet,loo,restroom,gender"},first_quarter_moon:{name:"First Quarter Moon Symbol",unified:"1F313",sheet_x:5,sheet_y:3,short_names:["first_quarter_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"first,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},call_me_hand:{name:"Call Me Hand",unified:"1F919",sheet_x:27,sheet_y:44,short_names:["call_me_hand"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F919-1F3FB",image:"1f919-1f3fb.png",sheet_x:27,sheet_y:45,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F919-1F3FC",image:"1f919-1f3fc.png",sheet_x:27,sheet_y:46,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F919-1F3FD",image:"1f919-1f3fd.png",sheet_x:27,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F919-1F3FE",image:"1f919-1f3fe.png",sheet_x:27,sheet_y:48,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F919-1F3FF",image:"1f919-1f3ff.png",sheet_x:28,sheet_y:0,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"call,me,hand,hands,gesture"},"flag-ke":{name:"Regional Indicator Symbol Letters KE",unified:"1F1F0-1F1EA",sheet_x:33,sheet_y:33,short_names:["flag-ke"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ke,regional,indicator,symbol,letters"},muscle:{name:"Flexed Biceps",unified:"1F4AA",sheet_x:17,sheet_y:22,short_names:["muscle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F4AA-1F3FB",image:"1f4aa-1f3fb.png",sheet_x:17,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F4AA-1F3FC",image:"1f4aa-1f3fc.png",sheet_x:17,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F4AA-1F3FD",image:"1f4aa-1f3fd.png",sheet_x:17,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F4AA-1F3FE",image:"1f4aa-1f3fe.png",sheet_x:17,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F4AA-1F3FF",image:"1f4aa-1f3ff.png",sheet_x:17,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"muscle,flexed,biceps,arm,flex,hand,summer,strong"},moon:{name:"Waxing Gibbous Moon Symbol",unified:"1F314",sheet_x:5,sheet_y:4,short_names:["moon","waxing_gibbous_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"moon,waxing,gibbous,symbol"},"flag-ki":{name:"Regional Indicator Symbol Letters KI",unified:"1F1F0-1F1EE",sheet_x:33,sheet_y:36,short_names:["flag-ki"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ki,regional,indicator,symbol,letters"},page_with_curl:{name:"Page with Curl",unified:"1F4C3",sheet_x:18,sheet_y:3,short_names:["page_with_curl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"page,with,curl,documents,office,paper"},baby_symbol:{name:"Baby Symbol",unified:"1F6BC",sheet_x:26,sheet_y:37,short_names:["baby_symbol"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baby,symbol,orange-square,child"},page_facing_up:{name:"Page Facing Up",unified:"1F4C4",sheet_x:18,sheet_y:4,short_names:["page_facing_up"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"page,facing,up,documents,office,paper,information"},"flag-xk":{name:"Regional Indicator Symbol Letters XK",unified:"1F1FD-1F1F0",sheet_x:36,sheet_y:18,short_names:["flag-xk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,xk,regional,indicator,symbol,letters"},restroom:{name:"Restroom",unified:"1F6BB",sheet_x:26,sheet_y:36,short_names:["restroom"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"restroom,blue-square,toilet,refresh,wc,gender"},middle_finger:{name:"Reversed Hand with Middle Finger Extended",unified:"1F595",sheet_x:21,sheet_y:44,short_names:["middle_finger","reversed_hand_with_middle_finger_extended"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F595-1F3FB",image:"1f595-1f3fb.png",sheet_x:21,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F595-1F3FC",image:"1f595-1f3fc.png",sheet_x:21,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F595-1F3FD",image:"1f595-1f3fd.png",sheet_x:21,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F595-1F3FE",image:"1f595-1f3fe.png",sheet_x:21,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F595-1F3FF",image:"1f595-1f3ff.png",sheet_x:22,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"middle,finger,reversed,hand,with,extended"},new_moon_with_face:{name:"New Moon with Face",unified:"1F31A",sheet_x:5,sheet_y:10,short_names:["new_moon_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"new,moon,with,face,nature,twilight,planet,space,night,evening,sleep"},bookmark_tabs:{name:"Bookmark Tabs",unified:"1F4D1",sheet_x:18,sheet_y:17,short_names:["bookmark_tabs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bookmark,tabs,favorite,save,order,tidy"},put_litter_in_its_place:{name:"Put Litter in Its Place Symbol",unified:"1F6AE",sheet_x:26,sheet_y:8,short_names:["put_litter_in_its_place"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"put,litter,in,its,place,symbol,blue-square,sign,human,info"},writing_hand:{name:"Writing Hand",unified:"270D",variations:["270D-FE0F"],sheet_x:3,sheet_y:6,short_names:["writing_hand"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"270D-1F3FB",image:"270d-1f3fb.png",sheet_x:3,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"270D-1F3FC",image:"270d-1f3fc.png",sheet_x:3,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"270D-1F3FD",image:"270d-1f3fd.png",sheet_x:3,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"270D-1F3FE",image:"270d-1f3fe.png",sheet_x:3,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"270D-1F3FF",image:"270d-1f3ff.png",sheet_x:3,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"writing,hand,lower_left_ballpoint_pen,stationery,write"},"flag-kw":{name:"Regional Indicator Symbol Letters KW",unified:"1F1F0-1F1FC",sheet_x:33,sheet_y:41,short_names:["flag-kw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kw,regional,indicator,symbol,letters"},full_moon_with_face:{name:"Full Moon with Face",unified:"1F31D",sheet_x:5,sheet_y:13,short_names:["full_moon_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"full,moon,with,face,nature,twilight,planet,space,night,evening,sleep"},sun_with_face:{name:"Sun with Face",unified:"1F31E",sheet_x:5,sheet_y:14,short_names:["sun_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sun,with,face,nature,morning,sky"},"flag-kg":{name:"Regional Indicator Symbol Letters KG",unified:"1F1F0-1F1EC",sheet_x:33,sheet_y:34,short_names:["flag-kg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kg,regional,indicator,symbol,letters"},selfie:{name:"Selfie",unified:"1F933",sheet_x:28,sheet_y:45,short_names:["selfie"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F933-1F3FB",image:"1f933-1f3fb.png",sheet_x:28,sheet_y:46,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F933-1F3FC",image:"1f933-1f3fc.png",sheet_x:28,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F933-1F3FD",image:"1f933-1f3fd.png",sheet_x:28,sheet_y:48,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F933-1F3FE",image:"1f933-1f3fe.png",sheet_x:29,sheet_y:0,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F933-1F3FF",image:"1f933-1f3ff.png",sheet_x:29,sheet_y:1,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"selfie,camera,phone"},cinema:{name:"Cinema",unified:"1F3A6",sheet_x:8,sheet_y:1,short_names:["cinema"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cinema,blue-square,record,film,movie,curtain,stage,theater"},bar_chart:{name:"Bar Chart",unified:"1F4CA",sheet_x:18,sheet_y:10,short_names:["bar_chart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bar,chart,graph,presentation,stats"},first_quarter_moon_with_face:{name:"First Quarter Moon with Face",unified:"1F31B",sheet_x:5,sheet_y:11,short_names:["first_quarter_moon_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"first,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep"},nail_care:{name:"Nail Polish",unified:"1F485",sheet_x:16,sheet_y:19,short_names:["nail_care"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F485-1F3FB",image:"1f485-1f3fb.png",sheet_x:16,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F485-1F3FC",image:"1f485-1f3fc.png",sheet_x:16,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F485-1F3FD",image:"1f485-1f3fd.png",sheet_x:16,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F485-1F3FE",image:"1f485-1f3fe.png",sheet_x:16,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F485-1F3FF",image:"1f485-1f3ff.png",sheet_x:16,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"nail,care,polish,beauty,manicure,finger,fashion"},signal_strength:{name:"Antenna with Bars",unified:"1F4F6",sheet_x:19,sheet_y:5,short_names:["signal_strength"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"signal,strength,antenna,with,bars,blue-square,reception,phone,internet,connection,wifi,bluetooth"},"flag-la":{name:"Regional Indicator Symbol Letters LA",unified:"1F1F1-1F1E6",sheet_x:33,sheet_y:44,short_names:["flag-la"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,la,regional,indicator,symbol,letters"},chart_with_upwards_trend:{name:"Chart with Upwards Trend",unified:"1F4C8",sheet_x:18,sheet_y:8,short_names:["chart_with_upwards_trend"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chart,with,upwards,trend,graph,presentation,stats,recovery,business,economics,money,sales,good,success"},chart_with_downwards_trend:{name:"Chart with Downwards Trend",unified:"1F4C9",sheet_x:18,sheet_y:9,short_names:["chart_with_downwards_trend"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chart,with,downwards,trend,graph,presentation,stats,recession,business,economics,money,sales,bad,failure"},last_quarter_moon_with_face:{name:"Last Quarter Moon with Face",unified:"1F31C",sheet_x:5,sheet_y:12,short_names:["last_quarter_moon_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"last,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep"},"flag-lv":{name:"Regional Indicator Symbol Letters LV",unified:"1F1F1-1F1FB",sheet_x:34,sheet_y:4,short_names:["flag-lv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lv,regional,indicator,symbol,letters"},koko:{name:"Squared Katakana Koko",unified:"1F201",sheet_x:4,sheet_y:18,short_names:["koko"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"koko,squared,katakana,blue-square,here,japanese,destination"},ring:{name:"Ring",unified:"1F48D",sheet_x:16,sheet_y:42,short_names:["ring"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ring,wedding,propose,marriage,valentines,diamond,fashion,jewelry,gem,engagement"},spiral_note_pad:{name:"Spiral Note Pad",unified:"1F5D2",sheet_x:22,sheet_y:17,short_names:["spiral_note_pad"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"spiral,note,pad"},crescent_moon:{name:"Crescent Moon",unified:"1F319",sheet_x:5,sheet_y:9,short_names:["crescent_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crescent,moon,night,sleep,sky,evening,magic"},symbols:{name:"Input Symbol for Symbols",unified:"1F523",sheet_x:20,sheet_y:0,short_names:["symbols"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"symbols,input,symbol,for,blue-square,music,note,ampersand,percent,glyphs,characters"},lipstick:{name:"Lipstick",unified:"1F484",sheet_x:16,sheet_y:18,short_names:["lipstick"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lipstick,female,girl,fashion,woman"},"flag-lb":{name:"Regional Indicator Symbol Letters LB",unified:"1F1F1-1F1E7",sheet_x:33,sheet_y:45,short_names:["flag-lb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lb,regional,indicator,symbol,letters"},kiss:{name:"Kiss Mark",unified:"1F48B",sheet_x:16,sheet_y:40,short_names:["kiss"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kiss,mark,face,lips,love,like,affection,valentines"},information_source:{name:"Information Source",unified:"2139",variations:["2139-FE0F"],sheet_x:0,sheet_y:5,short_names:["information_source"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"information,source,blue-square,alphabet,letter"},"flag-ls":{name:"Regional Indicator Symbol Letters LS",unified:"1F1F1-1F1F8",sheet_x:34,sheet_y:1,short_names:["flag-ls"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ls,regional,indicator,symbol,letters"},dizzy:{name:"Dizzy Symbol",unified:"1F4AB",sheet_x:17,sheet_y:28,short_names:["dizzy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dizzy,symbol,star,sparkle,shoot,magic"},spiral_calendar_pad:{name:"Spiral Calendar Pad",unified:"1F5D3",sheet_x:22,sheet_y:18,short_names:["spiral_calendar_pad"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"spiral,calendar,pad"},"flag-lr":{name:"Regional Indicator Symbol Letters LR",unified:"1F1F1-1F1F7",sheet_x:34,sheet_y:0,short_names:["flag-lr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lr,regional,indicator,symbol,letters"},abc:{name:"Input Symbol for Latin Letters",unified:"1F524",sheet_x:20,sheet_y:1,short_names:["abc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"abc,input,symbol,for,latin,letters,blue-square,alphabet"},lips:{name:"Mouth",unified:"1F444",sheet_x:12,sheet_y:5,short_names:["lips"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lips,mouth,kiss"},star:{name:"White Medium Star",unified:"2B50",variations:["2B50-FE0F"],sheet_x:3,sheet_y:44,short_names:["star"],text:"",added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"star,white,medium,night,yellow"},calendar:{name:"Tear-off Calendar",unified:"1F4C6",sheet_x:18,sheet_y:6,short_names:["calendar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"calendar,tear,off,schedule,date,planning"},"star2":{name:"Glowing Star",unified:"1F31F",sheet_x:5,sheet_y:15,short_names:["star2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"star2,glowing,star,night,sparkle,awesome,good,magic"},tongue:{name:"Tongue",unified:"1F445",sheet_x:12,sheet_y:6,short_names:["tongue"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tongue,mouth,playful"},abcd:{name:"Input Symbol for Latin Small Letters",unified:"1F521",sheet_x:19,sheet_y:47,short_names:["abcd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"abcd,input,symbol,for,latin,small,letters,blue-square,alphabet"},date:{name:"Calendar",unified:"1F4C5",sheet_x:18,sheet_y:5,short_names:["date"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"date,calendar,schedule"},"flag-ly":{name:"Regional Indicator Symbol Letters LY",unified:"1F1F1-1F1FE",sheet_x:34,sheet_y:5,short_names:["flag-ly"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ly,regional,indicator,symbol,letters"},capital_abcd:{name:"Input Symbol for Latin Capital Letters",unified:"1F520",sheet_x:19,sheet_y:46,short_names:["capital_abcd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"capital,abcd,input,symbol,for,latin,letters,alphabet,words,blue-square"},sparkles:{name:"Sparkles",unified:"2728",sheet_x:3,sheet_y:18,short_names:["sparkles"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sparkles,stars,shine,shiny,cool,awesome,good,magic"},ear:{name:"Ear",unified:"1F442",sheet_x:11,sheet_y:42,short_names:["ear"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F442-1F3FB",image:"1f442-1f3fb.png",sheet_x:11,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F442-1F3FC",image:"1f442-1f3fc.png",sheet_x:11,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F442-1F3FD",image:"1f442-1f3fd.png",sheet_x:11,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F442-1F3FE",image:"1f442-1f3fe.png",sheet_x:11,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F442-1F3FF",image:"1f442-1f3ff.png",sheet_x:11,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"ear,face,hear,sound,listen"},"flag-li":{name:"Regional Indicator Symbol Letters LI",unified:"1F1F1-1F1EE",sheet_x:33,sheet_y:47,short_names:["flag-li"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,li,regional,indicator,symbol,letters"},card_index:{name:"Card Index",unified:"1F4C7",sheet_x:18,sheet_y:7,short_names:["card_index"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"card,index,business,stationery"},zap:{name:"High Voltage Sign",unified:"26A1",variations:["26A1-FE0F"],sheet_x:2,sheet_y:0,short_names:["zap"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"zap,high,voltage,sign,thunder,weather,lightning bolt,fast"},"flag-lt":{name:"Regional Indicator Symbol Letters LT",unified:"1F1F1-1F1F9",sheet_x:34,sheet_y:2,short_names:["flag-lt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lt,regional,indicator,symbol,letters"},nose:{name:"Nose",unified:"1F443",sheet_x:11,sheet_y:48,short_names:["nose"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F443-1F3FB",image:"1f443-1f3fb.png",sheet_x:12,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F443-1F3FC",image:"1f443-1f3fc.png",sheet_x:12,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F443-1F3FD",image:"1f443-1f3fd.png",sheet_x:12,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F443-1F3FE",image:"1f443-1f3fe.png",sheet_x:12,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F443-1F3FF",image:"1f443-1f3ff.png",sheet_x:12,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"nose,smell,sniff"},card_file_box:{name:"Card File Box",unified:"1F5C3",sheet_x:22,sheet_y:14,short_names:["card_file_box"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"card,file,box,business,stationery"},ng:{name:"Squared Ng",unified:"1F196",sheet_x:4,sheet_y:13,short_names:["ng"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ng,squared,blue-square,words,shape,icon"},ballot_box_with_ballot:{name:"Ballot Box with Ballot",unified:"1F5F3",sheet_x:22,sheet_y:26,short_names:["ballot_box_with_ballot"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"ballot,box,with"},ok:{name:"Squared Ok",unified:"1F197",sheet_x:4,sheet_y:14,short_names:["ok"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ok,squared,good,agree,yes,blue-square"},footprints:{name:"Footprints",unified:"1F463",sheet_x:13,sheet_y:42,short_names:["footprints"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"footprints,feet,tracking,walking,beach"},"flag-lu":{name:"Regional Indicator Symbol Letters LU",unified:"1F1F1-1F1FA",sheet_x:34,sheet_y:3,short_names:["flag-lu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lu,regional,indicator,symbol,letters"},fire:{name:"Fire",unified:"1F525",sheet_x:20,sheet_y:2,short_names:["fire"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fire,hot,cook,flame"},boom:{name:"Collision Symbol",unified:"1F4A5",sheet_x:17,sheet_y:17,short_names:["boom","collision"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"boom,collision,symbol,bomb,explode,explosion,blown"},file_cabinet:{name:"File Cabinet",unified:"1F5C4",sheet_x:22,sheet_y:15,short_names:["file_cabinet"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"file,cabinet,filing,organizing"},up:{name:"Squared Up with Exclamation Mark",unified:"1F199",sheet_x:4,sheet_y:16,short_names:["up"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"up,squared,with,exclamation,mark,blue-square,above,high"},eye:{name:"Eye",unified:"1F441",sheet_x:11,sheet_y:41,short_names:["eye"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"eye,face,look,see,watch,stare"},"flag-mo":{name:"Regional Indicator Symbol Letters MO",unified:"1F1F2-1F1F4",sheet_x:34,sheet_y:17,short_names:["flag-mo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mo,regional,indicator,symbol,letters"},"flag-mk":{name:"Regional Indicator Symbol Letters MK",unified:"1F1F2-1F1F0",sheet_x:34,sheet_y:13,short_names:["flag-mk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mk,regional,indicator,symbol,letters"},cool:{name:"Squared Cool",unified:"1F192",sheet_x:4,sheet_y:9,short_names:["cool"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cool,squared,words,blue-square"},comet:{name:"Comet",unified:"2604",variations:["2604-FE0F"],sheet_x:0,sheet_y:45,short_names:["comet"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"comet,space"},eyes:{name:"Eyes",unified:"1F440",sheet_x:11,sheet_y:40,short_names:["eyes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"eyes,look,watch,stalk,peek,see"},clipboard:{name:"Clipboard",unified:"1F4CB",sheet_x:18,sheet_y:11,short_names:["clipboard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clipboard,stationery,documents"},file_folder:{name:"File Folder",unified:"1F4C1",sheet_x:18,sheet_y:1,short_names:["file_folder"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"file,folder,documents,business,office"},speaking_head_in_silhouette:{name:"Speaking Head in Silhouette",unified:"1F5E3",sheet_x:22,sheet_y:23,short_names:["speaking_head_in_silhouette"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"speaking,head,in,silhouette"},"flag-mg":{name:"Regional Indicator Symbol Letters MG",unified:"1F1F2-1F1EC",sheet_x:34,sheet_y:11,short_names:["flag-mg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mg,regional,indicator,symbol,letters"},new:{name:"Squared New",unified:"1F195",sheet_x:4,sheet_y:12,short_names:["new"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"new,squared,blue-square,words,start"},sunny:{name:"Black Sun with Rays",unified:"2600",variations:["2600-FE0F"],sheet_x:0,sheet_y:41,short_names:["sunny"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sunny,black,sun,with,rays,weather,nature,brightness,summer,beach,spring"},"flag-mw":{name:"Regional Indicator Symbol Letters MW",unified:"1F1F2-1F1FC",sheet_x:34,sheet_y:25,short_names:["flag-mw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mw,regional,indicator,symbol,letters"},bust_in_silhouette:{name:"Bust in Silhouette",unified:"1F464",sheet_x:13,sheet_y:43,short_names:["bust_in_silhouette"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bust,in,silhouette,user,person,human"},open_file_folder:{name:"Open File Folder",unified:"1F4C2",sheet_x:18,sheet_y:2,short_names:["open_file_folder"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"open,file,folder,documents,load"},free:{name:"Squared Free",unified:"1F193",sheet_x:4,sheet_y:10,short_names:["free"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"free,squared,blue-square,words"},mostly_sunny:{name:"White Sun with Small Cloud",unified:"1F324",sheet_x:5,sheet_y:18,short_names:["mostly_sunny","sun_small_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"mostly,sunny,sun,small,cloud,white,with"},"flag-my":{name:"Regional Indicator Symbol Letters MY",unified:"1F1F2-1F1FE",sheet_x:34,sheet_y:27,short_names:["flag-my"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,my,regional,indicator,symbol,letters"},busts_in_silhouette:{name:"Busts in Silhouette",unified:"1F465",sheet_x:13,sheet_y:44,short_names:["busts_in_silhouette"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"busts,in,silhouette,user,person,human,group,team"},partly_sunny:{name:"Sun Behind Cloud",unified:"26C5",variations:["26C5-FE0F"],sheet_x:2,sheet_y:8,short_names:["partly_sunny"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"partly,sunny,sun,behind,cloud,weather,nature,cloudy,morning,fall,spring"},card_index_dividers:{name:"Card Index Dividers",unified:"1F5C2",sheet_x:22,sheet_y:13,short_names:["card_index_dividers"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"card,index,dividers,organizing,business,stationery"},zero:{name:"Keycap 0",unified:"0030-20E3",variations:["0030-FE0F-20E3"],sheet_x:31,sheet_y:1,short_names:["zero"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"zero,keycap,0,numbers,blue-square,null"},baby:{name:"Baby",unified:"1F476",sheet_x:15,sheet_y:18,short_names:["baby"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F476-1F3FB",image:"1f476-1f3fb.png",sheet_x:15,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F476-1F3FC",image:"1f476-1f3fc.png",sheet_x:15,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F476-1F3FD",image:"1f476-1f3fd.png",sheet_x:15,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F476-1F3FE",image:"1f476-1f3fe.png",sheet_x:15,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F476-1F3FF",image:"1f476-1f3ff.png",sheet_x:15,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"baby,child,boy,girl,toddler"},rolled_up_newspaper:{name:"Rolled-Up Newspaper",unified:"1F5DE",sheet_x:22,sheet_y:21,short_names:["rolled_up_newspaper"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"rolled,up,newspaper"},one:{name:"Keycap 1",unified:"0031-20E3",variations:["0031-FE0F-20E3"],sheet_x:31,sheet_y:2,short_names:["one"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"one,keycap,1,blue-square,numbers"},barely_sunny:{name:"White Sun Behind Cloud",unified:"1F325",sheet_x:5,sheet_y:19,short_names:["barely_sunny","sun_behind_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"barely,sunny,sun,behind,cloud,white"},"flag-mv":{name:"Regional Indicator Symbol Letters MV",unified:"1F1F2-1F1FB",sheet_x:34,sheet_y:24,short_names:["flag-mv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mv,regional,indicator,symbol,letters"},newspaper:{name:"Newspaper",unified:"1F4F0",sheet_x:18,sheet_y:48,short_names:["newspaper"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"newspaper,press,headline"},boy:{name:"Boy",unified:"1F466",sheet_x:13,sheet_y:45,short_names:["boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F466-1F3FB",image:"1f466-1f3fb.png",sheet_x:13,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F466-1F3FC",image:"1f466-1f3fc.png",sheet_x:13,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F466-1F3FD",image:"1f466-1f3fd.png",sheet_x:13,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F466-1F3FE",image:"1f466-1f3fe.png",sheet_x:14,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F466-1F3FF",image:"1f466-1f3ff.png",sheet_x:14,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"boy,man,male,guy,teenager"},two:{name:"Keycap 2",unified:"0032-20E3",variations:["0032-FE0F-20E3"],sheet_x:31,sheet_y:3,short_names:["two"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"two,keycap,2,numbers,prime,blue-square"},partly_sunny_rain:{name:"White Sun Behind Cloud with Rain",unified:"1F326",sheet_x:5,sheet_y:20,short_names:["partly_sunny_rain","sun_behind_rain_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"partly,sunny,rain,sun,behind,cloud,white,with"},"flag-ml":{name:"Regional Indicator Symbol Letters ML",unified:"1F1F2-1F1F1",sheet_x:34,sheet_y:14,short_names:["flag-ml"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ml,regional,indicator,symbol,letters"},three:{name:"Keycap 3",unified:"0033-20E3",variations:["0033-FE0F-20E3"],sheet_x:31,sheet_y:4,short_names:["three"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"three,keycap,3,numbers,prime,blue-square"},notebook:{name:"Notebook",unified:"1F4D3",sheet_x:18,sheet_y:19,short_names:["notebook"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"notebook,stationery,record,notes,paper,study"},"flag-mt":{name:"Regional Indicator Symbol Letters MT",unified:"1F1F2-1F1F9",sheet_x:34,sheet_y:22,short_names:["flag-mt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mt,regional,indicator,symbol,letters"},girl:{name:"Girl",unified:"1F467",sheet_x:14,sheet_y:2,short_names:["girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F467-1F3FB",image:"1f467-1f3fb.png",sheet_x:14,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F467-1F3FC",image:"1f467-1f3fc.png",sheet_x:14,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F467-1F3FD",image:"1f467-1f3fd.png",sheet_x:14,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F467-1F3FE",image:"1f467-1f3fe.png",sheet_x:14,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F467-1F3FF",image:"1f467-1f3ff.png",sheet_x:14,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"girl,female,woman,teenager"},rainbow:{name:"Rainbow",unified:"1F308",sheet_x:4,sheet_y:41,short_names:["rainbow"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rainbow,nature,happy,unicorn_face,photo,sky,spring"},four:{name:"Keycap 4",unified:"0034-20E3",variations:["0034-FE0F-20E3"],sheet_x:31,sheet_y:5,short_names:["four"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"four,keycap,4,numbers,blue-square"},man:{name:"Man",unified:"1F468",sheet_x:14,sheet_y:8,short_names:["man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F468-1F3FB",image:"1f468-1f3fb.png",sheet_x:14,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F468-1F3FC",image:"1f468-1f3fc.png",sheet_x:14,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F468-1F3FD",image:"1f468-1f3fd.png",sheet_x:14,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F468-1F3FE",image:"1f468-1f3fe.png",sheet_x:14,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F468-1F3FF",image:"1f468-1f3ff.png",sheet_x:14,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"man,mustache,father,dad,guy,classy,sir,moustache"},"flag-mh":{name:"Regional Indicator Symbol Letters MH",unified:"1F1F2-1F1ED",sheet_x:34,sheet_y:12,short_names:["flag-mh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mh,regional,indicator,symbol,letters"},cloud:{name:"Cloud",unified:"2601",variations:["2601-FE0F"],sheet_x:0,sheet_y:42,short_names:["cloud"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cloud,weather,sky"},notebook_with_decorative_cover:{name:"Notebook with Decorative Cover",unified:"1F4D4",sheet_x:18,sheet_y:20,short_names:["notebook_with_decorative_cover"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"notebook,with,decorative,cover,classroom,notes,record,paper,study"},woman:{name:"Woman",unified:"1F469",sheet_x:14,sheet_y:14,short_names:["woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F469-1F3FB",image:"1f469-1f3fb.png",sheet_x:14,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F469-1F3FC",image:"1f469-1f3fc.png",sheet_x:14,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F469-1F3FD",image:"1f469-1f3fd.png",sheet_x:14,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F469-1F3FE",image:"1f469-1f3fe.png",sheet_x:14,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F469-1F3FF",image:"1f469-1f3ff.png",sheet_x:14,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"woman,female,girls,lady"},five:{name:"Keycap 5",unified:"0035-20E3",variations:["0035-FE0F-20E3"],sheet_x:31,sheet_y:6,short_names:["five"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"five,keycap,5,numbers,blue-square,prime"},"flag-mq":{name:"Regional Indicator Symbol Letters MQ",unified:"1F1F2-1F1F6",sheet_x:34,sheet_y:19,short_names:["flag-mq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mq,regional,indicator,symbol,letters"},rain_cloud:{name:"Cloud with Rain",unified:"1F327",sheet_x:5,sheet_y:21,short_names:["rain_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"rain,cloud,with"},ledger:{name:"Ledger",unified:"1F4D2",sheet_x:18,sheet_y:18,short_names:["ledger"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ledger,notes,paper"},closed_book:{name:"Closed Book",unified:"1F4D5",sheet_x:18,sheet_y:21,short_names:["closed_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"closed,book,read,library,knowledge,textbook,learn"},six:{name:"Keycap 6",unified:"0036-20E3",variations:["0036-FE0F-20E3"],sheet_x:31,sheet_y:7,short_names:["six"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"six,keycap,6,numbers,blue-square"},"flag-mr":{name:"Regional Indicator Symbol Letters MR",unified:"1F1F2-1F1F7",sheet_x:34,sheet_y:20,short_names:["flag-mr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mr,regional,indicator,symbol,letters"},"blond-haired-woman":{name:"Blond Haired Woman",unified:"1F471-200D-2640-FE0F",sheet_x:42,sheet_y:29,short_names:["blond-haired-woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F471-1F3FB-200D-2640-FE0F",image:"1f471-1f3fb-200d-2640-fe0f.png",sheet_x:42,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F471-1F3FC-200D-2640-FE0F",image:"1f471-1f3fc-200d-2640-fe0f.png",sheet_x:42,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F471-1F3FD-200D-2640-FE0F",image:"1f471-1f3fd-200d-2640-fe0f.png",sheet_x:42,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F471-1F3FE-200D-2640-FE0F",image:"1f471-1f3fe-200d-2640-fe0f.png",sheet_x:42,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F471-1F3FF-200D-2640-FE0F",image:"1f471-1f3ff-200d-2640-fe0f.png",sheet_x:42,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"blond,haired,woman"},thunder_cloud_and_rain:{name:"Thunder Cloud and Rain",unified:"26C8",sheet_x:2,sheet_y:9,short_names:["thunder_cloud_and_rain"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"thunder,cloud,and,rain"},lightning:{name:"Cloud with Lightning",unified:"1F329",sheet_x:5,sheet_y:23,short_names:["lightning","lightning_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lightning,cloud,with"},"flag-mu":{name:"Regional Indicator Symbol Letters MU",unified:"1F1F2-1F1FA",sheet_x:34,sheet_y:23,short_names:["flag-mu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mu,regional,indicator,symbol,letters"},green_book:{name:"Green Book",unified:"1F4D7",sheet_x:18,sheet_y:23,short_names:["green_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"green,book,read,library,knowledge,study"},person_with_blond_hair:{name:"Person with Blond Hair",unified:"1F471",sheet_x:14,sheet_y:37,short_names:["person_with_blond_hair"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F471-1F3FB",image:"1f471-1f3fb.png",sheet_x:14,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F471-1F3FC",image:"1f471-1f3fc.png",sheet_x:14,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F471-1F3FD",image:"1f471-1f3fd.png",sheet_x:14,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F471-1F3FE",image:"1f471-1f3fe.png",sheet_x:14,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F471-1F3FF",image:"1f471-1f3ff.png",sheet_x:14,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F471-200D-2642-FE0F",search:"person,with,blond,hair"},seven:{name:"Keycap 7",unified:"0037-20E3",variations:["0037-FE0F-20E3"],sheet_x:31,sheet_y:8,short_names:["seven"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"seven,keycap,7,numbers,blue-square,prime"},older_man:{name:"Older Man",unified:"1F474",sheet_x:15,sheet_y:6,short_names:["older_man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F474-1F3FB",image:"1f474-1f3fb.png",sheet_x:15,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F474-1F3FC",image:"1f474-1f3fc.png",sheet_x:15,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F474-1F3FD",image:"1f474-1f3fd.png",sheet_x:15,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F474-1F3FE",image:"1f474-1f3fe.png",sheet_x:15,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F474-1F3FF",image:"1f474-1f3ff.png",sheet_x:15,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"older,man,human,male,men,old,elder,senior"},"flag-yt":{name:"Regional Indicator Symbol Letters YT",unified:"1F1FE-1F1F9",sheet_x:36,sheet_y:20,short_names:["flag-yt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,yt,regional,indicator,symbol,letters"},blue_book:{name:"Blue Book",unified:"1F4D8",sheet_x:18,sheet_y:24,short_names:["blue_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blue,book,read,library,knowledge,learn,study"},snow_cloud:{name:"Cloud with Snow",unified:"1F328",sheet_x:5,sheet_y:22,short_names:["snow_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"snow,cloud,with"},eight:{name:"Keycap 8",unified:"0038-20E3",variations:["0038-FE0F-20E3"],sheet_x:31,sheet_y:9,short_names:["eight"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"eight,keycap,8,blue-square,numbers"},orange_book:{name:"Orange Book",unified:"1F4D9",sheet_x:18,sheet_y:25,short_names:["orange_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"orange,book,read,library,knowledge,textbook,study"},snowman:{name:"Snowman",unified:"2603",variations:["2603-FE0F"],sheet_x:0,sheet_y:44,short_names:["snowman"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"snowman,winter,season,cold,weather,christmas,xmas,frozen,without_snow"},older_woman:{name:"Older Woman",unified:"1F475",sheet_x:15,sheet_y:12,short_names:["older_woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F475-1F3FB",image:"1f475-1f3fb.png",sheet_x:15,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F475-1F3FC",image:"1f475-1f3fc.png",sheet_x:15,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F475-1F3FD",image:"1f475-1f3fd.png",sheet_x:15,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F475-1F3FE",image:"1f475-1f3fe.png",sheet_x:15,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F475-1F3FF",image:"1f475-1f3ff.png",sheet_x:15,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"older,woman,human,female,women,lady,old,elder,senior"},"flag-mx":{name:"Regional Indicator Symbol Letters MX",unified:"1F1F2-1F1FD",sheet_x:34,sheet_y:26,short_names:["flag-mx"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mx,regional,indicator,symbol,letters"},nine:{name:"Keycap 9",unified:"0039-20E3",variations:["0039-FE0F-20E3"],sheet_x:31,sheet_y:10,short_names:["nine"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"nine,keycap,9,blue-square,numbers"},keycap_ten:{name:"Keycap Ten",unified:"1F51F",sheet_x:19,sheet_y:45,short_names:["keycap_ten"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"keycap,ten,numbers,10,blue-square"},man_with_gua_pi_mao:{name:"Man with Gua Pi Mao",unified:"1F472",sheet_x:14,sheet_y:43,short_names:["man_with_gua_pi_mao"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F472-1F3FB",image:"1f472-1f3fb.png",sheet_x:14,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F472-1F3FC",image:"1f472-1f3fc.png",sheet_x:14,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F472-1F3FD",image:"1f472-1f3fd.png",sheet_x:14,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F472-1F3FE",image:"1f472-1f3fe.png",sheet_x:14,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F472-1F3FF",image:"1f472-1f3ff.png",sheet_x:14,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"man,with,gua,pi,mao,male,boy,chinese"},books:{name:"Books",unified:"1F4DA",sheet_x:18,sheet_y:26,short_names:["books"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"books,literature,library,study"},"flag-fm":{name:"Regional Indicator Symbol Letters FM",unified:"1F1EB-1F1F2",sheet_x:32,sheet_y:39,short_names:["flag-fm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fm,regional,indicator,symbol,letters"},snowman_without_snow:{name:"Snowman Without Snow",unified:"26C4",variations:["26C4-FE0F"],sheet_x:2,sheet_y:7,short_names:["snowman_without_snow"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"snowman,without,snow"},book:{name:"Open Book",unified:"1F4D6",sheet_x:18,sheet_y:22,short_names:["book","open_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"book,open"},"woman-wearing-turban":{name:"Woman Wearing Turban",unified:"1F473-200D-2640-FE0F",sheet_x:42,sheet_y:41,short_names:["woman-wearing-turban"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F473-1F3FB-200D-2640-FE0F",image:"1f473-1f3fb-200d-2640-fe0f.png",sheet_x:42,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F473-1F3FC-200D-2640-FE0F",image:"1f473-1f3fc-200d-2640-fe0f.png",sheet_x:42,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F473-1F3FD-200D-2640-FE0F",image:"1f473-1f3fd-200d-2640-fe0f.png",sheet_x:42,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F473-1F3FE-200D-2640-FE0F",image:"1f473-1f3fe-200d-2640-fe0f.png",sheet_x:42,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F473-1F3FF-200D-2640-FE0F",image:"1f473-1f3ff-200d-2640-fe0f.png",sheet_x:42,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,wearing,turban"},"flag-md":{name:"Regional Indicator Symbol Letters MD",unified:"1F1F2-1F1E9",sheet_x:34,sheet_y:8,short_names:["flag-md"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,md,regional,indicator,symbol,letters"},snowflake:{name:"Snowflake",unified:"2744",variations:["2744-FE0F"],sheet_x:3,sheet_y:21,short_names:["snowflake"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"snowflake,winter,season,cold,weather,christmas,xmas"},bookmark:{name:"Bookmark",unified:"1F516",sheet_x:19,sheet_y:36,short_names:["bookmark"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bookmark,favorite,label,save"},"flag-mc":{name:"Regional Indicator Symbol Letters MC",unified:"1F1F2-1F1E8",sheet_x:34,sheet_y:7,short_names:["flag-mc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mc,regional,indicator,symbol,letters"},man_with_turban:{name:"Man with Turban",unified:"1F473",sheet_x:15,sheet_y:0,short_names:["man_with_turban"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F473-1F3FB",image:"1f473-1f3fb.png",sheet_x:15,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F473-1F3FC",image:"1f473-1f3fc.png",sheet_x:15,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F473-1F3FD",image:"1f473-1f3fd.png",sheet_x:15,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F473-1F3FE",image:"1f473-1f3fe.png",sheet_x:15,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F473-1F3FF",image:"1f473-1f3ff.png",sheet_x:15,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F473-200D-2642-FE0F",search:"man,with,turban,male,indian,hinduism,arabs"},wind_blowing_face:{name:"Wind Blowing Face",unified:"1F32C",sheet_x:5,sheet_y:26,short_names:["wind_blowing_face"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"wind,blowing,face"},hash:{name:"Hash Key",unified:"0023-20E3",variations:["0023-FE0F-20E3"],sheet_x:30,sheet_y:48,short_names:["hash"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"hash,key,symbol,blue-square,twitter"},"flag-mn":{name:"Regional Indicator Symbol Letters MN",unified:"1F1F2-1F1F3",sheet_x:34,sheet_y:16,short_names:["flag-mn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mn,regional,indicator,symbol,letters"},link:{name:"Link Symbol",unified:"1F517",sheet_x:19,sheet_y:37,short_names:["link"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"link,symbol,rings,url"},keycap_star:{name:"Keycap Star",unified:"002A-20E3",variations:["002A-FE0F-20E3"],sheet_x:31,sheet_y:0,short_names:["keycap_star"],text:"",added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"keycap,star"},"female-police-officer":{name:"Female Police Officer",unified:"1F46E-200D-2640-FE0F",sheet_x:42,sheet_y:15,short_names:["female-police-officer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB-200D-2640-FE0F",image:"1f46e-1f3fb-200d-2640-fe0f.png",sheet_x:42,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F46E-1F3FC-200D-2640-FE0F",image:"1f46e-1f3fc-200d-2640-fe0f.png",sheet_x:42,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F46E-1F3FD-200D-2640-FE0F",image:"1f46e-1f3fd-200d-2640-fe0f.png",sheet_x:42,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F46E-1F3FE-200D-2640-FE0F",image:"1f46e-1f3fe-200d-2640-fe0f.png",sheet_x:42,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F46E-1F3FF-200D-2640-FE0F",image:"1f46e-1f3ff-200d-2640-fe0f.png",sheet_x:42,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,police,officer"},dash:{name:"Dash Symbol",unified:"1F4A8",sheet_x:17,sheet_y:20,short_names:["dash"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dash,symbol,wind,air,fast,shoo,fart,smoke,puff"},arrow_forward:{name:"Black Right-Pointing Triangle",unified:"25B6",variations:["25B6-FE0F"],sheet_x:0,sheet_y:35,short_names:["arrow_forward"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,forward,black,right,pointing,triangle,blue-square,direction,play"},paperclip:{name:"Paperclip",unified:"1F4CE",sheet_x:18,sheet_y:14,short_names:["paperclip"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"paperclip,documents,stationery"},cop:{name:"Police Officer",unified:"1F46E",sheet_x:14,sheet_y:24,short_names:["cop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB",image:"1f46e-1f3fb.png",sheet_x:14,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F46E-1F3FC",image:"1f46e-1f3fc.png",sheet_x:14,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F46E-1F3FD",image:"1f46e-1f3fd.png",sheet_x:14,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F46E-1F3FE",image:"1f46e-1f3fe.png",sheet_x:14,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F46E-1F3FF",image:"1f46e-1f3ff.png",sheet_x:14,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F46E-200D-2642-FE0F",search:"cop,police,officer"},"flag-me":{name:"Regional Indicator Symbol Letters ME",unified:"1F1F2-1F1EA",sheet_x:34,sheet_y:9,short_names:["flag-me"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,me,regional,indicator,symbol,letters"},tornado:{name:"Cloud with Tornado",unified:"1F32A",sheet_x:5,sheet_y:24,short_names:["tornado","tornado_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"tornado,cloud,with,weather,cyclone,twister"},"flag-ms":{name:"Regional Indicator Symbol Letters MS",unified:"1F1F2-1F1F8",sheet_x:34,sheet_y:21,short_names:["flag-ms"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ms,regional,indicator,symbol,letters"},linked_paperclips:{name:"Linked Paperclips",unified:"1F587",sheet_x:21,sheet_y:33,short_names:["linked_paperclips"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"linked,paperclips"},double_vertical_bar:{name:"Double Vertical Bar",unified:"23F8",sheet_x:0,sheet_y:29,short_names:["double_vertical_bar"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"double,vertical,bar"},"female-construction-worker":{name:"Female Construction Worker",unified:"1F477-200D-2640-FE0F",sheet_x:43,sheet_y:4,short_names:["female-construction-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F477-1F3FB-200D-2640-FE0F",image:"1f477-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F477-1F3FC-200D-2640-FE0F",image:"1f477-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F477-1F3FD-200D-2640-FE0F",image:"1f477-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F477-1F3FE-200D-2640-FE0F",image:"1f477-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F477-1F3FF-200D-2640-FE0F",image:"1f477-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,construction,worker"},fog:{name:"Fog",unified:"1F32B",sheet_x:5,sheet_y:25,short_names:["fog"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"fog,weather"},triangular_ruler:{name:"Triangular Ruler",unified:"1F4D0",sheet_x:18,sheet_y:16,short_names:["triangular_ruler"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"triangular,ruler,stationery,math,architect,sketch"},"flag-ma":{name:"Regional Indicator Symbol Letters MA",unified:"1F1F2-1F1E6",sheet_x:34,sheet_y:6,short_names:["flag-ma"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ma,regional,indicator,symbol,letters"},ocean:{name:"Water Wave",unified:"1F30A",sheet_x:4,sheet_y:43,short_names:["ocean"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ocean,water,wave,sea,nature,tsunami,disaster"},construction_worker:{name:"Construction Worker",unified:"1F477",sheet_x:15,sheet_y:24,short_names:["construction_worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F477-1F3FB",image:"1f477-1f3fb.png",sheet_x:15,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F477-1F3FC",image:"1f477-1f3fc.png",sheet_x:15,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F477-1F3FD",image:"1f477-1f3fd.png",sheet_x:15,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F477-1F3FE",image:"1f477-1f3fe.png",sheet_x:15,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F477-1F3FF",image:"1f477-1f3ff.png",sheet_x:15,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F477-200D-2642-FE0F",search:"construction,worker"},black_right_pointing_triangle_with_double_vertical_bar:{name:"Black Right-Pointing Triangle with Double Vertical Bar",unified:"23EF",sheet_x:0,sheet_y:24,short_names:["black_right_pointing_triangle_with_double_vertical_bar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"black,right,pointing,triangle,with,double,vertical,bar"},droplet:{name:"Droplet",unified:"1F4A7",sheet_x:17,sheet_y:19,short_names:["droplet"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"droplet,water,drip,faucet,spring"},straight_ruler:{name:"Straight Ruler",unified:"1F4CF",sheet_x:18,sheet_y:15,short_names:["straight_ruler"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"straight,ruler,stationery,calculate,length,math,school,drawing,architect,sketch"},"female-guard":{name:"Female Guard",unified:"1F482-200D-2640-FE0F",sheet_x:43,sheet_y:28,short_names:["female-guard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F482-1F3FB-200D-2640-FE0F",image:"1f482-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F482-1F3FC-200D-2640-FE0F",image:"1f482-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F482-1F3FD-200D-2640-FE0F",image:"1f482-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F482-1F3FE-200D-2640-FE0F",image:"1f482-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F482-1F3FF-200D-2640-FE0F",image:"1f482-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,guard"},black_square_for_stop:{name:"Black Square for Stop",unified:"23F9",sheet_x:0,sheet_y:30,short_names:["black_square_for_stop"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"black,square,for,stop"},"flag-mz":{name:"Regional Indicator Symbol Letters MZ",unified:"1F1F2-1F1FF",sheet_x:34,sheet_y:28,short_names:["flag-mz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mz,regional,indicator,symbol,letters"},sweat_drops:{name:"Splashing Sweat Symbol",unified:"1F4A6",sheet_x:17,sheet_y:18,short_names:["sweat_drops"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sweat,drops,splashing,symbol,water,drip,oops"},guardsman:{name:"Guardsman",unified:"1F482",sheet_x:16,sheet_y:6,short_names:["guardsman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F482-1F3FB",image:"1f482-1f3fb.png",sheet_x:16,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F482-1F3FC",image:"1f482-1f3fc.png",sheet_x:16,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F482-1F3FD",image:"1f482-1f3fd.png",sheet_x:16,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F482-1F3FE",image:"1f482-1f3fe.png",sheet_x:16,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F482-1F3FF",image:"1f482-1f3ff.png",sheet_x:16,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F482-200D-2642-FE0F",search:"guardsman,uk,gb,british,male,guy,royal"},pushpin:{name:"Pushpin",unified:"1F4CC",sheet_x:18,sheet_y:12,short_names:["pushpin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pushpin,stationery,mark,here"},"flag-mm":{name:"Regional Indicator Symbol Letters MM",unified:"1F1F2-1F1F2",sheet_x:34,sheet_y:15,short_names:["flag-mm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mm,regional,indicator,symbol,letters"},eject:{name:"Eject Symbol",unified:"23CF",sheet_x:0,sheet_y:17,short_names:["eject"],text:"",added_in:"4.0",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"eject,symbol"},"flag-na":{name:"Regional Indicator Symbol Letters NA",unified:"1F1F3-1F1E6",sheet_x:34,sheet_y:29,short_names:["flag-na"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,na,regional,indicator,symbol,letters"},umbrella_with_rain_drops:{name:"Umbrella with Rain Drops",unified:"2614",variations:["2614-FE0F"],sheet_x:0,sheet_y:48,short_names:["umbrella_with_rain_drops"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"umbrella,with,rain,drops"},"female-detective":{name:"Female Detective",unified:"1F575-FE0F-200D-2640-FE0F",sheet_x:44,sheet_y:15,short_names:["female-detective"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB-200D-2640-FE0F",image:"1f575-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC-200D-2640-FE0F",image:"1f575-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD-200D-2640-FE0F",image:"1f575-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE-200D-2640-FE0F",image:"1f575-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF-200D-2640-FE0F",image:"1f575-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,detective"},black_circle_for_record:{name:"Black Circle for Record",unified:"23FA",sheet_x:0,sheet_y:31,short_names:["black_circle_for_record"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"black,circle,for,record"},round_pushpin:{name:"Round Pushpin",unified:"1F4CD",sheet_x:18,sheet_y:13,short_names:["round_pushpin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"round,pushpin,stationery,location,map,here"},sleuth_or_spy:{name:"Sleuth or Spy",unified:"1F575",variations:["1F575-FE0F"],sheet_x:21,sheet_y:17,short_names:["sleuth_or_spy"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB",image:"1f575-1f3fb.png",sheet_x:21,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC",image:"1f575-1f3fc.png",sheet_x:21,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD",image:"1f575-1f3fd.png",sheet_x:21,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE",image:"1f575-1f3fe.png",sheet_x:21,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF",image:"1f575-1f3ff.png",sheet_x:21,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"1F575-FE0F-200D-2642-FE0F",search:"sleuth,or,spy"},scissors:{name:"Black Scissors",unified:"2702",variations:["2702-FE0F"],sheet_x:2,sheet_y:33,short_names:["scissors"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scissors,black,stationery,cut"},black_right_pointing_double_triangle_with_vertical_bar:{name:"Black Right-Pointing Double Triangle with Vertical Bar",unified:"23ED",sheet_x:0,sheet_y:22,short_names:["black_right_pointing_double_triangle_with_vertical_bar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"black,right,pointing,double,triangle,with,vertical,bar"},"flag-nr":{name:"Regional Indicator Symbol Letters NR",unified:"1F1F3-1F1F7",sheet_x:34,sheet_y:38,short_names:["flag-nr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nr,regional,indicator,symbol,letters"},lower_left_ballpoint_pen:{name:"Lower Left Ballpoint Pen",unified:"1F58A",sheet_x:21,sheet_y:34,short_names:["lower_left_ballpoint_pen"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lower,left,ballpoint,pen"},"female-doctor":{name:"Female Doctor",unified:"1F469-200D-2695-FE0F",sheet_x:41,sheet_y:42,short_names:["female-doctor"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2695-FE0F",image:"1f469-1f3fb-200d-2695-fe0f.png",sheet_x:41,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2695-FE0F",image:"1f469-1f3fc-200d-2695-fe0f.png",sheet_x:41,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2695-FE0F",image:"1f469-1f3fd-200d-2695-fe0f.png",sheet_x:41,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2695-FE0F",image:"1f469-1f3fe-200d-2695-fe0f.png",sheet_x:41,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2695-FE0F",image:"1f469-1f3ff-200d-2695-fe0f.png",sheet_x:41,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,doctor"},black_left_pointing_double_triangle_with_vertical_bar:{name:"Black Left-Pointing Double Triangle with Vertical Bar",unified:"23EE",sheet_x:0,sheet_y:23,short_names:["black_left_pointing_double_triangle_with_vertical_bar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"black,left,pointing,double,triangle,with,vertical,bar"},"flag-np":{name:"Regional Indicator Symbol Letters NP",unified:"1F1F3-1F1F5",sheet_x:34,sheet_y:37,short_names:["flag-np"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,np,regional,indicator,symbol,letters"},"flag-nl":{name:"Regional Indicator Symbol Letters NL",unified:"1F1F3-1F1F1",sheet_x:34,sheet_y:35,short_names:["flag-nl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nl,regional,indicator,symbol,letters"},fast_forward:{name:"Black Right-Pointing Double Triangle",unified:"23E9",sheet_x:0,sheet_y:18,short_names:["fast_forward"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fast,forward,black,right,pointing,double,triangle,blue-square,play,speed,continue"},"male-doctor":{name:"Male Doctor",unified:"1F468-200D-2695-FE0F",sheet_x:41,sheet_y:14,short_names:["male-doctor"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2695-FE0F",image:"1f468-1f3fb-200d-2695-fe0f.png",sheet_x:41,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2695-FE0F",image:"1f468-1f3fc-200d-2695-fe0f.png",sheet_x:41,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2695-FE0F",image:"1f468-1f3fd-200d-2695-fe0f.png",sheet_x:41,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2695-FE0F",image:"1f468-1f3fe-200d-2695-fe0f.png",sheet_x:41,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2695-FE0F",image:"1f468-1f3ff-200d-2695-fe0f.png",sheet_x:41,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,doctor"},lower_left_fountain_pen:{name:"Lower Left Fountain Pen",unified:"1F58B",sheet_x:21,sheet_y:35,short_names:["lower_left_fountain_pen"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lower,left,fountain,pen"},rewind:{name:"Black Left-Pointing Double Triangle",unified:"23EA",sheet_x:0,sheet_y:19,short_names:["rewind"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rewind,black,left,pointing,double,triangle,play,blue-square"},"female-farmer":{name:"Female Farmer",unified:"1F469-200D-1F33E",sheet_x:38,sheet_y:6,short_names:["female-farmer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F33E",image:"1f469-1f3fb-200d-1f33e.png",sheet_x:38,sheet_y:7,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F33E",image:"1f469-1f3fc-200d-1f33e.png",sheet_x:38,sheet_y:8,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F33E",image:"1f469-1f3fd-200d-1f33e.png",sheet_x:38,sheet_y:9,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F33E",image:"1f469-1f3fe-200d-1f33e.png",sheet_x:38,sheet_y:10,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F33E",image:"1f469-1f3ff-200d-1f33e.png",sheet_x:38,sheet_y:11,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,farmer"},"flag-nc":{name:"Regional Indicator Symbol Letters NC",unified:"1F1F3-1F1E8",sheet_x:34,sheet_y:30,short_names:["flag-nc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nc,regional,indicator,symbol,letters"},black_nib:{name:"Black Nib",unified:"2712",variations:["2712-FE0F"],sheet_x:3,sheet_y:13,short_names:["black_nib"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,nib,pen,stationery,writing,write"},"flag-nz":{name:"Regional Indicator Symbol Letters NZ",unified:"1F1F3-1F1FF",sheet_x:34,sheet_y:40,short_names:["flag-nz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nz,regional,indicator,symbol,letters"},lower_left_paintbrush:{name:"Lower Left Paintbrush",unified:"1F58C",sheet_x:21,sheet_y:36,short_names:["lower_left_paintbrush"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lower,left,paintbrush"},arrow_double_up:{name:"Black Up-Pointing Double Triangle",unified:"23EB",sheet_x:0,sheet_y:20,short_names:["arrow_double_up"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,double,up,black,pointing,triangle,blue-square,direction,top"},"male-farmer":{name:"Male Farmer",unified:"1F468-200D-1F33E",sheet_x:36,sheet_y:24,short_names:["male-farmer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F33E",image:"1f468-1f3fb-200d-1f33e.png",sheet_x:36,sheet_y:25,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F33E",image:"1f468-1f3fc-200d-1f33e.png",sheet_x:36,sheet_y:26,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F33E",image:"1f468-1f3fd-200d-1f33e.png",sheet_x:36,sheet_y:27,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F33E",image:"1f468-1f3fe-200d-1f33e.png",sheet_x:36,sheet_y:28,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F33E",image:"1f468-1f3ff-200d-1f33e.png",sheet_x:36,sheet_y:29,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,farmer"},arrow_double_down:{name:"Black Down-Pointing Double Triangle",unified:"23EC",sheet_x:0,sheet_y:21,short_names:["arrow_double_down"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,double,down,black,pointing,triangle,blue-square,direction,bottom"},"female-cook":{name:"Female Cook",unified:"1F469-200D-1F373",sheet_x:38,sheet_y:12,short_names:["female-cook"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F373",image:"1f469-1f3fb-200d-1f373.png",sheet_x:38,sheet_y:13,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F373",image:"1f469-1f3fc-200d-1f373.png",sheet_x:38,sheet_y:14,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F373",image:"1f469-1f3fd-200d-1f373.png",sheet_x:38,sheet_y:15,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F373",image:"1f469-1f3fe-200d-1f373.png",sheet_x:38,sheet_y:16,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F373",image:"1f469-1f3ff-200d-1f373.png",sheet_x:38,sheet_y:17,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,cook"},lower_left_crayon:{name:"Lower Left Crayon",unified:"1F58D",sheet_x:21,sheet_y:37,short_names:["lower_left_crayon"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lower,left,crayon"},"flag-ni":{name:"Regional Indicator Symbol Letters NI",unified:"1F1F3-1F1EE",sheet_x:34,sheet_y:34,short_names:["flag-ni"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ni,regional,indicator,symbol,letters"},memo:{name:"Memo",unified:"1F4DD",sheet_x:18,sheet_y:29,short_names:["memo","pencil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"memo,pencil,write,documents,stationery,paper,writing,legal,exam,quiz,test,study"},arrow_backward:{name:"Black Left-Pointing Triangle",unified:"25C0",variations:["25C0-FE0F"],sheet_x:0,sheet_y:36,short_names:["arrow_backward"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,backward,black,left,pointing,triangle,blue-square,direction"},"flag-ne":{name:"Regional Indicator Symbol Letters NE",unified:"1F1F3-1F1EA",sheet_x:34,sheet_y:31,short_names:["flag-ne"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ne,regional,indicator,symbol,letters"},"male-cook":{name:"Male Cook",unified:"1F468-200D-1F373",sheet_x:36,sheet_y:30,short_names:["male-cook"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F373",image:"1f468-1f3fb-200d-1f373.png",sheet_x:36,sheet_y:31,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F373",image:"1f468-1f3fc-200d-1f373.png",sheet_x:36,sheet_y:32,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F373",image:"1f468-1f3fd-200d-1f373.png",sheet_x:36,sheet_y:33,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F373",image:"1f468-1f3fe-200d-1f373.png",sheet_x:36,sheet_y:34,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F373",image:"1f468-1f3ff-200d-1f373.png",sheet_x:36,sheet_y:35,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,cook"},"flag-ng":{name:"Regional Indicator Symbol Letters NG",unified:"1F1F3-1F1EC",sheet_x:34,sheet_y:33,short_names:["flag-ng"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ng,regional,indicator,symbol,letters"},"pencil2":{name:"Pencil",unified:"270F",variations:["270F-FE0F"],sheet_x:3,sheet_y:12,short_names:["pencil2"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pencil2,pencil,stationery,write,paper,writing,school,study"},arrow_up_small:{name:"Up-Pointing Small Red Triangle",unified:"1F53C",sheet_x:20,sheet_y:25,short_names:["arrow_up_small"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,up,small,pointing,red,triangle,blue-square,direction,point,forward,top"},"female-student":{name:"Female Student",unified:"1F469-200D-1F393",sheet_x:38,sheet_y:18,short_names:["female-student"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F393",image:"1f469-1f3fb-200d-1f393.png",sheet_x:38,sheet_y:19,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F393",image:"1f469-1f3fc-200d-1f393.png",sheet_x:38,sheet_y:20,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F393",image:"1f469-1f3fd-200d-1f393.png",sheet_x:38,sheet_y:21,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F393",image:"1f469-1f3fe-200d-1f393.png",sheet_x:38,sheet_y:22,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F393",image:"1f469-1f3ff-200d-1f393.png",sheet_x:38,sheet_y:23,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,student"},"male-student":{name:"Male Student",unified:"1F468-200D-1F393",sheet_x:36,sheet_y:36,short_names:["male-student"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F393",image:"1f468-1f3fb-200d-1f393.png",sheet_x:36,sheet_y:37,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F393",image:"1f468-1f3fc-200d-1f393.png",sheet_x:36,sheet_y:38,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F393",image:"1f468-1f3fd-200d-1f393.png",sheet_x:36,sheet_y:39,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F393",image:"1f468-1f3fe-200d-1f393.png",sheet_x:36,sheet_y:40,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F393",image:"1f468-1f3ff-200d-1f393.png",sheet_x:36,sheet_y:41,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,student"},"flag-nu":{name:"Regional Indicator Symbol Letters NU",unified:"1F1F3-1F1FA",sheet_x:34,sheet_y:39,short_names:["flag-nu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nu,regional,indicator,symbol,letters"},mag:{name:"Left-Pointing Magnifying Glass",unified:"1F50D",sheet_x:19,sheet_y:27,short_names:["mag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mag,left,pointing,magnifying,glass,search,zoom,find,detective"},arrow_down_small:{name:"Down-Pointing Small Red Triangle",unified:"1F53D",sheet_x:20,sheet_y:26,short_names:["arrow_down_small"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,down,small,pointing,red,triangle,blue-square,direction,bottom"},arrow_right:{name:"Black Rightwards Arrow",unified:"27A1",variations:["27A1-FE0F"],sheet_x:3,sheet_y:34,short_names:["arrow_right"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,right,black,rightwards,blue-square,next"},"flag-nf":{name:"Regional Indicator Symbol Letters NF",unified:"1F1F3-1F1EB",sheet_x:34,sheet_y:32,short_names:["flag-nf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nf,regional,indicator,symbol,letters"},mag_right:{name:"Right-Pointing Magnifying Glass",unified:"1F50E",sheet_x:19,sheet_y:28,short_names:["mag_right"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mag,right,pointing,magnifying,glass,search,zoom,find,detective"},"female-singer":{name:"Female Singer",unified:"1F469-200D-1F3A4",sheet_x:38,sheet_y:24,short_names:["female-singer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3A4",image:"1f469-1f3fb-200d-1f3a4.png",sheet_x:38,sheet_y:25,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3A4",image:"1f469-1f3fc-200d-1f3a4.png",sheet_x:38,sheet_y:26,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3A4",image:"1f469-1f3fd-200d-1f3a4.png",sheet_x:38,sheet_y:27,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3A4",image:"1f469-1f3fe-200d-1f3a4.png",sheet_x:38,sheet_y:28,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3A4",image:"1f469-1f3ff-200d-1f3a4.png",sheet_x:38,sheet_y:29,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,singer"},arrow_left:{name:"Leftwards Black Arrow",unified:"2B05",variations:["2B05-FE0F"],sheet_x:3,sheet_y:39,short_names:["arrow_left"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,left,leftwards,black,blue-square,previous,back"},"flag-mp":{name:"Regional Indicator Symbol Letters MP",unified:"1F1F2-1F1F5",sheet_x:34,sheet_y:18,short_names:["flag-mp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mp,regional,indicator,symbol,letters"},lock_with_ink_pen:{name:"Lock with Ink Pen",unified:"1F50F",sheet_x:19,sheet_y:29,short_names:["lock_with_ink_pen"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lock,with,ink,pen,security,secret"},"male-singer":{name:"Male Singer",unified:"1F468-200D-1F3A4",sheet_x:36,sheet_y:42,short_names:["male-singer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3A4",image:"1f468-1f3fb-200d-1f3a4.png",sheet_x:36,sheet_y:43,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3A4",image:"1f468-1f3fc-200d-1f3a4.png",sheet_x:36,sheet_y:44,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3A4",image:"1f468-1f3fd-200d-1f3a4.png",sheet_x:36,sheet_y:45,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3A4",image:"1f468-1f3fe-200d-1f3a4.png",sheet_x:36,sheet_y:46,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3A4",image:"1f468-1f3ff-200d-1f3a4.png",sheet_x:36,sheet_y:47,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,singer"},arrow_up:{name:"Upwards Black Arrow",unified:"2B06",variations:["2B06-FE0F"],sheet_x:3,sheet_y:40,short_names:["arrow_up"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,up,upwards,black,blue-square,continue,top,direction"},"female-teacher":{name:"Female Teacher",unified:"1F469-200D-1F3EB",sheet_x:38,sheet_y:36,short_names:["female-teacher"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3EB",image:"1f469-1f3fb-200d-1f3eb.png",sheet_x:38,sheet_y:37,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3EB",image:"1f469-1f3fc-200d-1f3eb.png",sheet_x:38,sheet_y:38,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3EB",image:"1f469-1f3fd-200d-1f3eb.png",sheet_x:38,sheet_y:39,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3EB",image:"1f469-1f3fe-200d-1f3eb.png",sheet_x:38,sheet_y:40,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3EB",image:"1f469-1f3ff-200d-1f3eb.png",sheet_x:38,sheet_y:41,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,teacher"},"flag-kp":{name:"Regional Indicator Symbol Letters KP",unified:"1F1F0-1F1F5",sheet_x:33,sheet_y:39,short_names:["flag-kp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kp,regional,indicator,symbol,letters"},closed_lock_with_key:{name:"Closed Lock with Key",unified:"1F510",sheet_x:19,sheet_y:30,short_names:["closed_lock_with_key"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"closed,lock,with,key,security,privacy"},arrow_down:{name:"Downwards Black Arrow",unified:"2B07",variations:["2B07-FE0F"],sheet_x:3,sheet_y:41,short_names:["arrow_down"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,down,downwards,black,blue-square,direction,bottom"},"male-teacher":{name:"Male Teacher",unified:"1F468-200D-1F3EB",sheet_x:37,sheet_y:5,short_names:["male-teacher"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3EB",image:"1f468-1f3fb-200d-1f3eb.png",sheet_x:37,sheet_y:6,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3EB",image:"1f468-1f3fc-200d-1f3eb.png",sheet_x:37,sheet_y:7,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3EB",image:"1f468-1f3fd-200d-1f3eb.png",sheet_x:37,sheet_y:8,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3EB",image:"1f468-1f3fe-200d-1f3eb.png",sheet_x:37,sheet_y:9,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3EB",image:"1f468-1f3ff-200d-1f3eb.png",sheet_x:37,sheet_y:10,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,teacher"},"flag-no":{name:"Regional Indicator Symbol Letters NO",unified:"1F1F3-1F1F4",sheet_x:34,sheet_y:36,short_names:["flag-no"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,no,regional,indicator,symbol,letters"},lock:{name:"Lock",unified:"1F512",sheet_x:19,sheet_y:32,short_names:["lock"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lock,security,password,padlock"},unlock:{name:"Open Lock",unified:"1F513",sheet_x:19,sheet_y:33,short_names:["unlock"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"unlock,open,lock,privacy,security"},"flag-om":{name:"Regional Indicator Symbol Letters OM",unified:"1F1F4-1F1F2",sheet_x:34,sheet_y:41,short_names:["flag-om"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,om,regional,indicator,symbol,letters"},arrow_upper_right:{name:"North East Arrow",unified:"2197",variations:["2197-FE0F"],sheet_x:0,sheet_y:9,short_names:["arrow_upper_right"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,upper,right,north,east,blue-square,point,direction,diagonal,northeast"},"female-factory-worker":{name:"Female Factory Worker",unified:"1F469-200D-1F3ED",sheet_x:38,sheet_y:42,short_names:["female-factory-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3ED",image:"1f469-1f3fb-200d-1f3ed.png",sheet_x:38,sheet_y:43,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3ED",image:"1f469-1f3fc-200d-1f3ed.png",sheet_x:38,sheet_y:44,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3ED",image:"1f469-1f3fd-200d-1f3ed.png",sheet_x:38,sheet_y:45,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3ED",image:"1f469-1f3fe-200d-1f3ed.png",sheet_x:38,sheet_y:46,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3ED",image:"1f469-1f3ff-200d-1f3ed.png",sheet_x:38,sheet_y:47,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,factory,worker"},"male-factory-worker":{name:"Male Factory Worker",unified:"1F468-200D-1F3ED",sheet_x:37,sheet_y:11,short_names:["male-factory-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3ED",image:"1f468-1f3fb-200d-1f3ed.png",sheet_x:37,sheet_y:12,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3ED",image:"1f468-1f3fc-200d-1f3ed.png",sheet_x:37,sheet_y:13,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3ED",image:"1f468-1f3fd-200d-1f3ed.png",sheet_x:37,sheet_y:14,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3ED",image:"1f468-1f3fe-200d-1f3ed.png",sheet_x:37,sheet_y:15,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3ED",image:"1f468-1f3ff-200d-1f3ed.png",sheet_x:37,sheet_y:16,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,factory,worker"},"flag-pk":{name:"Regional Indicator Symbol Letters PK",unified:"1F1F5-1F1F0",sheet_x:34,sheet_y:47,short_names:["flag-pk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pk,regional,indicator,symbol,letters"},arrow_lower_right:{name:"South East Arrow",unified:"2198",variations:["2198-FE0F"],sheet_x:0,sheet_y:10,short_names:["arrow_lower_right"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,lower,right,south,east,blue-square,direction,diagonal,southeast"},"flag-pw":{name:"Regional Indicator Symbol Letters PW",unified:"1F1F5-1F1FC",sheet_x:35,sheet_y:5,short_names:["flag-pw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pw,regional,indicator,symbol,letters"},"female-technologist":{name:"Female Technologist",unified:"1F469-200D-1F4BB",sheet_x:39,sheet_y:1,short_names:["female-technologist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F4BB",image:"1f469-1f3fb-200d-1f4bb.png",sheet_x:39,sheet_y:2,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F4BB",image:"1f469-1f3fc-200d-1f4bb.png",sheet_x:39,sheet_y:3,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F4BB",image:"1f469-1f3fd-200d-1f4bb.png",sheet_x:39,sheet_y:4,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F4BB",image:"1f469-1f3fe-200d-1f4bb.png",sheet_x:39,sheet_y:5,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F4BB",image:"1f469-1f3ff-200d-1f4bb.png",sheet_x:39,sheet_y:6,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,technologist"},arrow_lower_left:{name:"South West Arrow",unified:"2199",variations:["2199-FE0F"],sheet_x:0,sheet_y:11,short_names:["arrow_lower_left"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,lower,left,south,west,blue-square,direction,diagonal,southwest"},arrow_upper_left:{name:"North West Arrow",unified:"2196",variations:["2196-FE0F"],sheet_x:0,sheet_y:8,short_names:["arrow_upper_left"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,upper,left,north,west,blue-square,point,direction,diagonal,northwest"},"flag-ps":{name:"Regional Indicator Symbol Letters PS",unified:"1F1F5-1F1F8",sheet_x:35,sheet_y:3,short_names:["flag-ps"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ps,regional,indicator,symbol,letters"},"male-technologist":{name:"Male Technologist",unified:"1F468-200D-1F4BB",sheet_x:37,sheet_y:19,short_names:["male-technologist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F4BB",image:"1f468-1f3fb-200d-1f4bb.png",sheet_x:37,sheet_y:20,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F4BB",image:"1f468-1f3fc-200d-1f4bb.png",sheet_x:37,sheet_y:21,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F4BB",image:"1f468-1f3fd-200d-1f4bb.png",sheet_x:37,sheet_y:22,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F4BB",image:"1f468-1f3fe-200d-1f4bb.png",sheet_x:37,sheet_y:23,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F4BB",image:"1f468-1f3ff-200d-1f4bb.png",sheet_x:37,sheet_y:24,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,technologist"},"flag-pa":{name:"Regional Indicator Symbol Letters PA",unified:"1F1F5-1F1E6",sheet_x:34,sheet_y:42,short_names:["flag-pa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pa,regional,indicator,symbol,letters"},"female-office-worker":{name:"Female Office Worker",unified:"1F469-200D-1F4BC",sheet_x:39,sheet_y:7,short_names:["female-office-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F4BC",image:"1f469-1f3fb-200d-1f4bc.png",sheet_x:39,sheet_y:8,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F4BC",image:"1f469-1f3fc-200d-1f4bc.png",sheet_x:39,sheet_y:9,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F4BC",image:"1f469-1f3fd-200d-1f4bc.png",sheet_x:39,sheet_y:10,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F4BC",image:"1f469-1f3fe-200d-1f4bc.png",sheet_x:39,sheet_y:11,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F4BC",image:"1f469-1f3ff-200d-1f4bc.png",sheet_x:39,sheet_y:12,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,office,worker"},arrow_up_down:{name:"Up Down Arrow",unified:"2195",variations:["2195-FE0F"],sheet_x:0,sheet_y:7,short_names:["arrow_up_down"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,up,down,blue-square,direction,way,vertical"},"male-office-worker":{name:"Male Office Worker",unified:"1F468-200D-1F4BC",sheet_x:37,sheet_y:25,short_names:["male-office-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F4BC",image:"1f468-1f3fb-200d-1f4bc.png",sheet_x:37,sheet_y:26,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F4BC",image:"1f468-1f3fc-200d-1f4bc.png",sheet_x:37,sheet_y:27,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F4BC",image:"1f468-1f3fd-200d-1f4bc.png",sheet_x:37,sheet_y:28,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F4BC",image:"1f468-1f3fe-200d-1f4bc.png",sheet_x:37,sheet_y:29,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F4BC",image:"1f468-1f3ff-200d-1f4bc.png",sheet_x:37,sheet_y:30,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,office,worker"},"flag-pg":{name:"Regional Indicator Symbol Letters PG",unified:"1F1F5-1F1EC",sheet_x:34,sheet_y:45,short_names:["flag-pg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pg,regional,indicator,symbol,letters"},left_right_arrow:{name:"Left Right Arrow",unified:"2194",variations:["2194-FE0F"],sheet_x:0,sheet_y:6,short_names:["left_right_arrow"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"left,right,arrow,shape,direction,horizontal,sideways"},"flag-py":{name:"Regional Indicator Symbol Letters PY",unified:"1F1F5-1F1FE",sheet_x:35,sheet_y:6,short_names:["flag-py"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,py,regional,indicator,symbol,letters"},arrow_right_hook:{name:"Rightwards Arrow with Hook",unified:"21AA",variations:["21AA-FE0F"],sheet_x:0,sheet_y:13,short_names:["arrow_right_hook"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,right,hook,rightwards,with,blue-square,return,rotate,direction"},"female-mechanic":{name:"Female Mechanic",unified:"1F469-200D-1F527",sheet_x:39,sheet_y:13,short_names:["female-mechanic"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F527",image:"1f469-1f3fb-200d-1f527.png",sheet_x:39,sheet_y:14,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F527",image:"1f469-1f3fc-200d-1f527.png",sheet_x:39,sheet_y:15,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F527",image:"1f469-1f3fd-200d-1f527.png",sheet_x:39,sheet_y:16,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F527",image:"1f469-1f3fe-200d-1f527.png",sheet_x:39,sheet_y:17,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F527",image:"1f469-1f3ff-200d-1f527.png",sheet_x:39,sheet_y:18,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,mechanic"},"flag-pe":{name:"Regional Indicator Symbol Letters PE",unified:"1F1F5-1F1EA",sheet_x:34,sheet_y:43,short_names:["flag-pe"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pe,regional,indicator,symbol,letters"},"male-mechanic":{name:"Male Mechanic",unified:"1F468-200D-1F527",sheet_x:37,sheet_y:31,short_names:["male-mechanic"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F527",image:"1f468-1f3fb-200d-1f527.png",sheet_x:37,sheet_y:32,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F527",image:"1f468-1f3fc-200d-1f527.png",sheet_x:37,sheet_y:33,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F527",image:"1f468-1f3fd-200d-1f527.png",sheet_x:37,sheet_y:34,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F527",image:"1f468-1f3fe-200d-1f527.png",sheet_x:37,sheet_y:35,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F527",image:"1f468-1f3ff-200d-1f527.png",sheet_x:37,sheet_y:36,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,mechanic"},leftwards_arrow_with_hook:{name:"Leftwards Arrow with Hook",unified:"21A9",variations:["21A9-FE0F"],sheet_x:0,sheet_y:12,short_names:["leftwards_arrow_with_hook"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"leftwards,arrow,with,hook,back,return,blue-square,undo,enter"},"female-scientist":{name:"Female Scientist",unified:"1F469-200D-1F52C",sheet_x:39,sheet_y:19,short_names:["female-scientist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F52C",image:"1f469-1f3fb-200d-1f52c.png",sheet_x:39,sheet_y:20,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F52C",image:"1f469-1f3fc-200d-1f52c.png",sheet_x:39,sheet_y:21,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F52C",image:"1f469-1f3fd-200d-1f52c.png",sheet_x:39,sheet_y:22,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F52C",image:"1f469-1f3fe-200d-1f52c.png",sheet_x:39,sheet_y:23,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F52C",image:"1f469-1f3ff-200d-1f52c.png",sheet_x:39,sheet_y:24,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,scientist"},arrow_heading_up:{name:"Arrow Pointing Rightwards Then Curving Upwards",unified:"2934",variations:["2934-FE0F"],sheet_x:3,sheet_y:37,short_names:["arrow_heading_up"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,heading,up,pointing,rightwards,then,curving,upwards,blue-square,direction,top"},"flag-ph":{name:"Regional Indicator Symbol Letters PH",unified:"1F1F5-1F1ED",sheet_x:34,sheet_y:46,short_names:["flag-ph"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ph,regional,indicator,symbol,letters"},"flag-pn":{name:"Regional Indicator Symbol Letters PN",unified:"1F1F5-1F1F3",sheet_x:35,sheet_y:1,short_names:["flag-pn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pn,regional,indicator,symbol,letters"},arrow_heading_down:{name:"Arrow Pointing Rightwards Then Curving Downwards",unified:"2935",variations:["2935-FE0F"],sheet_x:3,sheet_y:38,short_names:["arrow_heading_down"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,heading,down,pointing,rightwards,then,curving,downwards,blue-square,direction,bottom"},"male-scientist":{name:"Male Scientist",unified:"1F468-200D-1F52C",sheet_x:37,sheet_y:37,short_names:["male-scientist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F52C",image:"1f468-1f3fb-200d-1f52c.png",sheet_x:37,sheet_y:38,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F52C",image:"1f468-1f3fc-200d-1f52c.png",sheet_x:37,sheet_y:39,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F52C",image:"1f468-1f3fd-200d-1f52c.png",sheet_x:37,sheet_y:40,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F52C",image:"1f468-1f3fe-200d-1f52c.png",sheet_x:37,sheet_y:41,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F52C",image:"1f468-1f3ff-200d-1f52c.png",sheet_x:37,sheet_y:42,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,scientist"},"flag-pl":{name:"Regional Indicator Symbol Letters PL",unified:"1F1F5-1F1F1",sheet_x:34,sheet_y:48,short_names:["flag-pl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pl,regional,indicator,symbol,letters"},twisted_rightwards_arrows:{name:"Twisted Rightwards Arrows",unified:"1F500",sheet_x:19,sheet_y:14,short_names:["twisted_rightwards_arrows"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"twisted,rightwards,arrows,blue-square,shuffle,music,random"},"female-artist":{name:"Female Artist",unified:"1F469-200D-1F3A8",sheet_x:38,sheet_y:30,short_names:["female-artist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3A8",image:"1f469-1f3fb-200d-1f3a8.png",sheet_x:38,sheet_y:31,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3A8",image:"1f469-1f3fc-200d-1f3a8.png",sheet_x:38,sheet_y:32,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3A8",image:"1f469-1f3fd-200d-1f3a8.png",sheet_x:38,sheet_y:33,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3A8",image:"1f469-1f3fe-200d-1f3a8.png",sheet_x:38,sheet_y:34,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3A8",image:"1f469-1f3ff-200d-1f3a8.png",sheet_x:38,sheet_y:35,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,artist"},repeat:{name:"Clockwise Rightwards and Leftwards Open Circle Arrows",unified:"1F501",sheet_x:19,sheet_y:15,short_names:["repeat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"repeat,clockwise,rightwards,and,leftwards,open,circle,arrows,loop,record"},"male-artist":{name:"Male Artist",unified:"1F468-200D-1F3A8",sheet_x:36,sheet_y:48,short_names:["male-artist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3A8",image:"1f468-1f3fb-200d-1f3a8.png",sheet_x:37,sheet_y:0,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3A8",image:"1f468-1f3fc-200d-1f3a8.png",sheet_x:37,sheet_y:1,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3A8",image:"1f468-1f3fd-200d-1f3a8.png",sheet_x:37,sheet_y:2,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3A8",image:"1f468-1f3fe-200d-1f3a8.png",sheet_x:37,sheet_y:3,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3A8",image:"1f468-1f3ff-200d-1f3a8.png",sheet_x:37,sheet_y:4,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,artist"},"flag-pt":{name:"Regional Indicator Symbol Letters PT",unified:"1F1F5-1F1F9",sheet_x:35,sheet_y:4,short_names:["flag-pt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pt,regional,indicator,symbol,letters"},"flag-pr":{name:"Regional Indicator Symbol Letters PR",unified:"1F1F5-1F1F7",sheet_x:35,sheet_y:2,short_names:["flag-pr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pr,regional,indicator,symbol,letters"},repeat_one:{name:"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay",unified:"1F502",sheet_x:19,sheet_y:16,short_names:["repeat_one"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"repeat,one,clockwise,rightwards,and,leftwards,open,circle,arrows,with,circled,overlay,blue-square,loop"},"female-firefighter":{name:"Female Firefighter",unified:"1F469-200D-1F692",sheet_x:39,sheet_y:31,short_names:["female-firefighter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F692",image:"1f469-1f3fb-200d-1f692.png",sheet_x:39,sheet_y:32,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F692",image:"1f469-1f3fc-200d-1f692.png",sheet_x:39,sheet_y:33,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F692",image:"1f469-1f3fd-200d-1f692.png",sheet_x:39,sheet_y:34,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F692",image:"1f469-1f3fe-200d-1f692.png",sheet_x:39,sheet_y:35,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F692",image:"1f469-1f3ff-200d-1f692.png",sheet_x:39,sheet_y:36,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,firefighter"},"male-firefighter":{name:"Male Firefighter",unified:"1F468-200D-1F692",sheet_x:38,sheet_y:0,short_names:["male-firefighter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F692",image:"1f468-1f3fb-200d-1f692.png",sheet_x:38,sheet_y:1,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F692",image:"1f468-1f3fc-200d-1f692.png",sheet_x:38,sheet_y:2,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F692",image:"1f468-1f3fd-200d-1f692.png",sheet_x:38,sheet_y:3,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F692",image:"1f468-1f3fe-200d-1f692.png",sheet_x:38,sheet_y:4,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F692",image:"1f468-1f3ff-200d-1f692.png",sheet_x:38,sheet_y:5,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,firefighter"},"flag-qa":{name:"Regional Indicator Symbol Letters QA",unified:"1F1F6-1F1E6",sheet_x:35,sheet_y:7,short_names:["flag-qa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,qa,regional,indicator,symbol,letters"},arrows_counterclockwise:{name:"Anticlockwise Downwards and Upwards Open Circle Arrows",unified:"1F504",sheet_x:19,sheet_y:18,short_names:["arrows_counterclockwise"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrows,counterclockwise,anticlockwise,downwards,and,upwards,open,circle,blue-square,sync,cycle"},arrows_clockwise:{name:"Clockwise Downwards and Upwards Open Circle Arrows",unified:"1F503",sheet_x:19,sheet_y:17,short_names:["arrows_clockwise"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrows,clockwise,downwards,and,upwards,open,circle,sync,cycle,round,repeat"},"female-pilot":{name:"Female Pilot",unified:"1F469-200D-2708-FE0F",sheet_x:42,sheet_y:5,short_names:["female-pilot"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2708-FE0F",image:"1f469-1f3fb-200d-2708-fe0f.png",sheet_x:42,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2708-FE0F",image:"1f469-1f3fc-200d-2708-fe0f.png",sheet_x:42,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2708-FE0F",image:"1f469-1f3fd-200d-2708-fe0f.png",sheet_x:42,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2708-FE0F",image:"1f469-1f3fe-200d-2708-fe0f.png",sheet_x:42,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2708-FE0F",image:"1f469-1f3ff-200d-2708-fe0f.png",sheet_x:42,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,pilot"},"flag-re":{name:"Regional Indicator Symbol Letters RE",unified:"1F1F7-1F1EA",sheet_x:35,sheet_y:8,short_names:["flag-re"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,re,regional,indicator,symbol,letters"},musical_note:{name:"Musical Note",unified:"1F3B5",sheet_x:8,sheet_y:16,short_names:["musical_note"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"musical,note,score,tone,sound"},"male-pilot":{name:"Male Pilot",unified:"1F468-200D-2708-FE0F",sheet_x:41,sheet_y:26,short_names:["male-pilot"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2708-FE0F",image:"1f468-1f3fb-200d-2708-fe0f.png",sheet_x:41,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2708-FE0F",image:"1f468-1f3fc-200d-2708-fe0f.png",sheet_x:41,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2708-FE0F",image:"1f468-1f3fd-200d-2708-fe0f.png",sheet_x:41,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2708-FE0F",image:"1f468-1f3fe-200d-2708-fe0f.png",sheet_x:41,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2708-FE0F",image:"1f468-1f3ff-200d-2708-fe0f.png",sheet_x:41,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,pilot"},"flag-ro":{name:"Regional Indicator Symbol Letters RO",unified:"1F1F7-1F1F4",sheet_x:35,sheet_y:9,short_names:["flag-ro"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ro,regional,indicator,symbol,letters"},notes:{name:"Multiple Musical Notes",unified:"1F3B6",sheet_x:8,sheet_y:17,short_names:["notes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"notes,multiple,musical,music,score"},"female-astronaut":{name:"Female Astronaut",unified:"1F469-200D-1F680",sheet_x:39,sheet_y:25,short_names:["female-astronaut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F680",image:"1f469-1f3fb-200d-1f680.png",sheet_x:39,sheet_y:26,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F680",image:"1f469-1f3fc-200d-1f680.png",sheet_x:39,sheet_y:27,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F680",image:"1f469-1f3fd-200d-1f680.png",sheet_x:39,sheet_y:28,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F680",image:"1f469-1f3fe-200d-1f680.png",sheet_x:39,sheet_y:29,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F680",image:"1f469-1f3ff-200d-1f680.png",sheet_x:39,sheet_y:30,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,astronaut"},"flag-ru":{name:"Regional Indicator Symbol Letters RU",unified:"1F1F7-1F1FA",sheet_x:35,sheet_y:11,short_names:["flag-ru","ru"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ru,regional,indicator,symbol,letters"},heavy_plus_sign:{name:"Heavy Plus Sign",unified:"2795",sheet_x:3,sheet_y:31,short_names:["heavy_plus_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,plus,sign,math,calculation,addition,more,increase"},"flag-rw":{name:"Regional Indicator Symbol Letters RW",unified:"1F1F7-1F1FC",sheet_x:35,sheet_y:12,short_names:["flag-rw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,rw,regional,indicator,symbol,letters"},"male-astronaut":{name:"Male Astronaut",unified:"1F468-200D-1F680",sheet_x:37,sheet_y:43,short_names:["male-astronaut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F680",image:"1f468-1f3fb-200d-1f680.png",sheet_x:37,sheet_y:44,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F680",image:"1f468-1f3fc-200d-1f680.png",sheet_x:37,sheet_y:45,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F680",image:"1f468-1f3fd-200d-1f680.png",sheet_x:37,sheet_y:46,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F680",image:"1f468-1f3fe-200d-1f680.png",sheet_x:37,sheet_y:47,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F680",image:"1f468-1f3ff-200d-1f680.png",sheet_x:37,sheet_y:48,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,astronaut"},heavy_minus_sign:{name:"Heavy Minus Sign",unified:"2796",sheet_x:3,sheet_y:32,short_names:["heavy_minus_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,minus,sign,math,calculation,subtract,less"},"female-judge":{name:"Female Judge",unified:"1F469-200D-2696-FE0F",sheet_x:41,sheet_y:48,short_names:["female-judge"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2696-FE0F",image:"1f469-1f3fb-200d-2696-fe0f.png",sheet_x:42,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2696-FE0F",image:"1f469-1f3fc-200d-2696-fe0f.png",sheet_x:42,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2696-FE0F",image:"1f469-1f3fd-200d-2696-fe0f.png",sheet_x:42,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2696-FE0F",image:"1f469-1f3fe-200d-2696-fe0f.png",sheet_x:42,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2696-FE0F",image:"1f469-1f3ff-200d-2696-fe0f.png",sheet_x:42,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,judge"},"flag-bl":{name:"Regional Indicator Symbol Letters BL",unified:"1F1E7-1F1F1",sheet_x:31,sheet_y:37,short_names:["flag-bl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bl,regional,indicator,symbol,letters"},"flag-sh":{name:"Regional Indicator Symbol Letters SH",unified:"1F1F8-1F1ED",sheet_x:35,sheet_y:19,short_names:["flag-sh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sh,regional,indicator,symbol,letters"},heavy_division_sign:{name:"Heavy Division Sign",unified:"2797",sheet_x:3,sheet_y:33,short_names:["heavy_division_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,division,sign,divide,math,calculation"},"male-judge":{name:"Male Judge",unified:"1F468-200D-2696-FE0F",sheet_x:41,sheet_y:20,short_names:["male-judge"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2696-FE0F",image:"1f468-1f3fb-200d-2696-fe0f.png",sheet_x:41,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2696-FE0F",image:"1f468-1f3fc-200d-2696-fe0f.png",sheet_x:41,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2696-FE0F",image:"1f468-1f3fd-200d-2696-fe0f.png",sheet_x:41,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2696-FE0F",image:"1f468-1f3fe-200d-2696-fe0f.png",sheet_x:41,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2696-FE0F",image:"1f468-1f3ff-200d-2696-fe0f.png",sheet_x:41,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,judge"},heavy_multiplication_x:{name:"Heavy Multiplication X",unified:"2716",variations:["2716-FE0F"],sheet_x:3,sheet_y:15,short_names:["heavy_multiplication_x"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,multiplication,x,math,calculation"},mother_christmas:{name:"Mother Christmas",unified:"1F936",sheet_x:29,sheet_y:14,short_names:["mother_christmas"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F936-1F3FB",image:"1f936-1f3fb.png",sheet_x:29,sheet_y:15,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F936-1F3FC",image:"1f936-1f3fc.png",sheet_x:29,sheet_y:16,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F936-1F3FD",image:"1f936-1f3fd.png",sheet_x:29,sheet_y:17,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F936-1F3FE",image:"1f936-1f3fe.png",sheet_x:29,sheet_y:18,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F936-1F3FF",image:"1f936-1f3ff.png",sheet_x:29,sheet_y:19,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"mother,christmas"},"flag-kn":{name:"Regional Indicator Symbol Letters KN",unified:"1F1F0-1F1F3",sheet_x:33,sheet_y:38,short_names:["flag-kn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kn,regional,indicator,symbol,letters"},heavy_dollar_sign:{name:"Heavy Dollar Sign",unified:"1F4B2",sheet_x:17,sheet_y:35,short_names:["heavy_dollar_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,dollar,sign,money,sales,payment,currency,buck"},"flag-lc":{name:"Regional Indicator Symbol Letters LC",unified:"1F1F1-1F1E8",sheet_x:33,sheet_y:46,short_names:["flag-lc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lc,regional,indicator,symbol,letters"},santa:{name:"Father Christmas",unified:"1F385",sheet_x:7,sheet_y:17,short_names:["santa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F385-1F3FB",image:"1f385-1f3fb.png",sheet_x:7,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F385-1F3FC",image:"1f385-1f3fc.png",sheet_x:7,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F385-1F3FD",image:"1f385-1f3fd.png",sheet_x:7,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F385-1F3FE",image:"1f385-1f3fe.png",sheet_x:7,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F385-1F3FF",image:"1f385-1f3ff.png",sheet_x:7,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"santa,father,christmas,festival,man,male,xmas,father christmas"},currency_exchange:{name:"Currency Exchange",unified:"1F4B1",sheet_x:17,sheet_y:34,short_names:["currency_exchange"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"currency,exchange,money,sales,dollar,travel"},princess:{name:"Princess",unified:"1F478",sheet_x:15,sheet_y:30,short_names:["princess"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F478-1F3FB",image:"1f478-1f3fb.png",sheet_x:15,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F478-1F3FC",image:"1f478-1f3fc.png",sheet_x:15,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F478-1F3FD",image:"1f478-1f3fd.png",sheet_x:15,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F478-1F3FE",image:"1f478-1f3fe.png",sheet_x:15,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F478-1F3FF",image:"1f478-1f3ff.png",sheet_x:15,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"princess,girl,woman,female,blond,crown,royal,queen"},"flag-pm":{name:"Regional Indicator Symbol Letters PM",unified:"1F1F5-1F1F2",sheet_x:35,sheet_y:0,short_names:["flag-pm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pm,regional,indicator,symbol,letters"},prince:{name:"Prince",unified:"1F934",sheet_x:29,sheet_y:2,short_names:["prince"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F934-1F3FB",image:"1f934-1f3fb.png",sheet_x:29,sheet_y:3,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F934-1F3FC",image:"1f934-1f3fc.png",sheet_x:29,sheet_y:4,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F934-1F3FD",image:"1f934-1f3fd.png",sheet_x:29,sheet_y:5,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F934-1F3FE",image:"1f934-1f3fe.png",sheet_x:29,sheet_y:6,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F934-1F3FF",image:"1f934-1f3ff.png",sheet_x:29,sheet_y:7,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"prince,boy,man,male,crown,royal,king"},"flag-vc":{name:"Regional Indicator Symbol Letters VC",unified:"1F1FB-1F1E8",sheet_x:36,sheet_y:10,short_names:["flag-vc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vc,regional,indicator,symbol,letters"},tm:{name:"Trade Mark Sign",unified:"2122",variations:["2122-FE0F"],sheet_x:0,sheet_y:4,short_names:["tm"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tm,trade,mark,sign,trademark,brand,law,legal"},"flag-ws":{name:"Regional Indicator Symbol Letters WS",unified:"1F1FC-1F1F8",sheet_x:36,sheet_y:17,short_names:["flag-ws"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ws,regional,indicator,symbol,letters"},copyright:{name:"Copyright Sign",unified:"00A9",variations:["00A9-FE0F"],sheet_x:0,sheet_y:0,short_names:["copyright"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:false,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"copyright,sign,ip,license,circle,law,legal"},bride_with_veil:{name:"Bride with Veil",unified:"1F470",sheet_x:14,sheet_y:31,short_names:["bride_with_veil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F470-1F3FB",image:"1f470-1f3fb.png",sheet_x:14,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F470-1F3FC",image:"1f470-1f3fc.png",sheet_x:14,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F470-1F3FD",image:"1f470-1f3fd.png",sheet_x:14,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F470-1F3FE",image:"1f470-1f3fe.png",sheet_x:14,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F470-1F3FF",image:"1f470-1f3ff.png",sheet_x:14,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"bride,with,veil,couple,marriage,wedding,woman"},registered:{name:"Registered Sign",unified:"00AE",variations:["00AE-FE0F"],sheet_x:0,sheet_y:1,short_names:["registered"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:false,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"registered,sign,alphabet,circle"},"flag-sm":{name:"Regional Indicator Symbol Letters SM",unified:"1F1F8-1F1F2",sheet_x:35,sheet_y:24,short_names:["flag-sm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sm,regional,indicator,symbol,letters"},man_in_tuxedo:{name:"Man in Tuxedo",unified:"1F935",sheet_x:29,sheet_y:8,short_names:["man_in_tuxedo"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F935-1F3FB",image:"1f935-1f3fb.png",sheet_x:29,sheet_y:9,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F935-1F3FC",image:"1f935-1f3fc.png",sheet_x:29,sheet_y:10,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F935-1F3FD",image:"1f935-1f3fd.png",sheet_x:29,sheet_y:11,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F935-1F3FE",image:"1f935-1f3fe.png",sheet_x:29,sheet_y:12,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F935-1F3FF",image:"1f935-1f3ff.png",sheet_x:29,sheet_y:13,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"man,in,tuxedo,couple,marriage,wedding,groom"},angel:{name:"Baby Angel",unified:"1F47C",sheet_x:15,sheet_y:39,short_names:["angel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F47C-1F3FB",image:"1f47c-1f3fb.png",sheet_x:15,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F47C-1F3FC",image:"1f47c-1f3fc.png",sheet_x:15,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F47C-1F3FD",image:"1f47c-1f3fd.png",sheet_x:15,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F47C-1F3FE",image:"1f47c-1f3fe.png",sheet_x:15,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F47C-1F3FF",image:"1f47c-1f3ff.png",sheet_x:15,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"angel,baby,heaven,wings,halo"},wavy_dash:{name:"Wavy Dash",unified:"3030",variations:["3030-FE0F"],sheet_x:3,sheet_y:46,short_names:["wavy_dash"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wavy,dash,draw,line,moustache,mustache,squiggle,scribble"},"flag-st":{name:"Regional Indicator Symbol Letters ST",unified:"1F1F8-1F1F9",sheet_x:35,sheet_y:29,short_names:["flag-st"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,st,regional,indicator,symbol,letters"},curly_loop:{name:"Curly Loop",unified:"27B0",sheet_x:3,sheet_y:35,short_names:["curly_loop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"curly,loop,scribble,draw,shape,squiggle"},"flag-sa":{name:"Regional Indicator Symbol Letters SA",unified:"1F1F8-1F1E6",sheet_x:35,sheet_y:13,short_names:["flag-sa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sa,regional,indicator,symbol,letters"},pregnant_woman:{name:"Pregnant Woman",unified:"1F930",sheet_x:28,sheet_y:39,short_names:["pregnant_woman"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F930-1F3FB",image:"1f930-1f3fb.png",sheet_x:28,sheet_y:40,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F930-1F3FC",image:"1f930-1f3fc.png",sheet_x:28,sheet_y:41,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F930-1F3FD",image:"1f930-1f3fd.png",sheet_x:28,sheet_y:42,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F930-1F3FE",image:"1f930-1f3fe.png",sheet_x:28,sheet_y:43,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F930-1F3FF",image:"1f930-1f3ff.png",sheet_x:28,sheet_y:44,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"pregnant,woman,baby"},loop:{name:"Double Curly Loop",unified:"27BF",sheet_x:3,sheet_y:36,short_names:["loop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"loop,double,curly,tape,cassette"},"woman-bowing":{name:"Woman Bowing",unified:"1F647-200D-2640-FE0F",sheet_x:45,sheet_y:2,short_names:["woman-bowing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F647-1F3FB-200D-2640-FE0F",image:"1f647-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F647-1F3FC-200D-2640-FE0F",image:"1f647-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F647-1F3FD-200D-2640-FE0F",image:"1f647-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F647-1F3FE-200D-2640-FE0F",image:"1f647-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F647-1F3FF-200D-2640-FE0F",image:"1f647-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,bowing"},"flag-sn":{name:"Regional Indicator Symbol Letters SN",unified:"1F1F8-1F1F3",sheet_x:35,sheet_y:25,short_names:["flag-sn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sn,regional,indicator,symbol,letters"},"flag-rs":{name:"Regional Indicator Symbol Letters RS",unified:"1F1F7-1F1F8",sheet_x:35,sheet_y:10,short_names:["flag-rs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,rs,regional,indicator,symbol,letters"},bow:{name:"Person Bowing Deeply",unified:"1F647",sheet_x:24,sheet_y:16,short_names:["bow"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F647-1F3FB",image:"1f647-1f3fb.png",sheet_x:24,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F647-1F3FC",image:"1f647-1f3fc.png",sheet_x:24,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F647-1F3FD",image:"1f647-1f3fd.png",sheet_x:24,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F647-1F3FE",image:"1f647-1f3fe.png",sheet_x:24,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F647-1F3FF",image:"1f647-1f3ff.png",sheet_x:24,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F647-200D-2642-FE0F",search:"bow,person,bowing,deeply"},end:{name:"End with Leftwards Arrow Above",unified:"1F51A",sheet_x:19,sheet_y:40,short_names:["end"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"end,with,leftwards,arrow,above,words"},back:{name:"Back with Leftwards Arrow Above",unified:"1F519",sheet_x:19,sheet_y:39,short_names:["back"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"back,with,leftwards,arrow,above,words,return"},information_desk_person:{name:"Information Desk Person",unified:"1F481",sheet_x:16,sheet_y:0,short_names:["information_desk_person"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F481-1F3FB",image:"1f481-1f3fb.png",sheet_x:16,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F481-1F3FC",image:"1f481-1f3fc.png",sheet_x:16,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F481-1F3FD",image:"1f481-1f3fd.png",sheet_x:16,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F481-1F3FE",image:"1f481-1f3fe.png",sheet_x:16,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F481-1F3FF",image:"1f481-1f3ff.png",sheet_x:16,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F481-200D-2640-FE0F",search:"information,desk,person"},"flag-sc":{name:"Regional Indicator Symbol Letters SC",unified:"1F1F8-1F1E8",sheet_x:35,sheet_y:15,short_names:["flag-sc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sc,regional,indicator,symbol,letters"},on:{name:"On with Exclamation Mark with Left Right Arrow Above",unified:"1F51B",sheet_x:19,sheet_y:41,short_names:["on"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"on,with,exclamation,mark,left,right,arrow,above,words"},"man-tipping-hand":{name:"Man Tipping Hand",unified:"1F481-200D-2642-FE0F",sheet_x:43,sheet_y:22,short_names:["man-tipping-hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F481-1F3FB-200D-2642-FE0F",image:"1f481-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F481-1F3FC-200D-2642-FE0F",image:"1f481-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F481-1F3FD-200D-2642-FE0F",image:"1f481-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F481-1F3FE-200D-2642-FE0F",image:"1f481-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F481-1F3FF-200D-2642-FE0F",image:"1f481-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,tipping,hand"},"flag-sl":{name:"Regional Indicator Symbol Letters SL",unified:"1F1F8-1F1F1",sheet_x:35,sheet_y:23,short_names:["flag-sl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sl,regional,indicator,symbol,letters"},"flag-sg":{name:"Regional Indicator Symbol Letters SG",unified:"1F1F8-1F1EC",sheet_x:35,sheet_y:18,short_names:["flag-sg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sg,regional,indicator,symbol,letters"},no_good:{name:"Face with No Good Gesture",unified:"1F645",sheet_x:24,sheet_y:4,short_names:["no_good"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F645-1F3FB",image:"1f645-1f3fb.png",sheet_x:24,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F645-1F3FC",image:"1f645-1f3fc.png",sheet_x:24,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F645-1F3FD",image:"1f645-1f3fd.png",sheet_x:24,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F645-1F3FE",image:"1f645-1f3fe.png",sheet_x:24,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F645-1F3FF",image:"1f645-1f3ff.png",sheet_x:24,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F645-200D-2640-FE0F",search:"no,good,face,with,gesture"},top:{name:"Top with Upwards Arrow Above",unified:"1F51D",sheet_x:19,sheet_y:43,short_names:["top"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"top,with,upwards,arrow,above,words,blue-square"},"flag-sx":{name:"Regional Indicator Symbol Letters SX",unified:"1F1F8-1F1FD",sheet_x:35,sheet_y:31,short_names:["flag-sx"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sx,regional,indicator,symbol,letters"},soon:{name:"Soon with Rightwards Arrow Above",unified:"1F51C",sheet_x:19,sheet_y:42,short_names:["soon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"soon,with,rightwards,arrow,above,words"},"man-gesturing-no":{name:"Man Gesturing No",unified:"1F645-200D-2642-FE0F",sheet_x:44,sheet_y:33,short_names:["man-gesturing-no"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F645-1F3FB-200D-2642-FE0F",image:"1f645-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F645-1F3FC-200D-2642-FE0F",image:"1f645-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F645-1F3FD-200D-2642-FE0F",image:"1f645-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F645-1F3FE-200D-2642-FE0F",image:"1f645-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F645-1F3FF-200D-2642-FE0F",image:"1f645-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,gesturing,no"},"flag-sk":{name:"Regional Indicator Symbol Letters SK",unified:"1F1F8-1F1F0",sheet_x:35,sheet_y:22,short_names:["flag-sk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sk,regional,indicator,symbol,letters"},heavy_check_mark:{name:"Heavy Check Mark",unified:"2714",variations:["2714-FE0F"],sheet_x:3,sheet_y:14,short_names:["heavy_check_mark"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,check,mark,ok,nike,answer,yes,tick"},ok_woman:{name:"Face with Ok Gesture",unified:"1F646",sheet_x:24,sheet_y:10,short_names:["ok_woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F646-1F3FB",image:"1f646-1f3fb.png",sheet_x:24,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F646-1F3FC",image:"1f646-1f3fc.png",sheet_x:24,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F646-1F3FD",image:"1f646-1f3fd.png",sheet_x:24,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F646-1F3FE",image:"1f646-1f3fe.png",sheet_x:24,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F646-1F3FF",image:"1f646-1f3ff.png",sheet_x:24,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F646-200D-2640-FE0F",search:"ok,woman,face,with,gesture,women,girl,female,pink,human"},"man-gesturing-ok":{name:"Man Gesturing Ok",unified:"1F646-200D-2642-FE0F",sheet_x:44,sheet_y:45,short_names:["man-gesturing-ok"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F646-1F3FB-200D-2642-FE0F",image:"1f646-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F646-1F3FC-200D-2642-FE0F",image:"1f646-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F646-1F3FD-200D-2642-FE0F",image:"1f646-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F646-1F3FE-200D-2642-FE0F",image:"1f646-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F646-1F3FF-200D-2642-FE0F",image:"1f646-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,gesturing,ok"},"flag-si":{name:"Regional Indicator Symbol Letters SI",unified:"1F1F8-1F1EE",sheet_x:35,sheet_y:20,short_names:["flag-si"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,si,regional,indicator,symbol,letters"},ballot_box_with_check:{name:"Ballot Box with Check",unified:"2611",variations:["2611-FE0F"],sheet_x:0,sheet_y:47,short_names:["ballot_box_with_check"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ballot,box,with,check,ok,agree,confirm,black-square,vote,election,yes"},"flag-sb":{name:"Regional Indicator Symbol Letters SB",unified:"1F1F8-1F1E7",sheet_x:35,sheet_y:14,short_names:["flag-sb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sb,regional,indicator,symbol,letters"},radio_button:{name:"Radio Button",unified:"1F518",sheet_x:19,sheet_y:38,short_names:["radio_button"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"radio,button,input,old,music,circle"},raising_hand:{name:"Happy Person Raising One Hand",unified:"1F64B",sheet_x:24,sheet_y:25,short_names:["raising_hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB",image:"1f64b-1f3fb.png",sheet_x:24,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64B-1F3FC",image:"1f64b-1f3fc.png",sheet_x:24,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64B-1F3FD",image:"1f64b-1f3fd.png",sheet_x:24,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64B-1F3FE",image:"1f64b-1f3fe.png",sheet_x:24,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64B-1F3FF",image:"1f64b-1f3ff.png",sheet_x:24,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F64B-200D-2640-FE0F",search:"raising,hand,happy,person,one"},white_circle:{name:"Medium White Circle",unified:"26AA",variations:["26AA-FE0F"],sheet_x:2,sheet_y:1,short_names:["white_circle"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,circle,medium,shape,round"},"man-raising-hand":{name:"Man Raising Hand",unified:"1F64B-200D-2642-FE0F",sheet_x:45,sheet_y:20,short_names:["man-raising-hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB-200D-2642-FE0F",image:"1f64b-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64B-1F3FC-200D-2642-FE0F",image:"1f64b-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64B-1F3FD-200D-2642-FE0F",image:"1f64b-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64B-1F3FE-200D-2642-FE0F",image:"1f64b-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64B-1F3FF-200D-2642-FE0F",image:"1f64b-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,raising,hand"},"flag-so":{name:"Regional Indicator Symbol Letters SO",unified:"1F1F8-1F1F4",sheet_x:35,sheet_y:26,short_names:["flag-so"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,so,regional,indicator,symbol,letters"},black_circle:{name:"Medium Black Circle",unified:"26AB",variations:["26AB-FE0F"],sheet_x:2,sheet_y:2,short_names:["black_circle"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,circle,medium,shape,button,round"},face_palm:{name:"Face Palm",unified:"1F926",sheet_x:28,sheet_y:32,short_names:["face_palm"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB",image:"1f926-1f3fb.png",sheet_x:28,sheet_y:33,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC",image:"1f926-1f3fc.png",sheet_x:28,sheet_y:34,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD",image:"1f926-1f3fd.png",sheet_x:28,sheet_y:35,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE",image:"1f926-1f3fe.png",sheet_x:28,sheet_y:36,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF",image:"1f926-1f3ff.png",sheet_x:28,sheet_y:37,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"face,palm"},"flag-za":{name:"Regional Indicator Symbol Letters ZA",unified:"1F1FF-1F1E6",sheet_x:36,sheet_y:21,short_names:["flag-za"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,za,regional,indicator,symbol,letters"},red_circle:{name:"Large Red Circle",unified:"1F534",sheet_x:20,sheet_y:17,short_names:["red_circle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"red,circle,large,shape,error,danger"},"woman-facepalming":{name:"Woman Facepalming",unified:"1F926-200D-2640-FE0F",sheet_x:47,sheet_y:0,short_names:["woman-facepalming"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB-200D-2640-FE0F",image:"1f926-1f3fb-200d-2640-fe0f.png",sheet_x:47,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC-200D-2640-FE0F",image:"1f926-1f3fc-200d-2640-fe0f.png",sheet_x:47,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD-200D-2640-FE0F",image:"1f926-1f3fd-200d-2640-fe0f.png",sheet_x:47,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE-200D-2640-FE0F",image:"1f926-1f3fe-200d-2640-fe0f.png",sheet_x:47,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF-200D-2640-FE0F",image:"1f926-1f3ff-200d-2640-fe0f.png",sheet_x:47,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,facepalming"},"flag-gs":{name:"Regional Indicator Symbol Letters GS",unified:"1F1EC-1F1F8",sheet_x:33,sheet_y:7,short_names:["flag-gs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gs,regional,indicator,symbol,letters"},large_blue_circle:{name:"Large Blue Circle",unified:"1F535",sheet_x:20,sheet_y:18,short_names:["large_blue_circle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"large,blue,circle,shape,icon,button"},"flag-kr":{name:"Regional Indicator Symbol Letters KR",unified:"1F1F0-1F1F7",sheet_x:33,sheet_y:40,short_names:["flag-kr","kr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kr,regional,indicator,symbol,letters"},"man-facepalming":{name:"Man Facepalming",unified:"1F926-200D-2642-FE0F",sheet_x:47,sheet_y:6,short_names:["man-facepalming"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB-200D-2642-FE0F",image:"1f926-1f3fb-200d-2642-fe0f.png",sheet_x:47,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC-200D-2642-FE0F",image:"1f926-1f3fc-200d-2642-fe0f.png",sheet_x:47,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD-200D-2642-FE0F",image:"1f926-1f3fd-200d-2642-fe0f.png",sheet_x:47,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE-200D-2642-FE0F",image:"1f926-1f3fe-200d-2642-fe0f.png",sheet_x:47,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF-200D-2642-FE0F",image:"1f926-1f3ff-200d-2642-fe0f.png",sheet_x:47,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,facepalming"},small_red_triangle:{name:"Up-Pointing Red Triangle",unified:"1F53A",sheet_x:20,sheet_y:23,short_names:["small_red_triangle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"small,red,triangle,up,pointing,shape,direction,top"},"flag-ss":{name:"Regional Indicator Symbol Letters SS",unified:"1F1F8-1F1F8",sheet_x:35,sheet_y:28,short_names:["flag-ss"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ss,regional,indicator,symbol,letters"},shrug:{name:"Shrug",unified:"1F937",sheet_x:29,sheet_y:20,short_names:["shrug"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB",image:"1f937-1f3fb.png",sheet_x:29,sheet_y:21,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC",image:"1f937-1f3fc.png",sheet_x:29,sheet_y:22,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD",image:"1f937-1f3fd.png",sheet_x:29,sheet_y:23,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE",image:"1f937-1f3fe.png",sheet_x:29,sheet_y:24,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF",image:"1f937-1f3ff.png",sheet_x:29,sheet_y:25,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"shrug"},"woman-shrugging":{name:"Woman Shrugging",unified:"1F937-200D-2640-FE0F",sheet_x:47,sheet_y:12,short_names:["woman-shrugging"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB-200D-2640-FE0F",image:"1f937-1f3fb-200d-2640-fe0f.png",sheet_x:47,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC-200D-2640-FE0F",image:"1f937-1f3fc-200d-2640-fe0f.png",sheet_x:47,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD-200D-2640-FE0F",image:"1f937-1f3fd-200d-2640-fe0f.png",sheet_x:47,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE-200D-2640-FE0F",image:"1f937-1f3fe-200d-2640-fe0f.png",sheet_x:47,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF-200D-2640-FE0F",image:"1f937-1f3ff-200d-2640-fe0f.png",sheet_x:47,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,shrugging"},small_red_triangle_down:{name:"Down-Pointing Red Triangle",unified:"1F53B",sheet_x:20,sheet_y:24,short_names:["small_red_triangle_down"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"small,red,triangle,down,pointing,shape,direction,bottom"},"flag-es":{name:"Regional Indicator Symbol Letters ES",unified:"1F1EA-1F1F8",sheet_x:32,sheet_y:33,short_names:["flag-es","es"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,es,regional,indicator,symbol,letters"},"man-shrugging":{name:"Man Shrugging",unified:"1F937-200D-2642-FE0F",sheet_x:47,sheet_y:18,short_names:["man-shrugging"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB-200D-2642-FE0F",image:"1f937-1f3fb-200d-2642-fe0f.png",sheet_x:47,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC-200D-2642-FE0F",image:"1f937-1f3fc-200d-2642-fe0f.png",sheet_x:47,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD-200D-2642-FE0F",image:"1f937-1f3fd-200d-2642-fe0f.png",sheet_x:47,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE-200D-2642-FE0F",image:"1f937-1f3fe-200d-2642-fe0f.png",sheet_x:47,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF-200D-2642-FE0F",image:"1f937-1f3ff-200d-2642-fe0f.png",sheet_x:47,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,shrugging"},small_orange_diamond:{name:"Small Orange Diamond",unified:"1F538",sheet_x:20,sheet_y:21,short_names:["small_orange_diamond"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"small,orange,diamond,shape,jewel,gem"},"flag-lk":{name:"Regional Indicator Symbol Letters LK",unified:"1F1F1-1F1F0",sheet_x:33,sheet_y:48,short_names:["flag-lk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lk,regional,indicator,symbol,letters"},small_blue_diamond:{name:"Small Blue Diamond",unified:"1F539",sheet_x:20,sheet_y:22,short_names:["small_blue_diamond"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"small,blue,diamond,shape,jewel,gem"},person_with_pouting_face:{name:"Person with Pouting Face",unified:"1F64E",sheet_x:24,sheet_y:43,short_names:["person_with_pouting_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB",image:"1f64e-1f3fb.png",sheet_x:24,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64E-1F3FC",image:"1f64e-1f3fc.png",sheet_x:24,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64E-1F3FD",image:"1f64e-1f3fd.png",sheet_x:24,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64E-1F3FE",image:"1f64e-1f3fe.png",sheet_x:24,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64E-1F3FF",image:"1f64e-1f3ff.png",sheet_x:24,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F64E-200D-2640-FE0F",search:"person,with,pouting,face"},"flag-sd":{name:"Regional Indicator Symbol Letters SD",unified:"1F1F8-1F1E9",sheet_x:35,sheet_y:16,short_names:["flag-sd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sd,regional,indicator,symbol,letters"},"man-pouting":{name:"Man Pouting",unified:"1F64E-200D-2642-FE0F",sheet_x:45,sheet_y:44,short_names:["man-pouting"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB-200D-2642-FE0F",image:"1f64e-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64E-1F3FC-200D-2642-FE0F",image:"1f64e-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64E-1F3FD-200D-2642-FE0F",image:"1f64e-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64E-1F3FE-200D-2642-FE0F",image:"1f64e-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64E-1F3FF-200D-2642-FE0F",image:"1f64e-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,pouting"},large_orange_diamond:{name:"Large Orange Diamond",unified:"1F536",sheet_x:20,sheet_y:19,short_names:["large_orange_diamond"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"large,orange,diamond,shape,jewel,gem"},"flag-sr":{name:"Regional Indicator Symbol Letters SR",unified:"1F1F8-1F1F7",sheet_x:35,sheet_y:27,short_names:["flag-sr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sr,regional,indicator,symbol,letters"},"flag-sz":{name:"Regional Indicator Symbol Letters SZ",unified:"1F1F8-1F1FF",sheet_x:35,sheet_y:33,short_names:["flag-sz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sz,regional,indicator,symbol,letters"},large_blue_diamond:{name:"Large Blue Diamond",unified:"1F537",sheet_x:20,sheet_y:20,short_names:["large_blue_diamond"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"large,blue,diamond,shape,jewel,gem"},person_frowning:{name:"Person Frowning",unified:"1F64D",sheet_x:24,sheet_y:37,short_names:["person_frowning"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB",image:"1f64d-1f3fb.png",sheet_x:24,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64D-1F3FC",image:"1f64d-1f3fc.png",sheet_x:24,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64D-1F3FD",image:"1f64d-1f3fd.png",sheet_x:24,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64D-1F3FE",image:"1f64d-1f3fe.png",sheet_x:24,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64D-1F3FF",image:"1f64d-1f3ff.png",sheet_x:24,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F64D-200D-2640-FE0F",search:"person,frowning"},"man-frowning":{name:"Man Frowning",unified:"1F64D-200D-2642-FE0F",sheet_x:45,sheet_y:32,short_names:["man-frowning"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB-200D-2642-FE0F",image:"1f64d-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64D-1F3FC-200D-2642-FE0F",image:"1f64d-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64D-1F3FD-200D-2642-FE0F",image:"1f64d-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64D-1F3FE-200D-2642-FE0F",image:"1f64d-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64D-1F3FF-200D-2642-FE0F",image:"1f64d-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,frowning"},"flag-se":{name:"Regional Indicator Symbol Letters SE",unified:"1F1F8-1F1EA",sheet_x:35,sheet_y:17,short_names:["flag-se"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,se,regional,indicator,symbol,letters"},white_square_button:{name:"White Square Button",unified:"1F533",sheet_x:20,sheet_y:16,short_names:["white_square_button"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,square,button,shape,input"},"flag-ch":{name:"Regional Indicator Symbol Letters CH",unified:"1F1E8-1F1ED",sheet_x:32,sheet_y:5,short_names:["flag-ch"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ch,regional,indicator,symbol,letters"},haircut:{name:"Haircut",unified:"1F487",sheet_x:16,sheet_y:31,short_names:["haircut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F487-1F3FB",image:"1f487-1f3fb.png",sheet_x:16,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F487-1F3FC",image:"1f487-1f3fc.png",sheet_x:16,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F487-1F3FD",image:"1f487-1f3fd.png",sheet_x:16,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F487-1F3FE",image:"1f487-1f3fe.png",sheet_x:16,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F487-1F3FF",image:"1f487-1f3ff.png",sheet_x:16,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F487-200D-2640-FE0F",search:"haircut"},black_square_button:{name:"Black Square Button",unified:"1F532",sheet_x:20,sheet_y:15,short_names:["black_square_button"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,square,button,shape,input,frame"},"man-getting-haircut":{name:"Man Getting Haircut",unified:"1F487-200D-2642-FE0F",sheet_x:44,sheet_y:9,short_names:["man-getting-haircut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F487-1F3FB-200D-2642-FE0F",image:"1f487-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F487-1F3FC-200D-2642-FE0F",image:"1f487-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F487-1F3FD-200D-2642-FE0F",image:"1f487-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F487-1F3FE-200D-2642-FE0F",image:"1f487-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F487-1F3FF-200D-2642-FE0F",image:"1f487-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,getting,haircut"},black_small_square:{name:"Black Small Square",unified:"25AA",variations:["25AA-FE0F"],sheet_x:0,sheet_y:33,short_names:["black_small_square"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,small,square,shape,icon"},"flag-sy":{name:"Regional Indicator Symbol Letters SY",unified:"1F1F8-1F1FE",sheet_x:35,sheet_y:32,short_names:["flag-sy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sy,regional,indicator,symbol,letters"},"flag-tw":{name:"Regional Indicator Symbol Letters TW",unified:"1F1F9-1F1FC",sheet_x:36,sheet_y:0,short_names:["flag-tw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tw,regional,indicator,symbol,letters"},massage:{name:"Face Massage",unified:"1F486",sheet_x:16,sheet_y:25,short_names:["massage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F486-1F3FB",image:"1f486-1f3fb.png",sheet_x:16,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F486-1F3FC",image:"1f486-1f3fc.png",sheet_x:16,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F486-1F3FD",image:"1f486-1f3fd.png",sheet_x:16,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F486-1F3FE",image:"1f486-1f3fe.png",sheet_x:16,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F486-1F3FF",image:"1f486-1f3ff.png",sheet_x:16,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F486-200D-2640-FE0F",search:"massage,face"},white_small_square:{name:"White Small Square",unified:"25AB",variations:["25AB-FE0F"],sheet_x:0,sheet_y:34,short_names:["white_small_square"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,small,square,shape,icon"},black_medium_small_square:{name:"Black Medium Small Square",unified:"25FE",variations:["25FE-FE0F"],sheet_x:0,sheet_y:40,short_names:["black_medium_small_square"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,medium,small,square,icon,shape,button"},"man-getting-massage":{name:"Man Getting Massage",unified:"1F486-200D-2642-FE0F",sheet_x:43,sheet_y:46,short_names:["man-getting-massage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F486-1F3FB-200D-2642-FE0F",image:"1f486-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F486-1F3FC-200D-2642-FE0F",image:"1f486-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F486-1F3FD-200D-2642-FE0F",image:"1f486-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F486-1F3FE-200D-2642-FE0F",image:"1f486-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F486-1F3FF-200D-2642-FE0F",image:"1f486-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,getting,massage"},"flag-tj":{name:"Regional Indicator Symbol Letters TJ",unified:"1F1F9-1F1EF",sheet_x:35,sheet_y:40,short_names:["flag-tj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tj,regional,indicator,symbol,letters"},man_in_business_suit_levitating:{name:"Man in Business Suit Levitating",unified:"1F574",sheet_x:21,sheet_y:11,short_names:["man_in_business_suit_levitating"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F574-1F3FB",image:"1f574-1f3fb.png",sheet_x:21,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F574-1F3FC",image:"1f574-1f3fc.png",sheet_x:21,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F574-1F3FD",image:"1f574-1f3fd.png",sheet_x:21,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F574-1F3FE",image:"1f574-1f3fe.png",sheet_x:21,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F574-1F3FF",image:"1f574-1f3ff.png",sheet_x:21,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"man,in,business,suit,levitating"},"flag-tz":{name:"Regional Indicator Symbol Letters TZ",unified:"1F1F9-1F1FF",sheet_x:36,sheet_y:1,short_names:["flag-tz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tz,regional,indicator,symbol,letters"},white_medium_small_square:{name:"White Medium Small Square",unified:"25FD",variations:["25FD-FE0F"],sheet_x:0,sheet_y:39,short_names:["white_medium_small_square"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,medium,small,square,shape,stone,icon,button"},dancer:{name:"Dancer",unified:"1F483",sheet_x:16,sheet_y:12,short_names:["dancer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F483-1F3FB",image:"1f483-1f3fb.png",sheet_x:16,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F483-1F3FC",image:"1f483-1f3fc.png",sheet_x:16,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F483-1F3FD",image:"1f483-1f3fd.png",sheet_x:16,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F483-1F3FE",image:"1f483-1f3fe.png",sheet_x:16,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F483-1F3FF",image:"1f483-1f3ff.png",sheet_x:16,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"dancer,female,girl,woman,fun"},black_medium_square:{name:"Black Medium Square",unified:"25FC",variations:["25FC-FE0F"],sheet_x:0,sheet_y:38,short_names:["black_medium_square"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,medium,square,shape,button,icon"},"flag-th":{name:"Regional Indicator Symbol Letters TH",unified:"1F1F9-1F1ED",sheet_x:35,sheet_y:39,short_names:["flag-th"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,th,regional,indicator,symbol,letters"},"flag-tl":{name:"Regional Indicator Symbol Letters TL",unified:"1F1F9-1F1F1",sheet_x:35,sheet_y:42,short_names:["flag-tl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tl,regional,indicator,symbol,letters"},man_dancing:{name:"Man Dancing",unified:"1F57A",sheet_x:21,sheet_y:27,short_names:["man_dancing"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F57A-1F3FB",image:"1f57a-1f3fb.png",sheet_x:21,sheet_y:28,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F57A-1F3FC",image:"1f57a-1f3fc.png",sheet_x:21,sheet_y:29,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F57A-1F3FD",image:"1f57a-1f3fd.png",sheet_x:21,sheet_y:30,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F57A-1F3FE",image:"1f57a-1f3fe.png",sheet_x:21,sheet_y:31,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F57A-1F3FF",image:"1f57a-1f3ff.png",sheet_x:21,sheet_y:32,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"man,dancing,male,boy,fun,dancer"},white_medium_square:{name:"White Medium Square",unified:"25FB",variations:["25FB-FE0F"],sheet_x:0,sheet_y:37,short_names:["white_medium_square"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,medium,square,shape,stone,icon"},"flag-tg":{name:"Regional Indicator Symbol Letters TG",unified:"1F1F9-1F1EC",sheet_x:35,sheet_y:38,short_names:["flag-tg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tg,regional,indicator,symbol,letters"},black_large_square:{name:"Black Large Square",unified:"2B1B",variations:["2B1B-FE0F"],sheet_x:3,sheet_y:42,short_names:["black_large_square"],text:"",added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,large,square,shape,icon,button"},dancers:{name:"Woman with Bunny Ears",unified:"1F46F",sheet_x:14,sheet_y:30,short_names:["dancers"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,obsoleted_by:"1F46F-200D-2640-FE0F",search:"dancers,woman,with,bunny,ears"},"man-with-bunny-ears-partying":{name:"Man with Bunny Ears Partying",unified:"1F46F-200D-2642-FE0F",sheet_x:42,sheet_y:28,short_names:["man-with-bunny-ears-partying"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"man,with,bunny,ears,partying"},"flag-tk":{name:"Regional Indicator Symbol Letters TK",unified:"1F1F9-1F1F0",sheet_x:35,sheet_y:41,short_names:["flag-tk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tk,regional,indicator,symbol,letters"},white_large_square:{name:"White Large Square",unified:"2B1C",variations:["2B1C-FE0F"],sheet_x:3,sheet_y:43,short_names:["white_large_square"],text:"",added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,large,square,shape,icon,stone,button"},speaker:{name:"Speaker",unified:"1F508",sheet_x:19,sheet_y:22,short_names:["speaker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"speaker,sound,volume,silence,broadcast"},"woman-walking":{name:"Woman Walking",unified:"1F6B6-200D-2640-FE0F",sheet_x:46,sheet_y:37,short_names:["woman-walking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB-200D-2640-FE0F",image:"1f6b6-1f3fb-200d-2640-fe0f.png",sheet_x:46,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B6-1F3FC-200D-2640-FE0F",image:"1f6b6-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B6-1F3FD-200D-2640-FE0F",image:"1f6b6-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B6-1F3FE-200D-2640-FE0F",image:"1f6b6-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B6-1F3FF-200D-2640-FE0F",image:"1f6b6-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,walking"},"flag-to":{name:"Regional Indicator Symbol Letters TO",unified:"1F1F9-1F1F4",sheet_x:35,sheet_y:45,short_names:["flag-to"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,to,regional,indicator,symbol,letters"},mute:{name:"Speaker with Cancellation Stroke",unified:"1F507",sheet_x:19,sheet_y:21,short_names:["mute"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mute,speaker,with,cancellation,stroke,sound,volume,silence,quiet"},walking:{name:"Pedestrian",unified:"1F6B6",sheet_x:26,sheet_y:26,short_names:["walking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB",image:"1f6b6-1f3fb.png",sheet_x:26,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6B6-1F3FC",image:"1f6b6-1f3fc.png",sheet_x:26,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6B6-1F3FD",image:"1f6b6-1f3fd.png",sheet_x:26,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6B6-1F3FE",image:"1f6b6-1f3fe.png",sheet_x:26,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6B6-1F3FF",image:"1f6b6-1f3ff.png",sheet_x:26,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F6B6-200D-2642-FE0F",search:"walking,pedestrian"},"flag-tt":{name:"Regional Indicator Symbol Letters TT",unified:"1F1F9-1F1F9",sheet_x:35,sheet_y:47,short_names:["flag-tt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tt,regional,indicator,symbol,letters"},"flag-tn":{name:"Regional Indicator Symbol Letters TN",unified:"1F1F9-1F1F3",sheet_x:35,sheet_y:44,short_names:["flag-tn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tn,regional,indicator,symbol,letters"},"woman-running":{name:"Woman Running",unified:"1F3C3-200D-2640-FE0F",sheet_x:39,sheet_y:37,short_names:["woman-running"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB-200D-2640-FE0F",image:"1f3c3-1f3fb-200d-2640-fe0f.png",sheet_x:39,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C3-1F3FC-200D-2640-FE0F",image:"1f3c3-1f3fc-200d-2640-fe0f.png",sheet_x:39,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C3-1F3FD-200D-2640-FE0F",image:"1f3c3-1f3fd-200d-2640-fe0f.png",sheet_x:39,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C3-1F3FE-200D-2640-FE0F",image:"1f3c3-1f3fe-200d-2640-fe0f.png",sheet_x:39,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C3-1F3FF-200D-2640-FE0F",image:"1f3c3-1f3ff-200d-2640-fe0f.png",sheet_x:39,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,running"},sound:{name:"Speaker with One Sound Wave",unified:"1F509",sheet_x:19,sheet_y:23,short_names:["sound"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sound,speaker,with,one,wave,volume,broadcast"},runner:{name:"Runner",unified:"1F3C3",sheet_x:8,sheet_y:35,short_names:["runner","running"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB",image:"1f3c3-1f3fb.png",sheet_x:8,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C3-1F3FC",image:"1f3c3-1f3fc.png",sheet_x:8,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C3-1F3FD",image:"1f3c3-1f3fd.png",sheet_x:8,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C3-1F3FE",image:"1f3c3-1f3fe.png",sheet_x:8,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C3-1F3FF",image:"1f3c3-1f3ff.png",sheet_x:8,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F3C3-200D-2642-FE0F",search:"runner,running"},"flag-tr":{name:"Regional Indicator Symbol Letters TR",unified:"1F1F9-1F1F7",sheet_x:35,sheet_y:46,short_names:["flag-tr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tr,regional,indicator,symbol,letters"},loud_sound:{name:"Speaker with Three Sound Waves",unified:"1F50A",sheet_x:19,sheet_y:24,short_names:["loud_sound"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"loud,sound,speaker,with,three,waves,volume,noise,noisy,broadcast"},"flag-tm":{name:"Regional Indicator Symbol Letters TM",unified:"1F1F9-1F1F2",sheet_x:35,sheet_y:43,short_names:["flag-tm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tm,regional,indicator,symbol,letters"},couple:{name:"Man and Woman Holding Hands",unified:"1F46B",sheet_x:14,sheet_y:21,short_names:["couple","man_and_woman_holding_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"couple,man,and,woman,holding,hands,pair,people,human,love,date,dating,like,affection,valentines,marriage"},bell:{name:"Bell",unified:"1F514",sheet_x:19,sheet_y:34,short_names:["bell"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bell,sound,notification,christmas,xmas,chime"},no_bell:{name:"Bell with Cancellation Stroke",unified:"1F515",sheet_x:19,sheet_y:35,short_names:["no_bell"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,bell,with,cancellation,stroke,sound,volume,mute,quiet,silent"},two_women_holding_hands:{name:"Two Women Holding Hands",unified:"1F46D",sheet_x:14,sheet_y:23,short_names:["two_women_holding_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"two,women,holding,hands,pair,friendship,couple,love,like,female,people,human"},"flag-tc":{name:"Regional Indicator Symbol Letters TC",unified:"1F1F9-1F1E8",sheet_x:35,sheet_y:35,short_names:["flag-tc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tc,regional,indicator,symbol,letters"},"flag-tv":{name:"Regional Indicator Symbol Letters TV",unified:"1F1F9-1F1FB",sheet_x:35,sheet_y:48,short_names:["flag-tv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tv,regional,indicator,symbol,letters"},two_men_holding_hands:{name:"Two Men Holding Hands",unified:"1F46C",sheet_x:14,sheet_y:22,short_names:["two_men_holding_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"two,men,holding,hands,pair,couple,love,like,bromance,friendship,people,human"},mega:{name:"Cheering Megaphone",unified:"1F4E3",sheet_x:18,sheet_y:35,short_names:["mega"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mega,cheering,megaphone,sound,speaker,volume"},"flag-ug":{name:"Regional Indicator Symbol Letters UG",unified:"1F1FA-1F1EC",sheet_x:36,sheet_y:3,short_names:["flag-ug"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ug,regional,indicator,symbol,letters"},loudspeaker:{name:"Public Address Loudspeaker",unified:"1F4E2",sheet_x:18,sheet_y:34,short_names:["loudspeaker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"loudspeaker,public,address,volume,sound"},couple_with_heart:{name:"Couple with Heart",unified:"1F491",sheet_x:16,sheet_y:46,short_names:["couple_with_heart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,obsoleted_by:"1F469-200D-2764-FE0F-200D-1F468",search:"couple,with,heart"},"woman-heart-woman":{name:"Woman Heart Woman",unified:"1F469-200D-2764-FE0F-200D-1F469",sheet_x:42,sheet_y:12,short_names:["woman-heart-woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"woman,heart"},"flag-ua":{name:"Regional Indicator Symbol Letters UA",unified:"1F1FA-1F1E6",sheet_x:36,sheet_y:2,short_names:["flag-ua"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ua,regional,indicator,symbol,letters"},"eye-in-speech-bubble":{name:"Eye in Speech Bubble",unified:"1F441-FE0F-200D-1F5E8-FE0F",sheet_x:41,sheet_y:0,short_names:["eye-in-speech-bubble"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:false,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"eye,in,speech,bubble"},"man-heart-man":{name:"Man Heart Man",unified:"1F468-200D-2764-FE0F-200D-1F468",sheet_x:41,sheet_y:32,short_names:["man-heart-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"man,heart"},"flag-ae":{name:"Regional Indicator Symbol Letters AE",unified:"1F1E6-1F1EA",sheet_x:31,sheet_y:13,short_names:["flag-ae"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ae,regional,indicator,symbol,letters"},speech_balloon:{name:"Speech Balloon",unified:"1F4AC",sheet_x:17,sheet_y:29,short_names:["speech_balloon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"speech,balloon,bubble,words,message,talk,chatting"},"flag-gb":{name:"Regional Indicator Symbol Letters GB",unified:"1F1EC-1F1E7",sheet_x:32,sheet_y:43,short_names:["flag-gb","gb","uk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gb,uk,regional,indicator,symbol,letters"},couplekiss:{name:"Kiss",unified:"1F48F",sheet_x:16,sheet_y:44,short_names:["couplekiss"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,obsoleted_by:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",search:"couplekiss,kiss"},left_speech_bubble:{name:"Left Speech Bubble",unified:"1F5E8",sheet_x:22,sheet_y:24,short_names:["left_speech_bubble"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"left,speech,bubble,words,message,talk,chatting"},"flag-us":{name:"Regional Indicator Symbol Letters US",unified:"1F1FA-1F1F8",sheet_x:36,sheet_y:6,short_names:["flag-us","us"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,us,regional,indicator,symbol,letters"},thought_balloon:{name:"Thought Balloon",unified:"1F4AD",sheet_x:17,sheet_y:30,short_names:["thought_balloon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"thought,balloon,bubble,cloud,speech,thinking"},"woman-kiss-woman":{name:"Woman Kiss Woman",unified:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",sheet_x:42,sheet_y:14,short_names:["woman-kiss-woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"woman,kiss"},"man-kiss-man":{name:"Man Kiss Man",unified:"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",sheet_x:41,sheet_y:33,short_names:["man-kiss-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"man,kiss"},right_anger_bubble:{name:"Right Anger Bubble",unified:"1F5EF",sheet_x:22,sheet_y:25,short_names:["right_anger_bubble"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"right,anger,bubble,caption,speech,thinking,mad"},"flag-vi":{name:"Regional Indicator Symbol Letters VI",unified:"1F1FB-1F1EE",sheet_x:36,sheet_y:13,short_names:["flag-vi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vi,regional,indicator,symbol,letters"},"flag-uy":{name:"Regional Indicator Symbol Letters UY",unified:"1F1FA-1F1FE",sheet_x:36,sheet_y:7,short_names:["flag-uy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,uy,regional,indicator,symbol,letters"},family:{name:"Family",unified:"1F46A",sheet_x:14,sheet_y:20,short_names:["family","man-woman-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,obsoleted_by:"1F468-200D-1F469-200D-1F466",search:"family,man,woman,boy"},spades:{name:"Black Spade Suit",unified:"2660",variations:["2660-FE0F"],sheet_x:1,sheet_y:32,short_names:["spades"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"spades,black,spade,suit,poker,cards,suits,magic"},"man-woman-girl":{name:"Man Woman Girl",unified:"1F468-200D-1F469-200D-1F467",sheet_x:41,sheet_y:11,short_names:["man-woman-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,woman,girl"},clubs:{name:"Black Club Suit",unified:"2663",variations:["2663-FE0F"],sheet_x:1,sheet_y:33,short_names:["clubs"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clubs,black,club,suit,poker,cards,magic,suits"},"flag-uz":{name:"Regional Indicator Symbol Letters UZ",unified:"1F1FA-1F1FF",sheet_x:36,sheet_y:8,short_names:["flag-uz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,uz,regional,indicator,symbol,letters"},"man-woman-girl-boy":{name:"Man Woman Girl Boy",unified:"1F468-200D-1F469-200D-1F467-200D-1F466",sheet_x:41,sheet_y:12,short_names:["man-woman-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,woman,girl,boy"},"flag-vu":{name:"Regional Indicator Symbol Letters VU",unified:"1F1FB-1F1FA",sheet_x:36,sheet_y:15,short_names:["flag-vu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vu,regional,indicator,symbol,letters"},hearts:{name:"Black Heart Suit",unified:"2665",variations:["2665-FE0F"],sheet_x:1,sheet_y:34,short_names:["hearts"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hearts,black,heart,suit,poker,cards,magic,suits"},"flag-va":{name:"Regional Indicator Symbol Letters VA",unified:"1F1FB-1F1E6",sheet_x:36,sheet_y:9,short_names:["flag-va"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,va,regional,indicator,symbol,letters"},"man-woman-boy-boy":{name:"Man Woman Boy Boy",unified:"1F468-200D-1F469-200D-1F466-200D-1F466",sheet_x:41,sheet_y:10,short_names:["man-woman-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,woman,boy"},diamonds:{name:"Black Diamond Suit",unified:"2666",variations:["2666-FE0F"],sheet_x:1,sheet_y:35,short_names:["diamonds"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"diamonds,black,diamond,suit,poker,cards,magic,suits"},"man-woman-girl-girl":{name:"Man Woman Girl Girl",unified:"1F468-200D-1F469-200D-1F467-200D-1F467",sheet_x:41,sheet_y:13,short_names:["man-woman-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,woman,girl"},black_joker:{name:"Playing Card Black Joker",unified:"1F0CF",sheet_x:4,sheet_y:2,short_names:["black_joker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,joker,playing,card,poker,cards,game,play,magic"},"flag-ve":{name:"Regional Indicator Symbol Letters VE",unified:"1F1FB-1F1EA",sheet_x:36,sheet_y:11,short_names:["flag-ve"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ve,regional,indicator,symbol,letters"},"woman-woman-boy":{name:"Woman Woman Boy",unified:"1F469-200D-1F469-200D-1F466",sheet_x:41,sheet_y:37,short_names:["woman-woman-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,boy"},flower_playing_cards:{name:"Flower Playing Cards",unified:"1F3B4",sheet_x:8,sheet_y:15,short_names:["flower_playing_cards"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flower,playing,cards,game,sunset,red"},"flag-vn":{name:"Regional Indicator Symbol Letters VN",unified:"1F1FB-1F1F3",sheet_x:36,sheet_y:14,short_names:["flag-vn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vn,regional,indicator,symbol,letters"},"woman-woman-girl":{name:"Woman Woman Girl",unified:"1F469-200D-1F469-200D-1F467",sheet_x:41,sheet_y:39,short_names:["woman-woman-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,girl"},"flag-wf":{name:"Regional Indicator Symbol Letters WF",unified:"1F1FC-1F1EB",sheet_x:36,sheet_y:16,short_names:["flag-wf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,wf,regional,indicator,symbol,letters"},mahjong:{name:"Mahjong Tile Red Dragon",unified:"1F004",variations:["1F004-FE0F"],sheet_x:4,sheet_y:1,short_names:["mahjong"],text:"",added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mahjong,tile,red,dragon,game,play,chinese,kanji"},"woman-woman-girl-boy":{name:"Woman Woman Girl Boy",unified:"1F469-200D-1F469-200D-1F467-200D-1F466",sheet_x:41,sheet_y:40,short_names:["woman-woman-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,girl,boy"},"flag-eh":{name:"Regional Indicator Symbol Letters EH",unified:"1F1EA-1F1ED",sheet_x:32,sheet_y:31,short_names:["flag-eh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,eh,regional,indicator,symbol,letters"},"clock1":{name:"Clock Face One Oclock",unified:"1F550",sheet_x:20,sheet_y:33,short_names:["clock1"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock1,clock,face,one,oclock,time,late,early,schedule"},"woman-woman-boy-boy":{name:"Woman Woman Boy Boy",unified:"1F469-200D-1F469-200D-1F466-200D-1F466",sheet_x:41,sheet_y:38,short_names:["woman-woman-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,boy"},"clock2":{name:"Clock Face Two Oclock",unified:"1F551",sheet_x:20,sheet_y:34,short_names:["clock2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock2,clock,face,two,oclock,time,late,early,schedule"},"flag-ye":{name:"Regional Indicator Symbol Letters YE",unified:"1F1FE-1F1EA",sheet_x:36,sheet_y:19,short_names:["flag-ye"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ye,regional,indicator,symbol,letters"},"clock3":{name:"Clock Face Three Oclock",unified:"1F552",sheet_x:20,sheet_y:35,short_names:["clock3"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock3,clock,face,three,oclock,time,late,early,schedule"},"woman-woman-girl-girl":{name:"Woman Woman Girl Girl",unified:"1F469-200D-1F469-200D-1F467-200D-1F467",sheet_x:41,sheet_y:41,short_names:["woman-woman-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,girl"},"flag-zm":{name:"Regional Indicator Symbol Letters ZM",unified:"1F1FF-1F1F2",sheet_x:36,sheet_y:22,short_names:["flag-zm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,zm,regional,indicator,symbol,letters"},"clock4":{name:"Clock Face Four Oclock",unified:"1F553",sheet_x:20,sheet_y:36,short_names:["clock4"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock4,clock,face,four,oclock,time,late,early,schedule"},"man-man-boy":{name:"Man Man Boy",unified:"1F468-200D-1F468-200D-1F466",sheet_x:41,sheet_y:4,short_names:["man-man-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,boy"},"flag-zw":{name:"Regional Indicator Symbol Letters ZW",unified:"1F1FF-1F1FC",sheet_x:36,sheet_y:23,short_names:["flag-zw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,zw,regional,indicator,symbol,letters"},"clock5":{name:"Clock Face Five Oclock",unified:"1F554",sheet_x:20,sheet_y:37,short_names:["clock5"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock5,clock,face,five,oclock,time,late,early,schedule"},"flag-ac":{name:"Regional Indicator Symbol Letters AC",unified:"1F1E6-1F1E8",sheet_x:31,sheet_y:11,short_names:["flag-ac"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ac,regional,indicator,symbol,letters"},"man-man-girl":{name:"Man Man Girl",unified:"1F468-200D-1F468-200D-1F467",sheet_x:41,sheet_y:6,short_names:["man-man-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,girl"},"flag-bv":{name:"Regional Indicator Symbol Letters BV",unified:"1F1E7-1F1FB",sheet_x:31,sheet_y:45,short_names:["flag-bv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bv,regional,indicator,symbol,letters"},"clock6":{name:"Clock Face Six Oclock",unified:"1F555",sheet_x:20,sheet_y:38,short_names:["clock6"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock6,clock,face,six,oclock,time,late,early,schedule,dawn,dusk"},"man-man-girl-boy":{name:"Man Man Girl Boy",unified:"1F468-200D-1F468-200D-1F467-200D-1F466",sheet_x:41,sheet_y:7,short_names:["man-man-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,girl,boy"},"clock7":{name:"Clock Face Seven Oclock",unified:"1F556",sheet_x:20,sheet_y:39,short_names:["clock7"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock7,clock,face,seven,oclock,time,late,early,schedule"},"flag-cp":{name:"Regional Indicator Symbol Letters CP",unified:"1F1E8-1F1F5",sheet_x:32,sheet_y:12,short_names:["flag-cp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"flag,cp,regional,indicator,symbol,letters"},"man-man-boy-boy":{name:"Man Man Boy Boy",unified:"1F468-200D-1F468-200D-1F466-200D-1F466",sheet_x:41,sheet_y:5,short_names:["man-man-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,boy"},"flag-dg":{name:"Regional Indicator Symbol Letters DG",unified:"1F1E9-1F1EC",sheet_x:32,sheet_y:21,short_names:["flag-dg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dg,regional,indicator,symbol,letters"},"clock8":{name:"Clock Face Eight Oclock",unified:"1F557",sheet_x:20,sheet_y:40,short_names:["clock8"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock8,clock,face,eight,oclock,time,late,early,schedule"},"man-man-girl-girl":{name:"Man Man Girl Girl",unified:"1F468-200D-1F468-200D-1F467-200D-1F467",sheet_x:41,sheet_y:8,short_names:["man-man-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,girl"},"woman-boy":{name:"Woman Boy",unified:"1F469-200D-1F466",sheet_x:38,sheet_y:48,short_names:["woman-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,boy"},"flag-ea":{name:"Regional Indicator Symbol Letters EA",unified:"1F1EA-1F1E6",sheet_x:32,sheet_y:27,short_names:["flag-ea"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ea,regional,indicator,symbol,letters"},"clock9":{name:"Clock Face Nine Oclock",unified:"1F558",sheet_x:20,sheet_y:41,short_names:["clock9"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock9,clock,face,nine,oclock,time,late,early,schedule"},"woman-girl":{name:"Woman Girl",unified:"1F469-200D-1F467",sheet_x:39,sheet_y:0,short_names:["woman-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,girl"},"clock10":{name:"Clock Face Ten Oclock",unified:"1F559",sheet_x:20,sheet_y:42,short_names:["clock10"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock10,clock,face,ten,oclock,time,late,early,schedule"},"flag-hm":{name:"Regional Indicator Symbol Letters HM",unified:"1F1ED-1F1F2",sheet_x:33,sheet_y:13,short_names:["flag-hm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hm,regional,indicator,symbol,letters"},"clock11":{name:"Clock Face Eleven Oclock",unified:"1F55A",sheet_x:20,sheet_y:43,short_names:["clock11"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock11,clock,face,eleven,oclock,time,late,early,schedule"},"woman-girl-boy":{name:"Woman Girl Boy",unified:"1F469-200D-1F467-200D-1F466",sheet_x:41,sheet_y:35,short_names:["woman-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,girl,boy"},"flag-mf":{name:"Regional Indicator Symbol Letters MF",unified:"1F1F2-1F1EB",sheet_x:34,sheet_y:10,short_names:["flag-mf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mf,regional,indicator,symbol,letters"},"woman-boy-boy":{name:"Woman Boy Boy",unified:"1F469-200D-1F466-200D-1F466",sheet_x:41,sheet_y:34,short_names:["woman-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,boy"},"flag-sj":{name:"Regional Indicator Symbol Letters SJ",unified:"1F1F8-1F1EF",sheet_x:35,sheet_y:21,short_names:["flag-sj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sj,regional,indicator,symbol,letters"},"clock12":{name:"Clock Face Twelve Oclock",unified:"1F55B",sheet_x:20,sheet_y:44,short_names:["clock12"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock12,clock,face,twelve,oclock,time,noon,midnight,midday,late,early,schedule"},"clock130":{name:"Clock Face One-Thirty",unified:"1F55C",sheet_x:20,sheet_y:45,short_names:["clock130"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock130,clock,face,one,thirty,time,late,early,schedule"},"flag-ta":{name:"Regional Indicator Symbol Letters TA",unified:"1F1F9-1F1E6",sheet_x:35,sheet_y:34,short_names:["flag-ta"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ta,regional,indicator,symbol,letters"},"woman-girl-girl":{name:"Woman Girl Girl",unified:"1F469-200D-1F467-200D-1F467",sheet_x:41,sheet_y:36,short_names:["woman-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,girl"},"flag-um":{name:"Regional Indicator Symbol Letters UM",unified:"1F1FA-1F1F2",sheet_x:36,sheet_y:4,short_names:["flag-um"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,um,regional,indicator,symbol,letters"},"man-boy":{name:"Man Boy",unified:"1F468-200D-1F466",sheet_x:37,sheet_y:17,short_names:["man-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,boy"},"clock230":{name:"Clock Face Two-Thirty",unified:"1F55D",sheet_x:20,sheet_y:46,short_names:["clock230"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock230,clock,face,two,thirty,time,late,early,schedule"},"clock330":{name:"Clock Face Three-Thirty",unified:"1F55E",sheet_x:20,sheet_y:47,short_names:["clock330"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock330,clock,face,three,thirty,time,late,early,schedule"},"man-girl":{name:"Man Girl",unified:"1F468-200D-1F467",sheet_x:37,sheet_y:18,short_names:["man-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,girl"},"flag-un":{name:"Regional Indicator Symbol Letters UN",unified:"1F1FA-1F1F3",sheet_x:36,sheet_y:5,short_names:["flag-un"],text:"",added_in:"6.0",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"flag,un,regional,indicator,symbol,letters"},"man-girl-boy":{name:"Man Girl Boy",unified:"1F468-200D-1F467-200D-1F466",sheet_x:41,sheet_y:2,short_names:["man-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,girl,boy"},"clock430":{name:"Clock Face Four-Thirty",unified:"1F55F",sheet_x:20,sheet_y:48,short_names:["clock430"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock430,clock,face,four,thirty,time,late,early,schedule"},"clock530":{name:"Clock Face Five-Thirty",unified:"1F560",sheet_x:21,sheet_y:0,short_names:["clock530"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock530,clock,face,five,thirty,time,late,early,schedule"},"man-boy-boy":{name:"Man Boy Boy",unified:"1F468-200D-1F466-200D-1F466",sheet_x:41,sheet_y:1,short_names:["man-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,boy"},"clock630":{name:"Clock Face Six-Thirty",unified:"1F561",sheet_x:21,sheet_y:1,short_names:["clock630"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock630,clock,face,six,thirty,time,late,early,schedule"},"man-girl-girl":{name:"Man Girl Girl",unified:"1F468-200D-1F467-200D-1F467",sheet_x:41,sheet_y:3,short_names:["man-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,girl"},womans_clothes:{name:"Womans Clothes",unified:"1F45A",sheet_x:13,sheet_y:33,short_names:["womans_clothes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"womans,clothes,fashion,shopping_bags,female"},"clock730":{name:"Clock Face Seven-Thirty",unified:"1F562",sheet_x:21,sheet_y:2,short_names:["clock730"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock730,clock,face,seven,thirty,time,late,early,schedule"},shirt:{name:"T-Shirt",unified:"1F455",sheet_x:13,sheet_y:28,short_names:["shirt","tshirt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"shirt,tshirt,t"},"clock830":{name:"Clock Face Eight-Thirty",unified:"1F563",sheet_x:21,sheet_y:3,short_names:["clock830"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock830,clock,face,eight,thirty,time,late,early,schedule"},jeans:{name:"Jeans",unified:"1F456",sheet_x:13,sheet_y:29,short_names:["jeans"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"jeans,fashion,shopping"},"clock930":{name:"Clock Face Nine-Thirty",unified:"1F564",sheet_x:21,sheet_y:4,short_names:["clock930"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock930,clock,face,nine,thirty,time,late,early,schedule"},"clock1030":{name:"Clock Face Ten-Thirty",unified:"1F565",sheet_x:21,sheet_y:5,short_names:["clock1030"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock1030,clock,face,ten,thirty,time,late,early,schedule"},necktie:{name:"Necktie",unified:"1F454",sheet_x:13,sheet_y:27,short_names:["necktie"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"necktie,shirt,suitup,formal,fashion,cloth,business"},dress:{name:"Dress",unified:"1F457",sheet_x:13,sheet_y:30,short_names:["dress"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dress,clothes,fashion,shopping"},"clock1130":{name:"Clock Face Eleven-Thirty",unified:"1F566",sheet_x:21,sheet_y:6,short_names:["clock1130"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock1130,clock,face,eleven,thirty,time,late,early,schedule"},"clock1230":{name:"Clock Face Twelve-Thirty",unified:"1F567",sheet_x:21,sheet_y:7,short_names:["clock1230"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock1230,clock,face,twelve,thirty,time,late,early,schedule"},bikini:{name:"Bikini",unified:"1F459",sheet_x:13,sheet_y:32,short_names:["bikini"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bikini,swimming,female,woman,girl,fashion,beach,summer"},kimono:{name:"Kimono",unified:"1F458",sheet_x:13,sheet_y:31,short_names:["kimono"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kimono,dress,fashion,women,female,japanese"},female_sign:{name:"Female Sign",unified:"2640",sheet_x:1,sheet_y:18,short_names:["female_sign"],text:"",added_in:"1.1",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"female,sign"},high_heel:{name:"High-Heeled Shoe",unified:"1F460",sheet_x:13,sheet_y:39,short_names:["high_heel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"high,heel,heeled,shoe,fashion,shoes,female,pumps,stiletto"},male_sign:{name:"Male Sign",unified:"2642",sheet_x:1,sheet_y:19,short_names:["male_sign"],text:"",added_in:"1.1",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"male,sign"},staff_of_aesculapius:{name:"Staff of Aesculapius",unified:"2695",sheet_x:1,sheet_y:42,short_names:["staff_of_aesculapius"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"staff,of,aesculapius"},sandal:{name:"Womans Sandal",unified:"1F461",sheet_x:13,sheet_y:40,short_names:["sandal"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sandal,womans,shoes,fashion,flip flops"},boot:{name:"Womans Boots",unified:"1F462",sheet_x:13,sheet_y:41,short_names:["boot"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"boot,womans,boots,shoes,fashion"},mans_shoe:{name:"Mans Shoe",unified:"1F45E",sheet_x:13,sheet_y:37,short_names:["mans_shoe","shoe"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mans,shoe,fashion,male"},athletic_shoe:{name:"Athletic Shoe",unified:"1F45F",sheet_x:13,sheet_y:38,short_names:["athletic_shoe"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"athletic,shoe,shoes,sports,sneakers"},womans_hat:{name:"Womans Hat",unified:"1F452",sheet_x:13,sheet_y:25,short_names:["womans_hat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"womans,hat,fashion,accessories,female,lady,spring"},tophat:{name:"Top Hat",unified:"1F3A9",sheet_x:8,sheet_y:4,short_names:["tophat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tophat,top,hat,magic,gentleman,classy,circus"},mortar_board:{name:"Graduation Cap",unified:"1F393",sheet_x:7,sheet_y:36,short_names:["mortar_board"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mortar,board,graduation,cap,school,college,degree,university,hat,legal,learn,education"},crown:{name:"Crown",unified:"1F451",sheet_x:13,sheet_y:24,short_names:["crown"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crown,king,kod,leader,royalty,lord"},helmet_with_white_cross:{name:"Helmet with White Cross",unified:"26D1",sheet_x:2,sheet_y:12,short_names:["helmet_with_white_cross"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"helmet,with,white,cross"},school_satchel:{name:"School Satchel",unified:"1F392",sheet_x:7,sheet_y:35,short_names:["school_satchel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"school,satchel,student,education,bag,backpack"},pouch:{name:"Pouch",unified:"1F45D",sheet_x:13,sheet_y:36,short_names:["pouch"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pouch,bag,accessories,shopping"},purse:{name:"Purse",unified:"1F45B",sheet_x:13,sheet_y:34,short_names:["purse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"purse,fashion,accessories,money,sales,shopping"},handbag:{name:"Handbag",unified:"1F45C",sheet_x:13,sheet_y:35,short_names:["handbag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"handbag,fashion,accessory,accessories,shopping"},briefcase:{name:"Briefcase",unified:"1F4BC",sheet_x:17,sheet_y:45,short_names:["briefcase"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"briefcase,business,documents,work,law,legal"},eyeglasses:{name:"Eyeglasses",unified:"1F453",sheet_x:13,sheet_y:26,short_names:["eyeglasses"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"eyeglasses,fashion,accessories,eyesight,nerdy,dork,geek"},dark_sunglasses:{name:"Dark Sunglasses",unified:"1F576",sheet_x:21,sheet_y:23,short_names:["dark_sunglasses"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"dark,sunglasses,face,cool,accessories"},closed_umbrella:{name:"Closed Umbrella",unified:"1F302",sheet_x:4,sheet_y:35,short_names:["closed_umbrella"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"closed,umbrella,weather,rain,drizzle"},umbrella:{name:"Umbrella",unified:"2602",variations:["2602-FE0F"],sheet_x:0,sheet_y:43,short_names:["umbrella"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"umbrella,rainy,weather,spring"},"man-woman-boy":{name:"Man Woman Boy",unified:"1F468-200D-1F469-200D-1F466",sheet_x:41,sheet_y:9,short_names:["man-woman-boy","family"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,obsoletes:"1F46A",search:"man,woman,boy,family"},"woman-heart-man":{name:"Woman Heart Man",unified:"1F469-200D-2764-FE0F-200D-1F468",sheet_x:42,sheet_y:11,short_names:["woman-heart-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F491",search:"woman,heart,man"},"woman-kiss-man":{name:"Woman Kiss Man",unified:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",sheet_x:42,sheet_y:13,short_names:["woman-kiss-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F48F",search:"woman,kiss,man"},"male-police-officer":{name:"Male Police Officer",unified:"1F46E-200D-2642-FE0F",sheet_x:42,sheet_y:21,short_names:["male-police-officer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB-200D-2642-FE0F",image:"1f46e-1f3fb-200d-2642-fe0f.png",sheet_x:42,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F46E-1F3FC-200D-2642-FE0F",image:"1f46e-1f3fc-200d-2642-fe0f.png",sheet_x:42,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F46E-1F3FD-200D-2642-FE0F",image:"1f46e-1f3fd-200d-2642-fe0f.png",sheet_x:42,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F46E-1F3FE-200D-2642-FE0F",image:"1f46e-1f3fe-200d-2642-fe0f.png",sheet_x:42,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F46E-1F3FF-200D-2642-FE0F",image:"1f46e-1f3ff-200d-2642-fe0f.png",sheet_x:42,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F46E",search:"male,police,officer"},"blond-haired-man":{name:"Blond Haired Man",unified:"1F471-200D-2642-FE0F",sheet_x:42,sheet_y:35,short_names:["blond-haired-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F471-1F3FB-200D-2642-FE0F",image:"1f471-1f3fb-200d-2642-fe0f.png",sheet_x:42,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F471-1F3FC-200D-2642-FE0F",image:"1f471-1f3fc-200d-2642-fe0f.png",sheet_x:42,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F471-1F3FD-200D-2642-FE0F",image:"1f471-1f3fd-200d-2642-fe0f.png",sheet_x:42,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F471-1F3FE-200D-2642-FE0F",image:"1f471-1f3fe-200d-2642-fe0f.png",sheet_x:42,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F471-1F3FF-200D-2642-FE0F",image:"1f471-1f3ff-200d-2642-fe0f.png",sheet_x:42,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F471",search:"blond,haired,man"},"man-wearing-turban":{name:"Man Wearing Turban",unified:"1F473-200D-2642-FE0F",sheet_x:42,sheet_y:47,short_names:["man-wearing-turban"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F473-1F3FB-200D-2642-FE0F",image:"1f473-1f3fb-200d-2642-fe0f.png",sheet_x:42,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F473-1F3FC-200D-2642-FE0F",image:"1f473-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F473-1F3FD-200D-2642-FE0F",image:"1f473-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F473-1F3FE-200D-2642-FE0F",image:"1f473-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F473-1F3FF-200D-2642-FE0F",image:"1f473-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F473",search:"man,wearing,turban"},"male-construction-worker":{name:"Male Construction Worker",unified:"1F477-200D-2642-FE0F",sheet_x:43,sheet_y:10,short_names:["male-construction-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F477-1F3FB-200D-2642-FE0F",image:"1f477-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F477-1F3FC-200D-2642-FE0F",image:"1f477-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F477-1F3FD-200D-2642-FE0F",image:"1f477-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F477-1F3FE-200D-2642-FE0F",image:"1f477-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F477-1F3FF-200D-2642-FE0F",image:"1f477-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F477",search:"male,construction,worker"},"male-guard":{name:"Male Guard",unified:"1F482-200D-2642-FE0F",sheet_x:43,sheet_y:34,short_names:["male-guard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F482-1F3FB-200D-2642-FE0F",image:"1f482-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F482-1F3FC-200D-2642-FE0F",image:"1f482-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F482-1F3FD-200D-2642-FE0F",image:"1f482-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F482-1F3FE-200D-2642-FE0F",image:"1f482-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F482-1F3FF-200D-2642-FE0F",image:"1f482-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F482",search:"male,guard"},"male-detective":{name:"Male Detective",unified:"1F575-FE0F-200D-2642-FE0F",sheet_x:44,sheet_y:21,short_names:["male-detective"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB-200D-2642-FE0F",image:"1f575-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC-200D-2642-FE0F",image:"1f575-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD-200D-2642-FE0F",image:"1f575-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE-200D-2642-FE0F",image:"1f575-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF-200D-2642-FE0F",image:"1f575-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F575",search:"male,detective"},"woman-with-bunny-ears-partying":{name:"Woman with Bunny Ears Partying",unified:"1F46F-200D-2640-FE0F",sheet_x:42,sheet_y:27,short_names:["woman-with-bunny-ears-partying"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F46F",search:"woman,with,bunny,ears,partying"},"man-running":{name:"Man Running",unified:"1F3C3-200D-2642-FE0F",sheet_x:39,sheet_y:43,short_names:["man-running"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB-200D-2642-FE0F",image:"1f3c3-1f3fb-200d-2642-fe0f.png",sheet_x:39,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C3-1F3FC-200D-2642-FE0F",image:"1f3c3-1f3fc-200d-2642-fe0f.png",sheet_x:39,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C3-1F3FD-200D-2642-FE0F",image:"1f3c3-1f3fd-200d-2642-fe0f.png",sheet_x:39,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C3-1F3FE-200D-2642-FE0F",image:"1f3c3-1f3fe-200d-2642-fe0f.png",sheet_x:39,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C3-1F3FF-200D-2642-FE0F",image:"1f3c3-1f3ff-200d-2642-fe0f.png",sheet_x:39,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3C3",search:"man,running"},"woman-getting-massage":{name:"Woman Getting Massage",unified:"1F486-200D-2640-FE0F",sheet_x:43,sheet_y:40,short_names:["woman-getting-massage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F486-1F3FB-200D-2640-FE0F",image:"1f486-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F486-1F3FC-200D-2640-FE0F",image:"1f486-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F486-1F3FD-200D-2640-FE0F",image:"1f486-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F486-1F3FE-200D-2640-FE0F",image:"1f486-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F486-1F3FF-200D-2640-FE0F",image:"1f486-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F486",search:"woman,getting,massage"},"woman-getting-haircut":{name:"Woman Getting Haircut",unified:"1F487-200D-2640-FE0F",sheet_x:44,sheet_y:3,short_names:["woman-getting-haircut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F487-1F3FB-200D-2640-FE0F",image:"1f487-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F487-1F3FC-200D-2640-FE0F",image:"1f487-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F487-1F3FD-200D-2640-FE0F",image:"1f487-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F487-1F3FE-200D-2640-FE0F",image:"1f487-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F487-1F3FF-200D-2640-FE0F",image:"1f487-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F487",search:"woman,getting,haircut"},"man-walking":{name:"Man Walking",unified:"1F6B6-200D-2642-FE0F",sheet_x:46,sheet_y:43,short_names:["man-walking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB-200D-2642-FE0F",image:"1f6b6-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B6-1F3FC-200D-2642-FE0F",image:"1f6b6-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B6-1F3FD-200D-2642-FE0F",image:"1f6b6-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B6-1F3FE-200D-2642-FE0F",image:"1f6b6-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B6-1F3FF-200D-2642-FE0F",image:"1f6b6-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B6",search:"man,walking"},"woman-tipping-hand":{name:"Woman Tipping Hand",unified:"1F481-200D-2640-FE0F",sheet_x:43,sheet_y:16,short_names:["woman-tipping-hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F481-1F3FB-200D-2640-FE0F",image:"1f481-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F481-1F3FC-200D-2640-FE0F",image:"1f481-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F481-1F3FD-200D-2640-FE0F",image:"1f481-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F481-1F3FE-200D-2640-FE0F",image:"1f481-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F481-1F3FF-200D-2640-FE0F",image:"1f481-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F481",search:"woman,tipping,hand"},"woman-gesturing-no":{name:"Woman Gesturing No",unified:"1F645-200D-2640-FE0F",sheet_x:44,sheet_y:27,short_names:["woman-gesturing-no"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F645-1F3FB-200D-2640-FE0F",image:"1f645-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F645-1F3FC-200D-2640-FE0F",image:"1f645-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F645-1F3FD-200D-2640-FE0F",image:"1f645-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F645-1F3FE-200D-2640-FE0F",image:"1f645-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F645-1F3FF-200D-2640-FE0F",image:"1f645-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F645",search:"woman,gesturing,no"},"woman-gesturing-ok":{name:"Woman Gesturing Ok",unified:"1F646-200D-2640-FE0F",sheet_x:44,sheet_y:39,short_names:["woman-gesturing-ok"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F646-1F3FB-200D-2640-FE0F",image:"1f646-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F646-1F3FC-200D-2640-FE0F",image:"1f646-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F646-1F3FD-200D-2640-FE0F",image:"1f646-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F646-1F3FE-200D-2640-FE0F",image:"1f646-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F646-1F3FF-200D-2640-FE0F",image:"1f646-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F646",search:"woman,gesturing,ok"},"man-bowing":{name:"Man Bowing",unified:"1F647-200D-2642-FE0F",sheet_x:45,sheet_y:8,short_names:["man-bowing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F647-1F3FB-200D-2642-FE0F",image:"1f647-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F647-1F3FC-200D-2642-FE0F",image:"1f647-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F647-1F3FD-200D-2642-FE0F",image:"1f647-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F647-1F3FE-200D-2642-FE0F",image:"1f647-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F647-1F3FF-200D-2642-FE0F",image:"1f647-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F647",search:"man,bowing"},"woman-raising-hand":{name:"Woman Raising Hand",unified:"1F64B-200D-2640-FE0F",sheet_x:45,sheet_y:14,short_names:["woman-raising-hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB-200D-2640-FE0F",image:"1f64b-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64B-1F3FC-200D-2640-FE0F",image:"1f64b-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64B-1F3FD-200D-2640-FE0F",image:"1f64b-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64B-1F3FE-200D-2640-FE0F",image:"1f64b-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64B-1F3FF-200D-2640-FE0F",image:"1f64b-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64B",search:"woman,raising,hand"},"woman-frowning":{name:"Woman Frowning",unified:"1F64D-200D-2640-FE0F",sheet_x:45,sheet_y:26,short_names:["woman-frowning"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB-200D-2640-FE0F",image:"1f64d-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64D-1F3FC-200D-2640-FE0F",image:"1f64d-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64D-1F3FD-200D-2640-FE0F",image:"1f64d-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64D-1F3FE-200D-2640-FE0F",image:"1f64d-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64D-1F3FF-200D-2640-FE0F",image:"1f64d-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64D",search:"woman,frowning"},"woman-pouting":{name:"Woman Pouting",unified:"1F64E-200D-2640-FE0F",sheet_x:45,sheet_y:38,short_names:["woman-pouting"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB-200D-2640-FE0F",image:"1f64e-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64E-1F3FC-200D-2640-FE0F",image:"1f64e-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64E-1F3FD-200D-2640-FE0F",image:"1f64e-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64E-1F3FE-200D-2640-FE0F",image:"1f64e-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64E-1F3FF-200D-2640-FE0F",image:"1f64e-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64E",search:"woman,pouting"}},skins:{"skin-tone-2":{name:"Emoji Modifier Fitzpatrick Type-1-2",unified:"1F3FB",sheet_x:10,sheet_y:20,short_names:["skin-tone-2"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,2,emoji,modifier,fitzpatrick,type,1"},"skin-tone-3":{name:"Emoji Modifier Fitzpatrick Type-3",unified:"1F3FC",sheet_x:10,sheet_y:21,short_names:["skin-tone-3"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,3,emoji,modifier,fitzpatrick,type"},"skin-tone-4":{name:"Emoji Modifier Fitzpatrick Type-4",unified:"1F3FD",sheet_x:10,sheet_y:22,short_names:["skin-tone-4"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,4,emoji,modifier,fitzpatrick,type"},"skin-tone-5":{name:"Emoji Modifier Fitzpatrick Type-5",unified:"1F3FE",sheet_x:10,sheet_y:23,short_names:["skin-tone-5"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,5,emoji,modifier,fitzpatrick,type"},"skin-tone-6":{name:"Emoji Modifier Fitzpatrick Type-6",unified:"1F3FF",sheet_x:10,sheet_y:24,short_names:["skin-tone-6"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,6,emoji,modifier,fitzpatrick,type"}},short_names:{red_car:"car",satisfied:"laughing",telephone:"phone",cooking:"fried_egg",honeybee:"bee",sailboat:"boat",cn:"flag-cn",flipper:"dolphin",knife:"hocho",poop:"hankey",shit:"hankey",fr:"flag-fr",heavy_exclamation_mark:"exclamation",paw_prints:"feet",de:"flag-de",thumbsup:"+1",thumbsdown:"-1",punch:"facepunch",lantern:"izakaya_lantern",envelope:"email",sign_of_the_horns:"the_horns",it:"flag-it",jp:"flag-jp",raised_hand:"hand",waxing_gibbous_moon:"moon",reversed_hand_with_middle_finger_extended:"middle_finger",collision:"boom",sun_small_cloud:"mostly_sunny",sun_behind_cloud:"barely_sunny",sun_behind_rain_cloud:"partly_sunny_rain",lightning_cloud:"lightning",open_book:"book",tornado_cloud:"tornado",pencil:"memo",ru:"flag-ru",kr:"flag-kr",es:"flag-es",running:"runner",man_and_woman_holding_hands:"couple",gb:"flag-gb",uk:"flag-gb",us:"flag-us","man-woman-boy":"family",tshirt:"shirt",shoe:"mans_shoe",family:"man-woman-boy"}};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unifiedToNative = exports.deepMerge = exports.intersect = exports.getSanitizedData = exports.getData = undefined;

	var _typeof2 = __webpack_require__(66);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _from = __webpack_require__(126);

	var _from2 = _interopRequireDefault(_from);

	var _set = __webpack_require__(139);

	var _set2 = _interopRequireDefault(_set);

	var _stringify = __webpack_require__(134);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _fromCodePoint = __webpack_require__(154);

	var _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _buildSearch = __webpack_require__(157);

	var _buildSearch2 = _interopRequireDefault(_buildSearch);

	var _data = __webpack_require__(137);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
	var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

	function unifiedToNative(unified) {
	  var unicodes = unified.split('-'),
	      codePoints = unicodes.map(function (u) {
	    return '0x' + u;
	  });

	  return _fromCodePoint2.default.apply(String, (0, _toConsumableArray3.default)(codePoints));
	}

	function sanitize(emoji) {
	  var name = emoji.name;
	  var short_names = emoji.short_names;
	  var skin_tone = emoji.skin_tone;
	  var skin_variations = emoji.skin_variations;
	  var emoticons = emoji.emoticons;
	  var unified = emoji.unified;
	  var custom = emoji.custom;
	  var imageUrl = emoji.imageUrl;
	  var id = emoji.id || short_names[0];
	  var colons = ':' + id + ':';

	  var bits = unified.split('-');
	  if (bits.length == 2 && unified.endsWith("-FE0F")) {
	    unified = unified.slice(0, -5);
	  }

	  if (custom) {
	    return {
	      id: id,
	      name: name,
	      colons: colons,
	      emoticons: emoticons,
	      custom: custom,
	      imageUrl: imageUrl
	    };
	  }

	  if (skin_tone) {
	    colons += ':skin-tone-' + skin_tone + ':';
	  }

	  return {
	    id: id,
	    name: name,
	    colons: colons,
	    emoticons: emoticons,
	    unified: unified.toLowerCase(),
	    skin: skin_tone || (skin_variations ? 1 : null),
	    native: unifiedToNative(unified)
	  };
	}

	function getSanitizedData() {
	  return sanitize(getData.apply(undefined, arguments));
	}

	function getData(emoji, skin, set) {
	  var emojiData = {};

	  if (typeof emoji == 'string') {
	    var matches = emoji.match(COLONS_REGEX);

	    if (matches) {
	      emoji = matches[1];

	      if (matches[2]) {
	        skin = parseInt(matches[2]);
	      }
	    }

	    if (_data2.default.short_names.hasOwnProperty(emoji)) {
	      emoji = _data2.default.short_names[emoji];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji)) {
	      emojiData = _data2.default.emojis[emoji];
	    }
	  } else if (emoji.custom) {
	    emojiData = emoji;

	    emojiData.search = (0, _buildSearch2.default)({
	      short_names: emoji.short_names,
	      name: emoji.name,
	      keywords: emoji.keywords,
	      emoticons: emoji.emoticons
	    });

	    emojiData.search = emojiData.search.join(',');
	  } else if (emoji.id) {
	    if (_data2.default.short_names.hasOwnProperty(emoji.id)) {
	      emoji.id = _data2.default.short_names[emoji.id];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji.id)) {
	      emojiData = _data2.default.emojis[emoji.id];
	      skin || (skin = emoji.skin);
	    }
	  }

	  emojiData.emoticons || (emojiData.emoticons = []);
	  emojiData.variations || (emojiData.variations = []);

	  if (emojiData.skin_variations && skin > 1 && set) {
	    emojiData = JSON.parse((0, _stringify2.default)(emojiData));

	    var skinKey = SKINS[skin - 1],
	        variationData = emojiData.skin_variations[skinKey];

	    if (!variationData.variations && emojiData.variations) {
	      delete emojiData.variations;
	    }

	    if (variationData['has_img_' + set]) {
	      emojiData.skin_tone = skin;

	      for (var k in variationData) {
	        var v = variationData[k];
	        emojiData[k] = v;
	      }
	    }
	  }

	  if (emojiData.variations && emojiData.variations.length) {
	    emojiData = JSON.parse((0, _stringify2.default)(emojiData));
	    emojiData.unified = emojiData.variations.shift();
	  }

	  return emojiData;
	}

	function intersect(a, b) {
	  var aSet = new _set2.default(a),
	      bSet = new _set2.default(b),
	      intersection = null;

	  intersection = new _set2.default([].concat((0, _toConsumableArray3.default)(aSet)).filter(function (x) {
	    return bSet.has(x);
	  }));

	  return (0, _from2.default)(intersection);
	}

	function deepMerge(a, b) {
	  var o = {};

	  for (var key in a) {
	    var originalValue = a[key],
	        value = originalValue;

	    if (b.hasOwnProperty(key)) {
	      value = b[key];
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
	      value = deepMerge(originalValue, value);
	    }

	    o[key] = value;
	  }

	  return o;
	}

	exports.getData = getData;
	exports.getSanitizedData = getSanitizedData;
	exports.intersect = intersect;
	exports.deepMerge = deepMerge;
	exports.unifiedToNative = unifiedToNative;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(51);
	__webpack_require__(5);
	__webpack_require__(141);
	__webpack_require__(151);
	module.exports = __webpack_require__(18).Set;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(142);

	// 23.2 Set Objects
	module.exports = __webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(22).f
	  , create      = __webpack_require__(34)
	  , redefineAll = __webpack_require__(143)
	  , ctx         = __webpack_require__(19)
	  , anInstance  = __webpack_require__(144)
	  , defined     = __webpack_require__(13)
	  , forOf       = __webpack_require__(145)
	  , $iterDefine = __webpack_require__(14)
	  , step        = __webpack_require__(8)
	  , setSpecies  = __webpack_require__(146)
	  , DESCRIPTORS = __webpack_require__(26)
	  , fastKey     = __webpack_require__(73).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(21);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(19)
	  , call        = __webpack_require__(129)
	  , isArrayIter = __webpack_require__(130)
	  , anObject    = __webpack_require__(23)
	  , toLength    = __webpack_require__(39)
	  , getIterFn   = __webpack_require__(54)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(17)
	  , core        = __webpack_require__(18)
	  , dP          = __webpack_require__(22)
	  , DESCRIPTORS = __webpack_require__(26)
	  , SPECIES     = __webpack_require__(48)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(17)
	  , $export        = __webpack_require__(16)
	  , meta           = __webpack_require__(73)
	  , fails          = __webpack_require__(27)
	  , hide           = __webpack_require__(21)
	  , redefineAll    = __webpack_require__(143)
	  , forOf          = __webpack_require__(145)
	  , anInstance     = __webpack_require__(144)
	  , isObject       = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(47)
	  , dP             = __webpack_require__(22).f
	  , each           = __webpack_require__(148)(0)
	  , DESCRIPTORS    = __webpack_require__(26);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(19)
	  , IObject  = __webpack_require__(11)
	  , toObject = __webpack_require__(50)
	  , toLength = __webpack_require__(39)
	  , asc      = __webpack_require__(149);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(150);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24)
	  , isArray  = __webpack_require__(79)
	  , SPECIES  = __webpack_require__(48)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(16);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(152)('Set')});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(55)
	  , from    = __webpack_require__(153);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(145);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(156);
	module.exports = __webpack_require__(18).String.fromCodePoint;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(16)
	  , toIndex        = __webpack_require__(41)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (data) {
	  var search = [];

	  var addToSearch = function addToSearch(strings, split) {
	    if (!strings) {
	      return;
	    }

	    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
	      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
	        s = s.toLowerCase();

	        if (search.indexOf(s) == -1) {
	          search.push(s);
	        }
	      });
	    });
	  };

	  addToSearch(data.short_names, true);
	  addToSearch(data.name, true);
	  addToSearch(data.keywords, false);
	  addToSearch(data.emoticons, false);

	  return search;
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(107);

	var _assign2 = _interopRequireDefault(_assign);

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	__webpack_require__(159);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _measureScrollbar = __webpack_require__(160);

	var _measureScrollbar2 = _interopRequireDefault(_measureScrollbar);

	var _data = __webpack_require__(137);

	var _data2 = _interopRequireDefault(_data);

	var _store = __webpack_require__(133);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(121);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _utils = __webpack_require__(138);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RECENT_CATEGORY = { name: 'Recent', emojis: null };
	var SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false };
	var CUSTOM_CATEGORY = { name: 'Custom', emojis: [] };

	var I18N = {
	  search: 'Search',
	  notfound: 'No Emoji Found',
	  categories: {
	    search: 'Search Results',
	    recent: 'Frequently Used',
	    people: 'Smileys & People',
	    nature: 'Animals & Nature',
	    foods: 'Food & Drink',
	    activity: 'Activity',
	    places: 'Travel & Places',
	    objects: 'Objects',
	    symbols: 'Symbols',
	    flags: 'Flags',
	    custom: 'Custom'
	  }
	};

	var Picker = function (_React$Component) {
	  (0, _inherits3.default)(Picker, _React$Component);

	  function Picker(props) {
	    (0, _classCallCheck3.default)(this, Picker);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call(this, props));

	    _this.i18n = (0, _utils.deepMerge)(I18N, props.i18n);
	    _this.state = {
	      skin: _store2.default.get('skin') || props.skin,
	      firstRender: true
	    };

	    _this.categories = [];
	    var allCategories = [].concat(_data2.default.categories);

	    if (props.custom.length > 0) {
	      CUSTOM_CATEGORY.emojis = props.custom.map(function (emoji) {
	        return (0, _extends3.default)({}, emoji, {
	          // `<Category />` expects emoji to have an `id`.
	          id: emoji.short_names[0],
	          custom: true
	        });
	      });

	      allCategories.push(CUSTOM_CATEGORY);
	    }

	    _this.hideRecent = true;

	    if (props.include != undefined) {
	      _data2.default.categories.sort(function (a, b) {
	        var aName = a.name.toLowerCase();
	        var bName = b.name.toLowerCase();

	        if (props.include.indexOf(aName) > props.include.indexOf(bName)) {
	          return 1;
	        }

	        return 0;
	      });
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = (0, _getIterator3.default)(allCategories), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var category = _step.value;

	        var isIncluded = props.include && props.include.length ? props.include.indexOf(category.name.toLowerCase()) > -1 : true;
	        var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.name.toLowerCase()) > -1 : false;
	        if (!isIncluded || isExcluded) {
	          continue;
	        }

	        if (props.emojisToShowFilter) {
	          var newEmojis = [];

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = (0, _getIterator3.default)(category.emojis), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var emoji = _step2.value;

	              if (props.emojisToShowFilter(_data2.default.emojis[emoji] || emoji)) {
	                newEmojis.push(emoji);
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          if (newEmojis.length) {
	            var newCategory = {
	              emojis: newEmojis,
	              name: category.name
	            };

	            _this.categories.push(newCategory);
	          }
	        } else {
	          _this.categories.push(category);
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    var includeRecent = props.include && props.include.length ? props.include.indexOf('recent') > -1 : true;
	    var excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf('recent') > -1 : false;
	    if (includeRecent && !excludeRecent) {
	      _this.hideRecent = false;
	      _this.categories.unshift(RECENT_CATEGORY);
	    }

	    if (_this.categories[0]) {
	      _this.categories[0].first = true;
	    }

	    _this.categories.unshift(SEARCH_CATEGORY);
	    return _this;
	  }

	  (0, _createClass3.default)(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if (props.skin && !_store2.default.get('skin')) {
	        this.setState({ skin: props.skin });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.firstRender) {
	        this.testStickyPosition();
	        this.firstRenderTimeout = setTimeout(function () {
	          _this2.setState({ firstRender: false });
	        }, 60);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.updateCategoriesSize();
	      this.handleScroll();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      SEARCH_CATEGORY.emojis = null;

	      clearTimeout(this.leaveTimeout);
	      clearTimeout(this.firstRenderTimeout);
	    }
	  }, {
	    key: 'testStickyPosition',
	    value: function testStickyPosition() {
	      var stickyTestElement = document.createElement('div');
	      var _arr = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var prefix = _arr[_i];
	        stickyTestElement.style.position = prefix + 'sticky';
	      }

	      this.hasStickyPosition = !!stickyTestElement.style.position.length;
	    }
	  }, {
	    key: 'handleEmojiOver',
	    value: function handleEmojiOver(emoji) {
	      var preview = this.refs.preview;
	      // Use Array.prototype.find() when it is more widely supported.

	      var emojiData = CUSTOM_CATEGORY.emojis.filter(function (customEmoji) {
	        return customEmoji.id === emoji.id;
	      })[0];
	      preview.setState({ emoji: (0, _assign2.default)(emoji, emojiData) });
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'handleEmojiLeave',
	    value: function handleEmojiLeave(emoji) {
	      var _this3 = this;

	      this.leaveTimeout = setTimeout(function () {
	        var preview = _this3.refs.preview;

	        preview.setState({ emoji: null });
	      }, 16);
	    }
	  }, {
	    key: 'handleEmojiClick',
	    value: function handleEmojiClick(emoji, e) {
	      var _this4 = this;

	      this.props.onClick(emoji, e);
	      if (!this.hideRecent) _frequently2.default.add(emoji);

	      var component = this.refs['category-1'];
	      if (component) {
	        var maxMargin = component.maxMargin;
	        component.forceUpdate();

	        window.requestAnimationFrame(function () {
	          component.memoizeSize();
	          if (maxMargin == component.maxMargin) return;

	          _this4.updateCategoriesSize();
	          _this4.handleScrollPaint();

	          if (SEARCH_CATEGORY.emojis) {
	            component.updateDisplay('none');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      if (!this.waitingForPaint) {
	        this.waitingForPaint = true;
	        window.requestAnimationFrame(this.handleScrollPaint.bind(this));
	      }
	    }
	  }, {
	    key: 'handleScrollPaint',
	    value: function handleScrollPaint() {
	      this.waitingForPaint = false;

	      if (!this.refs.scroll) {
	        return;
	      }

	      var activeCategory = null;

	      if (SEARCH_CATEGORY.emojis) {
	        activeCategory = SEARCH_CATEGORY;
	      } else {
	        var target = this.refs.scroll,
	            scrollTop = target.scrollTop,
	            scrollingDown = scrollTop > (this.scrollTop || 0),
	            minTop = 0;

	        for (var i = 0, l = this.categories.length; i < l; i++) {
	          var ii = scrollingDown ? this.categories.length - 1 - i : i,
	              category = this.categories[ii],
	              component = this.refs['category-' + ii];

	          if (component) {
	            var active = component.handleScroll(scrollTop);

	            if (!minTop || component.top < minTop) {
	              if (component.top > 0) {
	                minTop = component.top;
	              }
	            }

	            if (active && !activeCategory) {
	              activeCategory = category;
	            }
	          }
	        }

	        if (scrollTop < minTop) {
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            for (var _iterator3 = (0, _getIterator3.default)(this.categories), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var _category = _step3.value;

	              if (_category.anchor === false) {
	                continue;
	              }

	              activeCategory = _category;
	              break;
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
	          activeCategory = this.categories[this.categories.length - 1];
	        }
	      }

	      if (activeCategory) {
	        var anchors = this.refs.anchors;
	        var _activeCategory = activeCategory;
	        var categoryName = _activeCategory.name;


	        if (anchors.state.selected != categoryName) {
	          anchors.setState({ selected: categoryName });
	        }
	      }

	      this.scrollTop = scrollTop;
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(emojis) {
	      SEARCH_CATEGORY.emojis = emojis;

	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.refs['category-' + i];

	        if (component && component.props.name != 'Search') {
	          var display = emojis ? 'none' : 'inherit';
	          component.updateDisplay(display);
	        }
	      }

	      this.forceUpdate();
	      this.refs.scroll.scrollTop = 0;
	      this.handleScroll();
	    }
	  }, {
	    key: 'handleAnchorClick',
	    value: function handleAnchorClick(category, i) {
	      var component = this.refs['category-' + i];
	      var _refs = this.refs;
	      var scroll = _refs.scroll;
	      var anchors = _refs.anchors;
	      var scrollToComponent = null;

	      scrollToComponent = function scrollToComponent() {
	        if (component) {
	          var top = component.top;


	          if (category.first) {
	            top = 0;
	          } else {
	            top += 1;
	          }

	          scroll.scrollTop = top;
	        }
	      };

	      if (SEARCH_CATEGORY.emojis) {
	        this.handleSearch(null);
	        this.refs.search.clear();

	        window.requestAnimationFrame(scrollToComponent);
	      } else {
	        scrollToComponent();
	      }
	    }
	  }, {
	    key: 'handleSkinChange',
	    value: function handleSkinChange(skin) {
	      var newState = { skin: skin };

	      this.setState(newState);
	      _store2.default.update(newState);
	    }
	  }, {
	    key: 'updateCategoriesSize',
	    value: function updateCategoriesSize() {
	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.refs['category-' + i];
	        if (component) component.memoizeSize();
	      }

	      if (this.refs.scroll) {
	        var target = this.refs.scroll;
	        this.scrollHeight = target.scrollHeight;
	        this.clientHeight = target.clientHeight;
	      }
	    }
	  }, {
	    key: 'getCategories',
	    value: function getCategories() {
	      return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var _props = this.props;
	      var perLine = _props.perLine;
	      var emojiSize = _props.emojiSize;
	      var set = _props.set;
	      var sheetSize = _props.sheetSize;
	      var style = _props.style;
	      var title = _props.title;
	      var emoji = _props.emoji;
	      var color = _props.color;
	      var native = _props.native;
	      var backgroundImageFn = _props.backgroundImageFn;
	      var emojisToShowFilter = _props.emojisToShowFilter;
	      var include = _props.include;
	      var exclude = _props.exclude;
	      var autoFocus = _props.autoFocus;
	      var skin = this.state.skin;
	      var width = perLine * (emojiSize + 12) + 12 + 2 + (0, _measureScrollbar2.default)();

	      return _react2.default.createElement(
	        'div',
	        { style: (0, _extends3.default)({ width: width }, style), className: 'emoji-mart' },
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Anchors, {
	            ref: 'anchors',
	            i18n: this.i18n,
	            color: color,
	            categories: this.categories,
	            onAnchorClick: this.handleAnchorClick.bind(this)
	          })
	        ),
	        _react2.default.createElement(_.Search, {
	          ref: 'search',
	          onSearch: this.handleSearch.bind(this),
	          i18n: this.i18n,
	          emojisToShowFilter: emojisToShowFilter,
	          include: include,
	          exclude: exclude,
	          custom: CUSTOM_CATEGORY.emojis,
	          autoFocus: autoFocus
	        }),
	        _react2.default.createElement(
	          'div',
	          { ref: 'scroll', className: 'emoji-mart-scroll', onScroll: this.handleScroll.bind(this) },
	          this.getCategories().map(function (category, i) {
	            return _react2.default.createElement(_.Category, {
	              ref: 'category-' + i,
	              key: category.name,
	              name: category.name,
	              emojis: category.emojis,
	              perLine: perLine,
	              native: native,
	              hasStickyPosition: _this5.hasStickyPosition,
	              i18n: _this5.i18n,
	              custom: category.name == 'Recent' ? CUSTOM_CATEGORY.emojis : undefined,
	              emojiProps: {
	                native: native,
	                skin: skin,
	                size: emojiSize,
	                set: set,
	                sheetSize: sheetSize,
	                forceSize: native,
	                backgroundImageFn: backgroundImageFn,
	                onOver: _this5.handleEmojiOver.bind(_this5),
	                onLeave: _this5.handleEmojiLeave.bind(_this5),
	                onClick: _this5.handleEmojiClick.bind(_this5)
	              }
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Preview, {
	            ref: 'preview',
	            title: title,
	            emoji: emoji,
	            emojiProps: {
	              native: native,
	              size: 38,
	              skin: skin,
	              set: set,
	              sheetSize: sheetSize,
	              backgroundImageFn: backgroundImageFn
	            },
	            skinsProps: {
	              skin: skin,
	              onChange: this.handleSkinChange.bind(this)
	            }
	          })
	        )
	      );
	    }
	  }]);
	  return Picker;
	}(_react2.default.Component);

	exports.default = Picker;


	Picker.propTypes = {
	  onClick: _propTypes2.default.func,
	  perLine: _propTypes2.default.number,
	  emojiSize: _propTypes2.default.number,
	  i18n: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  title: _propTypes2.default.string,
	  emoji: _propTypes2.default.string,
	  color: _propTypes2.default.string,
	  set: _.Emoji.propTypes.set,
	  skin: _.Emoji.propTypes.skin,
	  native: _propTypes2.default.bool,
	  backgroundImageFn: _.Emoji.propTypes.backgroundImageFn,
	  sheetSize: _.Emoji.propTypes.sheetSize,
	  emojisToShowFilter: _propTypes2.default.func,
	  include: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  exclude: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  autoFocus: _propTypes2.default.bool,
	  custom: _propTypes2.default.arrayOf(_propTypes2.default.shape({
	    name: _propTypes2.default.string.isRequired,
	    short_names: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
	    emoticons: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    keywords: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    imageUrl: _propTypes2.default.string.isRequired
	  }))
	};

	Picker.defaultProps = {
	  onClick: function onClick() {},
	  emojiSize: 24,
	  perLine: 9,
	  i18n: {},
	  style: {},
	  title: 'Emoji Mart™',
	  emoji: 'department_store',
	  color: '#ae65c5',
	  set: _.Emoji.defaultProps.set,
	  skin: _.Emoji.defaultProps.skin,
	  native: _.Emoji.defaultProps.native,
	  sheetSize: _.Emoji.defaultProps.sheetSize,
	  backgroundImageFn: _.Emoji.defaultProps.backgroundImageFn,
	  emojisToShowFilter: null,
	  autoFocus: false,
	  custom: []
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';

	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	var isWindowAvailable = typeof window !== 'undefined';

	isWindowAvailable && function () {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];

	  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	  }

	  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);

	    lastTime = currTime + timeToCall;
	    return id;
	  };

	  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	    clearTimeout(id);
	  };
	}();

/***/ },
/* 160 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var div = document.createElement('div');

	  div.style.width = '100px';
	  div.style.height = '100px';
	  div.style.overflow = 'scroll';
	  div.style.position = 'absolute';
	  div.style.top = '-9999px';

	  document.body.appendChild(div);

	  var scrollbarWidth = div.offsetWidth - div.clientWidth;

	  document.body.removeChild(div);

	  return scrollbarWidth;
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(106);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ = __webpack_require__(1);

	var _utils = __webpack_require__(138);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Preview = function (_React$Component) {
	  (0, _inherits3.default)(Preview, _React$Component);

	  function Preview(props) {
	    (0, _classCallCheck3.default)(this, Preview);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Preview.__proto__ || (0, _getPrototypeOf2.default)(Preview)).call(this, props));

	    _this.state = { emoji: null };
	    return _this;
	  }

	  (0, _createClass3.default)(Preview, [{
	    key: 'render',
	    value: function render() {
	      var emoji = this.state.emoji;
	      var _props = this.props;
	      var emojiProps = _props.emojiProps;
	      var skinsProps = _props.skinsProps;
	      var title = _props.title;
	      var idleEmoji = _props.emoji;


	      if (emoji) {
	        var emojiData = (0, _utils.getData)(emoji);
	        var emoticons = emojiData.emoticons;
	        var knownEmoticons = [];
	        var listedEmoticons = [];

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = (0, _getIterator3.default)(emoticons), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var emoticon = _step.value;

	            if (knownEmoticons.indexOf(emoticon.toLowerCase()) == -1) {
	              knownEmoticons.push(emoticon.toLowerCase());
	              listedEmoticons.push(emoticon);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            (0, _.Emoji)((0, _extends3.default)({
	              key: emoji.id,
	              emoji: emoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-name' },
	              emoji.name
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-shortnames' },
	              emojiData.short_names.map(function (short_name) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: short_name, className: 'emoji-mart-preview-shortname' },
	                  ':',
	                  short_name,
	                  ':'
	                );
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-emoticons' },
	              listedEmoticons.map(function (emoticon) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: emoticon, className: 'emoji-mart-preview-emoticon' },
	                  emoticon
	                );
	              })
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            idleEmoji && idleEmoji.length && (0, _.Emoji)((0, _extends3.default)({
	              emoji: idleEmoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'span',
	              { className: 'emoji-mart-title-label' },
	              title
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-skins' },
	            _react2.default.createElement(_.Skins, skinsProps)
	          )
	        );
	      }
	    }
	  }]);
	  return Preview;
	}(_react2.default.Component);

	exports.default = Preview;


	Preview.propTypes = {
	  title: _propTypes2.default.string.isRequired,
	  emoji: _propTypes2.default.string.isRequired,
	  emojiProps: _propTypes2.default.object.isRequired,
	  skinsProps: _propTypes2.default.object.isRequired
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _emojiIndex = __webpack_require__(163);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Search = function (_React$Component) {
	  (0, _inherits3.default)(Search, _React$Component);

	  function Search() {
	    (0, _classCallCheck3.default)(this, Search);
	    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Search, [{
	    key: 'handleChange',
	    value: function handleChange() {
	      var input = this.refs.input;
	      var value = input.value;

	      this.props.onSearch(_emojiIndex2.default.search(value, {
	        emojisToShowFilter: this.props.emojisToShowFilter,
	        maxResults: this.props.maxResults,
	        include: this.props.include,
	        exclude: this.props.exclude,
	        custom: this.props.custom
	      }));
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.refs.input.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var i18n = _props.i18n;
	      var autoFocus = _props.autoFocus;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-search' },
	        _react2.default.createElement('input', {
	          ref: 'input',
	          type: 'text',
	          onChange: this.handleChange.bind(this),
	          placeholder: i18n.search,
	          autoFocus: autoFocus
	        })
	      );
	    }
	  }]);
	  return Search;
	}(_react2.default.Component);

	exports.default = Search;


	Search.propTypes = {
	  onSearch: _propTypes2.default.func,
	  maxResults: _propTypes2.default.number,
	  emojisToShowFilter: _propTypes2.default.func,
	  autoFocus: _propTypes2.default.bool
	};

	Search.defaultProps = {
	  onSearch: function onSearch() {},
	  maxResults: 75,
	  emojisToShowFilter: null,
	  autoFocus: false
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _data = __webpack_require__(137);

	var _data2 = _interopRequireDefault(_data);

	var _ = __webpack_require__(138);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var extend = __webpack_require__(164)._extend;

	var index = {};
	var emojisList = {};
	var emoticonsList = {};
	var previousInclude = [];
	var previousExclude = [];

	for (var emoji in _data2.default.emojis) {
	  var emojiData = _data2.default.emojis[emoji];
	  var short_names = emojiData.short_names;
	  var emoticons = emojiData.emoticons;
	  var id = short_names[0];

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (0, _getIterator3.default)(emoticons || []), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var emoticon = _step.value;

	      if (!emoticonsList[emoticon]) {
	        emoticonsList[emoticon] = id;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  emojisList[id] = (0, _.getSanitizedData)(id);
	}

	function search(value) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var emojisToShowFilter = _ref.emojisToShowFilter;
	  var maxResults = _ref.maxResults;
	  var include = _ref.include;
	  var exclude = _ref.exclude;
	  var _ref$custom = _ref.custom;
	  var custom = _ref$custom === undefined ? [] : _ref$custom;

	  maxResults || (maxResults = 75);
	  include || (include = []);
	  exclude || (exclude = []);

	  if (custom.length) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = (0, _getIterator3.default)(custom), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _emoji = _step2.value;

	        _data2.default.emojis[_emoji.id] = (0, _.getData)(_emoji);
	        emojisList[_emoji.id] = (0, _.getSanitizedData)(_emoji);
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }

	    _data2.default.categories.push({
	      name: 'Custom',
	      emojis: custom.map(function (emoji) {
	        return emoji.id;
	      })
	    });
	  }

	  var results = null,
	      pool = _data2.default.emojis;

	  if (value.length) {
	    if (value == '-' || value == '-1') {
	      return [emojisList['-1']];
	    }

	    var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
	        allResults = [];

	    if (values.length > 2) {
	      values = [values[0], values[1]];
	    }

	    if (include.length || exclude.length) {
	      pool = {};

	      if (previousInclude != include.sort().join(',') || previousExclude != exclude.sort().join(',')) {
	        previousInclude = include.sort().join(',');
	        previousExclude = exclude.sort().join(',');
	        index = {};
	      }

	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(_data2.default.categories), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var category = _step3.value;

	          var isIncluded = include && include.length ? include.indexOf(category.name.toLowerCase()) > -1 : true;
	          var isExcluded = exclude && exclude.length ? exclude.indexOf(category.name.toLowerCase()) > -1 : false;
	          if (!isIncluded || isExcluded) {
	            continue;
	          }

	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = (0, _getIterator3.default)(category.emojis), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var emojiId = _step4.value;

	              pool[emojiId] = _data2.default.emojis[emojiId];
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    } else if (previousInclude.length || previousExclude.length) {
	      index = {};
	    }

	    allResults = values.map(function (value) {
	      var aPool = pool,
	          aIndex = index,
	          length = 0;

	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = (0, _getIterator3.default)(value.split('')), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var char = _step5.value;

	          length++;

	          aIndex[char] || (aIndex[char] = {});
	          aIndex = aIndex[char];

	          if (!aIndex.results) {
	            (function () {
	              var scores = {};

	              aIndex.results = [];
	              aIndex.pool = {};

	              for (var id in aPool) {
	                var _emoji2 = aPool[id];
	                var _search = _emoji2.search;
	                var sub = value.substr(0, length);
	                var subIndex = _search.indexOf(sub);

	                if (subIndex != -1) {
	                  var score = subIndex + 1;
	                  if (sub == id) score = 0;

	                  aIndex.results.push(emojisList[id]);
	                  aIndex.pool[id] = _emoji2;

	                  scores[id] = score;
	                }
	              }

	              aIndex.results.sort(function (a, b) {
	                var aScore = scores[a.id],
	                    bScore = scores[b.id];

	                return aScore - bScore;
	              });
	            })();
	          }

	          aPool = aIndex.pool;
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }

	      return aIndex.results;
	    }).filter(function (a) {
	      return a;
	    });

	    if (allResults.length > 1) {
	      results = _.intersect.apply(undefined, (0, _toConsumableArray3.default)(allResults));
	    } else if (allResults.length) {
	      results = allResults[0];
	    } else {
	      results = [];
	    }
	  }

	  if (results) {
	    if (emojisToShowFilter) {
	      results = results.filter(function (result) {
	        return emojisToShowFilter(_data2.default.emojis[result.id].unified);
	      });
	    }

	    if (results && results.length > maxResults) {
	      results = results.slice(0, maxResults);
	    }
	  }

	  return results;
	}

	exports.default = { search: search, emojis: emojisList, emoticons: emoticonsList, getData: _.getData };

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(165);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(166);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(96)))

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 166 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getPrototypeOf = __webpack_require__(56);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(60);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(61);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(65);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(86);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Skins = function (_React$Component) {
	  (0, _inherits3.default)(Skins, _React$Component);

	  function Skins(props) {
	    (0, _classCallCheck3.default)(this, Skins);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Skins.__proto__ || (0, _getPrototypeOf2.default)(Skins)).call(this, props));

	    _this.state = {
	      opened: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Skins, [{
	    key: 'handleClick',
	    value: function handleClick(skin) {
	      var onChange = this.props.onChange;


	      if (!this.state.opened) {
	        this.setState({ opened: true });
	      } else {
	        this.setState({ opened: false });
	        if (skin != this.props.skin) {
	          onChange(skin);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var skin = this.props.skin;
	      var opened = this.state.opened;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-skin-swatches ' + (opened ? 'emoji-mart-skin-swatches-opened' : '') },
	          [].concat((0, _toConsumableArray3.default)(Array(6))).map(function (_, i) {
	            var skinTone = i + 1,
	                selected = skinTone == skin;

	            return _react2.default.createElement(
	              'span',
	              { key: 'skin-tone-' + skinTone, className: 'emoji-mart-skin-swatch ' + (selected ? 'emoji-mart-skin-swatch-selected' : '') },
	              _react2.default.createElement('span', {
	                onClick: function onClick() {
	                  return _this2.handleClick(skinTone);
	                },
	                className: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone })
	            );
	          })
	        )
	      );
	    }
	  }]);
	  return Skins;
	}(_react2.default.Component);

	exports.default = Skins;


	Skins.propTypes = {
	  onChange: _propTypes2.default.func,
	  skin: _propTypes2.default.number.isRequired
	};

	Skins.defaultProps = {
	  onChange: function onChange() {}
	};

/***/ }
/******/ ])
});
;