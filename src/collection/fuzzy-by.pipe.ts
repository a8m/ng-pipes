import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray, isString, isUndefined, hasApproxPattern } from '../utils/utils';
import { Parse } from '../utils/parse';

@Pipe({
  name: 'fuzzyBy'
})
export class FuzzyByPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, property: string, search?: any, csensitive: boolean = false): Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    if (!isArray(collection) || isUndefined(search)) {
      return collection;
    }

    let getter = this.$parse(property);

    return collection.filter((elm: string) => {
      let prop = getter(elm);
      if (!isString(prop)) {
        return false;
      }

      if (!csensitive) {
        prop = prop.toLowerCase();
        search = search.toLowerCase();
      }

      return hasApproxPattern(prop, search) !== false;
    });
  }
}
