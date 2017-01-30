import {Pipe, PipeTransform} from '@angular/core';

import {isArray, isNil, isNumber, toArray} from '../utils/utils';

@Pipe({name: 'mean'})
export class MeanPipe implements PipeTransform {
  transform(collection: any): number {
    if (isNil(collection)) return collection;

    let arr: Array<any> = collection;

    if (!isArray(collection)) {
      arr = toArray(collection);
    }

    if (!isArray(arr) || arr.length === 0) return undefined;

    const reduce: number = arr.reduce((prev, curr) => prev + curr, 0);

    return isNumber(reduce) ? reduce / arr.length : 0;
  }
}
