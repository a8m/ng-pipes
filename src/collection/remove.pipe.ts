import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray, equals } from '../utils/utils';

@Pipe({
  name: 'remove'
})
export class RemovePipe implements PipeTransform {
  transform(collection: any,  ...args: any[]): any {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    return collection.filter((e: any) => {
      return !args.some((c: any) => equals(c, e));
    });
  }
}
