import {Pipe, PipeTransform} from '@angular/core';

import {Parse} from '../utils/parse';
import {isArray, isUndefined, toArray} from '../utils/utils';

@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, property: string): {[key: string]: Array<any>} {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    let result: {[key: string]: Array<any>} = {}, getter = this.$parse(property);
    collection.forEach((elm: any) => {
      let prop = getter(elm);
      if (isUndefined(result[prop])) {
        result[prop] = [];
      }
      result[prop].push(elm);
    });
    return result;
  }
}
