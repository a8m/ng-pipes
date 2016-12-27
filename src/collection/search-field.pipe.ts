import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from '../utils/utils';
import { Parse } from '../utils/parse';

@Pipe({
  name: 'searchField'
})
export class SearchFieldPipe implements PipeTransform {
  private $parse: Function;

  constructor() {
    this.$parse = Parse();
  }

  transform(collection: any, ...args: any[]): any {

    if (!isArray(collection) || !args.length) {
      return collection;
    }

    return collection.map((member: any) => {
      let field = args.map((field: any) => this.$parse(field)(member)).join(' ');
      member.searchField = field;
      return member;
    });
  }
}
