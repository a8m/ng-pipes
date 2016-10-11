import { Pipe, PipeTransform } from '@angular/core';
import {isNumber, isArray } from '../utils/utils';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(array: any, initial: number=0): any {
    if (!isArray(array)) {
      return array;
    }
    return array.reduce(function(prev: any, curr: any) {
      return prev + curr;
    }, initial);
  }
}
