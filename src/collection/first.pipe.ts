import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray, getFirstMatches, isNumber } from '../utils/utils';
import { Parse } from '../utils/parse';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, ...args: any[]): any {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    let n: number = isNumber(args[0]) ? args[0] : 1
      , getter = !isNumber(args[0]) ? args[0] : !isNumber(args[1]) ? args[1] : undefined;

    return args.length
      ? getFirstMatches(collection, n, getter ? this.$parse(getter) : getter)
      : collection[0];
  }
}
