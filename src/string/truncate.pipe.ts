import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from '../utils/utils';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(input: string, length?: any, suffix: string = '', preserve: boolean = false): string {
    if (isUndefined(length) || length >= input.length) {
      return input;
    }
    return input.substring(0, preserve
      ? (input.indexOf(' ', length) == -1 ? input.length : input.indexOf(' ', length))
      : length) + suffix;
  }
}
