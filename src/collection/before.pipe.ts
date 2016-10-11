import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray } from '../utils/utils';

@Pipe({
  name: 'before'
})
export class BeforePipe implements PipeTransform {
  transform(collection: any, count: number=1): Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    if (!isArray(collection)) {
      return collection;
    }
    return collection.slice(0, count-1);
  }
}
