import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {
  transform(input: string, times: number=1, separator: string=''): string {
    let ret = input;
    while (--times) {
      ret += separator + input;
    }
    return ret;
  }
}
