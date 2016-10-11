import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {
  transform(input: string): string {
    return input.substring(0, 1).toUpperCase() + input.substring(1);
  }
}
