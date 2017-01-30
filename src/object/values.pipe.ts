import {Pipe, PipeTransform} from '@angular/core';

import {isArray, isNil, isObject} from '../utils/utils';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
  transform(input: any): any {
    return isNil(input) || isArray(input) || !isObject(input) ?
        input :
        Object.keys(input).map(v => input[v]);
  }
}
