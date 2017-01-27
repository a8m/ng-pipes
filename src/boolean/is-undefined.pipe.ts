import {Pipe, PipeTransform} from '@angular/core';

import {isUndefined} from '../utils/utils';

@Pipe({name: 'isUndefined'})
export class IsUndefinedPipe implements PipeTransform {
  transform(input: any): boolean {
    return isUndefined(input);
  }
}
