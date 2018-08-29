import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Event01Component } from './component/event01/event01.component';
import { PagerComponent } from './component/pager/pager.component';

@NgModule({
  declarations: [
    AppComponent,
    Event01Component,
    PagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
