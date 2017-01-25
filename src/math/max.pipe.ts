import {Pipe, PipeTransform} from '@angular/core';

import {Parse} from '../utils/parse';
import {isUndefined} from '../utils/utils';

@Pipe({name: 'max'})
export class MaxPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }
  transform(input: Array<any>, predicate?: any): any {
    return isUndefined(predicate) ? Math.max.apply(Math, input) :
                                    input[this.index(input, this.$parse(predicate))];
  }

  private index(input: Array<any>, fn: Function): number {
    var mappedArray = input.map((elm: any) => fn(elm) || -Infinity);
    return mappedArray.indexOf(Math.max.apply(Math, mappedArray));
  }
}
