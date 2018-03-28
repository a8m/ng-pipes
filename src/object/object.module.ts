import {NgModule} from '@angular/core';

import {InvertPipe} from './invert.pipe';
import {KeysPipe} from './keys.pipe';
import {ValuesPipe} from './values.pipe';

export {InvertPipe} from './invert.pipe';
export {KeysPipe} from './keys.pipe';
export {ValuesPipe} from './values.pipe';

@NgModule(
    {declarations: [InvertPipe, KeysPipe, ValuesPipe], exports: [InvertPipe, KeysPipe, ValuesPipe]})
export class ObjectPipesModule {
}
