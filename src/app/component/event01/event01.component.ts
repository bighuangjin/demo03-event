import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event01',
  templateUrl: './event01.component.html',
  styleUrls: ['./event01.component.css']
})
export class Event01Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleClick() {
    alert('hello!');
  }
  handleClick2(num) {
    alert('hello!' + num);
  }
}
