import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Event01Component } from './component/event01/event01.component';
import { PagerComponent } from './component/pager/pager.component';
import { DiyEvnetComponent } from './component/diy-evnet/diy-evnet.component';
import { Event03Component } from './component/event03/event03.component';
import { Event04Component } from './component/event04/event04.component';

@NgModule({
  declarations: [
    AppComponent,
    Event01Component,
    PagerComponent,
    DiyEvnetComponent,
    Event03Component,
    Event04Component
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
