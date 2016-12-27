import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isObject } from '../utils/utils';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {
  transform(collection: any, addKey: boolean = false): any {

    if (!isObject(collection)) {
      return collection;
    }

    return addKey
      ? Object.keys(collection).map((key: string) => {
        // TODO: object.assign polyfill
        let o = collection[key];
        o.$key = key;
        return o;
      })
      : toArray(collection);
  }
}
