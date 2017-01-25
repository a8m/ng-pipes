import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'endsWith'})
export class EndsWithPipe implements PipeTransform {
  transform(input: string, ends?: string, csensitive: boolean = false): boolean {
    if (ends == '') {
      return true;
    }
    if (!csensitive) {
      input = input.toLowerCase();
      ends = ends.toLowerCase();
    }
    return input.substring(input.length - ends.length) == ends;
  }
}
