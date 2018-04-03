import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'npApplyPipe'})
export class ApplyPipePipe implements PipeTransform {
  transform(instance: any[], pipe: any): any {
    const pipeInstance = new pipe();
    if (!pipeInstance || !pipeInstance.transform) {
      return '';
    }
    return pipeInstance.tranform(...instance);
  }
}
