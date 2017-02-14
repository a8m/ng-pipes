import {NgModule} from '@angular/core';

import {ParameterDefaultPipe} from './parameter-default.pipe';
import {ParameterKindPipe} from './parameter-kind.pipe';

@NgModule({
  declarations: [ParameterDefaultPipe, ParameterKindPipe],
  exports: [ParameterDefaultPipe, ParameterKindPipe]
})
export class PipesModule {
}
