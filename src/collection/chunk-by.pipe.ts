import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from '../utils/utils';

@Pipe({name: 'chunkBy'})
export class ChunkByPipe implements PipeTransform {
  transform(array: Array<any>, n: number, fillVal?: any): Array<any> {
    function fill(n: number, val: any): Array<any> {
      let ret: Array<any> = [];
      while (n--) ret[n] = val;
      return ret;
    }

    return array
        .map((el, i, self) => {
          i = i * n;
          el = self.slice(i, i + n);
          return !isUndefined(fillVal) && el.length < n ? el.concat(fill(n - el.length, fillVal)) :
                                                          el;
        })
        .slice(0, Math.ceil(array.length / n));
  }
}
