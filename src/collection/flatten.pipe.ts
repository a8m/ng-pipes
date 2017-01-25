import {Pipe, PipeTransform} from '@angular/core';

import {isArray, toArray} from '../utils/utils';

@Pipe({name: 'flatten'})
export class FlattenPipe implements PipeTransform {
  transform(collection: any, shallow: boolean = false): any[] {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    if (!isArray(collection)) {
      return collection;
    }

    return shallow ? [].concat.apply([], collection) : this.flatten(collection);
  }

  private flatten(array: any[]): any[] {
    return array.reduce(
        (arr: any[], elm: any) =>
            elm instanceof Array ? arr.concat(this.flatten(elm)) : arr.concat(elm),
        []);
  }
}
