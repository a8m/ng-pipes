import {Pipe, PipeTransform} from '@angular/core';

import {isUndefined} from '../utils/utils';

@Pipe({name: 'isDefined'})
export class IsDefinedPipe implements PipeTransform {
  transform(input: any): boolean {
    return !isUndefined(input);
  }
}
