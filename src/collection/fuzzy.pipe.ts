import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray, isString, isUndefined, hasApproxPattern, isObject } from '../utils/utils';

@Pipe({
  name: 'fuzzy'
})
export class FuzzyPipe implements PipeTransform {

  transform(collection: any, search: string, csensitive: boolean=false): Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    if(!isArray(collection) || isUndefined(search)) {
      return collection;
    }

    if (!csensitive) {
      search = search.toLowerCase();
    }

    return collection.filter((elm: any) => {
      if(isString(elm)) {
        if (!csensitive) {
          elm = elm.toLowerCase();
        }
        return hasApproxPattern(elm, search);
      }
      return isObject(elm) ? this.hasApproximateKey(elm, search, csensitive) : false;
    });
  }

  private hasApproximateKey(object: {[key: string]: any}, search: string, csensitive: boolean=false): boolean {
    return Object.keys(object).some((elm: string) => {
      let prop = object[elm];
      if (!isString(prop)) {
        return false;
      }
      if (!csensitive) {
        prop = prop.toLowerCase();
      }
      return hasApproxPattern(prop, search);
    });
  }
}
