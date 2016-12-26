import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from '../utils/utils';

@Pipe({
  name: 'stringular'
})
export class StringularPipe implements PipeTransform {
  transform(template: string, ...args: string[]): string {
    return template.replace(/{(\d+)}/g, (match, number) => {
      return isUndefined(args[number]) ? match : args[number];
    });
  }
}
