import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray } from '../utils/utils';

@Pipe({
  name: 'after'
})
export class AfterPipe implements PipeTransform {
  transform(collection: any, count: number = 0): Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    if (!isArray(collection)) {
      return collection;
    }
    return collection.slice(count);
  }
}
