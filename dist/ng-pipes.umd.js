(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ng.core"));
	else if(typeof define === 'function' && define.amd)
		define(["ng.core"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("ng.core")) : factory(root["ng.core"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isObject(value) {
    return typeof value === 'object';
}
exports.isObject = isObject;
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function toArray(object) {
    return isArray(object) ? object : Object.keys(object).map(function (key) {
        return object[key];
    });
}
exports.toArray = toArray;
function equals(a, b) {
    if (a === b) {
        return true;
    }
    if (!(typeof a === 'object' && typeof b === 'object')) {
        return a === b;
    }
    var keysA = Object.keys(a);
    var keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0; i < keysA.length; i++) {
        var key = keysA[i];
        if (!hasOwn.call(b, keysA[i]) || !equals(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
exports.equals = equals;
function objectContains(partial, object) {
    return Object.keys(partial).every(function (key) {
        return key in object && object[key] == partial[key];
    });
}
exports.objectContains = objectContains;
function deepKeys(obj, stack, parent, intermediate) {
    if (stack === void 0) { stack = []; }
    if (parent === void 0) { parent = null; }
    if (intermediate === void 0) { intermediate = false; }
    Object.keys(obj).forEach(function (el) {
        // Escape . in the element name
        var escaped = el.replace(/\./g, '\\\.');
        // If it's a nested object
        if (isObject(obj[el]) && !isArray(obj[el])) {
            // Concatenate the new parent if exist
            var p = parent ? parent + '.' + el : parent;
            // Push intermediate parent key if flag is true
            if (intermediate)
                stack.push(parent ? p : escaped);
            deepKeys(obj[el], stack, p || escaped, intermediate);
        }
        else {
            // Create and save the key
            var key = parent ? parent + '.' + escaped : escaped;
            stack.push(key);
        }
    });
    return stack;
}
exports.deepKeys = deepKeys;
/**
 * @description
 * return the first n element of an array,
 * if expression provided, is returns as long the expression return truthy
 * @param array
 * @param n {number}
 * @param expression {$parse}
 * @return array or single object
 */
function getFirstMatches(array, n, getter) {
    var count = 0;
    return array.filter(function (elm) {
        var rest = !isUndefined(getter) ? count < n && getter(elm) : count < n;
        count = rest ? count + 1 : count;
        return rest;
    });
}
exports.getFirstMatches = getFirstMatches;
/**
 * @description
 * search for approximate pattern in string
 * @param word
 * @param pattern
 * @returns {*}
 */
function hasApproxPattern(word, pattern) {
    function indexOf(word, p, c) {
        var j = 0;
        while ((p + j) <= word.length) {
            if (word.charAt(p + j) == c)
                return j;
            j++;
        }
        return -1;
    }
    var p = 0;
    for (var i = 0; i <= pattern.length; i++) {
        var index = indexOf(word, p, pattern.charAt(i));
        if (index == -1)
            return false;
        p += index + 1;
    }
    return true;
}
exports.hasApproxPattern = hasApproxPattern;
function convertToDecimal(num, decimal) {
    return Math.round(num * Math.pow(10, decimal)) / (Math.pow(10, decimal));
}
exports.convertToDecimal = convertToDecimal;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils_1 = __webpack_require__(1);
function createGetterFn(pathKeys) {
    var fn = null;
    for (var i = pathKeys.length - 1; i >= 0; i--) {
        if (fn === null) {
            fn = finalFn(pathKeys[i]);
        }
        else {
            fn = stepFn(pathKeys[i], fn);
        }
    }
    return fn;
    function finalFn(key) {
        return function (scope, local) {
            if (local && local.hasOwnProperty(key))
                return local[key];
            if (scope)
                return scope[key];
        };
    }
    function stepFn(key, next) {
        return function (scope, local) {
            return next(scope && scope[key], local && local[key]);
        };
    }
}
function setterFn(scope, path, value) {
    var s = scope;
    var i = 0;
    for (; i < path.length - 1; i++) {
        if (utils_1.isUndefined(s[path[i]]) && i < path.length - 1) {
            s[path[i]] = {};
        }
        s = s[path[i]];
    }
    s[path[i]] = value;
    return scope;
}
/**
 * @description
 * return parse function
 * @returns {Function}
 */
function Parse() {
    var cache = {};
    return function (exp) {
        var fn = function () { };
        if (utils_1.isString(exp)) {
            var cacheKey = exp.trim();
            if (cacheKey in cache) {
                return cache[cacheKey];
            }
            var pathKeys = exp.split('.');
            fn = cache[cacheKey] = createGetterFn(pathKeys);
            fn.assign = function (scope, value) {
                return setterFn(scope, pathKeys, value);
            };
        }
        else if (utils_1.isFunction(exp)) {
            fn = function (scope, local) {
                return exp(scope, local);
            };
        }
        return fn;
    };
}
exports.Parse = Parse;
//# sourceMappingURL=parse.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(0);
var is_null_pipe_1 = __webpack_require__(7);
__export(__webpack_require__(7));
var BooleanPipesModule = (function () {
    function BooleanPipesModule() {
    }
    return BooleanPipesModule;
}());
BooleanPipesModule = __decorate([
    core_1.NgModule({
        declarations: [
            is_null_pipe_1.IsNullPipe,
        ],
        exports: [
            is_null_pipe_1.IsNullPipe,
        ]
    })
], BooleanPipesModule);
exports.BooleanPipesModule = BooleanPipesModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(0);
var after_where_pipe_1 = __webpack_require__(8);
var before_where_pipe_1 = __webpack_require__(10);
var after_pipe_1 = __webpack_require__(9);
var before_pipe_1 = __webpack_require__(11);
var chunk_by_pipe_1 = __webpack_require__(12);
var concat_pipe_1 = __webpack_require__(13);
var contains_pipe_1 = __webpack_require__(14);
var count_by_pipe_1 = __webpack_require__(15);
var defaults_pipe_1 = __webpack_require__(16);
var every_pipe_1 = __webpack_require__(17);
var filter_by_pipe_1 = __webpack_require__(18);
var first_pipe_1 = __webpack_require__(19);
var flatten_pipe_1 = __webpack_require__(20);
var fuzzy_by_pipe_1 = __webpack_require__(21);
var fuzzy_pipe_1 = __webpack_require__(22);
var group_by_pipe_1 = __webpack_require__(23);
var is_empty_pipe_1 = __webpack_require__(24);
var join_pipe_1 = __webpack_require__(25);
var last_pipe_1 = __webpack_require__(26);
var map_pipe_1 = __webpack_require__(27);
var omit_pipe_1 = __webpack_require__(28);
var pick_pipe_1 = __webpack_require__(30);
var range_pipe_1 = __webpack_require__(31);
var remove_with_pipe_1 = __webpack_require__(32);
var remove_pipe_1 = __webpack_require__(33);
var reverse_pipe_1 = __webpack_require__(34);
var search_field_pipe_1 = __webpack_require__(35);
var to_array_pipe_1 = __webpack_require__(36);
var uniq_pipe_1 = __webpack_require__(37);
var where_pipe_1 = __webpack_require__(38);
var xor_pipe_1 = __webpack_require__(39);
var order_by_pipe_1 = __webpack_require__(29);
__export(__webpack_require__(8));
__export(__webpack_require__(10));
__export(__webpack_require__(9));
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(13));
__export(__webpack_require__(14));
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(17));
__export(__webpack_require__(18));
__export(__webpack_require__(19));
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(22));
__export(__webpack_require__(23));
__export(__webpack_require__(24));
__export(__webpack_require__(25));
__export(__webpack_require__(26));
__export(__webpack_require__(27));
__export(__webpack_require__(28));
__export(__webpack_require__(30));
__export(__webpack_require__(31));
__export(__webpack_require__(32));
__export(__webpack_require__(33));
__export(__webpack_require__(34));
__export(__webpack_require__(35));
__export(__webpack_require__(36));
__export(__webpack_require__(37));
__export(__webpack_require__(38));
__export(__webpack_require__(39));
__export(__webpack_require__(29));
var CollectionPipesModule = (function () {
    function CollectionPipesModule() {
    }
    return CollectionPipesModule;
}());
CollectionPipesModule = __decorate([
    core_1.NgModule({
        declarations: [
            after_where_pipe_1.AfterWherePipe,
            before_where_pipe_1.BeforeWherePipe,
            after_pipe_1.AfterPipe,
            before_pipe_1.BeforePipe,
            chunk_by_pipe_1.ChunkByPipe,
            concat_pipe_1.ConcatPipe,
            contains_pipe_1.ContainsPipe,
            count_by_pipe_1.CountByPipe,
            defaults_pipe_1.DefaultsPipe,
            every_pipe_1.EveryPipe,
            filter_by_pipe_1.FilterByPipe,
            first_pipe_1.FirstPipe,
            flatten_pipe_1.FlattenPipe,
            fuzzy_by_pipe_1.FuzzyByPipe,
            fuzzy_pipe_1.FuzzyPipe,
            group_by_pipe_1.GroupByPipe,
            is_empty_pipe_1.IsEmptyPipe,
            join_pipe_1.JoinPipe,
            last_pipe_1.LastPipe,
            map_pipe_1.MapPipe,
            omit_pipe_1.OmitPipe,
            pick_pipe_1.PickPipe,
            range_pipe_1.RangePipe,
            remove_with_pipe_1.RemoveWithPipe,
            reverse_pipe_1.ReversePipe,
            search_field_pipe_1.SearchFieldPipe,
            remove_pipe_1.RemovePipe,
            to_array_pipe_1.ToArrayPipe,
            uniq_pipe_1.UniqPipe,
            where_pipe_1.WherePipe,
            xor_pipe_1.XORPipe,
            order_by_pipe_1.OrderByPipe,
        ],
        exports: [
            after_where_pipe_1.AfterWherePipe,
            before_where_pipe_1.BeforeWherePipe,
            after_pipe_1.AfterPipe,
            before_pipe_1.BeforePipe,
            chunk_by_pipe_1.ChunkByPipe,
            concat_pipe_1.ConcatPipe,
            contains_pipe_1.ContainsPipe,
            count_by_pipe_1.CountByPipe,
            defaults_pipe_1.DefaultsPipe,
            every_pipe_1.EveryPipe,
            filter_by_pipe_1.FilterByPipe,
            first_pipe_1.FirstPipe,
            flatten_pipe_1.FlattenPipe,
            fuzzy_by_pipe_1.FuzzyByPipe,
            fuzzy_pipe_1.FuzzyPipe,
            group_by_pipe_1.GroupByPipe,
            is_empty_pipe_1.IsEmptyPipe,
            join_pipe_1.JoinPipe,
            last_pipe_1.LastPipe,
            map_pipe_1.MapPipe,
            omit_pipe_1.OmitPipe,
            pick_pipe_1.PickPipe,
            range_pipe_1.RangePipe,
            remove_with_pipe_1.RemoveWithPipe,
            reverse_pipe_1.ReversePipe,
            search_field_pipe_1.SearchFieldPipe,
            remove_pipe_1.RemovePipe,
            to_array_pipe_1.ToArrayPipe,
            uniq_pipe_1.UniqPipe,
            where_pipe_1.WherePipe,
            xor_pipe_1.XORPipe,
            order_by_pipe_1.OrderByPipe,
        ]
    })
], CollectionPipesModule);
exports.CollectionPipesModule = CollectionPipesModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(0);
var abs_pipe_1 = __webpack_require__(40);
var byte_fmt_pipe_1 = __webpack_require__(41);
var kb_fmt_pipe_1 = __webpack_require__(43);
var degrees_pipe_1 = __webpack_require__(42);
var max_pipe_1 = __webpack_require__(44);
var min_pipe_1 = __webpack_require__(45);
var percent_pipe_1 = __webpack_require__(46);
var radians_pipe_1 = __webpack_require__(47);
var radix_pipe_1 = __webpack_require__(48);
var short_fmt_pipe_1 = __webpack_require__(49);
var sum_pipe_1 = __webpack_require__(50);
__export(__webpack_require__(40));
__export(__webpack_require__(41));
__export(__webpack_require__(43));
__export(__webpack_require__(42));
__export(__webpack_require__(44));
__export(__webpack_require__(45));
__export(__webpack_require__(46));
__export(__webpack_require__(47));
__export(__webpack_require__(48));
__export(__webpack_require__(49));
__export(__webpack_require__(50));
var MathPipesModule = (function () {
    function MathPipesModule() {
    }
    return MathPipesModule;
}());
MathPipesModule = __decorate([
    core_1.NgModule({
        declarations: [
            abs_pipe_1.AbsPipe,
            byte_fmt_pipe_1.ByteFmtPipe,
            kb_fmt_pipe_1.KBFmtPipe,
            degrees_pipe_1.DegreesPipe,
            max_pipe_1.MaxPipe,
            min_pipe_1.MinPipe,
            percent_pipe_1.PercentPipe,
            radians_pipe_1.RadiansPipe,
            radix_pipe_1.RadixPipe,
            short_fmt_pipe_1.ShortFmtPipe,
            sum_pipe_1.SumPipe,
        ],
        exports: [
            abs_pipe_1.AbsPipe,
            byte_fmt_pipe_1.ByteFmtPipe,
            kb_fmt_pipe_1.KBFmtPipe,
            degrees_pipe_1.DegreesPipe,
            max_pipe_1.MaxPipe,
            min_pipe_1.MinPipe,
            percent_pipe_1.PercentPipe,
            radians_pipe_1.RadiansPipe,
            radix_pipe_1.RadixPipe,
            short_fmt_pipe_1.ShortFmtPipe,
            sum_pipe_1.SumPipe,
        ]
    })
], MathPipesModule);
exports.MathPipesModule = MathPipesModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(0);
var ends_with_pipe_1 = __webpack_require__(51);
var starts_with_pipe_1 = __webpack_require__(58);
var latinize_pipe_1 = __webpack_require__(52);
var ltrim_pipe_1 = __webpack_require__(53);
var rtrim_pipe_1 = __webpack_require__(56);
var trim_pipe_1 = __webpack_require__(63);
var match_pipe_1 = __webpack_require__(54);
var repeat_pipe_1 = __webpack_require__(55);
var slugify_pipe_1 = __webpack_require__(57);
var stringular_pipe_1 = __webpack_require__(59);
var strip_tags_pipe_1 = __webpack_require__(60);
var test_pipe_1 = __webpack_require__(61);
var truncate_pipe_1 = __webpack_require__(64);
var ucfirst_pipe_1 = __webpack_require__(65);
var titleize_pipe_1 = __webpack_require__(62);
var uri_component_encode_pipe_1 = __webpack_require__(66);
var uri_encode_pipe_1 = __webpack_require__(67);
var wrap_pipe_1 = __webpack_require__(68);
__export(__webpack_require__(51));
__export(__webpack_require__(58));
__export(__webpack_require__(52));
__export(__webpack_require__(53));
__export(__webpack_require__(56));
__export(__webpack_require__(63));
__export(__webpack_require__(54));
__export(__webpack_require__(61));
__export(__webpack_require__(55));
__export(__webpack_require__(57));
__export(__webpack_require__(59));
__export(__webpack_require__(60));
__export(__webpack_require__(64));
__export(__webpack_require__(65));
__export(__webpack_require__(62));
__export(__webpack_require__(66));
__export(__webpack_require__(67));
__export(__webpack_require__(68));
var StringPipesModule = (function () {
    function StringPipesModule() {
    }
    return StringPipesModule;
}());
StringPipesModule = __decorate([
    core_1.NgModule({
        declarations: [
            ends_with_pipe_1.EndsWithPipe,
            starts_with_pipe_1.StartsWithPipe,
            latinize_pipe_1.LatinizePipe,
            ltrim_pipe_1.LeftTrimPipe,
            trim_pipe_1.TrimPipe,
            rtrim_pipe_1.RightTrimPipe,
            match_pipe_1.MatchPipe,
            test_pipe_1.TestPipe,
            repeat_pipe_1.RepeatPipe,
            slugify_pipe_1.SlugifyPipe,
            stringular_pipe_1.StringularPipe,
            strip_tags_pipe_1.StripTagsPipe,
            truncate_pipe_1.TruncatePipe,
            ucfirst_pipe_1.UcfirstPipe,
            titleize_pipe_1.TitleizePipe,
            uri_encode_pipe_1.UriEncodePipe,
            uri_component_encode_pipe_1.UriComponentEncodePipe,
            wrap_pipe_1.WrapPipe,
        ],
        exports: [
            ends_with_pipe_1.EndsWithPipe,
            latinize_pipe_1.LatinizePipe,
            starts_with_pipe_1.StartsWithPipe,
            ltrim_pipe_1.LeftTrimPipe,
            rtrim_pipe_1.RightTrimPipe,
            trim_pipe_1.TrimPipe,
            match_pipe_1.MatchPipe,
            test_pipe_1.TestPipe,
            repeat_pipe_1.RepeatPipe,
            slugify_pipe_1.SlugifyPipe,
            stringular_pipe_1.StringularPipe,
            strip_tags_pipe_1.StripTagsPipe,
            truncate_pipe_1.TruncatePipe,
            ucfirst_pipe_1.UcfirstPipe,
            titleize_pipe_1.TitleizePipe,
            uri_encode_pipe_1.UriEncodePipe,
            uri_component_encode_pipe_1.UriComponentEncodePipe,
            wrap_pipe_1.WrapPipe,
        ]
    })
], StringPipesModule);
exports.StringPipesModule = StringPipesModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var IsNullPipe = (function () {
    function IsNullPipe() {
    }
    IsNullPipe.prototype.transform = function (input) {
        return utils_1.isNull(input);
    };
    return IsNullPipe;
}());
IsNullPipe = __decorate([
    core_1.Pipe({
        name: 'isNull'
    })
], IsNullPipe);
exports.IsNullPipe = IsNullPipe;
//# sourceMappingURL=is-null.pipe.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var AfterWherePipe = (function () {
    function AfterWherePipe() {
    }
    AfterWherePipe.prototype.transform = function (collection, object) {
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        var index = collection.map(function (e) { return utils_1.objectContains(object, e); }).indexOf(true);
        return collection.slice(index == -1 ? 0 : index);
    };
    return AfterWherePipe;
}());
AfterWherePipe = __decorate([
    core_1.Pipe({
        name: 'afterWhere'
    })
], AfterWherePipe);
exports.AfterWherePipe = AfterWherePipe;
//# sourceMappingURL=after-where.pipe.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var AfterPipe = (function () {
    function AfterPipe() {
    }
    AfterPipe.prototype.transform = function (collection, count) {
        if (count === void 0) { count = 0; }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        return collection.slice(count);
    };
    return AfterPipe;
}());
AfterPipe = __decorate([
    core_1.Pipe({
        name: 'after'
    })
], AfterPipe);
exports.AfterPipe = AfterPipe;
//# sourceMappingURL=after.pipe.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var BeforeWherePipe = (function () {
    function BeforeWherePipe() {
    }
    BeforeWherePipe.prototype.transform = function (collection, object) {
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        var index = collection.map(function (e) { return utils_1.objectContains(object, e); }).indexOf(true);
        return collection.slice(0, index == -1 ? collection.length : index + 1);
    };
    return BeforeWherePipe;
}());
BeforeWherePipe = __decorate([
    core_1.Pipe({
        name: 'beforeWhere'
    })
], BeforeWherePipe);
exports.BeforeWherePipe = BeforeWherePipe;
//# sourceMappingURL=before-where.pipe.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var BeforePipe = (function () {
    function BeforePipe() {
    }
    BeforePipe.prototype.transform = function (collection, count) {
        if (count === void 0) { count = 1; }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        return collection.slice(0, count - 1);
    };
    return BeforePipe;
}());
BeforePipe = __decorate([
    core_1.Pipe({
        name: 'before'
    })
], BeforePipe);
exports.BeforePipe = BeforePipe;
//# sourceMappingURL=before.pipe.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var ChunkByPipe = (function () {
    function ChunkByPipe() {
    }
    ChunkByPipe.prototype.transform = function (array, n, fillVal) {
        function fill(n, val) {
            var ret = [];
            while (n--)
                ret[n] = val;
            return ret;
        }
        return array.map(function (el, i, self) {
            i = i * n;
            el = self.slice(i, i + n);
            return !utils_1.isUndefined(fillVal) && el.length < n
                ? el.concat(fill(n - el.length, fillVal))
                : el;
        })
            .slice(0, Math.ceil(array.length / n));
    };
    return ChunkByPipe;
}());
ChunkByPipe = __decorate([
    core_1.Pipe({
        name: 'chunkBy'
    })
], ChunkByPipe);
exports.ChunkByPipe = ChunkByPipe;
//# sourceMappingURL=chunk-by.pipe.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var ConcatPipe = (function () {
    function ConcatPipe() {
    }
    ConcatPipe.prototype.transform = function (collection, joined) {
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(joined)) {
            joined = utils_1.toArray(joined);
        }
        return collection.concat(joined);
    };
    return ConcatPipe;
}());
ConcatPipe = __decorate([
    core_1.Pipe({
        name: 'concat'
    })
], ConcatPipe);
exports.ConcatPipe = ConcatPipe;
//# sourceMappingURL=concat.pipe.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var ContainsPipe = (function () {
    function ContainsPipe() {
        this.$parse = parse_1.Parse();
    }
    ContainsPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        return collection.some(function (e) { return utils_1.isFunction(predicate) || (utils_1.isString(predicate) && utils_1.isObject(e))
            ? _this.$parse(predicate)(e)
            : e === predicate; });
    };
    return ContainsPipe;
}());
ContainsPipe = __decorate([
    core_1.Pipe({
        name: 'contains'
    }),
    __metadata("design:paramtypes", [])
], ContainsPipe);
exports.ContainsPipe = ContainsPipe;
//# sourceMappingURL=contains.pipe.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var CountByPipe = (function () {
    function CountByPipe() {
        this.$parse = parse_1.Parse();
    }
    CountByPipe.prototype.transform = function (collection, predicate) {
        var result = {}, getter = this.$parse(predicate);
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        collection.forEach(function (elm) {
            var prop = getter(elm);
            if (!(prop in result))
                result[prop] = 0;
            result[prop]++;
        });
        return result;
    };
    return CountByPipe;
}());
CountByPipe = __decorate([
    core_1.Pipe({
        name: 'countBy'
    }),
    __metadata("design:paramtypes", [])
], CountByPipe);
exports.CountByPipe = CountByPipe;
//# sourceMappingURL=count-by.pipe.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var DefaultsPipe = (function () {
    function DefaultsPipe() {
        this.$parse = parse_1.Parse();
    }
    DefaultsPipe.prototype.transform = function (collection, defaults) {
        var _this = this;
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        var getters = utils_1.deepKeys(defaults).map(function (key) { return _this.$parse(key); });
        collection.forEach(function (elm) {
            getters.forEach(function (getter) {
                if (utils_1.isUndefined(getter(elm))) {
                    getter.assign(elm, getter(defaults));
                }
            });
        });
        return collection;
    };
    return DefaultsPipe;
}());
DefaultsPipe = __decorate([
    core_1.Pipe({
        name: 'defaults'
    }),
    __metadata("design:paramtypes", [])
], DefaultsPipe);
exports.DefaultsPipe = DefaultsPipe;
//# sourceMappingURL=defaults.pipe.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var EveryPipe = (function () {
    function EveryPipe() {
        this.$parse = parse_1.Parse();
    }
    EveryPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        return collection.every(function (e) { return utils_1.isFunction(predicate) || (utils_1.isString(predicate) && utils_1.isObject(e))
            ? _this.$parse(predicate)(e)
            : e === predicate; });
    };
    return EveryPipe;
}());
EveryPipe = __decorate([
    core_1.Pipe({
        name: 'every'
    }),
    __metadata("design:paramtypes", [])
], EveryPipe);
exports.EveryPipe = EveryPipe;
//# sourceMappingURL=every.pipe.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var FilterByPipe = (function () {
    function FilterByPipe() {
        this.$parse = parse_1.Parse();
    }
    FilterByPipe.prototype.transform = function (collection, properties, search, strict) {
        var _this = this;
        if (strict === void 0) { strict = false; }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        search = utils_1.isString(search) || utils_1.isNumber(search)
            ? String(search).toLowerCase()
            : undefined;
        if (!utils_1.isArray(collection) || utils_1.isUndefined(search)) {
            return collection;
        }
        if (utils_1.isString(search) || utils_1.isNumber(search)) {
            search = String(search).toLowerCase();
        }
        return collection.filter(function (elm) {
            return properties.some(function (prop) {
                /**
                * check if there are concatenate properties
                * example:
                * object: { first: 'foo', last:'bar' }
               * filterBy: ['first + last'] => search by full name(i.e 'foo bar')
               */
                var comparator;
                if (!~prop.indexOf('+')) {
                    comparator = _this.$parse(prop)(elm);
                }
                else {
                    var propList = prop.replace(/\s+/g, '').split('+');
                    comparator = propList
                        .map(function (p) { return _this.$parse(p)(elm); })
                        .join(' ');
                }
                // TODO: boolean?
                if (!utils_1.isString(comparator) && !utils_1.isNumber(comparator)) {
                    return false;
                }
                comparator = String(comparator).toLowerCase();
                // indentical or contains
                return strict
                    ? comparator === search
                    : comparator.indexOf(search) != -1;
            });
        });
    };
    return FilterByPipe;
}());
FilterByPipe = __decorate([
    core_1.Pipe({
        name: 'filterBy'
    }),
    __metadata("design:paramtypes", [])
], FilterByPipe);
exports.FilterByPipe = FilterByPipe;
//# sourceMappingURL=filter-by.pipe.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var FirstPipe = (function () {
    function FirstPipe() {
        this.$parse = parse_1.Parse();
    }
    FirstPipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        var n = utils_1.isNumber(args[0]) ? args[0] : 1, getter = !utils_1.isNumber(args[0]) ? args[0] : !utils_1.isNumber(args[1]) ? args[1] : undefined;
        return args.length
            ? utils_1.getFirstMatches(collection, n, getter ? this.$parse(getter) : getter)
            : collection[0];
    };
    return FirstPipe;
}());
FirstPipe = __decorate([
    core_1.Pipe({
        name: 'first'
    }),
    __metadata("design:paramtypes", [])
], FirstPipe);
exports.FirstPipe = FirstPipe;
//# sourceMappingURL=first.pipe.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var FlattenPipe = (function () {
    function FlattenPipe() {
    }
    FlattenPipe.prototype.transform = function (collection, shallow) {
        if (shallow === void 0) { shallow = false; }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        return shallow
            ? [].concat.apply([], collection)
            : this.flatten(collection);
    };
    FlattenPipe.prototype.flatten = function (array) {
        var _this = this;
        return array.reduce(function (arr, elm) { return elm instanceof Array ?
            arr.concat(_this.flatten(elm)) : arr.concat(elm); }, []);
    };
    return FlattenPipe;
}());
FlattenPipe = __decorate([
    core_1.Pipe({
        name: 'flatten'
    })
], FlattenPipe);
exports.FlattenPipe = FlattenPipe;
//# sourceMappingURL=flatten.pipe.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var FuzzyByPipe = (function () {
    function FuzzyByPipe() {
        this.$parse = parse_1.Parse();
    }
    FuzzyByPipe.prototype.transform = function (collection, property, search, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection) || utils_1.isUndefined(search)) {
            return collection;
        }
        var getter = this.$parse(property);
        return collection.filter(function (elm) {
            var prop = getter(elm);
            if (!utils_1.isString(prop)) {
                return false;
            }
            if (!csensitive) {
                prop = prop.toLowerCase();
                search = search.toLowerCase();
            }
            return utils_1.hasApproxPattern(prop, search) !== false;
        });
    };
    return FuzzyByPipe;
}());
FuzzyByPipe = __decorate([
    core_1.Pipe({
        name: 'fuzzyBy'
    }),
    __metadata("design:paramtypes", [])
], FuzzyByPipe);
exports.FuzzyByPipe = FuzzyByPipe;
//# sourceMappingURL=fuzzy-by.pipe.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var FuzzyPipe = (function () {
    function FuzzyPipe() {
    }
    FuzzyPipe.prototype.transform = function (collection, search, csensitive) {
        var _this = this;
        if (csensitive === void 0) { csensitive = false; }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection) || utils_1.isUndefined(search)) {
            return collection;
        }
        if (!csensitive) {
            search = search.toLowerCase();
        }
        return collection.filter(function (elm) {
            if (utils_1.isString(elm)) {
                if (!csensitive) {
                    elm = elm.toLowerCase();
                }
                return utils_1.hasApproxPattern(elm, search);
            }
            return utils_1.isObject(elm) ? _this.hasApproximateKey(elm, search, csensitive) : false;
        });
    };
    FuzzyPipe.prototype.hasApproximateKey = function (object, search, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        return Object.keys(object).some(function (elm) {
            var prop = object[elm];
            if (!utils_1.isString(prop)) {
                return false;
            }
            if (!csensitive) {
                prop = prop.toLowerCase();
            }
            return utils_1.hasApproxPattern(prop, search);
        });
    };
    return FuzzyPipe;
}());
FuzzyPipe = __decorate([
    core_1.Pipe({
        name: 'fuzzy'
    })
], FuzzyPipe);
exports.FuzzyPipe = FuzzyPipe;
//# sourceMappingURL=fuzzy.pipe.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var GroupByPipe = (function () {
    function GroupByPipe() {
        this.$parse = parse_1.Parse();
    }
    GroupByPipe.prototype.transform = function (collection, prop) {
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        var result = {}, getter = this.$parse(prop);
        collection.forEach(function (elm) {
            var prop = getter(elm);
            if (utils_1.isUndefined(result[prop])) {
                result[prop] = [];
            }
            result[prop].push(elm);
        });
        return result;
    };
    return GroupByPipe;
}());
GroupByPipe = __decorate([
    core_1.Pipe({
        name: 'groupBy'
    }),
    __metadata("design:paramtypes", [])
], GroupByPipe);
exports.GroupByPipe = GroupByPipe;
//# sourceMappingURL=group-by.pipe.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var IsEmptyPipe = (function () {
    function IsEmptyPipe() {
    }
    IsEmptyPipe.prototype.transform = function (collection) {
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        return utils_1.isArray(collection) ? collection.length : 0;
    };
    return IsEmptyPipe;
}());
IsEmptyPipe = __decorate([
    core_1.Pipe({
        name: 'isEmpty'
    })
], IsEmptyPipe);
exports.IsEmptyPipe = IsEmptyPipe;
//# sourceMappingURL=is-empty.pipe.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var JoinPipe = (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (collection, delimiter) {
        if (delimiter === void 0) { delimiter = ' '; }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        return collection.join(String(delimiter));
    };
    return JoinPipe;
}());
JoinPipe = __decorate([
    core_1.Pipe({
        name: 'join'
    })
], JoinPipe);
exports.JoinPipe = JoinPipe;
//# sourceMappingURL=join.pipe.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var LastPipe = (function () {
    function LastPipe() {
        this.$parse = parse_1.Parse();
    }
    LastPipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        collection = collection.slice().reverse();
        var n = utils_1.isNumber(args[0]) ? args[0] : 1, getter = !utils_1.isNumber(args[0]) ? args[0] : !utils_1.isNumber(args[1]) ? args[1] : undefined;
        return args.length
            ? utils_1.getFirstMatches(collection, n, getter ? this.$parse(getter) : getter).reverse()
            : collection[0];
    };
    return LastPipe;
}());
LastPipe = __decorate([
    core_1.Pipe({
        name: 'last'
    }),
    __metadata("design:paramtypes", [])
], LastPipe);
exports.LastPipe = LastPipe;
//# sourceMappingURL=last.pipe.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var MapPipe = (function () {
    function MapPipe() {
        this.$parse = parse_1.Parse();
    }
    MapPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        return collection.map(function (e) { return _this.$parse(predicate)(e); });
    };
    return MapPipe;
}());
MapPipe = __decorate([
    core_1.Pipe({
        name: 'map'
    }),
    __metadata("design:paramtypes", [])
], MapPipe);
exports.MapPipe = MapPipe;
//# sourceMappingURL=map.pipe.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var OmitPipe = (function () {
    function OmitPipe() {
        this.$parse = parse_1.Parse();
    }
    OmitPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        return collection.filter(function (e) { return !_this.$parse(predicate)(e); });
    };
    return OmitPipe;
}());
OmitPipe = __decorate([
    core_1.Pipe({
        name: 'omit'
    }),
    __metadata("design:paramtypes", [])
], OmitPipe);
exports.OmitPipe = OmitPipe;
//# sourceMappingURL=omit.pipe.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var parse_1 = __webpack_require__(2);
var OrderByPipe = (function () {
    function OrderByPipe() {
        this.$parse = parse_1.Parse();
    }
    OrderByPipe.prototype.transform = function (array) {
        var _this = this;
        var attrs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            attrs[_i - 1] = arguments[_i];
        }
        // generate an array of predicate-objects contains
        // property getter, and descending indicator
        var predicates = attrs.map(function (pred) {
            var descending = pred.charAt(0) === '-' ? -1 : 1;
            pred = pred.replace(/^-/, '');
            return {
                getter: function (o) { return _this.$parse(pred)(o); },
                descend: descending
            };
        });
        // schwartzian transform idiom implementation. aka: "decorate-sort-undecorate"
        return array.map(function (item) {
            return {
                src: item,
                compareValues: predicates.map(function (predicate) { return predicate.getter(item); })
            };
        })
            .sort(function (o1, o2) {
            var i = -1, result = 0;
            while (++i < predicates.length) {
                if (o1.compareValues[i] < o2.compareValues[i])
                    result = -1;
                if (o1.compareValues[i] > o2.compareValues[i])
                    result = 1;
                if (result *= predicates[i].descend)
                    break;
            }
            return result;
        })
            .map(function (item) { return item.src; });
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    core_1.Pipe({
        name: 'orderBy'
    }),
    __metadata("design:paramtypes", [])
], OrderByPipe);
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=order-by.pipe.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var PickPipe = (function () {
    function PickPipe() {
        this.$parse = parse_1.Parse();
    }
    PickPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection)) {
            return collection;
        }
        return collection.filter(function (e) { return _this.$parse(predicate)(e); });
    };
    return PickPipe;
}());
PickPipe = __decorate([
    core_1.Pipe({
        name: 'pick'
    }),
    __metadata("design:paramtypes", [])
], PickPipe);
exports.PickPipe = PickPipe;
//# sourceMappingURL=pick.pipe.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var RangePipe = (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (input, total, start, increment, cb) {
        if (total === void 0) { total = 0; }
        if (start === void 0) { start = 0; }
        if (increment === void 0) { increment = 1; }
        for (var i = 0; i < total; i++) {
            var j = start + i * increment;
            input.push(utils_1.isFunction(cb) ? cb(j) : j);
        }
        return input;
    };
    return RangePipe;
}());
RangePipe = __decorate([
    core_1.Pipe({
        name: 'range'
    })
], RangePipe);
exports.RangePipe = RangePipe;
//# sourceMappingURL=range.pipe.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var RemoveWithPipe = (function () {
    function RemoveWithPipe() {
    }
    RemoveWithPipe.prototype.transform = function (collection, object) {
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection) || utils_1.isUndefined(object)) {
            return collection;
        }
        return collection.filter(function (e) { return !utils_1.objectContains(object, e); });
    };
    return RemoveWithPipe;
}());
RemoveWithPipe = __decorate([
    core_1.Pipe({
        name: 'removeWith'
    })
], RemoveWithPipe);
exports.RemoveWithPipe = RemoveWithPipe;
//# sourceMappingURL=remove-with.pipe.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var RemovePipe = (function () {
    function RemovePipe() {
    }
    RemovePipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        return collection.filter(function (e) {
            return !args.some(function (c) { return utils_1.equals(c, e); });
        });
    };
    return RemovePipe;
}());
RemovePipe = __decorate([
    core_1.Pipe({
        name: 'remove'
    })
], RemovePipe);
exports.RemovePipe = RemovePipe;
//# sourceMappingURL=remove.pipe.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (input) {
        if (utils_1.isString(input)) {
            return input.split('').reverse().join('');
        }
        return utils_1.isArray(input) ? input.slice().reverse() : input;
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    core_1.Pipe({
        name: 'reverse'
    })
], ReversePipe);
exports.ReversePipe = ReversePipe;
//# sourceMappingURL=reverse.pipe.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var SearchFieldPipe = (function () {
    function SearchFieldPipe() {
        this.$parse = parse_1.Parse();
    }
    SearchFieldPipe.prototype.transform = function (collection) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!utils_1.isArray(collection) || !args.length) {
            return collection;
        }
        return collection.map(function (member) {
            var field = args.map(function (field) { return _this.$parse(field)(member); }).join(' ');
            member.searchField = field;
            return member;
        });
    };
    return SearchFieldPipe;
}());
SearchFieldPipe = __decorate([
    core_1.Pipe({
        name: 'searchField'
    }),
    __metadata("design:paramtypes", [])
], SearchFieldPipe);
exports.SearchFieldPipe = SearchFieldPipe;
//# sourceMappingURL=search-field.pipe.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var ToArrayPipe = (function () {
    function ToArrayPipe() {
    }
    ToArrayPipe.prototype.transform = function (collection, addKey) {
        if (addKey === void 0) { addKey = false; }
        if (!utils_1.isObject(collection)) {
            return collection;
        }
        return addKey
            ? Object.keys(collection).map(function (key) {
                // TODO: object.assign polyfill
                var o = collection[key];
                o.$key = key;
                return o;
            })
            : utils_1.toArray(collection);
    };
    return ToArrayPipe;
}());
ToArrayPipe = __decorate([
    core_1.Pipe({
        name: 'toArray'
    })
], ToArrayPipe);
exports.ToArrayPipe = ToArrayPipe;
//# sourceMappingURL=to-array.pipe.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var UniqPipe = (function () {
    function UniqPipe() {
        this.$parse = parse_1.Parse();
    }
    UniqPipe.prototype.transform = function (collection, predicate) {
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (utils_1.isUndefined(predicate)) {
            return collection.filter(function (e, i, self) { return self.indexOf(e) == i; });
        }
        var getter = this.$parse(predicate), uniqueItems = [];
        return collection.filter(function (e) {
            var v = getter(e);
            if (!utils_1.isUndefined(v) && uniqueItems.some(function (ue) { return ue === v; })) {
                return false;
            }
            uniqueItems.push(v);
            return true;
        });
    };
    return UniqPipe;
}());
UniqPipe = __decorate([
    core_1.Pipe({
        name: 'uniq'
    }),
    __metadata("design:paramtypes", [])
], UniqPipe);
exports.UniqPipe = UniqPipe;
//# sourceMappingURL=uniq.pipe.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var WherePipe = (function () {
    function WherePipe() {
    }
    WherePipe.prototype.transform = function (collection, object) {
        if (!utils_1.isArray(collection)) {
            collection = utils_1.toArray(collection);
        }
        if (!utils_1.isArray(collection) || utils_1.isUndefined(object)) {
            return collection;
        }
        return collection.filter(function (e) { return utils_1.objectContains(object, e); });
    };
    return WherePipe;
}());
WherePipe = __decorate([
    core_1.Pipe({
        name: 'where'
    })
], WherePipe);
exports.WherePipe = WherePipe;
//# sourceMappingURL=where.pipe.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var XORPipe = (function () {
    function XORPipe() {
        this.$parse = parse_1.Parse();
    }
    XORPipe.prototype.transform = function (col1, col2, predicate) {
        var _this = this;
        col1 = !utils_1.isArray(col1) ? utils_1.toArray(col1) : col1;
        col2 = !utils_1.isArray(col2) ? utils_1.toArray(col2) : col2;
        if (!utils_1.isArray(col1) || !utils_1.isArray(col2)) {
            return col1;
        }
        return col1.concat(col2)
            .filter(function (elm) {
            return !(_this.some(elm, col1, predicate) && _this.some(elm, col2, predicate));
        });
    };
    // TODO: add equlity check using "equals()" instead of ===
    XORPipe.prototype.some = function (el, col, predicate) {
        var getter = this.$parse(predicate);
        return col.some(function (dElm) {
            if (utils_1.isUndefined(predicate)) {
                return dElm === el;
            }
            return getter(dElm) === getter(el);
        });
    };
    return XORPipe;
}());
XORPipe = __decorate([
    core_1.Pipe({
        name: 'xor'
    }),
    __metadata("design:paramtypes", [])
], XORPipe);
exports.XORPipe = XORPipe;
//# sourceMappingURL=xor.pipe.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var AbsPipe = (function () {
    function AbsPipe() {
    }
    AbsPipe.prototype.transform = function (input) {
        return Math.abs(Number(input));
    };
    return AbsPipe;
}());
AbsPipe = __decorate([
    core_1.Pipe({
        name: 'abs'
    })
], AbsPipe);
exports.AbsPipe = AbsPipe;
//# sourceMappingURL=abs.pipe.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var ByteFmtPipe = (function () {
    function ByteFmtPipe() {
        var _this = this;
        this.compared = [{ str: 'B', val: 1024 }];
        ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function (el, i) {
            _this.compared.push({ str: el, val: _this.compared[i].val * 1024 });
        });
    }
    ByteFmtPipe.prototype.transform = function (bytes, decimal) {
        if (utils_1.isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            utils_1.isNumber(bytes) && isFinite(bytes)) {
            var i = 0;
            while (i < this.compared.length - 1 && bytes >= this.compared[i].val)
                i++;
            bytes /= i > 0 ? this.compared[i - 1].val : 1;
            return utils_1.convertToDecimal(bytes, decimal) + ' ' + this.compared[i].str;
        }
        return 'NaN';
    };
    return ByteFmtPipe;
}());
ByteFmtPipe = __decorate([
    core_1.Pipe({
        name: 'byteFmt'
    }),
    __metadata("design:paramtypes", [])
], ByteFmtPipe);
exports.ByteFmtPipe = ByteFmtPipe;
//# sourceMappingURL=byte-fmt.pipe.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var DegreesPipe = (function () {
    function DegreesPipe() {
    }
    DegreesPipe.prototype.transform = function (radians, decimal) {
        // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
        // if degrees is not a real number, we cannot do also. quit with error "NaN"
        if (utils_1.isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            utils_1.isNumber(radians) && isFinite(radians)) {
            var degrees = (radians * 180) / Math.PI;
            return Math.round(degrees * Math.pow(10, decimal)) / (Math.pow(10, decimal));
        }
        else {
            return NaN;
        }
    };
    return DegreesPipe;
}());
DegreesPipe = __decorate([
    core_1.Pipe({
        name: 'degrees'
    })
], DegreesPipe);
exports.DegreesPipe = DegreesPipe;
//# sourceMappingURL=degrees.pipe.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var KBFmtPipe = (function () {
    function KBFmtPipe() {
        var _this = this;
        this.compared = [{ str: 'KB', val: 1024 }];
        ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function (el, i) {
            _this.compared.push({ str: el, val: _this.compared[i].val * 1024 });
        });
    }
    KBFmtPipe.prototype.transform = function (bytes, decimal) {
        if (utils_1.isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            utils_1.isNumber(bytes) && isFinite(bytes)) {
            var i = 0;
            while (i < this.compared.length - 1 && bytes >= this.compared[i].val)
                i++;
            bytes /= i > 0 ? this.compared[i - 1].val : 1;
            return utils_1.convertToDecimal(bytes, decimal) + ' ' + this.compared[i].str;
        }
        return 'NaN';
    };
    return KBFmtPipe;
}());
KBFmtPipe = __decorate([
    core_1.Pipe({
        name: 'kbFmt'
    }),
    __metadata("design:paramtypes", [])
], KBFmtPipe);
exports.KBFmtPipe = KBFmtPipe;
//# sourceMappingURL=kb-fmt.pipe.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var MaxPipe = (function () {
    function MaxPipe() {
        this.$parse = parse_1.Parse();
    }
    MaxPipe.prototype.transform = function (input, predicate) {
        return utils_1.isUndefined(predicate)
            ? Math.max.apply(Math, input)
            : input[this.index(input, this.$parse(predicate))];
    };
    MaxPipe.prototype.index = function (input, fn) {
        var mappedArray = input.map(function (elm) { return fn(elm) || -Infinity; });
        return mappedArray.indexOf(Math.max.apply(Math, mappedArray));
    };
    return MaxPipe;
}());
MaxPipe = __decorate([
    core_1.Pipe({
        name: 'max'
    }),
    __metadata("design:paramtypes", [])
], MaxPipe);
exports.MaxPipe = MaxPipe;
//# sourceMappingURL=max.pipe.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(2);
var MinPipe = (function () {
    function MinPipe() {
        this.$parse = parse_1.Parse();
    }
    MinPipe.prototype.transform = function (input, predicate) {
        return utils_1.isUndefined(predicate)
            ? Math.min.apply(Math, input)
            : input[this.index(input, this.$parse(predicate))];
    };
    MinPipe.prototype.index = function (input, fn) {
        var mappedArray = input.map(function (elm) { return fn(elm) || Infinity; });
        return mappedArray.indexOf(Math.min.apply(Math, mappedArray));
    };
    return MinPipe;
}());
MinPipe = __decorate([
    core_1.Pipe({
        name: 'min'
    }),
    __metadata("design:paramtypes", [])
], MinPipe);
exports.MinPipe = MinPipe;
//# sourceMappingURL=min.pipe.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var PercentPipe = (function () {
    function PercentPipe() {
    }
    PercentPipe.prototype.transform = function (input, divided, round) {
        if (divided === void 0) { divided = 100; }
        if (round === void 0) { round = false; }
        var divider = input;
        if (utils_1.isString(input)) {
            divider = Number(input);
        }
        if (!utils_1.isNumber(divider) || isNaN(divider)) {
            return input;
        }
        return round
            ? Math.round((divider / divided) * 100)
            : (divider / divided) * 100;
    };
    return PercentPipe;
}());
PercentPipe = __decorate([
    core_1.Pipe({
        name: 'percent'
    })
], PercentPipe);
exports.PercentPipe = PercentPipe;
//# sourceMappingURL=percent.pipe.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var RadiansPipe = (function () {
    function RadiansPipe() {
    }
    RadiansPipe.prototype.transform = function (degrees, decimal) {
        // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
        // if degrees is not a real number, we cannot do also. quit with error "NaN"
        if (utils_1.isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            utils_1.isNumber(degrees) && isFinite(degrees)) {
            var radians = (degrees * 3.14159265359) / 180;
            return Math.round(radians * Math.pow(10, decimal)) / (Math.pow(10, decimal));
        }
        return NaN;
    };
    return RadiansPipe;
}());
RadiansPipe = __decorate([
    core_1.Pipe({
        name: 'radians'
    })
], RadiansPipe);
exports.RadiansPipe = RadiansPipe;
//# sourceMappingURL=radians.pipe.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var RadixPipe = (function () {
    function RadixPipe() {
    }
    RadixPipe.prototype.transform = function (input, radix) {
        var RANGE = /^[2-9]$|^[1-2]\d$|^3[0-6]$/;
        if (!utils_1.isNumber(input) || !RANGE.test(radix.toString())) {
            return input;
        }
        return input.toString(radix).toUpperCase();
    };
    return RadixPipe;
}());
RadixPipe = __decorate([
    core_1.Pipe({
        name: 'radix'
    })
], RadixPipe);
exports.RadixPipe = RadixPipe;
//# sourceMappingURL=radix.pipe.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var ShortFmtPipe = (function () {
    function ShortFmtPipe() {
    }
    ShortFmtPipe.prototype.transform = function (number, decimal) {
        if (utils_1.isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            utils_1.isNumber(number) && isFinite(number)) {
            if (number < 1e3) {
                return '' + number; // Coerce to string
            }
            else if (number < 1e6) {
                return utils_1.convertToDecimal((number / 1e3), decimal) + ' K';
            }
            else if (number < 1e9) {
                return utils_1.convertToDecimal((number / 1e6), decimal) + ' M';
            }
            else {
                return utils_1.convertToDecimal((number / 1e9), decimal) + ' B';
            }
        }
        return 'NaN';
    };
    return ShortFmtPipe;
}());
ShortFmtPipe = __decorate([
    core_1.Pipe({
        name: 'shortFmt'
    })
], ShortFmtPipe);
exports.ShortFmtPipe = ShortFmtPipe;
//# sourceMappingURL=short-fmt.pipe.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var SumPipe = (function () {
    function SumPipe() {
    }
    SumPipe.prototype.transform = function (array, initial) {
        if (initial === void 0) { initial = 0; }
        if (!utils_1.isArray(array)) {
            return array;
        }
        return array.reduce(function (prev, curr) {
            return prev + curr;
        }, initial);
    };
    return SumPipe;
}());
SumPipe = __decorate([
    core_1.Pipe({
        name: 'sum'
    })
], SumPipe);
exports.SumPipe = SumPipe;
//# sourceMappingURL=sum.pipe.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var EndsWithPipe = (function () {
    function EndsWithPipe() {
    }
    EndsWithPipe.prototype.transform = function (input, ends, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        if (ends == '') {
            return true;
        }
        if (!csensitive) {
            input = input.toLowerCase();
            ends = ends.toLowerCase();
        }
        return input.substring(input.length - ends.length) == ends;
    };
    return EndsWithPipe;
}());
EndsWithPipe = __decorate([
    core_1.Pipe({
        name: 'endsWith'
    })
], EndsWithPipe);
exports.EndsWithPipe = EndsWithPipe;
//# sourceMappingURL=ends-with.pipe.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var LatinizePipe = (function () {
    function LatinizePipe() {
        var defaultDiacriticsRemovalap = [
            { 'base': 'A', 'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' },
            { 'base': 'AA', 'letters': '\uA732' },
            { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' },
            { 'base': 'AO', 'letters': '\uA734' },
            { 'base': 'AU', 'letters': '\uA736' },
            { 'base': 'AV', 'letters': '\uA738\uA73A' },
            { 'base': 'AY', 'letters': '\uA73C' },
            { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' },
            { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' },
            { 'base': 'D', 'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779' },
            { 'base': 'DZ', 'letters': '\u01F1\u01C4' },
            { 'base': 'Dz', 'letters': '\u01F2\u01C5' },
            { 'base': 'E', 'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' },
            { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' },
            { 'base': 'G', 'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' },
            { 'base': 'H', 'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' },
            { 'base': 'I', 'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' },
            { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' },
            { 'base': 'K', 'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' },
            { 'base': 'L', 'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' },
            { 'base': 'LJ', 'letters': '\u01C7' },
            { 'base': 'Lj', 'letters': '\u01C8' },
            { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' },
            { 'base': 'N', 'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' },
            { 'base': 'NJ', 'letters': '\u01CA' },
            { 'base': 'Nj', 'letters': '\u01CB' },
            { 'base': 'O', 'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C' },
            { 'base': 'OI', 'letters': '\u01A2' },
            { 'base': 'OO', 'letters': '\uA74E' },
            { 'base': 'OU', 'letters': '\u0222' },
            { 'base': 'OE', 'letters': '\u008C\u0152' },
            { 'base': 'oe', 'letters': '\u009C\u0153' },
            { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' },
            { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' },
            { 'base': 'R', 'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' },
            { 'base': 'S', 'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' },
            { 'base': 'T', 'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' },
            { 'base': 'TZ', 'letters': '\uA728' },
            { 'base': 'U', 'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' },
            { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' },
            { 'base': 'VY', 'letters': '\uA760' },
            { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' },
            { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' },
            { 'base': 'Y', 'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' },
            { 'base': 'Z', 'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' },
            { 'base': 'a', 'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' },
            { 'base': 'aa', 'letters': '\uA733' },
            { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' },
            { 'base': 'ao', 'letters': '\uA735' },
            { 'base': 'au', 'letters': '\uA737' },
            { 'base': 'av', 'letters': '\uA739\uA73B' },
            { 'base': 'ay', 'letters': '\uA73D' },
            { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' },
            { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' },
            { 'base': 'd', 'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' },
            { 'base': 'dz', 'letters': '\u01F3\u01C6' },
            { 'base': 'e', 'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' },
            { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' },
            { 'base': 'g', 'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' },
            { 'base': 'h', 'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' },
            { 'base': 'hv', 'letters': '\u0195' },
            { 'base': 'i', 'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' },
            { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' },
            { 'base': 'k', 'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' },
            { 'base': 'l', 'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' },
            { 'base': 'lj', 'letters': '\u01C9' },
            { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' },
            { 'base': 'n', 'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' },
            { 'base': 'nj', 'letters': '\u01CC' },
            { 'base': 'o', 'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275' },
            { 'base': 'oi', 'letters': '\u01A3' },
            { 'base': 'ou', 'letters': '\u0223' },
            { 'base': 'oo', 'letters': '\uA74F' },
            { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' },
            { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' },
            { 'base': 'r', 'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' },
            { 'base': 's', 'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' },
            { 'base': 't', 'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' },
            { 'base': 'tz', 'letters': '\uA729' },
            { 'base': 'u', 'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' },
            { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' },
            { 'base': 'vy', 'letters': '\uA761' },
            { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' },
            { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' },
            { 'base': 'y', 'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' },
            { 'base': 'z', 'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }
        ];
        this.diacriticsMap = {};
        for (var i = 0; i < defaultDiacriticsRemovalap.length; i += 1) {
            var letters = defaultDiacriticsRemovalap[i].letters.split('');
            for (var j = 0; j < letters.length; j += 1) {
                this.diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
            }
        }
    }
    LatinizePipe.prototype.transform = function (input) {
        var _this = this;
        return input.replace(/[^\u0000-\u007E]/g, function (a) { return _this.diacriticsMap[a] || a; });
    };
    return LatinizePipe;
}());
LatinizePipe = __decorate([
    core_1.Pipe({
        name: 'latinize'
    }),
    __metadata("design:paramtypes", [])
], LatinizePipe);
exports.LatinizePipe = LatinizePipe;
//# sourceMappingURL=latinize.pipe.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var LeftTrimPipe = (function () {
    function LeftTrimPipe() {
    }
    LeftTrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp('^' + chars + '+'), '');
    };
    return LeftTrimPipe;
}());
LeftTrimPipe = __decorate([
    core_1.Pipe({
        name: 'ltrim'
    })
], LeftTrimPipe);
exports.LeftTrimPipe = LeftTrimPipe;
//# sourceMappingURL=ltrim.pipe.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var MatchPipe = (function () {
    function MatchPipe() {
    }
    MatchPipe.prototype.transform = function (input, pattern, flag) {
        return input.match(new RegExp(pattern, flag));
    };
    return MatchPipe;
}());
MatchPipe = __decorate([
    core_1.Pipe({
        name: 'match'
    })
], MatchPipe);
exports.MatchPipe = MatchPipe;
//# sourceMappingURL=match.pipe.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var RepeatPipe = (function () {
    function RepeatPipe() {
    }
    RepeatPipe.prototype.transform = function (input, times, separator) {
        if (times === void 0) { times = 1; }
        if (separator === void 0) { separator = ''; }
        var ret = input;
        while (--times) {
            ret += separator + input;
        }
        return ret;
    };
    return RepeatPipe;
}());
RepeatPipe = __decorate([
    core_1.Pipe({
        name: 'repeat'
    })
], RepeatPipe);
exports.RepeatPipe = RepeatPipe;
//# sourceMappingURL=repeat.pipe.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var RightTrimPipe = (function () {
    function RightTrimPipe() {
    }
    RightTrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp(chars + '+$'), '');
    };
    return RightTrimPipe;
}());
RightTrimPipe = __decorate([
    core_1.Pipe({
        name: 'rtrim'
    })
], RightTrimPipe);
exports.RightTrimPipe = RightTrimPipe;
//# sourceMappingURL=rtrim.pipe.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var SlugifyPipe = (function () {
    function SlugifyPipe() {
    }
    SlugifyPipe.prototype.transform = function (input, sub) {
        if (sub === void 0) { sub = '-'; }
        return input.toLowerCase().replace(/\s+/g, sub);
    };
    return SlugifyPipe;
}());
SlugifyPipe = __decorate([
    core_1.Pipe({
        name: 'slugify'
    })
], SlugifyPipe);
exports.SlugifyPipe = SlugifyPipe;
//# sourceMappingURL=slugify.pipe.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var StartsWithPipe = (function () {
    function StartsWithPipe() {
    }
    StartsWithPipe.prototype.transform = function (input, ends, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        if (ends == '') {
            return true;
        }
        if (!csensitive) {
            input = input.toLowerCase();
            ends = ends.toLowerCase();
        }
        return input.substring(0, ends.length) == ends;
    };
    return StartsWithPipe;
}());
StartsWithPipe = __decorate([
    core_1.Pipe({
        name: 'startsWith'
    })
], StartsWithPipe);
exports.StartsWithPipe = StartsWithPipe;
//# sourceMappingURL=starts-with.pipe.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var StringularPipe = (function () {
    function StringularPipe() {
    }
    StringularPipe.prototype.transform = function (template) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return template.replace(/{(\d+)}/g, function (match, number) {
            return utils_1.isUndefined(args[number]) ? match : args[number];
        });
    };
    return StringularPipe;
}());
StringularPipe = __decorate([
    core_1.Pipe({
        name: 'stringular'
    })
], StringularPipe);
exports.StringularPipe = StringularPipe;
//# sourceMappingURL=stringular.pipe.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var StripTagsPipe = (function () {
    function StripTagsPipe() {
    }
    StripTagsPipe.prototype.transform = function (input) {
        return input.replace(/<\S[^><]*>/g, '');
    };
    return StripTagsPipe;
}());
StripTagsPipe = __decorate([
    core_1.Pipe({
        name: 'stripTags'
    })
], StripTagsPipe);
exports.StripTagsPipe = StripTagsPipe;
//# sourceMappingURL=strip-tags.pipe.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var TestPipe = (function () {
    function TestPipe() {
    }
    TestPipe.prototype.transform = function (input, pattern, flag) {
        return new RegExp(pattern, flag).test(input);
    };
    return TestPipe;
}());
TestPipe = __decorate([
    core_1.Pipe({
        name: 'test'
    })
], TestPipe);
exports.TestPipe = TestPipe;
//# sourceMappingURL=test.pipe.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var TitleizePipe = (function () {
    function TitleizePipe() {
    }
    TitleizePipe.prototype.transform = function (input) {
        return input.split(' ')
            .map(function (w) { return w.charAt(0).toUpperCase() + w.substring(1).toLowerCase(); })
            .join(' ');
    };
    return TitleizePipe;
}());
TitleizePipe = __decorate([
    core_1.Pipe({
        name: 'titleize'
    })
], TitleizePipe);
exports.TitleizePipe = TitleizePipe;
//# sourceMappingURL=titleize.pipe.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var TrimPipe = (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp('^' + chars + '+|' + chars + '+$', 'g'), '');
    };
    return TrimPipe;
}());
TrimPipe = __decorate([
    core_1.Pipe({
        name: 'trim'
    })
], TrimPipe);
exports.TrimPipe = TrimPipe;
//# sourceMappingURL=trim.pipe.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(1);
var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (input, length, suffix, preserve) {
        if (suffix === void 0) { suffix = ''; }
        if (preserve === void 0) { preserve = false; }
        if (utils_1.isUndefined(length) || length >= input.length) {
            return input;
        }
        return input.substring(0, preserve
            ? (input.indexOf(' ', length) == -1 ? input.length : input.indexOf(' ', length))
            : length) + suffix;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    core_1.Pipe({
        name: 'truncate'
    })
], TruncatePipe);
exports.TruncatePipe = TruncatePipe;
//# sourceMappingURL=truncate.pipe.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var UcfirstPipe = (function () {
    function UcfirstPipe() {
    }
    UcfirstPipe.prototype.transform = function (input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
    return UcfirstPipe;
}());
UcfirstPipe = __decorate([
    core_1.Pipe({
        name: 'ucfirst'
    })
], UcfirstPipe);
exports.UcfirstPipe = UcfirstPipe;
//# sourceMappingURL=ucfirst.pipe.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var UriComponentEncodePipe = (function () {
    function UriComponentEncodePipe() {
    }
    UriComponentEncodePipe.prototype.transform = function (input) {
        return encodeURIComponent(input);
    };
    return UriComponentEncodePipe;
}());
UriComponentEncodePipe = __decorate([
    core_1.Pipe({
        name: 'uriComponentEncode'
    })
], UriComponentEncodePipe);
exports.UriComponentEncodePipe = UriComponentEncodePipe;
//# sourceMappingURL=uri-component-encode.pipe.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var UriEncodePipe = (function () {
    function UriEncodePipe() {
    }
    UriEncodePipe.prototype.transform = function (input) {
        return encodeURI(input);
    };
    return UriEncodePipe;
}());
UriEncodePipe = __decorate([
    core_1.Pipe({
        name: 'uriEncode'
    })
], UriEncodePipe);
exports.UriEncodePipe = UriEncodePipe;
//# sourceMappingURL=uri-encode.pipe.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var WrapPipe = (function () {
    function WrapPipe() {
    }
    WrapPipe.prototype.transform = function (input, wrap, ends) {
        if (wrap === void 0) { wrap = ''; }
        if (ends === void 0) { ends = ''; }
        return '' + wrap + input + (ends || wrap);
    };
    return WrapPipe;
}());
WrapPipe = __decorate([
    core_1.Pipe({
        name: 'wrap'
    })
], WrapPipe);
exports.WrapPipe = WrapPipe;
//# sourceMappingURL=wrap.pipe.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(0);
var math_1 = __webpack_require__(5);
var string_1 = __webpack_require__(6);
var boolean_1 = __webpack_require__(3);
var collection_1 = __webpack_require__(4);
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
var NgPipesModule = (function () {
    function NgPipesModule() {
    }
    return NgPipesModule;
}());
NgPipesModule = __decorate([
    core_1.NgModule({
        exports: [
            math_1.MathPipesModule,
            string_1.StringPipesModule,
            boolean_1.BooleanPipesModule,
            collection_1.CollectionPipesModule,
        ]
    })
], NgPipesModule);
exports.NgPipesModule = NgPipesModule;
//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
});