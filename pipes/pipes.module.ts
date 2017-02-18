import {NgModule} from '@angular/core';

import {ParameterDefaultPipe} from './parameter-default.pipe';
import {ParameterTypePipe} from './parameter-type.pipe';

@NgModule({
  declarations: [ParameterDefaultPipe, ParameterTypePipe],
  exports: [ParameterDefaultPipe, ParameterTypePipe]
})
export class PipesModule {
}
