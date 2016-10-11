import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {
  transform(input: string, ends?: string, csensitive: boolean = false): boolean {
    if (ends == '') {
      return true;
    }
    if (!csensitive) {
      input = input.toLowerCase();
      ends = ends.toLowerCase();
    }
    return input.substring(0, ends.length) == ends;
  }
}
