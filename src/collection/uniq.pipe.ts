import {Pipe, PipeTransform} from '@angular/core';

import {Parse} from '../utils/parse';
import {isArray, isUndefined, toArray} from '../utils/utils';

@Pipe({name: 'uniq'})
export class UniqPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, predicate?: any): any {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    if (isUndefined(predicate)) {
      return collection.filter((e: any, i: number, self: Array<any>) => self.indexOf(e) == i);
    }

    let getter = this.$parse(predicate), uniqueItems: Array<any> = [];
    return collection.filter((e: any) => {
      let v = getter(e);
      if (!isUndefined(v) && uniqueItems.some((ue: any) => ue === v)) {
        return false;
      }
      uniqueItems.push(v);
      return true;
    });
  }
}
