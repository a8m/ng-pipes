import {Pipe, PipeTransform} from '@angular/core';

import {Parse} from '../utils/parse';
import {getFirstMatches, isArray, isNumber, toArray} from '../utils/utils';

@Pipe({name: 'last'})
export class LastPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, ...args: any[]): any {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    if (!isArray(collection)) {
      return collection;
    }

    collection = collection.slice().reverse();

    let n: number = isNumber(args[0]) ? args[0] : 1,
           getter = !isNumber(args[0]) ? args[0] : !isNumber(args[1]) ? args[1] : undefined;

    return args.length
        // send reversed collection as arguments, and reverse it back
        ?
        getFirstMatches(collection, n, getter ? this.$parse(getter) : getter).reverse() :
        collection[0];
  }
}
