import {NgModule} from '@angular/core';

import {BooleanPipesModule} from './boolean';
import {CollectionPipesModule} from './collection';
import {MathPipesModule} from './math';
import {ObjectPipesModule} from './object';
import {StringPipesModule} from './string';

export * from './boolean';
export * from './collection';
export * from './math';
export * from './object';
export * from './string';

@NgModule({
  exports: [
    BooleanPipesModule, CollectionPipesModule, MathPipesModule, ObjectPipesModule, StringPipesModule
  ]
})
export class NgPipesModule {
}
