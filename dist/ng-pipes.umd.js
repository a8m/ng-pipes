(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.pipes = global.ng.pipes || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

exports.AbsPipe = (function () {
    function AbsPipe() {
    }
    AbsPipe.prototype.transform = function (input) {
        return Math.abs(Number(input));
    };
    return AbsPipe;
}());
exports.AbsPipe = __decorate([
    _angular_core.Pipe({
        name: 'abs'
    })
], exports.AbsPipe);

function isUndefined(value) {
    return typeof value === 'undefined';
}
function isNull(value) {
    return value === null;
}
function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
function isObject(value) {
    return typeof value === 'object';
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function toArray(object) {
    return isArray(object) ? object : Object.keys(object).map(function (key) {
        return object[key];
    });
}
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
function objectContains(partial, object) {
    return Object.keys(partial).every(function (key) {
        return key in object && object[key] == partial[key];
    });
}
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
function convertToDecimal(num, decimal) {
    return Math.round(num * Math.pow(10, decimal)) / (Math.pow(10, decimal));
}

exports.ByteFmtPipe = (function () {
    function ByteFmtPipe() {
        var _this = this;
        this.compared = [{ str: 'B', val: 1024 }];
        ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function (el, i) {
            _this.compared.push({ str: el, val: _this.compared[i].val * 1024 });
        });
    }
    ByteFmtPipe.prototype.transform = function (bytes, decimal) {
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(bytes) && isFinite(bytes)) {
            var i = 0;
            while (i < this.compared.length - 1 && bytes >= this.compared[i].val)
                i++;
            bytes /= i > 0 ? this.compared[i - 1].val : 1;
            return convertToDecimal(bytes, decimal) + ' ' + this.compared[i].str;
        }
        return 'NaN';
    };
    return ByteFmtPipe;
}());
exports.ByteFmtPipe = __decorate([
    _angular_core.Pipe({
        name: 'byteFmt'
    }),
    __metadata("design:paramtypes", [])
], exports.ByteFmtPipe);

exports.KBFmtPipe = (function () {
    function KBFmtPipe() {
        var _this = this;
        this.compared = [{ str: 'KB', val: 1024 }];
        ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach(function (el, i) {
            _this.compared.push({ str: el, val: _this.compared[i].val * 1024 });
        });
    }
    KBFmtPipe.prototype.transform = function (bytes, decimal) {
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(bytes) && isFinite(bytes)) {
            var i = 0;
            while (i < this.compared.length - 1 && bytes >= this.compared[i].val)
                i++;
            bytes /= i > 0 ? this.compared[i - 1].val : 1;
            return convertToDecimal(bytes, decimal) + ' ' + this.compared[i].str;
        }
        return 'NaN';
    };
    return KBFmtPipe;
}());
exports.KBFmtPipe = __decorate([
    _angular_core.Pipe({
        name: 'kbFmt'
    }),
    __metadata("design:paramtypes", [])
], exports.KBFmtPipe);

exports.DegreesPipe = (function () {
    function DegreesPipe() {
    }
    DegreesPipe.prototype.transform = function (radians, decimal) {
        // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
        // if degrees is not a real number, we cannot do also. quit with error "NaN"
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(radians) && isFinite(radians)) {
            var degrees = (radians * 180) / Math.PI;
            return Math.round(degrees * Math.pow(10, decimal)) / (Math.pow(10, decimal));
        }
        else {
            return NaN;
        }
    };
    return DegreesPipe;
}());
exports.DegreesPipe = __decorate([
    _angular_core.Pipe({
        name: 'degrees'
    })
], exports.DegreesPipe);

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
        if (isUndefined(s[path[i]]) && i < path.length - 1) {
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
        if (isString(exp)) {
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
        else if (isFunction(exp)) {
            fn = function (scope, local) {
                return exp(scope, local);
            };
        }
        return fn;
    };
}

exports.MaxPipe = (function () {
    function MaxPipe() {
        this.$parse = Parse();
    }
    MaxPipe.prototype.transform = function (input, predicate) {
        return isUndefined(predicate)
            ? Math.max.apply(Math, input)
            : input[this.index(input, this.$parse(predicate))];
    };
    MaxPipe.prototype.index = function (input, fn) {
        var mappedArray = input.map(function (elm) { return fn(elm) || -Infinity; });
        return mappedArray.indexOf(Math.max.apply(Math, mappedArray));
    };
    return MaxPipe;
}());
exports.MaxPipe = __decorate([
    _angular_core.Pipe({
        name: 'max'
    }),
    __metadata("design:paramtypes", [])
], exports.MaxPipe);

