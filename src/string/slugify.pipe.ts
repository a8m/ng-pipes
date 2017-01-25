import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'slugify'})
export class SlugifyPipe implements PipeTransform {
  transform(input: string, sub: any = '-'): string {
    return input.toLowerCase().replace(/\s+/g, sub);
  }
}
