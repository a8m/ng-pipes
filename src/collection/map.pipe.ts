import { Pipe, PipeTransform } from '@angular/core';
import { toArray, isArray } from '../utils/utils';
import { Parse } from '../utils/parse';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, predicate: any): any {
    if (!isArray(collection)) {
      collection = toArray(collection);
    }

    if (!isArray(collection)) {
      return collection;
    }

    return collection.map((e: any) => this.$parse(predicate)(e));
  }
}
