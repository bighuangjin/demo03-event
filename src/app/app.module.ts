import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Event01Component } from './component/event01/event01.component';
import { PagerComponent } from './component/pager/pager.component';
import { DiyEvnetComponent } from './component/diy-evnet/diy-evnet.component';

@NgModule({
  declarations: [
    AppComponent,
    Event01Component,
    PagerComponent,
    DiyEvnetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
