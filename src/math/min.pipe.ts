import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from '../utils/utils';
import { Parse } from '../utils/parse';

@Pipe({
  name: 'min'
})
export class MinPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }
  transform(input: Array<any>, predicate?: any): any {
    return isUndefined(predicate)
      ? Math.min.apply(Math, input)
      : input[this.index(input, this.$parse(predicate))];
  }

  private index(input: Array<any>, fn: Function): number {
    var mappedArray = input.map((elm: any) => fn(elm) || Infinity);
    return mappedArray.indexOf(Math.min.apply(Math, mappedArray));
  }
}
