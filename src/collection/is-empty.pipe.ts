import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray } from '../utils/utils';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {
  transform(collection: any): boolean {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    return isArray(collection) ? collection.length : 0;
  }
}
