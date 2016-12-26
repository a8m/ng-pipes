import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from '../utils/utils';

@Pipe({
  name: 'radians'
})
export class RadiansPipe implements PipeTransform {
  transform(degrees: number, decimal: number): number {
    // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
    // if degrees is not a real number, we cannot do also. quit with error "NaN"
    if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
      isNumber(degrees) && isFinite(degrees)) {
      var radians = (degrees * 3.14159265359) / 180;
      return Math.round(radians * Math.pow(10, decimal)) / (Math.pow(10, decimal));
    }
    return NaN;
  }
}
