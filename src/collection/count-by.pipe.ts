import {Pipe, PipeTransform} from '@angular/core';

import {Parse} from '../utils/parse';
import {isArray, toArray} from '../utils/utils';

@Pipe({name: 'countBy'})
export class CountByPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, predicate: any): {[key: string]: number} {
    let result: {[key: string]: number} = {}, getter = this.$parse(predicate);
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    collection.forEach((elm: string) => {
      let prop = getter(elm);
      if (!(prop in result)) result[prop] = 0;
      result[prop]++;
    });

    return result;
  }
}
