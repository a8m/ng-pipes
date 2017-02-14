import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgPipesModule} from 'ng-pipes';

import {AppComponent} from './app.component';
import {PipeModule} from './pipe/pipe.module';
import {PipesModule} from './pipes/pipes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, NgPipesModule, PipeModule, PipesModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
