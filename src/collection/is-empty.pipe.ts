import {Pipe, PipeTransform} from '@angular/core';

import {isArray, toArray} from '../utils/utils';

@Pipe({name: 'isEmpty'})
export class IsEmptyPipe implements PipeTransform {
  transform(collection: any): number {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }
    return isArray(collection) ? collection.length : 0;
  }
}
