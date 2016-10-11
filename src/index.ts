import { NgModule } from '@angular/core';

import { MathPipesModule } from './math';
import { StringPipesModule } from './string';
import { BooleanPipesModule } from './boolean';
import { CollectionPipesModule } from './collection';

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
export class NgPipesModule {}
