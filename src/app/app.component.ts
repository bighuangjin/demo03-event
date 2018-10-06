import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo03-event';
  dbl = '';
  dbl2 = '';
  handle(data) {
    console.log('触发事件啦！', data);
  }
}
