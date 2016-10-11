import { Pipe, PipeTransform } from '@angular/core';
import { isArray, toArray, isUndefined } from '../utils/utils';
import { Parse } from '../utils/parse';

@Pipe({
  name: 'xor'
})
export class XORPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(col1: any, col2: any, predicate?: any): any {

    col1 = !isArray(col1) ? toArray(col1) : col1;
    col2 = !isArray(col2) ? toArray(col2) : col2;

    if(!isArray(col1) || !isArray(col2)) {
      return col1;
    }

    return col1.concat(col2)
      .filter((elm: any) => {
        return !(this.some(elm, col1, predicate) && this.some(elm, col2, predicate));
      });
    }

    // TODO: add equlity check using "equals()" instead of ===
    private some(el: any, col: Array<any>, predicate?: any) {
      let getter = this.$parse(predicate);
      return col.some((dElm: any) => {
        if (isUndefined(predicate)) {
          return dElm === el;
        }
        return getter(dElm) === getter(el);
      });
    }
}
