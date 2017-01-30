import {NgModule} from '@angular/core';

import {KeysPipe} from './keys.pipe';
import {ValuesPipe} from './values.pipe';

export * from './keys.pipe';
export * from './values.pipe';

@NgModule({declarations: [KeysPipe, ValuesPipe], exports: [KeysPipe, ValuesPipe]})
export class ObjectPipesModule {
}
