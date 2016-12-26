import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray, objectContains, isUndefined } from '../utils/utils';

@Pipe({
  name: 'removeWith'
})
export class RemoveWithPipe implements PipeTransform {
  transform(collection: any, object?: any): any {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    if (!isArray(collection) || isUndefined(object)) {
      return collection;
    }

    return collection.filter((e: any) => !objectContains(object, e));
  }
}
