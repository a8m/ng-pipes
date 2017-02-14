import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {PipesModule} from '../pipes/pipes.module';

import {PipeComponent} from './pipe.component';

@NgModule(
    {declarations: [PipeComponent], imports: [CommonModule, PipesModule], exports: [PipeComponent]})
export class PipeModule {
}
