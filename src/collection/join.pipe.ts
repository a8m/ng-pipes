import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray } from '../utils/utils';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(collection: any, delimiter: any = ' '): string {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    return collection.join(String(delimiter));
  }
}
