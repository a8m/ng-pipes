import {isFunction, isString, isUndefined} from './utils';

function createGetterFn(pathKeys: string[]): Function {
  let fn: Function = null;
  for (let i = pathKeys.length - 1; i >= 0; i--) {
    if (fn === null) {
      fn = finalFn(pathKeys[i]);
    } else {
      fn = stepFn(pathKeys[i], fn);
    }
  }
  return fn;

  function finalFn(key: string) {
    return function(scope: {[key: string]: any}, local: {[key: string]: any}) {
      if (local && local.hasOwnProperty(key)) return local[key];
      if (scope) return scope[key];
    };
  }

  function stepFn(key: string, next: Function) {
    return function(scope: {[key: string]: any}, local: {[key: string]: any}) {
      return next(scope && scope[key], local && local[key]);
    };
  }
}

function setterFn(scope: {[key: string]: any}, path: string[], value: any): any {
  let s = scope;
  let i = 0;
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
 */
export function Parse() {
  const cache: {[key: string]: Function} = {};

  return function(exp: any): Function {
    let fn: any = function() {};

    if (isString(exp)) {
      const cacheKey = exp.trim();
      if (cacheKey in cache) {
        return cache[cacheKey];
      }
      const pathKeys = exp.split('.');
      fn = cache[cacheKey] = createGetterFn(pathKeys);
      fn.assign = function(scope: {[key: string]: any}, value: any) {
        return setterFn(scope, pathKeys, value);
      };
    } else if (isFunction(exp)) {
      fn = function(scope: {[key: string]: any}, local: {[key: string]: any}) {
        return exp(scope, local);
      };
    }

    return fn;
  };
}
