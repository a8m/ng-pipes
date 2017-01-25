import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {
  transform(input: string, chars: string = '\\s'): string {
    return input.replace(new RegExp('^' + chars + '+|' + chars + '+$', 'g'), '');
  }
}
