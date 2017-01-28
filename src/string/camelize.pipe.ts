import {Pipe, PipeTransform} from '@angular/core';

import {isString} from '../utils/utils';

@Pipe({name: 'camelize'})
export class CamelizePipe implements PipeTransform {
  transform(input: string, upperFirst: boolean = false): string {
    if (!isString(input)) return input;

    return input.toLowerCase()
        .split(/[-_\s]+/g)
        .filter(value => value !== '')
        .map(
            (value, index) => index === 0 && !!!upperFirst ?
                value :
                `${value.substring(0, 1).toUpperCase() + value.substring(1)}`)
        .join('');
  }
}
