import {Pipe, PipeTransform} from '@angular/core';

import {isNumber} from '../utils/utils';

@Pipe({name: 'isNumber'})
export class IsNumberPipe implements PipeTransform {
  transform(input: any): boolean {
    return isNumber(input);
  }
}
