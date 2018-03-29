import {Pipe, PipeTransform} from '@angular/core';
import {isNumber} from '../utils/utils';

@Pipe({name: 'radix'})
export class RadixPipe implements PipeTransform {
  transform(input: any, radix: number): string {
    let RANGE = /^[2-9]$|^[1-2]\d$|^3[0-6]$/;

    if (!isNumber(input) || !RANGE.test(radix.toString())) {
      return input.toString();
    }

    return input.toString(radix).toUpperCase();
  }
}
