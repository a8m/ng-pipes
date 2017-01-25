import {NgModule} from '@angular/core';

import {BooleanPipesModule} from './boolean';
import {CollectionPipesModule} from './collection';
import {MathPipesModule} from './math';
import {StringPipesModule} from './string';

export * from './math';
export * from './string';
export * from './boolean';
export * from './collection';

@NgModule({
  exports: [
    MathPipesModule,
    StringPipesModule,
    BooleanPipesModule,
    CollectionPipesModule,
  ]
})
export class NgPipesModule {
}
