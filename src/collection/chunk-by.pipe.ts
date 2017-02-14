import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from '../utils/utils';

@Pipe({name: 'chunkBy'})
export class ChunkByPipe implements PipeTransform {
  transform(array: Array<any>, chunkSize: number, fillVal?: any): Array<any> {
    return array
        .map((el, i, self) => {
          i = i * chunkSize;
          el = self.slice(i, i + chunkSize);
          return !isUndefined(fillVal) && el.length < chunkSize ?
              el.concat(this.fill(chunkSize - el.length, fillVal)) :
              el;
        })
        .slice(0, Math.ceil(array.length / chunkSize));
  }

  fill(chunkSize: number, val: any): Array<any> {
    const ret: Array<any> = [];
    while (chunkSize--) ret[chunkSize] = val;
    return ret;
  }
}
