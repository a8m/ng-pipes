import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rtrim'
})
export class RightTrimPipe implements PipeTransform {
  transform(input: string, chars: string='\\s') : string {
    return input.replace(new RegExp(chars + '+$'), '');
  }
}