exports.MinPipe = (function () {
    function MinPipe() {
        this.$parse = Parse();
    }
    MinPipe.prototype.transform = function (input, predicate) {
        return isUndefined(predicate)
            ? Math.min.apply(Math, input)
            : input[this.index(input, this.$parse(predicate))];
    };
    MinPipe.prototype.index = function (input, fn) {
        var mappedArray = input.map(function (elm) { return fn(elm) || Infinity; });
        return mappedArray.indexOf(Math.min.apply(Math, mappedArray));
    };
    return MinPipe;
}());
exports.MinPipe = __decorate([
    _angular_core.Pipe({
        name: 'min'
    }),
    __metadata("design:paramtypes", [])
], exports.MinPipe);

exports.PercentPipe = (function () {
    function PercentPipe() {
    }
    PercentPipe.prototype.transform = function (input, divided, round) {
        if (divided === void 0) { divided = 100; }
        if (round === void 0) { round = false; }
        var divider = input;
        if (isString(input)) {
            divider = Number(input);
        }
        if (!isNumber(divider) || isNaN(divider)) {
            return input;
        }
        return round
            ? Math.round((divider / divided) * 100)
            : (divider / divided) * 100;
    };
    return PercentPipe;
}());
exports.PercentPipe = __decorate([
    _angular_core.Pipe({
        name: 'percent'
    })
], exports.PercentPipe);

exports.RadiansPipe = (function () {
    function RadiansPipe() {
    }
    RadiansPipe.prototype.transform = function (degrees, decimal) {
        // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
        // if degrees is not a real number, we cannot do also. quit with error "NaN"
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(degrees) && isFinite(degrees)) {
            var radians = (degrees * 3.14159265359) / 180;
            return Math.round(radians * Math.pow(10, decimal)) / (Math.pow(10, decimal));
        }
        return NaN;
    };
    return RadiansPipe;
}());
exports.RadiansPipe = __decorate([
    _angular_core.Pipe({
        name: 'radians'
    })
], exports.RadiansPipe);

exports.RadixPipe = (function () {
    function RadixPipe() {
    }
    RadixPipe.prototype.transform = function (input, radix) {
        var RANGE = /^[2-9]$|^[1-2]\d$|^3[0-6]$/;
        if (!isNumber(input) || !RANGE.test(radix.toString())) {
            return input;
        }
        return input.toString(radix).toUpperCase();
    };
    return RadixPipe;
}());
exports.RadixPipe = __decorate([
    _angular_core.Pipe({
        name: 'radix'
    })
], exports.RadixPipe);

exports.ShortFmtPipe = (function () {
    function ShortFmtPipe() {
    }
    ShortFmtPipe.prototype.transform = function (number, decimal) {
        if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
            isNumber(number) && isFinite(number)) {
            if (number < 1e3) {
                return '' + number; // Coerce to string
            }
            else if (number < 1e6) {
                return convertToDecimal((number / 1e3), decimal) + ' K';
            }
            else if (number < 1e9) {
                return convertToDecimal((number / 1e6), decimal) + ' M';
            }
            else {
                return convertToDecimal((number / 1e9), decimal) + ' B';
            }
        }
        return 'NaN';
    };
    return ShortFmtPipe;
}());
exports.ShortFmtPipe = __decorate([
    _angular_core.Pipe({
        name: 'shortFmt'
    })
], exports.ShortFmtPipe);

exports.SumPipe = (function () {
    function SumPipe() {
    }
    SumPipe.prototype.transform = function (array, initial) {
        if (initial === void 0) { initial = 0; }
        if (!isArray(array)) {
            return array;
        }
        return array.reduce(function (prev, curr) {
            return prev + curr;
        }, initial);
    };
    return SumPipe;
}());
exports.SumPipe = __decorate([
    _angular_core.Pipe({
        name: 'sum'
    })
], exports.SumPipe);

exports.MathPipesModule = (function () {
    function MathPipesModule() {
    }
    return MathPipesModule;
}());
exports.MathPipesModule = __decorate([
    _angular_core.NgModule({
        declarations: [
            exports.AbsPipe,
            exports.ByteFmtPipe,
            exports.KBFmtPipe,
            exports.DegreesPipe,
            exports.MaxPipe,
            exports.MinPipe,
            exports.PercentPipe,
            exports.RadiansPipe,
            exports.RadixPipe,
            exports.ShortFmtPipe,
            exports.SumPipe,
        ],
        exports: [
            exports.AbsPipe,
            exports.ByteFmtPipe,
            exports.KBFmtPipe,
            exports.DegreesPipe,
            exports.MaxPipe,
            exports.MinPipe,
            exports.PercentPipe,
            exports.RadiansPipe,
            exports.RadixPipe,
            exports.ShortFmtPipe,
            exports.SumPipe,
        ]
    })
], exports.MathPipesModule);

