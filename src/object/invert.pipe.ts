import {Pipe, PipeTransform} from '@angular/core';

import {isArray, isNil, isObject} from '../utils/utils';

@Pipe({name: 'invert'})
export class InvertPipe implements PipeTransform {
  transform(input: any): any {
    if (isNil(input) || isArray(input) || !isObject(input)) return input;

    const newObj: any = {};

    for (const obj in input) {
      if (!!!newObj[input[obj]]) {
        newObj[input[obj]] = [];
      }

      newObj[input[obj]].push(obj);
    }

    return newObj;
  }
}
