import {NgModule} from '@angular/core';

import {ParameterDefaultPipe} from './parameter-default.pipe';
import {TypePipe} from './type.pipe';
import { ApplyPipePipe } from './apply-pipe';

@NgModule({
  declarations: [ParameterDefaultPipe, TypePipe, ApplyPipePipe],
  exports: [ParameterDefaultPipe, TypePipe, ApplyPipePipe]
})
export class PipesModule {
}
