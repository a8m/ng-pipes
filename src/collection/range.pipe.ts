import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray, isFunction} from '../utils/utils';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {
  transform(input: number[], total: number=0, start: number=0, increment: number=1, cb?: Function): any {
    for (var i = 0; i < total; i++) {
      var j = start + i * increment;
      input.push(isFunction(cb) ? cb(j) : j);
    }
    return input;
  }
}
