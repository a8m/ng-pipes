import {Pipe, PipeTransform} from '@angular/core';

import {isString} from '../utils/utils';

@Pipe({name: 'isString'})
export class IsStringPipe implements PipeTransform {
  transform(input: any): boolean {
    return isString(input);
  }
}