exports.EndsWithPipe = (function () {
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
exports.EndsWithPipe = __decorate([
    _angular_core.Pipe({
        name: 'endsWith'
    })
], exports.EndsWithPipe);

exports.StartsWithPipe = (function () {
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
exports.StartsWithPipe = __decorate([
    _angular_core.Pipe({
        name: 'startsWith'
    })
], exports.StartsWithPipe);

exports.LatinizePipe = (function () {
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
exports.LatinizePipe = __decorate([
    _angular_core.Pipe({
        name: 'latinize'
    }),
    __metadata("design:paramtypes", [])
], exports.LatinizePipe);

exports.LeftTrimPipe = (function () {
    function LeftTrimPipe() {
    }
    LeftTrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp('^' + chars + '+'), '');
    };
    return LeftTrimPipe;
}());
exports.LeftTrimPipe = __decorate([
    _angular_core.Pipe({
        name: 'ltrim'
    })
], exports.LeftTrimPipe);

exports.RightTrimPipe = (function () {
    function RightTrimPipe() {
    }
    RightTrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp(chars + '+$'), '');
    };
    return RightTrimPipe;
}());
exports.RightTrimPipe = __decorate([
    _angular_core.Pipe({
        name: 'rtrim'
    })
], exports.RightTrimPipe);

exports.TrimPipe = (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (input, chars) {
        if (chars === void 0) { chars = '\\s'; }
        return input.replace(new RegExp('^' + chars + '+|' + chars + '+$', 'g'), '');
    };
    return TrimPipe;
}());
exports.TrimPipe = __decorate([
    _angular_core.Pipe({
        name: 'trim'
    })
], exports.TrimPipe);

exports.MatchPipe = (function () {
    function MatchPipe() {
    }
    MatchPipe.prototype.transform = function (input, pattern, flag) {
        return input.match(new RegExp(pattern, flag));
    };
    return MatchPipe;
}());
exports.MatchPipe = __decorate([
    _angular_core.Pipe({
        name: 'match'
    })
], exports.MatchPipe);

exports.RepeatPipe = (function () {
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
exports.RepeatPipe = __decorate([
    _angular_core.Pipe({
        name: 'repeat'
    })
], exports.RepeatPipe);

exports.SlugifyPipe = (function () {
    function SlugifyPipe() {
    }
    SlugifyPipe.prototype.transform = function (input, sub) {
        if (sub === void 0) { sub = '-'; }
        return input.toLowerCase().replace(/\s+/g, sub);
    };
    return SlugifyPipe;
}());
exports.SlugifyPipe = __decorate([
    _angular_core.Pipe({
        name: 'slugify'
    })
], exports.SlugifyPipe);

exports.StringularPipe = (function () {
    function StringularPipe() {
    }
    StringularPipe.prototype.transform = function (template) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return template.replace(/{(\d+)}/g, function (match, number) {
            return isUndefined(args[number]) ? match : args[number];
        });
    };
    return StringularPipe;
}());
exports.StringularPipe = __decorate([
    _angular_core.Pipe({
        name: 'stringular'
    })
], exports.StringularPipe);

exports.StripTagsPipe = (function () {
    function StripTagsPipe() {
    }
    StripTagsPipe.prototype.transform = function (input) {
        return input.replace(/<\S[^><]*>/g, '');
    };
    return StripTagsPipe;
}());
exports.StripTagsPipe = __decorate([
    _angular_core.Pipe({
        name: 'stripTags'
    })
], exports.StripTagsPipe);

exports.TestPipe = (function () {
    function TestPipe() {
    }
    TestPipe.prototype.transform = function (input, pattern, flag) {
        return new RegExp(pattern, flag).test(input);
    };
    return TestPipe;
}());
exports.TestPipe = __decorate([
    _angular_core.Pipe({
        name: 'test'
    })
], exports.TestPipe);

exports.TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (input, length, suffix, preserve) {
        if (suffix === void 0) { suffix = ''; }
        if (preserve === void 0) { preserve = false; }
        if (isUndefined(length) || length >= input.length) {
            return input;
        }
        return input.substring(0, preserve
            ? (input.indexOf(' ', length) == -1 ? input.length : input.indexOf(' ', length))
            : length) + suffix;
    };
    return TruncatePipe;
}());
exports.TruncatePipe = __decorate([
    _angular_core.Pipe({
        name: 'truncate'
    })
], exports.TruncatePipe);

