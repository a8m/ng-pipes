export function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}

export function isNull(value: any): boolean {
  return value === null;
}

export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

export function isString(value: any): boolean {
  return typeof value === 'string';
}

export function isObject(value: any): boolean {
  return typeof value === 'object';
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

export function toArray(object: any): Array<any> {
  return isArray(object) ? object : Object.keys(object).map((key) => {
    return object[key];
  });
}

export function equals(a: any, b: any) {
  if (a === b) {
    return true;
  }
  if (!(typeof a === 'object' && typeof b === 'object')) {
    return a === b;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }
  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!hasOwn.call(b, keysA[i]) || !equals(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

export function objectContains(
    partial: {[key: string]: any}, object: {[key: string]: any}): boolean {
  return Object.keys(partial).every((key: string) => {
    return key in object && object[key] == partial[key];
  });
}

export function deepKeys(
    obj: {[key: string]: any}, stack: any[] = [], parent: any = null,
    intermediate: boolean = false): string[] {
  Object.keys(obj).forEach(function(el) {
    // Escape . in the element name
    var escaped = el.replace(/\./g, '\\\.');
    // If it's a nested object
    if (isObject(obj[el]) && !isArray(obj[el])) {
      // Concatenate the new parent if exist
      var p = parent ? parent + '.' + el : parent;
      // Push intermediate parent key if flag is true
      if (intermediate) stack.push(parent ? p : escaped);
      deepKeys(obj[el], stack, p || escaped, intermediate);
    } else {
      // Create and save the key
      var key = parent ? parent + '.' + escaped : escaped;
      stack.push(key)
    }
  });
  return stack
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
export function getFirstMatches(array: any, n: number, getter: Function) {
  var count = 0;

  return array.filter((elm: any) => {
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
export function hasApproxPattern(word: string, pattern: string): boolean {
  function indexOf(word: string, p: number, c: string) {
    var j = 0;
    while ((p + j) <= word.length) {
      if (word.charAt(p + j) == c) return j;
      j++;
    }
    return -1;
  }
  var p = 0;
  for (var i = 0; i <= pattern.length; i++) {
    var index = indexOf(word, p, pattern.charAt(i));
    if (index == -1) return false;
    p += index + 1;
  }
  return true
}

export function convertToDecimal(num: number, decimal: number): number {
  return Math.round(num * Math.pow(10, decimal)) / (Math.pow(10, decimal));
}
