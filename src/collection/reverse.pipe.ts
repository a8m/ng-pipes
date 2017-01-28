import {Pipe, PipeTransform} from '@angular/core';
import {isArray, isString} from '../utils/utils';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(input: any): any {
    if (isString(input)) {
      return Array.from(input).reverse().join('');
    }

    return isArray(input) ? input.reverse() : input;
  }
}
