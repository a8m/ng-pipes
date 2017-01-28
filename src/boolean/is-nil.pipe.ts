import {Pipe, PipeTransform} from '@angular/core';

import {isNil} from '../utils/utils';

@Pipe({name: 'isNil'})
export class IsNilPipe implements PipeTransform {
  transform(input: any): boolean {
    return isNil(input);
  }
}