exports.UcfirstPipe = (function () {
    function UcfirstPipe() {
    }
    UcfirstPipe.prototype.transform = function (input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
    return UcfirstPipe;
}());
exports.UcfirstPipe = __decorate([
    _angular_core.Pipe({
        name: 'ucfirst'
    })
], exports.UcfirstPipe);

exports.TitleizePipe = (function () {
    function TitleizePipe() {
    }
    TitleizePipe.prototype.transform = function (input) {
        return input.split(' ')
            .map(function (w) { return w.charAt(0).toUpperCase() + w.substring(1).toLowerCase(); })
            .join(' ');
    };
    return TitleizePipe;
}());
exports.TitleizePipe = __decorate([
    _angular_core.Pipe({
        name: 'titleize'
    })
], exports.TitleizePipe);

exports.UriComponentEncodePipe = (function () {
    function UriComponentEncodePipe() {
    }
    UriComponentEncodePipe.prototype.transform = function (input) {
        return encodeURIComponent(input);
    };
    return UriComponentEncodePipe;
}());
exports.UriComponentEncodePipe = __decorate([
    _angular_core.Pipe({
        name: 'uriComponentEncode'
    })
], exports.UriComponentEncodePipe);

exports.UriEncodePipe = (function () {
    function UriEncodePipe() {
    }
    UriEncodePipe.prototype.transform = function (input) {
        return encodeURI(input);
    };
    return UriEncodePipe;
}());
exports.UriEncodePipe = __decorate([
    _angular_core.Pipe({
        name: 'uriEncode'
    })
], exports.UriEncodePipe);

exports.WrapPipe = (function () {
    function WrapPipe() {
    }
    WrapPipe.prototype.transform = function (input, wrap, ends) {
        if (wrap === void 0) { wrap = ''; }
        if (ends === void 0) { ends = ''; }
        return '' + wrap + input + (ends || wrap);
    };
    return WrapPipe;
}());
exports.WrapPipe = __decorate([
    _angular_core.Pipe({
        name: 'wrap'
    })
], exports.WrapPipe);

exports.StringPipesModule = (function () {
    function StringPipesModule() {
    }
    return StringPipesModule;
}());
exports.StringPipesModule = __decorate([
    _angular_core.NgModule({
        declarations: [
            exports.EndsWithPipe,
            exports.StartsWithPipe,
            exports.LatinizePipe,
            exports.LeftTrimPipe,
            exports.TrimPipe,
            exports.RightTrimPipe,
            exports.MatchPipe,
            exports.TestPipe,
            exports.RepeatPipe,
            exports.SlugifyPipe,
            exports.StringularPipe,
            exports.StripTagsPipe,
            exports.TruncatePipe,
            exports.UcfirstPipe,
            exports.TitleizePipe,
            exports.UriEncodePipe,
            exports.UriComponentEncodePipe,
            exports.WrapPipe,
        ],
        exports: [
            exports.EndsWithPipe,
            exports.LatinizePipe,
            exports.StartsWithPipe,
            exports.LeftTrimPipe,
            exports.RightTrimPipe,
            exports.TrimPipe,
            exports.MatchPipe,
            exports.TestPipe,
            exports.RepeatPipe,
            exports.SlugifyPipe,
            exports.StringularPipe,
            exports.StripTagsPipe,
            exports.TruncatePipe,
            exports.UcfirstPipe,
            exports.TitleizePipe,
            exports.UriEncodePipe,
            exports.UriComponentEncodePipe,
            exports.WrapPipe,
        ]
    })
], exports.StringPipesModule);

exports.IsNullPipe = (function () {
    function IsNullPipe() {
    }
    IsNullPipe.prototype.transform = function (input) {
        return isNull(input);
    };
    return IsNullPipe;
}());
exports.IsNullPipe = __decorate([
    _angular_core.Pipe({
        name: 'isNull'
    })
], exports.IsNullPipe);

exports.BooleanPipesModule = (function () {
    function BooleanPipesModule() {
    }
    return BooleanPipesModule;
}());
exports.BooleanPipesModule = __decorate([
    _angular_core.NgModule({
        declarations: [
            exports.IsNullPipe,
        ],
        exports: [
            exports.IsNullPipe,
        ]
    })
], exports.BooleanPipesModule);

exports.AfterWherePipe = (function () {
    function AfterWherePipe() {
    }
    AfterWherePipe.prototype.transform = function (collection, object) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        var index = collection.map(function (e) { return objectContains(object, e); }).indexOf(true);
        return collection.slice(index == -1 ? 0 : index);
    };
    return AfterWherePipe;
}());
exports.AfterWherePipe = __decorate([
    _angular_core.Pipe({
        name: 'afterWhere'
    })
], exports.AfterWherePipe);

exports.BeforeWherePipe = (function () {
    function BeforeWherePipe() {
    }
    BeforeWherePipe.prototype.transform = function (collection, object) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        var index = collection.map(function (e) { return objectContains(object, e); }).indexOf(true);
        return collection.slice(0, index == -1 ? collection.length : index + 1);
    };
    return BeforeWherePipe;
}());
exports.BeforeWherePipe = __decorate([
    _angular_core.Pipe({
        name: 'beforeWhere'
    })
], exports.BeforeWherePipe);

