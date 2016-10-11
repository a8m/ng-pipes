import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})
export class WrapPipe implements PipeTransform {
  transform(input: string, wrap: any='', ends: any=''): string {
    return '' + wrap + input + (ends || wrap);
  }
}
