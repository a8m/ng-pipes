import {Pipe, PipeTransform} from '@angular/core';

import {Parse} from '../utils/parse';
import {isArray, isFunction, isObject, isString, toArray} from '../utils/utils';

@Pipe({name: 'every'})
export class EveryPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, predicate: any): Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    return collection.every(
        (e: any) => isFunction(predicate) || (isString(predicate) && isObject(e)) ?
            this.$parse(predicate)(e) :
            e === predicate);
  }
}
