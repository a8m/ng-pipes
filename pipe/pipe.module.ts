import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgPipesModule} from 'ng-pipes';

import {PipesModule} from '../pipes/pipes.module';

import {PipeComponent} from './pipe.component';

@NgModule({
  declarations: [PipeComponent],
  imports: [CommonModule, FormsModule, NgPipesModule, PipesModule],
  exports: [PipeComponent]
})
export class PipeModule {
}
