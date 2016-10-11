import { Pipe, PipeTransform } from '@angular/core';
import {isNumber, convertToDecimal} from '../utils/utils';

@Pipe({
  name: 'shortFmt'
})
export class ShortFmtPipe implements PipeTransform {
  transform(number: any, decimal: any): string {
    if(isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
        isNumber(number) && isFinite(number)){
        if(number < 1e3) {
          return '' + number;  // Coerce to string
        } else if(number < 1e6) {
          return convertToDecimal((number / 1e3), decimal) + ' K';
        } else if(number < 1e9){
          return convertToDecimal((number / 1e6), decimal) + ' M';
        } else {
          return convertToDecimal((number / 1e9), decimal) + ' B';
        }

      }
      return 'NaN';
  }
}
