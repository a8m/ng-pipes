import {Pipe, PipeTransform} from '@angular/core';

import {isArray, objectContains, toArray} from '../utils/utils';

@Pipe({name: 'beforeWhere'})
export class BeforeWherePipe implements PipeTransform {
  transform(collection: any, object: {[key: string]: any}): Array<any> {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    if (!isArray(collection)) {
      return collection;
    }

    let index =
        collection.map((e: {[key: string]: any}) => objectContains(object, e)).indexOf(true);

    return collection.slice(0, index == -1 ? collection.length : index + 1);
  }
}
