import {Pipe, PipeTransform} from '@angular/core';

import {isObject} from '../utils/utils';

@Pipe({name: 'isObject'})
export class IsObjectPipe implements PipeTransform {
  transform(input: any): boolean {
    return isObject(input);
  }
}
