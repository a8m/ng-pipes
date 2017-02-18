import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgPipesModule} from 'ng-pipes';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {PipeModule} from './pipe/pipe.module';
import {PipesModule} from './pipes/pipes.module';

@NgModule({
  declarations: [HeaderComponent, AppComponent],
  imports: [CommonModule, HttpModule, BrowserModule, NgPipesModule, PipeModule, PipesModule],
  bootstrap: [HeaderComponent, AppComponent]
})
export class AppModule {
}
