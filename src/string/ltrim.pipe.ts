import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ltrim'})
export class LeftTrimPipe implements PipeTransform {
  transform(input: string, chars: string = '\\s'): string {
    return input.replace(new RegExp('^' + chars + '+'), '')
  }
}
