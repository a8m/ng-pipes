import {Pipe, PipeTransform} from '@angular/core';

import {isString} from '../utils/utils';

@Pipe({name: 'underscore'})
export class UnderscorePipe implements PipeTransform {
  transform(input: string): string {
    if (!isString(input)) return input;

    return input.replace(/\W/g, '').replace(
        /[A-Z]/g, (value, index) => index === 0 ? value.toLowerCase() : `_${value.toLowerCase()}`);
  }
}
