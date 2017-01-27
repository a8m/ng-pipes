import {Pipe, PipeTransform} from '@angular/core';

import {isArray} from '../utils/utils';

@Pipe({name: 'isArray'})
export class IsArrayPipe implements PipeTransform {
  transform(input: any): boolean {
    return isArray(input);
  }
}
