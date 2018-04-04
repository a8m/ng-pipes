import {NgModule} from '@angular/core';

import {BooleanPipesModule} from './boolean/boolean.module';
import {CollectionPipesModule} from './collection/collection.module';
import {MathPipesModule} from './math/math.module';
import {ObjectPipesModule} from './object/object.module';
import {StringPipesModule} from './string/string.module';

export {BooleanPipesModule} from './boolean/boolean.module';
export {CollectionPipesModule} from './collection/collection.module';
export {MathPipesModule} from './math/math.module';
export {ObjectPipesModule} from './object/object.module';
export {StringPipesModule} from './string/string.module';

@NgModule({
  exports: [
    BooleanPipesModule, CollectionPipesModule, MathPipesModule, ObjectPipesModule, StringPipesModule
  ]
})
export class NgPipesModule {}
