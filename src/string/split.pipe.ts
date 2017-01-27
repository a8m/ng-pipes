import {Pipe, PipeTransform} from '@angular/core';

import {isString} from '../utils/utils';

@Pipe({name: 'split'})
export class SplitPipe implements PipeTransform {
  transform(input: string, separator: string = ' ', limit?: number): any {
    return !isString(input) ? input : input.split(separator, limit);
  }
}