exports.AfterPipe = (function () {
    function AfterPipe() {
    }
    AfterPipe.prototype.transform = function (collection, count) {
        if (count === void 0) { count = 0; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.slice(count);
    };
    return AfterPipe;
}());
exports.AfterPipe = __decorate([
    _angular_core.Pipe({
        name: 'after'
    })
], exports.AfterPipe);

exports.BeforePipe = (function () {
    function BeforePipe() {
    }
    BeforePipe.prototype.transform = function (collection, count) {
        if (count === void 0) { count = 1; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.slice(0, count - 1);
    };
    return BeforePipe;
}());
exports.BeforePipe = __decorate([
    _angular_core.Pipe({
        name: 'before'
    })
], exports.BeforePipe);

exports.ChunkByPipe = (function () {
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
            return !isUndefined(fillVal) && el.length < n
                ? el.concat(fill(n - el.length, fillVal))
                : el;
        })
            .slice(0, Math.ceil(array.length / n));
    };
    return ChunkByPipe;
}());
exports.ChunkByPipe = __decorate([
    _angular_core.Pipe({
        name: 'chunkBy'
    })
], exports.ChunkByPipe);

exports.ConcatPipe = (function () {
    function ConcatPipe() {
    }
    ConcatPipe.prototype.transform = function (collection, joined) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(joined)) {
            joined = toArray(joined);
        }
        return collection.concat(joined);
    };
    return ConcatPipe;
}());
exports.ConcatPipe = __decorate([
    _angular_core.Pipe({
        name: 'concat'
    })
], exports.ConcatPipe);

exports.ContainsPipe = (function () {
    function ContainsPipe() {
        this.$parse = Parse();
    }
    ContainsPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return collection.some(function (e) { return isFunction(predicate) || (isString(predicate) && isObject(e))
            ? _this.$parse(predicate)(e)
            : e === predicate; });
    };
    return ContainsPipe;
}());
exports.ContainsPipe = __decorate([
    _angular_core.Pipe({
        name: 'contains'
    }),
    __metadata("design:paramtypes", [])
], exports.ContainsPipe);

