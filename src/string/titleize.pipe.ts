import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'titleize'})
export class TitleizePipe implements PipeTransform {
  transform(input: string): string {
    return input.split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
  }
}
