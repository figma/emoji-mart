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

	var _emojiIndex = __webpack_require__(165);

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

	var _picker = __webpack_require__(159);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_picker).default;
	  }
	});

	var _preview = __webpack_require__(163);

	Object.defineProperty(exports, 'Preview', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_preview).default;
	  }
	});

	var _search = __webpack_require__(164);

	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});

	var _skins = __webpack_require__(169);

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
					(0, _extends3.default)({ height: "19", width: "19", version: "1.1", viewBox: "0 0 19 19" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1243 1293)" },
						_react2.default.createElement(
							"g",
							{ id: "activity" },
							_react2.default.createElement("path", { d: "M 2.83936 4.21875C 3.89404 5.54712 4.55981 7.19824 4.66431 9L 5.66577 9C 5.55701 6.90271 4.76794 4.98523 3.51514 3.46411C 4.9408 2.05042 6.86462 1.13831 9 1.0144L 9.5 0C 4.2533 0 0 4.2533 0 9.5L 1.0144 9C 1.1189 7.19824 1.78467 5.54712 2.83936 4.21875Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 10 10L 13.5485 10L 14.5499 10L 14.5499 9L 13.5485 9L 10 9L 10 1.0144L 9.5 0L 9 1.0144L 9 9L 5.66577 9L 4.66431 9L 4.66431 10L 5.66577 10L 9 10L 9 17.9856L 9.5 19L 10 17.9856L 10 10Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 16.2678 4.35657C 17.2604 5.66052 17.8846 7.26001 17.9856 9L 19 9.5C 19 4.2533 14.7467 0 9.5 0L 10 1.0144C 12.1947 1.14172 14.1659 2.10168 15.6025 3.58313C 14.4058 5.08472 13.6544 6.95703 13.5485 9L 14.5499 9C 14.6509 7.26001 15.2753 5.66064 16.2678 4.35657Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 1.0144 10L 4.66431 10L 4.66431 9L 1.0144 9L 0 9.5L 1.0144 10Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 3.51514 15.5359C 4.76794 14.0148 5.55701 12.0973 5.66577 10L 4.66431 10C 4.55981 11.8018 3.89404 13.4529 2.83936 14.7812C 1.78467 13.4529 1.1189 11.8018 1.0144 10L 0 9.5C 0 14.7467 4.2533 19 9.5 19L 9 17.9856C 6.86462 17.8617 4.9408 16.9496 3.51514 15.5359Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 15.6025 15.4169C 14.1659 16.8983 12.1947 17.8583 10 17.9856L 9.5 19C 14.7467 19 19 14.7467 19 9.5L 17.9856 10C 17.8846 11.74 17.2604 13.3395 16.2678 14.6434C 15.2753 13.3394 14.6509 11.74 14.5499 10L 13.5485 10C 13.6544 12.043 14.4058 13.9153 15.6025 15.4169Z", transform: "translate(-1243 -1293)" }),
							_react2.default.createElement("path", { d: "M 14.5499 10L 17.9856 10L 19 9.5L 17.9856 9L 14.5499 9L 14.5499 10Z", transform: "translate(-1243 -1293)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 2.83936 4.21875C 3.89404 5.54712 4.55981 7.19824 4.66431 9L 5.66577 9C 5.55701 6.90271 4.76794 4.98523 3.51514 3.46411C 4.9408 2.05042 6.86462 1.13831 9 1.0144L 9.5 0C 4.2533 0 0 4.2533 0 9.5L 1.0144 9C 1.1189 7.19824 1.78467 5.54712 2.83936 4.21875Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 10 10L 13.5485 10L 14.5499 10L 14.5499 9L 13.5485 9L 10 9L 10 1.0144L 9.5 0L 9 1.0144L 9 9L 5.66577 9L 4.66431 9L 4.66431 10L 5.66577 10L 9 10L 9 17.9856L 9.5 19L 10 17.9856L 10 10Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 16.2678 4.35657C 17.2604 5.66052 17.8846 7.26001 17.9856 9L 19 9.5C 19 4.2533 14.7467 0 9.5 0L 10 1.0144C 12.1947 1.14172 14.1659 2.10168 15.6025 3.58313C 14.4058 5.08472 13.6544 6.95703 13.5485 9L 14.5499 9C 14.6509 7.26001 15.2753 5.66064 16.2678 4.35657Z" }),
						_react2.default.createElement("path", { id: "path3_fill", d: "M 1.0144 10L 4.66431 10L 4.66431 9L 1.0144 9L 0 9.5L 1.0144 10Z" }),
						_react2.default.createElement("path", { id: "path4_fill", d: "M 3.51514 15.5359C 4.76794 14.0148 5.55701 12.0973 5.66577 10L 4.66431 10C 4.55981 11.8018 3.89404 13.4529 2.83936 14.7812C 1.78467 13.4529 1.1189 11.8018 1.0144 10L 0 9.5C 0 14.7467 4.2533 19 9.5 19L 9 17.9856C 6.86462 17.8617 4.9408 16.9496 3.51514 15.5359Z" }),
						_react2.default.createElement("path", { id: "path5_fill", d: "M 15.6025 15.4169C 14.1659 16.8983 12.1947 17.8583 10 17.9856L 9.5 19C 14.7467 19 19 14.7467 19 9.5L 17.9856 10C 17.8846 11.74 17.2604 13.3395 16.2678 14.6434C 15.2753 13.3394 14.6509 11.74 14.5499 10L 13.5485 10C 13.6544 12.043 14.4058 13.9153 15.6025 15.4169Z" }),
						_react2.default.createElement("path", { id: "path6_fill", d: "M 14.5499 10L 17.9856 10L 19 9.5L 17.9856 9L 14.5499 9L 14.5499 10Z" })
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
						{ id: "Canvas", transform: "translate(1092 1292)" },
						_react2.default.createElement(
							"g",
							{ id: "flags" },
							_react2.default.createElement("path", { d: "M 1 0L 0 0L 0 1L 0 8L 0 9L 0 17L 1 17L 1 9L 1 8L 1 1L 1 0Z", transform: "translate(-1092 -1292)" }),
							_react2.default.createElement("path", { d: "M 1 9L 11 9L 12 9L 12 8L 12 1L 12 0L 11 0L 1 0L 1 1L 11 1L 11 8L 1 8L 1 9Z", transform: "translate(-1092 -1292)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 1 0L 0 0L 0 1L 0 8L 0 9L 0 17L 1 17L 1 9L 1 8L 1 1L 1 0Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 1 9L 11 9L 12 9L 12 8L 12 1L 12 0L 11 0L 1 0L 1 1L 11 1L 11 8L 1 8L 1 9Z" })
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
					(0, _extends3.default)({ height: "19", width: "17", version: "1.1", viewBox: "0 0 17 19" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1279 1293)" },
						_react2.default.createElement(
							"g",
							{ id: "foods" },
							_react2.default.createElement("path", { d: "M 12.1183 6.48747C 11.4751 6.23515 10.7572 6.10832 10 6.10832C 9.88623 6.10832 9.77332 6.11296 9.66138 6.12187C 9.07397 6.16911 8.5144 6.33805 8 6.60771L 8 1.6082L 7.5 8.12834L 8.07019 7.73258C 8.68677 7.29289 9.25342 7.09477 10 7.10832C 11.1823 7.10832 12.1726 7.46806 12.8571 8.10026C 13.5286 8.72062 14 9.68937 14 11.1083C 14 12.462 13.3236 13.9887 12.2791 15.1969C 11.2169 16.4257 9.96875 17.1083 9 17.1083C 8.54712 17.1144 8.26135 17.0506 7.92432 16.886L 7.5 16.6873L 7.5 17.7915C 7.93848 17.997 8.43762 18.1083 9 18.1083C 11.7615 18.1083 15 14.422 15 11.1083C 15 8.70329 13.8208 7.15556 12.1183 6.48747Z", transform: "translate(-1279 -1292.61)" }),
							_react2.default.createElement("path", { d: "M 6 18.1083C 6.56238 18.1083 7.06152 17.997 7.5 17.7915L 7.5 16.6873L 7.07568 16.886C 6.73865 17.0506 6.45288 17.1144 6 17.1083C 5.03125 17.1083 3.78308 16.4257 2.72095 15.1969C 1.67639 13.9887 1 12.462 1 11.1083C 1 9.68937 1.47144 8.72062 2.14294 8.10026C 2.82739 7.46806 3.81775 7.10832 5 7.10832C 5.74658 7.09477 6.31323 7.29289 6.92981 7.73258L 7.5 8.12834L 8 1.6082L 7 1.6082L 7 6.60758C 6.38757 6.28642 5.71118 6.10832 5 6.10832C 2.23853 6.10832 0 7.7946 0 11.1083C 0 14.422 3.23853 18.1083 6 18.1083Z", transform: "translate(-1279 -1292.61)" }),
							_react2.default.createElement("path", { d: "M 11.4785 0.600017C 9.95911 1.47721 9.13403 3.11283 9.20801 4.76139L 10.2225 4.18717C 10.3368 3.08537 10.9589 2.05473 11.9785 1.46611C 12.9932 0.88029 14.1703 0.864665 15.1501 1.31889L 16.1647 0.74467C 14.8052 -0.16158 12.9978 -0.27718 11.4785 0.600017Z", transform: "translate(-1279 -1292.61)" }),
							_react2.default.createElement("path", { d: "M 13.8942 4.90605C 15.4136 4.02885 16.2386 2.39323 16.1647 0.74467L 15.1501 1.31889C 15.0359 2.42082 14.4138 3.45133 13.3942 4.04008C 12.3795 4.6259 11.2024 4.64152 10.2225 4.18717L 9.20801 4.76139C 9.4104 4.8964 9.6228 5.01371 9.84253 5.11296C 9.89465 5.13652 9.94714 5.15898 10 5.18034C 10.7045 5.46611 11.4779 5.56913 12.244 5.46842C 12.8082 5.39433 13.3684 5.20964 13.8942 4.90605Z", transform: "translate(-1279 -1292.61)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 12.1183 6.48747C 11.4751 6.23515 10.7572 6.10832 10 6.10832C 9.88623 6.10832 9.77332 6.11296 9.66138 6.12187C 9.07397 6.16911 8.5144 6.33805 8 6.60771L 8 1.6082L 7.5 8.12834L 8.07019 7.73258C 8.68677 7.29289 9.25342 7.09477 10 7.10832C 11.1823 7.10832 12.1726 7.46806 12.8571 8.10026C 13.5286 8.72062 14 9.68937 14 11.1083C 14 12.462 13.3236 13.9887 12.2791 15.1969C 11.2169 16.4257 9.96875 17.1083 9 17.1083C 8.54712 17.1144 8.26135 17.0506 7.92432 16.886L 7.5 16.6873L 7.5 17.7915C 7.93848 17.997 8.43762 18.1083 9 18.1083C 11.7615 18.1083 15 14.422 15 11.1083C 15 8.70329 13.8208 7.15556 12.1183 6.48747Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 6 18.1083C 6.56238 18.1083 7.06152 17.997 7.5 17.7915L 7.5 16.6873L 7.07568 16.886C 6.73865 17.0506 6.45288 17.1144 6 17.1083C 5.03125 17.1083 3.78308 16.4257 2.72095 15.1969C 1.67639 13.9887 1 12.462 1 11.1083C 1 9.68937 1.47144 8.72062 2.14294 8.10026C 2.82739 7.46806 3.81775 7.10832 5 7.10832C 5.74658 7.09477 6.31323 7.29289 6.92981 7.73258L 7.5 8.12834L 8 1.6082L 7 1.6082L 7 6.60758C 6.38757 6.28642 5.71118 6.10832 5 6.10832C 2.23853 6.10832 0 7.7946 0 11.1083C 0 14.422 3.23853 18.1083 6 18.1083Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 11.4785 0.600017C 9.95911 1.47721 9.13403 3.11283 9.20801 4.76139L 10.2225 4.18717C 10.3368 3.08537 10.9589 2.05473 11.9785 1.46611C 12.9932 0.88029 14.1703 0.864665 15.1501 1.31889L 16.1647 0.74467C 14.8052 -0.16158 12.9978 -0.27718 11.4785 0.600017Z" }),
						_react2.default.createElement("path", { id: "path3_fill", d: "M 13.8942 4.90605C 15.4136 4.02885 16.2386 2.39323 16.1647 0.74467L 15.1501 1.31889C 15.0359 2.42082 14.4138 3.45133 13.3942 4.04008C 12.3795 4.6259 11.2024 4.64152 10.2225 4.18717L 9.20801 4.76139C 9.4104 4.8964 9.6228 5.01371 9.84253 5.11296C 9.89465 5.13652 9.94714 5.15898 10 5.18034C 10.7045 5.46611 11.4779 5.56913 12.244 5.46842C 12.8082 5.39433 13.3684 5.20964 13.8942 4.90605Z" })
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
					(0, _extends3.default)({ height: "19", width: "19", version: "1.1", viewBox: "0 0 19 19" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1317 1293)" },
						_react2.default.createElement(
							"g",
							{ id: "nature" },
							_react2.default.createElement("path", { d: "M 4.77954 12.2311L 0 17.0106L 0.707153 17.7177L 5.39307 13.0318L 4.77954 12.2311Z", transform: "translate(-1316.35 -1292.36)" }),
							_react2.default.createElement("path", { d: "M 6.16248 12.2624L 5.56335 11.4472L 4.77954 12.2311L 5.39307 13.0318L 6.16248 12.2624Z", transform: "translate(-1316.35 -1292.36)" }),
							_react2.default.createElement("path", { d: "M 5.39307 13.0318C 8.67566 14.4375 12.6239 13.8008 15.3032 11.1214C 18.0741 8.35044 18.6605 4.22227 17.0624 0.876806L 16.4442 1.98069C 17.4929 4.82078 16.8754 8.13498 14.5961 10.4143C 12.3169 12.6936 9.00244 13.3111 6.16248 12.2624L 5.39307 13.0318Z", transform: "translate(-1316.35 -1292.36)" }),
							_react2.default.createElement("path", { d: "M 15.6292 1.38144L 5.56335 11.4472L 6.16248 12.2624L 16.4442 1.98069L 15.6292 1.38144Z", transform: "translate(-1316.35 -1292.36)" }),
							_react2.default.createElement("path", { d: "M 7.52515 3.34299C 9.7168 1.15134 12.8655 0.496191 15.6292 1.38144L 17.0624 0.876806C 13.717 -0.721216 9.58887 -0.134912 6.81799 2.63596C 4.22388 5.23008 3.54431 9.01377 4.77954 12.2311L 5.56335 11.4472C 4.6781 8.68345 5.33337 5.53477 7.52515 3.34299Z", transform: "translate(-1316.35 -1292.36)" }),
							_react2.default.createElement("path", { d: "M 17.0624 0.876806L 15.6292 1.38144L 16.4442 1.98069L 17.0624 0.876806Z", transform: "translate(-1316.35 -1292.36)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 4.77954 12.2311L 0 17.0106L 0.707153 17.7177L 5.39307 13.0318L 4.77954 12.2311Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 6.16248 12.2624L 5.56335 11.4472L 4.77954 12.2311L 5.39307 13.0318L 6.16248 12.2624Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 5.39307 13.0318C 8.67566 14.4375 12.6239 13.8008 15.3032 11.1214C 18.0741 8.35044 18.6605 4.22227 17.0624 0.876806L 16.4442 1.98069C 17.4929 4.82078 16.8754 8.13498 14.5961 10.4143C 12.3169 12.6936 9.00244 13.3111 6.16248 12.2624L 5.39307 13.0318Z" }),
						_react2.default.createElement("path", { id: "path3_fill", d: "M 15.6292 1.38144L 5.56335 11.4472L 6.16248 12.2624L 16.4442 1.98069L 15.6292 1.38144Z" }),
						_react2.default.createElement("path", { id: "path4_fill", d: "M 7.52515 3.34299C 9.7168 1.15134 12.8655 0.496191 15.6292 1.38144L 17.0624 0.876806C 13.717 -0.721216 9.58887 -0.134912 6.81799 2.63596C 4.22388 5.23008 3.54431 9.01377 4.77954 12.2311L 5.56335 11.4472C 4.6781 8.68345 5.33337 5.53477 7.52515 3.34299Z" }),
						_react2.default.createElement("path", { id: "path5_fill", d: "M 17.0624 0.876806L 15.6292 1.38144L 16.4442 1.98069L 17.0624 0.876806Z" })
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
					(0, _extends3.default)({ height: "17", width: "18", version: "1.1", viewBox: "0 0 18 17" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1168 1292)" },
						_react2.default.createElement(
							"g",
							{ id: "objects" },
							_react2.default.createElement("path", { d: "M 15.6673 1.61096C 13.5194 -0.536987 10.037 -0.536987 7.88901 1.61096L 1.1716 8.32849C -0.390533 9.8905 -0.390533 12.4232 1.1716 13.9854C 2.73361 15.5472 5.26572 15.5481 6.82785 13.9858L 9.30331 11.5105L 9.65683 11.1569L 12.1318 8.68213C 13.108 7.70581 13.108 6.12292 12.1318 5.14661C 11.1555 4.17029 9.57248 4.17029 8.59616 5.14661L 3.29294 10.45L 3.99997 11.157L 9.30331 5.85376C 9.88913 5.26794 10.8388 5.26794 11.4247 5.85376C 12.0105 6.43945 12.0105 7.38928 11.4247 7.97498L 8.9498 10.4498L 8.59616 10.8035L 6.12082 13.2787C 4.94931 14.4502 3.05038 14.4498 1.87863 13.2782C 0.707123 12.1066 0.707123 10.2072 1.87863 9.03552L 8.59616 2.31812C 10.3535 0.560669 13.2029 0.560669 14.9602 2.31812C 16.7176 4.07544 16.7176 6.9248 14.9602 8.68213L 8.24277 15.3997L 8.9498 16.1067L 15.6673 9.38928C 17.8152 7.24133 17.8152 3.75891 15.6673 1.61096Z", transform: "translate(-1167.34 -1291.22)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 15.6673 1.61096C 13.5194 -0.536987 10.037 -0.536987 7.88901 1.61096L 1.1716 8.32849C -0.390533 9.8905 -0.390533 12.4232 1.1716 13.9854C 2.73361 15.5472 5.26572 15.5481 6.82785 13.9858L 9.30331 11.5105L 9.65683 11.1569L 12.1318 8.68213C 13.108 7.70581 13.108 6.12292 12.1318 5.14661C 11.1555 4.17029 9.57248 4.17029 8.59616 5.14661L 3.29294 10.45L 3.99997 11.157L 9.30331 5.85376C 9.88913 5.26794 10.8388 5.26794 11.4247 5.85376C 12.0105 6.43945 12.0105 7.38928 11.4247 7.97498L 8.9498 10.4498L 8.59616 10.8035L 6.12082 13.2787C 4.94931 14.4502 3.05038 14.4498 1.87863 13.2782C 0.707123 12.1066 0.707123 10.2072 1.87863 9.03552L 8.59616 2.31812C 10.3535 0.560669 13.2029 0.560669 14.9602 2.31812C 16.7176 4.07544 16.7176 6.9248 14.9602 8.68213L 8.24277 15.3997L 8.9498 16.1067L 15.6673 9.38928C 17.8152 7.24133 17.8152 3.75891 15.6673 1.61096Z" })
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
					(0, _extends3.default)({ height: "19", width: "19", version: "1.1", viewBox: "0 0 19 19" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1355 1293)" },
						_react2.default.createElement(
							"g",
							{ id: "people" },
							_react2.default.createElement("path", { d: "M 9.5 15C 7.08093 15 5.06323 13.2822 4.59998 11L 5.62598 11C 6.07007 12.7252 7.63623 14 9.5 14C 11.3638 14 12.9299 12.7252 13.374 11L 14.4 11C 13.9368 13.2822 11.9191 15 9.5 15Z", transform: "translate(-1355 -1293)" }),
							_react2.default.createElement("path", { d: "M 7 7.5C 7 8.05225 6.55225 8.5 6 8.5C 5.44775 8.5 5 8.05225 5 7.5C 5 6.94775 5.44775 6.5 6 6.5C 6.55225 6.5 7 6.94775 7 7.5Z", transform: "translate(-1355 -1293)" }),
							_react2.default.createElement("path", { d: "M 13 8.5C 13.5522 8.5 14 8.05225 14 7.5C 14 6.94775 13.5522 6.5 13 6.5C 12.4478 6.5 12 6.94775 12 7.5C 12 8.05225 12.4478 8.5 13 8.5Z", transform: "translate(-1355 -1293)" }),
							_react2.default.createElement("path", { d: "M 9.5 18C 4.80554 18 1 14.1945 1 9.5C 1 4.80554 4.80554 1 9.5 1L 9.5 0C 4.2533 0 0 4.2533 0 9.5C 0 14.7467 4.2533 19 9.5 19L 9.5 18Z", transform: "translate(-1355 -1293)" }),
							_react2.default.createElement("path", { d: "M 18 9.5C 18 14.1945 14.1945 18 9.5 18L 9.5 19C 14.7467 19 19 14.7467 19 9.5C 19 4.2533 14.7467 0 9.5 0L 9.5 1C 14.1945 1 18 4.80554 18 9.5Z", transform: "translate(-1355 -1293)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 9.5 15C 7.08093 15 5.06323 13.2822 4.59998 11L 5.62598 11C 6.07007 12.7252 7.63623 14 9.5 14C 11.3638 14 12.9299 12.7252 13.374 11L 14.4 11C 13.9368 13.2822 11.9191 15 9.5 15Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 7 7.5C 7 8.05225 6.55225 8.5 6 8.5C 5.44775 8.5 5 8.05225 5 7.5C 5 6.94775 5.44775 6.5 6 6.5C 6.55225 6.5 7 6.94775 7 7.5Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 13 8.5C 13.5522 8.5 14 8.05225 14 7.5C 14 6.94775 13.5522 6.5 13 6.5C 12.4478 6.5 12 6.94775 12 7.5C 12 8.05225 12.4478 8.5 13 8.5Z" }),
						_react2.default.createElement("path", { id: "path3_fill", d: "M 9.5 18C 4.80554 18 1 14.1945 1 9.5C 1 4.80554 4.80554 1 9.5 1L 9.5 0C 4.2533 0 0 4.2533 0 9.5C 0 14.7467 4.2533 19 9.5 19L 9.5 18Z" }),
						_react2.default.createElement("path", { id: "path4_fill", d: "M 18 9.5C 18 14.1945 14.1945 18 9.5 18L 9.5 19C 14.7467 19 19 14.7467 19 9.5C 19 4.2533 14.7467 0 9.5 0L 9.5 1C 14.1945 1 18 4.80554 18 9.5Z" })
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
					(0, _extends3.default)({ height: "18", width: "18", version: "1.1", viewBox: "0 0 18 18" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1205 1292)" },
						_react2.default.createElement(
							"g",
							{ id: "transportation" },
							_react2.default.createElement("path", { d: "M 11.9747 1.55383C 12.5566 1.17468 13.1697 0.994873 13.8641 1L 17.861 1L 17.861 0L 13.8641 0C 13.0276 0.00512695 12.1419 0.264648 11.4349 0.712036L 2.07887 6.71204C -1.70385 9.13794 0.0142913 15 4.50807 15L 9.39637 15L 10.411 15L 12.6918 15L 15.3109 15L 16.3256 15L 17.861 15L 17.861 14L 12.6918 14L 4.50807 14C 1.26454 14 -0.119864 10.0732 2.0492 8L 3.48231 7L 7.38062 4.5L 8.93995 3.5L 11.9747 1.55383Z", transform: "translate(-1204.86 -1292)" }),
							_react2.default.createElement("path", { d: "M 13.111 3.5L 8.93995 3.5L 7.38062 4.5L 13.111 4.5C 13.8013 4.5 14.361 5.05969 14.361 5.75C 14.361 6.44031 13.8013 7 13.111 7L 3.48231 7L 2.0492 8L 13.111 8C 14.3536 8 15.361 6.99268 15.361 5.75C 15.361 4.50732 14.3536 3.5 13.111 3.5Z", transform: "translate(-1204.86 -1292)" }),
							_react2.default.createElement("path", { d: "M 12.861 18C 14.6242 18 16.0829 16.6962 16.3256 15L 15.3109 15C 15.0794 16.1411 14.0704 17 12.861 17C 11.6515 17 10.6426 16.1411 10.411 15L 9.39637 15C 9.63905 16.6962 11.0978 18 12.861 18Z", transform: "translate(-1204.86 -1292)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 11.9747 1.55383C 12.5566 1.17468 13.1697 0.994873 13.8641 1L 17.861 1L 17.861 0L 13.8641 0C 13.0276 0.00512695 12.1419 0.264648 11.4349 0.712036L 2.07887 6.71204C -1.70385 9.13794 0.0142913 15 4.50807 15L 9.39637 15L 10.411 15L 12.6918 15L 15.3109 15L 16.3256 15L 17.861 15L 17.861 14L 12.6918 14L 4.50807 14C 1.26454 14 -0.119864 10.0732 2.0492 8L 3.48231 7L 7.38062 4.5L 8.93995 3.5L 11.9747 1.55383Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 13.111 3.5L 8.93995 3.5L 7.38062 4.5L 13.111 4.5C 13.8013 4.5 14.361 5.05969 14.361 5.75C 14.361 6.44031 13.8013 7 13.111 7L 3.48231 7L 2.0492 8L 13.111 8C 14.3536 8 15.361 6.99268 15.361 5.75C 15.361 4.50732 14.3536 3.5 13.111 3.5Z" }),
						_react2.default.createElement("path", { id: "path2_fill", d: "M 12.861 18C 14.6242 18 16.0829 16.6962 16.3256 15L 15.3109 15C 15.0794 16.1411 14.0704 17 12.861 17C 11.6515 17 10.6426 16.1411 10.411 15L 9.39637 15C 9.63905 16.6962 11.0978 18 12.861 18Z" })
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
					(0, _extends3.default)({ height: "17", width: "19", version: "1.1", viewBox: "0 0 19 17" }, this.props),
					_react2.default.createElement(
						"g",
						{ id: "Canvas", transform: "translate(1131 1292)" },
						_react2.default.createElement(
							"g",
							{ id: "symbols" },
							_react2.default.createElement("path", { d: "M 1 5C 1 2.79091 2.79091 1 5 1C 6.54723 1 7.89015 1.8784 8.55585 3.16603L 9 4.02513L 9 1.99968C 8.08821 0.786061 6.63622 0 5 0C 2.23863 0 0 2.23863 0 5C 0 6.63571 0.786056 8.08793 1.99875 8.99938L 8.65451 15.3614L 9 15.6917L 9 14.3083L 2.66775 8.2555L 2.64519 8.23393L 2.62011 8.21534C 1.63619 7.48562 1 6.31713 1 5Z", transform: "translate(-1130.5 -1291.5)" }),
							_react2.default.createElement("path", { d: "M 15.3322 8.2555L 9 14.3083L 9 15.6917L 9.34549 15.3614L 16.0013 8.99938C 17.2139 8.08793 18 6.63571 18 5C 18 2.23863 15.7614 0 13 0C 11.3638 0 9.91179 0.786061 9 1.99968L 9 4.02513L 9.44415 3.16603C 10.1099 1.8784 11.4528 1 13 1C 15.2091 1 17 2.79091 17 5C 17 6.31713 16.3638 7.48562 15.3799 8.21534L 15.3548 8.23393L 15.3322 8.2555Z", transform: "translate(-1130.5 -1291.5)" })
						)
					),
					_react2.default.createElement(
						"defs",
						null,
						_react2.default.createElement("path", { id: "path0_fill", d: "M 1 5C 1 2.79091 2.79091 1 5 1C 6.54723 1 7.89015 1.8784 8.55585 3.16603L 9 4.02513L 9 1.99968C 8.08821 0.786061 6.63622 0 5 0C 2.23863 0 0 2.23863 0 5C 0 6.63571 0.786056 8.08793 1.99875 8.99938L 8.65451 15.3614L 9 15.6917L 9 14.3083L 2.66775 8.2555L 2.64519 8.23393L 2.62011 8.21534C 1.63619 7.48562 1 6.31713 1 5Z" }),
						_react2.default.createElement("path", { id: "path1_fill", d: "M 15.3322 8.2555L 9 14.3083L 9 15.6917L 9.34549 15.3614L 16.0013 8.99938C 17.2139 8.08793 18 6.63571 18 5C 18 2.23863 15.7614 0 13 0C 11.3638 0 9.91179 0.786061 9 1.99968L 9 4.02513L 9.44415 3.16603C 10.1099 1.8784 11.4528 1 13 1C 15.2091 1 17 2.79091 17 5C 17 6.31713 16.3638 7.48562 15.3799 8.21534L 15.3548 8.23393L 15.3322 8.2555Z" })
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

	  function Category(props) {
	    (0, _classCallCheck3.default)(this, Category);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (Category.__proto__ || (0, _getPrototypeOf2.default)(Category)).call(this, props));

	    _this.memoizeSize = _this.memoizeSize.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(Category, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
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
	      var hasStickyPosition = _props.hasStickyPosition;
	      var emojis = _props.emojis;
	      var emojiProps = _props.emojiProps;
	      var skin = emojiProps.skin;
	      var size = emojiProps.size;
	      var nextPerLine = nextProps.perLine;
	      var nextHasStickyPosition = nextProps.hasStickyPosition;
	      var nextEmojis = nextProps.emojis;
	      var nextEmojiProps = nextProps.emojiProps;
	      var nextSkin = nextEmojiProps.skin;
	      var nextSize = nextEmojiProps.size;
	      var shouldUpdate = false;

	      if (name == 'Recent' && perLine != nextPerLine) {
	        shouldUpdate = true;
	      }

	      if (name == 'Search') {
	        shouldUpdate = !(emojis == nextEmojis);
	      }

	      if (skin != nextSkin || size != nextSize || hasStickyPosition != nextHasStickyPosition) {
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
	        var frequentlyUsed = _frequently2.default.get(perLine);

	        if (frequentlyUsed.length) {
	          emojis = frequentlyUsed;
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
	      var _this2 = this;

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
	        { ref: function ref(container) {
	            return _this2.container = container;
	          }, className: 'emoji-mart-category ' + (emojis && !emojis.length ? 'emoji-mart-no-results' : ''), style: containerStyles },
	        _react2.default.createElement(
	          'div',
	          { style: labelStyles, 'data-name': name, className: 'emoji-mart-category-label' },
	          _react2.default.createElement(
	            'span',
	            { style: labelSpanStyles, ref: function ref(label) {
	                return _this2.label = label;
	              } },
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

	var _utils = __webpack_require__(137);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _getData = function _getData(props) {
	  var emoji = props.emoji;
	  var skin = props.skin;

	  return (0, _utils.getData)(emoji, skin);
	};

	var _getSanitizedData = function _getSanitizedData(props) {
	  var emoji = props.emoji;
	  var skin = props.skin;

	  return (0, _utils.getSanitizedData)(emoji, skin);
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

	  var _getData2 = _getData(props);

	  var unified = _getData2.unified;
	  var imageUrl = _getData2.imageUrl;
	  var style = {};
	  var children = props.children;

	  var image = "url(https://static.figma.com/emoji/2/64/" + unified.toLowerCase() + ".png)";
	  style = {
	    width: props.size,
	    height: props.size,
	    display: 'inline-block',
	    backgroundImage: image,
	    backgroundSize: "100%",
	    backgroundPosition: "100% 100%"
	  };

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
	    _react2.default.createElement('span', { style: style })
	  );
	};

	Emoji.propTypes = {
	  onOver: _propTypes2.default.func,
	  onLeave: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  skin: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]),
	  size: _propTypes2.default.number.isRequired,
	  emoji: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	Emoji.defaultProps = {
	  skin: 1,
	  onOver: function onOver() {},
	  onLeave: function onLeave() {},
	  onClick: function onClick() {}
	};

	exports.default = Emoji;

/***/ },
/* 137 */
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

	var _set = __webpack_require__(138);

	var _set2 = _interopRequireDefault(_set);

	var _stringify = __webpack_require__(134);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _fromCodePoint = __webpack_require__(153);

	var _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _buildSearch = __webpack_require__(156);

	var _buildSearch2 = _interopRequireDefault(_buildSearch);

	var _emoji = __webpack_require__(157);

	var _emoji2 = _interopRequireDefault(_emoji);

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
	  var unified = emoji.unified;
	  var imageUrl = emoji.imageUrl;
	  var id = emoji.id || short_names[0];
	  var colons = ':' + id + ':';

	  if (skin_tone) {
	    colons += ':skin-tone-' + skin_tone + ':';
	  }

	  return {
	    id: id,
	    name: name,
	    colons: colons,
	    unified: unified.toLowerCase(),
	    skin: skin_tone || (skin_variations ? 1 : null)
	  };
	}

	function getSanitizedData() {
	  return sanitize(getData.apply(undefined, arguments));
	}

	function getData(emoji, skin) {
	  var emojiData = {};

	  if (typeof emoji == 'string') {
	    var matches = emoji.match(COLONS_REGEX);

	    if (matches) {
	      emoji = matches[1];

	      if (matches[2]) {
	        skin = parseInt(matches[2]);
	      }
	    }

	    if (_emoji2.default.emojis.hasOwnProperty(emoji)) {
	      emojiData = _emoji2.default.emojis[emoji];
	    }
	  } else if (emoji.name) {
	    if (_emoji2.default.emojis.hasOwnProperty(emoji.name)) {
	      emojiData = _emoji2.default.emojis[emoji.name];
	      skin || (skin = emoji.skin);
	    }
	  }

	  if (emojiData.skin_variations && skin > 1) {
	    emojiData = JSON.parse((0, _stringify2.default)(emojiData));
	    var skinKey = SKINS[skin - 1],
	        variationData = emojiData.skin_variations[skinKey];
	    if (!variationData.variations && emojiData.variations) {
	      delete emojiData.variations;
	    }
	    emojiData.skin_tone = skin;
	    for (var k in variationData) {
	      var v = variationData[k];
	      emojiData[k] = v;
	    }
	  }

	  emojiData.id = emojiData.name;
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(51);
	__webpack_require__(5);
	__webpack_require__(140);
	__webpack_require__(150);
	module.exports = __webpack_require__(18).Set;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(141);

	// 23.2 Set Objects
	module.exports = __webpack_require__(146)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(22).f
	  , create      = __webpack_require__(34)
	  , redefineAll = __webpack_require__(142)
	  , ctx         = __webpack_require__(19)
	  , anInstance  = __webpack_require__(143)
	  , defined     = __webpack_require__(13)
	  , forOf       = __webpack_require__(144)
	  , $iterDefine = __webpack_require__(14)
	  , step        = __webpack_require__(8)
	  , setSpecies  = __webpack_require__(145)
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
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(21);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 144 */
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
/* 145 */
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(17)
	  , $export        = __webpack_require__(16)
	  , meta           = __webpack_require__(73)
	  , fails          = __webpack_require__(27)
	  , hide           = __webpack_require__(21)
	  , redefineAll    = __webpack_require__(142)
	  , forOf          = __webpack_require__(144)
	  , anInstance     = __webpack_require__(143)
	  , isObject       = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(47)
	  , dP             = __webpack_require__(22).f
	  , each           = __webpack_require__(147)(0)
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
/* 147 */
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
	  , asc      = __webpack_require__(148);
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(149);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 149 */
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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(16);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(151)('Set')});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(55)
	  , from    = __webpack_require__(152);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(144);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(155);
	module.exports = __webpack_require__(18).String.fromCodePoint;

/***/ },
/* 155 */
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
/* 156 */
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

	  return search;
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emoji_data = __webpack_require__(158);

	var _emoji_data2 = _interopRequireDefault(_emoji_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var categories = []; // Transform our minimized emoji dataset into the form the library expects, more or less

	var emojis = {};
	var short_names = {};
	var skins = {};

	var category_names = ["People", "Nature", "Foods", "Activity", "Places", "Objects", "Symbols", "Flags"];

	var SKIN_TONE_EMOJI = { '261D': true, '26F9': true, '270A': true, '270B': true, '270C': true, '270D': true, '1F385': true, '1F3C2': true, '1F3C3': true, '1F3C4': true, '1F3C7': true, '1F3CA': true, '1F3CB': true, '1F3CC': true, '1F442': true, '1F443': true, '1F446': true, '1F447': true, '1F448': true, '1F449': true, '1F44A': true, '1F44B': true, '1F44C': true, '1F44D': true, '1F44E': true, '1F44F': true, '1F450': true, '1F466': true, '1F467': true, '1F468': true, '1F469': true, '1F46E': true, '1F470': true, '1F471': true, '1F472': true, '1F473': true, '1F474': true, '1F475': true, '1F476': true, '1F477': true, '1F478': true, '1F47C': true, '1F481': true, '1F482': true, '1F483': true, '1F485': true, '1F486': true, '1F487': true, '1F4AA': true, '1F574': true, '1F575': true, '1F57A': true, '1F590': true, '1F595': true, '1F596': true, '1F645': true, '1F646': true, '1F647': true, '1F64B': true, '1F64C': true, '1F64D': true, '1F64E': true, '1F64F': true, '1F6A3': true, '1F6B4': true, '1F6B5': true, '1F6B6': true, '1F6C0': true, '1F6CC': true, '1F918': true, '1F919': true, '1F91A': true, '1F91B': true, '1F91C': true, '1F91E': true, '1F91F': true, '1F926': true, '1F930': true, '1F931': true, '1F932': true, '1F933': true, '1F934': true, '1F935': true, '1F936': true, '1F937': true, '1F938': true, '1F939': true, '1F93D': true, '1F93E': true, '1F9D1': true, '1F9D2': true, '1F9D3': true, '1F9D4': true, '1F9D5': true, '1F9D6': true, '1F9D7': true, '1F9D8': true, '1F9D9': true, '1F9DA': true, '1F9DB': true, '1F9DC': true, '1F9DD': true };

	for (var category_name_idx in category_names) {
	  var category_name = category_names[category_name_idx];
	  var category = { name: category_name, emojis: [] };
	  for (var emoji_idx in _emoji_data2.default.emoji_data[category_name]) {
	    var emoji = _emoji_data2.default.emoji_data[category_name][emoji_idx];
	    emoji.short_names = emoji.shortNames;
	    delete emoji.shortNames;
	    emoji.name = emoji.short_names[0];
	    emojis[emoji.name] = emoji;
	    emoji.unified = emoji.unified[0];
	    emoji.search = emoji.name;
	    category.emojis.push(emoji);

	    if (SKIN_TONE_EMOJI[emoji.unified] === true) {
	      emoji.skin_variations = { "1F3FB": { unified: emoji.unified + "-1F3FB" },
	        "1F3FC": { unified: emoji.unified + "-1F3FC" },
	        "1F3FD": { unified: emoji.unified + "-1F3FD" },
	        "1F3FE": { unified: emoji.unified + "-1F3FE" },
	        "1F3FF": { unified: emoji.unified + "-1F3FF" }
	      };
	    }
	  }
	  categories.push(category);
	}

	for (var _emoji_idx in _emoji_data2.default.emoji_data["Skin Tones"]) {
	  var _emoji = _emoji_data2.default.emoji_data["Skin Tones"][_emoji_idx];
	  _emoji.short_names = _emoji.shortNames;
	  delete _emoji.shortNames;
	  _emoji.name = _emoji.short_names[0];
	  skins[_emoji.name] = _emoji;
	}

	exports.default = { categories: categories, emojis: emojis, short_names: short_names, skins: skins };

/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var emoji_data = { "Symbols": [{ "shortNames": ["heart"], "unified": ["2764", "2764-FE0F"] }, { "shortNames": ["yellow_heart"], "unified": ["1F49B"] }, { "shortNames": ["green_heart"], "unified": ["1F49A"] }, { "shortNames": ["blue_heart"], "unified": ["1F499"] }, { "shortNames": ["purple_heart"], "unified": ["1F49C"] }, { "shortNames": ["black_heart"], "unified": ["1F5A4"] }, { "shortNames": ["broken_heart"], "unified": ["1F494"] }, { "shortNames": ["heavy_heart_exclamation_mark_ornament"], "unified": ["2763", "2763-FE0F"] }, { "shortNames": ["two_hearts"], "unified": ["1F495"] }, { "shortNames": ["revolving_hearts"], "unified": ["1F49E"] }, { "shortNames": ["heartbeat"], "unified": ["1F493"] }, { "shortNames": ["heartpulse"], "unified": ["1F497"] }, { "shortNames": ["sparkling_heart"], "unified": ["1F496"] }, { "shortNames": ["cupid"], "unified": ["1F498"] }, { "shortNames": ["gift_heart"], "unified": ["1F49D"] }, { "shortNames": ["heart_decoration"], "unified": ["1F49F"] }, { "shortNames": ["peace_symbol"], "unified": ["262E", "262E-FE0F"] }, { "shortNames": ["latin_cross"], "unified": ["271D", "271D-FE0F"] }, { "shortNames": ["star_and_crescent"], "unified": ["262A", "262A-FE0F"] }, { "shortNames": ["om_symbol"], "unified": ["1F549"] }, { "shortNames": ["wheel_of_dharma"], "unified": ["2638", "2638-FE0F"] }, { "shortNames": ["star_of_david"], "unified": ["2721", "2721-FE0F"] }, { "shortNames": ["six_pointed_star"], "unified": ["1F52F"] }, { "shortNames": ["menorah_with_nine_branches"], "unified": ["1F54E"] }, { "shortNames": ["yin_yang"], "unified": ["262F", "262F-FE0F"] }, { "shortNames": ["orthodox_cross"], "unified": ["2626", "2626-FE0F"] }, { "shortNames": ["place_of_worship"], "unified": ["1F6D0"] }, { "shortNames": ["ophiuchus"], "unified": ["26CE"] }, { "shortNames": ["aries"], "unified": ["2648", "2648-FE0F"] }, { "shortNames": ["taurus"], "unified": ["2649", "2649-FE0F"] }, { "shortNames": ["gemini"], "unified": ["264A", "264A-FE0F"] }, { "shortNames": ["cancer"], "unified": ["264B", "264B-FE0F"] }, { "shortNames": ["leo"], "unified": ["264C", "264C-FE0F"] }, { "shortNames": ["virgo"], "unified": ["264D", "264D-FE0F"] }, { "shortNames": ["libra"], "unified": ["264E", "264E-FE0F"] }, { "shortNames": ["scorpius"], "unified": ["264F", "264F-FE0F"] }, { "shortNames": ["sagittarius"], "unified": ["2650", "2650-FE0F"] }, { "shortNames": ["capricorn"], "unified": ["2651", "2651-FE0F"] }, { "shortNames": ["aquarius"], "unified": ["2652", "2652-FE0F"] }, { "shortNames": ["pisces"], "unified": ["2653", "2653-FE0F"] }, { "shortNames": ["id"], "unified": ["1F194"] }, { "shortNames": ["atom_symbol"], "unified": ["269B", "269B-FE0F"] }, { "shortNames": ["accept"], "unified": ["1F251"] }, { "shortNames": ["radioactive_sign"], "unified": ["2622", "2622-FE0F"] }, { "shortNames": ["biohazard_sign"], "unified": ["2623", "2623-FE0F"] }, { "shortNames": ["mobile_phone_off"], "unified": ["1F4F4"] }, { "shortNames": ["vibration_mode"], "unified": ["1F4F3"] }, { "shortNames": ["u6709"], "unified": ["1F236"] }, { "shortNames": ["u7121"], "unified": ["1F21A", "1F21A-FE0F"] }, { "shortNames": ["u7533"], "unified": ["1F238"] }, { "shortNames": ["u55b6"], "unified": ["1F23A"] }, { "shortNames": ["u6708"], "unified": ["1F237", "1F237-FE0F"] }, { "shortNames": ["eight_pointed_black_star"], "unified": ["2734", "2734-FE0F"] }, { "shortNames": ["vs"], "unified": ["1F19A"] }, { "shortNames": ["white_flower"], "unified": ["1F4AE"] }, { "shortNames": ["ideograph_advantage"], "unified": ["1F250"] }, { "shortNames": ["secret"], "unified": ["3299", "3299-FE0F"] }, { "shortNames": ["congratulations"], "unified": ["3297", "3297-FE0F"] }, { "shortNames": ["u5408"], "unified": ["1F234"] }, { "shortNames": ["u6e80"], "unified": ["1F235"] }, { "shortNames": ["u5272"], "unified": ["1F239"] }, { "shortNames": ["u7981"], "unified": ["1F232"] }, { "shortNames": ["a"], "unified": ["1F170", "1F170-FE0F"] }, { "shortNames": ["b"], "unified": ["1F171", "1F171-FE0F"] }, { "shortNames": ["ab"], "unified": ["1F18E"] }, { "shortNames": ["cl"], "unified": ["1F191"] }, { "shortNames": ["o2"], "unified": ["1F17E", "1F17E-FE0F"] }, { "shortNames": ["sos"], "unified": ["1F198"] }, { "shortNames": ["x"], "unified": ["274C"] }, { "shortNames": ["o"], "unified": ["2B55", "2B55-FE0F"] }, { "shortNames": ["octagonal_sign"], "unified": ["1F6D1"] }, { "shortNames": ["no_entry"], "unified": ["26D4", "26D4-FE0F"] }, { "shortNames": ["name_badge"], "unified": ["1F4DB"] }, { "shortNames": ["no_entry_sign"], "unified": ["1F6AB"] }, { "shortNames": ["100"], "unified": ["1F4AF"] }, { "shortNames": ["anger"], "unified": ["1F4A2"] }, { "shortNames": ["hotsprings"], "unified": ["2668", "2668-FE0F"] }, { "shortNames": ["no_pedestrians"], "unified": ["1F6B7"] }, { "shortNames": ["do_not_litter"], "unified": ["1F6AF"] }, { "shortNames": ["no_bicycles"], "unified": ["1F6B3"] }, { "shortNames": ["non-potable_water"], "unified": ["1F6B1"] }, { "shortNames": ["underage"], "unified": ["1F51E"] }, { "shortNames": ["no_mobile_phones"], "unified": ["1F4F5"] }, { "shortNames": ["no_smoking"], "unified": ["1F6AD"] }, { "shortNames": ["exclamation", "heavy_exclamation_mark"], "unified": ["2757", "2757-FE0F"] }, { "shortNames": ["grey_exclamation"], "unified": ["2755"] }, { "shortNames": ["question"], "unified": ["2753"] }, { "shortNames": ["grey_question"], "unified": ["2754"] }, { "shortNames": ["bangbang"], "unified": ["203C", "203C-FE0F"] }, { "shortNames": ["interrobang"], "unified": ["2049", "2049-FE0F"] }, { "shortNames": ["low_brightness"], "unified": ["1F505"] }, { "shortNames": ["high_brightness"], "unified": ["1F506"] }, { "shortNames": ["part_alternation_mark"], "unified": ["303D", "303D-FE0F"] }, { "shortNames": ["warning"], "unified": ["26A0", "26A0-FE0F"] }, { "shortNames": ["children_crossing"], "unified": ["1F6B8"] }, { "shortNames": ["trident"], "unified": ["1F531"] }, { "shortNames": ["fleur_de_lis"], "unified": ["269C", "269C-FE0F"] }, { "shortNames": ["beginner"], "unified": ["1F530"] }, { "shortNames": ["recycle"], "unified": ["267B", "267B-FE0F"] }, { "shortNames": ["white_check_mark"], "unified": ["2705"] }, { "shortNames": ["u6307"], "unified": ["1F22F", "1F22F-FE0F"] }, { "shortNames": ["chart"], "unified": ["1F4B9"] }, { "shortNames": ["sparkle"], "unified": ["2747", "2747-FE0F"] }, { "shortNames": ["eight_spoked_asterisk"], "unified": ["2733", "2733-FE0F"] }, { "shortNames": ["negative_squared_cross_mark"], "unified": ["274E"] }, { "shortNames": ["globe_with_meridians"], "unified": ["1F310"] }, { "shortNames": ["diamond_shape_with_a_dot_inside"], "unified": ["1F4A0"] }, { "shortNames": ["m"], "unified": ["24C2", "24C2-FE0F"] }, { "shortNames": ["cyclone"], "unified": ["1F300"] }, { "shortNames": ["zzz"], "unified": ["1F4A4"] }, { "shortNames": ["atm"], "unified": ["1F3E7"] }, { "shortNames": ["wc"], "unified": ["1F6BE"] }, { "shortNames": ["wheelchair"], "unified": ["267F", "267F-FE0F"] }, { "shortNames": ["parking"], "unified": ["1F17F", "1F17F-FE0F"] }, { "shortNames": ["u7a7a"], "unified": ["1F233"] }, { "shortNames": ["sa"], "unified": ["1F202", "1F202-FE0F"] }, { "shortNames": ["passport_control"], "unified": ["1F6C2"] }, { "shortNames": ["customs"], "unified": ["1F6C3"] }, { "shortNames": ["baggage_claim"], "unified": ["1F6C4"] }, { "shortNames": ["left_luggage"], "unified": ["1F6C5"] }, { "shortNames": ["mens"], "unified": ["1F6B9"] }, { "shortNames": ["womens"], "unified": ["1F6BA"] }, { "shortNames": ["baby_symbol"], "unified": ["1F6BC"] }, { "shortNames": ["restroom"], "unified": ["1F6BB"] }, { "shortNames": ["put_litter_in_its_place"], "unified": ["1F6AE"] }, { "shortNames": ["cinema"], "unified": ["1F3A6"] }, { "shortNames": ["signal_strength"], "unified": ["1F4F6"] }, { "shortNames": ["koko"], "unified": ["1F201"] }, { "shortNames": ["symbols"], "unified": ["1F523"] }, { "shortNames": ["information_source"], "unified": ["2139", "2139-FE0F"] }, { "shortNames": ["abc"], "unified": ["1F524"] }, { "shortNames": ["abcd"], "unified": ["1F521"] }, { "shortNames": ["capital_abcd"], "unified": ["1F520"] }, { "shortNames": ["ng"], "unified": ["1F196"] }, { "shortNames": ["ok"], "unified": ["1F197"] }, { "shortNames": ["up"], "unified": ["1F199"] }, { "shortNames": ["cool"], "unified": ["1F192"] }, { "shortNames": ["new"], "unified": ["1F195"] }, { "shortNames": ["free"], "unified": ["1F193"] }, { "shortNames": ["zero"], "unified": ["0030-20E3", "0030-FE0F-20E3"] }, { "shortNames": ["one"], "unified": ["0031-20E3", "0031-FE0F-20E3"] }, { "shortNames": ["two"], "unified": ["0032-20E3", "0032-FE0F-20E3"] }, { "shortNames": ["three"], "unified": ["0033-20E3", "0033-FE0F-20E3"] }, { "shortNames": ["four"], "unified": ["0034-20E3", "0034-FE0F-20E3"] }, { "shortNames": ["five"], "unified": ["0035-20E3", "0035-FE0F-20E3"] }, { "shortNames": ["six"], "unified": ["0036-20E3", "0036-FE0F-20E3"] }, { "shortNames": ["seven"], "unified": ["0037-20E3", "0037-FE0F-20E3"] }, { "shortNames": ["eight"], "unified": ["0038-20E3", "0038-FE0F-20E3"] }, { "shortNames": ["nine"], "unified": ["0039-20E3", "0039-FE0F-20E3"] }, { "shortNames": ["keycap_ten"], "unified": ["1F51F"] }, { "shortNames": ["1234"], "unified": ["1F522"] }, { "shortNames": ["hash"], "unified": ["0023-20E3", "0023-FE0F-20E3"] }, { "shortNames": ["keycap_star"], "unified": ["002A-20E3", "002A-FE0F-20E3"] }, { "shortNames": ["arrow_forward"], "unified": ["25B6", "25B6-FE0F"] }, { "shortNames": ["double_vertical_bar"], "unified": ["23F8"] }, { "shortNames": ["black_right_pointing_triangle_with_double_vertical_bar"], "unified": ["23EF"] }, { "shortNames": ["black_square_for_stop"], "unified": ["23F9"] }, { "shortNames": ["eject"], "unified": ["23CF"] }, { "shortNames": ["black_circle_for_record"], "unified": ["23FA"] }, { "shortNames": ["black_right_pointing_double_triangle_with_vertical_bar"], "unified": ["23ED"] }, { "shortNames": ["black_left_pointing_double_triangle_with_vertical_bar"], "unified": ["23EE"] }, { "shortNames": ["fast_forward"], "unified": ["23E9"] }, { "shortNames": ["rewind"], "unified": ["23EA"] }, { "shortNames": ["arrow_double_up"], "unified": ["23EB"] }, { "shortNames": ["arrow_double_down"], "unified": ["23EC"] }, { "shortNames": ["arrow_backward"], "unified": ["25C0", "25C0-FE0F"] }, { "shortNames": ["arrow_up_small"], "unified": ["1F53C"] }, { "shortNames": ["arrow_down_small"], "unified": ["1F53D"] }, { "shortNames": ["arrow_right"], "unified": ["27A1", "27A1-FE0F"] }, { "shortNames": ["arrow_left"], "unified": ["2B05", "2B05-FE0F"] }, { "shortNames": ["arrow_up"], "unified": ["2B06", "2B06-FE0F"] }, { "shortNames": ["arrow_down"], "unified": ["2B07", "2B07-FE0F"] }, { "shortNames": ["arrow_upper_right"], "unified": ["2197", "2197-FE0F"] }, { "shortNames": ["arrow_lower_right"], "unified": ["2198", "2198-FE0F"] }, { "shortNames": ["arrow_lower_left"], "unified": ["2199", "2199-FE0F"] }, { "shortNames": ["arrow_upper_left"], "unified": ["2196", "2196-FE0F"] }, { "shortNames": ["arrow_up_down"], "unified": ["2195", "2195-FE0F"] }, { "shortNames": ["left_right_arrow"], "unified": ["2194", "2194-FE0F"] }, { "shortNames": ["arrow_right_hook"], "unified": ["21AA", "21AA-FE0F"] }, { "shortNames": ["leftwards_arrow_with_hook"], "unified": ["21A9", "21A9-FE0F"] }, { "shortNames": ["arrow_heading_up"], "unified": ["2934", "2934-FE0F"] }, { "shortNames": ["arrow_heading_down"], "unified": ["2935", "2935-FE0F"] }, { "shortNames": ["twisted_rightwards_arrows"], "unified": ["1F500"] }, { "shortNames": ["repeat"], "unified": ["1F501"] }, { "shortNames": ["repeat_one"], "unified": ["1F502"] }, { "shortNames": ["arrows_counterclockwise"], "unified": ["1F504"] }, { "shortNames": ["arrows_clockwise"], "unified": ["1F503"] }, { "shortNames": ["musical_note"], "unified": ["1F3B5"] }, { "shortNames": ["notes"], "unified": ["1F3B6"] }, { "shortNames": ["heavy_plus_sign"], "unified": ["2795"] }, { "shortNames": ["heavy_minus_sign"], "unified": ["2796"] }, { "shortNames": ["heavy_division_sign"], "unified": ["2797"] }, { "shortNames": ["heavy_multiplication_x"], "unified": ["2716", "2716-FE0F"] }, { "shortNames": ["heavy_dollar_sign"], "unified": ["1F4B2"] }, { "shortNames": ["currency_exchange"], "unified": ["1F4B1"] }, { "shortNames": ["tm"], "unified": ["2122", "2122-FE0F"] }, { "shortNames": ["copyright"], "unified": ["00A9", "00A9-FE0F"] }, { "shortNames": ["registered"], "unified": ["00AE", "00AE-FE0F"] }, { "shortNames": ["wavy_dash"], "unified": ["3030", "3030-FE0F"] }, { "shortNames": ["curly_loop"], "unified": ["27B0"] }, { "shortNames": ["loop"], "unified": ["27BF"] }, { "shortNames": ["end"], "unified": ["1F51A"] }, { "shortNames": ["back"], "unified": ["1F519"] }, { "shortNames": ["on"], "unified": ["1F51B"] }, { "shortNames": ["top"], "unified": ["1F51D"] }, { "shortNames": ["soon"], "unified": ["1F51C"] }, { "shortNames": ["heavy_check_mark"], "unified": ["2714", "2714-FE0F"] }, { "shortNames": ["ballot_box_with_check"], "unified": ["2611", "2611-FE0F"] }, { "shortNames": ["radio_button"], "unified": ["1F518"] }, { "shortNames": ["white_circle"], "unified": ["26AA", "26AA-FE0F"] }, { "shortNames": ["black_circle"], "unified": ["26AB", "26AB-FE0F"] }, { "shortNames": ["red_circle"], "unified": ["1F534"] }, { "shortNames": ["large_blue_circle"], "unified": ["1F535"] }, { "shortNames": ["small_red_triangle"], "unified": ["1F53A"] }, { "shortNames": ["small_red_triangle_down"], "unified": ["1F53B"] }, { "shortNames": ["small_orange_diamond"], "unified": ["1F538"] }, { "shortNames": ["small_blue_diamond"], "unified": ["1F539"] }, { "shortNames": ["large_orange_diamond"], "unified": ["1F536"] }, { "shortNames": ["large_blue_diamond"], "unified": ["1F537"] }, { "shortNames": ["white_square_button"], "unified": ["1F533"] }, { "shortNames": ["black_square_button"], "unified": ["1F532"] }, { "shortNames": ["black_small_square"], "unified": ["25AA", "25AA-FE0F"] }, { "shortNames": ["white_small_square"], "unified": ["25AB", "25AB-FE0F"] }, { "shortNames": ["black_medium_small_square"], "unified": ["25FE", "25FE-FE0F"] }, { "shortNames": ["white_medium_small_square"], "unified": ["25FD", "25FD-FE0F"] }, { "shortNames": ["black_medium_square"], "unified": ["25FC", "25FC-FE0F"] }, { "shortNames": ["white_medium_square"], "unified": ["25FB", "25FB-FE0F"] }, { "shortNames": ["black_large_square"], "unified": ["2B1B", "2B1B-FE0F"] }, { "shortNames": ["white_large_square"], "unified": ["2B1C", "2B1C-FE0F"] }, { "shortNames": ["speaker"], "unified": ["1F508"] }, { "shortNames": ["mute"], "unified": ["1F507"] }, { "shortNames": ["sound"], "unified": ["1F509"] }, { "shortNames": ["loud_sound"], "unified": ["1F50A"] }, { "shortNames": ["bell"], "unified": ["1F514"] }, { "shortNames": ["no_bell"], "unified": ["1F515"] }, { "shortNames": ["mega"], "unified": ["1F4E3"] }, { "shortNames": ["loudspeaker"], "unified": ["1F4E2"] }, { "shortNames": ["eye-in-speech-bubble"], "unified": ["1F441-FE0F-200D-1F5E8-FE0F"] }, { "shortNames": ["speech_balloon"], "unified": ["1F4AC"] }, { "shortNames": ["left_speech_bubble"], "unified": ["1F5E8"] }, { "shortNames": ["thought_balloon"], "unified": ["1F4AD"] }, { "shortNames": ["right_anger_bubble"], "unified": ["1F5EF"] }, { "shortNames": ["spades"], "unified": ["2660", "2660-FE0F"] }, { "shortNames": ["clubs"], "unified": ["2663", "2663-FE0F"] }, { "shortNames": ["hearts"], "unified": ["2665", "2665-FE0F"] }, { "shortNames": ["diamonds"], "unified": ["2666", "2666-FE0F"] }, { "shortNames": ["black_joker"], "unified": ["1F0CF"] }, { "shortNames": ["flower_playing_cards"], "unified": ["1F3B4"] }, { "shortNames": ["mahjong"], "unified": ["1F004", "1F004-FE0F"] }, { "shortNames": ["clock1"], "unified": ["1F550"] }, { "shortNames": ["clock2"], "unified": ["1F551"] }, { "shortNames": ["clock3"], "unified": ["1F552"] }, { "shortNames": ["clock4"], "unified": ["1F553"] }, { "shortNames": ["clock5"], "unified": ["1F554"] }, { "shortNames": ["clock6"], "unified": ["1F555"] }, { "shortNames": ["clock7"], "unified": ["1F556"] }, { "shortNames": ["clock8"], "unified": ["1F557"] }, { "shortNames": ["clock9"], "unified": ["1F558"] }, { "shortNames": ["clock10"], "unified": ["1F559"] }, { "shortNames": ["clock11"], "unified": ["1F55A"] }, { "shortNames": ["clock12"], "unified": ["1F55B"] }, { "shortNames": ["clock130"], "unified": ["1F55C"] }, { "shortNames": ["clock230"], "unified": ["1F55D"] }, { "shortNames": ["clock330"], "unified": ["1F55E"] }, { "shortNames": ["clock430"], "unified": ["1F55F"] }, { "shortNames": ["clock530"], "unified": ["1F560"] }, { "shortNames": ["clock630"], "unified": ["1F561"] }, { "shortNames": ["clock730"], "unified": ["1F562"] }, { "shortNames": ["clock830"], "unified": ["1F563"] }, { "shortNames": ["clock930"], "unified": ["1F564"] }, { "shortNames": ["clock1030"], "unified": ["1F565"] }, { "shortNames": ["clock1130"], "unified": ["1F566"] }, { "shortNames": ["clock1230"], "unified": ["1F567"] }, { "shortNames": ["female_sign"], "unified": ["2640"] }, { "shortNames": ["male_sign"], "unified": ["2642"] }, { "shortNames": ["staff_of_aesculapius"], "unified": ["2695"] }], "Objects": [{ "shortNames": ["watch"], "unified": ["231A", "231A-FE0F"] }, { "shortNames": ["iphone"], "unified": ["1F4F1"] }, { "shortNames": ["calling"], "unified": ["1F4F2"] }, { "shortNames": ["computer"], "unified": ["1F4BB"] }, { "shortNames": ["keyboard"], "unified": ["2328", "2328-FE0F"] }, { "shortNames": ["desktop_computer"], "unified": ["1F5A5"] }, { "shortNames": ["printer"], "unified": ["1F5A8"] }, { "shortNames": ["three_button_mouse"], "unified": ["1F5B1"] }, { "shortNames": ["trackball"], "unified": ["1F5B2"] }, { "shortNames": ["joystick"], "unified": ["1F579"] }, { "shortNames": ["compression"], "unified": ["1F5DC"] }, { "shortNames": ["minidisc"], "unified": ["1F4BD"] }, { "shortNames": ["floppy_disk"], "unified": ["1F4BE"] }, { "shortNames": ["cd"], "unified": ["1F4BF"] }, { "shortNames": ["dvd"], "unified": ["1F4C0"] }, { "shortNames": ["vhs"], "unified": ["1F4FC"] }, { "shortNames": ["camera"], "unified": ["1F4F7"] }, { "shortNames": ["camera_with_flash"], "unified": ["1F4F8"] }, { "shortNames": ["video_camera"], "unified": ["1F4F9"] }, { "shortNames": ["movie_camera"], "unified": ["1F3A5"] }, { "shortNames": ["film_projector"], "unified": ["1F4FD"] }, { "shortNames": ["film_frames"], "unified": ["1F39E"] }, { "shortNames": ["telephone_receiver"], "unified": ["1F4DE"] }, { "shortNames": ["phone", "telephone"], "unified": ["260E", "260E-FE0F"] }, { "shortNames": ["pager"], "unified": ["1F4DF"] }, { "shortNames": ["fax"], "unified": ["1F4E0"] }, { "shortNames": ["tv"], "unified": ["1F4FA"] }, { "shortNames": ["radio"], "unified": ["1F4FB"] }, { "shortNames": ["studio_microphone"], "unified": ["1F399"] }, { "shortNames": ["level_slider"], "unified": ["1F39A"] }, { "shortNames": ["control_knobs"], "unified": ["1F39B"] }, { "shortNames": ["stopwatch"], "unified": ["23F1"] }, { "shortNames": ["timer_clock"], "unified": ["23F2"] }, { "shortNames": ["alarm_clock"], "unified": ["23F0"] }, { "shortNames": ["mantelpiece_clock"], "unified": ["1F570"] }, { "shortNames": ["hourglass"], "unified": ["231B", "231B-FE0F"] }, { "shortNames": ["hourglass_flowing_sand"], "unified": ["23F3"] }, { "shortNames": ["satellite_antenna"], "unified": ["1F4E1"] }, { "shortNames": ["battery"], "unified": ["1F50B"] }, { "shortNames": ["electric_plug"], "unified": ["1F50C"] }, { "shortNames": ["bulb"], "unified": ["1F4A1"] }, { "shortNames": ["flashlight"], "unified": ["1F526"] }, { "shortNames": ["candle"], "unified": ["1F56F"] }, { "shortNames": ["wastebasket"], "unified": ["1F5D1"] }, { "shortNames": ["oil_drum"], "unified": ["1F6E2"] }, { "shortNames": ["money_with_wings"], "unified": ["1F4B8"] }, { "shortNames": ["dollar"], "unified": ["1F4B5"] }, { "shortNames": ["yen"], "unified": ["1F4B4"] }, { "shortNames": ["euro"], "unified": ["1F4B6"] }, { "shortNames": ["pound"], "unified": ["1F4B7"] }, { "shortNames": ["moneybag"], "unified": ["1F4B0"] }, { "shortNames": ["credit_card"], "unified": ["1F4B3"] }, { "shortNames": ["gem"], "unified": ["1F48E"] }, { "shortNames": ["scales"], "unified": ["2696", "2696-FE0F"] }, { "shortNames": ["wrench"], "unified": ["1F527"] }, { "shortNames": ["hammer"], "unified": ["1F528"] }, { "shortNames": ["hammer_and_pick"], "unified": ["2692"] }, { "shortNames": ["hammer_and_wrench"], "unified": ["1F6E0"] }, { "shortNames": ["pick"], "unified": ["26CF"] }, { "shortNames": ["nut_and_bolt"], "unified": ["1F529"] }, { "shortNames": ["gear"], "unified": ["2699", "2699-FE0F"] }, { "shortNames": ["chains"], "unified": ["26D3"] }, { "shortNames": ["gun"], "unified": ["1F52B"] }, { "shortNames": ["bomb"], "unified": ["1F4A3"] }, { "shortNames": ["hocho", "knife"], "unified": ["1F52A"] }, { "shortNames": ["dagger_knife"], "unified": ["1F5E1"] }, { "shortNames": ["crossed_swords"], "unified": ["2694", "2694-FE0F"] }, { "shortNames": ["shield"], "unified": ["1F6E1"] }, { "shortNames": ["smoking"], "unified": ["1F6AC"] }, { "shortNames": ["coffin"], "unified": ["26B0", "26B0-FE0F"] }, { "shortNames": ["funeral_urn"], "unified": ["26B1", "26B1-FE0F"] }, { "shortNames": ["amphora"], "unified": ["1F3FA"] }, { "shortNames": ["crystal_ball"], "unified": ["1F52E"] }, { "shortNames": ["prayer_beads"], "unified": ["1F4FF"] }, { "shortNames": ["barber"], "unified": ["1F488"] }, { "shortNames": ["alembic"], "unified": ["2697", "2697-FE0F"] }, { "shortNames": ["telescope"], "unified": ["1F52D"] }, { "shortNames": ["microscope"], "unified": ["1F52C"] }, { "shortNames": ["hole"], "unified": ["1F573"] }, { "shortNames": ["pill"], "unified": ["1F48A"] }, { "shortNames": ["syringe"], "unified": ["1F489"] }, { "shortNames": ["thermometer"], "unified": ["1F321"] }, { "shortNames": ["toilet"], "unified": ["1F6BD"] }, { "shortNames": ["potable_water"], "unified": ["1F6B0"] }, { "shortNames": ["shower"], "unified": ["1F6BF"] }, { "shortNames": ["bathtub"], "unified": ["1F6C1"] }, { "shortNames": ["bath"], "unified": ["1F6C0"], "tones": false }, { "shortNames": ["bellhop_bell"], "unified": ["1F6CE"] }, { "shortNames": ["key"], "unified": ["1F511"] }, { "shortNames": ["old_key"], "unified": ["1F5DD"] }, { "shortNames": ["door"], "unified": ["1F6AA"] }, { "shortNames": ["couch_and_lamp"], "unified": ["1F6CB"] }, { "shortNames": ["bed"], "unified": ["1F6CF"] }, { "shortNames": ["sleeping_accommodation"], "unified": ["1F6CC"], "tones": false }, { "shortNames": ["frame_with_picture"], "unified": ["1F5BC"] }, { "shortNames": ["shopping_bags"], "unified": ["1F6CD"] }, { "shortNames": ["shopping_trolley"], "unified": ["1F6D2"] }, { "shortNames": ["gift"], "unified": ["1F381"] }, { "shortNames": ["balloon"], "unified": ["1F388"] }, { "shortNames": ["flags"], "unified": ["1F38F"] }, { "shortNames": ["ribbon"], "unified": ["1F380"] }, { "shortNames": ["confetti_ball"], "unified": ["1F38A"] }, { "shortNames": ["tada"], "unified": ["1F389"] }, { "shortNames": ["dolls"], "unified": ["1F38E"] }, { "shortNames": ["izakaya_lantern", "lantern"], "unified": ["1F3EE"] }, { "shortNames": ["wind_chime"], "unified": ["1F390"] }, { "shortNames": ["email", "envelope"], "unified": ["2709", "2709-FE0F"] }, { "shortNames": ["envelope_with_arrow"], "unified": ["1F4E9"] }, { "shortNames": ["incoming_envelope"], "unified": ["1F4E8"] }, { "shortNames": ["e-mail"], "unified": ["1F4E7"] }, { "shortNames": ["love_letter"], "unified": ["1F48C"] }, { "shortNames": ["inbox_tray"], "unified": ["1F4E5"] }, { "shortNames": ["outbox_tray"], "unified": ["1F4E4"] }, { "shortNames": ["package"], "unified": ["1F4E6"] }, { "shortNames": ["label"], "unified": ["1F3F7"] }, { "shortNames": ["mailbox_closed"], "unified": ["1F4EA"] }, { "shortNames": ["mailbox"], "unified": ["1F4EB"] }, { "shortNames": ["mailbox_with_mail"], "unified": ["1F4EC"] }, { "shortNames": ["mailbox_with_no_mail"], "unified": ["1F4ED"] }, { "shortNames": ["postbox"], "unified": ["1F4EE"] }, { "shortNames": ["postal_horn"], "unified": ["1F4EF"] }, { "shortNames": ["scroll"], "unified": ["1F4DC"] }, { "shortNames": ["page_with_curl"], "unified": ["1F4C3"] }, { "shortNames": ["page_facing_up"], "unified": ["1F4C4"] }, { "shortNames": ["bookmark_tabs"], "unified": ["1F4D1"] }, { "shortNames": ["bar_chart"], "unified": ["1F4CA"] }, { "shortNames": ["chart_with_upwards_trend"], "unified": ["1F4C8"] }, { "shortNames": ["chart_with_downwards_trend"], "unified": ["1F4C9"] }, { "shortNames": ["spiral_note_pad"], "unified": ["1F5D2"] }, { "shortNames": ["spiral_calendar_pad"], "unified": ["1F5D3"] }, { "shortNames": ["calendar"], "unified": ["1F4C6"] }, { "shortNames": ["date"], "unified": ["1F4C5"] }, { "shortNames": ["card_index"], "unified": ["1F4C7"] }, { "shortNames": ["card_file_box"], "unified": ["1F5C3"] }, { "shortNames": ["ballot_box_with_ballot"], "unified": ["1F5F3"] }, { "shortNames": ["file_cabinet"], "unified": ["1F5C4"] }, { "shortNames": ["clipboard"], "unified": ["1F4CB"] }, { "shortNames": ["file_folder"], "unified": ["1F4C1"] }, { "shortNames": ["open_file_folder"], "unified": ["1F4C2"] }, { "shortNames": ["card_index_dividers"], "unified": ["1F5C2"] }, { "shortNames": ["rolled_up_newspaper"], "unified": ["1F5DE"] }, { "shortNames": ["newspaper"], "unified": ["1F4F0"] }, { "shortNames": ["notebook"], "unified": ["1F4D3"] }, { "shortNames": ["notebook_with_decorative_cover"], "unified": ["1F4D4"] }, { "shortNames": ["ledger"], "unified": ["1F4D2"] }, { "shortNames": ["closed_book"], "unified": ["1F4D5"] }, { "shortNames": ["green_book"], "unified": ["1F4D7"] }, { "shortNames": ["blue_book"], "unified": ["1F4D8"] }, { "shortNames": ["orange_book"], "unified": ["1F4D9"] }, { "shortNames": ["books"], "unified": ["1F4DA"] }, { "shortNames": ["book", "open_book"], "unified": ["1F4D6"] }, { "shortNames": ["bookmark"], "unified": ["1F516"] }, { "shortNames": ["link"], "unified": ["1F517"] }, { "shortNames": ["paperclip"], "unified": ["1F4CE"] }, { "shortNames": ["linked_paperclips"], "unified": ["1F587"] }, { "shortNames": ["triangular_ruler"], "unified": ["1F4D0"] }, { "shortNames": ["straight_ruler"], "unified": ["1F4CF"] }, { "shortNames": ["pushpin"], "unified": ["1F4CC"] }, { "shortNames": ["round_pushpin"], "unified": ["1F4CD"] }, { "shortNames": ["scissors"], "unified": ["2702", "2702-FE0F"] }, { "shortNames": ["lower_left_ballpoint_pen"], "unified": ["1F58A"] }, { "shortNames": ["lower_left_fountain_pen"], "unified": ["1F58B"] }, { "shortNames": ["black_nib"], "unified": ["2712", "2712-FE0F"] }, { "shortNames": ["lower_left_paintbrush"], "unified": ["1F58C"] }, { "shortNames": ["lower_left_crayon"], "unified": ["1F58D"] }, { "shortNames": ["memo", "pencil"], "unified": ["1F4DD"] }, { "shortNames": ["pencil2"], "unified": ["270F", "270F-FE0F"] }, { "shortNames": ["mag"], "unified": ["1F50D"] }, { "shortNames": ["mag_right"], "unified": ["1F50E"] }, { "shortNames": ["lock_with_ink_pen"], "unified": ["1F50F"] }, { "shortNames": ["closed_lock_with_key"], "unified": ["1F510"] }, { "shortNames": ["lock"], "unified": ["1F512"] }, { "shortNames": ["unlock"], "unified": ["1F513"] }], "Nature": [{ "shortNames": ["dog"], "unified": ["1F436"] }, { "shortNames": ["cat"], "unified": ["1F431"] }, { "shortNames": ["mouse"], "unified": ["1F42D"] }, { "shortNames": ["hamster"], "unified": ["1F439"] }, { "shortNames": ["rabbit"], "unified": ["1F430"] }, { "shortNames": ["fox_face"], "unified": ["1F98A"] }, { "shortNames": ["bear"], "unified": ["1F43B"] }, { "shortNames": ["panda_face"], "unified": ["1F43C"] }, { "shortNames": ["koala"], "unified": ["1F428"] }, { "shortNames": ["tiger"], "unified": ["1F42F"] }, { "shortNames": ["lion_face"], "unified": ["1F981"] }, { "shortNames": ["cow"], "unified": ["1F42E"] }, { "shortNames": ["pig"], "unified": ["1F437"] }, { "shortNames": ["pig_nose"], "unified": ["1F43D"] }, { "shortNames": ["frog"], "unified": ["1F438"] }, { "shortNames": ["monkey_face"], "unified": ["1F435"] }, { "shortNames": ["see_no_evil"], "unified": ["1F648"] }, { "shortNames": ["hear_no_evil"], "unified": ["1F649"] }, { "shortNames": ["speak_no_evil"], "unified": ["1F64A"] }, { "shortNames": ["monkey"], "unified": ["1F412"] }, { "shortNames": ["chicken"], "unified": ["1F414"] }, { "shortNames": ["penguin"], "unified": ["1F427"] }, { "shortNames": ["bird"], "unified": ["1F426"] }, { "shortNames": ["baby_chick"], "unified": ["1F424"] }, { "shortNames": ["hatching_chick"], "unified": ["1F423"] }, { "shortNames": ["hatched_chick"], "unified": ["1F425"] }, { "shortNames": ["duck"], "unified": ["1F986"] }, { "shortNames": ["eagle"], "unified": ["1F985"] }, { "shortNames": ["owl"], "unified": ["1F989"] }, { "shortNames": ["bat"], "unified": ["1F987"] }, { "shortNames": ["wolf"], "unified": ["1F43A"] }, { "shortNames": ["boar"], "unified": ["1F417"] }, { "shortNames": ["horse"], "unified": ["1F434"] }, { "shortNames": ["unicorn_face"], "unified": ["1F984"] }, { "shortNames": ["bee", "honeybee"], "unified": ["1F41D"] }, { "shortNames": ["bug"], "unified": ["1F41B"] }, { "shortNames": ["butterfly"], "unified": ["1F98B"] }, { "shortNames": ["snail"], "unified": ["1F40C"] }, { "shortNames": ["shell"], "unified": ["1F41A"] }, { "shortNames": ["beetle"], "unified": ["1F41E"] }, { "shortNames": ["ant"], "unified": ["1F41C"] }, { "shortNames": ["spider"], "unified": ["1F577"] }, { "shortNames": ["spider_web"], "unified": ["1F578"] }, { "shortNames": ["turtle"], "unified": ["1F422"] }, { "shortNames": ["snake"], "unified": ["1F40D"] }, { "shortNames": ["lizard"], "unified": ["1F98E"] }, { "shortNames": ["scorpion"], "unified": ["1F982"] }, { "shortNames": ["crab"], "unified": ["1F980"] }, { "shortNames": ["squid"], "unified": ["1F991"] }, { "shortNames": ["octopus"], "unified": ["1F419"] }, { "shortNames": ["shrimp"], "unified": ["1F990"] }, { "shortNames": ["tropical_fish"], "unified": ["1F420"] }, { "shortNames": ["fish"], "unified": ["1F41F"] }, { "shortNames": ["blowfish"], "unified": ["1F421"] }, { "shortNames": ["dolphin", "flipper"], "unified": ["1F42C"] }, { "shortNames": ["shark"], "unified": ["1F988"] }, { "shortNames": ["whale"], "unified": ["1F433"] }, { "shortNames": ["whale2"], "unified": ["1F40B"] }, { "shortNames": ["crocodile"], "unified": ["1F40A"] }, { "shortNames": ["leopard"], "unified": ["1F406"] }, { "shortNames": ["tiger2"], "unified": ["1F405"] }, { "shortNames": ["water_buffalo"], "unified": ["1F403"] }, { "shortNames": ["ox"], "unified": ["1F402"] }, { "shortNames": ["cow2"], "unified": ["1F404"] }, { "shortNames": ["deer"], "unified": ["1F98C"] }, { "shortNames": ["dromedary_camel"], "unified": ["1F42A"] }, { "shortNames": ["camel"], "unified": ["1F42B"] }, { "shortNames": ["elephant"], "unified": ["1F418"] }, { "shortNames": ["rhinoceros"], "unified": ["1F98F"] }, { "shortNames": ["gorilla"], "unified": ["1F98D"] }, { "shortNames": ["racehorse"], "unified": ["1F40E"] }, { "shortNames": ["pig2"], "unified": ["1F416"] }, { "shortNames": ["goat"], "unified": ["1F410"] }, { "shortNames": ["ram"], "unified": ["1F40F"] }, { "shortNames": ["sheep"], "unified": ["1F411"] }, { "shortNames": ["dog2"], "unified": ["1F415"] }, { "shortNames": ["poodle"], "unified": ["1F429"] }, { "shortNames": ["cat2"], "unified": ["1F408"] }, { "shortNames": ["rooster"], "unified": ["1F413"] }, { "shortNames": ["turkey"], "unified": ["1F983"] }, { "shortNames": ["dove_of_peace"], "unified": ["1F54A"] }, { "shortNames": ["rabbit2"], "unified": ["1F407"] }, { "shortNames": ["mouse2"], "unified": ["1F401"] }, { "shortNames": ["rat"], "unified": ["1F400"] }, { "shortNames": ["chipmunk"], "unified": ["1F43F"] }, { "shortNames": ["feet", "paw_prints"], "unified": ["1F43E"] }, { "shortNames": ["dragon"], "unified": ["1F409"] }, { "shortNames": ["dragon_face"], "unified": ["1F432"] }, { "shortNames": ["cactus"], "unified": ["1F335"] }, { "shortNames": ["christmas_tree"], "unified": ["1F384"] }, { "shortNames": ["evergreen_tree"], "unified": ["1F332"] }, { "shortNames": ["deciduous_tree"], "unified": ["1F333"] }, { "shortNames": ["palm_tree"], "unified": ["1F334"] }, { "shortNames": ["seedling"], "unified": ["1F331"] }, { "shortNames": ["herb"], "unified": ["1F33F"] }, { "shortNames": ["shamrock"], "unified": ["2618", "2618-FE0F"] }, { "shortNames": ["four_leaf_clover"], "unified": ["1F340"] }, { "shortNames": ["bamboo"], "unified": ["1F38D"] }, { "shortNames": ["tanabata_tree"], "unified": ["1F38B"] }, { "shortNames": ["leaves"], "unified": ["1F343"] }, { "shortNames": ["fallen_leaf"], "unified": ["1F342"] }, { "shortNames": ["maple_leaf"], "unified": ["1F341"] }, { "shortNames": ["mushroom"], "unified": ["1F344"] }, { "shortNames": ["ear_of_rice"], "unified": ["1F33E"] }, { "shortNames": ["bouquet"], "unified": ["1F490"] }, { "shortNames": ["tulip"], "unified": ["1F337"] }, { "shortNames": ["rose"], "unified": ["1F339"] }, { "shortNames": ["wilted_flower"], "unified": ["1F940"] }, { "shortNames": ["sunflower"], "unified": ["1F33B"] }, { "shortNames": ["blossom"], "unified": ["1F33C"] }, { "shortNames": ["cherry_blossom"], "unified": ["1F338"] }, { "shortNames": ["hibiscus"], "unified": ["1F33A"] }, { "shortNames": ["earth_americas"], "unified": ["1F30E"] }, { "shortNames": ["earth_africa"], "unified": ["1F30D"] }, { "shortNames": ["earth_asia"], "unified": ["1F30F"] }, { "shortNames": ["full_moon"], "unified": ["1F315"] }, { "shortNames": ["waning_gibbous_moon"], "unified": ["1F316"] }, { "shortNames": ["last_quarter_moon"], "unified": ["1F317"] }, { "shortNames": ["waning_crescent_moon"], "unified": ["1F318"] }, { "shortNames": ["new_moon"], "unified": ["1F311"] }, { "shortNames": ["waxing_crescent_moon"], "unified": ["1F312"] }, { "shortNames": ["first_quarter_moon"], "unified": ["1F313"] }, { "shortNames": ["moon", "waxing_gibbous_moon"], "unified": ["1F314"] }, { "shortNames": ["new_moon_with_face"], "unified": ["1F31A"] }, { "shortNames": ["full_moon_with_face"], "unified": ["1F31D"] }, { "shortNames": ["sun_with_face"], "unified": ["1F31E"] }, { "shortNames": ["first_quarter_moon_with_face"], "unified": ["1F31B"] }, { "shortNames": ["last_quarter_moon_with_face"], "unified": ["1F31C"] }, { "shortNames": ["crescent_moon"], "unified": ["1F319"] }, { "shortNames": ["dizzy"], "unified": ["1F4AB"] }, { "shortNames": ["star"], "unified": ["2B50", "2B50-FE0F"] }, { "shortNames": ["star2"], "unified": ["1F31F"] }, { "shortNames": ["sparkles"], "unified": ["2728"] }, { "shortNames": ["zap"], "unified": ["26A1", "26A1-FE0F"] }, { "shortNames": ["fire"], "unified": ["1F525"] }, { "shortNames": ["boom", "collision"], "unified": ["1F4A5"] }, { "shortNames": ["comet"], "unified": ["2604", "2604-FE0F"] }, { "shortNames": ["sunny"], "unified": ["2600", "2600-FE0F"] }, { "shortNames": ["mostly_sunny", "sun_small_cloud"], "unified": ["1F324"] }, { "shortNames": ["partly_sunny"], "unified": ["26C5", "26C5-FE0F"] }, { "shortNames": ["barely_sunny", "sun_behind_cloud"], "unified": ["1F325"] }, { "shortNames": ["partly_sunny_rain", "sun_behind_rain_cloud"], "unified": ["1F326"] }, { "shortNames": ["rainbow"], "unified": ["1F308"] }, { "shortNames": ["cloud"], "unified": ["2601", "2601-FE0F"] }, { "shortNames": ["rain_cloud"], "unified": ["1F327"] }, { "shortNames": ["thunder_cloud_and_rain"], "unified": ["26C8"] }, { "shortNames": ["lightning", "lightning_cloud"], "unified": ["1F329"] }, { "shortNames": ["snow_cloud"], "unified": ["1F328"] }, { "shortNames": ["snowman"], "unified": ["2603", "2603-FE0F"] }, { "shortNames": ["snowman_without_snow"], "unified": ["26C4", "26C4-FE0F"] }, { "shortNames": ["snowflake"], "unified": ["2744", "2744-FE0F"] }, { "shortNames": ["wind_blowing_face"], "unified": ["1F32C"] }, { "shortNames": ["dash"], "unified": ["1F4A8"] }, { "shortNames": ["tornado", "tornado_cloud"], "unified": ["1F32A"] }, { "shortNames": ["fog"], "unified": ["1F32B"] }, { "shortNames": ["ocean"], "unified": ["1F30A"] }, { "shortNames": ["droplet"], "unified": ["1F4A7"] }, { "shortNames": ["sweat_drops"], "unified": ["1F4A6"] }, { "shortNames": ["umbrella_with_rain_drops"], "unified": ["2614", "2614-FE0F"] }], "People": [{ "shortNames": ["grinning"], "unified": ["1F600"] }, { "shortNames": ["smiley"], "unified": ["1F603"] }, { "shortNames": ["smile"], "unified": ["1F604"] }, { "shortNames": ["grin"], "unified": ["1F601"] }, { "shortNames": ["laughing", "satisfied"], "unified": ["1F606"] }, { "shortNames": ["sweat_smile"], "unified": ["1F605"] }, { "shortNames": ["joy"], "unified": ["1F602"] }, { "shortNames": ["rolling_on_the_floor_laughing"], "unified": ["1F923"] }, { "shortNames": ["relaxed"], "unified": ["263A", "263A-FE0F"] }, { "shortNames": ["blush"], "unified": ["1F60A"] }, { "shortNames": ["innocent"], "unified": ["1F607"] }, { "shortNames": ["slightly_smiling_face"], "unified": ["1F642"] }, { "shortNames": ["upside_down_face"], "unified": ["1F643"] }, { "shortNames": ["wink"], "unified": ["1F609"] }, { "shortNames": ["relieved"], "unified": ["1F60C"] }, { "shortNames": ["heart_eyes"], "unified": ["1F60D"] }, { "shortNames": ["kissing_heart"], "unified": ["1F618"] }, { "shortNames": ["kissing"], "unified": ["1F617"] }, { "shortNames": ["kissing_smiling_eyes"], "unified": ["1F619"] }, { "shortNames": ["kissing_closed_eyes"], "unified": ["1F61A"] }, { "shortNames": ["yum"], "unified": ["1F60B"] }, { "shortNames": ["stuck_out_tongue_winking_eye"], "unified": ["1F61C"] }, { "shortNames": ["stuck_out_tongue_closed_eyes"], "unified": ["1F61D"] }, { "shortNames": ["stuck_out_tongue"], "unified": ["1F61B"] }, { "shortNames": ["money_mouth_face"], "unified": ["1F911"] }, { "shortNames": ["hugging_face"], "unified": ["1F917"] }, { "shortNames": ["nerd_face"], "unified": ["1F913"] }, { "shortNames": ["sunglasses"], "unified": ["1F60E"] }, { "shortNames": ["clown_face"], "unified": ["1F921"] }, { "shortNames": ["face_with_cowboy_hat"], "unified": ["1F920"] }, { "shortNames": ["smirk"], "unified": ["1F60F"] }, { "shortNames": ["unamused"], "unified": ["1F612"] }, { "shortNames": ["disappointed"], "unified": ["1F61E"] }, { "shortNames": ["pensive"], "unified": ["1F614"] }, { "shortNames": ["worried"], "unified": ["1F61F"] }, { "shortNames": ["confused"], "unified": ["1F615"] }, { "shortNames": ["slightly_frowning_face"], "unified": ["1F641"] }, { "shortNames": ["white_frowning_face"], "unified": ["2639", "2639-FE0F"] }, { "shortNames": ["persevere"], "unified": ["1F623"] }, { "shortNames": ["confounded"], "unified": ["1F616"] }, { "shortNames": ["tired_face"], "unified": ["1F62B"] }, { "shortNames": ["weary"], "unified": ["1F629"] }, { "shortNames": ["triumph"], "unified": ["1F624"] }, { "shortNames": ["angry"], "unified": ["1F620"] }, { "shortNames": ["rage"], "unified": ["1F621"] }, { "shortNames": ["no_mouth"], "unified": ["1F636"] }, { "shortNames": ["neutral_face"], "unified": ["1F610"] }, { "shortNames": ["expressionless"], "unified": ["1F611"] }, { "shortNames": ["hushed"], "unified": ["1F62F"] }, { "shortNames": ["frowning"], "unified": ["1F626"] }, { "shortNames": ["anguished"], "unified": ["1F627"] }, { "shortNames": ["open_mouth"], "unified": ["1F62E"] }, { "shortNames": ["astonished"], "unified": ["1F632"] }, { "shortNames": ["dizzy_face"], "unified": ["1F635"] }, { "shortNames": ["flushed"], "unified": ["1F633"] }, { "shortNames": ["scream"], "unified": ["1F631"] }, { "shortNames": ["fearful"], "unified": ["1F628"] }, { "shortNames": ["cold_sweat"], "unified": ["1F630"] }, { "shortNames": ["cry"], "unified": ["1F622"] }, { "shortNames": ["disappointed_relieved"], "unified": ["1F625"] }, { "shortNames": ["drooling_face"], "unified": ["1F924"] }, { "shortNames": ["sob"], "unified": ["1F62D"] }, { "shortNames": ["sweat"], "unified": ["1F613"] }, { "shortNames": ["sleepy"], "unified": ["1F62A"] }, { "shortNames": ["sleeping"], "unified": ["1F634"] }, { "shortNames": ["face_with_rolling_eyes"], "unified": ["1F644"] }, { "shortNames": ["thinking_face"], "unified": ["1F914"] }, { "shortNames": ["lying_face"], "unified": ["1F925"] }, { "shortNames": ["grimacing"], "unified": ["1F62C"] }, { "shortNames": ["zipper_mouth_face"], "unified": ["1F910"] }, { "shortNames": ["nauseated_face"], "unified": ["1F922"] }, { "shortNames": ["sneezing_face"], "unified": ["1F927"] }, { "shortNames": ["mask"], "unified": ["1F637"] }, { "shortNames": ["face_with_thermometer"], "unified": ["1F912"] }, { "shortNames": ["face_with_head_bandage"], "unified": ["1F915"] }, { "shortNames": ["smiling_imp"], "unified": ["1F608"] }, { "shortNames": ["imp"], "unified": ["1F47F"] }, { "shortNames": ["japanese_ogre"], "unified": ["1F479"] }, { "shortNames": ["japanese_goblin"], "unified": ["1F47A"] }, { "shortNames": ["hankey", "poop", "shit"], "unified": ["1F4A9"] }, { "shortNames": ["ghost"], "unified": ["1F47B"] }, { "shortNames": ["skull"], "unified": ["1F480"] }, { "shortNames": ["skull_and_crossbones"], "unified": ["2620", "2620-FE0F"] }, { "shortNames": ["alien"], "unified": ["1F47D"] }, { "shortNames": ["space_invader"], "unified": ["1F47E"] }, { "shortNames": ["robot_face"], "unified": ["1F916"] }, { "shortNames": ["jack_o_lantern"], "unified": ["1F383"] }, { "shortNames": ["smiley_cat"], "unified": ["1F63A"] }, { "shortNames": ["smile_cat"], "unified": ["1F638"] }, { "shortNames": ["joy_cat"], "unified": ["1F639"] }, { "shortNames": ["heart_eyes_cat"], "unified": ["1F63B"] }, { "shortNames": ["smirk_cat"], "unified": ["1F63C"] }, { "shortNames": ["kissing_cat"], "unified": ["1F63D"] }, { "shortNames": ["scream_cat"], "unified": ["1F640"] }, { "shortNames": ["crying_cat_face"], "unified": ["1F63F"] }, { "shortNames": ["pouting_cat"], "unified": ["1F63E"] }, { "shortNames": ["open_hands"], "unified": ["1F450"], "tones": false }, { "shortNames": ["raised_hands"], "unified": ["1F64C"], "tones": false }, { "shortNames": ["clap"], "unified": ["1F44F"], "tones": false }, { "shortNames": ["pray"], "unified": ["1F64F"], "tones": false }, { "shortNames": ["handshake"], "unified": ["1F91D"] }, { "shortNames": ["+1", "thumbsup"], "unified": ["1F44D"], "tones": false }, { "shortNames": ["-1", "thumbsdown"], "unified": ["1F44E"], "tones": false }, { "shortNames": ["facepunch", "punch"], "unified": ["1F44A"], "tones": false }, { "shortNames": ["fist"], "unified": ["270A"], "tones": false }, { "shortNames": ["left-facing_fist"], "unified": ["1F91B"], "tones": false }, { "shortNames": ["right-facing_fist"], "unified": ["1F91C"], "tones": false }, { "shortNames": ["hand_with_index_and_middle_fingers_crossed"], "unified": ["1F91E"], "tones": false }, { "shortNames": ["v"], "unified": ["270C", "270C-FE0F"], "tones": false }, { "shortNames": ["the_horns", "sign_of_the_horns"], "unified": ["1F918"], "tones": false }, { "shortNames": ["ok_hand"], "unified": ["1F44C"], "tones": false }, { "shortNames": ["point_left"], "unified": ["1F448"], "tones": false }, { "shortNames": ["point_right"], "unified": ["1F449"], "tones": false }, { "shortNames": ["point_up_2"], "unified": ["1F446"], "tones": false }, { "shortNames": ["point_down"], "unified": ["1F447"], "tones": false }, { "shortNames": ["point_up"], "unified": ["261D", "261D-FE0F"], "tones": false }, { "shortNames": ["hand", "raised_hand"], "unified": ["270B"], "tones": false }, { "shortNames": ["raised_back_of_hand"], "unified": ["1F91A"], "tones": false }, { "shortNames": ["raised_hand_with_fingers_splayed"], "unified": ["1F590"], "tones": false }, { "shortNames": ["spock-hand"], "unified": ["1F596"], "tones": false }, { "shortNames": ["wave"], "unified": ["1F44B"], "tones": false }, { "shortNames": ["call_me_hand"], "unified": ["1F919"], "tones": false }, { "shortNames": ["muscle"], "unified": ["1F4AA"], "tones": false }, { "shortNames": ["middle_finger", "reversed_hand_with_middle_finger_extended"], "unified": ["1F595"], "tones": false }, { "shortNames": ["writing_hand"], "unified": ["270D", "270D-FE0F"], "tones": false }, { "shortNames": ["selfie"], "unified": ["1F933"], "tones": false }, { "shortNames": ["nail_care"], "unified": ["1F485"], "tones": false }, { "shortNames": ["ring"], "unified": ["1F48D"] }, { "shortNames": ["lipstick"], "unified": ["1F484"] }, { "shortNames": ["kiss"], "unified": ["1F48B"] }, { "shortNames": ["lips"], "unified": ["1F444"] }, { "shortNames": ["tongue"], "unified": ["1F445"] }, { "shortNames": ["ear"], "unified": ["1F442"], "tones": false }, { "shortNames": ["nose"], "unified": ["1F443"], "tones": false }, { "shortNames": ["footprints"], "unified": ["1F463"] }, { "shortNames": ["eye"], "unified": ["1F441"] }, { "shortNames": ["eyes"], "unified": ["1F440"] }, { "shortNames": ["speaking_head_in_silhouette"], "unified": ["1F5E3"] }, { "shortNames": ["bust_in_silhouette"], "unified": ["1F464"] }, { "shortNames": ["busts_in_silhouette"], "unified": ["1F465"] }, { "shortNames": ["baby"], "unified": ["1F476"], "tones": false }, { "shortNames": ["boy"], "unified": ["1F466"], "tones": false }, { "shortNames": ["girl"], "unified": ["1F467"], "tones": false }, { "shortNames": ["man"], "unified": ["1F468"], "tones": false }, { "shortNames": ["woman"], "unified": ["1F469"], "tones": false }, { "shortNames": ["blond-haired-woman"], "unified": ["1F471-200D-2640-FE0F"], "tones": false }, { "shortNames": ["person_with_blond_hair"], "unified": ["1F471"], "tones": false }, { "shortNames": ["older_man"], "unified": ["1F474"], "tones": false }, { "shortNames": ["older_woman"], "unified": ["1F475"], "tones": false }, { "shortNames": ["man_with_gua_pi_mao"], "unified": ["1F472"], "tones": false }, { "shortNames": ["woman-wearing-turban"], "unified": ["1F473-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man_with_turban"], "unified": ["1F473"], "tones": false }, { "shortNames": ["female-police-officer"], "unified": ["1F46E-200D-2640-FE0F"], "tones": false }, { "shortNames": ["cop"], "unified": ["1F46E"], "tones": false }, { "shortNames": ["female-construction-worker"], "unified": ["1F477-200D-2640-FE0F"], "tones": false }, { "shortNames": ["construction_worker"], "unified": ["1F477"], "tones": false }, { "shortNames": ["female-guard"], "unified": ["1F482-200D-2640-FE0F"], "tones": false }, { "shortNames": ["guardsman"], "unified": ["1F482"], "tones": false }, { "shortNames": ["female-detective"], "unified": ["1F575-FE0F-200D-2640-FE0F"], "tones": false }, { "shortNames": ["sleuth_or_spy"], "unified": ["1F575", "1F575-FE0F"], "tones": false }, { "shortNames": ["female-doctor"], "unified": ["1F469-200D-2695-FE0F"], "tones": false }, { "shortNames": ["male-doctor"], "unified": ["1F468-200D-2695-FE0F"], "tones": false }, { "shortNames": ["female-farmer"], "unified": ["1F469-200D-1F33E"], "tones": false }, { "shortNames": ["male-farmer"], "unified": ["1F468-200D-1F33E"], "tones": false }, { "shortNames": ["female-cook"], "unified": ["1F469-200D-1F373"], "tones": false }, { "shortNames": ["male-cook"], "unified": ["1F468-200D-1F373"], "tones": false }, { "shortNames": ["female-student"], "unified": ["1F469-200D-1F393"], "tones": false }, { "shortNames": ["male-student"], "unified": ["1F468-200D-1F393"], "tones": false }, { "shortNames": ["female-singer"], "unified": ["1F469-200D-1F3A4"], "tones": false }, { "shortNames": ["male-singer"], "unified": ["1F468-200D-1F3A4"], "tones": false }, { "shortNames": ["female-teacher"], "unified": ["1F469-200D-1F3EB"], "tones": false }, { "shortNames": ["male-teacher"], "unified": ["1F468-200D-1F3EB"], "tones": false }, { "shortNames": ["female-factory-worker"], "unified": ["1F469-200D-1F3ED"], "tones": false }, { "shortNames": ["male-factory-worker"], "unified": ["1F468-200D-1F3ED"], "tones": false }, { "shortNames": ["female-technologist"], "unified": ["1F469-200D-1F4BB"], "tones": false }, { "shortNames": ["male-technologist"], "unified": ["1F468-200D-1F4BB"], "tones": false }, { "shortNames": ["female-office-worker"], "unified": ["1F469-200D-1F4BC"], "tones": false }, { "shortNames": ["male-office-worker"], "unified": ["1F468-200D-1F4BC"], "tones": false }, { "shortNames": ["female-mechanic"], "unified": ["1F469-200D-1F527"], "tones": false }, { "shortNames": ["male-mechanic"], "unified": ["1F468-200D-1F527"], "tones": false }, { "shortNames": ["female-scientist"], "unified": ["1F469-200D-1F52C"], "tones": false }, { "shortNames": ["male-scientist"], "unified": ["1F468-200D-1F52C"], "tones": false }, { "shortNames": ["female-artist"], "unified": ["1F469-200D-1F3A8"], "tones": false }, { "shortNames": ["male-artist"], "unified": ["1F468-200D-1F3A8"], "tones": false }, { "shortNames": ["female-firefighter"], "unified": ["1F469-200D-1F692"], "tones": false }, { "shortNames": ["male-firefighter"], "unified": ["1F468-200D-1F692"], "tones": false }, { "shortNames": ["female-pilot"], "unified": ["1F469-200D-2708-FE0F"], "tones": false }, { "shortNames": ["male-pilot"], "unified": ["1F468-200D-2708-FE0F"], "tones": false }, { "shortNames": ["female-astronaut"], "unified": ["1F469-200D-1F680"], "tones": false }, { "shortNames": ["male-astronaut"], "unified": ["1F468-200D-1F680"], "tones": false }, { "shortNames": ["female-judge"], "unified": ["1F469-200D-2696-FE0F"], "tones": false }, { "shortNames": ["male-judge"], "unified": ["1F468-200D-2696-FE0F"], "tones": false }, { "shortNames": ["mother_christmas"], "unified": ["1F936"], "tones": false }, { "shortNames": ["santa"], "unified": ["1F385"], "tones": false }, { "shortNames": ["princess"], "unified": ["1F478"], "tones": false }, { "shortNames": ["prince"], "unified": ["1F934"], "tones": false }, { "shortNames": ["bride_with_veil"], "unified": ["1F470"], "tones": false }, { "shortNames": ["man_in_tuxedo"], "unified": ["1F935"], "tones": false }, { "shortNames": ["angel"], "unified": ["1F47C"], "tones": false }, { "shortNames": ["pregnant_woman"], "unified": ["1F930"], "tones": false }, { "shortNames": ["woman-bowing"], "unified": ["1F647-200D-2640-FE0F"], "tones": false }, { "shortNames": ["bow"], "unified": ["1F647"], "tones": false }, { "shortNames": ["information_desk_person"], "unified": ["1F481"], "tones": false }, { "shortNames": ["man-tipping-hand"], "unified": ["1F481-200D-2642-FE0F"], "tones": false }, { "shortNames": ["no_good"], "unified": ["1F645"], "tones": false }, { "shortNames": ["man-gesturing-no"], "unified": ["1F645-200D-2642-FE0F"], "tones": false }, { "shortNames": ["ok_woman"], "unified": ["1F646"], "tones": false }, { "shortNames": ["man-gesturing-ok"], "unified": ["1F646-200D-2642-FE0F"], "tones": false }, { "shortNames": ["raising_hand"], "unified": ["1F64B"], "tones": false }, { "shortNames": ["man-raising-hand"], "unified": ["1F64B-200D-2642-FE0F"], "tones": false }, { "shortNames": ["face_palm"], "unified": ["1F926"], "tones": false }, { "shortNames": ["woman-facepalming"], "unified": ["1F926-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man-facepalming"], "unified": ["1F926-200D-2642-FE0F"], "tones": false }, { "shortNames": ["shrug"], "unified": ["1F937"], "tones": false }, { "shortNames": ["woman-shrugging"], "unified": ["1F937-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man-shrugging"], "unified": ["1F937-200D-2642-FE0F"], "tones": false }, { "shortNames": ["person_with_pouting_face"], "unified": ["1F64E"], "tones": false }, { "shortNames": ["man-pouting"], "unified": ["1F64E-200D-2642-FE0F"], "tones": false }, { "shortNames": ["person_frowning"], "unified": ["1F64D"], "tones": false }, { "shortNames": ["man-frowning"], "unified": ["1F64D-200D-2642-FE0F"], "tones": false }, { "shortNames": ["haircut"], "unified": ["1F487"], "tones": false }, { "shortNames": ["man-getting-haircut"], "unified": ["1F487-200D-2642-FE0F"], "tones": false }, { "shortNames": ["massage"], "unified": ["1F486"], "tones": false }, { "shortNames": ["man-getting-massage"], "unified": ["1F486-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man_in_business_suit_levitating"], "unified": ["1F574"], "tones": false }, { "shortNames": ["dancer"], "unified": ["1F483"], "tones": false }, { "shortNames": ["man_dancing"], "unified": ["1F57A"], "tones": false }, { "shortNames": ["dancers"], "unified": ["1F46F"] }, { "shortNames": ["man-with-bunny-ears-partying"], "unified": ["1F46F-200D-2642-FE0F"] }, { "shortNames": ["woman-walking"], "unified": ["1F6B6-200D-2640-FE0F"], "tones": false }, { "shortNames": ["walking"], "unified": ["1F6B6"], "tones": false }, { "shortNames": ["woman-running"], "unified": ["1F3C3-200D-2640-FE0F"], "tones": false }, { "shortNames": ["runner", "running"], "unified": ["1F3C3"], "tones": false }, { "shortNames": ["couple", "man_and_woman_holding_hands"], "unified": ["1F46B"] }, { "shortNames": ["two_women_holding_hands"], "unified": ["1F46D"] }, { "shortNames": ["two_men_holding_hands"], "unified": ["1F46C"] }, { "shortNames": ["couple_with_heart"], "unified": ["1F491"] }, { "shortNames": ["woman-heart-woman"], "unified": ["1F469-200D-2764-FE0F-200D-1F469"] }, { "shortNames": ["man-heart-man"], "unified": ["1F468-200D-2764-FE0F-200D-1F468"] }, { "shortNames": ["couplekiss"], "unified": ["1F48F"] }, { "shortNames": ["woman-kiss-woman"], "unified": ["1F469-200D-2764-FE0F-200D-1F48B-200D-1F469"] }, { "shortNames": ["man-kiss-man"], "unified": ["1F468-200D-2764-FE0F-200D-1F48B-200D-1F468"] }, { "shortNames": ["family", "man-woman-boy"], "unified": ["1F46A"] }, { "shortNames": ["man-woman-girl"], "unified": ["1F468-200D-1F469-200D-1F467"] }, { "shortNames": ["man-woman-girl-boy"], "unified": ["1F468-200D-1F469-200D-1F467-200D-1F466"] }, { "shortNames": ["man-woman-boy-boy"], "unified": ["1F468-200D-1F469-200D-1F466-200D-1F466"] }, { "shortNames": ["man-woman-girl-girl"], "unified": ["1F468-200D-1F469-200D-1F467-200D-1F467"] }, { "shortNames": ["woman-woman-boy"], "unified": ["1F469-200D-1F469-200D-1F466"] }, { "shortNames": ["woman-woman-girl"], "unified": ["1F469-200D-1F469-200D-1F467"] }, { "shortNames": ["woman-woman-girl-boy"], "unified": ["1F469-200D-1F469-200D-1F467-200D-1F466"] }, { "shortNames": ["woman-woman-boy-boy"], "unified": ["1F469-200D-1F469-200D-1F466-200D-1F466"] }, { "shortNames": ["woman-woman-girl-girl"], "unified": ["1F469-200D-1F469-200D-1F467-200D-1F467"] }, { "shortNames": ["man-man-boy"], "unified": ["1F468-200D-1F468-200D-1F466"] }, { "shortNames": ["man-man-girl"], "unified": ["1F468-200D-1F468-200D-1F467"] }, { "shortNames": ["man-man-girl-boy"], "unified": ["1F468-200D-1F468-200D-1F467-200D-1F466"] }, { "shortNames": ["man-man-boy-boy"], "unified": ["1F468-200D-1F468-200D-1F466-200D-1F466"] }, { "shortNames": ["man-man-girl-girl"], "unified": ["1F468-200D-1F468-200D-1F467-200D-1F467"] }, { "shortNames": ["woman-boy"], "unified": ["1F469-200D-1F466"] }, { "shortNames": ["woman-girl"], "unified": ["1F469-200D-1F467"] }, { "shortNames": ["woman-girl-boy"], "unified": ["1F469-200D-1F467-200D-1F466"] }, { "shortNames": ["woman-boy-boy"], "unified": ["1F469-200D-1F466-200D-1F466"] }, { "shortNames": ["woman-girl-girl"], "unified": ["1F469-200D-1F467-200D-1F467"] }, { "shortNames": ["man-boy"], "unified": ["1F468-200D-1F466"] }, { "shortNames": ["man-girl"], "unified": ["1F468-200D-1F467"] }, { "shortNames": ["man-girl-boy"], "unified": ["1F468-200D-1F467-200D-1F466"] }, { "shortNames": ["man-boy-boy"], "unified": ["1F468-200D-1F466-200D-1F466"] }, { "shortNames": ["man-girl-girl"], "unified": ["1F468-200D-1F467-200D-1F467"] }, { "shortNames": ["womans_clothes"], "unified": ["1F45A"] }, { "shortNames": ["shirt", "tshirt"], "unified": ["1F455"] }, { "shortNames": ["jeans"], "unified": ["1F456"] }, { "shortNames": ["necktie"], "unified": ["1F454"] }, { "shortNames": ["dress"], "unified": ["1F457"] }, { "shortNames": ["bikini"], "unified": ["1F459"] }, { "shortNames": ["kimono"], "unified": ["1F458"] }, { "shortNames": ["high_heel"], "unified": ["1F460"] }, { "shortNames": ["sandal"], "unified": ["1F461"] }, { "shortNames": ["boot"], "unified": ["1F462"] }, { "shortNames": ["mans_shoe", "shoe"], "unified": ["1F45E"] }, { "shortNames": ["athletic_shoe"], "unified": ["1F45F"] }, { "shortNames": ["womans_hat"], "unified": ["1F452"] }, { "shortNames": ["tophat"], "unified": ["1F3A9"] }, { "shortNames": ["mortar_board"], "unified": ["1F393"] }, { "shortNames": ["crown"], "unified": ["1F451"] }, { "shortNames": ["helmet_with_white_cross"], "unified": ["26D1"] }, { "shortNames": ["school_satchel"], "unified": ["1F392"] }, { "shortNames": ["pouch"], "unified": ["1F45D"] }, { "shortNames": ["purse"], "unified": ["1F45B"] }, { "shortNames": ["handbag"], "unified": ["1F45C"] }, { "shortNames": ["briefcase"], "unified": ["1F4BC"] }, { "shortNames": ["eyeglasses"], "unified": ["1F453"] }, { "shortNames": ["dark_sunglasses"], "unified": ["1F576"] }, { "shortNames": ["closed_umbrella"], "unified": ["1F302"] }, { "shortNames": ["umbrella"], "unified": ["2602", "2602-FE0F"] }, { "shortNames": ["man-woman-boy", "family"], "unified": ["1F468-200D-1F469-200D-1F466"] }, { "shortNames": ["woman-heart-man"], "unified": ["1F469-200D-2764-FE0F-200D-1F468"] }, { "shortNames": ["woman-kiss-man"], "unified": ["1F469-200D-2764-FE0F-200D-1F48B-200D-1F468"] }, { "shortNames": ["male-police-officer"], "unified": ["1F46E-200D-2642-FE0F"], "tones": false }, { "shortNames": ["blond-haired-man"], "unified": ["1F471-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man-wearing-turban"], "unified": ["1F473-200D-2642-FE0F"], "tones": false }, { "shortNames": ["male-construction-worker"], "unified": ["1F477-200D-2642-FE0F"], "tones": false }, { "shortNames": ["male-guard"], "unified": ["1F482-200D-2642-FE0F"], "tones": false }, { "shortNames": ["male-detective"], "unified": ["1F575-FE0F-200D-2642-FE0F"], "tones": false }, { "shortNames": ["woman-with-bunny-ears-partying"], "unified": ["1F46F-200D-2640-FE0F"] }, { "shortNames": ["man-running"], "unified": ["1F3C3-200D-2642-FE0F"], "tones": false }, { "shortNames": ["woman-getting-massage"], "unified": ["1F486-200D-2640-FE0F"], "tones": false }, { "shortNames": ["woman-getting-haircut"], "unified": ["1F487-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man-walking"], "unified": ["1F6B6-200D-2642-FE0F"], "tones": false }, { "shortNames": ["woman-tipping-hand"], "unified": ["1F481-200D-2640-FE0F"], "tones": false }, { "shortNames": ["woman-gesturing-no"], "unified": ["1F645-200D-2640-FE0F"], "tones": false }, { "shortNames": ["woman-gesturing-ok"], "unified": ["1F646-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man-bowing"], "unified": ["1F647-200D-2642-FE0F"], "tones": false }, { "shortNames": ["woman-raising-hand"], "unified": ["1F64B-200D-2640-FE0F"], "tones": false }, { "shortNames": ["woman-frowning"], "unified": ["1F64D-200D-2640-FE0F"], "tones": false }, { "shortNames": ["woman-pouting"], "unified": ["1F64E-200D-2640-FE0F"], "tones": false }], "Foods": [{ "shortNames": ["green_apple"], "unified": ["1F34F"] }, { "shortNames": ["apple"], "unified": ["1F34E"] }, { "shortNames": ["pear"], "unified": ["1F350"] }, { "shortNames": ["tangerine"], "unified": ["1F34A"] }, { "shortNames": ["lemon"], "unified": ["1F34B"] }, { "shortNames": ["banana"], "unified": ["1F34C"] }, { "shortNames": ["watermelon"], "unified": ["1F349"] }, { "shortNames": ["grapes"], "unified": ["1F347"] }, { "shortNames": ["strawberry"], "unified": ["1F353"] }, { "shortNames": ["melon"], "unified": ["1F348"] }, { "shortNames": ["cherries"], "unified": ["1F352"] }, { "shortNames": ["peach"], "unified": ["1F351"] }, { "shortNames": ["pineapple"], "unified": ["1F34D"] }, { "shortNames": ["kiwifruit"], "unified": ["1F95D"] }, { "shortNames": ["avocado"], "unified": ["1F951"] }, { "shortNames": ["tomato"], "unified": ["1F345"] }, { "shortNames": ["eggplant"], "unified": ["1F346"] }, { "shortNames": ["cucumber"], "unified": ["1F952"] }, { "shortNames": ["carrot"], "unified": ["1F955"] }, { "shortNames": ["corn"], "unified": ["1F33D"] }, { "shortNames": ["hot_pepper"], "unified": ["1F336"] }, { "shortNames": ["potato"], "unified": ["1F954"] }, { "shortNames": ["sweet_potato"], "unified": ["1F360"] }, { "shortNames": ["chestnut"], "unified": ["1F330"] }, { "shortNames": ["peanuts"], "unified": ["1F95C"] }, { "shortNames": ["honey_pot"], "unified": ["1F36F"] }, { "shortNames": ["croissant"], "unified": ["1F950"] }, { "shortNames": ["bread"], "unified": ["1F35E"] }, { "shortNames": ["baguette_bread"], "unified": ["1F956"] }, { "shortNames": ["cheese_wedge"], "unified": ["1F9C0"] }, { "shortNames": ["egg"], "unified": ["1F95A"] }, { "shortNames": ["fried_egg", "cooking"], "unified": ["1F373"] }, { "shortNames": ["bacon"], "unified": ["1F953"] }, { "shortNames": ["pancakes"], "unified": ["1F95E"] }, { "shortNames": ["fried_shrimp"], "unified": ["1F364"] }, { "shortNames": ["poultry_leg"], "unified": ["1F357"] }, { "shortNames": ["meat_on_bone"], "unified": ["1F356"] }, { "shortNames": ["pizza"], "unified": ["1F355"] }, { "shortNames": ["hotdog"], "unified": ["1F32D"] }, { "shortNames": ["hamburger"], "unified": ["1F354"] }, { "shortNames": ["fries"], "unified": ["1F35F"] }, { "shortNames": ["stuffed_flatbread"], "unified": ["1F959"] }, { "shortNames": ["taco"], "unified": ["1F32E"] }, { "shortNames": ["burrito"], "unified": ["1F32F"] }, { "shortNames": ["green_salad"], "unified": ["1F957"] }, { "shortNames": ["shallow_pan_of_food"], "unified": ["1F958"] }, { "shortNames": ["spaghetti"], "unified": ["1F35D"] }, { "shortNames": ["ramen"], "unified": ["1F35C"] }, { "shortNames": ["stew"], "unified": ["1F372"] }, { "shortNames": ["fish_cake"], "unified": ["1F365"] }, { "shortNames": ["sushi"], "unified": ["1F363"] }, { "shortNames": ["bento"], "unified": ["1F371"] }, { "shortNames": ["curry"], "unified": ["1F35B"] }, { "shortNames": ["rice"], "unified": ["1F35A"] }, { "shortNames": ["rice_ball"], "unified": ["1F359"] }, { "shortNames": ["rice_cracker"], "unified": ["1F358"] }, { "shortNames": ["oden"], "unified": ["1F362"] }, { "shortNames": ["dango"], "unified": ["1F361"] }, { "shortNames": ["shaved_ice"], "unified": ["1F367"] }, { "shortNames": ["ice_cream"], "unified": ["1F368"] }, { "shortNames": ["icecream"], "unified": ["1F366"] }, { "shortNames": ["cake"], "unified": ["1F370"] }, { "shortNames": ["birthday"], "unified": ["1F382"] }, { "shortNames": ["custard"], "unified": ["1F36E"] }, { "shortNames": ["lollipop"], "unified": ["1F36D"] }, { "shortNames": ["candy"], "unified": ["1F36C"] }, { "shortNames": ["chocolate_bar"], "unified": ["1F36B"] }, { "shortNames": ["popcorn"], "unified": ["1F37F"] }, { "shortNames": ["doughnut"], "unified": ["1F369"] }, { "shortNames": ["cookie"], "unified": ["1F36A"] }, { "shortNames": ["glass_of_milk"], "unified": ["1F95B"] }, { "shortNames": ["baby_bottle"], "unified": ["1F37C"] }, { "shortNames": ["coffee"], "unified": ["2615", "2615-FE0F"] }, { "shortNames": ["tea"], "unified": ["1F375"] }, { "shortNames": ["sake"], "unified": ["1F376"] }, { "shortNames": ["beer"], "unified": ["1F37A"] }, { "shortNames": ["beers"], "unified": ["1F37B"] }, { "shortNames": ["clinking_glasses"], "unified": ["1F942"] }, { "shortNames": ["wine_glass"], "unified": ["1F377"] }, { "shortNames": ["tumbler_glass"], "unified": ["1F943"] }, { "shortNames": ["cocktail"], "unified": ["1F378"] }, { "shortNames": ["tropical_drink"], "unified": ["1F379"] }, { "shortNames": ["champagne"], "unified": ["1F37E"] }, { "shortNames": ["spoon"], "unified": ["1F944"] }, { "shortNames": ["fork_and_knife"], "unified": ["1F374"] }, { "shortNames": ["knife_fork_plate"], "unified": ["1F37D"] }], "Places": [{ "shortNames": ["car", "red_car"], "unified": ["1F697"] }, { "shortNames": ["taxi"], "unified": ["1F695"] }, { "shortNames": ["blue_car"], "unified": ["1F699"] }, { "shortNames": ["bus"], "unified": ["1F68C"] }, { "shortNames": ["trolleybus"], "unified": ["1F68E"] }, { "shortNames": ["racing_car"], "unified": ["1F3CE"] }, { "shortNames": ["police_car"], "unified": ["1F693"] }, { "shortNames": ["ambulance"], "unified": ["1F691"] }, { "shortNames": ["fire_engine"], "unified": ["1F692"] }, { "shortNames": ["minibus"], "unified": ["1F690"] }, { "shortNames": ["truck"], "unified": ["1F69A"] }, { "shortNames": ["articulated_lorry"], "unified": ["1F69B"] }, { "shortNames": ["tractor"], "unified": ["1F69C"] }, { "shortNames": ["scooter"], "unified": ["1F6F4"] }, { "shortNames": ["bike"], "unified": ["1F6B2"] }, { "shortNames": ["motor_scooter"], "unified": ["1F6F5"] }, { "shortNames": ["racing_motorcycle"], "unified": ["1F3CD"] }, { "shortNames": ["rotating_light"], "unified": ["1F6A8"] }, { "shortNames": ["oncoming_police_car"], "unified": ["1F694"] }, { "shortNames": ["oncoming_bus"], "unified": ["1F68D"] }, { "shortNames": ["oncoming_automobile"], "unified": ["1F698"] }, { "shortNames": ["oncoming_taxi"], "unified": ["1F696"] }, { "shortNames": ["aerial_tramway"], "unified": ["1F6A1"] }, { "shortNames": ["mountain_cableway"], "unified": ["1F6A0"] }, { "shortNames": ["suspension_railway"], "unified": ["1F69F"] }, { "shortNames": ["railway_car"], "unified": ["1F683"] }, { "shortNames": ["train"], "unified": ["1F68B"] }, { "shortNames": ["mountain_railway"], "unified": ["1F69E"] }, { "shortNames": ["monorail"], "unified": ["1F69D"] }, { "shortNames": ["bullettrain_side"], "unified": ["1F684"] }, { "shortNames": ["bullettrain_front"], "unified": ["1F685"] }, { "shortNames": ["light_rail"], "unified": ["1F688"] }, { "shortNames": ["steam_locomotive"], "unified": ["1F682"] }, { "shortNames": ["train2"], "unified": ["1F686"] }, { "shortNames": ["metro"], "unified": ["1F687"] }, { "shortNames": ["tram"], "unified": ["1F68A"] }, { "shortNames": ["station"], "unified": ["1F689"] }, { "shortNames": ["helicopter"], "unified": ["1F681"] }, { "shortNames": ["small_airplane"], "unified": ["1F6E9"] }, { "shortNames": ["airplane"], "unified": ["2708", "2708-FE0F"] }, { "shortNames": ["airplane_departure"], "unified": ["1F6EB"] }, { "shortNames": ["airplane_arriving"], "unified": ["1F6EC"] }, { "shortNames": ["rocket"], "unified": ["1F680"] }, { "shortNames": ["satellite"], "unified": ["1F6F0"] }, { "shortNames": ["seat"], "unified": ["1F4BA"] }, { "shortNames": ["canoe"], "unified": ["1F6F6"] }, { "shortNames": ["boat", "sailboat"], "unified": ["26F5", "26F5-FE0F"] }, { "shortNames": ["motor_boat"], "unified": ["1F6E5"] }, { "shortNames": ["speedboat"], "unified": ["1F6A4"] }, { "shortNames": ["passenger_ship"], "unified": ["1F6F3"] }, { "shortNames": ["ferry"], "unified": ["26F4"] }, { "shortNames": ["ship"], "unified": ["1F6A2"] }, { "shortNames": ["anchor"], "unified": ["2693", "2693-FE0F"] }, { "shortNames": ["construction"], "unified": ["1F6A7"] }, { "shortNames": ["fuelpump"], "unified": ["26FD", "26FD-FE0F"] }, { "shortNames": ["busstop"], "unified": ["1F68F"] }, { "shortNames": ["vertical_traffic_light"], "unified": ["1F6A6"] }, { "shortNames": ["traffic_light"], "unified": ["1F6A5"] }, { "shortNames": ["world_map"], "unified": ["1F5FA"] }, { "shortNames": ["moyai"], "unified": ["1F5FF"] }, { "shortNames": ["statue_of_liberty"], "unified": ["1F5FD"] }, { "shortNames": ["fountain"], "unified": ["26F2", "26F2-FE0F"] }, { "shortNames": ["tokyo_tower"], "unified": ["1F5FC"] }, { "shortNames": ["european_castle"], "unified": ["1F3F0"] }, { "shortNames": ["japanese_castle"], "unified": ["1F3EF"] }, { "shortNames": ["stadium"], "unified": ["1F3DF"] }, { "shortNames": ["ferris_wheel"], "unified": ["1F3A1"] }, { "shortNames": ["roller_coaster"], "unified": ["1F3A2"] }, { "shortNames": ["carousel_horse"], "unified": ["1F3A0"] }, { "shortNames": ["umbrella_on_ground"], "unified": ["26F1"] }, { "shortNames": ["beach_with_umbrella"], "unified": ["1F3D6"] }, { "shortNames": ["desert_island"], "unified": ["1F3DD"] }, { "shortNames": ["mountain"], "unified": ["26F0"] }, { "shortNames": ["snow_capped_mountain"], "unified": ["1F3D4"] }, { "shortNames": ["mount_fuji"], "unified": ["1F5FB"] }, { "shortNames": ["volcano"], "unified": ["1F30B"] }, { "shortNames": ["desert"], "unified": ["1F3DC"] }, { "shortNames": ["camping"], "unified": ["1F3D5"] }, { "shortNames": ["tent"], "unified": ["26FA", "26FA-FE0F"] }, { "shortNames": ["railway_track"], "unified": ["1F6E4"] }, { "shortNames": ["motorway"], "unified": ["1F6E3"] }, { "shortNames": ["building_construction"], "unified": ["1F3D7"] }, { "shortNames": ["factory"], "unified": ["1F3ED"] }, { "shortNames": ["house"], "unified": ["1F3E0"] }, { "shortNames": ["house_with_garden"], "unified": ["1F3E1"] }, { "shortNames": ["house_buildings"], "unified": ["1F3D8"] }, { "shortNames": ["derelict_house_building"], "unified": ["1F3DA"] }, { "shortNames": ["office"], "unified": ["1F3E2"] }, { "shortNames": ["department_store"], "unified": ["1F3EC"] }, { "shortNames": ["post_office"], "unified": ["1F3E3"] }, { "shortNames": ["european_post_office"], "unified": ["1F3E4"] }, { "shortNames": ["hospital"], "unified": ["1F3E5"] }, { "shortNames": ["bank"], "unified": ["1F3E6"] }, { "shortNames": ["hotel"], "unified": ["1F3E8"] }, { "shortNames": ["convenience_store"], "unified": ["1F3EA"] }, { "shortNames": ["school"], "unified": ["1F3EB"] }, { "shortNames": ["love_hotel"], "unified": ["1F3E9"] }, { "shortNames": ["wedding"], "unified": ["1F492"] }, { "shortNames": ["classical_building"], "unified": ["1F3DB"] }, { "shortNames": ["church"], "unified": ["26EA", "26EA-FE0F"] }, { "shortNames": ["mosque"], "unified": ["1F54C"] }, { "shortNames": ["synagogue"], "unified": ["1F54D"] }, { "shortNames": ["kaaba"], "unified": ["1F54B"] }, { "shortNames": ["shinto_shrine"], "unified": ["26E9"] }, { "shortNames": ["japan"], "unified": ["1F5FE"] }, { "shortNames": ["rice_scene"], "unified": ["1F391"] }, { "shortNames": ["national_park"], "unified": ["1F3DE"] }, { "shortNames": ["sunrise"], "unified": ["1F305"] }, { "shortNames": ["sunrise_over_mountains"], "unified": ["1F304"] }, { "shortNames": ["stars"], "unified": ["1F320"] }, { "shortNames": ["sparkler"], "unified": ["1F387"] }, { "shortNames": ["fireworks"], "unified": ["1F386"] }, { "shortNames": ["city_sunrise"], "unified": ["1F307"] }, { "shortNames": ["city_sunset"], "unified": ["1F306"] }, { "shortNames": ["cityscape"], "unified": ["1F3D9"] }, { "shortNames": ["night_with_stars"], "unified": ["1F303"] }, { "shortNames": ["milky_way"], "unified": ["1F30C"] }, { "shortNames": ["bridge_at_night"], "unified": ["1F309"] }, { "shortNames": ["foggy"], "unified": ["1F301"] }], "Activity": [{ "shortNames": ["soccer"], "unified": ["26BD", "26BD-FE0F"] }, { "shortNames": ["basketball"], "unified": ["1F3C0"] }, { "shortNames": ["football"], "unified": ["1F3C8"] }, { "shortNames": ["baseball"], "unified": ["26BE", "26BE-FE0F"] }, { "shortNames": ["tennis"], "unified": ["1F3BE"] }, { "shortNames": ["volleyball"], "unified": ["1F3D0"] }, { "shortNames": ["rugby_football"], "unified": ["1F3C9"] }, { "shortNames": ["8ball"], "unified": ["1F3B1"] }, { "shortNames": ["table_tennis_paddle_and_ball"], "unified": ["1F3D3"] }, { "shortNames": ["badminton_racquet_and_shuttlecock"], "unified": ["1F3F8"] }, { "shortNames": ["goal_net"], "unified": ["1F945"] }, { "shortNames": ["ice_hockey_stick_and_puck"], "unified": ["1F3D2"] }, { "shortNames": ["field_hockey_stick_and_ball"], "unified": ["1F3D1"] }, { "shortNames": ["cricket_bat_and_ball"], "unified": ["1F3CF"] }, { "shortNames": ["golf"], "unified": ["26F3", "26F3-FE0F"] }, { "shortNames": ["bow_and_arrow"], "unified": ["1F3F9"] }, { "shortNames": ["fishing_pole_and_fish"], "unified": ["1F3A3"] }, { "shortNames": ["boxing_glove"], "unified": ["1F94A"] }, { "shortNames": ["martial_arts_uniform"], "unified": ["1F94B"] }, { "shortNames": ["ice_skate"], "unified": ["26F8"] }, { "shortNames": ["ski"], "unified": ["1F3BF"] }, { "shortNames": ["skier"], "unified": ["26F7"] }, { "shortNames": ["snowboarder"], "unified": ["1F3C2"], "tones": false }, { "shortNames": ["woman-lifting-weights"], "unified": ["1F3CB-FE0F-200D-2640-FE0F"], "tones": false }, { "shortNames": ["weight_lifter"], "unified": ["1F3CB", "1F3CB-FE0F"], "tones": false }, { "shortNames": ["fencer"], "unified": ["1F93A"] }, { "shortNames": ["wrestlers"], "unified": ["1F93C"] }, { "shortNames": ["woman-wrestling"], "unified": ["1F93C-200D-2640-FE0F"] }, { "shortNames": ["man-wrestling"], "unified": ["1F93C-200D-2642-FE0F"] }, { "shortNames": ["person_doing_cartwheel"], "unified": ["1F938"], "tones": false }, { "shortNames": ["woman-cartwheeling"], "unified": ["1F938-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man-cartwheeling"], "unified": ["1F938-200D-2642-FE0F"], "tones": false }, { "shortNames": ["woman-bouncing-ball"], "unified": ["26F9-FE0F-200D-2640-FE0F"], "tones": false }, { "shortNames": ["person_with_ball"], "unified": ["26F9", "26F9-FE0F"], "tones": false }, { "shortNames": ["handball"], "unified": ["1F93E"], "tones": false }, { "shortNames": ["woman-playing-handball"], "unified": ["1F93E-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man-playing-handball"], "unified": ["1F93E-200D-2642-FE0F"], "tones": false }, { "shortNames": ["woman-golfing"], "unified": ["1F3CC-FE0F-200D-2640-FE0F"], "tones": false }, { "shortNames": ["golfer"], "unified": ["1F3CC", "1F3CC-FE0F"], "tones": false }, { "shortNames": ["woman-surfing"], "unified": ["1F3C4-200D-2640-FE0F"], "tones": false }, { "shortNames": ["surfer"], "unified": ["1F3C4"], "tones": false }, { "shortNames": ["woman-swimming"], "unified": ["1F3CA-200D-2640-FE0F"], "tones": false }, { "shortNames": ["swimmer"], "unified": ["1F3CA"], "tones": false }, { "shortNames": ["water_polo"], "unified": ["1F93D"], "tones": false }, { "shortNames": ["woman-playing-water-polo"], "unified": ["1F93D-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man-playing-water-polo"], "unified": ["1F93D-200D-2642-FE0F"], "tones": false }, { "shortNames": ["woman-rowing-boat"], "unified": ["1F6A3-200D-2640-FE0F"], "tones": false }, { "shortNames": ["rowboat"], "unified": ["1F6A3"], "tones": false }, { "shortNames": ["horse_racing"], "unified": ["1F3C7"], "tones": false }, { "shortNames": ["woman-biking"], "unified": ["1F6B4-200D-2640-FE0F"], "tones": false }, { "shortNames": ["bicyclist"], "unified": ["1F6B4"], "tones": false }, { "shortNames": ["woman-mountain-biking"], "unified": ["1F6B5-200D-2640-FE0F"], "tones": false }, { "shortNames": ["mountain_bicyclist"], "unified": ["1F6B5"], "tones": false }, { "shortNames": ["running_shirt_with_sash"], "unified": ["1F3BD"] }, { "shortNames": ["sports_medal"], "unified": ["1F3C5"] }, { "shortNames": ["medal"], "unified": ["1F396"] }, { "shortNames": ["first_place_medal"], "unified": ["1F947"] }, { "shortNames": ["second_place_medal"], "unified": ["1F948"] }, { "shortNames": ["third_place_medal"], "unified": ["1F949"] }, { "shortNames": ["trophy"], "unified": ["1F3C6"] }, { "shortNames": ["rosette"], "unified": ["1F3F5"] }, { "shortNames": ["reminder_ribbon"], "unified": ["1F397"] }, { "shortNames": ["ticket"], "unified": ["1F3AB"] }, { "shortNames": ["admission_tickets"], "unified": ["1F39F"] }, { "shortNames": ["circus_tent"], "unified": ["1F3AA"] }, { "shortNames": ["juggling"], "unified": ["1F939"], "tones": false }, { "shortNames": ["woman-juggling"], "unified": ["1F939-200D-2640-FE0F"], "tones": false }, { "shortNames": ["man-juggling"], "unified": ["1F939-200D-2642-FE0F"], "tones": false }, { "shortNames": ["performing_arts"], "unified": ["1F3AD"] }, { "shortNames": ["art"], "unified": ["1F3A8"] }, { "shortNames": ["clapper"], "unified": ["1F3AC"] }, { "shortNames": ["microphone"], "unified": ["1F3A4"] }, { "shortNames": ["headphones"], "unified": ["1F3A7"] }, { "shortNames": ["musical_score"], "unified": ["1F3BC"] }, { "shortNames": ["musical_keyboard"], "unified": ["1F3B9"] }, { "shortNames": ["drum_with_drumsticks"], "unified": ["1F941"] }, { "shortNames": ["saxophone"], "unified": ["1F3B7"] }, { "shortNames": ["trumpet"], "unified": ["1F3BA"] }, { "shortNames": ["guitar"], "unified": ["1F3B8"] }, { "shortNames": ["violin"], "unified": ["1F3BB"] }, { "shortNames": ["game_die"], "unified": ["1F3B2"] }, { "shortNames": ["dart"], "unified": ["1F3AF"] }, { "shortNames": ["bowling"], "unified": ["1F3B3"] }, { "shortNames": ["video_game"], "unified": ["1F3AE"] }, { "shortNames": ["slot_machine"], "unified": ["1F3B0"] }, { "shortNames": ["man-bouncing-ball"], "unified": ["26F9-FE0F-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man-lifting-weights"], "unified": ["1F3CB-FE0F-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man-golfing"], "unified": ["1F3CC-FE0F-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man-surfing"], "unified": ["1F3C4-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man-swimming"], "unified": ["1F3CA-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man-rowing-boat"], "unified": ["1F6A3-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man-biking"], "unified": ["1F6B4-200D-2642-FE0F"], "tones": false }, { "shortNames": ["man-mountain-biking"], "unified": ["1F6B5-200D-2642-FE0F"], "tones": false }], "Flags": [{ "shortNames": ["waving_white_flag"], "unified": ["1F3F3", "1F3F3-FE0F"] }, { "shortNames": ["waving_black_flag"], "unified": ["1F3F4"] }, { "shortNames": ["checkered_flag"], "unified": ["1F3C1"] }, { "shortNames": ["triangular_flag_on_post"], "unified": ["1F6A9"] }, { "shortNames": ["rainbow-flag"], "unified": ["1F3F3-FE0F-200D-1F308"] }, { "shortNames": ["flag-af"], "unified": ["1F1E6-1F1EB"] }, { "shortNames": ["flag-ax"], "unified": ["1F1E6-1F1FD"] }, { "shortNames": ["flag-al"], "unified": ["1F1E6-1F1F1"] }, { "shortNames": ["flag-dz"], "unified": ["1F1E9-1F1FF"] }, { "shortNames": ["flag-as"], "unified": ["1F1E6-1F1F8"] }, { "shortNames": ["flag-ad"], "unified": ["1F1E6-1F1E9"] }, { "shortNames": ["flag-ao"], "unified": ["1F1E6-1F1F4"] }, { "shortNames": ["flag-ai"], "unified": ["1F1E6-1F1EE"] }, { "shortNames": ["flag-aq"], "unified": ["1F1E6-1F1F6"] }, { "shortNames": ["flag-ag"], "unified": ["1F1E6-1F1EC"] }, { "shortNames": ["flag-ar"], "unified": ["1F1E6-1F1F7"] }, { "shortNames": ["flag-am"], "unified": ["1F1E6-1F1F2"] }, { "shortNames": ["flag-aw"], "unified": ["1F1E6-1F1FC"] }, { "shortNames": ["flag-au"], "unified": ["1F1E6-1F1FA"] }, { "shortNames": ["flag-at"], "unified": ["1F1E6-1F1F9"] }, { "shortNames": ["flag-az"], "unified": ["1F1E6-1F1FF"] }, { "shortNames": ["flag-bs"], "unified": ["1F1E7-1F1F8"] }, { "shortNames": ["flag-bh"], "unified": ["1F1E7-1F1ED"] }, { "shortNames": ["flag-bd"], "unified": ["1F1E7-1F1E9"] }, { "shortNames": ["flag-bb"], "unified": ["1F1E7-1F1E7"] }, { "shortNames": ["flag-by"], "unified": ["1F1E7-1F1FE"] }, { "shortNames": ["flag-be"], "unified": ["1F1E7-1F1EA"] }, { "shortNames": ["flag-bz"], "unified": ["1F1E7-1F1FF"] }, { "shortNames": ["flag-bj"], "unified": ["1F1E7-1F1EF"] }, { "shortNames": ["flag-bm"], "unified": ["1F1E7-1F1F2"] }, { "shortNames": ["flag-bt"], "unified": ["1F1E7-1F1F9"] }, { "shortNames": ["flag-bo"], "unified": ["1F1E7-1F1F4"] }, { "shortNames": ["flag-bq"], "unified": ["1F1E7-1F1F6"] }, { "shortNames": ["flag-ba"], "unified": ["1F1E7-1F1E6"] }, { "shortNames": ["flag-bw"], "unified": ["1F1E7-1F1FC"] }, { "shortNames": ["flag-br"], "unified": ["1F1E7-1F1F7"] }, { "shortNames": ["flag-io"], "unified": ["1F1EE-1F1F4"] }, { "shortNames": ["flag-vg"], "unified": ["1F1FB-1F1EC"] }, { "shortNames": ["flag-bn"], "unified": ["1F1E7-1F1F3"] }, { "shortNames": ["flag-bg"], "unified": ["1F1E7-1F1EC"] }, { "shortNames": ["flag-bf"], "unified": ["1F1E7-1F1EB"] }, { "shortNames": ["flag-bi"], "unified": ["1F1E7-1F1EE"] }, { "shortNames": ["flag-cv"], "unified": ["1F1E8-1F1FB"] }, { "shortNames": ["flag-kh"], "unified": ["1F1F0-1F1ED"] }, { "shortNames": ["flag-cm"], "unified": ["1F1E8-1F1F2"] }, { "shortNames": ["flag-ca"], "unified": ["1F1E8-1F1E6"] }, { "shortNames": ["flag-ic"], "unified": ["1F1EE-1F1E8"] }, { "shortNames": ["flag-ky"], "unified": ["1F1F0-1F1FE"] }, { "shortNames": ["flag-cf"], "unified": ["1F1E8-1F1EB"] }, { "shortNames": ["flag-td"], "unified": ["1F1F9-1F1E9"] }, { "shortNames": ["flag-cl"], "unified": ["1F1E8-1F1F1"] }, { "shortNames": ["flag-cn", "cn"], "unified": ["1F1E8-1F1F3"] }, { "shortNames": ["flag-cx"], "unified": ["1F1E8-1F1FD"] }, { "shortNames": ["flag-cc"], "unified": ["1F1E8-1F1E8"] }, { "shortNames": ["flag-co"], "unified": ["1F1E8-1F1F4"] }, { "shortNames": ["flag-km"], "unified": ["1F1F0-1F1F2"] }, { "shortNames": ["flag-cg"], "unified": ["1F1E8-1F1EC"] }, { "shortNames": ["flag-cd"], "unified": ["1F1E8-1F1E9"] }, { "shortNames": ["flag-ck"], "unified": ["1F1E8-1F1F0"] }, { "shortNames": ["flag-cr"], "unified": ["1F1E8-1F1F7"] }, { "shortNames": ["flag-ci"], "unified": ["1F1E8-1F1EE"] }, { "shortNames": ["flag-hr"], "unified": ["1F1ED-1F1F7"] }, { "shortNames": ["flag-cu"], "unified": ["1F1E8-1F1FA"] }, { "shortNames": ["flag-cw"], "unified": ["1F1E8-1F1FC"] }, { "shortNames": ["flag-cy"], "unified": ["1F1E8-1F1FE"] }, { "shortNames": ["flag-cz"], "unified": ["1F1E8-1F1FF"] }, { "shortNames": ["flag-dk"], "unified": ["1F1E9-1F1F0"] }, { "shortNames": ["flag-dj"], "unified": ["1F1E9-1F1EF"] }, { "shortNames": ["flag-dm"], "unified": ["1F1E9-1F1F2"] }, { "shortNames": ["flag-do"], "unified": ["1F1E9-1F1F4"] }, { "shortNames": ["flag-ec"], "unified": ["1F1EA-1F1E8"] }, { "shortNames": ["flag-eg"], "unified": ["1F1EA-1F1EC"] }, { "shortNames": ["flag-sv"], "unified": ["1F1F8-1F1FB"] }, { "shortNames": ["flag-gq"], "unified": ["1F1EC-1F1F6"] }, { "shortNames": ["flag-er"], "unified": ["1F1EA-1F1F7"] }, { "shortNames": ["flag-ee"], "unified": ["1F1EA-1F1EA"] }, { "shortNames": ["flag-et"], "unified": ["1F1EA-1F1F9"] }, { "shortNames": ["flag-eu"], "unified": ["1F1EA-1F1FA"] }, { "shortNames": ["flag-fk"], "unified": ["1F1EB-1F1F0"] }, { "shortNames": ["flag-fo"], "unified": ["1F1EB-1F1F4"] }, { "shortNames": ["flag-fj"], "unified": ["1F1EB-1F1EF"] }, { "shortNames": ["flag-fi"], "unified": ["1F1EB-1F1EE"] }, { "shortNames": ["flag-fr", "fr"], "unified": ["1F1EB-1F1F7"] }, { "shortNames": ["flag-gf"], "unified": ["1F1EC-1F1EB"] }, { "shortNames": ["flag-pf"], "unified": ["1F1F5-1F1EB"] }, { "shortNames": ["flag-tf"], "unified": ["1F1F9-1F1EB"] }, { "shortNames": ["flag-ga"], "unified": ["1F1EC-1F1E6"] }, { "shortNames": ["flag-gm"], "unified": ["1F1EC-1F1F2"] }, { "shortNames": ["flag-ge"], "unified": ["1F1EC-1F1EA"] }, { "shortNames": ["flag-de", "de"], "unified": ["1F1E9-1F1EA"] }, { "shortNames": ["flag-gh"], "unified": ["1F1EC-1F1ED"] }, { "shortNames": ["flag-gi"], "unified": ["1F1EC-1F1EE"] }, { "shortNames": ["flag-gr"], "unified": ["1F1EC-1F1F7"] }, { "shortNames": ["flag-gl"], "unified": ["1F1EC-1F1F1"] }, { "shortNames": ["flag-gd"], "unified": ["1F1EC-1F1E9"] }, { "shortNames": ["flag-gp"], "unified": ["1F1EC-1F1F5"] }, { "shortNames": ["flag-gu"], "unified": ["1F1EC-1F1FA"] }, { "shortNames": ["flag-gt"], "unified": ["1F1EC-1F1F9"] }, { "shortNames": ["flag-gg"], "unified": ["1F1EC-1F1EC"] }, { "shortNames": ["flag-gn"], "unified": ["1F1EC-1F1F3"] }, { "shortNames": ["flag-gw"], "unified": ["1F1EC-1F1FC"] }, { "shortNames": ["flag-gy"], "unified": ["1F1EC-1F1FE"] }, { "shortNames": ["flag-ht"], "unified": ["1F1ED-1F1F9"] }, { "shortNames": ["flag-hn"], "unified": ["1F1ED-1F1F3"] }, { "shortNames": ["flag-hk"], "unified": ["1F1ED-1F1F0"] }, { "shortNames": ["flag-hu"], "unified": ["1F1ED-1F1FA"] }, { "shortNames": ["flag-is"], "unified": ["1F1EE-1F1F8"] }, { "shortNames": ["flag-in"], "unified": ["1F1EE-1F1F3"] }, { "shortNames": ["flag-id"], "unified": ["1F1EE-1F1E9"] }, { "shortNames": ["flag-ir"], "unified": ["1F1EE-1F1F7"] }, { "shortNames": ["flag-iq"], "unified": ["1F1EE-1F1F6"] }, { "shortNames": ["flag-ie"], "unified": ["1F1EE-1F1EA"] }, { "shortNames": ["flag-im"], "unified": ["1F1EE-1F1F2"] }, { "shortNames": ["flag-il"], "unified": ["1F1EE-1F1F1"] }, { "shortNames": ["flag-it", "it"], "unified": ["1F1EE-1F1F9"] }, { "shortNames": ["flag-jm"], "unified": ["1F1EF-1F1F2"] }, { "shortNames": ["flag-jp", "jp"], "unified": ["1F1EF-1F1F5"] }, { "shortNames": ["crossed_flags"], "unified": ["1F38C"] }, { "shortNames": ["flag-je"], "unified": ["1F1EF-1F1EA"] }, { "shortNames": ["flag-jo"], "unified": ["1F1EF-1F1F4"] }, { "shortNames": ["flag-kz"], "unified": ["1F1F0-1F1FF"] }, { "shortNames": ["flag-ke"], "unified": ["1F1F0-1F1EA"] }, { "shortNames": ["flag-ki"], "unified": ["1F1F0-1F1EE"] }, { "shortNames": ["flag-xk"], "unified": ["1F1FD-1F1F0"] }, { "shortNames": ["flag-kw"], "unified": ["1F1F0-1F1FC"] }, { "shortNames": ["flag-kg"], "unified": ["1F1F0-1F1EC"] }, { "shortNames": ["flag-la"], "unified": ["1F1F1-1F1E6"] }, { "shortNames": ["flag-lv"], "unified": ["1F1F1-1F1FB"] }, { "shortNames": ["flag-lb"], "unified": ["1F1F1-1F1E7"] }, { "shortNames": ["flag-ls"], "unified": ["1F1F1-1F1F8"] }, { "shortNames": ["flag-lr"], "unified": ["1F1F1-1F1F7"] }, { "shortNames": ["flag-ly"], "unified": ["1F1F1-1F1FE"] }, { "shortNames": ["flag-li"], "unified": ["1F1F1-1F1EE"] }, { "shortNames": ["flag-lt"], "unified": ["1F1F1-1F1F9"] }, { "shortNames": ["flag-lu"], "unified": ["1F1F1-1F1FA"] }, { "shortNames": ["flag-mo"], "unified": ["1F1F2-1F1F4"] }, { "shortNames": ["flag-mk"], "unified": ["1F1F2-1F1F0"] }, { "shortNames": ["flag-mg"], "unified": ["1F1F2-1F1EC"] }, { "shortNames": ["flag-mw"], "unified": ["1F1F2-1F1FC"] }, { "shortNames": ["flag-my"], "unified": ["1F1F2-1F1FE"] }, { "shortNames": ["flag-mv"], "unified": ["1F1F2-1F1FB"] }, { "shortNames": ["flag-ml"], "unified": ["1F1F2-1F1F1"] }, { "shortNames": ["flag-mt"], "unified": ["1F1F2-1F1F9"] }, { "shortNames": ["flag-mh"], "unified": ["1F1F2-1F1ED"] }, { "shortNames": ["flag-mq"], "unified": ["1F1F2-1F1F6"] }, { "shortNames": ["flag-mr"], "unified": ["1F1F2-1F1F7"] }, { "shortNames": ["flag-mu"], "unified": ["1F1F2-1F1FA"] }, { "shortNames": ["flag-yt"], "unified": ["1F1FE-1F1F9"] }, { "shortNames": ["flag-mx"], "unified": ["1F1F2-1F1FD"] }, { "shortNames": ["flag-fm"], "unified": ["1F1EB-1F1F2"] }, { "shortNames": ["flag-md"], "unified": ["1F1F2-1F1E9"] }, { "shortNames": ["flag-mc"], "unified": ["1F1F2-1F1E8"] }, { "shortNames": ["flag-mn"], "unified": ["1F1F2-1F1F3"] }, { "shortNames": ["flag-me"], "unified": ["1F1F2-1F1EA"] }, { "shortNames": ["flag-ms"], "unified": ["1F1F2-1F1F8"] }, { "shortNames": ["flag-ma"], "unified": ["1F1F2-1F1E6"] }, { "shortNames": ["flag-mz"], "unified": ["1F1F2-1F1FF"] }, { "shortNames": ["flag-mm"], "unified": ["1F1F2-1F1F2"] }, { "shortNames": ["flag-na"], "unified": ["1F1F3-1F1E6"] }, { "shortNames": ["flag-nr"], "unified": ["1F1F3-1F1F7"] }, { "shortNames": ["flag-np"], "unified": ["1F1F3-1F1F5"] }, { "shortNames": ["flag-nl"], "unified": ["1F1F3-1F1F1"] }, { "shortNames": ["flag-nc"], "unified": ["1F1F3-1F1E8"] }, { "shortNames": ["flag-nz"], "unified": ["1F1F3-1F1FF"] }, { "shortNames": ["flag-ni"], "unified": ["1F1F3-1F1EE"] }, { "shortNames": ["flag-ne"], "unified": ["1F1F3-1F1EA"] }, { "shortNames": ["flag-ng"], "unified": ["1F1F3-1F1EC"] }, { "shortNames": ["flag-nu"], "unified": ["1F1F3-1F1FA"] }, { "shortNames": ["flag-nf"], "unified": ["1F1F3-1F1EB"] }, { "shortNames": ["flag-mp"], "unified": ["1F1F2-1F1F5"] }, { "shortNames": ["flag-kp"], "unified": ["1F1F0-1F1F5"] }, { "shortNames": ["flag-no"], "unified": ["1F1F3-1F1F4"] }, { "shortNames": ["flag-om"], "unified": ["1F1F4-1F1F2"] }, { "shortNames": ["flag-pk"], "unified": ["1F1F5-1F1F0"] }, { "shortNames": ["flag-pw"], "unified": ["1F1F5-1F1FC"] }, { "shortNames": ["flag-ps"], "unified": ["1F1F5-1F1F8"] }, { "shortNames": ["flag-pa"], "unified": ["1F1F5-1F1E6"] }, { "shortNames": ["flag-pg"], "unified": ["1F1F5-1F1EC"] }, { "shortNames": ["flag-py"], "unified": ["1F1F5-1F1FE"] }, { "shortNames": ["flag-pe"], "unified": ["1F1F5-1F1EA"] }, { "shortNames": ["flag-ph"], "unified": ["1F1F5-1F1ED"] }, { "shortNames": ["flag-pn"], "unified": ["1F1F5-1F1F3"] }, { "shortNames": ["flag-pl"], "unified": ["1F1F5-1F1F1"] }, { "shortNames": ["flag-pt"], "unified": ["1F1F5-1F1F9"] }, { "shortNames": ["flag-pr"], "unified": ["1F1F5-1F1F7"] }, { "shortNames": ["flag-qa"], "unified": ["1F1F6-1F1E6"] }, { "shortNames": ["flag-re"], "unified": ["1F1F7-1F1EA"] }, { "shortNames": ["flag-ro"], "unified": ["1F1F7-1F1F4"] }, { "shortNames": ["flag-ru", "ru"], "unified": ["1F1F7-1F1FA"] }, { "shortNames": ["flag-rw"], "unified": ["1F1F7-1F1FC"] }, { "shortNames": ["flag-bl"], "unified": ["1F1E7-1F1F1"] }, { "shortNames": ["flag-sh"], "unified": ["1F1F8-1F1ED"] }, { "shortNames": ["flag-kn"], "unified": ["1F1F0-1F1F3"] }, { "shortNames": ["flag-lc"], "unified": ["1F1F1-1F1E8"] }, { "shortNames": ["flag-pm"], "unified": ["1F1F5-1F1F2"] }, { "shortNames": ["flag-vc"], "unified": ["1F1FB-1F1E8"] }, { "shortNames": ["flag-ws"], "unified": ["1F1FC-1F1F8"] }, { "shortNames": ["flag-sm"], "unified": ["1F1F8-1F1F2"] }, { "shortNames": ["flag-st"], "unified": ["1F1F8-1F1F9"] }, { "shortNames": ["flag-sa"], "unified": ["1F1F8-1F1E6"] }, { "shortNames": ["flag-sn"], "unified": ["1F1F8-1F1F3"] }, { "shortNames": ["flag-rs"], "unified": ["1F1F7-1F1F8"] }, { "shortNames": ["flag-sc"], "unified": ["1F1F8-1F1E8"] }, { "shortNames": ["flag-sl"], "unified": ["1F1F8-1F1F1"] }, { "shortNames": ["flag-sg"], "unified": ["1F1F8-1F1EC"] }, { "shortNames": ["flag-sx"], "unified": ["1F1F8-1F1FD"] }, { "shortNames": ["flag-sk"], "unified": ["1F1F8-1F1F0"] }, { "shortNames": ["flag-si"], "unified": ["1F1F8-1F1EE"] }, { "shortNames": ["flag-sb"], "unified": ["1F1F8-1F1E7"] }, { "shortNames": ["flag-so"], "unified": ["1F1F8-1F1F4"] }, { "shortNames": ["flag-za"], "unified": ["1F1FF-1F1E6"] }, { "shortNames": ["flag-gs"], "unified": ["1F1EC-1F1F8"] }, { "shortNames": ["flag-kr", "kr"], "unified": ["1F1F0-1F1F7"] }, { "shortNames": ["flag-ss"], "unified": ["1F1F8-1F1F8"] }, { "shortNames": ["flag-es", "es"], "unified": ["1F1EA-1F1F8"] }, { "shortNames": ["flag-lk"], "unified": ["1F1F1-1F1F0"] }, { "shortNames": ["flag-sd"], "unified": ["1F1F8-1F1E9"] }, { "shortNames": ["flag-sr"], "unified": ["1F1F8-1F1F7"] }, { "shortNames": ["flag-sz"], "unified": ["1F1F8-1F1FF"] }, { "shortNames": ["flag-se"], "unified": ["1F1F8-1F1EA"] }, { "shortNames": ["flag-ch"], "unified": ["1F1E8-1F1ED"] }, { "shortNames": ["flag-sy"], "unified": ["1F1F8-1F1FE"] }, { "shortNames": ["flag-tw"], "unified": ["1F1F9-1F1FC"] }, { "shortNames": ["flag-tj"], "unified": ["1F1F9-1F1EF"] }, { "shortNames": ["flag-tz"], "unified": ["1F1F9-1F1FF"] }, { "shortNames": ["flag-th"], "unified": ["1F1F9-1F1ED"] }, { "shortNames": ["flag-tl"], "unified": ["1F1F9-1F1F1"] }, { "shortNames": ["flag-tg"], "unified": ["1F1F9-1F1EC"] }, { "shortNames": ["flag-tk"], "unified": ["1F1F9-1F1F0"] }, { "shortNames": ["flag-to"], "unified": ["1F1F9-1F1F4"] }, { "shortNames": ["flag-tt"], "unified": ["1F1F9-1F1F9"] }, { "shortNames": ["flag-tn"], "unified": ["1F1F9-1F1F3"] }, { "shortNames": ["flag-tr"], "unified": ["1F1F9-1F1F7"] }, { "shortNames": ["flag-tm"], "unified": ["1F1F9-1F1F2"] }, { "shortNames": ["flag-tc"], "unified": ["1F1F9-1F1E8"] }, { "shortNames": ["flag-tv"], "unified": ["1F1F9-1F1FB"] }, { "shortNames": ["flag-ug"], "unified": ["1F1FA-1F1EC"] }, { "shortNames": ["flag-ua"], "unified": ["1F1FA-1F1E6"] }, { "shortNames": ["flag-ae"], "unified": ["1F1E6-1F1EA"] }, { "shortNames": ["flag-gb", "gb", "uk"], "unified": ["1F1EC-1F1E7"] }, { "shortNames": ["flag-us", "us"], "unified": ["1F1FA-1F1F8"] }, { "shortNames": ["flag-vi"], "unified": ["1F1FB-1F1EE"] }, { "shortNames": ["flag-uy"], "unified": ["1F1FA-1F1FE"] }, { "shortNames": ["flag-uz"], "unified": ["1F1FA-1F1FF"] }, { "shortNames": ["flag-vu"], "unified": ["1F1FB-1F1FA"] }, { "shortNames": ["flag-va"], "unified": ["1F1FB-1F1E6"] }, { "shortNames": ["flag-ve"], "unified": ["1F1FB-1F1EA"] }, { "shortNames": ["flag-vn"], "unified": ["1F1FB-1F1F3"] }, { "shortNames": ["flag-wf"], "unified": ["1F1FC-1F1EB"] }, { "shortNames": ["flag-eh"], "unified": ["1F1EA-1F1ED"] }, { "shortNames": ["flag-ye"], "unified": ["1F1FE-1F1EA"] }, { "shortNames": ["flag-zm"], "unified": ["1F1FF-1F1F2"] }, { "shortNames": ["flag-zw"], "unified": ["1F1FF-1F1FC"] }, { "shortNames": ["flag-ac"], "unified": ["1F1E6-1F1E8"] }, { "shortNames": ["flag-bv"], "unified": ["1F1E7-1F1FB"] }, { "shortNames": ["flag-cp"], "unified": ["1F1E8-1F1F5"] }, { "shortNames": ["flag-dg"], "unified": ["1F1E9-1F1EC"] }, { "shortNames": ["flag-ea"], "unified": ["1F1EA-1F1E6"] }, { "shortNames": ["flag-hm"], "unified": ["1F1ED-1F1F2"] }, { "shortNames": ["flag-mf"], "unified": ["1F1F2-1F1EB"] }, { "shortNames": ["flag-sj"], "unified": ["1F1F8-1F1EF"] }, { "shortNames": ["flag-ta"], "unified": ["1F1F9-1F1E6"] }, { "shortNames": ["flag-um"], "unified": ["1F1FA-1F1F2"] }, { "shortNames": ["flag-un"], "unified": ["1F1FA-1F1F3"] }], "Skin Tones": [{ "shortNames": ["skin-tone-2"], "unified": ["1F3FB"] }, { "shortNames": ["skin-tone-3"], "unified": ["1F3FC"] }, { "shortNames": ["skin-tone-4"], "unified": ["1F3FD"] }, { "shortNames": ["skin-tone-5"], "unified": ["1F3FE"] }, { "shortNames": ["skin-tone-6"], "unified": ["1F3FF"] }] };
	exports.default = { emoji_data: emoji_data };

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(160);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

	__webpack_require__(161);

	var _react = __webpack_require__(94);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _measureScrollbar = __webpack_require__(162);

	var _measureScrollbar2 = _interopRequireDefault(_measureScrollbar);

	var _emoji = __webpack_require__(157);

	var _emoji2 = _interopRequireDefault(_emoji);

	var _store = __webpack_require__(133);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(121);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _utils = __webpack_require__(137);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RECENT_CATEGORY = { name: 'Recent', emojis: null };
	var SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false };

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
	    flags: 'Flags'
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
	    var allCategories = [].concat(_emoji2.default.categories);

	    _this.hideRecent = true;

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

	              if (props.emojisToShowFilter(_emoji2.default.emojis[emoji] || emoji)) {
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
	      // Use Array.prototype.find() when it is more widely supported.
	      this.preview.setState({ emoji: emoji });
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'handleEmojiLeave',
	    value: function handleEmojiLeave(emoji) {
	      var _this3 = this;

	      this.leaveTimeout = setTimeout(function () {
	        _this3.preview.setState({ emoji: null });
	      }, 16);
	    }
	  }, {
	    key: 'handleEmojiClick',
	    value: function handleEmojiClick(emoji, e) {
	      var _this4 = this;

	      this.props.onClick(emoji, e);
	      if (!this.hideRecent) _frequently2.default.add(emoji);

	      var component = this.categoriesRef[1];
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

	      if (!this.scroll) {
	        return;
	      }

	      var activeCategory = null;

	      if (SEARCH_CATEGORY.emojis) {
	        activeCategory = SEARCH_CATEGORY;
	      } else {
	        var target = this.scroll,
	            scrollTop = target.scrollTop,
	            scrollingDown = scrollTop > (this.scrollTop || 0),
	            minTop = 0;

	        for (var i = 0, l = this.categories.length; i < l; i++) {
	          var ii = scrollingDown ? this.categories.length - 1 - i : i,
	              category = this.categories[ii],
	              component = this.categoriesRef[ii];

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
	        var _activeCategory = activeCategory;
	        var categoryName = _activeCategory.name;


	        if (this.anchors.state.selected != categoryName) {
	          this.anchors.setState({ selected: categoryName });
	        }
	      }

	      this.scrollTop = scrollTop;
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(emojis) {
	      SEARCH_CATEGORY.emojis = emojis;

	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.categoriesRef[i];

	        if (component && component.props.name != 'Search') {
	          var display = emojis ? 'none' : 'inherit';
	          component.updateDisplay(display);
	        }
	      }

	      this.forceUpdate();
	      this.scroll.scrollTop = 0;
	      this.handleScroll();
	    }
	  }, {
	    key: 'handleAnchorClick',
	    value: function handleAnchorClick(category, i) {
	      var _this5 = this;

	      var component = this.categoriesRef[i],
	          scrollToComponent = null;

	      scrollToComponent = function scrollToComponent() {
	        if (component) {
	          var top = component.top;


	          if (category.first) {
	            top = 0;
	          } else {
	            top += 1;
	          }

	          _this5.scroll.scrollTop = top;
	        }
	      };

	      if (SEARCH_CATEGORY.emojis) {
	        this.handleSearch(null);
	        this.search.clear();

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
	        var component = this.categoriesRef[i];
	        if (component) component.memoizeSize();
	      }

	      if (this.scroll) {
	        var target = this.scroll;
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
	      var _this6 = this;

	      var _props = this.props;
	      var perLine = _props.perLine;
	      var emojiSize = _props.emojiSize;
	      var style = _props.style;
	      var title = _props.title;
	      var emoji = _props.emoji;
	      var color = _props.color;
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
	            ref: function ref(anchors) {
	              return _this6.anchors = anchors;
	            },
	            i18n: this.i18n,
	            color: color,
	            categories: this.categories,
	            onAnchorClick: this.handleAnchorClick.bind(this)
	          })
	        ),
	        _react2.default.createElement(_.Search, {
	          ref: function ref(search) {
	            return _this6.search = search;
	          },
	          onSearch: this.handleSearch.bind(this),
	          i18n: this.i18n,
	          emojisToShowFilter: emojisToShowFilter,
	          include: include,
	          exclude: exclude,
	          autoFocus: autoFocus
	        }),
	        _react2.default.createElement(
	          'div',
	          { ref: function ref(scroll) {
	              return _this6.scroll = scroll;
	            }, className: 'emoji-mart-scroll', onScroll: this.handleScroll.bind(this) },
	          this.getCategories().map(function (category, i) {
	            return _react2.default.createElement(_.Category, {
	              ref: function ref(category) {
	                if (_this6.categoriesRef) {
	                  _this6.categoriesRef[i] = category;
	                } else {
	                  _this6.categoriesRef = (0, _defineProperty3.default)({}, i, [category]);
	                }
	              },
	              key: category.name,
	              name: category.name,
	              emojis: category.emojis,
	              perLine: perLine,
	              hasStickyPosition: _this6.hasStickyPosition,
	              i18n: _this6.i18n,
	              emojiProps: {
	                skin: skin,
	                size: emojiSize,
	                onOver: _this6.handleEmojiOver.bind(_this6),
	                onLeave: _this6.handleEmojiLeave.bind(_this6),
	                onClick: _this6.handleEmojiClick.bind(_this6)
	              }
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Preview, {
	            ref: function ref(preview) {
	              return _this6.preview = preview;
	            },
	            title: title,
	            emoji: emoji,
	            emojiProps: {
	              size: 38,
	              skin: skin
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
	  skin: _.Emoji.propTypes.skin,
	  emojisToShowFilter: _propTypes2.default.func,
	  include: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  exclude: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  autoFocus: _propTypes2.default.bool
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
	  skin: _.Emoji.defaultProps.skin,
	  emojisToShowFilter: null,
	  autoFocus: false
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(62);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 161 */
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
/* 162 */
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
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	var _propTypes = __webpack_require__(95);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ = __webpack_require__(1);

	var _utils = __webpack_require__(137);

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
/* 164 */
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

	var _emojiIndex = __webpack_require__(165);

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
	      this.props.onSearch(_emojiIndex2.default.search(this.input.value, {
	        emojisToShowFilter: this.props.emojisToShowFilter,
	        maxResults: this.props.maxResults,
	        include: this.props.include,
	        exclude: this.props.exclude
	      }));
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.input.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var i18n = _props.i18n;
	      var autoFocus = _props.autoFocus;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-search' },
	        _react2.default.createElement('input', {
	          ref: function ref(input) {
	            return _this2.input = input;
	          },
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(125);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getIterator2 = __webpack_require__(3);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _emoji2 = __webpack_require__(157);

	var _emoji3 = _interopRequireDefault(_emoji2);

	var _ = __webpack_require__(137);

	var _store = __webpack_require__(133);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var extend = __webpack_require__(166)._extend;

	var index = {};
	var emojisList = {};
	var previousInclude = [];
	var previousExclude = [];

	for (var emoji in _emoji3.default.emojis) {
	  var emojiData = _emoji3.default.emojis[emoji];
	  var short_names = emojiData.short_names;
	  var id = short_names[0];

	  emojisList[id] = (0, _.getSanitizedData)(id);
	}

	function getDefaultSkin() {
	  var stored = _store2.default.get('skin');
	  return stored === 1 ? null : stored;
	}

	function search(value) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var emojisToShowFilter = _ref.emojisToShowFilter;
	  var maxResults = _ref.maxResults;
	  var include = _ref.include;
	  var exclude = _ref.exclude;

	  maxResults || (maxResults = 75);
	  include || (include = []);
	  exclude || (exclude = []);

	  var results = null,
	      pool = _emoji3.default.emojis;

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

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(_emoji3.default.categories), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var category = _step.value;

	          var isIncluded = include && include.length ? include.indexOf(category.name.toLowerCase()) > -1 : true;
	          var isExcluded = exclude && exclude.length ? exclude.indexOf(category.name.toLowerCase()) > -1 : false;
	          if (!isIncluded || isExcluded) {
	            continue;
	          }

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = (0, _getIterator3.default)(category.emojis), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var emojiId = _step2.value;

	              pool[emojiId] = _emoji3.default.emojis[emojiId];
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
	    } else if (previousInclude.length || previousExclude.length) {
	      index = {};
	    }

	    allResults = values.map(function (value) {
	      var aPool = pool,
	          aIndex = index,
	          length = 0;

	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(value.split('')), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var char = _step3.value;

	          length++;

	          aIndex[char] || (aIndex[char] = {});
	          aIndex = aIndex[char];

	          if (!aIndex.results) {
	            (function () {
	              var scores = {};

	              aIndex.results = [];
	              aIndex.pool = {};

	              for (var id in aPool) {
	                var _emoji = aPool[id];
	                var _search = _emoji.search;
	                var sub = value.substr(0, length);
	                var subIndex = _search.indexOf(sub);

	                if (subIndex != -1) {
	                  var score = subIndex + 1;
	                  if (sub == id) score = 0;

	                  aIndex.results.push(emojisList[id]);
	                  aIndex.pool[id] = _emoji;

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
	        return emojisToShowFilter(_emoji3.default.emojis[result.id].unified);
	      });
	    }

	    if (results && results.length > maxResults) {
	      results = results.slice(0, maxResults);
	    }
	  }

	  return results;
	}

	exports.default = { search: search, getDefaultSkin: getDefaultSkin, emojis: emojisList, getData: _.getData };

/***/ },
/* 166 */
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

	exports.isBuffer = __webpack_require__(167);

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
	exports.inherits = __webpack_require__(168);

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
/* 167 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 168 */
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
/* 169 */
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