exports.CountByPipe = (function () {
    function CountByPipe() {
        this.$parse = Parse();
    }
    CountByPipe.prototype.transform = function (collection, predicate) {
        var result = {}, getter = this.$parse(predicate);
        if (!isArray(collection)) {
            collection = toArray(collection);
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
exports.CountByPipe = __decorate([
    _angular_core.Pipe({
        name: 'countBy'
    }),
    __metadata("design:paramtypes", [])
], exports.CountByPipe);

exports.DefaultsPipe = (function () {
    function DefaultsPipe() {
        this.$parse = Parse();
    }
    DefaultsPipe.prototype.transform = function (collection, defaults) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        var getters = deepKeys(defaults).map(function (key) { return _this.$parse(key); });
        collection.forEach(function (elm) {
            getters.forEach(function (getter) {
                if (isUndefined(getter(elm))) {
                    getter.assign(elm, getter(defaults));
                }
            });
        });
        return collection;
    };
    return DefaultsPipe;
}());
exports.DefaultsPipe = __decorate([
    _angular_core.Pipe({
        name: 'defaults'
    }),
    __metadata("design:paramtypes", [])
], exports.DefaultsPipe);

exports.EveryPipe = (function () {
    function EveryPipe() {
        this.$parse = Parse();
    }
    EveryPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return collection.every(function (e) { return isFunction(predicate) || (isString(predicate) && isObject(e))
            ? _this.$parse(predicate)(e)
            : e === predicate; });
    };
    return EveryPipe;
}());
exports.EveryPipe = __decorate([
    _angular_core.Pipe({
        name: 'every'
    }),
    __metadata("design:paramtypes", [])
], exports.EveryPipe);

exports.FilterByPipe = (function () {
    function FilterByPipe() {
        this.$parse = Parse();
    }
    FilterByPipe.prototype.transform = function (collection, properties, search, strict) {
        var _this = this;
        if (strict === void 0) { strict = false; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        search = isString(search) || isNumber(search)
            ? String(search).toLowerCase()
            : undefined;
        if (!isArray(collection) || isUndefined(search)) {
            return collection;
        }
        if (isString(search) || isNumber(search)) {
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
                if (!isString(comparator) && !isNumber(comparator)) {
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
exports.FilterByPipe = __decorate([
    _angular_core.Pipe({
        name: 'filterBy'
    }),
    __metadata("design:paramtypes", [])
], exports.FilterByPipe);

exports.FirstPipe = (function () {
    function FirstPipe() {
        this.$parse = Parse();
    }
    FirstPipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        var n = isNumber(args[0]) ? args[0] : 1, getter = !isNumber(args[0]) ? args[0] : !isNumber(args[1]) ? args[1] : undefined;
        return args.length
            ? getFirstMatches(collection, n, getter ? this.$parse(getter) : getter)
            : collection[0];
    };
    return FirstPipe;
}());
exports.FirstPipe = __decorate([
    _angular_core.Pipe({
        name: 'first'
    }),
    __metadata("design:paramtypes", [])
], exports.FirstPipe);

exports.FlattenPipe = (function () {
    function FlattenPipe() {
    }
    FlattenPipe.prototype.transform = function (collection, shallow) {
        if (shallow === void 0) { shallow = false; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
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
exports.FlattenPipe = __decorate([
    _angular_core.Pipe({
        name: 'flatten'
    })
], exports.FlattenPipe);

exports.FuzzyByPipe = (function () {
    function FuzzyByPipe() {
        this.$parse = Parse();
    }
    FuzzyByPipe.prototype.transform = function (collection, property, search, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection) || isUndefined(search)) {
            return collection;
        }
        var getter = this.$parse(property);
        return collection.filter(function (elm) {
            var prop = getter(elm);
            if (!isString(prop)) {
                return false;
            }
            if (!csensitive) {
                prop = prop.toLowerCase();
                search = search.toLowerCase();
            }
            return hasApproxPattern(prop, search) !== false;
        });
    };
    return FuzzyByPipe;
}());
exports.FuzzyByPipe = __decorate([
    _angular_core.Pipe({
        name: 'fuzzyBy'
    }),
    __metadata("design:paramtypes", [])
], exports.FuzzyByPipe);

exports.FuzzyPipe = (function () {
    function FuzzyPipe() {
    }
    FuzzyPipe.prototype.transform = function (collection, search, csensitive) {
        var _this = this;
        if (csensitive === void 0) { csensitive = false; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection) || isUndefined(search)) {
            return collection;
        }
        if (!csensitive) {
            search = search.toLowerCase();
        }
        return collection.filter(function (elm) {
            if (isString(elm)) {
                if (!csensitive) {
                    elm = elm.toLowerCase();
                }
                return hasApproxPattern(elm, search);
            }
            return isObject(elm) ? _this.hasApproximateKey(elm, search, csensitive) : false;
        });
    };
    FuzzyPipe.prototype.hasApproximateKey = function (object, search, csensitive) {
        if (csensitive === void 0) { csensitive = false; }
        return Object.keys(object).some(function (elm) {
            var prop = object[elm];
            if (!isString(prop)) {
                return false;
            }
            if (!csensitive) {
                prop = prop.toLowerCase();
            }
            return hasApproxPattern(prop, search);
        });
    };
    return FuzzyPipe;
}());
exports.FuzzyPipe = __decorate([
    _angular_core.Pipe({
        name: 'fuzzy'
    })
], exports.FuzzyPipe);

exports.GroupByPipe = (function () {
    function GroupByPipe() {
        this.$parse = Parse();
    }
    GroupByPipe.prototype.transform = function (collection, prop) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        var result = {}, getter = this.$parse(prop);
        collection.forEach(function (elm) {
            var prop = getter(elm);
            if (isUndefined(result[prop])) {
                result[prop] = [];
            }
            result[prop].push(elm);
        });
        return result;
    };
    return GroupByPipe;
}());
exports.GroupByPipe = __decorate([
    _angular_core.Pipe({
        name: 'groupBy'
    }),
    __metadata("design:paramtypes", [])
], exports.GroupByPipe);

exports.IsEmptyPipe = (function () {
    function IsEmptyPipe() {
    }
    IsEmptyPipe.prototype.transform = function (collection) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return isArray(collection) ? collection.length : 0;
    };
    return IsEmptyPipe;
}());
exports.IsEmptyPipe = __decorate([
    _angular_core.Pipe({
        name: 'isEmpty'
    })
], exports.IsEmptyPipe);

exports.JoinPipe = (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (collection, delimiter) {
        if (delimiter === void 0) { delimiter = ' '; }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return collection.join(String(delimiter));
    };
    return JoinPipe;
}());
exports.JoinPipe = __decorate([
    _angular_core.Pipe({
        name: 'join'
    })
], exports.JoinPipe);

exports.LastPipe = (function () {
    function LastPipe() {
        this.$parse = Parse();
    }
    LastPipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        collection = collection.slice().reverse();
        var n = isNumber(args[0]) ? args[0] : 1, getter = !isNumber(args[0]) ? args[0] : !isNumber(args[1]) ? args[1] : undefined;
        return args.length
            ? getFirstMatches(collection, n, getter ? this.$parse(getter) : getter).reverse()
            : collection[0];
    };
    return LastPipe;
}());
exports.LastPipe = __decorate([
    _angular_core.Pipe({
        name: 'last'
    }),
    __metadata("design:paramtypes", [])
], exports.LastPipe);

exports.MapPipe = (function () {
    function MapPipe() {
        this.$parse = Parse();
    }
    MapPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.map(function (e) { return _this.$parse(predicate)(e); });
    };
    return MapPipe;
}());
exports.MapPipe = __decorate([
    _angular_core.Pipe({
        name: 'map'
    }),
    __metadata("design:paramtypes", [])
], exports.MapPipe);

exports.OmitPipe = (function () {
    function OmitPipe() {
        this.$parse = Parse();
    }
    OmitPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.filter(function (e) { return !_this.$parse(predicate)(e); });
    };
    return OmitPipe;
}());
exports.OmitPipe = __decorate([
    _angular_core.Pipe({
        name: 'omit'
    }),
    __metadata("design:paramtypes", [])
], exports.OmitPipe);

exports.PickPipe = (function () {
    function PickPipe() {
        this.$parse = Parse();
    }
    PickPipe.prototype.transform = function (collection, predicate) {
        var _this = this;
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection)) {
            return collection;
        }
        return collection.filter(function (e) { return _this.$parse(predicate)(e); });
    };
    return PickPipe;
}());
exports.PickPipe = __decorate([
    _angular_core.Pipe({
        name: 'pick'
    }),
    __metadata("design:paramtypes", [])
], exports.PickPipe);

