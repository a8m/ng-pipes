import {Pipe, PipeTransform} from '@angular/core';

import {isArray, isNil, isObject} from '../utils/utils';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(input: any): Array<any> {
    return isNil(input) || isArray(input) || !isObject(input) ? input : Object.keys(input);
  }
}
