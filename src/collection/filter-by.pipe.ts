import {Pipe, PipeTransform} from '@angular/core';

import {Parse} from '../utils/parse';
import {isArray, isNumber, isString, isUndefined, toArray} from '../utils/utils';

@Pipe({name: 'filterBy'})
export class FilterByPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, properties: string[], search?: any, strict: boolean = false):
      Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    search = isString(search) || isNumber(search) ? String(search).toLowerCase() : undefined;

    if (!isArray(collection) || isUndefined(search)) {
      return collection;
    }

    if (isString(search) || isNumber(search)) {
      search = String(search).toLowerCase()
    }

    return collection.filter((elm: any) => {
      return properties.some((prop: string) => {
        /**
        * check if there are concatenate properties
        * example:
        * object: { first: 'foo', last:'bar' }
       * filterBy: ['first + last'] => search by full name(i.e 'foo bar')
       */
        let comparator: any;
        if (!~prop.indexOf('+')) {
          comparator = this.$parse(prop)(elm)
        } else {
          let propList = prop.replace(/\s+/g, '').split('+');
          comparator = propList.map((p: string) => this.$parse(p)(elm)).join(' ');
        }

        // TODO: boolean?
        if (!isString(comparator) && !isNumber(comparator)) {
          return false;
        }

        comparator = String(comparator).toLowerCase();

        // indentical or contains
        return strict ? comparator === search : comparator.indexOf(search) != -1;
      });
    });
  }
}