exports.RangePipe = (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (input, total, start, increment, cb) {
        if (total === void 0) { total = 0; }
        if (start === void 0) { start = 0; }
        if (increment === void 0) { increment = 1; }
        for (var i = 0; i < total; i++) {
            var j = start + i * increment;
            input.push(isFunction(cb) ? cb(j) : j);
        }
        return input;
    };
    return RangePipe;
}());
exports.RangePipe = __decorate([
    _angular_core.Pipe({
        name: 'range'
    })
], exports.RangePipe);

exports.RemoveWithPipe = (function () {
    function RemoveWithPipe() {
    }
    RemoveWithPipe.prototype.transform = function (collection, object) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection) || isUndefined(object)) {
            return collection;
        }
        return collection.filter(function (e) { return !objectContains(object, e); });
    };
    return RemoveWithPipe;
}());
exports.RemoveWithPipe = __decorate([
    _angular_core.Pipe({
        name: 'removeWith'
    })
], exports.RemoveWithPipe);

exports.RemovePipe = (function () {
    function RemovePipe() {
    }
    RemovePipe.prototype.transform = function (collection) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        return collection.filter(function (e) {
            return !args.some(function (c) { return equals(c, e); });
        });
    };
    return RemovePipe;
}());
exports.RemovePipe = __decorate([
    _angular_core.Pipe({
        name: 'remove'
    })
], exports.RemovePipe);

exports.ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (input) {
        if (isString(input)) {
            return input.split('').reverse().join('');
        }
        return isArray(input) ? input.slice().reverse() : input;
    };
    return ReversePipe;
}());
exports.ReversePipe = __decorate([
    _angular_core.Pipe({
        name: 'reverse'
    })
], exports.ReversePipe);

