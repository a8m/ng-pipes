export const isArray = (value: any): boolean => Array.isArray(value);

export const isFunction = (value: any): boolean => typeof value === 'function';

export const isNil = (value: any): boolean => value === null || typeof value === 'undefined';

export const isNull = (value: any): boolean => value === null;

export const isNumber = (value: any): boolean => typeof value === 'number';

export const isObject = (value: any): boolean => typeof value === 'object';

export const isString = (value: any): boolean => typeof value === 'string';

export const isUndefined = (value: any): boolean => typeof value === 'undefined';

export function toArray(object: any): Array<any> {
  return isArray(object) ? object : Object.keys(object).map((key) => object[key]);
}

export const getPhone = (locale: string): any => {
  const phones: any = {
    'en-US': {
      'countryCode': '+1',
      'minLength': 10,
      'pattern': /^(\+?1[-\s]?)?(\(?\d{3}\)?)[-\s]?(\d{3})[-\s]?(\d{4})$/
    },
    'pt-BR': {
      'countryCode': '+55',
      'minLength': 11,
      'pattern': /^(\+?55[-\s]?)?(\([1-9][1-9]\)|[1-9][1-9])[-\s]?(9[1-9]\d{3})[-\s]?(\d{4})$/
    }
  };

  return phones[locale];
};

export const pad = (requiredLength: number, padChar: string = ' '): string =>
    padChar.repeat(requiredLength).slice(0, requiredLength);

export function equals(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }

  if (!isObject(a) || !isObject(b)) {
    return a === b;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  const hasOwn = Object.prototype.hasOwnProperty;

  for (const key of keysA) {
    if (!hasOwn.call(b, key) || !equals(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

export function objectContains(
    partial: {[key: string]: any}, object: {[key: string]: any}): boolean {
  return Object.keys(partial).every((key: string) => key in object && object[key] === partial[key]);
}

export function deepKeys(
    obj: {[key: string]: any}, stack: any[] = [], parent: any = null,
    intermediate: boolean = false): Array<string> {
  Object.keys(obj).forEach((el: string) => {
    // Escape . in the element name
    const escaped = el.replace(/\./g, '\\\.');
    // If it's a nested object
    if (isObject(obj[el]) && !isArray(obj[el])) {
      // Concatenate the new parent if exist
      const p = parent ? parent + '.' + el : parent;
      // Push intermediate parent key if flag is true
      if (intermediate) stack.push(parent ? p : escaped);
      deepKeys(obj[el], stack, p || escaped, intermediate);
    } else {
      // Create and save the key
      const key = parent ? parent + '.' + escaped : escaped;
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
export function getFirstMatches(array: any, n: number, getter: Function) {
  let count = 0;

  return array.filter((elm: any) => {
    const rest = !isUndefined(getter) ? count < n && getter(elm) : count < n;
    count = rest ? count + 1 : count;

    return rest;
  });
}

/**
 * @description
 * search for approximate pattern in string
 * @param word
 * @param pattern
 */
export function hasApproxPattern(word: string, pattern: string): boolean {
  let p = 0;
  for (let i = 0; i <= pattern.length; i++) {
    const index = indexOf(word, p, pattern.charAt(i));

    if (index === -1) return false;
    p += index + 1;
  }
  return true;
}

function indexOf(word: string, p: number, c: string): number {
  let j = 0;
  while ((p + j) <= word.length) {
    if (word.charAt(p + j) === c) return j;
    j++;
  }
  return -1;
}

export const convertToDecimal = (num: number, decimal: number): number => {
  return Math.round(num * Math.pow(10, decimal)) / (Math.pow(10, decimal));
};
