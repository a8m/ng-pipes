import {Pipe, PipeTransform} from '@angular/core';

import {convertToDecimal, isNumber} from '../utils/utils';

@Pipe({name: 'byteFmt'})
export class ByteFmtPipe implements PipeTransform {
  private compared: any;

  constructor() {
    this.compared = [{str: 'B', val: 1024}];
    ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'].forEach((el, i) => {
      this.compared.push({str: el, val: this.compared[i].val * 1024});
    });
  }
  transform(bytes: number, decimal: any): string {
    if (isNumber(decimal) && isFinite(decimal) && decimal % 1 === 0 && decimal >= 0 &&
        isNumber(bytes) && isFinite(bytes)) {
      var i = 0;
      while (i < this.compared.length - 1 && bytes >= this.compared[i].val) i++;
      bytes /= i > 0 ? this.compared[i - 1].val : 1;
      return convertToDecimal(bytes, decimal) + ' ' + this.compared[i].str;
    }
    return 'NaN';
  }
}
