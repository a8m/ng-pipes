import {NgModule} from '@angular/core';

import {ParameterDefaultPipe} from './parameter-default.pipe';
import {ParameterTestDataPipe} from './parameter-test-data.pipe';
import {ParameterTypePipe} from './parameter-type.pipe';

@NgModule({
  declarations: [ParameterDefaultPipe, ParameterTypePipe, ParameterTestDataPipe],
  exports: [ParameterDefaultPipe, ParameterTypePipe, ParameterTestDataPipe]
})
export class PipesModule {
}