exports.SearchFieldPipe = (function () {
    function SearchFieldPipe() {
        this.$parse = Parse();
    }
    SearchFieldPipe.prototype.transform = function (collection) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(collection) || !args.length) {
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
exports.SearchFieldPipe = __decorate([
    _angular_core.Pipe({
        name: 'searchField'
    }),
    __metadata("design:paramtypes", [])
], exports.SearchFieldPipe);

exports.ToArrayPipe = (function () {
    function ToArrayPipe() {
    }
    ToArrayPipe.prototype.transform = function (collection, addKey) {
        if (addKey === void 0) { addKey = false; }
        if (!isObject(collection)) {
            return collection;
        }
        return addKey
            ? Object.keys(collection).map(function (key) {
                // TODO: object.assign polyfill
                var o = collection[key];
                o.$key = key;
                return o;
            })
            : toArray(collection);
    };
    return ToArrayPipe;
}());
exports.ToArrayPipe = __decorate([
    _angular_core.Pipe({
        name: 'toArray'
    })
], exports.ToArrayPipe);

exports.UniqPipe = (function () {
    function UniqPipe() {
        this.$parse = Parse();
    }
    UniqPipe.prototype.transform = function (collection, predicate) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (isUndefined(predicate)) {
            return collection.filter(function (e, i, self) { return self.indexOf(e) == i; });
        }
        var getter = this.$parse(predicate), uniqueItems = [];
        return collection.filter(function (e) {
            var v = getter(e);
            if (!isUndefined(v) && uniqueItems.some(function (ue) { return ue === v; })) {
                return false;
            }
            uniqueItems.push(v);
            return true;
        });
    };
    return UniqPipe;
}());
exports.UniqPipe = __decorate([
    _angular_core.Pipe({
        name: 'uniq'
    }),
    __metadata("design:paramtypes", [])
], exports.UniqPipe);

exports.WherePipe = (function () {
    function WherePipe() {
    }
    WherePipe.prototype.transform = function (collection, object) {
        if (!isArray(collection)) {
            collection = toArray(collection);
        }
        if (!isArray(collection) || isUndefined(object)) {
            return collection;
        }
        return collection.filter(function (e) { return objectContains(object, e); });
    };
    return WherePipe;
}());
exports.WherePipe = __decorate([
    _angular_core.Pipe({
        name: 'where'
    })
], exports.WherePipe);

exports.XORPipe = (function () {
    function XORPipe() {
        this.$parse = Parse();
    }
    XORPipe.prototype.transform = function (col1, col2, predicate) {
        var _this = this;
        col1 = !isArray(col1) ? toArray(col1) : col1;
        col2 = !isArray(col2) ? toArray(col2) : col2;
        if (!isArray(col1) || !isArray(col2)) {
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
            if (isUndefined(predicate)) {
                return dElm === el;
            }
            return getter(dElm) === getter(el);
        });
    };
    return XORPipe;
}());
exports.XORPipe = __decorate([
    _angular_core.Pipe({
        name: 'xor'
    }),
    __metadata("design:paramtypes", [])
], exports.XORPipe);

exports.OrderByPipe = (function () {
    function OrderByPipe() {
        this.$parse = Parse();
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
exports.OrderByPipe = __decorate([
    _angular_core.Pipe({
        name: 'orderBy'
    }),
    __metadata("design:paramtypes", [])
], exports.OrderByPipe);

exports.CollectionPipesModule = (function () {
    function CollectionPipesModule() {
    }
    return CollectionPipesModule;
}());
exports.CollectionPipesModule = __decorate([
    _angular_core.NgModule({
        declarations: [
            exports.AfterWherePipe,
            exports.BeforeWherePipe,
            exports.AfterPipe,
            exports.BeforePipe,
            exports.ChunkByPipe,
            exports.ConcatPipe,
            exports.ContainsPipe,
            exports.CountByPipe,
            exports.DefaultsPipe,
            exports.EveryPipe,
            exports.FilterByPipe,
            exports.FirstPipe,
            exports.FlattenPipe,
            exports.FuzzyByPipe,
            exports.FuzzyPipe,
            exports.GroupByPipe,
            exports.IsEmptyPipe,
            exports.JoinPipe,
            exports.LastPipe,
            exports.MapPipe,
            exports.OmitPipe,
            exports.PickPipe,
            exports.RangePipe,
            exports.RemoveWithPipe,
            exports.ReversePipe,
            exports.SearchFieldPipe,
            exports.RemovePipe,
            exports.ToArrayPipe,
            exports.UniqPipe,
            exports.WherePipe,
            exports.XORPipe,
            exports.OrderByPipe,
        ],
        exports: [
            exports.AfterWherePipe,
            exports.BeforeWherePipe,
            exports.AfterPipe,
            exports.BeforePipe,
            exports.ChunkByPipe,
            exports.ConcatPipe,
            exports.ContainsPipe,
            exports.CountByPipe,
            exports.DefaultsPipe,
            exports.EveryPipe,
            exports.FilterByPipe,
            exports.FirstPipe,
            exports.FlattenPipe,
            exports.FuzzyByPipe,
            exports.FuzzyPipe,
            exports.GroupByPipe,
            exports.IsEmptyPipe,
            exports.JoinPipe,
            exports.LastPipe,
            exports.MapPipe,
            exports.OmitPipe,
            exports.PickPipe,
            exports.RangePipe,
            exports.RemoveWithPipe,
            exports.ReversePipe,
            exports.SearchFieldPipe,
            exports.RemovePipe,
            exports.ToArrayPipe,
            exports.UniqPipe,
            exports.WherePipe,
            exports.XORPipe,
            exports.OrderByPipe,
        ]
    })
], exports.CollectionPipesModule);

exports.NgPipesModule = (function () {
    function NgPipesModule() {
    }
    return NgPipesModule;
}());
exports.NgPipesModule = __decorate([
    _angular_core.NgModule({
        exports: [
            exports.MathPipesModule,
            exports.StringPipesModule,
            exports.BooleanPipesModule,
            exports.CollectionPipesModule,
        ]
    })
], exports.NgPipesModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
